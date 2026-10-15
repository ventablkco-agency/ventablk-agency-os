"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const field=(data:FormData,key:string)=>{const v=data.get(key);return typeof v==="string"?v.trim():"";};
const statuses=["NEW","CONTACTED","QUALIFIED","PROPOSAL_SENT","NEGOTIATION","WON","LOST"] as const;
export async function saveLead(data:FormData){
 const id=field(data,"id"),organization=field(data,"organization"),contactName=field(data,"contactName"),email=field(data,"email"),phone=field(data,"phone"),source=field(data,"source"),service=field(data,"service"),status=field(data,"status"),valueRaw=field(data,"estimatedValue"),followRaw=field(data,"nextFollowUp"),notes=field(data,"notes");
 if(!organization)redirect("/leads?error=organization-required");
 if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))redirect("/leads?error=invalid-email");
 if(!statuses.includes(status as (typeof statuses)[number]))redirect("/leads?error=invalid-status");
 const estimatedValue=valueRaw?Number(valueRaw):null;
 if(estimatedValue!==null&&(!Number.isSafeInteger(estimatedValue)||estimatedValue<0))redirect("/leads?error=invalid-value");
 const nextFollowUp=followRaw?new Date(followRaw+"T12:00:00.000Z"):null;
 if(followRaw&&(!nextFollowUp||Number.isNaN(nextFollowUp.getTime())))redirect("/leads?error=invalid-date");
 const record={organization,contactName:contactName||null,email:email||null,phone:phone||null,source:source||null,service:service||null,status:status as (typeof statuses)[number],estimatedValue,nextFollowUp,notes:notes||null};
 if(id)await prisma.lead.update({where:{id},data:record});else await prisma.lead.create({data:record});
 for(const path of ["/","/leads","/clients"])revalidatePath(path);
 redirect("/leads?saved=1");
}

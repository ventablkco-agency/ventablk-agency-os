"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const field=(d:FormData,k:string)=>{const v=d.get(k);return typeof v==="string"?v.trim():"";};
const dateValue=(raw:string)=>raw?new Date(raw+"T12:00:00.000Z"):null;
export async function saveMaintenance(d:FormData){
 const id=field(d,"id"),name=field(d,"name"),clientId=field(d,"clientId"),projectId=field(d,"projectId"),feeRaw=field(d,"monthlyFee"),nextRaw=field(d,"nextBillingAt"),notes=field(d,"notes"),active=field(d,"active")==="on",nextBillingAt=dateValue(nextRaw),monthlyFee=Number(feeRaw);
 if(!name)redirect("/maintenance?error=name-required");if(!clientId)redirect("/maintenance?error=client-required");
 if(!Number.isSafeInteger(monthlyFee)||monthlyFee<0)redirect("/maintenance?error=invalid-fee");
 if(nextRaw&&(!nextBillingAt||Number.isNaN(nextBillingAt.getTime())))redirect("/maintenance?error=invalid-date");
 const client=await prisma.client.findUnique({where:{id:clientId},select:{id:true}});if(!client)redirect("/maintenance?error=client-not-found");
 if(projectId){const project=await prisma.project.findUnique({where:{id:projectId},select:{id:true,clientId:true}});if(!project)redirect("/maintenance?error=project-not-found");if(project.clientId!==clientId)redirect("/maintenance?error=project-client-mismatch");}
 const record={name,clientId,projectId:projectId||null,monthlyFee,nextBillingAt,active,notes:notes||null};
 if(id)await prisma.maintenancePlan.update({where:{id},data:record});else await prisma.maintenancePlan.create({data:record});
 for(const path of ["/","/maintenance","/clients","/projects"])revalidatePath(path);
 redirect("/maintenance?saved=1");
}

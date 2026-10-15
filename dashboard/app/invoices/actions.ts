"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const field=(d:FormData,k:string)=>{const v=d.get(k);return typeof v==="string"?v.trim():"";};
const statuses=["DRAFT","SENT","PARTIALLY_PAID","PAID","OVERDUE","VOID"] as const;
const dateValue=(raw:string)=>raw?new Date(raw+"T12:00:00.000Z"):null;
export async function saveInvoice(d:FormData){
 const id=field(d,"id"),invoiceNumber=field(d,"invoiceNumber"),description=field(d,"description"),clientId=field(d,"clientId"),projectId=field(d,"projectId"),status=field(d,"status"),amountRaw=field(d,"amount"),paidRaw=field(d,"amountPaid"),dueRaw=field(d,"dueDate"),dueDate=dateValue(dueRaw);
 if(!invoiceNumber)redirect("/invoices?error=number-required");if(!clientId)redirect("/invoices?error=client-required");
 if(!statuses.includes(status as (typeof statuses)[number]))redirect("/invoices?error=invalid-status");
 const amount=Number(amountRaw),amountPaid=paidRaw?Number(paidRaw):0;
 if(!Number.isSafeInteger(amount)||amount<=0||!Number.isSafeInteger(amountPaid)||amountPaid<0||amountPaid>amount)redirect("/invoices?error=invalid-amount");
 if(dueRaw&&(!dueDate||Number.isNaN(dueDate.getTime())))redirect("/invoices?error=invalid-date");
 const client=await prisma.client.findUnique({where:{id:clientId},select:{id:true}});if(!client)redirect("/invoices?error=client-not-found");
 if(projectId){const project=await prisma.project.findUnique({where:{id:projectId},select:{id:true,clientId:true}});if(!project)redirect("/invoices?error=project-not-found");if(project.clientId!==clientId)redirect("/invoices?error=project-client-mismatch");}
 const derivedStatus=amountPaid===amount&&status!=="VOID"?"PAID":amountPaid>0&&amountPaid<amount&&status!=="VOID"?"PARTIALLY_PAID":status;
 const record={invoiceNumber,description:description||null,clientId,projectId:projectId||null,status:derivedStatus as (typeof statuses)[number],amount,amountPaid,dueDate};
 try {if(id)await prisma.invoice.update({where:{id},data:record});else await prisma.invoice.create({data:record});}
 catch(e){if(e&&typeof e==="object"&&"code" in e&&(e as {code?:string}).code==="P2002")redirect("/invoices?error=duplicate-number");throw e;}
 for(const path of ["/","/invoices","/clients","/projects"])revalidatePath(path);
 redirect("/invoices?saved=1");
}

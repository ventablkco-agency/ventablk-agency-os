"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const field = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};
const dateOrNull = (raw: string) => {
  if (!raw) return null;
  const date = new Date(`${raw}T12:00:00.000Z`);
  return Number.isNaN(date.getTime()) ? null : date;
};
const statuses = ["DISCOVERY", "DESIGN", "CONTENT", "DEVELOPMENT", "QA", "LAUNCH", "MAINTENANCE", "ON_HOLD", "COMPLETED"] as const;

export async function saveProject(formData: FormData) {
  const id = field(formData, "id");
  const name = field(formData, "name");
  const clientId = field(formData, "clientId");
  const websiteUrl = field(formData, "websiteUrl");
  const repositoryUrl = field(formData, "repositoryUrl");
  const hosting = field(formData, "hosting");
  const status = field(formData, "status");
  const startDateRaw = field(formData, "startDate");
  const dueDateRaw = field(formData, "dueDate");
  const budgetRaw = field(formData, "budget");
  const notes = field(formData, "notes");

  if (!name) redirect("/projects?error=name-required");
  if (!clientId) redirect("/projects?error=client-required");
  if (!statuses.includes(status as (typeof statuses)[number])) redirect("/projects?error=invalid-status");
  for (const url of [websiteUrl, repositoryUrl]) {
    if (url && !/^https?:\/\//i.test(url)) redirect("/projects?error=invalid-url");
  }
  const budget = budgetRaw ? Number(budgetRaw) : null;
  if (budget !== null && (!Number.isSafeInteger(budget) || budget < 0)) redirect("/projects?error=invalid-budget");
  const startDate = dateOrNull(startDateRaw);
  const dueDate = dateOrNull(dueDateRaw);
  if ((startDateRaw && !startDate) || (dueDateRaw && !dueDate)) redirect("/projects?error=invalid-date");
  if (startDate && dueDate && dueDate < startDate) redirect("/projects?error=date-order");

  const client = await prisma.client.findUnique({ where: { id: clientId }, select: { id: true } });
  if (!client) redirect("/projects?error=client-not-found");

  const data = {
    name,
    clientId,
    websiteUrl: websiteUrl || null,
    repositoryUrl: repositoryUrl || null,
    hosting: hosting || null,
    status: status as (typeof statuses)[number],
    startDate,
    dueDate,
    budget,
    notes: notes || null,
  };

  if (id) {
    await prisma.project.update({ where: { id }, data });
  } else {
    await prisma.project.create({ data });
  }
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/clients");
  redirect("/projects?saved=1");
}

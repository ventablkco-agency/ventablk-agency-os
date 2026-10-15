"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const field = (data: FormData, key: string) => {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
};
const statuses = ["TODO", "IN_PROGRESS", "WAITING", "DONE"] as const;
const dateValue = (raw: string) => raw ? new Date(raw + "T12:00:00.000Z") : null;

export async function saveTask(formData: FormData) {
  const id = field(formData, "id");
  const title = field(formData, "title");
  const description = field(formData, "description");
  const projectId = field(formData, "projectId");
  const status = field(formData, "status");
  const dueRaw = field(formData, "dueDate");
  const dueDate = dateValue(dueRaw);
  if (!title) redirect("/tasks?error=title-required");
  if (!projectId) redirect("/tasks?error=project-required");
  if (!statuses.includes(status as (typeof statuses)[number])) redirect("/tasks?error=invalid-status");
  if (dueRaw && (!dueDate || Number.isNaN(dueDate.getTime()))) redirect("/tasks?error=invalid-date");
  const project = await prisma.project.findUnique({ where: { id: projectId }, select: { id: true } });
  if (!project) redirect("/tasks?error=project-not-found");
  const data = { title, description: description || null, projectId, status: status as (typeof statuses)[number], dueDate };
  if (id) await prisma.task.update({ where: { id }, data });
  else await prisma.task.create({ data });
  for (const path of ["/", "/tasks", "/projects"]) revalidatePath(path);
  redirect("/tasks?saved=1");
}

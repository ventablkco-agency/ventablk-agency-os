"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const text = (value: unknown, max = 500) => typeof value === "string" ? value.trim().slice(0, max) : "";
const validUrl = (value: string) => !value || /^https?:\/\//i.test(value);
const projectStatuses = ["DISCOVERY", "DESIGN", "CONTENT", "DEVELOPMENT", "QA", "LAUNCH", "MAINTENANCE", "ON_HOLD", "COMPLETED"] as const;

export async function importProjectManifest(formData: FormData) {
  const upload = formData.get("manifest");
  if (!(upload instanceof File) || upload.size === 0) redirect("/import?error=file-required");
  if (upload.size > 64 * 1024) redirect("/import?error=file-too-large");

  let manifest: unknown;
  try {
    manifest = JSON.parse(await upload.text());
  } catch {
    redirect("/import?error=invalid-json");
  }
  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) redirect("/import?error=invalid-shape");
  const root = manifest as Record<string, unknown>;
  const clientInput = root.client;
  const projectInput = root.project;
  if (!clientInput || typeof clientInput !== "object" || Array.isArray(clientInput) || !projectInput || typeof projectInput !== "object" || Array.isArray(projectInput)) {
    redirect("/import?error=missing-sections");
  }

  const client = clientInput as Record<string, unknown>;
  const project = projectInput as Record<string, unknown>;
  const organization = text(client.organization, 160);
  const name = text(client.name, 120);
  const email = text(client.email, 254);
  const phone = text(client.phone, 40);
  const clientWebsite = text(client.website, 500);
  const projectName = text(project.name, 160);
  const websiteUrl = text(project.websiteUrl, 500);
  const repositoryUrl = text(project.repositoryUrl, 500);
  const hosting = text(project.hosting, 120);
  const statusRaw = text(project.status, 40) || "DISCOVERY";
  const notes = text(project.notes, 3000);
  const budgetRaw = project.budget;
  const budget = budgetRaw === undefined || budgetRaw === null || budgetRaw === "" ? null : Number(budgetRaw);

  if (!name && !organization) redirect("/import?error=client-name-required");
  if (!projectName) redirect("/import?error=project-name-required");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) redirect("/import?error=invalid-email");
  if (!validUrl(clientWebsite) || !validUrl(websiteUrl) || !validUrl(repositoryUrl)) redirect("/import?error=invalid-url");
  if (!projectStatuses.includes(statusRaw as (typeof projectStatuses)[number])) redirect("/import?error=invalid-status");
  if (budget !== null && (!Number.isSafeInteger(budget) || budget < 0)) redirect("/import?error=invalid-budget");

  const clientRecord = await prisma.$transaction(async (tx) => {
    const existingClient = await tx.client.findFirst({
      where: email ? { email: { equals: email, mode: "insensitive" } } : {
        name: { equals: name || organization, mode: "insensitive" },
        organization: organization ? { equals: organization, mode: "insensitive" } : null,
      },
      orderBy: { createdAt: "asc" },
    });

    const savedClient = existingClient
      ? await tx.client.update({
          where: { id: existingClient.id },
          data: {
            name: name || existingClient.name,
            organization: organization || existingClient.organization,
            email: email || existingClient.email,
            phone: phone || existingClient.phone,
            website: clientWebsite || existingClient.website,
          },
        })
      : await tx.client.create({
          data: {
            name: name || organization,
            organization: organization || null,
            email: email || null,
            phone: phone || null,
            website: clientWebsite || null,
          },
        });

    const existingProject = repositoryUrl
      ? await tx.project.findFirst({ where: { repositoryUrl }, orderBy: { createdAt: "asc" } })
      : await tx.project.findFirst({
          where: { clientId: savedClient.id, name: { equals: projectName, mode: "insensitive" } },
          orderBy: { createdAt: "asc" },
        });
    const projectData = {
      name: projectName,
      clientId: savedClient.id,
      websiteUrl: websiteUrl || null,
      repositoryUrl: repositoryUrl || null,
      hosting: hosting || null,
      status: statusRaw as (typeof projectStatuses)[number],
      budget,
      notes: notes || null,
    };
    const savedProject = existingProject
      ? await tx.project.update({ where: { id: existingProject.id }, data: projectData })
      : await tx.project.create({ data: projectData });
    return { client: savedClient, project: savedProject, updatedClient: Boolean(existingClient), updatedProject: Boolean(existingProject) };
  });

  revalidatePath("/");
  revalidatePath("/clients");
  revalidatePath("/projects");
  redirect(`/import?success=1&client=${clientRecord.updatedClient ? "updated" : "created"}&project=${clientRecord.updatedProject ? "updated" : "created"}`);
}

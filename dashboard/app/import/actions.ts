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


const normalizeRepositoryUrl = (value: string) => value.trim().replace(/\.git$/i, "").replace(/\/+$/, "").toLowerCase();
const isPlainObject = (value: unknown): value is Record<string, unknown> => Boolean(value) && typeof value === "object" && !Array.isArray(value);

export async function importRepositoryInventory(formData: FormData) {
  const rawInventory = formData.get("inventoryJson");
  const rawMappings = formData.get("mappingsJson");
  if (typeof rawInventory !== "string" || !rawInventory.trim()) redirect("/import?bulkError=inventory-required");
  if (rawInventory.length > 800_000) redirect("/import?bulkError=inventory-too-large");

  let inventory: unknown;
  let mappings: unknown;
  try {
    inventory = JSON.parse(rawInventory);
    mappings = typeof rawMappings === "string" ? JSON.parse(rawMappings) : null;
  } catch {
    redirect("/import?bulkError=invalid-json");
  }
  if (!isPlainObject(inventory) || inventory.schemaVersion !== 1 || !Array.isArray(inventory.repositories) || inventory.repositories.length > 250) {
    redirect("/import?bulkError=invalid-inventory");
  }
  if (!isPlainObject(mappings)) redirect("/import?bulkError=invalid-mappings");

  const repositories = inventory.repositories as unknown[];
  const map = mappings as Record<string, unknown>;
  const normalized = repositories.map((entry) => {
    if (!isPlainObject(entry)) return null;
    const sourceId = text(entry.sourceId, 500);
    const name = text(entry.name, 160);
    const repositoryUrl = text(entry.repositoryUrl, 500);
    const clientRaw = isPlainObject(entry.client) ? entry.client : null;
    const projectRaw = isPlainObject(entry.explicitProjectMetadata) ? entry.explicitProjectMetadata : null;
    const metadataClient = clientRaw ? {
      name: text(clientRaw.name, 120),
      organization: text(clientRaw.organization, 160),
    } : null;
    const metadataProject = projectRaw ? {
      name: text(projectRaw.name, 160),
      websiteUrl: text(projectRaw.websiteUrl, 500),
      hosting: text(projectRaw.hosting, 120),
      status: text(projectRaw.status, 40),
    } : null;
    const framework = text(entry.framework, 100);
    const directory = text(entry.directory, 400);
    const mapping = text(map[sourceId], 200);
    return { sourceId, name, repositoryUrl, metadataClient, metadataProject, framework, directory, mapping };
  });
  if (normalized.some((entry) => !entry || !entry.sourceId || !entry.name)) redirect("/import?bulkError=invalid-repository");
  const records = normalized as NonNullable<(typeof normalized)[number]>[];
  if (new Set(records.map((item) => item.sourceId)).size !== records.length) redirect("/import?bulkError=duplicate-source");
  for (const record of records) {
    if (record.repositoryUrl && !validUrl(record.repositoryUrl)) redirect("/import?bulkError=invalid-url");
    if (record.metadataProject?.websiteUrl && !validUrl(record.metadataProject.websiteUrl)) redirect("/import?bulkError=invalid-url");
    if (!record.mapping) redirect("/import?bulkError=unmapped-client");
    if (record.mapping === "__create__" && !(record.metadataClient?.name || record.metadataClient?.organization)) redirect("/import?bulkError=missing-client-metadata");
  }

  const outcome = await prisma.$transaction(async (tx) => {
    let createdProjects = 0;
    let updatedProjects = 0;
    let createdClients = 0;
    let skippedConflicts = 0;
    for (const record of records) {
      let existingProject = await tx.project.findFirst({ where: { sourceId: record.sourceId } });
      if (!existingProject && record.repositoryUrl) {
        const withRepository = await tx.project.findMany({ where: { repositoryUrl: { not: null } } });
        existingProject = withRepository.find((candidate) =>
          candidate.repositoryUrl && normalizeRepositoryUrl(candidate.repositoryUrl) === normalizeRepositoryUrl(record.repositoryUrl)
        ) || null;
      }

      let clientId: string;
      if (record.mapping === "__create__") {
        const name = record.metadataClient?.name || record.metadataClient?.organization || "";
        const organization = record.metadataClient?.organization || null;
        const existingClient = await tx.client.findFirst({
          where: {
            name: { equals: name, mode: "insensitive" },
            organization: organization ? { equals: organization, mode: "insensitive" } : null,
          },
          orderBy: { createdAt: "asc" },
        });
        if (existingProject && (!existingClient || existingProject.clientId !== existingClient.id)) {
          skippedConflicts += 1;
          continue;
        }
        const client = existingClient || await tx.client.create({ data: { name, organization } });
        if (!existingClient) createdClients += 1;
        clientId = client.id;
      } else {
        const existingClient = await tx.client.findUnique({ where: { id: record.mapping }, select: { id: true } });
        if (!existingClient) throw new Error("Selected client does not exist; refresh the import page and retry.");
        clientId = existingClient.id;
        if (existingProject && existingProject.clientId !== clientId) {
          skippedConflicts += 1;
          continue;
        }
      }

      const websiteUrl = record.metadataProject?.websiteUrl || null;
      const hosting = record.metadataProject?.hosting || null;
      if (existingProject) {
        if (existingProject.clientId !== clientId) {
          skippedConflicts += 1;
          continue;
        }
        await tx.project.update({
          where: { id: existingProject.id },
          data: {
            sourceId: existingProject.sourceId || record.sourceId,
            repositoryUrl: existingProject.repositoryUrl || record.repositoryUrl || null,
            websiteUrl: existingProject.websiteUrl || websiteUrl,
            hosting: existingProject.hosting || hosting,
          },
        });
        updatedProjects += 1;
      } else {
        await tx.project.create({
          data: {
            sourceId: record.sourceId,
            name: record.metadataProject?.name || record.name,
            clientId,
            repositoryUrl: record.repositoryUrl || null,
            websiteUrl,
            hosting,
            status: projectStatuses.includes(record.metadataProject?.status as (typeof projectStatuses)[number])
              ? record.metadataProject?.status as (typeof projectStatuses)[number]
              : "DISCOVERY",
          },
        });
        createdProjects += 1;
      }
    }
    return { createdProjects, updatedProjects, createdClients, skippedConflicts };
  });

  revalidatePath("/");
  revalidatePath("/clients");
  revalidatePath("/projects");
  redirect("/import?bulkSuccess=1&createdProjects=" + outcome.createdProjects + "&updatedProjects=" + outcome.updatedProjects + "&createdClients=" + outcome.createdClients + "&conflicts=" + outcome.skippedConflicts);
}

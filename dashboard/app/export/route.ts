import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const [clients, leads, projects, tasks, invoices, maintenancePlans] = await Promise.all([
    prisma.client.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.lead.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.project.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.task.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.invoice.findMany({ orderBy: { createdAt: "asc" } }),
    prisma.maintenancePlan.findMany({ orderBy: { createdAt: "asc" } }),
  ]);

  const payload = {
    exportedAt: new Date().toISOString(),
    formatVersion: 1,
    warning: "This file contains private agency and client information. Store it securely and never commit it to a public repository.",
    data: { clients, leads, projects, tasks, invoices, maintenancePlans },
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": `attachment; filename="ventablk-agency-export-${new Date().toISOString().slice(0, 10)}.json"`,
      "Cache-Control": "no-store, private",
    },
  });
}

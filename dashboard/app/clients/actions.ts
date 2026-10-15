"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const value = (formData: FormData, key: string) => {
  const entry = formData.get(key);
  return typeof entry === "string" ? entry.trim() : "";
};

export async function saveClient(formData: FormData) {
  const id = value(formData, "id");
  const name = value(formData, "name");
  const organization = value(formData, "organization");
  const email = value(formData, "email");
  const phone = value(formData, "phone");
  const website = value(formData, "website");
  const notes = value(formData, "notes");

  if (!name) redirect("/clients?error=name-required");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    redirect("/clients?error=invalid-email");
  }
  if (website && !/^https?:\/\//i.test(website)) {
    redirect("/clients?error=website-protocol");
  }

  const data = {
    name,
    organization: organization || null,
    email: email || null,
    phone: phone || null,
    website: website || null,
    notes: notes || null,
  };

  if (id) {
    await prisma.client.update({ where: { id }, data });
  } else {
    await prisma.client.create({ data });
  }

  revalidatePath("/");
  revalidatePath("/clients");
  redirect("/clients?saved=1");
}

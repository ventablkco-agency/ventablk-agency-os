import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ventablk Agency Dashboard",
  description: "Private client, project, task, and billing dashboard for Ventablk.co.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

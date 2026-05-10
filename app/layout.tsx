import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TaskFlow — Organize your team, effortlessly.",
  description:
    "TaskFlow brings tasks, deadlines, and team collaboration into one clean workspace. Built for small teams who get things done.",
  openGraph: {
    title: "TaskFlow — Modern SaaS Task Management",
    description:
      "Organize tasks, collaborate with your team, and track progress — all in one place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

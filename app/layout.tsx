import type { Metadata } from "next";
import { ReactNode } from "react";
import { Menu } from "@/src/components";

import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Dashboard",
  description: "Track your finances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-surface md:flex">
        <Menu />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Georama } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Website & Portfolio - Devon Ray",
  description: "Personal Website & Portfolio - Devon Ray, Choose a language to get started",
  other: {
    seobility: "f19ca9be1a5cd340872c4f55c3234740",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

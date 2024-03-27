import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import type { Metadata } from "next";
import { Georama } from "next/font/google";
import "./globals.css";

const georama = Georama({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Devon Ray",
  description: "Devon Ray",
  other: {
    seobility: 'f19ca9be1a5cd340872c4f55c3234740'
  }
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

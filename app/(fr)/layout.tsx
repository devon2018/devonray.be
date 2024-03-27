import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import type { Metadata } from "next";
import { Georama } from "next/font/google";
import "../globals.css";

const georama = Georama({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Devon Ray",
  description: "Devon Ray",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-black text-white">
      <body className={`${georama.className} font-body`}>
        <Header
          introId="#introduction"
          items={[
            {
              title: "À propos de moi", // About Me
              link: "#a-propos-de-moi",
            },
            {
              title: "Services", // Services (no change)
              link: "#services",
            },
            {
              title: "Portfolio", // Portfolio (no change)
              link: "#portfolio",
            },
            {
              title: "Avis", // Reviews
              link: "#avis",
            },
            {
              title: "Contact", // Contact (no change)
              link: "#contact",
            },
          ]}
          activeLang="fr"
        />
        {children}
        <Footer lang="fr" />
      </body>
    </html>
  );
}

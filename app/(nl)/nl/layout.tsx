import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import type { Metadata } from "next";
import { Georama } from "next/font/google";
import "../../globals.css";

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
    <html lang="nl" className="bg-black text-white">
      <body className={`${georama.className} font-body`}>
        <Header
          introId="#inleiding"
          activeLang="nl"
          items={[
            {
              title: "Over mij", // About Me
              link: "#over-mij",
            },
            {
              title: "Diensten", // Services
              link: "#diensten",
            },
            {
              title: "Portfolio", // Portfolio (no change)
              link: "#portfolio",
            },
            {
              title: "Recensies", // Reviews
              link: "#recensies",
            },
            {
              title: "Contact", // Contact (no change)
              link: "#contact",
            },
          ]}
        />
        {children}
        <Footer lang="nl" />
      </body>
    </html>
  );
}

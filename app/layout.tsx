import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/UI/Header";
import { Footer } from "@/components/UI/Footer";

export const metadata: Metadata = {
  title: "Datafish - v0.1",
  description: "Une encyclopédie sur la faune maritime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

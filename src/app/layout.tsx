import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevPortfolio - Développeurs Full Stack",
  description:
    "Portfolio de deux développeurs full-stack passionnés. Spécialisés en React, Next.js, Node.js, Python et technologies web modernes.",
  keywords: [
    "développeur web",
    "full stack",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "Node.js",
    "Python",
  ],
  authors: [{ name: "DevPortfolio" }],
  openGraph: {
    title: "DevPortfolio - Développeurs Full Stack",
    description:
      "Portfolio de deux développeurs full-stack passionnés. Création d'expériences web exceptionnelles.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevPortfolio - Développeurs Full Stack",
    description:
      "Portfolio de deux développeurs full-stack passionnés.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

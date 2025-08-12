import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luschuster Communications SA - Expert Télécommunications Luxembourg",
  description: "Solutions télécommunications d'entreprise au Luxembourg depuis 1988. VoIP, infrastructure réseau, maintenance. Techniciens agréés P&T.",
  keywords: "télécommunications Luxembourg, VoIP, infrastructure réseau, P&T agréé, support technique",
  authors: [{ name: "Luschuster Communications SA" }],
  openGraph: {
    title: "Luschuster Communications SA - Expert Télécommunications Luxembourg",
    description: "Solutions télécommunications d'entreprise au Luxembourg depuis 1988. VoIP, infrastructure réseau, maintenance. Techniciens agréés P&T.",
    type: "website",
    locale: "fr_LU",
    siteName: "Luschuster Communications",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

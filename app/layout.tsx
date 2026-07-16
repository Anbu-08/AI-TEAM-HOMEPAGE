import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.productName,
    template: site.productName,
  },
  description:
    "Personal Assistant is an AI-powered Gmail productivity assistant that helps you organize emails, generate AI summaries, draft replies, search your inbox, and receive daily briefings - built by Takshashila AI Team.",
  applicationName: site.productName,
  keywords: [
    "Personal Assistant",
    "Gmail AI assistant",
    "Takshashila AI Team",
    "Gmail productivity",
    "email summarizer",
    "AI email assistant",
    "Google OAuth app",
  ],
  authors: [{ name: site.developer, url: site.url }],
  creator: site.developer,
  publisher: site.developer,
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.productName,
    title: site.productName,
    description:
      "An AI-powered Gmail productivity assistant that helps you manage your inbox more efficiently using secure Google authentication.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: site.productName,
    description:
      "An AI-powered Gmail productivity assistant that helps you manage your inbox more efficiently using secure Google authentication.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

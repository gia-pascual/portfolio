import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giannipascual.com"),
  title: {
    default: "Gianni Pascual | Bookkeeper & US Tax Support Specialist",
    template: "%s | Gianni Pascual",
  },
  description:
    "Gianni Pascual is a Bookkeeper, US Tax Support Specialist, and QuickBooks Online ProAdvisor helping accounting firms and small businesses maintain organized, accurate financial records.",
  keywords: [
    "bookkeeper",
    "QuickBooks Online ProAdvisor",
    "US tax support",
    "remote bookkeeping",
    "Xero advisor",
    "CPA firm support",
  ],
  openGraph: {
    title: "Gianni Pascual | Bookkeeper & US Tax Support Specialist",
    description:
      "Remote bookkeeping and US tax preparation support for accounting firms and small businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-paper-50"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

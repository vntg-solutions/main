import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vantage Solutions - Websites, Tools & Automation for Small Business",
  description:
    "Vantage Solutions helps small businesses with website creation, tool implementation, and automation - from professional sites and client portals to bill generation and workflows that simplify operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

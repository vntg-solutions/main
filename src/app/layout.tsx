import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vantage Solutions — Digital Infrastructure Studio",
  description:
    "Vantage Solutions architects premium, ready-to-scale digital infrastructure for modern businesses — from SaaS platforms to cloud deployment and legacy migration.",
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

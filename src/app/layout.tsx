import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vantage Solutions - Client Services & CareCue | Websites, Tools & Products",
  description:
    "Vantage Solutions delivers client services—websites, portals, bill generation, and automation—and builds in-house products like CareCue, your personal health companion app for water, sleep, meds and appointments.",
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

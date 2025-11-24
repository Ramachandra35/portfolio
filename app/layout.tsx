import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Ramachandran Senthil",
  description: "Created with PAssionate",
  generator: "Ramachandran Senthil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}

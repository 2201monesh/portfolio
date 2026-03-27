import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import HeaderNav from "./components/HeaderNav";
import { HighlightWrapper } from "./components/HighlightWrapper";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monesh Goyal",
  description: "Monesh Goyal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 font-sans`}
      >
        <HighlightWrapper>
          <HeaderNav />
          {children}
        </HighlightWrapper>
        <Analytics />
      </body>
    </html>
  );
}

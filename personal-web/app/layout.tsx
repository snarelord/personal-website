import type React from "react";
import "./globals.css";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Your Name - Software Engineer",
  description: "Personal portfolio website",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

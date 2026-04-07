import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NodeMind | The open source AI coding agent",
  description: "Run AI workflows across your codebase from terminal, IDE, or desktop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0A0A] text-gray-300 font-sans selection:bg-white/10 selection:text-white min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}

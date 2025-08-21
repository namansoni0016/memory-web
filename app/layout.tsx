import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Memory Web",
  description: "AI Memory Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white`}
      >
        <Navbar />
        <main className="px-6 py-4">{children}</main>
      </body>
    </html>
  );
}

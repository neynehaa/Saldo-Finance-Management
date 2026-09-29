import type { Metadata } from "next";
import { Manrope, Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saldo",
  description: "Your money, made clearer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={manrope.variable}>
        <Sidebar />

        <main className="ml-19 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
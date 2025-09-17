import type { Metadata } from "next";
import { IBM_Plex_Mono } from 'next/font/google'
import "./globals.css";
import { Footer, NavBar } from "@/components/export";

export const metadata: Metadata = {
  title: "AdventJS 2024",
  description: "Challenge from Spanish streamer and content creator @midudev",
};

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--ibm-plex-mono'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${ibm_plex_mono.variable} h-full flex flex-col`}>
        <NavBar />
        <main className="flex-1 min-w-[400px] max-w-[1440px] mx-auto w-full pt-[100px] pb-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

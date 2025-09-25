import type { Metadata } from "next";
import { IBM_Plex_Mono } from 'next/font/google'
import "./globals.css";
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "2024 AdventJS | %s",
    default: "2024 AdventJS"
  },
  description:
    "AdventJS is a challenge created by midudev to practice web development solving 25 challenges, one for each day of December.",
  openGraph: {
    title: "2024 AdventJS",
    description:
      "AdventJS is a challenge created by midudev to practice web development solving 25 challenges, one for each day of December.",
    url: "https://adventjs.dev/",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
      <body className={`${ibm_plex_mono.variable} h-full flex flex-col overflow-x-hidden`}>
        <NavBar />
        <main className="flex-1 min-w-0 max-w-[1600px] mx-auto w-full pt-[100px] pb-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
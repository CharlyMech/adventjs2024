import type { Metadata } from "next";
import { IBM_Plex_Mono } from 'next/font/google'
import "./globals.css";
import Footer from "./footer";

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
    <html lang="en">
      <body className={`${ibm_plex_mono.variable}`}>
        {/*  flex flex-col min-h-screen antialiased */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html >
  );
}

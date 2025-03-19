import type { Metadata } from "next";
import { DM_Serif_Display } from 'next/font/google'
import PlausibleProvider from "next-plausible";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ['400'], 
  subsets: ['latin']}
)

export const metadata: Metadata = {
  title: "Affordable web development in the heart of Ramsbottom - Ramsbottom Online",
  description: "Web development services by Jared Rigby - a Ramsbottom based web programmer.",
  openGraph: {
    images: ['/peel-monument-styled.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${dmSerif.className} antialiased bg-slate-100`}
      >
        <PlausibleProvider domain="ramsbottom.online">
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}

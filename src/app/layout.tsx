import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header";
import './globals.css';
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dev-mechanic",
  description: "mecanica automotiva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <p style={{textAlign:'center', marginTop:54, marginBottom: 24}}>
          Todos direitos reservados @<Link href='https://github.com/Luiz-Mendonca1' style={{color: 'black'}}>Luiz-Mendonca1</Link> {`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}

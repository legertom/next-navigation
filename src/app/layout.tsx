'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { usePathname }  from 'next/navigation';


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Tom's Sample App",
//   description: "Testing a new NextJS install",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      
      <body className={`${inter.className} bg-jada-cyan`}>
      {!pathname.includes('/dashboard') && <Navbar />}
      {children}
      </body>
    </html>
  );
}

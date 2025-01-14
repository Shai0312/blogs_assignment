import type { Metadata } from "next";
import "./globals.css";
import {Roboto} from 'next/font/google'
import { ReactNode } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const myFont = Roboto({weight:"400",subsets:['latin']})
export default function RootLayout({children}:{children:ReactNode}) {
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>
      <Navbar />
        {children}
        
        <Footer />
      </body>
    </html>
  );
}

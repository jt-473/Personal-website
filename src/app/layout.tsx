import type { Metadata } from "next";
import { Almarai, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Jovan Tomy",
  description: "Personal portfolio of Jovan Tomy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${almarai.variable} ${instrumentSerif.variable} h-full antialiased`}>
      <body className={`${almarai.className} min-h-full flex flex-col bg-black text-[#E1E0CC] cursor-none`}>
        {/* Noise overlay */}
        <div
          className="fixed inset-0 z-0 pointer-events-none noise-overlay opacity-[0.04]"
        />
        <CustomCursor />
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

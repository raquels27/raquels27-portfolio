import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Defines the Sans font for body and data
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

// Defines the Serif font for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-playfair",
});

// Defines the display on website tab
export const metadata: Metadata = {
  title: "Raquel Saldivar | Software Developer & Data Engineer",
  description: "Portfolio of Raquel Saldivar",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#FDFDFD] text-[#1A1918] font-sans antialiased">
        <Navbar />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}

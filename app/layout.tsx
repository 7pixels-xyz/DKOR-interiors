import React from 'react';
import Header from '@/components/Header';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import { Playfair_Display, Inter } from 'next/font/google';
import '@/app/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

import Footer from '@/components/Footer';

export const metadata = {
  title: 'DKOR Interiors | Luxury Interior Design Studio Miami',
  description: 'Top-rated Miami interior design firm specializing in high-end residential estates, penthouses, and luxury interiors. Award-winning transformations.',
  keywords: 'Interior Design Miami, Luxury Interiors, High-End Residential, DKOR Interiors, Miami Decorator, Custom Home Design'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-[#FFFFFF] text-[#1A1A1A] antialiased`}>
      <body className="min-h-screen selection:bg-[#C5A059] selection:text-white font-sans overflow-x-hidden">
        <LenisProvider>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-neutral-100 text-[#1A1A1A]'
          : 'bg-gradient-to-b from-black/50 to-transparent py-8 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group flex flex-col justify-center">
          <img 
            src="https://res.cloudinary.com/dzepmxuve/image/upload/v1786606490/DKOR_INTERIORS_LOGO_zpo4nh.webp" 
            alt="DKOR Interiors" 
            className={`h-10 w-auto object-contain transition-all duration-300 ${!scrolled ? 'brightness-0 invert opacity-90' : 'opacity-100'}`}
          />
        </Link>

        <nav className={`hidden md:flex items-center space-x-10 text-xs tracking-widest uppercase font-medium transition-colors ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
          <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#C5A059] transition-colors">Studio</Link>
          <Link href="/services" className="hover:text-[#C5A059] transition-colors">Services</Link>
          <Link href="/work" className="hover:text-[#C5A059] transition-colors">Portfolio</Link>
          <Link href="/contact" className="hover:text-[#C5A059] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="tel:3059812710"
            className={`hidden sm:flex items-center space-x-2 text-xs font-mono transition-colors ${scrolled ? 'text-neutral-600 hover:text-[#1A1A1A]' : 'text-white/80 hover:text-white'}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>305.981.2710</span>
          </a>
          <Link
            href="/contact"
            className={`inline-flex items-center space-x-2 text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-[#1A1A1A] hover:bg-[#C5A059] text-white' 
                : 'bg-white hover:bg-[#C5A059] text-[#1A1A1A] hover:text-white'
            }`}
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

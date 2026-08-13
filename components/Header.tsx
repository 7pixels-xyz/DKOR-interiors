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

        <nav className={`hidden lg:flex items-center space-x-8 text-[10px] xl:text-xs tracking-widest uppercase font-medium transition-colors ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
          <Link href="/services" className="hover:text-[#5C6B57] transition-colors py-2">Design Services</Link>
          
          {/* Design Portfolio Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center hover:text-[#5C6B57] transition-colors">
              Design Portfolio
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-neutral-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <Link href="/work/residential" className="block px-6 py-3 text-xs text-[#555555] hover:text-[#5C6B57] hover:bg-neutral-50 transition-colors">Residential</Link>
                <Link href="/work/commercial" className="block px-6 py-3 text-xs text-[#555555] hover:text-[#5C6B57] hover:bg-neutral-50 transition-colors">Commercial</Link>
              </div>
            </div>
          </div>

          {/* By Locations Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center hover:text-[#5C6B57] transition-colors">
              By Locations
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-neutral-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <Link href="/locations/miami" className="block px-6 py-3 text-xs text-[#555555] hover:text-[#5C6B57] hover:bg-neutral-50 transition-colors">Miami FL</Link>
                <Link href="/locations/palm-beach" className="block px-6 py-3 text-xs text-[#555555] hover:text-[#5C6B57] hover:bg-neutral-50 transition-colors">Palm Beach FL</Link>
                <Link href="/locations/ft-lauderdale" className="block px-6 py-3 text-xs text-[#555555] hover:text-[#5C6B57] hover:bg-neutral-50 transition-colors">Ft Lauderdale FL</Link>
                <Link href="/locations/sunny-isles" className="block px-6 py-3 text-xs text-[#555555] hover:text-[#5C6B57] hover:bg-neutral-50 transition-colors">Sunny Isles FL</Link>
                <Link href="/locations/aventura" className="block px-6 py-3 text-xs text-[#555555] hover:text-[#5C6B57] hover:bg-neutral-50 transition-colors">Aventura FL</Link>
                <div className="border-t border-neutral-100 my-1"></div>
                <Link href="/locations" className="block px-6 py-3 text-xs text-[#1A1A1A] font-semibold hover:text-[#5C6B57] hover:bg-neutral-50 transition-colors">All Locations</Link>
              </div>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center hover:text-[#5C6B57] transition-colors">
              About Us
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-neutral-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <Link href="/about" className="block px-6 py-3 text-xs text-[#555555] hover:text-[#5C6B57] hover:bg-neutral-50 transition-colors">About DKOR</Link>
                <Link href="/press" className="block px-6 py-3 text-xs text-[#555555] hover:text-[#5C6B57] hover:bg-neutral-50 transition-colors">Press</Link>
              </div>
            </div>
          </div>

          <Link href="/testimonials" className="hover:text-[#5C6B57] transition-colors py-2">Testimonials</Link>
          <Link href="/blog" className="hover:text-[#5C6B57] transition-colors py-2">Blog</Link>
          <Link href="/contact" className="hover:text-[#5C6B57] transition-colors py-2">Contact Us</Link>
          
          <button className="hover:text-[#5C6B57] transition-colors py-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="tel:3059812710"
            className={`hidden sm:flex items-center space-x-2 text-xs font-mono transition-colors ${scrolled ? 'text-neutral-600 hover:text-[#1A1A1A]' : 'text-white/80 hover:text-white'}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#5C6B57]" />
            <span>305.981.2710</span>
          </a>
          <Link
            href="/contact"
            className={`inline-flex items-center space-x-2 text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-[#1A1A1A] hover:bg-[#5C6B57] text-white' 
                : 'bg-white hover:bg-[#5C6B57] text-[#1A1A1A] hover:text-white'
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

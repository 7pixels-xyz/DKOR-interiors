'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-32 pb-12 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Main CTA */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block">
              <img 
                src="https://res.cloudinary.com/dzepmxuve/image/upload/v1786606490/DKOR_INTERIORS_LOGO_zpo4nh.webp" 
                alt="DKOR Interiors" 
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1]">
              Let's discuss your <br/>
              <span className="italic text-[#5C6B57]">next project.</span>
            </h2>
            <a
              href="mailto:hello@dkorinteriors.com"
              className="inline-flex items-center gap-4 text-2xl font-light hover:text-[#5C6B57] transition-colors border-b border-white/20 hover:border-[#5C6B57] pb-4"
            >
              hello@dkorinteriors.com <ArrowUpRight className="w-6 h-6" />
            </a>
            
            <div className="pt-8">
              <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
                Join our exclusive mailing list to receive curated insights on luxury interior architecture, material sourcing, and our latest project reveals.
              </p>
              <form className="mt-4 flex max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#5C6B57] transition-colors text-sm"
                />
                <button type="submit" className="border-b border-white/20 hover:border-[#5C6B57] px-2 text-[#5C6B57] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 lg:col-start-7 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-[#5C6B57] font-semibold">Explore</h4>
            <nav className="flex flex-col gap-4 text-sm font-light text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">The Studio</Link>
              <Link href="/services" className="hover:text-white transition-colors">Design Services</Link>
              <Link href="/work" className="hover:text-white transition-colors">Portfolio</Link>
              <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Journal / Blog</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-[#5C6B57] font-semibold">Headquarters</h4>
            <address className="not-italic text-white/70 text-sm leading-loose font-light">
              2079 NE 155th Street,<br />
              North Miami, FL 33162<br />
              <a href="tel:3059812710" className="hover:text-white transition-colors mt-4 inline-block font-mono text-xs tracking-widest">+1 (305) 981-2710</a>
            </address>
          </div>

          {/* Social */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-[#5C6B57] font-semibold">Connect</h4>
            <div className="flex flex-col gap-4 text-sm text-white/70 font-light">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-3">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-3">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
              <a href="https://wa.me/13059812710" target="_blank" rel="noopener noreferrer" className="hover:text-[#5C6B57] transition-colors flex items-center gap-3">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-mono tracking-widest">
          <p>© {new Date().getFullYear()} DKOR Interiors. Built for Conversion.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

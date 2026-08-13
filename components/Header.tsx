'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = (dropdown: string) => {
    clearTimeout(timeoutId);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // slight delay to prevent flickering
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: -5, 
      scale: 0.95, 
      filter: "blur(5px)",
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 + 0.1, duration: 0.3, ease: "easeOut" }
    })
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4 border-b border-neutral-100 text-[#1A1A1A]'
          : 'bg-gradient-to-b from-black/60 to-transparent py-8 text-white'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group flex flex-col justify-center relative z-20">
          <img 
            src="https://res.cloudinary.com/dzepmxuve/image/upload/v1786606490/DKOR_INTERIORS_LOGO_zpo4nh.webp" 
            alt="DKOR Interiors" 
            className={`h-10 w-auto object-contain transition-all duration-500 ${!scrolled ? 'brightness-0 invert opacity-100' : 'opacity-100'}`}
          />
        </Link>

        <nav className={`hidden lg:flex items-center space-x-10 text-[10px] xl:text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-500 ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
          
          {/* Design Portfolio Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('portfolio')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1.5 hover:text-[#5C6B57] transition-colors group">
              Design Portfolio
              <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeDropdown === 'portfolio' ? '-rotate-180 text-[#5C6B57]' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'portfolio' && (
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-4 w-56 bg-white/95 backdrop-blur-xl border border-neutral-100/50 shadow-2xl rounded-2xl overflow-hidden origin-top-left"
                >
                  <div className="p-2">
                    {[
                      { href: "/work/residential", label: "Residential" },
                      { href: "/work/commercial", label: "Commercial" },
                      { href: "/work", label: "View All Works" }
                    ].map((item, i) => (
                      <motion.div key={item.href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                        <Link 
                          href={item.href} 
                          className="block px-4 py-3 text-[11px] text-[#555555] rounded-xl hover:text-[#5C6B57] hover:bg-neutral-50 hover:pl-6 transition-all duration-300"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Us Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1.5 hover:text-[#5C6B57] transition-colors group">
              About Us
              <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeDropdown === 'about' ? '-rotate-180 text-[#5C6B57]' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'about' && (
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-4 w-56 bg-white/95 backdrop-blur-xl border border-neutral-100/50 shadow-2xl rounded-2xl overflow-hidden origin-top-left"
                >
                  <div className="p-2">
                    {[
                      { href: "/about", label: "About DKOR" },
                      { href: "/press", label: "Press & Media" }
                    ].map((item, i) => (
                      <motion.div key={item.href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                        <Link 
                          href={item.href} 
                          className="block px-4 py-3 text-[11px] text-[#555555] rounded-xl hover:text-[#5C6B57] hover:bg-neutral-50 hover:pl-6 transition-all duration-300"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/testimonials" className="hover:text-[#5C6B57] transition-colors py-2 relative group">
            Testimonials
            <span className="absolute left-0 bottom-0 w-0 h-px bg-[#5C6B57] group-hover:w-full transition-all duration-500" />
          </Link>
          <Link href="/contact" className="hover:text-[#5C6B57] transition-colors py-2 relative group">
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-px bg-[#5C6B57] group-hover:w-full transition-all duration-500" />
          </Link>
        </nav>

        <div className="flex items-center space-x-6">
          <a
            href="tel:3059812710"
            className={`hidden sm:flex items-center space-x-2 text-xs font-mono transition-colors duration-500 hover:text-[#5C6B57] ${scrolled ? 'text-neutral-600' : 'text-white/80'}`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>305.981.2710</span>
          </a>
          <Link
            href="/contact"
            className={`group inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-500 overflow-hidden relative ${
              scrolled 
                ? 'bg-[#1A1A1A] text-white hover:text-white' 
                : 'bg-white text-[#1A1A1A] hover:text-white'
            }`}
          >
            <div className="absolute inset-0 bg-[#5C6B57] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
            <span className="relative z-10">Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:rotate-45 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </header>
  );
}

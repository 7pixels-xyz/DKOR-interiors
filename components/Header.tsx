'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = (dropdown: string) => {
    clearTimeout(timeoutId);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
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

  const mobileMenuVariants = {
    hidden: { opacity: 0, clipPath: "circle(0% at top right)" },
    visible: { 
      opacity: 1, 
      clipPath: "circle(150% at top right)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    exit: { 
      opacity: 0, 
      clipPath: "circle(0% at top right)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: 0.3 + (i * 0.1), duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    })
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 md:pt-6">
        <header
          className={`pointer-events-auto transition-all duration-700 ease-[0.76,0,0.24,1] ${
            scrolled || mobileMenuOpen
              ? 'w-[95%] md:w-auto md:min-w-[800px] bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-3 px-6 md:px-10 rounded-full border border-white/40 text-[#1A1A1A]'
              : 'w-full max-w-[90rem] bg-transparent py-4 px-6 md:px-12 text-white'
          }`}
        >
          <div className="flex items-center justify-between w-full gap-8">
            <Link href="/" className="group flex flex-col justify-center relative z-20 shrink-0">
              <img 
                src="https://res.cloudinary.com/dzepmxuve/image/upload/v1786606490/DKOR_INTERIORS_LOGO_zpo4nh.webp" 
                alt="DKOR Interiors" 
                className={`h-8 md:h-10 w-auto object-contain transition-all duration-500 ${!scrolled && !mobileMenuOpen ? 'brightness-0 invert opacity-100' : 'opacity-100'}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center space-x-8 text-[10px] xl:text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-500 ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
              
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white/90 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-2xl overflow-hidden origin-top"
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
                              className="block px-4 py-3 text-[11px] text-[#555555] rounded-xl hover:text-[#5C6B57] hover:bg-neutral-50/50 hover:pl-6 transition-all duration-300"
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white/90 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-2xl overflow-hidden origin-top"
                    >
                      <div className="p-2">
                        {[
                          { href: "/about", label: "About DKOR" },
                          { href: "/press", label: "Press & Media" }
                        ].map((item, i) => (
                          <motion.div key={item.href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                            <Link 
                              href={item.href} 
                              className="block px-4 py-3 text-[11px] text-[#555555] rounded-xl hover:text-[#5C6B57] hover:bg-neutral-50/50 hover:pl-6 transition-all duration-300"
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

            {/* Mobile Inline Navigation */}
            <nav className={`flex lg:hidden items-center gap-3 sm:gap-6 text-[9px] sm:text-[10px] tracking-widest uppercase font-mono transition-colors duration-500 ${scrolled || mobileMenuOpen ? 'text-[#1A1A1A]' : 'text-white'}`}>
              <Link href="/work" className="hover:text-[#5C6B57] transition-colors">Portfolio</Link>
              <Link href="/contact" className="hover:text-[#5C6B57] transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center space-x-3 md:space-x-4 shrink-0">
              <a
                href="tel:3059812710"
                className={`hidden sm:flex items-center space-x-2 text-xs font-mono transition-colors duration-500 hover:text-[#5C6B57] ${scrolled || mobileMenuOpen ? 'text-neutral-600' : 'text-white/80'}`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>305.981.2710</span>
              </a>
              <Link
                href="/contact"
                className={`hidden md:inline-flex group items-center space-x-2 text-[10px] md:text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-500 overflow-hidden relative ${
                  scrolled || mobileMenuOpen
                    ? 'bg-[#1A1A1A] text-white hover:text-white shadow-md' 
                    : 'bg-white text-[#1A1A1A] hover:text-white'
                }`}
              >
                <div className="absolute inset-0 bg-[#5C6B57] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                <span className="relative z-10">Inquire</span>
                <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 relative z-10 group-hover:rotate-45 transition-transform duration-500" />
              </Link>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 relative z-20 ${
                  scrolled || mobileMenuOpen ? 'bg-neutral-100 text-[#1A1A1A]' : 'bg-white/10 text-white'
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <>
                    <span className="w-4 h-[1.5px] bg-current block" />
                    <span className="w-4 h-[1.5px] bg-current block" />
                  </>
                )}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 bg-[#1A1A1A] flex flex-col justify-between pt-32 pb-12 px-8 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-8 mt-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "The Studio" },
                { href: "/services", label: "Services" },
                { href: "/locations", label: "Locations" },
              ].map((link, i) => (
                <motion.div key={link.href} custom={i} variants={mobileLinkVariants} initial="hidden" animate="visible">
                  <Link 
                    href={link.href}
                    className="text-4xl sm:text-5xl font-serif text-white hover:text-[#5C6B57] transition-colors block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              custom={6} 
              variants={mobileLinkVariants} 
              initial="hidden" 
              animate="visible"
              className="mt-16 pt-8 border-t border-white/10 space-y-6"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#5C6B57]">Get in touch</span>
                <a href="mailto:hello@dkorinteriors.com" className="text-white text-lg font-light">hello@dkorinteriors.com</a>
                <a href="tel:3059812710" className="text-white text-lg font-light">+1 (305) 981-2710</a>
              </div>
              
              <div className="flex gap-6 pt-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-mono">Instagram</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-mono">Facebook</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

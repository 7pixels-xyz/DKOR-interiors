'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '@/lib/data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section className="py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        
        <div className="w-full md:w-1/3">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#161513] mb-6">
            Client <br /> <span className="italic text-[#8C7355]">Perspectives</span>
          </h2>
          <p className="text-[#6B655B] mb-8">
            Hear from our clients about their experience working with DKOR Interiors to bring their dream homes to life.
          </p>
          
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[#8C7355]/30 flex items-center justify-center text-[#161513] hover:bg-[#8C7355] hover:text-white hover:border-[#8C7355] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[#8C7355]/30 flex items-center justify-center text-[#161513] hover:bg-[#8C7355] hover:text-white hover:border-[#8C7355] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/3 relative min-h-[300px]">
          <Quote className="absolute -top-10 -left-6 w-24 h-24 text-[#8C7355]/10 z-0" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="font-serif text-2xl md:text-3xl text-[#161513] leading-relaxed mb-8">
                "{TESTIMONIALS_DATA[currentIndex].quote}"
              </p>
              
              <div>
                <h4 className="font-sans font-semibold text-[#161513] uppercase tracking-widest text-xs mb-1">
                  {TESTIMONIALS_DATA[currentIndex].clientName}
                </h4>
                <p className="text-[#6B655B] text-sm">
                  {TESTIMONIALS_DATA[currentIndex].projectName}, {TESTIMONIALS_DATA[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

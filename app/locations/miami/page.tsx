'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function LocationPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/home_hero_luxury_living_room_1786600256891.jpg"
            alt="Luxury Interior Design in Miami, FL"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/80 to-[#1A1A1A]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center space-y-6 max-w-4xl mx-auto mt-24"
        >
          <span className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-mono text-[#5C6B57]">
            <MapPin className="w-4 h-4" />
            <span>Service Area</span>
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
            Luxury Interior Design in Miami, FL
          </h1>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            DKOR Interiors brings award-winning architectural design and uncompromising material integrity to high-end residential and commercial properties throughout Miami, FL.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl text-[#1A1A1A]">Elevating Miami, FL Real Estate</h2>
            <p className="text-[#555555] font-light leading-relaxed text-lg">
              Whether you are renovating a coastal penthouse, building a custom estate, or redesigning a commercial workspace, our process is designed to handle the complexity of luxury builds in Miami, FL. 
            </p>
            <p className="text-[#555555] font-light leading-relaxed text-lg">
              We manage every aspect of the project—from conceptual architecture and material sourcing to final procurement and installation—ensuring a seamless experience that respects both your time and vision.
            </p>
            <Link href="/contact" className="inline-flex items-center space-x-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-mono hover:bg-[#5C6B57] transition-colors mt-4">
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <img src="/about_hero_design_studio_1786600415286.jpg" alt="Design Process" className="w-full h-full object-cover" />
            <div className="absolute inset-0 border border-black/10 rounded-2xl pointer-events-none"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

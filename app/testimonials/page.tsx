'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TestimonialsPage() {
  const testimonials = [
    {
      client: "The Harrison Family",
      project: "Coastal Penthouse",
      quote: "Working with DKOR was an absolute revelation. They didn't just design a beautiful home; they understood exactly how our family lives and created spaces that foster connection. The attention to detail and material selection was beyond anything we expected."
    },
    {
      client: "Marcus & Elena",
      project: "Modern Estate",
      quote: "From the initial consultation to the final reveal, the team demonstrated unparalleled professionalism. They managed to balance my wife's love for warm, traditional elements with my preference for sleek modernism perfectly."
    },
    {
      client: "Sarah J.",
      project: "Aventura Condo",
      quote: "What sets DKOR apart is their process. It is meticulous. I never had to worry about a single vendor, delivery, or contractor. They handled the entire ecosystem of the build, allowing me to just enjoy the creative process."
    },
    {
      client: "Dr. Richard Chen",
      project: "Executive Office Suite",
      quote: "We hired DKOR for our commercial space and the transformation was night and day. It elevated our brand perception instantly. Clients constantly comment on the sophisticated atmosphere the moment they step off the elevator."
    }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Client Stories</span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] mt-6 leading-tight">Words of Affirmation</h1>
          <p className="text-[#555555] font-light text-lg mt-8 max-w-2xl mx-auto">
            The true measure of our work isn't found in photographs, but in the lived experiences of the families and businesses who inhabit the spaces we create.
          </p>
        </motion.div>
      </section>

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 gap-8 space-y-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: (idx % 2) * 0.2 }}
              className="break-inside-avoid bg-[#F7F7F7] p-10 rounded-2xl relative"
            >
              <div className="text-6xl text-[#E6E8E3] font-serif absolute top-6 left-6 leading-none">"</div>
              <div className="relative z-10">
                <p className="text-[#1A1A1A] font-serif text-xl leading-relaxed italic mb-8">
                  {t.quote}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#E6E8E3] flex items-center justify-center">
                    <span className="font-serif text-[#5C6B57] text-lg">{t.client.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-mono text-[#1A1A1A]">{t.client}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-[#555555] font-mono mt-1">{t.project}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1A1A1A] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl text-white mb-8">Ready to start your story?</h2>
          <a href="/contact" className="inline-block bg-[#5C6B57] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-mono hover:bg-white hover:text-[#1A1A1A] transition-colors">
            Schedule a Consultation
          </a>
        </motion.div>
      </section>
    </div>
  );
}

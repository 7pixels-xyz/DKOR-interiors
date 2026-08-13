'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timeline = [
  { year: '2004', event: 'DKOR Interiors Founded by Ivonne Ronderos in North Miami, establishing a new standard for luxury residential design.' },
  { year: '2010', event: 'Expanded internationally, taking on bespoke high-end projects across Latin America and the Caribbean.' },
  { year: '2015', event: 'Recognized by Architectural Digest and Luxe Interiors as a leading voice in transitional luxury.' },
  { year: '2020', event: 'Surpassed 500,000 saves on Houzz, cementing our reputation as a globally recognized design authority.' },
  { year: '2025', event: 'Celebrating 20 years, over 400 completed transformations, and an ever-evolving portfolio of world-class estates.' }
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Hero & Manifesto */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto space-y-12 md:space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="space-y-4 md:space-y-6 text-center"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">The Studio</span>
          <h1 className="font-serif text-4xl md:text-7xl text-[#1A1A1A] leading-tight">
            Design is the art of <br className="hidden sm:block" />
            <span className="italic text-[#555555]">living exceptionally.</span>
          </h1>
        </motion.div>

        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden bg-neutral-100"
        >
          <motion.div
            animate={{ scale: 1.15 }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full origin-center"
          >
            <motion.img 
              style={{ y: imgY, scale: 1.1 }}
              src="/about_hero_design_studio_1786600415286.jpg"
              alt="DKOR Studio"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] leading-tight">What We Actually Believe</h2>
              <p className="text-base md:text-lg text-[#555555] font-light leading-relaxed">
                Most designers look at a room and ask, "What can we put here?" We look at a room and ask, "How should this space make you feel?" 
              </p>
              <div className="overflow-hidden rounded-2xl shadow-sm mt-6 md:mt-8">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
                  alt="Luxury Ambience" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 text-left">
              {[
                { n: "01. Luxury is Unseen", d: "True luxury isn't just expensive materials. It's the psychological weight of perfect symmetry, acoustic dampening, and the removal of daily friction from your life." },
                { n: "02. The Right Client", d: "We do not design for everyone. We design for high-net-worth individuals who understand that their environment is the most important investment they make in their mental well-being." },
                { n: "03. Beyond Aesthetics", d: "A beautiful room is the bare minimum. We engineer spaces that lower your heart rate the moment you walk through the door." },
                { n: "04. Complete Control", d: "From structural architecture to the procurement of the very last hand-woven textile, we maintain absolute control over the execution to ensure the vision is never compromised." }
              ].map((b, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.76, 0, 0.24, 1] }}
                  className="space-y-3 md:space-y-4"
                >
                  <h3 className="font-serif text-xl md:text-2xl text-[#5C6B57]">{b.n}</h3>
                  <p className="text-neutral-600 font-light text-sm md:text-base leading-relaxed">{b.d}</p>
                </motion.div>
              ))}
            </div>
            
          </div>
        </motion.div>
      </section>

      {/* Leadership Profile */}
      <section className="py-20 md:py-24 mt-16 md:mt-24 bg-[#E6E8E3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="w-full md:w-1/2 aspect-square sm:aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <motion.div
              animate={{ scale: 1.1 }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              className="w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Ivonne Ronderos" 
                className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-1000 ease-[0.25,1,0.5,1]"
              />
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-full md:w-1/2 space-y-4 md:space-y-6"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Founder & Principal Designer</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A]">Ivonne Ronderos</h2>
            <p className="text-[#555555] font-light leading-relaxed text-base md:text-lg">
              Since 2004, Ivonne has pioneered a client-first approach to interior architecture. 
              Her vision stems from the belief that a home should be a deeply personal sanctuary. 
              Under her leadership, DKOR Interiors has grown from a boutique Miami firm into a globally recognized studio 
              with over 400 completed projects across 6 countries.
            </p>
            <p className="text-[#555555] font-light leading-relaxed text-base md:text-lg italic border-l-2 border-[#5C6B57] pl-4 md:border-none md:pl-0">
              "My ultimate goal is to watch our clients walk into their finished home and realize it is a perfect reflection of who they are."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-4xl mx-auto space-y-12 md:space-y-16">
        <div className="text-center overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Legacy</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mt-2">20 Years of Excellence</h2>
          </motion.div>
        </div>

        <div className="space-y-8 md:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
          {timeline.map((item, idx) => (
            <motion.div 
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.76, 0, 0.24, 1] }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#5C6B57] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm text-white font-mono text-xs z-10 transition-transform duration-500 md:group-hover:scale-110">
                {item.year.slice(-2)}
              </div>
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 bg-[#E6E8E3] rounded-2xl border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-default">
                <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A] mb-2 md:mb-3">{item.year}</h3>
                <p className="text-[#555555] font-light text-sm leading-relaxed">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

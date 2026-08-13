'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2004', event: 'DKOR Interiors Founded by Ivonne Ronderos in North Miami, establishing a new standard for luxury residential design.' },
  { year: '2010', event: 'Expanded internationally, taking on bespoke high-end projects across Latin America and the Caribbean.' },
  { year: '2015', event: 'Recognized by Architectural Digest and Luxe Interiors as a leading voice in transitional luxury.' },
  { year: '2020', event: 'Surpassed 500,000 saves on Houzz, cementing our reputation as a globally recognized design authority.' },
  { year: '2025', event: 'Celebrating 20 years, over 400 completed transformations, and an ever-evolving portfolio of world-class estates.' }
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-32 pb-24">
      {/* Hero & Manifesto */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">The Studio</span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] leading-tight">
            Design is the art of <br />
            <span className="italic text-[#555555]">living exceptionally.</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-100"
        >
          <img 
            src="/about_hero_design_studio_1786600415286.jpg"
            alt="DKOR Studio"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-8">
              <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A]">What We Actually Believe</h2>
              <p className="text-lg text-[#555555] font-light leading-relaxed">
                Most designers look at a room and ask, "What can we put here?" We look at a room and ask, "How should this space make you feel?" 
              </p>
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
                alt="Luxury Ambience" 
                className="w-full h-80 object-cover rounded-2xl shadow-sm mt-8"
              />
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#5C6B57]">01. Luxury is Unseen</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  True luxury isn't just expensive materials. It's the psychological weight of perfect symmetry, acoustic dampening, and the removal of daily friction from your life.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#5C6B57]">02. The Right Client</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  We do not design for everyone. We design for high-net-worth individuals who understand that their environment is the most important investment they make in their mental well-being.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#5C6B57]">03. Beyond Aesthetics</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  A beautiful room is the bare minimum. We engineer spaces that lower your heart rate the moment you walk through the door.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#5C6B57]">04. Complete Control</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  From structural architecture to the procurement of the very last hand-woven textile, we maintain absolute control over the execution to ensure the vision is never compromised.
                </p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </section>

      {/* Leadership Profile */}
      <section className="py-24 mt-24 bg-[#E6E8E3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
              alt="Ivonne Ronderos" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Founder & Principal Designer</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A]">Ivonne Ronderos</h2>
            <p className="text-[#555555] font-light leading-relaxed text-lg">
              Since 2004, Ivonne has pioneered a client-first approach to interior architecture. 
              Her vision stems from the belief that a home should be a deeply personal sanctuary. 
              Under her leadership, DKOR Interiors has grown from a boutique Miami firm into a globally recognized studio 
              with over 400 completed projects across 6 countries.
            </p>
            <p className="text-[#555555] font-light leading-relaxed text-lg">
              "My ultimate goal is to watch our clients walk into their finished home and realize it is a perfect reflection of who they are."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Legacy</span>
          <h2 className="font-serif text-4xl text-[#1A1A1A] mt-2">20 Years of Excellence</h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
          {timeline.map((item, idx) => (
            <motion.div 
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#5C6B57] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm text-white font-mono text-xs z-10">
                {item.year.slice(-2)}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[#E6E8E3] rounded-2xl border border-neutral-100 hover:shadow-md transition-shadow">
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{item.year}</h3>
                <p className="text-[#555555] font-light text-sm leading-relaxed">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/data/projects';
import { ArrowUpRight, ArrowDownRight, MapPin, Check, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const [activeMaterial, setActiveMaterial] = useState(0);
  const materials = [
    { title: 'Calacatta Viola', desc: 'Sourced from Italian quarries, adding dramatic deep purple veining.', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Brushed Brass', desc: 'Warm metallic accents that patinate beautifully over time.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'White Oak', desc: 'Wide-plank European oak bringing natural warmth and grounding.', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/home_hero_luxury_living_room_1786600256891.jpg"
            alt="Luxury Interior"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="relative z-10 max-w-[90rem] w-full mx-auto text-center space-y-12 flex flex-col items-center pt-24"
        >
          {/* User Provided Hero Image / Typography - Optimized for Visibility */}
          <div className="relative w-full max-w-5xl mx-auto py-8">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full z-0 pointer-events-none" />
            
            <motion.img 
              src="https://res.cloudinary.com/dzepmxuve/image/upload/v1786603057/Designing-Dreams-Together-9_ccdekg.webp" 
              alt="Designing Dreams Together"
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] brightness-0 invert"
            />
          </div>

          <motion.p className="max-w-2xl mx-auto text-white/80 text-lg md:text-2xl leading-relaxed font-light">
            Architectural interior design for those who recognize that the ultimate luxury is a space that understands exactly how you live.
          </motion.p>

          <motion.div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white text-[#1A1A1A] px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all duration-500"
            >
              <span>View Selected Work</span>
              <ArrowDownRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:border-white transition-all duration-500"
            >
              Discuss Your Project
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Marquee */}
      <section className="py-6 bg-[#1A1A1A] border-y border-white/10 text-white overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex items-center space-x-12 px-6 opacity-70 text-xs font-mono uppercase tracking-widest"
        >
          {Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span>Architectural Digest</span>
              <span className="text-[#C5A059]">•</span>
              <span>Luxe Gold List</span>
              <span className="text-[#C5A059]">•</span>
              <span>HGTV Featured</span>
              <span className="text-[#C5A059]">•</span>
              <span>Houzz 500k+ Saves</span>
              <span className="text-[#C5A059]">•</span>
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* NEW: The Studio Ethos with Added Imagery */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059]">
              The Studio Ethos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mt-6 leading-tight">
              We believe that true luxury is <span className="italic text-[#C5A059]">unseen</span> as much as it is seen. It's the psychological weight of perfect symmetry, the acoustic dampening of heavy textiles, and the intuitive flow of a well-architected floor plan.
            </h2>
            <p className="text-[#555555] text-lg font-light leading-relaxed">
              Established in North Miami, DKOR Interiors has spent nearly two decades mastering the delicate balance between high-end architectural grandeur and intimate residential comfort. Our award-winning team handles every phase of the design-build process, ensuring absolute cohesion from blueprints to the final curated object.
            </p>
            <div className="mt-12">
              <Link href="/about" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-[#1A1A1A] hover:text-[#C5A059] transition-colors border-b border-black/20 pb-1">
                <span>Read Our Full Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" 
              alt="Studio Details" 
              className="w-full h-96 object-cover rounded-2xl mt-12 shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
              alt="Luxury Space" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* NEW: Services Teaser Grid */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059]">Core Competencies</span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#1A1A1A] mt-2">Our Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Interior Architecture", desc: "Ground-up planning, structural flow, and custom millwork for luxury estates.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
              { title: "Bespoke Furnishing", desc: "Curating rare materials, custom upholstery, and global art procurement.", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
              { title: "Commercial Luxury", desc: "Translating residential comfort into high-end hospitality and corporate suites.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-sm border border-black/5 cursor-pointer flex flex-col justify-end aspect-[4/5]"
              >
                <div className="absolute inset-0 z-0">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
                <div className="relative z-10 p-10">
                  <h3 className="font-serif text-2xl text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 font-light leading-relaxed mb-8">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-[#C5A059] group-hover:text-white transition-colors border-b border-[#C5A059]/30 pb-1 group-hover:border-white/50">
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric Portfolio Teaser */}
      <section className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059]">
              Featured Transformations
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#1A1A1A] mt-2">
              Recent Works
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/work"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-[#1A1A1A] hover:text-[#C5A059] transition-colors border-b border-black/20 pb-1"
            >
              <span>View All 100+ Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {PROJECTS_DATA.slice(0, 3).map((p, idx) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`group cursor-pointer ${idx === 0 ? 'md:col-span-8' : idx === 1 ? 'md:col-span-4 md:mt-32' : 'md:col-span-12'}`}
            >
              <Link href="/work" className="block w-full h-full">
                <div className="overflow-hidden rounded-xl bg-neutral-100 aspect-[4/3] md:aspect-[16/10] relative">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex justify-between items-start mt-6">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs text-neutral-500 font-mono mt-2">
                      <MapPin className="w-3 h-3" />
                      <span>{p.location}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 bg-[#F7F7F7] uppercase tracking-widest rounded-full text-[#1A1A1A]">
                    {p.category}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW: The 4-Step Design Process */}
      <section className="py-32 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059]">Our Methodology</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-2">The DKOR Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[120px] left-[12%] right-[12%] h-[1px] bg-white/20 z-0" />
            
            {[
              { title: "Discovery", desc: "Deep psychological profiling of how you live and interact with space.", img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=600&q=80" },
              { title: "Architecture", desc: "Comprehensive structural planning, lighting maps, and millwork drafting.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
              { title: "Procurement", desc: "Global sourcing of exclusive materials, rare textiles, and custom furnishings.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
              { title: "Installation", desc: "White-glove delivery, art hanging, and final microscopic detailing.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative z-10 text-center space-y-8"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 mx-auto relative group">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-[#C5A059] flex items-center justify-center font-serif text-2xl text-white shadow-2xl">
                      {idx + 1}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Study */}
      <section className="py-32 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059]">Design Philosophy</span>
              <h2 className="font-serif text-4xl md:text-6xl text-[#1A1A1A] mt-2 mb-6">Material Integrity</h2>
              <p className="text-neutral-600 font-light text-lg leading-relaxed">
                The subconscious mind feels quality before the eyes ever see it. We source the world's most authentic, grounding materials to create spaces that aren't just visually stunning, but psychologically calming.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 border-l border-neutral-200 pl-6">
              {materials.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMaterial(i)}
                  className={`text-left transition-all duration-300 ${activeMaterial === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  <h3 className="font-serif text-2xl text-[#1A1A1A]">{m.title}</h3>
                  <AnimatePresence>
                    {activeMaterial === i && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-neutral-500 font-light mt-2"
                      >
                        {m.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeMaterial}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                src={materials[activeMaterial].img}
                alt="Material Texture"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Infinite Testimonials */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059]">Client Relations</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mt-2">Enduring Trust</h2>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto flex gap-6 overflow-x-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-6 shrink-0 group-hover:[animation-play-state:paused]"
          >
            {[
              { q: "DKOR transformed our penthouse into a sanctuary. The attention to detail is unmatched.", n: "David & Sarah Shapiro", l: "Brickell" },
              { q: "Their team managed everything seamlessly. Walking into our finished home felt like a dream.", n: "Emily Stark", l: "Miami Beach" },
              { q: "A perfect balance of luxury and comfort. We couldn't be happier with our new coastal estate.", n: "The Rodriguez Family", l: "Golden Beach" },
              { q: "The psychological impact of their design is real. Our home feels incredibly grounding and peaceful.", n: "Brooke Cohen", l: "Fort Lauderdale" },
              { q: "From architectural planning to the final pillow, DKOR executed flawlessly.", n: "James T.", l: "Palm Beach" },
              { q: "An absolute masterclass in luxury residential design. The best investment we made.", n: "Elena V.", l: "Boca Raton" }
            ].map((t, idx) => (
              <div key={idx} className="w-[350px] sm:w-[450px] p-10 bg-white border border-neutral-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] shrink-0">
                <div className="text-[#C5A059] text-5xl font-serif leading-none mb-4">"</div>
                <p className="text-[#1A1A1A] font-light text-lg leading-relaxed mb-8">{t.q}</p>
                <div>
                  <p className="font-mono text-xs font-semibold text-[#1A1A1A] uppercase tracking-widest">{t.n}</p>
                  <p className="font-mono text-xs text-neutral-400 mt-1">{t.l}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW: Press & Accolades Showcase & Principal Designer Profile */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Principal Designer */}
          <div className="space-y-8">
            <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059]">Leadership</span>
            <div className="flex items-center gap-6 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" 
                alt="Ivonne Ronderos" 
                className="w-24 h-24 rounded-full object-cover shadow-md grayscale"
              />
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A]">Ivonne Ronderos</h2>
            </div>
            <p className="text-[#555555] font-light text-lg leading-relaxed">
              As the principal and founder, Ivonne has cultivated a studio environment obsessed with the intersection of human psychology and high-end aesthetics. Under her direction, DKOR has become one of Florida's most sought-after luxury architectural design firms.
            </p>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-[#1A1A1A] border border-black/20 rounded-full px-6 py-3 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
                <span>Meet The Team</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#F7F7F7] p-8 rounded-2xl aspect-square flex flex-col justify-center text-center space-y-4">
              <span className="font-serif text-5xl text-[#C5A059]">500k</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]">Houzz Saves</span>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-2xl aspect-square flex flex-col justify-center text-center space-y-4">
              <span className="font-serif text-5xl text-white">#1</span>
              <span className="text-xs font-mono uppercase tracking-widest text-white/70">Luxe Gold List</span>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-2xl aspect-square flex flex-col justify-center text-center space-y-4">
              <span className="font-serif text-5xl text-white">20+</span>
              <span className="text-xs font-mono uppercase tracking-widest text-white/70">Years Experience</span>
            </div>
            <div className="bg-[#F7F7F7] p-8 rounded-2xl aspect-square flex flex-col justify-center text-center space-y-4">
              <span className="font-serif text-5xl text-[#C5A059]">AD</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]">Featured Firm</span>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}

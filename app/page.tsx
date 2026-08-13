'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/data/projects';
import { ArrowUpRight, ArrowDownRight, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function HomePage() {
  const [activeMaterial, setActiveMaterial] = useState(0);
  const materials = [
    { title: 'Calacatta Viola', desc: 'Sourced from Italian quarries, adding dramatic deep purple veining.', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Brushed Brass', desc: 'Warm metallic accents that patinate beautifully over time.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'White Oak', desc: 'Wide-plank European oak bringing natural warmth and grounding.', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' }
  ];

  // Parallax setup for Hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Cinematic Headline Split Animation
  const headline = "Architectural interior design for those who recognize that the ultimate luxury is a space that understands exactly how you live.";
  const words = headline.split(" ");

  return (
    <div className="bg-[#FFFFFF]">
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 origin-center"
        >
          {/* Ken Burns Effect using framer-motion */}
          <motion.div
            animate={{ scale: 1.15 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img 
              src="/home_hero_luxury_living_room_1786600256891.jpg"
              alt="Luxury Interior"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent opacity-90" />
        </motion.div>
        
        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-10 max-w-[90rem] w-full mx-auto text-center space-y-8 md:space-y-12 flex flex-col items-center pt-20 md:pt-24"
        >
          {/* User Provided Hero Image / Typography - Optimized for Visibility */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full max-w-5xl mx-auto py-4 md:py-8"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-white/5 blur-[80px] md:blur-[120px] rounded-full z-0 pointer-events-none" />
            
            <img 
              src="https://res.cloudinary.com/dzepmxuve/image/upload/v1786603057/Designing-Dreams-Together-9_ccdekg.webp" 
              alt="Designing Dreams Together"
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] md:drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] brightness-0 invert"
            />
          </motion.div>

          <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-x-1.5 md:gap-x-2 gap-y-1">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + (idx * 0.05), ease: [0.25, 1, 0.5, 1] }}
                className="text-white/80 text-base md:text-2xl leading-relaxed font-light inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="pt-8 md:pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full px-6 md:px-0"
          >
            <Link
              href="/work"
              className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white text-[#1A1A1A] px-8 md:px-10 py-4 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-500 hover:text-white"
            >
              <div className="absolute inset-0 bg-[#5C6B57] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              <span className="relative z-10">View Selected Work</span>
              <ArrowDownRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:-rotate-45 transition-transform duration-500" />
            </Link>
            <Link
              href="/contact"
              className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-widest hover:border-white transition-all duration-500"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              <span className="relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-500">Discuss Your Project</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Marquee */}
      <section className="py-4 md:py-6 bg-[#1A1A1A] border-y border-white/10 text-white overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex items-center space-x-8 md:space-x-12 px-6 opacity-70 text-[10px] md:text-xs font-mono uppercase tracking-widest"
        >
          {Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span>Architectural Digest</span>
              <span className="text-[#5C6B57]">•</span>
              <span>Luxe Gold List</span>
              <span className="text-[#5C6B57]">•</span>
              <span>HGTV Featured</span>
              <span className="text-[#5C6B57]">•</span>
              <span>Houzz 500k+ Saves</span>
              <span className="text-[#5C6B57]">•</span>
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* The Studio Ethos with Added Imagery */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="space-y-8 md:space-y-12"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">
              The Studio Ethos
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mt-4 md:mt-6 leading-tight">
              We believe that true luxury is <span className="italic text-[#5C6B57]">unseen</span> as much as it is seen. It's the psychological weight of perfect symmetry, the acoustic dampening of heavy textiles, and the intuitive flow of a well-architected floor plan.
            </h2>
            <p className="text-[#555555] text-base md:text-lg font-light leading-relaxed">
              Established in North Miami, DKOR Interiors has spent nearly two decades mastering the delicate balance between high-end architectural grandeur and intimate residential comfort. Our award-winning team handles every phase of the design-build process, ensuring absolute cohesion from blueprints to the final curated object.
            </p>
            <div className="mt-8 md:mt-12">
              <Link href="/about" className="group inline-flex items-center space-x-2 text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#1A1A1A] hover:text-[#5C6B57] transition-colors border-b border-black/20 pb-1">
                <span>Read Our Full Story</span>
                <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" 
                alt="Studio Details" 
                className="w-full h-48 md:h-96 object-cover rounded-2xl mt-8 md:mt-12 shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
                alt="Luxury Space" 
                className="w-full h-48 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Teaser Grid */}
      <section className="py-20 md:py-32 bg-[#E6E8E3]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16 overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Core Competencies</span>
              <h2 className="font-serif text-3xl md:text-6xl text-[#1A1A1A] mt-2">Our Expertise</h2>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Interior Architecture", desc: "Ground-up planning, structural flow, and custom millwork for luxury estates.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
              { title: "Bespoke Furnishing", desc: "Curating rare materials, custom upholstery, and global art procurement.", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
              { title: "Commercial Luxury", desc: "Translating residential comfort into high-end hospitality and corporate suites.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.76, 0, 0.24, 1] }}
                className="group relative overflow-hidden rounded-2xl shadow-sm border border-black/5 cursor-pointer flex flex-col justify-end aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]"
              >
                <div className="absolute inset-0 z-0">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover scale-[1.05] group-hover:scale-[1.15] transition-transform duration-[1.5s] ease-[0.25,1,0.5,1]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 md:group-hover:opacity-80" />
                </div>
                <div className="relative z-10 p-8 md:p-10 transform md:group-hover:-translate-y-2 transition-transform duration-700 ease-[0.25,1,0.5,1]">
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-2 md:mb-4">{service.title}</h3>
                  <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-6 md:mb-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-700 ease-[0.25,1,0.5,1]">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center space-x-2 text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57] md:group-hover:text-white transition-colors border-b border-[#5C6B57]/30 pb-1 md:group-hover:border-white/50">
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric Portfolio Teaser */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[90rem] mx-auto space-y-12 md:space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">
              Featured Transformations
            </span>
            <h2 className="font-serif text-3xl md:text-6xl text-[#1A1A1A] mt-2">
              Recent Works
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Link
              href="/work"
              className="group inline-flex items-center space-x-2 text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#1A1A1A] hover:text-[#5C6B57] transition-colors border-b border-black/20 pb-1"
            >
              <span>View All 100+ Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {PROJECTS_DATA.slice(0, 3).map((p, idx) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.76, 0, 0.24, 1] }}
              className={`group cursor-pointer ${idx === 0 ? 'md:col-span-8' : idx === 1 ? 'md:col-span-4 md:mt-32' : 'md:col-span-12'}`}
            >
              <Link href="/work" className="block w-full h-full">
                <div className="overflow-hidden rounded-xl bg-neutral-100 aspect-[4/3] md:aspect-[16/10] relative">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-[0.25,1,0.5,1]"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="flex justify-between items-start mt-4 md:mt-6">
                  <div>
                    <h3 className="font-serif text-xl md:text-3xl text-[#1A1A1A] group-hover:text-[#5C6B57] transition-colors duration-300">
                      {p.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-[10px] md:text-xs text-neutral-500 font-mono mt-1 md:mt-2">
                      <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      <span>{p.location}</span>
                    </div>
                  </div>
                  <span className="text-[9px] md:text-[10px] font-mono px-2 md:px-3 py-1 bg-[#E6E8E3] uppercase tracking-widest rounded-full text-[#1A1A1A]">
                    {p.category}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The 4-Step Design Process */}
      <section className="py-20 md:py-32 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24 overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Our Methodology</span>
              <h2 className="font-serif text-3xl md:text-6xl mt-2">The DKOR Process</h2>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="hidden md:block absolute top-[120px] left-[12%] right-[12%] h-[1px] bg-white/20 z-0 origin-left" 
            />
            
            {[
              { title: "Discovery", desc: "Deep psychological profiling of how you live and interact with space.", img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=600&q=80" },
              { title: "Architecture", desc: "Comprehensive structural planning, lighting maps, and millwork drafting.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
              { title: "Procurement", desc: "Global sourcing of exclusive materials, rare textiles, and custom furnishings.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
              { title: "Installation", desc: "White-glove delivery, art hanging, and final microscopic detailing.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.76, 0, 0.24, 1] }}
                className="relative z-10 text-center space-y-6 md:space-y-8"
              >
                <div className="w-3/4 sm:w-full aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 mx-auto relative group">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-[0.25,1,0.5,1]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-md border border-[#5C6B57] flex items-center justify-center font-serif text-xl md:text-2xl text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      {idx + 1}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-white/60 font-light text-xs md:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Study */}
      <section className="py-20 md:py-32 bg-[#E6E8E3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="space-y-8 md:space-y-12 order-2 md:order-1"
          >
            <div>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Design Philosophy</span>
              <h2 className="font-serif text-3xl md:text-6xl text-[#1A1A1A] mt-2 mb-4 md:mb-6">Material Integrity</h2>
              <p className="text-neutral-600 font-light text-base md:text-lg leading-relaxed">
                The subconscious mind feels quality before the eyes ever see it. We source the world's most authentic, grounding materials to create spaces that aren't just visually stunning, but psychologically calming.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 border-l border-neutral-300/50 pl-4 md:pl-6">
              {materials.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMaterial(i)}
                  className={`text-left transition-all duration-500 ${activeMaterial === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A] flex items-center gap-3 md:gap-4">
                    {activeMaterial === i && <motion.span layoutId="bullet" className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#5C6B57]" />}
                    {m.title}
                  </h3>
                  <AnimatePresence>
                    {activeMaterial === i && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="text-neutral-500 font-light text-sm md:text-base mt-2 overflow-hidden"
                      >
                        {m.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl order-1 md:order-2"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeMaterial}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                src={materials[activeMaterial].img}
                alt="Material Texture"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Infinite Testimonials */}
      <section className="py-20 md:py-32 px-6 overflow-hidden">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Client Relations</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mt-2">Enduring Trust</h2>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto flex gap-6 overflow-x-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-4 md:gap-6 shrink-0 group-hover:[animation-play-state:paused]"
          >
            {[
              { q: "DKOR transformed our penthouse into a sanctuary. The attention to detail is unmatched.", n: "David & Sarah Shapiro", l: "Brickell" },
              { q: "Their team managed everything seamlessly. Walking into our finished home felt like a dream.", n: "Emily Stark", l: "Miami Beach" },
              { q: "A perfect balance of luxury and comfort. We couldn't be happier with our new coastal estate.", n: "The Rodriguez Family", l: "Golden Beach" },
              { q: "The psychological impact of their design is real. Our home feels incredibly grounding and peaceful.", n: "Brooke Cohen", l: "Fort Lauderdale" },
              { q: "From architectural planning to the final pillow, DKOR executed flawlessly.", n: "James T.", l: "Palm Beach" },
              { q: "An absolute masterclass in luxury residential design. The best investment we made.", n: "Elena V.", l: "Boca Raton" }
            ].map((t, idx) => (
              <div key={idx} className="w-[300px] sm:w-[350px] md:w-[450px] p-8 md:p-10 bg-white border border-neutral-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] shrink-0 transition-transform duration-500 hover:-translate-y-2">
                <div className="text-[#5C6B57] text-4xl md:text-5xl font-serif leading-none mb-4">"</div>
                <p className="text-[#1A1A1A] font-light text-base md:text-lg leading-relaxed mb-6 md:mb-8">{t.q}</p>
                <div>
                  <p className="font-mono text-[10px] md:text-xs font-semibold text-[#1A1A1A] uppercase tracking-widest">{t.n}</p>
                  <p className="font-mono text-[10px] md:text-xs text-neutral-400 mt-1">{t.l}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Press & Accolades Showcase & Principal Designer Profile */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Principal Designer */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="space-y-6 md:space-y-8"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Leadership</span>
            <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shadow-xl shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" 
                  alt="Ivonne Ronderos" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A]">Ivonne Ronderos</h2>
            </div>
            <p className="text-[#555555] font-light text-base md:text-lg leading-relaxed">
              As the principal and founder, Ivonne has cultivated a studio environment obsessed with the intersection of human psychology and high-end aesthetics. Under her direction, DKOR has become one of Florida's most sought-after luxury architectural design firms.
            </p>
            <div className="pt-4">
              <Link href="/about" className="group inline-flex items-center space-x-2 text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#1A1A1A] border border-black/20 rounded-full px-5 py-2.5 md:px-6 md:py-3 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
                <span>Meet The Team</span>
                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { num: "500k", text: "Houzz Saves", style: "bg-[#E6E8E3] text-[#5C6B57] label-dark" },
              { num: "#1", text: "Luxe Gold List", style: "bg-[#1A1A1A] text-white label-light" },
              { num: "20+", text: "Years Experience", style: "bg-[#1A1A1A] text-white label-light" },
              { num: "AD", text: "Featured Firm", style: "bg-[#E6E8E3] text-[#5C6B57] label-dark" }
            ].map((award, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.76, 0, 0.24, 1] }}
                className={`${award.style.split(' label-')[0]} p-6 md:p-8 rounded-2xl aspect-square flex flex-col justify-center text-center space-y-2 md:space-y-4 hover:-translate-y-2 transition-transform duration-500`}
              >
                <span className={`font-serif text-4xl md:text-5xl ${award.style.includes('text-[#5C6B57]') ? 'text-[#5C6B57]' : 'text-white'}`}>{award.num}</span>
                <span className={`text-[9px] md:text-xs font-mono uppercase tracking-widest ${award.style.includes('label-dark') ? 'text-[#1A1A1A]' : 'text-white/70'}`}>{award.text}</span>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

    </div>
  );
}

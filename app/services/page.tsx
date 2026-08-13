'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Full-Scale Interior Architecture',
      desc: 'From initial conceptual blueprints to final structural execution, we manage the entire architectural interior process for ground-up builds and major renovations. We collaborate directly with leading architects and contractors.',
      features: ['Space Planning & Flow Analysis', 'Custom Millwork Design', 'Lighting Architecture', 'Material Selection & Sourcing']
    },
    {
      title: 'Bespoke Furnishing & Styling',
      desc: 'Curating a deeply personal environment through rare finds, custom upholstery, and luxury European imports. We handle everything from art curation to the final placement of accessories.',
      features: ['Custom Furniture Design', 'Art Advisory & Curation', 'Textile & Upholstery Selection', 'White-Glove Installation']
    },
    {
      title: 'Commercial Luxury Spaces',
      desc: 'Translating the comfort of luxury residential design into high-end corporate environments, boutique hospitality spaces, and executive lounges. Elevating brand presence through physical spaces.',
      features: ['Brand Identity Integration', 'Executive Suite Design', 'Hospitality Ambience', 'Ergonomic Luxury']
    }
  ];

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 origin-center">
          <motion.div
            animate={{ scale: 1.15 }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img 
              src="/services_hero_material_board_1786600542881.jpg"
              alt="DKOR Material Integrity"
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/40 via-[#1A1A1A]/80 to-[#1A1A1A]" />
        </motion.div>
        
        <motion.div 
          style={{ y: textY, opacity }}
          className="relative z-10 text-center space-y-6 max-w-4xl mx-auto mt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">
              Our Capabilities
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mt-4">
              Bespoke Services
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            We don't just decorate rooms; we architect atmospheres. Discover our holistic approach to transforming high-end properties into tailored sanctuaries.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Breakdown */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center overflow-hidden`}
          >
            <motion.div 
              initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <span className="text-[#5C6B57] font-mono text-sm tracking-widest uppercase">0{index + 1}</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A]">{service.title}</h2>
              <p className="text-[#555555] text-lg font-light leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-4 pt-4">
                {service.features.map((feature, fIdx) => (
                  <motion.li 
                    key={fIdx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: fIdx * 0.1, ease: [0.76, 0, 0.24, 1] }}
                    className="flex items-center gap-4 text-sm font-mono uppercase tracking-widest text-[#1A1A1A]"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#E6E8E3] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#5C6B57]" />
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 group">
                <img 
                  src={`https://images.unsplash.com/photo-${index === 0 ? '1600607687939-ce8a6c25118c' : index === 1 ? '1600210492486-724fe5c67fb0' : '1600585154340-be6161a56a0c'}?auto=format&fit=crop&w=1200&q=80`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.25,1,0.5,1]"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-[#E6E8E3] py-32 px-6 text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-[#1A1A1A]">Ready to Elevate Your Space?</h2>
          <p className="text-[#555555] text-lg font-light leading-relaxed">
            Our design principals are available for initial consultations to discuss your vision, parameters, and timeline.
          </p>
          <div className="pt-8">
            <Link 
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center gap-4 px-10 py-5 bg-[#1A1A1A] text-white rounded-full text-xs uppercase tracking-widest font-mono hover:text-[#1A1A1A] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[#5C6B57] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              <span className="relative z-10">Request Consultation</span> 
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

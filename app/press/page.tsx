'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PressPage() {
  const awards = [
    { title: "Luxe Gold List 2024", category: "Honoree", publisher: "Luxe Interiors + Design" },
    { title: "Best of Florida Design", category: "Winner", publisher: "Florida Design Magazine" },
    { title: "Top 50 Coastal Designers", category: "Featured", publisher: "Ocean Home Magazine" },
    { title: "Architectural Digest Pro", category: "Directory Member", publisher: "Architectural Digest" }
  ];

  const features = [
    { title: "The New Miami Modern", publication: "Luxe Magazine", date: "Oct 2024", image: "/work_hero_modern_architecture_1786600909968.jpg" },
    { title: "Penthouse Perfection", publication: "Florida Design", date: "Aug 2024", image: "/home_hero_luxury_living_room_1786600256891.jpg" },
    { title: "Mastering Neutral Tones", publication: "Elle Decor", date: "Jun 2024", image: "/about_hero_design_studio_1786600415286.jpg" }
  ];

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Media & Recognition</span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] mt-6 leading-tight">Press & Awards</h1>
          <p className="text-[#555555] font-light text-lg mt-8 max-w-2xl mx-auto">
            Our commitment to design excellence has been recognized by leading architectural and interior design publications worldwide.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-[#1A1A1A] mb-12 border-b border-neutral-100 pb-6">Recent Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl aspect-[4/5] relative bg-neutral-100">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#5C6B57] font-mono">{feature.publication} — {feature.date}</span>
                  <h3 className="font-serif text-xl text-[#1A1A1A] mt-2 group-hover:text-[#5C6B57] transition-colors">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-[#1A1A1A] mb-12 border-b border-neutral-200 pb-6">Industry Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-neutral-200 bg-white rounded-xl hover:border-[#5C6B57] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#E6E8E3] flex items-center justify-center mb-6">
                  <span className="text-[#5C6B57]">✦</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#555555] font-mono">{award.category}</span>
                <h3 className="font-serif text-xl text-[#1A1A1A] mt-2 mb-4">{award.title}</h3>
                <p className="text-sm text-[#555555]">{award.publisher}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BlogPage() {
  const articles = [
    {
      title: "The Psychology of Luxury: Why Material Integrity Matters",
      category: "Design Theory",
      date: "Nov 12, 2024",
      image: "/services_hero_material_board_1786600542881.jpg",
      excerpt: "When we touch a surface, our brain makes immediate calculations about value, permanence, and quality. In luxury design, faking a material is the fastest way to break that illusion."
    },
    {
      title: "Maximizing Natural Light in Coastal Properties",
      category: "Architecture",
      date: "Oct 28, 2024",
      image: "/work_hero_modern_architecture_1786600909968.jpg",
      excerpt: "Florida's coastal light is unique. It's harsh at midday and impossibly golden at dusk. Designing fenestration and interior layouts to capture this dynamic shift requires a precise approach."
    },
    {
      title: "The Return of Warm Woods in Contemporary Spaces",
      category: "Trends",
      date: "Sep 15, 2024",
      image: "/home_hero_luxury_living_room_1786600256891.jpg",
      excerpt: "For the last decade, stark whites and cool grays dominated modernism. Now, we're seeing a massive resurgence in deeply textured, warm organic woods to ground large architectural spaces."
    }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <section className="pt-48 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">Journal</span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] mt-6 leading-tight">Design Insights</h1>
          <p className="text-[#555555] font-light text-lg mt-8 max-w-2xl mx-auto">
            Explorations in architecture, interior styling, and the psychology of how we experience the built environment.
          </p>
        </motion.div>
      </section>

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="overflow-hidden rounded-xl aspect-[4/3] relative mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#5C6B57]">{article.category}</span>
                <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-400">{article.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#5C6B57] transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-[#555555] font-light text-sm leading-relaxed flex-grow">
                {article.excerpt}
              </p>
              <div className="mt-6 flex items-center text-xs font-mono tracking-widest uppercase text-[#1A1A1A] group-hover:text-[#5C6B57] transition-colors">
                <span className="mr-2">Read Article</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

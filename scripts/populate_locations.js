const fs = require('fs');
const path = require('path');

const locations = [
  { slug: 'miami', name: 'Miami, FL' },
  { slug: 'palm-beach', name: 'Palm Beach, FL' },
  { slug: 'ft-lauderdale', name: 'Ft Lauderdale, FL' },
  { slug: 'sunny-isles', name: 'Sunny Isles, FL' },
  { slug: 'aventura', name: 'Aventura, FL' }
];

locations.forEach(loc => {
  const fileContent = 'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function LocationPage() {
  return (
    <div className=\"bg-[#FFFFFF] min-h-screen\">
      <section className=\"relative h-[70vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]\">
        <div className=\"absolute inset-0 z-0\">
          <img 
            src=\"/home_hero_luxury_living_room_1786600256891.jpg\"
            alt=\"Luxury Interior Design in \\"
            className=\"w-full h-full object-cover opacity-50 mix-blend-overlay\"
          />
          <div className=\"absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/80 to-[#1A1A1A]\" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: \"easeOut\" }}
          className=\"relative z-10 text-center space-y-6 max-w-4xl mx-auto mt-24\"
        >
          <span className=\"flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-mono text-[#5C6B57]\">
            <MapPin className=\"w-4 h-4\" />
            <span>Service Area</span>
          </span>
          <h1 className=\"font-serif text-5xl md:text-7xl text-white leading-tight\">
            Luxury Interior Design in {loc.name}
          </h1>
          <p className=\"text-white/70 text-lg font-light leading-relaxed max-w-2xl mx-auto\">
            DKOR Interiors brings award-winning architectural design and uncompromising material integrity to high-end residential and commercial properties throughout {loc.name}.
          </p>
        </motion.div>
      </section>

      <section className=\"py-24 px-6 md:px-12 max-w-7xl mx-auto\">
        <div className=\"grid grid-cols-1 md:grid-cols-2 gap-16 items-center\">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=\"space-y-8\"
          >
            <h2 className=\"font-serif text-4xl text-[#1A1A1A]\">Elevating {loc.name} Real Estate</h2>
            <p className=\"text-[#555555] font-light leading-relaxed text-lg\">
              Whether you are renovating a coastal penthouse, building a custom estate, or redesigning a commercial workspace, our process is designed to handle the complexity of luxury builds in {loc.name}. 
            </p>
            <p className=\"text-[#555555] font-light leading-relaxed text-lg\">
              We manage every aspect of the project—from conceptual architecture and material sourcing to final procurement and installation—ensuring a seamless experience that respects both your time and vision.
            </p>
            <Link href=\"/contact\" className=\"inline-flex items-center space-x-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-mono hover:bg-[#5C6B57] transition-colors mt-4\">
              <span>Discuss Your Project</span>
              <ArrowUpRight className=\"w-4 h-4\" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className=\"relative aspect-square rounded-2xl overflow-hidden\"
          >
            <img src=\"/about_hero_design_studio_1786600415286.jpg\" alt=\"Design Process\" className=\"w-full h-full object-cover\" />
            <div className=\"absolute inset-0 border border-black/10 rounded-2xl pointer-events-none\"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
;
  
  const pagePath = path.join(process.cwd(), 'app', 'locations', loc.slug, 'page.tsx');
  fs.writeFileSync(pagePath, fileContent);
  console.log('Updated: ' + pagePath);
});

// Also create the All Locations page
const allLocationsContent = 'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AllLocationsPage() {
  const locations = [
    { slug: 'miami', name: 'Miami, FL', img: '/work_hero_modern_architecture_1786600909968.jpg' },
    { slug: 'palm-beach', name: 'Palm Beach, FL', img: '/home_hero_luxury_living_room_1786600256891.jpg' },
    { slug: 'ft-lauderdale', name: 'Ft Lauderdale, FL', img: '/services_hero_material_board_1786600542881.jpg' },
    { slug: 'sunny-isles', name: 'Sunny Isles, FL', img: '/contact_hero_desk_setup_1786600824263.jpg' },
    { slug: 'aventura', name: 'Aventura, FL', img: '/about_hero_design_studio_1786600415286.jpg' }
  ];

  return (
    <div className=\"bg-[#F7F7F7] min-h-screen\">
      <section className=\"pt-48 pb-24 px-6 md:px-12 max-w-5xl mx-auto text-center\">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className=\"text-xs uppercase tracking-widest font-mono text-[#5C6B57]\">Global & Local</span>
          <h1 className=\"font-serif text-5xl md:text-7xl text-[#1A1A1A] mt-6 leading-tight\">Service Areas</h1>
          <p className=\"text-[#555555] font-light text-lg mt-8 max-w-2xl mx-auto\">
            While our studio is based in South Florida, we serve elite residential and commercial clients locally, nationally, and internationally.
          </p>
        </motion.div>
      </section>

      <section className=\"pb-32 px-6 md:px-12 max-w-7xl mx-auto\">
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          {locations.map((loc, idx) => (
            <Link href={\/locations/\\} key={idx}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className=\"group cursor-pointer relative overflow-hidden rounded-2xl aspect-square\"
              >
                <img src={loc.img} alt={loc.name} className=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700\" />
                <div className=\"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8\">
                  <h3 className=\"font-serif text-2xl text-white\">{loc.name}</h3>
                  <div className=\"mt-4 flex items-center text-xs font-mono tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300\">
                    <span className=\"mr-2\">Explore Services</span>
                    <svg className=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M17 8l4 4m0 0l-4 4m4-4H3\"></path></svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
;
fs.writeFileSync(path.join(process.cwd(), 'app', 'locations', 'page.tsx'), allLocationsContent);
console.log('Updated: app/locations/page.tsx');

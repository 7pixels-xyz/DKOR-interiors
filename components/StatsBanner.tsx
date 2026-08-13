'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of Excellence', value: '20+' },
  { label: 'Completed Projects', value: '150+' },
  { label: 'Design Awards', value: '25+' },
  { label: 'Featured Publications', value: '50+' },
];

export default function StatsBanner() {
  return (
    <section className="bg-[#161513] text-[#FAF8F5] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col items-center md:items-start gap-2"
            >
              <div className="font-serif text-5xl md:text-6xl font-light text-[#8C7355]">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-[#FAF8F5]/70 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

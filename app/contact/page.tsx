'use client';

import React, { useState, useRef } from 'react';
import { Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState<string>('');
  const [scope, setScope] = useState<string>('');

  const budgetOptions = ['$100k - $250k', '$250k - $500k', '$500k - $1M', '$1M+'];
  const scopeOptions = ['Full Home Renovation', 'New Construction', 'Single Room Design', 'Commercial Space'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-[50vh] md:h-[60vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 origin-center">
          <motion.div
            animate={{ scale: 1.15 }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img 
              src="/contact_hero_desk_setup_1786600824263.jpg"
              alt="DKOR Concierge"
              className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/80 to-[#1A1A1A]" />
        </motion.div>
        
        <motion.div 
          style={{ y: textY, opacity }}
          className="relative z-10 text-center space-y-4 md:space-y-6 max-w-3xl mx-auto mt-16 md:mt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">
              Direct Consultation
            </span>
            <h1 className="font-serif text-4xl md:text-7xl text-white leading-tight mt-2 md:mt-4">
              Initiate Your Project
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-white/70 text-sm md:text-lg font-light leading-relaxed px-4 md:px-0"
          >
            Begin the journey to a masterfully curated environment. Our design principals are currently accepting bespoke residential and commercial commissions across the globe.
          </motion.p>
        </motion.div>
      </section>

      <div className="pb-16 pt-12 md:pb-24 md:pt-16 px-6 md:px-12 max-w-7xl mx-auto space-y-12 md:space-y-20 relative z-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Contact Information & Concierge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-5 space-y-8 md:space-y-12 order-2 lg:order-1"
          >
            <div className="bg-[#1A1A1A] text-white p-8 md:p-14 rounded-3xl md:rounded-[2rem] space-y-10 md:space-y-12 shadow-2xl">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-3 md:mb-4">Studio Headquarters</h2>
                <p className="text-white/60 font-light text-sm leading-relaxed md:leading-loose">
                  Our North Miami design laboratory is the birthplace of over 400 global projects. We welcome prospective clients by appointment.
                </p>
              </div>
              
              <div className="space-y-6 md:space-y-8 text-sm">
                {[
                  { icon: MapPin, label: "Location", text: "2079 NE 155th Street\nNorth Miami, FL 33162" },
                  { icon: Phone, label: "Direct Line", text: "+1 (305) 981-2710", link: "tel:3059812710" },
                  { icon: MessageSquare, label: "Instant Messaging", text: "Connect via WhatsApp", link: "https://wa.me/13059812710" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + (idx * 0.15), ease: [0.76, 0, 0.24, 1] }}
                    className="flex items-start space-x-4 md:space-x-5 group cursor-pointer"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 md:group-hover:bg-[#5C6B57] transition-colors duration-500">
                      <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white md:group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="pt-0.5 md:pt-1">
                      <p className="font-mono tracking-widest uppercase text-[10px] md:text-xs text-[#5C6B57] mb-1">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} target={item.label === "Instant Messaging" ? "_blank" : undefined} rel="noopener noreferrer" className="text-white/80 font-light text-sm md:text-base block md:hover:text-white transition-colors whitespace-pre-line">
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-white/80 font-light text-sm md:text-base leading-relaxed whitespace-pre-line">{item.text}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="p-8 md:p-12 bg-[#E6E8E3] border border-neutral-100 rounded-3xl md:rounded-[2rem] text-center space-y-6 shadow-sm"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-[#1A1A1A] text-[#5C6B57] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
                  >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="font-serif text-2xl md:text-4xl text-[#1A1A1A]">Inquiry Received</h3>
                  <p className="text-[#555555] text-sm md:text-lg font-light leading-relaxed max-w-md mx-auto">
                    Thank you. A senior design principal will review your project parameters and contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-2 md:space-y-3"
                      >
                        <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Eleanor Vance"
                          className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400 hover:border-neutral-300"
                        />
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-2 md:space-y-3"
                      >
                        <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Phone Number *</label>
                        <input
                          required
                          type="tel"
                          placeholder="+1 (305) 000-0000"
                          className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400 hover:border-neutral-300"
                        />
                      </motion.div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="space-y-2 md:space-y-3"
                    >
                      <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="eleanor@example.com"
                        className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400 hover:border-neutral-300"
                      />
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="space-y-2 md:space-y-3"
                    >
                      <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">What type of project are you planning?</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                        {scopeOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setScope(opt)}
                            className={`py-3.5 md:py-4 px-4 text-[11px] md:text-xs font-mono tracking-wider rounded-xl border-2 transition-all duration-500 ${
                              scope === opt 
                                ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-lg shadow-black/10' 
                                : 'border-transparent bg-[#E6E8E3] text-neutral-500 hover:border-[#1A1A1A]/20 hover:bg-white'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="space-y-2 md:space-y-3"
                      >
                        <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Where is the project located?</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Boca Raton, FL"
                          className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400 hover:border-neutral-300"
                        />
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="space-y-2 md:space-y-3"
                      >
                        <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">When are you looking to begin?</label>
                        <select
                          required
                          className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all text-neutral-600 appearance-none hover:border-neutral-300"
                        >
                          <option value="" disabled selected>Select Timeline</option>
                          <option value="immediately">Immediately</option>
                          <option value="1-3 months">1-3 Months</option>
                          <option value="3-6 months">3-6 Months</option>
                          <option value="6+ months">6+ Months / Planning Stage</option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="space-y-2 md:space-y-3"
                    >
                      <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">What is the approximate scope / budget?</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setBudget(opt)}
                            className={`py-3.5 md:py-4 px-2 text-[10px] md:text-[11px] font-mono tracking-widest rounded-xl border-2 transition-all duration-500 ${
                              budget === opt 
                                ? 'border-[#5C6B57] bg-[#5C6B57] text-white shadow-lg shadow-[#5C6B57]/20' 
                                : 'border-transparent bg-[#E6E8E3] text-neutral-500 hover:border-[#5C6B57]/30 hover:bg-white'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                      className="space-y-2 md:space-y-3"
                    >
                      <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Tell us a little about the project</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Share your vision, challenges, and any specific requirements..."
                        className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all resize-none placeholder:text-neutral-400 leading-relaxed hover:border-neutral-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <button
                      type="submit"
                      className="group w-full py-4 md:py-5 bg-[#1A1A1A] text-white rounded-xl text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono hover:bg-[#5C6B57] transition-all duration-500 flex items-center justify-center gap-3 md:gap-4 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[#5C6B57] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                      <span className="relative z-10">Discuss Your Project</span>
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-500" />
                    </button>
                  </motion.div>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

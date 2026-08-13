'use client';

import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact_hero_desk_setup_1786600824263.jpg"
            alt="DKOR Concierge"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/80 to-[#1A1A1A]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-6 max-w-3xl mx-auto mt-24"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">
            Direct Consultation
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
            Initiate Your Project
          </h1>
          <p className="text-white/70 text-lg font-light leading-relaxed">
            Begin the journey to a masterfully curated environment. Our design principals are currently accepting bespoke residential and commercial commissions across the globe.
          </p>
        </motion.div>
      </section>

      <div className="pb-24 pt-16 px-6 md:px-12 max-w-7xl mx-auto space-y-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Information & Concierge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="bg-[#1A1A1A] text-white p-10 md:p-14 rounded-[2rem] space-y-12 shadow-2xl">
              <div>
                <h2 className="font-serif text-3xl mb-4">Studio Headquarters</h2>
                <p className="text-white/60 font-light text-sm leading-loose">
                  Our North Miami design laboratory is the birthplace of over 400 global projects. We welcome prospective clients by appointment.
                </p>
              </div>
              
              <div className="space-y-8 text-sm">
                <div className="flex items-start space-x-5 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#5C6B57] transition-colors">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="pt-1">
                    <p className="font-mono tracking-widest uppercase text-xs text-[#5C6B57] mb-1">Location</p>
                    <p className="text-white/80 font-light leading-relaxed">2079 NE 155th Street<br/>North Miami, FL 33162</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#5C6B57] transition-colors">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="pt-1">
                    <p className="font-mono tracking-widest uppercase text-xs text-[#5C6B57] mb-1">Direct Line</p>
                    <a href="tel:3059812710" className="text-white/80 font-light block hover:text-white transition-colors">
                      +1 (305) 981-2710
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#5C6B57] transition-colors">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div className="pt-1">
                    <p className="font-mono tracking-widest uppercase text-xs text-[#5C6B57] mb-1">Instant Messaging</p>
                    <a
                      href="https://wa.me/13059812710"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 font-light block hover:text-white transition-colors"
                    >
                      Connect via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 bg-[#E6E8E3] border border-neutral-100 rounded-[2rem] text-center space-y-6 shadow-sm"
                >
                  <div className="w-20 h-20 bg-[#1A1A1A] text-[#5C6B57] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">Inquiry Received</h3>
                  <p className="text-[#555555] text-lg font-light leading-relaxed max-w-md mx-auto">
                    Thank you. A senior design principal will review your project parameters and contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Eleanor Vance"
                          className="w-full px-5 py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Phone Number *</label>
                        <input
                          required
                          type="tel"
                          placeholder="+1 (305) 000-0000"
                          className="w-full px-5 py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="eleanor@example.com"
                        className="w-full px-5 py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">What type of project are you planning?</label>
                      <div className="grid grid-cols-2 gap-3">
                        {scopeOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setScope(opt)}
                            className={`py-4 px-4 text-xs font-mono tracking-wider rounded-xl border-2 transition-all duration-300 ${
                              scope === opt 
                                ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' 
                                : 'border-transparent bg-[#E6E8E3] text-neutral-500 hover:border-[#1A1A1A]/20 hover:bg-white'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Where is the project located?</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Boca Raton, FL"
                          className="w-full px-5 py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">When are you looking to begin?</label>
                        <select
                          required
                          className="w-full px-5 py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all text-neutral-600 appearance-none"
                        >
                          <option value="" disabled selected>Select Timeline</option>
                          <option value="immediately">Immediately</option>
                          <option value="1-3 months">1-3 Months</option>
                          <option value="3-6 months">3-6 Months</option>
                          <option value="6+ months">6+ Months / Planning Stage</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">What is the approximate scope / budget?</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setBudget(opt)}
                            className={`py-4 px-2 text-[11px] font-mono tracking-widest rounded-xl border-2 transition-all duration-300 ${
                              budget === opt 
                                ? 'border-[#5C6B57] bg-[#5C6B57] text-white' 
                                : 'border-transparent bg-[#E6E8E3] text-neutral-500 hover:border-[#5C6B57]/30 hover:bg-white'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Tell us a little about the project</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Share your vision, challenges, and any specific requirements..."
                        className="w-full px-5 py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all resize-none placeholder:text-neutral-400 leading-relaxed"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group w-full py-5 bg-[#1A1A1A] text-white rounded-xl text-xs uppercase tracking-[0.2em] font-mono hover:bg-[#5C6B57] transition-all duration-500 flex items-center justify-center gap-4"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Check, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative bg-[#0A2540] overflow-hidden py-12 md:py-15 px-4 sm:px-6 lg:px-8 border-t border-sky-950">
      {/* Premium Ambient Visual Blur Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0FB9B1]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4 max-w-2xl mx-auto"
        >
          Ready For A Healthier, More Confident Smile?
        </motion.h2>
        
        {/* Subheading Description */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto mb-6 antialiased"
        >
          Join 12,000+ happy patients who trust Pure Smile Clinic, Dehradun for advanced dental care, experienced specialists, personalized treatment plans, and comfortable patient experiences.
        </motion.p>

        {/* Premium Trust Strip with separators */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-b border-white/10 py-4 mb-6 max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap items-center justify-center gap-x-5 gap-y-3 md:gap-y-0 text-[11px] font-sans font-bold uppercase tracking-wider text-slate-200">
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#0FB9B1]/10 border border-[#0FB9B1]/30 flex items-center justify-center text-[#0FB9B1]">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>15+ Years Experience</span>
            </span>
            <span className="hidden md:inline text-white/10 font-light text-base">|</span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#0FB9B1]/10 border border-[#0FB9B1]/30 flex items-center justify-center text-[#0FB9B1]">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>12,000+ Patients Treated</span>
            </span>
            <span className="hidden md:inline text-white/10 font-light text-base">|</span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#0FB9B1]/10 border border-[#0FB9B1]/30 flex items-center justify-center text-[#0FB9B1]">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>Advanced Digital Dentistry</span>
            </span>
            <span className="hidden md:inline text-white/10 font-light text-base">|</span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#0FB9B1]/10 border border-[#0FB9B1]/30 flex items-center justify-center text-[#0FB9B1]">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>Easy Appointment Booking</span>
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-sm mx-auto sm:max-w-none"
        >
          <a 
            href="#book"
            className="w-full sm:w-auto px-8 py-3 bg-[#0FB9B1] hover:bg-[#0CA29B] text-white font-sans font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-[#0FB9B1]/15 hover:shadow-xl hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 text-center select-none cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </a>
          <a 
            href="tel:+919876543210"
            className="w-full sm:w-auto px-8 py-3 border border-white/20 hover:border-[#0FB9B1] hover:text-white text-white font-sans font-bold text-xs sm:text-sm rounded-full bg-white/5 hover:bg-white/10 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 select-none cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#0FB9B1]" />
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

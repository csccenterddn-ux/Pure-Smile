import React from 'react';
import { Award, GraduationCap, Calendar, Compass, Medal, Globe, BadgeCheck, Activity, Smile, Stethoscope, Check, Phone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const qualificationsList = [
  {
    year: '2009',
    title: 'BDS, King George Medical University',
    description: 'Bachelor of Dental Surgery with Distinction',
    icon: GraduationCap,
  },
  {
    year: '2011',
    title: 'MDS Orthodontics, AIIMS Delhi',
    description: 'Masters in Dental Surgery, Gold Medal Recipient',
    icon: Medal,
  },
  {
    year: '2014',
    title: 'Fellowship in Implantology, Germany',
    description: 'Advanced Implant Training at Friadent Institute, Mannheim',
    icon: Compass,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const listContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

const timelineContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const timelineItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function AboutDoctor() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
        >
          <span className="text-[10px] font-sans font-extrabold tracking-widest text-[#0FB9B1] uppercase bg-[#ECFDF5] border border-[#D1FAE5] px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-sm select-none">
            MEET YOUR DOCTOR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0A1628] tracking-tight leading-tight mb-3">
            Experienced Care.<br className="hidden sm:block" /> Trusted Smiles.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed font-body">
            Meet the specialist behind thousands of successful dental treatments and confident smiles across Dehradun.
          </p>
        </motion.div>

        {/* Layout Column Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Image wrapper with floating trust badges */}
          <div className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] z-10 bg-slate-50"
            >
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Dr. Amit Sharma" 
                className="w-full h-[32rem] object-cover object-center"
              />
            </motion.div>

            {/* Top-Left Badge: 12+ Years of Clinical Excellence */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-4 -left-3 md:-top-4 md:-left-6 z-20 backdrop-blur-md bg-white/95 border border-[#E2E8F0]/80 shadow-xl rounded-2xl p-3 md:p-3.5 flex items-center gap-2.5 max-w-[70%] md:max-w-none"
            >
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-[#ECFDF5] text-[#0FB9B1] flex items-center justify-center shrink-0 shadow-sm">
                <Award className="w-4.5 h-4.5 md:w-5 md:h-5 stroke-[2.25]" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-sm md:text-lg font-heading font-extrabold text-[#0A1628]">12+ Years</p>
                <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wide mt-0.5 whitespace-nowrap">of Clinical Excellence</p>
              </div>
            </motion.div>

            {/* Top-Right Badge: Best Dentist Award */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-24 -right-3 md:-top-4 md:-right-6 z-20 backdrop-blur-md bg-white/95 border border-[#E2E8F0]/80 shadow-xl rounded-2xl p-3 md:p-3.5 flex items-center gap-2.5 max-w-[70%] md:max-w-[210px]"
            >
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 shadow-sm animate-pulse-subtle">
                <span className="text-sm md:text-lg">🏆</span>
              </div>
              <div className="text-left leading-tight">
                <p className="text-xs md:text-sm font-heading font-extrabold text-[#0A1628] leading-tight">Best Dentist Award</p>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5 whitespace-nowrap">City Healthcare Awards 2024</p>
              </div>
            </motion.div>

            {/* Bottom Badge: 5000+ Smiles Restored */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [4, -4, 4] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 -right-3 md:-bottom-4 md:-right-6 z-20 backdrop-blur-md bg-white/95 border border-[#E2E8F0]/80 shadow-xl rounded-2xl p-3 md:p-3.5 flex items-center gap-2.5"
            >
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-[#103A63]/10 to-[#0FB9B1]/10 text-[#0FB9B1] flex items-center justify-center shrink-0 shadow-sm">
                <Smile className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#0FB9B1]" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-sm md:text-lg font-heading font-extrabold text-[#0A1628]">5000+</p>
                <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wide mt-0.5 whitespace-nowrap">Smiles Restored</p>
              </div>
            </motion.div>

            {/* Background design accents */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2540]/5 to-[#0FB9B1]/5 rounded-3xl -rotate-3 translate-x-2 translate-y-3 z-0" />
          </div>

          {/* Right Column: Narrative content, grid, experts, timeline, credentials */}
          <div className="lg:col-span-7 text-left space-y-4 sm:space-y-4">
            
            {/* Doctor Info Title, Qualifications, & Bio */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {/* Doctor Info Title & Hierarchy */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0A1628] tracking-tight mb-1">
                  Dr. Amit Sharma
                </h3>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
                  <span className="text-[#0FB9B1]">Implantologist & Cosmetic Dentist</span>
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full shrink-0" />
                  <span className="text-slate-500">BDS, MDS</span>
                </div>

                {/* DOCTOR TRUST STRIP */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-semibold text-slate-500 font-sans mt-2 py-1.5 px-3 bg-[#F8FAFC] border border-[#E2E8F0]/80 rounded-xl inline-flex select-none">
                  <span className="flex items-center gap-1">
                    <span className="text-amber-400">⭐⭐⭐⭐⭐</span>
                    <span className="font-extrabold text-[#0A1628]">4.9</span> Google Rating
                  </span>
                  <span className="text-slate-300 font-normal opacity-70">•</span>
                  <span>12+ Years Experience</span>
                  <span className="text-slate-300 font-normal opacity-70">•</span>
                  <span>5000+ Happy Patients</span>
                </div>
              </div>

              {/* SHORT BIO (Max 2 short paragraphs focusing on: Experience, Expertise, Patient-first care, Trust, Clinical excellence) */}
              <div className="space-y-3 text-sm sm:text-base text-[#475569] font-normal leading-relaxed font-body">
                <p>
                  Dr. Amit Sharma is an experienced Implantologist and Cosmetic Dentist with over 12 years of clinical practice. He specializes in dental implants, smile makeovers, and advanced restorative treatments.
                </p>
                <p>
                  Known for his patient-first approach and precision-driven care, he has helped thousands of patients achieve healthier, more confident smiles through modern, evidence-based dentistry.
                </p>
              </div>
            </motion.div>

            {/* TRUST INFORMATION GRID */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
            >
              
              {/* Card 1: Languages */}
              <motion.div 
                variants={cardVariants}
                className="bg-[#F8FAFC]/65 border border-[#E2E8F0] rounded-2xl p-4 flex flex-col justify-between hover:shadow-md hover:border-[#0FB9B1]/30 transition-all duration-300 min-h-[90px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] text-[#0FB9B1] flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Languages Spoken</span>
                </div>
                <div className="text-sm font-bold text-[#0A1628] leading-relaxed">
                  Hindi • English • Punjabi
                </div>
              </motion.div>

              {/* Card 2: Experience */}
              <motion.div 
                variants={cardVariants}
                className="bg-[#F8FAFC]/65 border border-[#E2E8F0] rounded-2xl p-4 flex flex-col justify-between hover:shadow-md hover:border-[#0FB9B1]/30 transition-all duration-300 min-h-[90px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] text-[#0FB9B1] flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Experience</span>
                </div>
                <div className="text-sm font-bold text-[#0A1628] leading-relaxed">
                  12+ Years of Clinical Excellence
                </div>
              </motion.div>

              {/* Card 3: Specialization */}
              <motion.div 
                variants={cardVariants}
                className="bg-[#F8FAFC]/65 border border-[#E2E8F0] rounded-2xl p-4 flex flex-col justify-between hover:shadow-md hover:border-[#0FB9B1]/30 transition-all duration-300 min-h-[90px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] text-[#0FB9B1] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Specialization</span>
                </div>
                <div className="text-sm font-bold text-[#0A1628] leading-relaxed">
                  Dental Implants • Smile Makeovers
                </div>
              </motion.div>

              {/* Card 4: Patient Outcomes */}
              <motion.div 
                variants={cardVariants}
                className="bg-[#F8FAFC]/65 border border-[#E2E8F0] rounded-2xl p-4 flex flex-col justify-between hover:shadow-md hover:border-[#0FB9B1]/30 transition-all duration-300 min-h-[90px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] text-[#0FB9B1] flex items-center justify-center shrink-0">
                    <Smile className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Patient Outcomes</span>
                </div>
                <div className="text-sm font-bold text-[#0A1628] leading-relaxed">
                  5000+ Smiles Restored
                </div>
              </motion.div>

            </motion.div>

            {/* CLINICAL EXPERTISE */}
            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-xs font-heading font-extrabold text-[#0A1628] uppercase tracking-wider mb-2.5">
                Clinical Expertise
              </h3>
              <motion.div 
                variants={listContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2"
              >
                {[
                  'Dental Implants',
                  'Root Canal Therapy',
                  'Smile Makeovers',
                  'Invisible Aligners',
                  'Full Mouth Rehabilitation',
                  'Cosmetic Dentistry'
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={listItemVariants}
                    className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 leading-normal"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ECFDF5] text-[#0FB9B1] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* EDUCATION TIMELINE */}
            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-xs font-heading font-extrabold text-[#0A1628] uppercase tracking-wider mb-2.5">
                Education & Academic Training
              </h3>
              <motion.div 
                variants={timelineContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-3 max-w-[800px]"
              >
                {qualificationsList.map((item, idx) => {
                  const DocIcon = item.icon;
                  return (
                    <motion.div 
                      key={idx} 
                      variants={timelineItemVariants}
                      className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-[#E2E8F0] transition-all duration-300 group max-w-2xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#ECFDF5] text-[#0FB9B1] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#0FB9B1] group-hover:text-white transition-all">
                        <DocIcon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-[#0FB9B1] bg-[#ECFDF5] border border-[#D1FAE5] px-2.5 py-0.5 rounded-full inline-block self-start">
                            {item.year}
                          </span>
                          <h4 className="text-sm font-heading font-bold text-[#0A1628] leading-tight">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs text-[#64748B] font-body">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* BOTTOM CTA AREA */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100"
            >
              <a 
                href="#book" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0FB9B1] text-white font-body font-extrabold text-sm sm:text-base hover:bg-[#0CA29B] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#0FB9B1]/20 flex-1 text-center"
              >
                <Calendar className="w-4.5 h-4.5 shrink-0" />
                Book Consultation
              </a>
              <a 
                href="tel:+919876543210" 
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#103A63]/5 hover:bg-[#103A63]/10 text-[#103A63] border border-[#103A63]/15 font-body font-bold text-sm sm:text-base transition-all text-center"
              >
                <Phone className="w-4.5 h-4.5 shrink-0" />
                Call Now
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

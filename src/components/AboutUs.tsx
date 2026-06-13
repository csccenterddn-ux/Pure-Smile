import React from 'react';
import { motion } from 'motion/react';
import { Users, ShieldCheck, ClipboardCheck, Cpu, Check, Phone, Calendar } from 'lucide-react';

const trustHighlights = [
  {
    icon: Users,
    title: 'Experienced Specialists',
    description: 'Our skilled dental team combines years of expertise with a patient-first approach to deliver exceptional care.'
  },
  {
    icon: Cpu,
    title: 'Advanced Dental Technology',
    description: 'Equipped with modern digital diagnostics, CBCT imaging, digital impressions, and precision treatment systems for greater comfort and accuracy.'
  },
  {
    icon: ShieldCheck,
    title: 'Strict Sterilization Standards',
    description: 'We follow Class-B sterilization protocols and maintain the highest standards of hygiene and patient safety.'
  },
  {
    icon: ClipboardCheck,
    title: 'Personalized Treatment Plans',
    description: 'Every smile is unique. We create customized treatment plans designed around your goals, comfort, and long-term oral health.'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardProgressVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function AboutUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column (Image & Floating Stats Cards) - spans 5 columns on lg */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:block">
            
            {/* Visual background ambient glow decor wrapper */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2540]/5 to-[#0FB9B1]/5 rounded-[24px] -rotate-2 scale-102 z-0 max-w-md lg:max-w-none mx-auto w-full" />
            
            {/* Main Interactive Zoomable Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(10,37,64,0.08)] border border-[#E2E8F0] max-w-md lg:max-w-none mx-auto z-10 group"
            >
              <div className="overflow-hidden h-[450px]">
                <motion.img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Pure Smile dental clinic room and professional dentist treatment" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Float Card 1: Left Middle-Bottom Side Spacer */}
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute left-6 top-12 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_12px_24px_rgba(10,37,64,0.12)] border border-[#0FB9B1]/10 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-[#0FB9B1] shrink-0">
                  <span className="text-sm font-black">15+</span>
                </div>
                <div className="text-left font-sans">
                  <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Experience</p>
                  <p className="text-xs font-extrabold text-[#0A2540]">Years of Trust</p>
                </div>
              </motion.div>

              {/* Float Card 2: Right Middle-Top Side Spacer */}
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute right-6 bottom-12 bg-[#0A2540]/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_12px_24px_rgba(10,37,64,0.18)] border border-white/10 flex items-center gap-3 z-20 text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0FB9B1] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#0FB9B1]/30">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div className="text-left font-sans">
                  <p className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">Patients</p>
                  <p className="text-xs font-extrabold text-[#0FB9B1]">12,000+ Smiling</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column (Headers & Detailed Points) - spans 7 columns on lg */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            
            {/* badge */}
            <span className="text-xs font-extrabold tracking-widest text-[#0FB9B1] uppercase bg-teal-500/10 border border-[#0FB9B1]/20 px-4 py-1.5 rounded-full inline-block mb-4.5 max-w-fit shadow-xs select-none">
              WHY CHOOSE US
            </span>

            {/* main titles heading and explanation paragraph */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] lg:leading-[1.12] font-heading font-extrabold text-[#0A2540] tracking-tight mb-4">
              Why Dehradun Families Trust Pure Smile Clinic
            </h2>
            
            <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed font-sans mb-8 antialiased">
              For over 15 years, we have combined advanced dental technology, experienced specialists, and personalized care to help thousands of patients achieve healthier, more confident smiles in a safe and comfortable environment.
            </p>

            {/* Trust Highlights Grid/List */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8.5"
            >
              {trustHighlights.map((hl, index) => {
                const IconComp = hl.icon;
                return (
                  <motion.div 
                    key={index} 
                    variants={cardProgressVariants}
                    className="flex flex-col sm:flex-row gap-4 items-start group"
                  >
                    {/* Icon enclosure */}
                    <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-transparent group-hover:border-[#0FB9B1]/20 text-[#0FB9B1] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 group-hover:scale-105">
                      <IconComp className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    {/* Content */}
                    <div className="font-sans">
                      <h4 className="text-sm font-heading font-extrabold text-[#0A2540] mb-1.5 tracking-tight group-hover:text-[#0FB9B1] transition-colors duration-300">
                        {hl.title}
                      </h4>
                      <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                        {hl.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Premium Trust Checklist */}
            <div className="border-t border-slate-100 pt-6 pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {[
                  '15+ Years of Trusted Dental Excellence',
                  '12,000+ Smiles Successfully Restored',
                  'Advanced Digital & Pain-Free Dentistry',
                  'Personalized Treatment Plans',
                  'Same-Day Emergency Care Available',
                  'Modern Technology & Precision Care'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 leading-normal font-sans">
                    <div className="w-5 h-5 rounded-full bg-[#ECFDF5] text-[#0FB9B1] flex items-center justify-center shrink-0 border border-[#D1FAE5] shadow-xs">
                      <Check className="w-3 h-3 stroke-[3.5]" />
                    </div>
                    <span className="text-slate-700 font-semibold text-xs sm:text-sm antialiased">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions section */}
            <div className="flex flex-row items-center gap-4 border-t border-slate-100 pt-7 font-sans">
              <a 
                href="#book"
                className="px-8 py-3.5 bg-[#0FB9B1] hover:bg-[#0CA29B] text-white font-bold text-center rounded-full text-xs shadow-md shadow-[#0FB9B1]/10 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </a>
              <a 
                href="tel:+919876543210"
                className="px-6 py-3.5 border border-[#0A2540] hover:border-[#0FB9B1] hover:text-[#0FB9B1] text-[#0A2540] font-bold text-center rounded-full text-xs bg-white transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

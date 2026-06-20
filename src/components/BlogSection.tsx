import React from 'react';
import { BookOpen, Clock, User, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const blogArticles = [
  {
    category: 'Implants',
    title: 'Dental Implants vs Bridges: Which is the Right Choice for You?',
    summary: 'A comprehensive guide to understanding the differences in cost, durability, aesthetics, and long-term oral health outcomes between these two popular tooth replacement options.',
    readTime: '5 min read',
    author: 'Dr. Amit Sharma',
    date: 'January 2026',
    imageUrl: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'bg-emerald-50 text-emerald-800 border border-emerald-150'
  },
  {
    category: 'Cosmetic',
    title: 'Professional Whitening vs At-Home Kits: The Complete Comparison',
    summary: 'Discover why professional teeth whitening delivers safer, more predictable, and longer-lasting results compared to over-the-counter whitening products.',
    readTime: '4 min read',
    author: 'Dr. Amit Sharma',
    date: 'February 2026',
    imageUrl: 'https://images.unsplash.com/photo-1663182234283-28941e7612da?q=80&w=793&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'bg-amber-50 text-amber-800 border border-amber-150'
  },
  {
    category: 'Pediatric',
    title: 'When Should Your Child Have Their First Dental Visit? A Parent Guide',
    summary: 'Learn when to schedule your child\'s first dental appointment and how early dental visits help build lifelong oral health habits and positive dental experiences.',
    readTime: '3 min read',
    author: 'Dr. Amit Sharma',
    date: 'March 2026',
    imageUrl: 'https://images.unsplash.com/photo-1653508310895-62141575a3a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'bg-[#ECFDF5] text-[#0FB9B1] border border-[#D1FAE5]'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-[#F8FAFC]/50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-5 justify-between items-start md:items-end mb-10 sm:mb-12">
          <div className="text-left max-w-xl">
            <span className="text-[10px] font-sans font-extrabold tracking-widest text-[#0FB9B1] uppercase bg-[#ECFDF5] border border-[#D1FAE5] px-3.5 py-1 rounded-full inline-block mb-3 shadow-[0_1px_2px_rgba(15,185,177,0.03)] select-none">
              PATIENT KNOWLEDGE HUB
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0A1628] tracking-tight leading-tight mb-2">
              Expert Dental Guides & Resources
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-body">
              Empowering patients with clinically proven answers, treatment insights, and expert guidance for informed oral health decisions.
            </p>
          </div>
          <motion.a
            href="#blog"
            whileHover="hover"
            initial="initial"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[#ECFDF5] text-[#0FB9B1] hover:bg-[#0FB9B1] border border-[#D1FAE5]/80 hover:text-white hover:border-[#0FB9B1] hover:shadow-[0_4px_12px_rgba(15,185,177,0.1)] transition-all font-sans font-extrabold text-xs shrink-0 select-none cursor-pointer"
          >
            <span>Explore Articles</span>
            <motion.span
              variants={{
                initial: { x: 0 },
                hover: { x: 4 }
              }}
              className="inline-block transition-transform duration-300"
            >
              →
            </motion.span>
          </motion.a>
        </div>

        {/* Article Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {blogArticles.map((article, idx) => {
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden hover:shadow-[0_12px_30px_rgba(15,23,42,0.035)] hover:border-[#0FB9B1]/30 transition-all duration-300 group flex flex-col h-full cursor-pointer"
              >
                {/* Visual Cover - standardised height with referrer policy */}
                <div className="h-48 sm:h-52 overflow-hidden relative shrink-0">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 left-4 text-[8px] font-sans font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs ${article.color}`}>
                    {article.category}
                  </span>
                </div>

                {/* Article texts and fields */}
                <div className="p-5 sm:p-6 text-left flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-xs sm:text-sm font-heading font-extrabold text-[#0A1628] leading-snug tracking-tight mb-2 group-hover:text-[#0FB9B1] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-sans font-normal leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div>
                    {/* Metadata line info */}
                    <div className="flex flex-nowrap items-center gap-x-2 pt-4 border-t border-[#E2E8F0] text-[10px] sm:text-[11px] xl:text-xs text-slate-500 font-bold font-sans mb-3.5 min-h-[32px] sm:min-h-[36px] overflow-x-auto scrollbar-none whitespace-nowrap">
                      <span className="flex items-center gap-1 text-slate-400 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0 stroke-[2.25]" />
                        {article.date}
                      </span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full shrink-0" />
                      <span className="flex items-center gap-1 text-slate-600 shrink-0">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 stroke-[2.25]" />
                        {article.readTime}
                      </span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full shrink-0" />
                      <span className="flex items-center gap-1 text-[#0A1628] shrink-0 font-extrabold">
                        <User className="w-3.5 h-3.5 text-[#0FB9B1] shrink-0 stroke-[2.25]" />
                        {article.author}
                      </span>
                    </div>

                    {/* Read More CTA */}
                    <div className="flex items-center gap-1 text-[#0FB9B1] font-sans font-extrabold text-xs sm:text-sm select-none">
                      <span>Read More</span>
                      <motion.span 
                        variants={{
                          initial: { x: 0 },
                          hover: { x: 4 }
                        }}
                        initial="initial"
                        whileHover="hover"
                        className="inline-block transition-transform duration-300"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { Calendar, Phone, Star, Shield, Check, MessageSquare, Award, Flame } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number, left: string, top: string, delay: string, duration: string, size: string, opacity: number, yShift: number }>>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setParticles([]);
      return;
    }
    // Generate organic ambient particles - refined density for elegant polish
    const generated = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 80 + 10}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${8 + Math.random() * 7}s`, // 8 to 15 seconds
      size: `${2 + Math.random() * 4}px`, // 2px to 6px
      opacity: 0.10 + Math.random() * 0.10, // 10% to 20%
      yShift: -(3 + Math.random() * 5), // Translate Y: 3px to 8px
    }));
    setParticles(generated);
  }, [isMobile]);

  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(135deg, #0A2540 0%, #103A63 50%, #0F4C75 100%)' }}
    >
      {/* LAYER 2: Subtle Abstract Shapes (3%-6% Opacity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {/* Soft curved organic shape 1 in top-right - Animate Left/Right (10px-20px range, 20-40s duration) */}
        <motion.div 
          className={`absolute -top-[15%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[#1e4f8a] opacity-[0.05] filter ${isMobile ? 'blur-[40px]' : 'blur-[120px]'}`} 
          animate={isMobile ? undefined : { x: [-15, 15, -15] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Soft organic wave blob in bottom-left - Animate Up/Down (10px-20px range, 20-40s duration) */}
        <motion.div 
          className={`absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#0FB9B1] opacity-[0.04] filter ${isMobile ? 'blur-[40px]' : 'blur-[140px]'}`} 
          animate={isMobile ? undefined : { y: [-15, 15, -15] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Gentle deep organic shape in middle-left - Compound smooth movement */}
        <motion.div 
          className={`absolute top-[25%] -left-[20%] w-[50vw] h-[50vw] rounded-[180px_90px_240px_120px] bg-[#1a4b7c] rotate-12 opacity-[0.04] filter ${isMobile ? 'blur-[45px]' : 'blur-[110px]'}`} 
          animate={isMobile ? undefined : { x: [-10, 10, -10], y: [10, -10, 10] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* LAYER 3: Gradient Mesh Lighting / Glow (5%-10% Opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.08] z-0" 
        style={{ mixBlendMode: 'screen' }}
      >
        {/* Top Left: Deep Navy Glow */}
        <div 
          className={`absolute top-0 left-0 w-[55vw] h-[55vw] bg-[#0A2540] filter ${isMobile ? 'blur-[40px]' : 'blur-[120px]'}`} 
        />
        {/* Center: Soft Blue Glow shifting slowly (15-25 seconds) */}
        <motion.div 
          className={`absolute top-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#4285F4] filter ${isMobile ? 'blur-[50px]' : 'blur-[150px]'}`} 
          animate={isMobile ? undefined : { x: [-20, 20, -20], y: [-15, 15, -15] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bottom Right: Very Subtle Emerald Glow shifting slowly (15-25 seconds) */}
        <motion.div 
          className={`absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[#0FB9B1] filter ${isMobile ? 'blur-[40px]' : 'blur-[130px]'}`} 
          animate={isMobile ? undefined : { x: [15, -15, 15], y: [15, -15, 15] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Premium Subtle Grid Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{
        backgroundImage: `radial-gradient(ellipse at center, rgba(15, 185, 177, 0.12), transparent 75%),
                          linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), 
                          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
        backgroundSize: '100% 100%, 50px 50px, 50px 50px'
      }} />

      {/* LAYER 4: Floating Particles for Premium Ambiance (10%-20% Opacity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#0FB9B1] pointer-events-none"
            initial={{ y: 0, opacity: p.opacity }}
            animate={{ y: [0, p.yShift, 0], opacity: [p.opacity, p.opacity * 0.6, p.opacity] }}
            transition={{
              duration: parseFloat(p.duration || '10'),
              delay: parseFloat(p.delay || '0'),
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Authority Content (7/12 cols responsive) */}
        <div className="text-left lg:col-span-7 flex flex-col justify-center">
          
          {/* Trust Rating Badge above Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -1 }}
            transition={{ 
              initial: { duration: 0.6, ease: "easeOut" },
              whileHover: { duration: 0.2, ease: "easeOut" }
            }}
            className="inline-flex items-center self-start gap-3 px-6 py-3 mb-4.5 rounded-full bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.18)] shadow-[0_4px_16px_rgba(10,37,64,0.18)] hover:shadow-[0_6px_20px_rgba(10,37,64,0.24)] transition-shadow duration-300 select-none cursor-default"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
              ))}
            </div>
            <div className="text-xs tracking-wide flex items-center gap-2 select-none font-sans">
              <span className="font-bold text-white text-[13px]">4.9</span>
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.04-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span className="text-[#12D3C6] font-bold text-[12px] tracking-wide">Google Rating</span>
              </div>
              <span className="text-[rgba(255,255,255,0.35)] hidden sm:inline">|</span>
              <span className="font-bold text-white hidden sm:inline">12,000+ Happy Patients</span>
            </div>
          </motion.div>

          {/* Premium Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.15)' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.15] tracking-tight mb-4.5"
          >
            Modern Dental Care{" "}
            <br className="hidden lg:block" />
            <span className="text-[#12D3C6]">
              For Healthy & Confident Smiles
            </span>
          </motion.h1>

          {/* Supporting Body copy with proper line-height */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-base sm:text-lg text-[rgba(255,255,255,0.88)] max-w-[580px] mb-5.5 leading-[1.8] font-sans font-normal"
          >
            Experience personalized dental care powered by advanced technology, precise diagnostics, and evidence-based treatments designed for healthier, more confident smiles.
          </motion.p>

          {/* Main Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-5.5"
          >
            {/* Primary CTA: Book Appointment */}
            <motion.a 
              href="#book" 
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-[999px] bg-[#0FB9B1] text-white font-sans font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(15,185,177,0.2)] hover:bg-[#0CA29B] hover:shadow-[0_20px_35px_rgba(15,185,177,0.45),_0_0_15px_rgba(15,185,177,0.3)] transition-all duration-300 transform"
            >
              <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
              Book Appointment
            </motion.a>

            {/* Secondary CTA: WhatsApp Us */}
            <motion.a 
              href="https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20book%20an%20appointment%20with%20PureSmile%20Dental" 
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-[999px] bg-white/5 text-white border border-white/10 hover:border-[#25D366] hover:bg-white/10 hover:shadow-[0_8px_25px_rgba(37,211,102,0.3),_0_0_15px_rgba(37,211,102,0.2)] transition-all duration-300 font-sans font-semibold text-sm transform"
            >
              <svg 
                className="w-4.5 h-4.5 text-[#25D366] fill-[#25D366] transition-transform duration-300 group-hover:scale-110" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.709 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Us</span>
            </motion.a>
          </motion.div>

          {/* Checklist Authority Markers */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="hidden sm:grid grid-cols-2 gap-y-2.5 gap-x-5 max-w-[550px] border-b border-white/10 pb-5 mb-5.5"
          >
            <div className="flex items-center gap-2 text-slate-100 text-xs sm:text-[13px] font-sans font-semibold tracking-wide">
              <div className="w-4 h-4 rounded-full bg-[#12D3C6]/15 flex items-center justify-center border border-[#12D3C6]/30 shrink-0">
                <Check className="w-2.5 h-2.5 text-[#12D3C6] stroke-[3]" />
              </div>
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-slate-100 text-xs sm:text-[13px] font-sans font-semibold tracking-wide">
              <div className="w-4 h-4 rounded-full bg-[#12D3C6]/15 flex items-center justify-center border border-[#12D3C6]/30 shrink-0">
                <Check className="w-2.5 h-2.5 text-[#12D3C6] stroke-[3]" />
              </div>
              <span>12,000+ Happy Patients</span>
            </div>
            <div className="flex items-center gap-2 text-slate-100 text-xs sm:text-[13px] font-sans font-semibold tracking-wide">
              <div className="w-4 h-4 rounded-full bg-[#12D3C6]/15 flex items-center justify-center border border-[#12D3C6]/30 shrink-0">
                <Check className="w-2.5 h-2.5 text-[#12D3C6] stroke-[3]" />
              </div>
              <span>ISO Certified Clinic</span>
            </div>
            <div className="flex items-center gap-2 text-slate-100 text-xs sm:text-[13px] font-sans font-semibold tracking-wide">
              <div className="w-4 h-4 rounded-full bg-[#12D3C6]/15 flex items-center justify-center border border-[#12D3C6]/30 shrink-0">
                <Check className="w-2.5 h-2.5 text-[#12D3C6] stroke-[3]" />
              </div>
              <span>Same Day Emergency Care</span>
            </div>
          </motion.div>

          {/* Fully Integrated Statistics Row */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 sm:gap-8 max-w-[620px]"
          >
            <div className="flex flex-col text-left">
              <span className="text-3xl sm:text-[2.5rem] font-heading font-black text-[#12D3C6] leading-none mb-1.5">15+</span>
              <span className="text-[10.5px] text-slate-200 tracking-wider font-extrabold uppercase leading-tight">Years of Trusted Care</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-3xl sm:text-[2.5rem] font-heading font-black text-[#12D3C6] leading-none mb-1.5">12K+</span>
              <span className="text-[10.5px] text-slate-200 tracking-wider font-extrabold uppercase leading-tight">Smiles Restored</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-3xl sm:text-[2.5rem] font-heading font-black text-[#12D3C6] leading-none mb-1.5">4.9★</span>
              <span className="text-[10.5px] text-slate-200 tracking-wider font-extrabold uppercase leading-tight">Google Rating</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-3xl sm:text-[2.5rem] font-heading font-black text-[#12D3C6] leading-none mb-1.5">2,400+</span>
              <span className="text-[10.5px] text-slate-200 tracking-wider font-extrabold uppercase leading-tight">Verified Reviews</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Realistic/Premium Image with Authority Floating Cards (5/12 cols responsive) */}
        <div className="relative lg:col-span-5 h-[460px] sm:h-[520px] flex items-center justify-center mt-6 lg:mt-0">
          
          {/* Main Showcase Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="relative w-full max-w-[390px] h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55)] bg-slate-900 group"
          >
            {/* Real aesthetic clinic consultation photo with clinical filters */}
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" 
              alt="Professional Dental Consultation" 
              className="w-full h-full object-cover object-center transition-all duration-[400ms] ease-out brightness-[0.92] contrast-[1.05] saturate-[1.05] group-hover:scale-[1.02] group-hover:brightness-[0.95]"
              referrerPolicy="no-referrer"
            />
            {/* Premium darkened bottom & top shading gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-black/30 pointer-events-none" />
          </motion.div>

          {/* Floating Card A: Dr. Amit Sharma MDS Orthodontics (Top-Left Authority Card) */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 1.0 }}
            className="absolute -top-6 -left-4 sm:-left-12 z-20"
          >
            <motion.div
              animate={isMobile ? undefined : { y: [-4, 4, -4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -7 }}
              className="bg-white rounded-[24px] p-4.5 shadow-[0_20px_50px_rgba(10,37,64,0.18)] border border-[#E2E8F0] flex flex-col gap-3 max-w-[245px] text-left select-none transition-shadow duration-300 hover:shadow-[0_25px_55px_rgba(10,37,64,0.25)] cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Dr. Amit Sharma" 
                    className="w-11 h-11 rounded-full border-2 border-[#0FB9B1] object-cover shadow-sm bg-slate-100" 
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#0FB9B1] border border-white rounded-full flex items-center justify-center">
                    <Check className="w-1.5 h-1.5 text-white stroke-[4]" />
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-extrabold text-[#0A2540] tracking-tight leading-tight truncate">Dr. Amit Sharma</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#0FB9B1] font-bold uppercase tracking-wider mt-0.5 leading-none">MDS Orthodontics</p>
                </div>
              </div>
              
              <div className="border-t border-[#E2E8F0] pt-3 space-y-2">
                <div className="flex items-center gap-2 text-[10.5px] text-[#1E293B] font-semibold leading-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0FB9B1] shrink-0" />
                  <span className="truncate">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-[10.5px] text-[#1E293B] font-semibold leading-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0FB9B1] shrink-0" />
                  <span className="truncate">12,000+ Patients Treated</span>
                </div>
                <div className="flex items-center gap-1.5 text-[9.5px] text-[#334155] font-extrabold tracking-wide uppercase leading-none pt-0.5">
                  <Shield className="w-3.5 h-3.5 text-[#0FB9B1] fill-[#0FB9B1]/5 shrink-0" />
                  <span className="truncate">Verified Specialist</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Card B: Pain-Free Treatment (Bottom-Right Accolade Card) */}
          <motion.div 
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 1.3 }}
            className="absolute -bottom-6 -right-2 sm:-right-8 z-20"
          >
            <motion.div
              animate={isMobile ? undefined : { y: [3, -3, 3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-4.5 shadow-[0_15px_35px_rgba(10,37,64,0.14)] border border-[#E2E8F0] flex items-center gap-3.5 max-w-[250px] text-left select-none transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(10,37,64,0.22)] cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-[#ECFDF5] border border-[#D1FAE5] flex items-center justify-center shadow-inner shrink-0">
                <Award className="w-[22px] h-[22px] text-[#0FB9B1]" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-[#0A2540] tracking-tight">Pain-Free Treatment</h4>
                <p className="text-[10px] text-[#64748B] mt-0.5 font-medium">Advanced Digital Dentistry</p>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

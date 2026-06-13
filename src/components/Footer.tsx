import React from 'react';
import { Sparkles, Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';
import LogoIcon from './LogoIcon';

// White-Label Customizable Clinic Information
const CLINIC_INFO = {
  name: "{{Clinic Name}}",
  address: "{{Clinic Address}}",
  phone: "{{Clinic Phone}}",
  email: "{{Clinic Email}}",
  hours: "{{Clinic Hours}}",
  facebookUrl: "{{Facebook URL}}",
  instagramUrl: "{{Instagram URL}}",
  youtubeUrl: "{{YouTube URL}}",
};

// Falls back to premium default values for preview if tokens are not yet compiled
const getClinicValue = (val: string, fallback: string) => {
  if (!val || val.startsWith("{{")) {
    return fallback;
  }
  return val;
};

const NAME_VAL = getClinicValue(CLINIC_INFO.name, "PureSmile Dental");
const PHONE_VAL = getClinicValue(CLINIC_INFO.phone, "+91 98765 43210");
const EMAIL_VAL = getClinicValue(CLINIC_INFO.email, "care@puresmile.in");
const ADDRESS_VAL = getClinicValue(CLINIC_INFO.address, "402, Wellness Tower, MG Road, Near City Hospital, New Delhi 110001");
const HOURS_VAL = getClinicValue(CLINIC_INFO.hours, "Mon – Sat: 9 AM – 8 PM\nSun: 10 AM – 4 PM");

const FB_LINK = getClinicValue(CLINIC_INFO.facebookUrl, "#");
const IG_LINK = getClinicValue(CLINIC_INFO.instagramUrl, "#");
const YT_LINK = getClinicValue(CLINIC_INFO.youtubeUrl, "#");

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white/75 relative border-t border-sky-950">
      
      {/* Top Footer Section columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 md:gap-y-12 lg:gap-x-16">
          
          {/* Col 1: Clinic details & social icons */}
          <div className="text-center md:text-left space-y-6 flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#103A63] to-[#0FB9B1] rounded-xl flex items-center justify-center shadow-md">
                <LogoIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                {NAME_VAL.includes("PureSmile") ? (
                  <>
                    PureSmile<span className="text-[#0FB9B1] font-medium">Dental</span>
                  </>
                ) : (
                  <span>{NAME_VAL}</span>
                )}
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body font-light max-w-md md:max-w-none">
              Providing advanced dental care, personalized treatment plans, and a comfortable patient experience through modern technology and expert clinical care.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a 
                href={FB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0FB9B1] hover:border-[#0FB9B1] transition-all duration-300 shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0FB9B1] hover:border-[#0FB9B1] transition-all duration-300 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={YT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0FB9B1] hover:border-[#0FB9B1] transition-all duration-300 shadow-sm"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="text-left font-body">
            <h5 className="font-heading font-bold text-sm tracking-widest text-white uppercase border-b border-white/10 pb-3 mb-5 select-none">
              Quick Links
            </h5>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-slate-300">
              <li><a href="#" className="hover:text-[#0FB9B1] transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="hover:text-[#0FB9B1] transition-colors duration-200">Treatments</a></li>
              <li><a href="#why-us" className="hover:text-[#0FB9B1] transition-colors duration-200">About</a></li>
              <li><a href="#about" className="hover:text-[#0FB9B1] transition-colors duration-200">Doctor</a></li>
              <li><a href="#gallery" className="hover:text-[#0FB9B1] transition-colors duration-200">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#0FB9B1] transition-colors duration-200">Reviews</a></li>
              <li><a href="#book" className="hover:text-[#0FB9B1] transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Treatments List */}
          <div className="text-left">
            <h5 className="font-heading font-bold text-sm tracking-widest text-white uppercase border-b border-white/10 pb-3 mb-5 select-none">
              Treatments
            </h5>
            <ul className="space-y-3 text-xs sm:text-sm font-body font-light text-slate-300">
              <li><a href="#services" className="hover:text-[#0FB9B1] transition-colors duration-200">Dental Implants</a></li>
              <li><a href="#services" className="hover:text-[#0FB9B1] transition-colors duration-200">Root Canal Treatment</a></li>
              <li><a href="#services" className="hover:text-[#0FB9B1] transition-colors duration-200">Invisible Aligners</a></li>
              <li><a href="#services" className="hover:text-[#0FB9B1] transition-colors duration-200">Teeth Whitening</a></li>
              <li><a href="#services" className="hover:text-[#0FB9B1] transition-colors duration-200">Smile Makeover</a></li>
              <li><a href="#services" className="hover:text-[#0FB9B1] transition-colors duration-200">Pediatric Dentistry</a></li>
              <li><a href="#services" className="hover:text-[#0FB9B1] transition-colors duration-200">Wisdom Tooth Removal</a></li>
            </ul>
          </div>

          {/* Col 4: Reach Us contact info */}
          <div className="text-left">
            <h5 className="font-heading font-bold text-sm tracking-widest text-white uppercase border-b border-white/10 pb-3 mb-5 select-none">
              Contact Us
            </h5>
            <div className="space-y-5 text-xs sm:text-sm font-body font-light text-slate-300">
              <div className="flex gap-3.5 items-start">
                <MapPin className="w-5 h-5 text-[#0FB9B1] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{ADDRESS_VAL}</span>
              </div>
              <div className="flex gap-3.5 items-center">
                <Phone className="w-4.5 h-4.5 text-[#0FB9B1] shrink-0" />
                <a href={`tel:${PHONE_VAL}`} className="hover:text-[#0FB9B1] transition-colors tracking-wide font-sans">
                  {PHONE_VAL}
                </a>
              </div>
              <div className="flex gap-3.5 items-center">
                <Mail className="w-4.5 h-4.5 text-[#0FB9B1] shrink-0" />
                <a href={`mailto:${EMAIL_VAL}`} className="hover:text-[#0FB9B1] transition-colors break-all">
                  {EMAIL_VAL}
                </a>
              </div>
              <div className="flex gap-3.5 items-start">
                <Clock className="w-5 h-5 text-[#0FB9B1] shrink-0 mt-0.5" />
                <div className="space-y-0.5 leading-relaxed">
                  {HOURS_VAL.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom copyright area with legal elements */}
      <div className="border-t border-white/10 py-6 bg-black/15 animate-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs font-body font-light text-white/40">
          <p className="select-none text-slate-400 text-center sm:text-left">© 2026 {NAME_VAL}. All Rights Reserved.</p>
          <div className="flex gap-6 text-slate-400 justify-center sm:justify-start">
            <a href="#" className="hover:text-[#0FB9B1] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#0FB9B1] transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, User, Clock, MessageSquare, Clipboard, MapPin } from 'lucide-react';

interface AppointmentFormProps {
  preselectedTreatment: string;
  onFormSubmit: (appointmentDetails: { name: string, date: string, time: string, treatment: string }) => void;
}

// White-Label Customizable Clinic Information
const CLINIC_INFO = {
  phone: "{{Clinic Phone}}",
  email: "{{Clinic Email}}",
  address: "{{Clinic Address}}",
  hours: "{{Clinic Hours}}",
  // Google Maps embed URL - easily customizable by client white-labeling
  mapsEmbed: "{{Google Maps Embed}}"
};

// Intelligently fallback on premium mock data if template tokens haven't been compiled
const getClinicValue = (key: keyof typeof CLINIC_INFO, fallback: string) => {
  const val = CLINIC_INFO[key];
  if (!val || val.startsWith("{{")) {
    return fallback;
  }
  return val;
};

const PHONE_VAL = getClinicValue("phone", "+91 98765 43210");
const EMAIL_VAL = getClinicValue("email", "care@puresmile.in");
const ADDRESS_VAL = getClinicValue("address", "402, Wellness Tower, MG Road, Near City Hospital, New Delhi 110001");
const HOURS_VAL = getClinicValue("hours", "Mon – Sat: 9 AM – 8 PM\nSun: 10 AM – 4 PM");
const MAPS_SRC = getClinicValue("mapsEmbed", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114727164053!2d77.20651635!3d28.62901455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37e0e7194f%3A0xe5a3c10697ad1f50!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5md");

export default function AppointmentForm({ preselectedTreatment, onFormSubmit }: AppointmentFormProps) {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [treatmentNeeded, setTreatmentNeeded] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isBooked, setIsBooked] = useState(false);

  const treatmentValues = [
    'General Checkup and Cleaning',
    'Dental Implants',
    'Root Canal Treatment',
    'Invisible Aligners',
    'Teeth Whitening',
    'Smile Makeover',
    'Pediatric Dentistry',
    'Wisdom Tooth Removal',
    'Emergency Treatment',
    'Not Sure, Need Advice'
  ];

  // Update treatment selector list when selected from other panels without scrolling
  useEffect(() => {
    if (preselectedTreatment) {
      const normalizedPreselected = preselectedTreatment.toLowerCase().replace(/[^a-z0-9]/g, '');
      const found = treatmentValues.find(val => {
        const normalizedVal = val.toLowerCase().replace(/[^a-z0-9]/g, '');
        return normalizedVal.includes(normalizedPreselected) || normalizedPreselected.includes(normalizedVal);
      });
      
      setTreatmentNeeded(found || preselectedTreatment);
    }
  }, [preselectedTreatment]);

  const validateForm = () => {
    const freshErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      freshErrors.fullName = 'Full name is required';
    }
    if (!mobileNumber.trim()) {
      freshErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(mobileNumber.trim())) {
      freshErrors.mobileNumber = 'Provide a valid contact number';
    }
    if (emailAddress.trim() && !/\S+@\S+\.\S+/.test(emailAddress)) {
      freshErrors.emailAddress = 'Provide a valid email address';
    }
    if (!preferredDate) {
      freshErrors.preferredDate = 'Select preferred date';
    }
    if (!preferredTime) {
      freshErrors.preferredTime = 'Select preferred time';
    }
    if (!treatmentNeeded) {
      freshErrors.treatmentNeeded = 'Select required dental service';
    }

    setErrors(freshErrors);
    return Object.keys(freshErrors).length === 0;
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      onFormSubmit({
        name: fullName.trim(),
        date: preferredDate,
        time: preferredTime,
        treatment: treatmentNeeded
      });

      // Reset form fields
      setFullName('');
      setMobileNumber('');
      setEmailAddress('');
      setPreferredDate('');
      setPreferredTime('');
      setTreatmentNeeded('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="book" className="scroll-mt-24 relative py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#0A1628]">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Section: Premium customizable contact details panel */}
          <div className="lg:col-span-5 space-y-8 text-left lg:sticky lg:top-28">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#0FB9B1] uppercase bg-[#ECFDF5] border border-[#D1FAE5] px-3.5 py-1.5 rounded-full inline-block mb-3.5 select-none">
                Contact Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0A2540] tracking-tight mb-3.5">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-body font-light leading-relaxed">
                Our team is available to answer your questions, guide your treatment decisions, and help you schedule your visit.
              </p>
            </div>

            {/* Vertical structured contact lines matching footer style with individual cards */}
            <div className="space-y-4">
              
              {/* Clinic Address */}
              <div className="flex gap-4 items-start bg-white border border-[#E2E8F0] rounded-[20px] p-4 sm:p-5 shadow-[0_2px_8px_rgba(15,23,42,0.015)] hover:border-[#0FB9B1]/30 hover:shadow-[0_8px_20px_rgba(15,185,177,0.04)] md:hover:translate-y-[-1px] transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#ECFDF5] border border-[#D1FAE5] text-[#0FB9B1] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#0FB9B1]" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-extrabold text-[#0FB9B1] uppercase tracking-wider select-none">
                    Clinic Address
                  </span>
                  <p className="text-sm sm:text-base font-sans font-medium text-slate-700 leading-relaxed whitespace-pre-line">
                    {ADDRESS_VAL}
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex gap-4 items-start bg-white border border-[#E2E8F0] rounded-[20px] p-4 sm:p-5 shadow-[0_2px_8px_rgba(15,23,42,0.015)] hover:border-[#0FB9B1]/30 hover:shadow-[0_8px_20px_rgba(15,185,177,0.04)] md:hover:translate-y-[-1px] transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#ECFDF5] border border-[#D1FAE5] text-[#0FB9B1] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#0FB9B1]" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-extrabold text-[#0FB9B1] uppercase tracking-wider select-none">
                    Phone Number
                  </span>
                  <a href={`tel:${PHONE_VAL}`} className="block text-sm sm:text-base font-sans font-bold text-[#0A2540] hover:text-[#0FB9B1] transition-colors tracking-wide">
                    {PHONE_VAL}
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex gap-4 items-start bg-white border border-[#E2E8F0] rounded-[20px] p-4 sm:p-5 shadow-[0_2px_8px_rgba(15,23,42,0.015)] hover:border-[#0FB9B1]/30 hover:shadow-[0_8px_20px_rgba(15,185,177,0.04)] md:hover:translate-y-[-1px] transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#ECFDF5] border border-[#D1FAE5] text-[#0FB9B1] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#0FB9B1]" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-extrabold text-[#0FB9B1] uppercase tracking-wider select-none">
                    Email Address
                  </span>
                  <a href={`mailto:${EMAIL_VAL}`} className="block text-sm sm:text-base font-sans font-bold text-[#0A2540] hover:text-[#0FB9B1] transition-colors break-all">
                    {EMAIL_VAL}
                  </a>
                </div>
              </div>

              {/* Clinic Hours */}
              <div className="flex gap-4 items-start bg-white border border-[#E2E8F0] rounded-[20px] p-4 sm:p-5 shadow-[0_2px_8px_rgba(15,23,42,0.015)] hover:border-[#0FB9B1]/30 hover:shadow-[0_8px_20px_rgba(15,185,177,0.04)] md:hover:translate-y-[-1px] transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#ECFDF5] border border-[#D1FAE5] text-[#0FB9B1] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#0FB9B1]" />
                </div>
                <div className="space-y-1 w-full">
                  <span className="block text-xs font-extrabold text-[#0FB9B1] uppercase tracking-wider select-none">
                    Clinic Hours
                  </span>
                  <div className="text-sm sm:text-base font-sans font-medium text-slate-700 leading-relaxed space-y-1">
                    {HOURS_VAL.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>

            {/* Sleek Horizontal Map Section with increased corner radius, styling match, border and shadow */}
            <div className="rounded-[20px] overflow-hidden border border-[#E2E8F0] w-full shadow-[0_2px_8px_rgba(15,23,42,0.015)] bg-white p-1">
              <div className="rounded-[18px] overflow-hidden">
                <iframe
                  title="Google Business Profile Map Location"
                  src={MAPS_SRC}
                  width="100%"
                  className="w-full h-[200px] border-none opacity-90 hover:opacity-100 transition-opacity duration-300 block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column Section: Solid appointment form element with light subtle borders */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(15,23,42,0.03)] border border-[#E2E8F0]">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0A1628] text-left mb-2 select-none flex items-center gap-2">
                <Clipboard className="w-6 h-6 text-[#0FB9B1]" />
                Book Your Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-body leading-relaxed text-left mb-6">
                Our team will contact you shortly to confirm your appointment and guide you toward the right treatment option.
              </p>
            </div>

            {isBooked ? (
              <div className="bg-[#ECFDF5] border border-[#D1FAE5] rounded-2xl p-6 text-center max-w-md mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#D1FAE5] text-[#0FB9B1] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">✓</span>
                </div>
                <h4 className="text-base font-heading font-bold text-[#0A1628] mb-2">Slot Scheduled Successfully!</h4>
                <p className="text-xs sm:text-sm text-[#475569] font-body mb-5 leading-relaxed">
                  We have successfully registered your spot. Our coordinators will contact you shortly to confirm your booking.
                </p>
                <button
                  type="button"
                  onClick={() => setIsBooked(false)}
                  className="px-6 py-2 rounded-full bg-[#0FB9B1] text-white text-xs font-bold hover:bg-[#0CA29B] transition-all shadow-md shadow-[#0FB9B1]/20 cursor-pointer animate-none"
                >
                  Book another slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-5 text-left">
                
                {/* Full Name input field */}
                <div>
                  <label className="text-[11px] font-bold text-[#475569] uppercase tracking-wide mb-1.5 flex items-center gap-1.5 select-none">
                    <User className="w-3.5 h-3.5 text-[#0FB9B1]" />
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors(prev => ({ ...prev, fullName: '' }));
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-[#0A1628] font-body text-xs sm:text-sm focus:outline-none focus:ring-3 focus:ring-[#0FB9B1]/12 focus:border-[#0FB9B1] transition-all duration-200 ${
                      errors.fullName ? 'border-rose-500' : 'border-[#E2E8F0]'
                    }`}
                  />
                  {errors.fullName && <span className="text-[10px] font-semibold text-rose-500 mt-0.5 inline-block">{errors.fullName}</span>}
                </div>

                {/* Mobile and Email address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] font-bold text-[#475569] uppercase tracking-wide mb-1.5 flex items-center gap-1.5 select-none">
                      <Phone className="w-3.5 h-3.5 text-[#0FB9B1]" />
                      Mobile Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91 Mobile Number" 
                      value={mobileNumber}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                        if (errors.mobileNumber) setErrors(prev => ({ ...prev, mobileNumber: '' }));
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-[#0A1628] font-body text-xs sm:text-sm focus:outline-none focus:ring-3 focus:ring-[#0FB9B1]/12 focus:border-[#0FB9B1] transition-all duration-200 ${
                        errors.mobileNumber ? 'border-rose-500' : 'border-[#E2E8F0]'
                      }`}
                    />
                    {errors.mobileNumber && <span className="text-[10px] font-semibold text-rose-500 mt-0.5 inline-block">{errors.mobileNumber}</span>}
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#475569] uppercase tracking-wide mb-1.5 flex items-center gap-1.5 select-none">
                      <Mail className="w-3.5 h-3.5 text-[#0FB9B1]" />
                      Email Address <span className="text-slate-400 font-normal italic lowercase">(optional)</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={emailAddress}
                      onChange={(e) => {
                        setEmailAddress(e.target.value);
                        if (errors.emailAddress) setErrors(prev => ({ ...prev, emailAddress: '' }));
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-[#0A1628] font-body text-xs sm:text-sm focus:outline-none focus:ring-3 focus:ring-[#0FB9B1]/12 focus:border-[#0FB9B1] transition-all duration-200 ${
                        errors.emailAddress ? 'border-rose-500' : 'border-[#E2E8F0]'
                      }`}
                    />
                    {errors.emailAddress && <span className="text-[10px] font-semibold text-rose-500 mt-0.5 inline-block">{errors.emailAddress}</span>}
                  </div>
                </div>

                {/* Preferred Date & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] font-bold text-[#475569] uppercase tracking-wide mb-1.5 flex items-center gap-1.5 select-none">
                      <Calendar className="w-3.5 h-3.5 text-[#0FB9B1]" />
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      required
                      placeholder="dd-mm-yyyy"
                      value={preferredDate}
                      onChange={(e) => {
                        setPreferredDate(e.target.value);
                        if (errors.preferredDate) setErrors(prev => ({ ...prev, preferredDate: '' }));
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-[#0A1628] font-body text-xs sm:text-sm focus:outline-none focus:ring-3 focus:ring-[#0FB9B1]/12 focus:border-[#0FB9B1] transition-all duration-200 ${
                        errors.preferredDate ? 'border-rose-500' : 'border-[#E2E8F0]'
                      }`}
                    />
                    {errors.preferredDate && <span className="text-[10px] font-semibold text-rose-500 mt-0.5 inline-block">{errors.preferredDate}</span>}
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#475569] uppercase tracking-wide mb-1.5 flex items-center gap-1.5 select-none">
                      <Clock className="w-3.5 h-3.5 text-[#0FB9B1]" />
                      Preferred Time
                    </label>
                    <select 
                      value={preferredTime}
                      onChange={(e) => {
                        setPreferredTime(e.target.value);
                        if (errors.preferredTime) setErrors(prev => ({ ...prev, preferredTime: '' }));
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-[#0A1628] font-body text-xs focus:outline-none focus:ring-3 focus:ring-[#0FB9B1]/12 focus:border-[#0FB9B1] transition-all duration-200 ${
                        errors.preferredTime ? 'border-rose-500' : 'border-[#E2E8F0]'
                      }`}
                    >
                      <option value="">Select preferred time</option>
                      <option value="9:00 AM">9:00 AM (Early slots)</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM (Lunch period)</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM (Late slot)</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                    </select>
                    {errors.preferredTime && <span className="text-[10px] font-semibold text-rose-500 mt-0.5 inline-block">{errors.preferredTime}</span>}
                  </div>
                </div>

                {/* Treatment needed */}
                <div>
                  <label className="text-[11px] font-bold text-[#475569] uppercase tracking-wide mb-1.5 flex items-center gap-1.5 select-none">
                    <Clipboard className="w-3.5 h-3.5 text-[#0FB9B1]" />
                    Treatment Needed
                  </label>
                  <select 
                    value={treatmentNeeded}
                    onChange={(e) => {
                      setTreatmentNeeded(e.target.value);
                      if (errors.treatmentNeeded) setErrors(prev => ({ ...prev, treatmentNeeded: '' }));
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-[#0A1628] font-body text-xs focus:outline-none focus:ring-3 focus:ring-[#0FB9B1]/12 focus:border-[#0FB9B1] transition-all duration-200 ${
                      errors.treatmentNeeded ? 'border-rose-500' : 'border-[#E2E8F0]'
                    }`}
                  >
                    <option value="">Choose required service</option>
                    <option value="General Checkup and Cleaning">General Checkup and Cleaning</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Invisible Aligners">Invisible Aligners</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Smile Makeover">Smile Makeover</option>
                    <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                    <option value="Wisdom Tooth Removal">Wisdom Tooth Removal</option>
                    <option value="Emergency Treatment">Emergency Dental Care</option>
                    <option value="Not Sure, Need Advice">Not Sure – Need Consultation</option>
                  </select>
                  {errors.treatmentNeeded && <span className="text-[10px] font-semibold text-rose-500 mt-0.5 inline-block">{errors.treatmentNeeded}</span>}
                </div>

                {/* Message (Optional) */}
                <div>
                  <label className="text-[11px] font-bold text-[#475569] uppercase tracking-wide mb-1.5 flex items-center gap-1.5 select-none">
                    <MessageSquare className="w-3.5 h-3.5 text-[#0FB9B1]" />
                    Message <span className="text-slate-400 font-normal italic lowercase">(optional)</span>
                  </label>
                  <textarea 
                    placeholder="Tell us about your dental concern (optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0A1628] font-body text-xs sm:text-sm focus:outline-none focus:ring-3 focus:ring-[#0FB9B1]/12 focus:border-[#0FB9B1] resize-none hover:border-slate-300"
                  />
                </div>

                {/* Schedule My Consultation button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-2 rounded-full bg-[#0FB9B1] text-white font-body font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#0FB9B1]/15 hover:bg-[#0CA29B] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-85 disabled:cursor-not-allowed border-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Scheduling Consultation...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Schedule My Consultation</span>
                    </>
                  )}
                </button>

                {/* Privacy policy notice and links */}
                <div className="text-center mt-4 space-y-1">
                  <p className="text-[10px] text-[#64748B] leading-relaxed">
                    Your information remains private and is used only for appointment coordination.
                  </p>
                  <a href="#" className="text-[9px] text-[#0FB9B1] hover:underline font-medium block">
                    Privacy Policy
                  </a>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

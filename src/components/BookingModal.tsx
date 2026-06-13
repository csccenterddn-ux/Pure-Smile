import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, User, Phone, Clock, Check, ChevronDown, Clipboard, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTreatment } from '../context/TreatmentContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (details: { name: string; treatment: string; mobile: string; date: string; time: string; message?: string }) => void;
  preselectedTreatment?: string;
}

const treatmentOptions = [
  'General Checkup and Cleaning',
  'Dental Implants',
  'Root Canal Treatment',
  'Invisible Aligners',
  'Teeth Whitening',
  'Smile Makeover',
  'Pediatric Dentistry',
  'Wisdom Tooth Removal',
  'Emergency Dental Care',
  'Not Sure – Need Consultation'
];

const timeSlotOptions = [
  'Morning (9 AM – 12 PM)',
  'Afternoon (12 PM – 4 PM)',
  'Evening (4 PM – 8 PM)',
  'No Preference'
];

// Premium custom dropdown components to resolve black flashes and default style issues
function CustomDropdown({
  value,
  onChange,
  options,
  placeholder,
  error,
  shouldHighlight = false
}: {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  error?: boolean;
  shouldHighlight?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (opt: string) => {
    onChange(opt);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        animate={shouldHighlight ? {
          scale: [1, 1.025, 0.985, 1.015, 1],
          borderColor: ["#E2E8F0", "#12D3C6", "#0FB9B1", "#12D3C6", "#E2E8F0"],
          boxShadow: [
            "0 0 0 0 rgba(18, 211, 198, 0)",
            "0 0 0 6px rgba(18, 211, 198, 0.25)",
            "0 0 0 4px rgba(18, 211, 198, 0.15)",
            "0 0 0 6px rgba(18, 211, 198, 0.25)",
            "0 0 0 0 rgba(18, 211, 198, 0)"
          ]
        } : {}}
        transition={shouldHighlight ? {
          duration: 1.4,
          ease: "easeInOut"
        } : undefined}
        className={`w-full flex items-center justify-between pl-3.5 pr-4 py-2.5 bg-slate-50/50 border rounded-xl text-slate-800 text-xs sm:text-[13px] font-sans font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0FB9B1]/10 focus:border-[#0FB9B1] transition-all duration-200 cursor-pointer text-left ${
          error ? 'border-rose-450 bg-rose-50/5' : 'border-[#E2E8F0] hover:border-slate-300'
        }`}
      >
        <span className={`truncate ${!value ? 'text-slate-400 font-normal' : 'text-slate-800'}`}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 right-0 z-50 mt-1 max-h-56 overflow-y-auto bg-white border border-slate-100 rounded-xl shadow-[0_10px_30px_rgba(10,22,40,0.08)] py-1 focus:outline-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {options.map((opt) => {
              const isSelected = value === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className={`w-full flex items-center justify-between px-4 py-2 text-left text-xs sm:text-[13px] font-sans font-semibold transition-colors duration-150 cursor-pointer ${
                    isSelected 
                      ? 'bg-slate-50 text-[#0FB9B1]' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate">{opt}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#0FB9B1] stroke-[2.5] shrink-0 ml-2" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BookingModal({
  isOpen,
  onClose,
  onSubmitSuccess,
  preselectedTreatment = ''
}: BookingModalProps) {
  const { activeTreatment, setActiveTreatment } = useTreatment();
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [treatmentNeeded, setTreatmentNeeded] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [minDateString, setMinDateString] = useState('');
  const [highlightTreatment, setHighlightTreatment] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  const [localOpen, setLocalOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setLocalOpen(true);
    } else {
      setLocalOpen(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setLocalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (localOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [localOpen]);

  // Set today's date as min value
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDateString(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Sync inputs on open and autofocus
  useEffect(() => {
    let hlTimer: NodeJS.Timeout;
    if (isOpen) {
      if (preselectedTreatment) {
        const normalizedPreselected = preselectedTreatment.toLowerCase().replace(/[^a-z0-9]/g, '');
        const found = treatmentOptions.find(opt => {
          const normalizedOpt = opt.toLowerCase().replace(/[^a-z0-9]/g, '');
          return normalizedOpt.includes(normalizedPreselected) || normalizedPreselected.includes(normalizedOpt);
        });
        setTreatmentNeeded(found || preselectedTreatment);
        setHighlightTreatment(true);
        hlTimer = setTimeout(() => {
          setHighlightTreatment(false);
        }, 2200);
      } else {
        setTreatmentNeeded('');
        setHighlightTreatment(false);
      }
      setFullName('');
      setMobileNumber('');
      setPreferredDate('');
      setPreferredTime('');
      setMessage('');
      setErrors({});

      const timer = setTimeout(() => {
        const isMobileDevice = window.innerWidth < 768 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
        if (!isMobileDevice) {
          nameInputRef.current?.focus();
        }
      }, 150);
      return () => {
        clearTimeout(timer);
        if (hlTimer) clearTimeout(hlTimer);
      };
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(mobileNumber.trim())) {
      newErrors.mobileNumber = 'Please enter a valid mobile number';
    }
    
    if (!treatmentNeeded) {
      newErrors.treatmentNeeded = 'Please select a treatment option';
    }
    
    if (!preferredDate) {
      newErrors.preferredDate = 'Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess({
        name: fullName.trim(),
        treatment: treatmentNeeded,
        mobile: mobileNumber.trim(),
        date: preferredDate,
        time: preferredTime || 'No Preference',
        message: message.trim()
      });
      handleClose();
    }, 900);
  };

  return (
    <AnimatePresence onExitComplete={() => {
      if (!localOpen) {
        onClose();
      }
    }}>
      {localOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-0 sm:p-4">
          
          {/* Backdrop Scrim with Premium Smooth Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Container: Compact, optimized layout with no scroll on typical computers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative bg-white w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-[680px] sm:rounded-2xl shadow-[0_16px_50px_-12px_rgba(10,22,40,0.12)] border border-slate-100 overflow-hidden flex flex-col z-10 select-none"
          >
            {/* Elegant Minimalist Close button in top-right */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 w-7 h-7 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-all duration-150 cursor-pointer z-50"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 stroke-[2]" />
            </button>

            {/* Main unified section with hidden scrollbar */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-9 py-7 md:py-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              {/* Header Section */}
              <div className="mb-5 sm:mb-6 text-left">
                <h3 className="text-xl sm:text-[22px] font-heading font-extrabold text-[#0A1628] tracking-tight">
                  Schedule Your Consultation
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-sans mt-1.5 leading-relaxed font-semibold max-w-xl">
                  Receive personalized treatment guidance from our dental experts and get assistance choosing the right treatment option.
                </p>

                {/* Highly refined premium trust-chip row directly below subheadline */}
                <div className="hidden sm:flex flex-wrap items-center gap-2 mt-3.5 pt-3.5 border-t border-slate-100/80">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50/50 border border-slate-100 text-[10px] sm:text-[11px] font-bold text-slate-600">
                    <Check className="w-3.5 h-3.5 text-[#0FB9B1] stroke-[3]" />
                    <span>12,000+ Patients Treated</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50/50 border border-slate-100 text-[10px] sm:text-[11px] font-bold text-slate-600">
                    <Check className="w-3.5 h-3.5 text-[#0FB9B1] stroke-[3]" />
                    <span>1,248+ Verified Reviews</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50/50 border border-slate-100 text-[10px] sm:text-[11px] font-bold text-slate-600">
                    <Check className="w-3.5 h-3.5 text-[#0FB9B1] stroke-[3]" />
                    <span>15+ Years Experience</span>
                  </div>
                </div>
              </div>

              {/* Redesigned Form Layout with Beautiful Custom Dropdowns */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Full Name * & Mobile Number * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name field */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[10px] sm:text-[11px] font-sans font-extrabold text-slate-500 uppercase tracking-wider ml-0.5 flex items-center gap-1.5 select-none">
                      <User className="w-3.5 h-3.5 text-[#0FB9B1] shrink-0 stroke-[2.5]" />
                      <span>Full Name <span className="text-[#0FB9B1] font-extrabold">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        ref={nameInputRef}
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-50/50 border rounded-xl text-slate-800 text-xs sm:text-[13px] font-sans font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0FB9B1]/10 focus:border-[#0FB9B1] transition-all duration-200 ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/10' : 'border-[#E2E8F0] hover:border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[10px] font-bold text-rose-500 mt-1 ml-0.5">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Mobile Number field */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[10px] sm:text-[11px] font-sans font-extrabold text-slate-500 uppercase tracking-wider ml-0.5 flex items-center gap-1.5 select-none">
                      <Phone className="w-3.5 h-3.5 text-[#0FB9B1] shrink-0 stroke-[2.5]" />
                      <span>Mobile Number <span className="text-[#0FB9B1] font-extrabold">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-50/50 border rounded-xl text-slate-800 text-xs sm:text-[13px] font-sans font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0FB9B1]/10 focus:border-[#0FB9B1] transition-all duration-200 ${
                          errors.mobileNumber ? 'border-rose-400 bg-rose-50/10' : 'border-[#E2E8F0] hover:border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="text-[10px] font-bold text-rose-500 mt-1 ml-0.5">{errors.mobileNumber}</p>
                    )}
                  </div>

                </div>

                {/* Row 2: Treatment Needed * & Preferred Date * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Treatment Needed Dropdown */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[10px] sm:text-[11px] font-sans font-extrabold text-slate-500 uppercase tracking-wider ml-0.5 flex items-center gap-1.5 select-none">
                      <Clipboard className="w-3.5 h-3.5 text-[#0FB9B1] shrink-0 stroke-[2.5]" />
                      <span>Treatment Needed <span className="text-[#0FB9B1] font-extrabold">*</span></span>
                    </label>
                    <CustomDropdown
                      value={treatmentNeeded}
                      onChange={(val) => {
                        setTreatmentNeeded(val);
                        setActiveTreatment(val);
                      }}
                      options={treatmentOptions}
                      placeholder="Select treatment option"
                      error={!!errors.treatmentNeeded}
                      shouldHighlight={highlightTreatment}
                    />
                    {errors.treatmentNeeded && (
                      <p className="text-[10px] font-bold text-rose-500 mt-1 ml-0.5">{errors.treatmentNeeded}</p>
                    )}
                  </div>

                  {/* Preferred Date Field */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[10px] sm:text-[11px] font-sans font-extrabold text-slate-500 uppercase tracking-wider ml-0.5 flex items-center gap-1.5 select-none">
                      <Calendar className="w-3.5 h-3.5 text-[#0FB9B1] shrink-0 stroke-[2.5]" />
                      <span>Preferred Date <span className="text-[#0FB9B1] font-extrabold">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        min={minDateString}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-50/50 border rounded-xl text-slate-800 text-xs sm:text-[13px] font-sans font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0FB9B1]/10 focus:border-[#0FB9B1] transition-all duration-200 ${
                          errors.preferredDate ? 'border-rose-400 bg-rose-50/10' : 'border-[#E2E8F0] hover:border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="text-[10px] font-bold text-rose-500 mt-1 ml-0.5">{errors.preferredDate}</p>
                    )}
                  </div>

                </div>

                {/* Row 3: Preferred Time Custom Dropdown */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-[10px] sm:text-[11px] font-sans font-extrabold text-slate-500 uppercase tracking-wider ml-0.5 flex items-center gap-1.5 select-none">
                    <Clock className="w-3.5 h-3.5 text-[#0FB9B1] shrink-0 stroke-[2.5]" />
                    <span>Preferred Time</span>
                  </label>
                  <CustomDropdown
                    value={preferredTime}
                    onChange={setPreferredTime}
                    options={timeSlotOptions}
                    placeholder="Select Preferred Time"
                  />
                </div>

                {/* Row 4: Message (Optional) field */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-[10px] sm:text-[11px] font-sans font-extrabold text-slate-500 uppercase tracking-wider ml-0.5 flex items-center gap-1.5 select-none font-body">
                    <MessageSquare className="w-3.5 h-3.5 text-[#0FB9B1] shrink-0 stroke-[2.5]" />
                    <span>Message <span className="text-slate-400 text-[10px] lowercase font-normal italic">(optional)</span></span>
                  </label>
                  <div className="relative">
                    <textarea
                      placeholder="Tell us about your dental concern or any special comfort requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={2}
                      className="w-full px-3.5 py-2.5 bg-slate-50/50 border border-[#E2E8F0] rounded-xl text-slate-800 text-xs sm:text-[13px] font-sans font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0FB9B1]/10 focus:border-[#0FB9B1] transition-all duration-250 resize-none hover:border-slate-300"
                    />
                  </div>
                </div>

                {/* Submitting Actions Frame */}
                <div className="pt-4 sm:pt-5 border-t border-slate-100/80">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ y: -0.5, scale: 1.002 }}
                    whileTap={{ scale: 0.995 }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#0FB9B1] hover:bg-[#0CA29B] text-white text-xs sm:text-sm font-sans font-extrabold rounded-xl shadow-md transition-all duration-200 select-none cursor-pointer text-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Requesting...</span>
                      </div>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        <span>Request Consultation</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-[10px] sm:text-[11px] font-sans font-bold text-slate-400/80 mt-3.5 select-none tracking-wide">
                    Trusted by 12,000+ Patients Across Multiple Dental Treatments
                  </p>
                </div>

              </form>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

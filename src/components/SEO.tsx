import React, { useEffect } from 'react';
import { useTreatment } from '../context/TreatmentContext';

interface SEOProps {
  isBookingModalOpen: boolean;
}

interface MetaConfigs {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

// Map treatment names to optimized SEO copy
const SEO_CONFIGS: Record<string, MetaConfigs> = {
  default: {
    title: 'PureSmile Dental | Premium Dental Care Clinic in Dehradun',
    description: 'Experience premium dental care at PureSmile Dental in Dehradun. Advanced treatments, modern implants, cosmetic smile makeovers, and specialized pediatric dentistry under Dr. Amit Sharma.',
    keywords: 'PureSmile Dental, best dentist Dehradun, dental clinic Dehradun, dental implants Dehradun, pain-free root canal, cosmetic dentistry, smile design, Dr. Amit Sharma, MDS dentist',
    ogTitle: 'PureSmile Dental | Premium Dental Care Clinic in Dehradun',
    ogDescription: 'Experience premium dental care at PureSmile Dental in Dehradun. Trust our clinic for world-class implants, root canals, and cosmetic makeovers.',
    ogImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop'
  },
  booking: {
    title: 'Secure Online Appointment Booking | PureSmile Dental Dehradun',
    description: 'Schedule your consultation or dental appointment online at PureSmile Dental Dehradun with MDS Specialist Dr. Amit Sharma. Fast and fully automated booking flow.',
    keywords: 'book dentist appointment Dehradun, online dentist booking, secure slot booking Dr. Amit Sharma, PureSmile clinic slots',
    ogTitle: 'Schedule Your Premium Dental Slot | PureSmile Dental',
    ogDescription: 'Select your preferred date, time, and treatment to secure a personalized consultation session.',
    ogImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'
  },
  'dental implants': {
    title: 'State-of-the-Art Dental Implants in Dehradun | PureSmile Dental',
    description: 'Restore your teeth with lifetime-guaranteed premium dental implants at PureSmile Dental. Microscopic precision, biological compatibility, and painless care by Dr. Amit Sharma.',
    keywords: 'dental implants Dehradun, tooth implant cost Dehradun, dental implant clinic Dehradun, implant specialist, crown and implants Dehradun',
    ogTitle: 'Premium Dental Implants Specialist in Dehradun | PureSmile',
    ogDescription: 'Secure, permanent, and natural-feeling dental implants using Swiss dental technologies.',
    ogImage: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=1200&auto=format&fit=crop'
  },
  'smile makeover': {
    title: 'Custom Smile Makeovers & Porcelain Veneers | PureSmile Dental Dehradun',
    description: 'Design the smile of your dreams. Our cosmetic dentist specialized smile makeovers customize porcelain veneers and dental laminates for outstanding confidence.',
    keywords: 'smile makeover Dehradun, cosmetic dentist Dehradun, dental veneers Dehradun, laminates, cosmetic treatment clinics',
    ogTitle: 'Bespoke Smile Design & Dental Makeovers | PureSmile Dental',
    ogDescription: 'Achieve a glowing, perfect smile with our advanced cosmetic alignment and customized porcelain solutions.',
    ogImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop'
  },
  'root canal treatment': {
    title: 'Painless Single-Sitting Root Canal (RCT) in Dehradun | PureSmile',
    description: 'Relieve pain instantly with state-of-the-art single-session microscopic root canal treatment (RCT) at PureSmile Dental. Highly specialized endodontic care.',
    keywords: 'root canal treatment Dehradun, RCT dentist Dehradun, painless root canal Dehradun, single sitting RCT, endodontist Dehradun',
    ogTitle: 'Microscopic Painless Root Canal Treatments (RCT) | PureSmile',
    ogDescription: 'Save your natural teeth with comfortable and efficient single-sitting root canal therapy under experts.',
    ogImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'
  },
  'teeth whitening': {
    title: 'Brilliant Laser Teeth Whitening in Dehradun | PureSmile Dental',
    description: 'Brighten your smile up to 8 shades in a single sitting with advanced clinical safe laser teeth whitening. Zero post-whitening tooth sensitivity guaranteed.',
    keywords: 'teeth whitening Dehradun, clinical teeth bleaching Dehradun, safe teeth whitening clinic, laser smile brightening',
    ogTitle: 'Professional Laser Teeth Whitening in Dehradun | PureSmile',
    ogDescription: 'Say goodbye to stains and discoloration in just 45 minutes with our gentle, premium bleaching service.',
    ogImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop'
  },
  'invisible aligners': {
    title: 'Premium Invisible Aligners & Invisalign in Dehradun | PureSmile',
    description: 'Get straight teeth without metal braces. Premium clear orthodontic aligners and certified Invisalign providers at PureSmile Dental Dehradun.',
    keywords: 'clear aligners Dehradun, Invisalign cost Dehradun, invisible braces Dehradun, orthodontist aligners clinic',
    ogTitle: 'Digital-First Clear Aligners & Invisalign | PureSmile Dental',
    ogDescription: 'Perfect orthodontic alignments using comfortable, virtually invisible removable dental trays.',
    ogImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'
  },
  'pediatric dentistry': {
    title: 'Gentle Pediatric (Kids) Dentistry in Dehradun | PureSmile Dental',
    description: 'Ensure a stress-free teeth checkup for your little ones with our warm, playful, and friendly specialized pediatric dentistry at PureSmile Dehradun.',
    keywords: 'pediatric dentist Dehradun, child friendly dental clinic Dehradun, child cavities treatment, kids dentistry Dehradun',
    ogTitle: 'Child Friendly Kids Dental Specialist | PureSmile Dental',
    ogDescription: 'Gentle, warm, and anxiety-free pediatric assessments to nurture beautiful lifelong smiles.',
    ogImage: 'https://images.unsplash.com/photo-1653508310895-62141575a3a9?q=80&w=1200&auto=format&fit=crop'
  },
  'wisdom tooth removal': {
    title: 'Painless Surgical Wisdom Tooth Extraction | PureSmile Dehradun',
    description: 'Relieve wisdom tooth soreness safely. Advanced, minimally invasive suture techniques for gentle, infection-free emergency extractions.',
    keywords: 'wisdom tooth extraction Dehradun, wisdom tooth removal cost Dehradun, surgical dentist, painless extraction clinic',
    ogTitle: 'Advanced Wisdom Tooth Surgical Removal | PureSmile Dental',
    ogDescription: 'Safe, certified surgical wisdom teeth tooth removals utilizing state-of-the-art suture standards.',
    ogImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'
  },
  'emergency treatment': {
    title: '24/7 Urgent Emergency Dental Surgery & Care | PureSmile Dehradun',
    description: 'An outstanding dental trauma or severe toothache emergency? Get same-day walk-in pain relief at Dehradun\'s top emergency dental hospital.',
    keywords: 'emergency dentist Dehradun, 24 hour dental clinic, urgent dental crown repair, tooth fracture, immediate pain relief',
    ogTitle: 'Same-Day Urgent Emergency Dental Relief | PureSmile Dental',
    ogDescription: 'Instant emergency assistance, pain therapies, and trauma repairs for severe toothaches.',
    ogImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'
  },
  'general checkup and cleaning': {
    title: 'Ultrasonic Dental Scaling & Deep Cleanings | PureSmile Dehradun',
    description: 'Stop swelling and gum disease with professional scaling, polishing, and comprehensive dental health assessments. Clean and polish under 30 minutes.',
    keywords: 'teeth cleaning Dehradun, scaling and polishing Dehradun, dental hygiene, oral prophylaxis cleanings',
    ogTitle: 'Professional Ultrasonic Teeth Hygiene Check | PureSmile Dental',
    ogDescription: 'Experience advanced scaling and comprehensive gum disease prophylactics for clinical oral freshness.',
    ogImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop'
  }
};

export default function SEO({ isBookingModalOpen }: SEOProps) {
  const { activeTreatment } = useTreatment();

  useEffect(() => {
    // 1. Determine key to check in configuration
    let currentKey = 'default';

    if (isBookingModalOpen) {
      currentKey = 'booking';
    } else if (activeTreatment) {
      const normalized = activeTreatment.toLowerCase().trim();
      // Match key safely or fallback to default
      const matchedKey = Object.keys(SEO_CONFIGS).find((k) => {
        if (k === 'default' || k === 'booking') return false;
        return normalized.includes(k) || k.includes(normalized);
      });
      if (matchedKey) {
        currentKey = matchedKey;
      }
    }

    const config = SEO_CONFIGS[currentKey] || SEO_CONFIGS.default;

    // 2. Direct DOM operations to update dynamic meta header values smoothly at runtime
    document.title = config.title;

    const setMeta = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Update standard meta tags
    setMeta('name', 'description', config.description);
    setMeta('name', 'keywords', config.keywords);

    // Update Open Graph (Facebook / LinkedIn) meta tags
    setMeta('property', 'og:title', config.ogTitle);
    setMeta('property', 'og:description', config.ogDescription);
    setMeta('property', 'og:image', config.ogImage);

    // Update Twitter specifics
    setMeta('property', 'twitter:title', config.ogTitle);
    setMeta('property', 'twitter:description', config.ogDescription);
    setMeta('property', 'twitter:image', config.ogImage);

  }, [activeTreatment, isBookingModalOpen]);

  // Return null as this is a background SEO header-only side effect component conforming to React standards
  return null;
}

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
}

// Map treatment names to optimized SEO copy
const SEO_CONFIGS: Record<string, MetaConfigs> = {
  default: {
    title: 'PureSmile Dental Clinic | Modern Dental Care & Confident Smiles',
    description: 'Experience personalized dental care powered by advanced technology, expert treatment, and patient-focused solutions for healthier, brighter, and more confident smiles.',
    keywords: 'PureSmile Dental, best dentist, dental clinic, dental implants, pain-free root canal, cosmetic dentistry, smile design, Dr. Amit Sharma, MDS dentist',
    ogTitle: 'PureSmile Dental Clinic | Modern Dental Care & Confident Smiles',
    ogDescription: 'Experience personalized dental care powered by advanced technology, expert treatment, and patient-focused solutions for healthier, brighter, and more confident smiles.'
  },
  booking: {
    title: 'Secure Online Appointment Booking | PureSmile Dental',
    description: 'Schedule your consultation or dental appointment online at PureSmile Dental with MDS Specialist Dr. Amit Sharma. Fast and fully automated booking flow.',
    keywords: 'book dentist appointment, online dentist booking, secure slot booking Dr. Amit Sharma, PureSmile clinic slots',
    ogTitle: 'Schedule Your Premium Dental Slot | PureSmile Dental',
    ogDescription: 'Select your preferred date, time, and treatment to secure a personalized consultation session.'
  },
  'dental implants': {
    title: 'State-of-the-Art Dental Implants | PureSmile Dental',
    description: 'Restore your teeth with lifetime-guaranteed premium dental implants at PureSmile Dental. Microscopic precision, biological compatibility, and painless care by Dr. Amit Sharma.',
    keywords: 'dental implants, tooth implant cost, dental implant clinic, implant specialist, crown and implants',
    ogTitle: 'Premium Dental Implants Specialist | PureSmile',
    ogDescription: 'Secure, permanent, and natural-feeling dental implants using Swiss dental technologies.'
  },
  'smile makeover': {
    title: 'Custom Smile Makeovers & Porcelain Veneers | PureSmile Dental',
    description: 'Design the smile of your dreams. Our cosmetic dentist specialized smile makeovers customize porcelain veneers and dental laminates for outstanding confidence.',
    keywords: 'smile makeover, cosmetic dentist, dental veneers, laminates, cosmetic treatment clinics',
    ogTitle: 'Bespoke Smile Design & Dental Makeovers | PureSmile Dental',
    ogDescription: 'Achieve a glowing, perfect smile with our advanced cosmetic alignment and customized porcelain solutions.'
  },
  'root canal treatment': {
    title: 'Painless Single-Sitting Root Canal (RCT) | PureSmile',
    description: 'Relieve pain instantly with state-of-the-art single-session microscopic root canal treatment (RCT) at PureSmile Dental. Highly specialized endodontic care.',
    keywords: 'root canal treatment, RCT dentist, painless root canal, single sitting RCT, endodontist',
    ogTitle: 'Microscopic Painless Root Canal Treatments (RCT) | PureSmile',
    ogDescription: 'Save your natural teeth with comfortable and efficient single-sitting root canal therapy under experts.'
  },
  'teeth whitening': {
    title: 'Brilliant Laser Teeth Whitening | PureSmile Dental',
    description: 'Brighten your smile up to 8 shades in a single sitting with advanced clinical safe laser teeth whitening. Zero post-whitening tooth sensitivity guaranteed.',
    keywords: 'teeth whitening, clinical teeth bleaching, safe teeth whitening clinic, laser smile brightening',
    ogTitle: 'Professional Laser Teeth Whitening | PureSmile',
    ogDescription: 'Say goodbye to stains and discoloration in just 45 minutes with our gentle, premium bleaching service.'
  },
  'invisible aligners': {
    title: 'Premium Invisible Aligners & Invisalign | PureSmile',
    description: 'Get straight teeth without metal braces. Premium clear orthodontic aligners and certified Invisalign providers at PureSmile Dental.',
    keywords: 'clear aligners, Invisalign cost, invisible braces, orthodontist aligners clinic',
    ogTitle: 'Digital-First Clear Aligners & Invisalign | PureSmile Dental',
    ogDescription: 'Perfect orthodontic alignments using comfortable, virtually invisible removable dental trays.'
  },
  'pediatric dentistry': {
    title: 'Gentle Pediatric (Kids) Dentistry | PureSmile Dental',
    description: 'Ensure a stress-free teeth checkup for your little ones with our warm, playful, and friendly specialized pediatric dentistry at PureSmile.',
    keywords: 'pediatric dentist, child friendly dental clinic, child cavities treatment, kids dentistry',
    ogTitle: 'Child Friendly Kids Dental Specialist | PureSmile Dental',
    ogDescription: 'Gentle, warm, and anxiety-free pediatric assessments to nurture beautiful lifelong smiles.'
  },
  'wisdom tooth removal': {
    title: 'Painless Surgical Wisdom Tooth Extraction | PureSmile',
    description: 'Relieve wisdom tooth soreness safely. Advanced, minimally invasive suture techniques for gentle, infection-free emergency extractions.',
    keywords: 'wisdom tooth extraction, wisdom tooth removal cost, surgical dentist, painless extraction clinic',
    ogTitle: 'Advanced Wisdom Tooth Surgical Removal | PureSmile Dental',
    ogDescription: 'Safe, certified surgical wisdom teeth tooth removals utilizing state-of-the-art suture standards.'
  },
  'emergency treatment': {
    title: '24/7 Urgent Emergency Dental Surgery & Care | PureSmile',
    description: 'An outstanding dental trauma or severe toothache emergency? Get same-day walk-in pain relief at PureSmile\'s top emergency dental hospital.',
    keywords: 'emergency dentist, 24 hour dental clinic, urgent dental crown repair, tooth fracture, immediate pain relief',
    ogTitle: 'Same-Day Urgent Emergency Dental Relief | PureSmile Dental',
    ogDescription: 'Instant emergency assistance, pain therapies, and trauma repairs for severe toothaches.'
  },
  'general checkup and cleaning': {
    title: 'Ultrasonic Dental Scaling & Deep Cleanings | PureSmile',
    description: 'Stop swelling and gum disease with professional scaling, polishing, and comprehensive dental health assessments. Clean and polish under 30 minutes.',
    keywords: 'teeth cleaning, scaling and polishing, dental hygiene, oral prophylaxis cleanings',
    ogTitle: 'Professional Ultrasonic Teeth Hygiene Check | PureSmile Dental',
    ogDescription: 'Experience advanced scaling and comprehensive gum disease prophylactics for clinical oral freshness.'
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

    // Update Twitter specifics
    setMeta('property', 'twitter:title', config.ogTitle);
    setMeta('property', 'twitter:description', config.ogDescription);

    // Explicitly clean up all Open Graph and Twitter image tags from the document head
    const cleanImageMeta = (attrName: string, attrVal: string) => {
      const elements = document.querySelectorAll(`meta[${attrName}="${attrVal}"]`);
      elements.forEach(element => element.remove());
    };
    cleanImageMeta('property', 'og:image');
    cleanImageMeta('property', 'og:image:width');
    cleanImageMeta('property', 'og:image:height');
    cleanImageMeta('property', 'og:image:type');
    cleanImageMeta('property', 'twitter:image');
    cleanImageMeta('name', 'twitter:image');

  }, [activeTreatment, isBookingModalOpen]);

  // Return null as this is a background SEO header-only side effect component conforming to React standards
  return null;
}

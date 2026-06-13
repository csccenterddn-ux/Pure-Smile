export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string; // lucide icon name
}

export interface TestimonialItem {
  id: string;
  author: string;
  initials: string;
  avatarColor?: string;
  rating: number;
  text: string;
  treatment: string;
  timeAgo: string;
}

export interface QualificationItem {
  year: string;
  title: string;
  description: string;
}

export interface BeforeAfterItem {
  id: string;
  label: string;
  beforeUrl: string;
  afterUrl: string;
  patientInfo: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface JourneyStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  category: string;
  name: string;
  price: string;
  priceNote: string;
  features: string[];
  isFeatured?: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  category: string;
  title: string;
  summary: string;
  readTime: string;
  author: string;
  date: string;
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

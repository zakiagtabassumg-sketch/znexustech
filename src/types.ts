export interface PortfolioConfig {
  name: string;
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheading: string;
  email: string;
  phone: string;
  location: string;
  calendlyUrl: string;
  whatsappNumber: string;
  linkedinUrl: string;
  stats: {
    adSpendManaged: string;
    avgRoas: string;
    brandsScaled: string;
    clientRetention: string;
  };
  aboutBio: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'paid-ads' | 'seo' | 'cro' | 'analytics' | 'web-dev' | 'n8n-bot' | 'software-dev';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  impactMetric: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'paid-ads' | 'seo' | 'cro' | 'b2b';
  industry: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  challenge: string;
  strategy: string[];
  results: string;
  chartData: { month: string; before: number; after: number; roas?: number }[];
  clientQuote?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  resultsBadge: string;
}

export interface AuditResult {
  overallScore: number;
  summary: string;
  categories: {
    technicalSeo: { score: number; issueCount: number; highlights: string[] };
    onPageContent: { score: number; issueCount: number; highlights: string[] };
    paidAdsPotential: { score: number; issueCount: number; highlights: string[] };
    pageSpeed: { score: number; issueCount: number; highlights: string[] };
  };
  actionPlan: { step: number; priority: 'High' | 'Medium' | 'Low'; title: string; desc: string }[];
  estimatedRoasBoost: string;
  estimatedTrafficGrowth: string;
}

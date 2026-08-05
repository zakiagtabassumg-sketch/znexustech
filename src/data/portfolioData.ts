import { PortfolioConfig, ServiceItem, CaseStudy, Testimonial } from '../types';

export const defaultPortfolioConfig: PortfolioConfig = {
  name: "Zakia Tabassum",
  brandName: "ZNEXUSTECH",
  tagline: "Webpage & Software Developer, n8n AI Chatbots & Performance Growth Specialist",
  heroHeadline: "Web Development from Scratch, n8n Chatbots, Software Engineering & Paid Growth",
  heroSubheading: "Hi, I'm Zakia Tabassum. I build custom high-performance websites from scratch, engineer automated n8n AI chatbots, develop full-stack software applications, and scale brands with Meta & Google Ads and technical SEO.",
  email: "zakiagtabassumg@gmail.com",
  phone: "+1 (555) 382-9200",
  location: "Global Remote Specialist / Available Worldwide",
  calendlyUrl: "https://calendly.com",
  whatsappNumber: "+15553829200",
  linkedinUrl: "https://linkedin.com",
  stats: {
    adSpendManaged: "$2.5M+",
    avgRoas: "3.8x",
    brandsScaled: "50+",
    clientRetention: "99.4%"
  },
  aboutBio: "I am Zakia Tabassum, Founder & Lead Developer at ZNEXUSTECH. As a Webpage Developer from Scratch, n8n Chatbot & Automation Engineer, Software Developer, and Growth Marketer, I deliver complete end-to-end digital engineering. From clean custom code bases without heavy plugins to intelligent AI workflows and high-ROAS advertising campaigns, I turn complex business ideas into seamless digital reality."
};

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev-from-scratch",
    title: "Webpage Developer from Scratch",
    category: "web-dev",
    shortDesc: "Custom high-converting websites, landing pages & web apps engineered from the ground up with zero bloat.",
    fullDesc: "Bespoke web development built completely from scratch using modern React, TypeScript, Tailwind CSS, and optimized HTML5 architecture. Unmatched page load speed (98+ Core Web Vitals score), responsive mobile UI, custom animations, and seamless CMS integration.",
    iconName: "Globe",
    features: [
      "100% Custom Responsive Design & Pixel-Perfect UI",
      "Zero Heavy Themes or Bloated Plugin Overhead",
      "Built-in Technical SEO & Structured JSON-LD Schema",
      "Sub-Second Page Speed & 98+ Google Lighthouse Score"
    ],
    impactMetric: "Sub-Second Load Times & Maximum Conversions"
  },
  {
    id: "n8n-chatbot-developer",
    title: "n8n Chatbot & Automation Developer",
    category: "n8n-bot",
    shortDesc: "AI-powered chatbots & automated n8n workflows connecting WhatsApp, Telegram, CRMs, and APIs.",
    fullDesc: "Custom n8n workflow engineering and intelligent AI Chatbot development. Connect Gemini AI, OpenAI, databases, Google Sheets, WhatsApp Business, and CRMs to automate customer support, lead capture, and instant quote generation 24/7.",
    iconName: "Bot",
    features: [
      "n8n Self-Hosted & Cloud Workflow Automation",
      "Custom AI Chatbots (WhatsApp, Telegram, Website)",
      "Webhook Integrations & Multi-Step CRM Pipelines",
      "Gemini & LLM Agent Knowledge Base Training"
    ],
    impactMetric: "24/7 Automated Lead Capture & Support"
  },
  {
    id: "software-developer",
    title: "Custom Software & Full-Stack Developer",
    category: "software-dev",
    shortDesc: "Full-stack web software, SaaS platforms, custom backend APIs, and database architecture.",
    fullDesc: "End-to-end software engineering for modern SaaS applications, internal business tools, RESTful & GraphQL APIs, and cloud database architectures. Engineered for security, modular scalability, and seamless user experiences.",
    iconName: "Code2",
    features: [
      "Full-Stack Web App Development (Node.js, React, Express)",
      "Custom API Architecture & Third-Party SDK Integrations",
      "Database Design (PostgreSQL, MongoDB, Firebase)",
      "Secure Cloud Deployment & DevOps Pipeline Setup"
    ],
    impactMetric: "Scalable Enterprise-Grade Codebase"
  },
  {
    id: "meta-google-ads",
    title: "Performance Paid Ads (Meta & Google Ads)",
    category: "paid-ads",
    shortDesc: "High-ROAS Meta (Facebook/Instagram) Advantage+ campaigns and Google Performance Max search ads.",
    fullDesc: "Data-driven media buying that targets high-intent buyers. From full funnel creative testing to custom lookalike audience scaling and retargeting automation.",
    iconName: "Target",
    features: [
      "Meta Advantage+ Shopping & Dynamic Product Ads",
      "Google Search, Performance Max & Shopping Feeds",
      "A/B Creative Testing & High-Converting Copy",
      "ROAS-Driven Bidding & Budget Scaling Strategies"
    ],
    impactMetric: "3.8x - 5.2x Average Campaign ROAS"
  },
  {
    id: "technical-seo",
    title: "Technical SEO & Organic Traffic Scaling",
    category: "seo",
    shortDesc: "Rank #1 for high-value commercial keywords with Core Web Vitals optimization and Schema markup.",
    fullDesc: "Complete technical search architecture overhaul. I fix crawl budgets, optimize indexation, build topic clusters, and execute high-authority backlink campaigns.",
    iconName: "Search",
    features: [
      "Core Web Vitals & Speed Optimization (LCP/CLS)",
      "Structured Data & Rich Snippets JSON-LD Schema",
      "Keyword Intent Clustering & Content Gap Mapping",
      "High DR Quality Backlink Outreach & Authority Building"
    ],
    impactMetric: "+180% Organic Revenue Lift in 90 Days"
  },
  {
    id: "shopify-cro",
    title: "Shopify & E-Commerce CRO",
    category: "cro",
    shortDesc: "Transform existing website traffic into paying customers with conversion rate optimization.",
    fullDesc: "Diagnose drop-off points in your shopping funnel. Implement high-converting product page layouts, frictionless checkout flows, and automated Klaviyo email series.",
    iconName: "ShoppingBag",
    features: [
      "Product Page & Cart Friction Elimination",
      "Klaviyo Abandoned Cart & Flow Automation",
      "Checkout Flow Speed & Trust Badge Enhancements",
      "User Heatmap Analysis & A/B Split Testing"
    ],
    impactMetric: "+35% Average Conversion Rate Lift"
  },
  {
    id: "server-analytics",
    title: "Advanced Data Analytics & Server Tracking",
    category: "analytics",
    shortDesc: "100% accurate conversion tracking with Meta Pixel CAPI, GA4, and Google Tag Manager.",
    fullDesc: "Bypass iOS privacy restrictions and ad blockers with custom server-side CAPI tracking. Get complete multi-touch attribution reports to make confident ad scaling decisions.",
    iconName: "BarChart3",
    features: [
      "Meta Conversions API (CAPI) Server-side Setup",
      "GA4 Enhanced E-commerce Event Implementation",
      "Google Tag Manager Server Container Deployment",
      "Custom Looker Studio Executive Dashboards"
    ],
    impactMetric: "99.8% Data Tracking Accuracy"
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "case-luxe-beauty",
    title: "Scaling Luxe Beauty Shopify Store to $118K/mo",
    client: "Luxe Beauty Cosmetics",
    category: "paid-ads",
    industry: "E-Commerce / Skincare & Cosmetics",
    summary: "Overhauled stalled Facebook & Instagram ad accounts by introducing UGC ad angles, Advantage+ catalog scaling, and Klaviyo SMS/Email flows.",
    metrics: [
      { label: "Monthly Revenue", value: "$118,400", change: "+391%" },
      { label: "Meta Ads ROAS", value: "4.3x", change: "From 1.6x" },
      { label: "Customer Acquisition Cost", value: "$18.20", change: "-42%" }
    ],
    challenge: "Client was burning ad budget on cold audiences with flat creative angles. High bounce rates on product pages resulted in a low 1.4% conversion rate.",
    strategy: [
      "Audited Meta Pixel tracking and migrated to Meta Conversions API (CAPI) server-side tracking.",
      "Tested 12 hook variations featuring authentic micro-influencer UGC video reels.",
      "Restructured Shopify product pages with trust badges, social proof popups, and instant 1-click add to cart.",
      "Built automated Klaviyo email flows (Welcome, Abandoned Cart, Post-Purchase VIP)."
    ],
    results: "In 90 days, monthly sales quadrupled from $24,100 to $118,400 while maintaining a stable 4.3x ROAS across cold and warm ad sets.",
    chartData: [
      { month: "Month 1", before: 24100, after: 31000, roas: 1.8 },
      { month: "Month 2", before: 24100, after: 54000, roas: 2.7 },
      { month: "Month 3", before: 24100, after: 82000, roas: 3.6 },
      { month: "Month 4", before: 24100, after: 118400, roas: 4.3 }
    ],
    clientQuote: {
      quote: "Zakia transformed our entire digital acquisition model. Her ZNEXUSTECH team didn't just run ads—she fixed our site speed, tracking, and email funnel. Highly recommended!",
      author: "Elena Rostova",
      role: "CMO, Luxe Beauty"
    }
  },
  {
    id: "case-nexus-tech",
    title: "18,000+ Monthly Organic Visitors via Technical SEO",
    client: "Nexus Audio & Electronics",
    category: "seo",
    industry: "Tech Accessories & Headphones",
    summary: "Fixed critical Core Web Vitals, implemented rich snippet schema markup, and built a high-converting blog content hub targeting commercial intent keywords.",
    metrics: [
      { label: "Organic Monthly Traffic", value: "18,450", change: "+240%" },
      { label: "#1 Page Rankings", value: "14 Keywords", change: "From 0" },
      { label: "Organic Monthly Sales", value: "$85,200", change: "+310%" }
    ],
    challenge: "Website suffered from severe page speed issues (LCP > 4.2 seconds) and cannibalized keyword structures that caused page ranking drops.",
    strategy: [
      "Eliminated render-blocking JS bundles and compressed Shopify theme images to bring mobile speed score from 34 to 92.",
      "Injected rich Product, AggregateRating, and Breadcrumb List schema markup.",
      "Executed a targeted 30-day outreach campaign resulting in 18 DR60+ backlink placements."
    ],
    results: "Achieved page #1 Google rankings for 14 competitive audio accessory keywords, driving over $85,000 in monthly organic sales with $0 ad spend.",
    chartData: [
      { month: "Month 1", before: 5400, after: 6800 },
      { month: "Month 2", before: 5400, after: 9800 },
      { month: "Month 3", before: 5400, after: 14200 },
      { month: "Month 4", before: 5400, after: 18450 }
    ],
    clientQuote: {
      quote: "Zakia Tabassum is a rare SEO expert who truly understands e-commerce revenue, not just vanity search volume. The results speak for themselves.",
      author: "Marcus Vance",
      role: "Founder, Nexus Electronics"
    }
  },
  {
    id: "case-urban-living",
    title: "5.1x Peak Campaign ROAS for Modern Home Decor",
    client: "Urban Living Decor",
    category: "paid-ads",
    industry: "Home & Furniture E-Commerce",
    summary: "Deployed Google Performance Max (PMax) ads alongside Meta Advantage+ Catalog Retargeting to scale seasonal promotional sales.",
    metrics: [
      { label: "Peak ROAS", value: "5.1x", change: "+145%" },
      { label: "Total Revenue Generated", value: "$310,000", change: "60 Days" },
      { label: "Repeat Purchase Rate", value: "28.4%", change: "+65%" }
    ],
    challenge: "High average order value ($350+) resulted in long customer consideration cycles and lost abandoned carts.",
    strategy: [
      "Created multi-angle video ad campaigns highlighting product build quality and customer unboxings.",
      "Set up Google PMax feed optimizations with high-resolution imagery and negative keyword exclusions.",
      "Implemented automated SMS retargeting offering limited-time VIP discounts."
    ],
    results: "Generated $310,000 in tracked revenue during a 60-day campaign sprint with a peak 5.1x ROAS.",
    chartData: [
      { month: "Week 1", before: 15000, after: 32000, roas: 2.9 },
      { month: "Week 3", before: 15000, after: 78000, roas: 3.8 },
      { month: "Week 6", before: 15000, after: 185000, roas: 4.6 },
      { month: "Week 8", before: 15000, after: 310000, roas: 5.1 }
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    company: "Aura Organics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Working with Zakia Tabassum was the best decision we made for our brand this year. She took our Meta ad ROAS from 1.5x to 4.2x in less than 8 weeks while optimizing our Shopify store speed.",
    resultsBadge: "4.2x ROAS Achieved"
  },
  {
    id: "t2",
    name: "David Sterling",
    role: "Head of Marketing",
    company: "Apex Tech Gear",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Zakia's technical SEO knowledge is top-tier. She identified indexation bugs that 3 previous agencies missed. Our organic traffic grew by 220% in 3 months!",
    resultsBadge: "+220% Organic Traffic"
  },
  {
    id: "t3",
    name: "Miriam Al-Fayed",
    role: "E-Commerce Director",
    company: "Velvet Silk Wear",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "The ZNEXUSTECH team understands data, server-side CAPI tracking, and conversion funnels inside out. Clear communication, detailed reports, and undeniable ROI.",
    resultsBadge: "$140K Revenue Sprint"
  }
];

export const techStackData = [
  { name: "n8n Workflow & AI Automation", category: "AI & Chatbots", icon: "Bot", level: "98%" },
  { name: "React, TypeScript & Tailwind", category: "Web Development", icon: "Globe", level: "97%" },
  { name: "Node.js & Express Software APIs", category: "Software Dev", icon: "Code2", level: "96%" },
  { name: "Google Ads & PMax", category: "Paid Media", icon: "Target", level: "98%" },
  { name: "Meta Ads Manager", category: "Paid Media", icon: "Megaphone", level: "97%" },
  { name: "GA4 & Server CAPI Tracking", category: "Analytics", icon: "BarChart3", level: "95%" },
  { name: "Semrush & Technical SEO", category: "SEO Tools", icon: "Search", level: "96%" },
  { name: "Shopify & Liquid CRO", category: "E-Commerce", icon: "ShoppingBag", level: "94%" }
];

export const certificationsData = [
  { name: "Google Ads Search & Shopping Certified", issuer: "Google Academy", year: "2025" },
  { name: "Meta Certified Marketing Science Professional", issuer: "Meta Blueprint", year: "2025" },
  { name: "Shopify Partner & E-Commerce Expert", issuer: "Shopify", year: "2024" },
  { name: "HubSpot Inbound Marketing & Email Automation", issuer: "HubSpot Academy", year: "2024" }
];

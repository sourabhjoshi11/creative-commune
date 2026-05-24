export interface Service {
  num: string;
  name: string;
  desc: string;
  benefits: string[];
  icon: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  initials: string;
  rating: number;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface WhyUsFeature {
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  { num: '01', name: 'Brand Strategy & Positioning', desc: 'We define who you are in the market — your voice, visual identity, and competitive edge. Through deep audience research and cultural insight, we position your brand as the obvious choice in your category. No generic templates. Every element is built to make your brand unforgettable.', benefits: ['Higher brand recall', 'Premium positioning', 'Stronger audience connection', 'Clear market differentiation'], icon: '◈', image: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(0,0,0,0.8))' },
  { num: '02', name: 'Social Media & Content Production', desc: 'From scroll-stopping reels to editorial carousels — we produce content that builds communities, not just followers. Our team handles strategy, scripting, shooting, editing, and publishing across Instagram, LinkedIn, YouTube, and emerging platforms. Every post is designed to convert attention into loyalty.', benefits: ['Audience growth', 'Higher engagement rates', 'Viral visibility', 'Community building'], icon: '◉', image: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(10,10,10,0.9))' },
  { num: '03', name: 'Performance Marketing', desc: 'We run paid campaigns that actually pay back. Meta Ads, Google Ads, programmatic — all managed with obsessive attention to targeting, creative testing, and funnel optimization. Every rupee is tracked, every campaign is iterated weekly, and every report shows real revenue impact.', benefits: ['Qualified leads', 'Predictable sales growth', '3-5x ROAS', 'Lower acquisition costs'], icon: '◎', image: 'linear-gradient(135deg, rgba(201,168,76,0.25), rgba(5,5,5,0.85))' },
  { num: '04', name: 'AI Automation & Systems', desc: 'We build custom AI workflows that replace hours of manual work — from automated lead nurturing and chatbot funnels to AI-generated content pipelines and CRM integrations. Your team focuses on high-value decisions while systems handle the rest at scale.', benefits: ['20+ hours saved weekly', 'Operational scaling', 'Reduced manual workload', 'Smarter lead handling'], icon: '⬡', image: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(0,0,0,0.9))' },
  { num: '05', name: 'Website & Digital Experience Design', desc: 'We design and develop websites that feel like luxury experiences — fast, immersive, and conversion-optimized. From landing pages to full e-commerce builds, every pixel serves a purpose. Built with modern frameworks, optimized for speed, and designed to make visitors stay, scroll, and buy.', benefits: ['Higher conversions', 'Stronger digital presence', 'Premium perception', 'Sub-2s load times'], icon: '◇', image: 'linear-gradient(135deg, rgba(201,168,76,0.35), rgba(10,10,10,0.7))' },
];

export const PROCESS: ProcessStep[] = [
  { step: '01', title: 'Discovery Call', desc: 'We listen first. A 30-minute call to understand your brand, goals, target audience, current challenges, and growth gaps. No pitch — just genuine understanding of where you are and where you want to be.' },
  { step: '02', title: 'Brand Audit & Research', desc: 'We deep-dive into your market landscape — analyzing competitors, identifying untapped opportunities, studying audience behavior, and evaluating your current brand presence across all touchpoints. This gives us the data to build a winning strategy.' },
  { step: '03', title: 'Strategy Development', desc: 'Based on our research, we build a custom growth roadmap tailored to your objectives. This includes channel strategy, content pillars, campaign frameworks, budget allocation, and clear KPIs — everything you need to move forward with confidence.' },
  { step: '04', title: 'Creative Production', desc: 'Our team brings the strategy to life — content shoots, graphic design, ad creatives, website builds, copywriting, and video production. Every asset is crafted with luxury precision and aligned to your brand identity.' },
  { step: '05', title: 'Launch & Marketing Execution', desc: 'Full rollout across all channels — paid ads go live, social content starts publishing, website launches, email sequences activate. We manage everything end-to-end so you can focus on running your business.' },
  { step: '06', title: 'Optimization & Scaling', desc: 'We monitor performance daily, run A/B tests, refine targeting, and optimize creatives. Monthly strategy reviews ensure we are always improving. Once we find what works, we scale it aggressively to maximize your ROI.' },
];

export const STATS: Stat[] = [
  { value: '15+', label: 'Clients Served' },
  { value: '30+', label: 'Projects Completed' },
  { value: '2+', label: 'Years of Excellence' },
  { value: '1M+', label: 'Campaign Reach' },
];

// Replace with real client testimonials
export const TESTIMONIALS: Testimonial[] = [
  { id: 1, quote: 'Creative Commune transformed our brand presence entirely. Their strategic approach to content and positioning helped us reach an audience we never thought possible.', name: 'Arjun Mehta', company: 'Maison Luxe', initials: 'AM', rating: 5 },
  { id: 2, quote: 'The AI automation systems they built saved us 20+ hours weekly. Their understanding of luxury aesthetics combined with technical expertise is unmatched.', name: 'Priya Sharma', company: 'Velvet & Co.', initials: 'PS', rating: 5 },
  { id: 3, quote: 'From strategy to execution, every deliverable exceeded expectations. Our campaign reach grew 5x within the first quarter of working together.', name: 'Rohan Kapoor', company: 'Atelier Studios', initials: 'RK', rating: 5 },
];

export const FAQS: FAQ[] = [
  { q: 'What industries do you specialize in?', a: 'We specialize in luxury, fashion, hospitality, lifestyle, F&B, and emerging brands. Our approach is tailored for brands that value premium aesthetics and strategic growth.' },
  { q: 'How long does a typical project take?', a: 'Timelines vary by scope. Brand strategy projects typically take 2-4 weeks, while full-scale marketing retainers are ongoing monthly engagements. We provide detailed timelines during our discovery call.' },
  { q: 'Do you work with startups or only established brands?', a: 'We work with both. Whether you are launching a new brand or scaling an existing one, our strategies are customized to your stage and growth objectives.' },
  { q: 'What makes Creative Commune different from other agencies?', a: 'We combine luxury aesthetics with data-driven performance. Our culture-led approach ensures your brand does not just look premium — it performs premium. Plus, our AI integration gives you an operational edge.' },
  { q: 'How do you measure success?', a: 'We define KPIs during strategy development — from brand awareness metrics to conversion rates and ROAS. Monthly reports keep you informed with full transparency on performance.' },
  { q: 'What is your pricing structure?', a: 'We offer project-based pricing and monthly retainers depending on scope. Every engagement starts with a discovery call to understand your needs before we provide a custom proposal.' },
];

export const WHY_US_FEATURES: WhyUsFeature[] = [
  { title: 'Culture-Led Strategy', desc: 'We build brands rooted in culture, not just trends — creating lasting relevance.' },
  { title: 'Luxury Aesthetics', desc: 'Every touchpoint is designed with premium precision and visual excellence.' },
  { title: 'AI-Powered Systems', desc: 'Custom automation that scales your operations without scaling your team.' },
  { title: 'Data-Driven Growth', desc: 'Every decision backed by analytics, every campaign optimized for ROI.' },
  { title: 'End-to-End Execution', desc: 'From strategy to content to ads — we handle the full growth stack.' },
  { title: 'Dedicated Partnership', desc: 'Not just an agency — a growth partner invested in your long-term success.' },
];

export const MARQUEE_ITEMS: string[] = [
  'Brand Strategy', 'Content Production', 'Performance Marketing', 'AI Automation',
  'Digital Experience', 'Culture-Led Growth', 'Luxury Aesthetics', 'Paid Advertising',
];

export const SERVICE_OPTIONS: string[] = [
  'Brand Strategy & Positioning', 'Social Media & Content', 'Performance Marketing',
  'AI Automation & Systems', 'Website & Digital Experience', 'Full-Service Retainer',
];

export const BUDGET_OPTIONS: string[] = [
  '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000 – ₹2,50,000',
  '₹2,50,000 – ₹5,00,000', '₹5,00,000+',
];

import React from 'react';
import { ZOYA_PROFILE, SADIA_PROFILE, JAVERIYA_PROFILE } from '../data/imageAssets';
import { Code, Search, Bot, CheckCircle2, MessageSquare, Sparkles, Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  onSelectMemberService: (serviceTitle: string) => void;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  statsLabel: string;
  statsVal: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectMemberService }) => {
  const teamMembers: TeamMember[] = [
    {
      id: 'zoya',
      name: 'Zoya',
      role: 'Webpage Scratch Developer',
      title: 'Senior Custom Web & Frontend Engineer',
      bio: 'Zoya specializes in building ultra-fast, responsive websites and web applications completely from scratch. Zero bloated plugins or heavy page builders—just clean, handcrafted, high-converting code.',
      image: ZOYA_PROFILE,
      specialties: [
        'Websites Built 100% From Scratch',
        'React, TypeScript & Modern Tailwind CSS',
        'Sub-Second Page Load & Core Web Vitals (98+ Score)',
        'Pixel-Perfect Responsive Mobile UI'
      ],
      icon: <Code className="w-5 h-5 text-orange-400" />,
      badge: 'Code Scratch Pro',
      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      statsLabel: 'Sites Built',
      statsVal: '85+'
    },
    {
      id: 'sadia',
      name: 'Sadia',
      role: 'SEO & GEO Expert',
      title: 'Lead Technical SEO & Generative AI Search Specialist',
      bio: 'Sadia leads our search engine dominance strategies. She bridges traditional Google Technical SEO with cutting-edge GEO (Generative Engine Optimization), ensuring your brand ranks #1 on Google and gets recommended by ChatGPT & Gemini.',
      image: SADIA_PROFILE,
      specialties: [
        'Technical & On-Page SEO Audits',
        'GEO (ChatGPT, Perplexity & Gemini AI Search)',
        'Structured Schema JSON-LD Data Architecture',
        'High-Authority Organic Rank Scaling'
      ],
      icon: <Search className="w-5 h-5 text-cyan-400" />,
      badge: 'SEO & GEO Specialist',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      statsLabel: 'Organic Traffic Boost',
      statsVal: '340%'
    },
    {
      id: 'javeriya',
      name: 'Javeriya',
      role: 'AI Chatbot & n8n Developer',
      title: 'Senior Workflow Automation Architect',
      bio: 'Javeriya designs intelligent, self-hosted n8n workflows and AI chatbots. She connects WhatsApp Business, Telegram, custom web widgets, and CRMs to automate 24/7 client support and lead qualification.',
      image: JAVERIYA_PROFILE,
      specialties: [
        'Custom n8n Workflow Automation Systems',
        'AI Chatbots (WhatsApp, Telegram & Website)',
        'LLM Knowledge Base RAG Training',
        'CRM & Webhook API Multi-Step Integrations'
      ],
      icon: <Bot className="w-5 h-5 text-amber-400" />,
      badge: 'n8n AI Architect',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      statsLabel: 'Hours Saved Monthly',
      statsVal: '500+ hrs'
    }
  ];

  return (
    <section id="team" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Background Subtle Gradient Flares */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-xs font-semibold text-amber-300">
            <Users className="w-4 h-4 text-amber-400" />
            <span>ZNEXUSTECH Agency Specialists</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Meet Our Expert Agency Team
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            We are a dedicated digital engineering and growth agency. Powered by specialized experts in custom web development from scratch, search engine GEO, and n8n AI chatbots, we build complete end-to-end solutions for your business.
          </p>
        </div>

        {/* Team Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl group hover:shadow-2xl hover:shadow-orange-950/20"
            >
              <div className="space-y-6">
                
                {/* Image & Badge Header */}
                <div className="relative">
                  <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        if (member.id === 'zoya') e.currentTarget.src = '/zoya_dev_photo_1785864314786.jpg';
                        else if (member.id === 'sadia') e.currentTarget.src = '/sadia_seo_photo_1785864327769.jpg';
                        else if (member.id === 'javeriya') e.currentTarget.src = '/javeriya_bot_photo_1785864340391.jpg';
                        else e.currentTarget.src = '/zakia_tabassum_profile_1785831452707.jpg';
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Badge Overlay */}
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${member.badgeColor}`}>
                        {member.icon}
                        <span>{member.badge}</span>
                      </span>
                    </div>

                    {/* Bottom Stat Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-lg border border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">{member.statsLabel}</span>
                      <span className="text-sm font-black text-amber-400">{member.statsVal}</span>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-400">{member.title}</p>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>

                {/* Key Skills Bullet List */}
                <div className="pt-2 space-y-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Expertise</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {member.specialties.map((spec, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onSelectMemberService(`Inquiry for ${member.name} (${member.role})`)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 text-xs font-bold text-slate-900 bg-gradient-to-r from-orange-400 via-amber-400 to-pink-400 hover:from-orange-300 hover:to-pink-300 rounded-xl transition-all shadow-md group-hover:shadow-lg active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-slate-950" />
                  <span>Work with {member.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950 ml-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Agency Guarantee Banner */}
        <div className="mt-16 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-orange-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Full-Service Agency Expertise Guaranteed</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                When you hire ZNEXUSTECH, you get Zakia, Zoya, Sadia, and Javeriya working together in sync—delivering custom web apps, automated n8n chatbots, and top search engine rankings under one roof.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectMemberService('Full Agency Retainer (Web Dev, n8n AI Chatbots & SEO)')}
            className="shrink-0 px-6 py-3 text-xs font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg transition-transform active:scale-95"
          >
            Hire Our Entire Agency Team
          </button>
        </div>

      </div>
    </section>
  );
};

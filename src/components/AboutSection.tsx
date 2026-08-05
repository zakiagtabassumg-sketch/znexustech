import React from 'react';
import { ZAKIA_PROFILE, ZNEXUSTECH_LOGO } from '../data/imageAssets';
import { PortfolioConfig } from '../types';
import { Target, ShieldCheck, Zap, Award, CheckCircle2, TrendingUp, Sparkles, User } from 'lucide-react';

interface AboutSectionProps {
  config: PortfolioConfig;
  onOpenCustomizer: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config, onOpenCustomizer }) => {
  return (
    <section id="about" className="py-20 bg-slate-900 border-y border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Image & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 opacity-25 blur-xl" />
              <div className="relative bg-slate-950 p-4 rounded-2xl border border-slate-800 shadow-2xl space-y-4">
                <img
                  src={ZAKIA_PROFILE}
                  alt={config.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/zakia_tabassum_profile_1785831452707.jpg';
                  }}
                  className="w-full h-80 object-cover object-center rounded-xl"
                />

                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="flex items-center space-x-2.5">
                    <img
                      src={ZNEXUSTECH_LOGO}
                      alt={config.brandName}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/znexustech_logo_1785831438668.jpg';
                      }}
                      className="w-8 h-8 rounded-lg bg-white p-0.5 object-cover"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{config.name}</div>
                      <div className="text-[10px] text-orange-400 font-medium">{config.brandName} Lead Strategist</div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenCustomizer}
                    className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30 hover:bg-amber-500/20"
                  >
                    Edit Bio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Bio & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400">
              <User className="w-3.5 h-3.5 text-orange-400" />
              <span>About {config.name}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A Data-First Approach to Digital Marketing & Search Architecture
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {config.aboutBio}
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center space-x-2 text-xs font-bold text-orange-400">
                  <Target className="w-4 h-4" />
                  <span>Zero Fluff Media Buying</span>
                </div>
                <p className="text-xs text-slate-400">Every ad dollar spent is tracked to real bottom-line revenue and net profit margin.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center space-x-2 text-xs font-bold text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Server CAPI Accuracy</span>
                </div>
                <p className="text-xs text-slate-400">Server-side conversion tracking guarantees 100% data fidelity despite iOS/browser blocks.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>Technical SEO Engineering</span>
                </div>
                <p className="text-xs text-slate-400">Schema markup, Core Web Vitals, and keyword clusters built for sustainable #1 ranks.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center space-x-2 text-xs font-bold text-pink-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Transparent Communication</span>
                </div>
                <p className="text-xs text-slate-400">Weekly Looker Studio executive reports with clear video strategy walkthroughs.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

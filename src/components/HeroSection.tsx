import React from 'react';
import { ZAKIA_PROFILE, ZNEXUSTECH_LOGO } from '../data/imageAssets';
import { PortfolioConfig } from '../types';
import { Sparkles, ArrowRight, TrendingUp, ShieldCheck, Award, Target, Zap, Search, DollarSign } from 'lucide-react';

interface HeroSectionProps {
  config: PortfolioConfig;
  onScrollToSection: (id: string) => void;
  onOpenCustomizer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onScrollToSection, onOpenCustomizer }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/15 via-pink-600/15 to-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Complete Profile Picture Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow Box */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 opacity-30 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl overflow-hidden">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <img
                      src={ZNEXUSTECH_LOGO}
                      alt={config.brandName}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/znexustech_logo_1785831438668.jpg';
                      }}
                      className="w-9 h-9 rounded-lg bg-white p-0.5 border border-slate-700"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-white">{config.name}</h3>
                      <p className="text-[11px] text-orange-400 font-medium">Founder @ {config.brandName}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                    Accepting Clients
                  </span>
                </div>

                {/* Profile Photo with Floating Badges */}
                <div className="relative my-5 rounded-xl overflow-hidden group">
                  <img
                    src={ZAKIA_PROFILE}
                    alt={config.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/zakia_tabassum_profile_1785831452707.jpg';
                    }}
                    className="w-full h-80 sm:h-96 object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Floating Metric Badge 1 */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 shadow-lg flex items-center space-x-2">
                    <Target className="w-4 h-4 text-orange-400" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-300">Meta Ads Pro</div>
                      <div className="text-[9px] text-slate-400">Advantage+ Certified</div>
                    </div>
                  </div>

                  {/* Floating Metric Badge 2 */}
                  <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 shadow-lg flex items-center space-x-2">
                    <Search className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-300">Technical SEO</div>
                      <div className="text-[9px] text-cyan-400">Rank #1 Specialist</div>
                    </div>
                  </div>
                </div>

                {/* Certification Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                    Google Ads Certified
                  </span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                    Shopify Growth Partner
                  </span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                    Meta CAPI Specialist
                  </span>
                </div>

                {/* Quick Contact Line */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="truncate">{config.email}</span>
                  <button
                    onClick={onOpenCustomizer}
                    className="text-amber-400 hover:underline text-[11px] font-semibold flex items-center space-x-1"
                  >
                    <span>Edit Profile Data</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/30 text-xs font-semibold text-orange-300 shadow-lg shadow-orange-950/20">
              <span className="flex h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
              <span>{config.brandName} • Digital Growth Engineering</span>
            </div>

            {/* Main Headline (Clean typography, circle image removed) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {config.name}
              </span>
              <br />
              <span className="text-slate-100 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2">
                {config.heroHeadline}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {config.heroSubheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onScrollToSection('audit')}
                className="flex items-center space-x-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-orange-400 via-amber-400 to-pink-400 hover:from-orange-300 hover:to-pink-300 rounded-xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all transform active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Run Free AI SEO Audit</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onScrollToSection('calculator')}
                className="flex items-center space-x-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl hover:border-slate-600 transition-all shadow-md"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>ROI Calculator</span>
              </button>

              <button
                onClick={() => onScrollToSection('case-studies')}
                className="flex items-center space-x-1.5 px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>View Case Studies</span>
              </button>
            </div>

            {/* Verified Key Performance Metrics Grid */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 hover:border-orange-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-orange-400 tracking-tight">
                  {config.stats.adSpendManaged}
                </div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">Ad Spend Managed</div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 hover:border-emerald-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 tracking-tight">
                  {config.stats.avgRoas}
                </div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">Average ROAS</div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-cyan-400 tracking-tight">
                  {config.stats.brandsScaled}
                </div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">Brands Scaled</div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 hover:border-pink-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-pink-400 tracking-tight">
                  {config.stats.clientRetention}
                </div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">Client Retention</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ZNEXUSTECH_LOGO } from '../data/imageAssets';
import { PortfolioConfig } from '../types';
import { Edit3, ArrowUp } from 'lucide-react';

interface FooterProps {
  config: PortfolioConfig;
  onOpenCustomizer: () => void;
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenCustomizer, onScrollToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <img
              src={ZNEXUSTECH_LOGO}
              alt={config.brandName}
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/znexustech_logo_1785831438668.jpg';
              }}
              className="w-10 h-10 rounded-xl bg-white p-0.5 border border-slate-700 object-cover"
            />
            <div>
              <div className="text-lg font-black text-white tracking-tight">{config.brandName}</div>
              <div className="text-xs text-slate-400">{config.name} • {config.tagline}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
            <button onClick={() => onScrollToSection('services')} className="hover:text-white transition-colors">
              Services
            </button>
            <button onClick={() => onScrollToSection('case-studies')} className="hover:text-white transition-colors">
              Case Studies
            </button>
            <button onClick={() => onScrollToSection('calculator')} className="hover:text-white transition-colors">
              ROI Calculator
            </button>
            <button onClick={() => onScrollToSection('audit')} className="hover:text-white transition-colors">
              AI SEO Audit
            </button>
            <button onClick={() => onScrollToSection('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
            {import.meta.env.DEV && (
              <button onClick={onOpenCustomizer} className="text-amber-400 hover:underline">
                Live Customizer
              </button>
            )}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white hover:border-slate-700 transition"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} {config.brandName} ({config.name}). All rights reserved.
          </div>
          <div className="text-[11px] text-slate-500">
            Performance Marketing • Meta & Google Ads • Technical SEO • E-Commerce Growth
          </div>
        </div>
      </div>
    </footer>
  );
};

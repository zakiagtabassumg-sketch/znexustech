import React, { useState, useEffect } from 'react';
import { ZNEXUSTECH_LOGO } from '../data/imageAssets';
import { PortfolioConfig } from '../types';
import { Menu, X, Edit3, Calendar, MessageSquare } from 'lucide-react';

interface NavbarProps {
  config: PortfolioConfig;
  onOpenCustomizer: () => void;
  onScrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenCustomizer, onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Agency Team', id: 'team' },
    { label: 'About', id: 'about' },
    { label: 'AI SEO Audit', id: 'audit' },
    { label: 'ROI Calculator', id: 'calculator' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cleanPhone = config.phone.replace(/[^0-9+]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hi%20${encodeURIComponent(config.name)},%20I%20am%20interested%20in%20your%20digital%20marketing%20services!`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-slate-800/90 py-3'
          : 'bg-slate-950/80 backdrop-blur-sm py-4 border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Name */}
          <div
            onClick={() => onScrollToSection('hero')}
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
          >
            <div className="relative">
              <img
                src={ZNEXUSTECH_LOGO}
                alt={config.brandName}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl object-contain bg-white p-0.5 shadow-md border border-orange-500/30 group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-900"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  {config.brandName}
                </span>
                <span className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-orange-500/30">
                  PRO
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">
                {config.name} • Growth Consultant
              </p>
            </div>
          </div>

          {/* Top Navigation Menu */}
          <nav className="hidden xl:flex items-center space-x-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/90 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onScrollToSection(item.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons (Right) */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Live Portfolio Customizer Toggle */}
            <button
              onClick={onOpenCustomizer}
              className="flex items-center space-x-1 px-2.5 py-1.5 text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-all"
              title="Customize Name & Info"
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Edit Content</span>
            </button>

            {/* Direct WhatsApp button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-emerald-500/20" />
              <span>WhatsApp</span>
            </a>

            {/* Book Strategy Call Button */}
            <button
              onClick={() => onScrollToSection('contact')}
              className="flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-400 via-amber-400 to-pink-400 hover:from-orange-300 hover:to-pink-300 rounded-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all transform active:scale-95"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Call</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={onOpenCustomizer}
              className="p-2 text-amber-400 bg-amber-500/10 rounded-lg border border-amber-500/30 sm:hidden"
              title="Customize"
            >
              <Edit3 className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onScrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 border border-orange-500/30'
                        : 'text-slate-200 hover:bg-slate-800/80'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-3 border-t border-slate-800/80 flex flex-col space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp ({config.phone})</span>
                </a>

                <button
                  onClick={() => {
                    onOpenCustomizer();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-xl"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Customize Portfolio Live</span>
                </button>

                <button
                  onClick={() => {
                    onScrollToSection('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Strategy Session</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

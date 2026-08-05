import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { AiAuditToolSection } from './components/AiAuditToolSection';
import { TechStackCertifications } from './components/TechStackCertifications';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { ContactBookingSection } from './components/ContactBookingSection';
import { Footer } from './components/Footer';
import { LiveCustomizerModal } from './components/LiveCustomizerModal';

import { defaultPortfolioConfig } from './data/portfolioData';
import { PortfolioConfig } from './types';

export default function App() {
  const [config, setConfig] = useState<PortfolioConfig>(() => {
    const saved = localStorage.getItem('znexustech_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultPortfolioConfig;
      }
    }
    return defaultPortfolioConfig;
  });

  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledWebsiteUrl, setPrefilledWebsiteUrl] = useState('');

  const handleSaveConfig = (updated: PortfolioConfig) => {
    setConfig(updated);
    localStorage.setItem('znexustech_config', JSON.stringify(updated));
  };

  const handleResetConfig = () => {
    setConfig(defaultPortfolioConfig);
    localStorage.removeItem('znexustech_config');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    scrollToSection('contact');
  };

  const handleSelectCaseStudy = (caseTitle: string) => {
    setPrefilledService(`Inquiry based on case study: ${caseTitle}`);
    scrollToSection('contact');
  };

  const handleScheduleCallFromAudit = (websiteUrl: string) => {
    setPrefilledWebsiteUrl(websiteUrl);
    setPrefilledService('1-on-1 Walkthrough of AI SEO & Ads Audit');
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky Header */}
      <Navbar
        config={config}
        onOpenCustomizer={() => setCustomizerOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          config={config}
          onScrollToSection={scrollToSection}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />

        {/* Services & Capabilities */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* Case Studies & Featured Portfolio Works */}
        <CaseStudiesSection
          onSelectCaseStudy={handleSelectCaseStudy}
        />

        {/* Agency Team Section */}
        <TeamSection
          onSelectMemberService={handleSelectService}
        />

        {/* About Zakia Tabassum & ZNEXUSTECH Agency */}
        <AboutSection
          config={config}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />

        {/* Gemini AI Website SEO Audit Tool */}
        <AiAuditToolSection
          onScheduleCall={handleScheduleCallFromAudit}
        />

        {/* Interactive ROI & Revenue Lift Calculator */}
        <RoiCalculatorSection
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* Tech Stack & Official Certifications */}
        <TechStackCertifications />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Contact & Strategy Booking */}
        <ContactBookingSection
          config={config}
          prefilledService={prefilledService}
          prefilledWebsiteUrl={prefilledWebsiteUrl}
        />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onOpenCustomizer={() => setCustomizerOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Interactive Live Customizer Drawer (Dev Mode Only) */}
      {import.meta.env.DEV && (
        <LiveCustomizerModal
          isOpen={customizerOpen}
          config={config}
          onSave={handleSaveConfig}
          onReset={handleResetConfig}
          onClose={() => setCustomizerOpen(false)}
        />
      )}
    </div>
  );
}

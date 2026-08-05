import React, { useState } from 'react';
import { servicesData } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { Target, Search, ShoppingBag, BarChart3, Globe, Bot, Code2, CheckCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web-dev' | 'n8n-bot' | 'software-dev' | 'paid-ads' | 'seo' | 'cro' | 'analytics'>('all');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-orange-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-amber-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-pink-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-cyan-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-pink-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  const filteredServices = activeTab === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ZNEXUSTECH Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering & Growth Services from Scratch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Zakia Tabassum crafts custom websites from scratch, builds n8n AI chatbots & workflow automations, engineers full-stack software, and scales digital revenue.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'web-dev', label: 'Webpage Developer from Scratch' },
            { id: 'n8n-bot', label: 'n8n Chatbot Developer' },
            { id: 'software-dev', label: 'Software Developer' },
            { id: 'paid-ads', label: 'Meta & Google Paid Ads' },
            { id: 'seo', label: 'Technical SEO' },
            { id: 'cro', label: 'Shopify CRO' },
            { id: 'analytics', label: 'Server CAPI Analytics' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 text-slate-950 font-extrabold shadow-lg shadow-orange-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-900 rounded-2xl border border-slate-800 hover:border-orange-500/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Metric Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:scale-110 transition-transform">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {service.impactMetric}
                  </span>
                </div>

                {/* Service Title & Short Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <ul className="mt-5 space-y-2.5 border-t border-slate-800/80 pt-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedServiceDetail(service)}
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Read Strategy Breakdown
                </button>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="flex items-center space-x-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Request Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedServiceDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 relative shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                    {renderIcon(selectedServiceDetail.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedServiceDetail.title}</h3>
                    <p className="text-xs text-orange-400 font-medium">{selectedServiceDetail.impactMetric}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedServiceDetail(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg text-lg"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>{selectedServiceDetail.fullDesc}</p>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">Key Execution Deliverables</h4>
                  <ul className="space-y-2 text-xs">
                    {selectedServiceDetail.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedServiceDetail(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 rounded-xl hover:bg-slate-700"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedServiceDetail.title;
                    setSelectedServiceDetail(null);
                    onSelectService(title);
                  }}
                  className="px-5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl"
                >
                  Get Custom Proposal
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

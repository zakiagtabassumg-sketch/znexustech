import React from 'react';
import { techStackData, certificationsData } from '../data/portfolioData';
import { Award, Layers, CheckCircle2, ShieldCheck, Sparkles, Cpu } from 'lucide-react';

export const TechStackCertifications: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Enterprise Stack & Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Tools, Technologies & Official Marketing Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Zakia Tabassum leverages industry-standard analytics platforms, paid media managers, and technical SEO software to ensure maximum accuracy and campaign profitability.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {techStackData.map((tech, idx) => (
            <div
              key={idx}
              className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all shadow-md group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  {tech.category}
                </span>
                <span className="text-xs font-black text-emerald-400">{tech.level}</span>
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h3>

              {/* Progress bar */}
              <div className="w-full bg-slate-900 h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-1000"
                  style={{ width: tech.level }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800">
            <Award className="w-6 h-6 text-orange-400" />
            <div>
              <h3 className="text-lg font-bold text-white">Official Industry Certifications</h3>
              <p className="text-xs text-slate-400">Verified credentials issued by Google, Meta, Shopify, and HubSpot</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-start space-x-3"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white leading-snug">{cert.name}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{cert.issuer} • {cert.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { caseStudiesData } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { Trophy, TrendingUp, CheckCircle, ArrowUpRight, Quote, ShieldCheck, ArrowRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (title: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'paid-ads' | 'seo'>('all');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const filteredCases = activeFilter === 'all'
    ? caseStudiesData
    : caseStudiesData.filter(c => c.category === activeFilter);

  return (
    <section id="case-studies" className="py-20 bg-slate-900 text-white relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Verified Campaign Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Client Case Studies & Verified Growth Trajectories
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Real revenue metrics, organic keyword search dominance, and high-ROAS ad performance engineered by Zakia Tabassum & ZNEXUSTECH.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-2 mb-10">
          {[
            { id: 'all', label: 'All Case Studies' },
            { id: 'paid-ads', label: 'Meta & Google Ads Scaling' },
            { id: 'seo', label: 'Technical SEO Growth' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 hover:border-cyan-500/40 transition-all shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {cs.industry}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">• {cs.client}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white leading-tight hover:text-cyan-400 transition-colors">
                    {cs.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cs.summary}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-900 p-3 rounded-xl border border-slate-800/80">
                        <div className="text-[10px] text-slate-400 font-medium truncate">{m.label}</div>
                        <div className="text-lg font-black text-emerald-400 tracking-tight mt-0.5">{m.value}</div>
                        <div className="text-[10px] text-cyan-400 font-semibold">{m.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial snippet if available */}
                  {cs.clientQuote && (
                    <div className="p-3.5 bg-slate-900/60 rounded-xl border-l-2 border-orange-400 text-xs italic text-slate-300 flex items-start space-x-2">
                      <Quote className="w-4 h-4 text-orange-400 flex-shrink-0 not-italic mt-0.5" />
                      <div>
                        <span>"{cs.clientQuote.quote}"</span>
                        <div className="not-italic text-[10px] font-bold text-slate-400 mt-1">
                          — {cs.clientQuote.author}, {cs.clientQuote.role}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex items-center space-x-4">
                    <button
                      onClick={() => setActiveModalCase(cs)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-md transition transform active:scale-95"
                    >
                      <span>Read Strategy Breakdown</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-950" />
                    </button>

                    <button
                      onClick={() => onSelectCaseStudy(cs.title)}
                      className="text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      Get Similar Results →
                    </button>
                  </div>
                </div>

                {/* Right Recharts Trajectory Graph Column */}
                <div className="lg:col-span-5 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                    <span className="flex items-center space-x-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>Revenue Growth Curve</span>
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Verified Data
                    </span>
                  </div>

                  <div className="h-48 w-full pt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={cs.chartData}>
                        <defs>
                          <linearGradient id={`grad-${cs.id}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="month" stroke="#64748b" fontSize={10} tickLine={false} />
                        <YAxis stroke="#64748b" fontSize={9} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#020617', borderColor: '#334155', borderRadius: '10px', fontSize: '11px' }}
                          formatter={(val: any) => [`$${Number(val).toLocaleString()}`, 'Sales']}
                        />
                        <Area type="monotone" dataKey="after" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill={`url(#grad-${cs.id})`} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Breakdown */}
        {activeModalCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 my-8 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{activeModalCase.industry}</span>
                  <h3 className="text-xl font-extrabold text-white mt-1">{activeModalCase.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModalCase(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Grid of Results */}
              <div className="grid grid-cols-3 gap-3">
                {activeModalCase.metrics.map((m, i) => (
                  <div key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400">{m.label}</div>
                    <div className="text-base sm:text-lg font-black text-emerald-400">{m.value}</div>
                    <div className="text-[10px] text-cyan-400">{m.change}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-orange-400">The Challenge</h4>
                  <p className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">{activeModalCase.challenge}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">Strategy Executed by Zakia Tabassum</h4>
                  <ul className="space-y-2 text-xs">
                    {activeModalCase.strategy.map((st, i) => (
                      <li key={i} className="flex items-start space-x-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-emerald-400">Final Client Outcome</h4>
                  <p className="bg-slate-950 p-3.5 rounded-xl border border-emerald-500/20 text-xs text-emerald-200">{activeModalCase.results}</p>
                </div>
              </div>

              <div className="pt-2 flex justify-end space-x-3 border-t border-slate-800">
                <button
                  onClick={() => setActiveModalCase(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 rounded-xl"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalCase.title;
                    setActiveModalCase(null);
                    onSelectCaseStudy(title);
                  }}
                  className="px-5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl"
                >
                  Book Strategy Session Like This
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

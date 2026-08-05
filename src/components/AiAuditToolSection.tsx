import React, { useState } from 'react';
import { AuditResult } from '../types';
import { Sparkles, Search, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Zap, ShieldCheck, Download, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AiAuditToolSectionProps {
  onScheduleCall: (websiteUrl: string) => void;
}

export const AiAuditToolSection: React.FC<AiAuditToolSectionProps> = ({ onScheduleCall }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [businessType, setBusinessType] = useState('E-Commerce');
  const [targetKeywords, setTargetKeywords] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('Scale ROAS & Revenue');
  
  const [isLoading, setIsLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim()) return;

    setIsLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          websiteUrl: websiteUrl.trim(),
          businessType,
          targetKeywords: targetKeywords.trim(),
          primaryGoal
        })
      });

      if (!response.ok) {
        throw new Error('Failed to run audit');
      }

      const data: AuditResult = await response.json();
      setAuditResult(data);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch (err: any) {
      setErrorMsg(err?.message || 'Could not complete audit. Please check website URL.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="audit" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Powered by Gemini AI Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Instant AI Website SEO & Paid Campaign Audit
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Enter your website URL below to run an instant deep analysis. My custom AI engine evaluates your technical SEO, schema architecture, Core Web Vitals, and Meta ad scalability in seconds.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="max-w-3xl mx-auto bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
          <form onSubmit={handleRunAudit} className="space-y-4">
            
            {/* Website URL Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Website URL <span className="text-orange-400">*</span>
              </label>
              <div className="relative">
                <Search className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="https://yourbrandstore.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white font-medium focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Grid 3-col for Sector, Keywords, Goal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Business Niche</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="E-Commerce / Shopify">E-Commerce / Shopify</option>
                  <option value="B2B Services / SaaS">B2B Services / SaaS</option>
                  <option value="Local Business & Lead Gen">Local Business & Lead Gen</option>
                  <option value="Content & Agency">Content & Media Agency</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Target Keywords (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. organic skincare, custom audio"
                  value={targetKeywords}
                  onChange={(e) => setTargetKeywords(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Goal</label>
                <select
                  value={primaryGoal}
                  onChange={(e) => setPrimaryGoal(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="Scale ROAS & Revenue">Scale ROAS & Ad Revenue</option>
                  <option value="Increase Organic Traffic">Increase Organic Traffic #1</option>
                  <option value="Fix Page Speed & CWV">Fix Page Speed & Core Web Vitals</option>
                  <option value="Server CAPI Tracking Setup">Server-Side CAPI Setup</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 font-bold text-slate-950 bg-gradient-to-r from-orange-400 via-amber-400 to-pink-400 hover:from-orange-300 hover:to-pink-300 rounded-xl shadow-lg shadow-orange-500/20 transition transform active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Scanning Technical SEO & Ad Readiness...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Generate Free AI Audit Report</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {errorMsg && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Audit Results View */}
        {auditResult && (
          <div className="max-w-4xl mx-auto mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl animate-fade-in">
            
            {/* Header Score & Executive Summary */}
            <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-slate-800">
              {/* Score Gauge */}
              <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-slate-950 border-4 border-orange-500/40 shadow-inner flex-shrink-0">
                <div className="text-center">
                  <span className="text-3xl font-black text-white">{auditResult.overallScore}</span>
                  <span className="text-xs text-slate-400 font-bold block">/100</span>
                </div>
              </div>

              <div className="space-y-2 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {auditResult.estimatedRoasBoost}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {auditResult.estimatedTrafficGrowth}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">AI Executive Strategy Report</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {auditResult.summary}
                </p>
              </div>
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Category 1: Technical SEO */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Technical SEO Architecture</span>
                  <span className="text-xs font-extrabold text-orange-400">{auditResult.categories.technicalSeo.score}/100</span>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  {auditResult.categories.technicalSeo.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 2: On-Page Content */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">On-Page Keyword Optimization</span>
                  <span className="text-xs font-extrabold text-cyan-400">{auditResult.categories.onPageContent.score}/100</span>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  {auditResult.categories.onPageContent.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 3: Paid Ads Scalability */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Meta & Google Ads Readiness</span>
                  <span className="text-xs font-extrabold text-emerald-400">{auditResult.categories.paidAdsPotential.score}/100</span>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  {auditResult.categories.paidAdsPotential.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 4: Page Speed */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Core Web Vitals & Speed</span>
                  <span className="text-xs font-extrabold text-pink-400">{auditResult.categories.pageSpeed.score}/100</span>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  {auditResult.categories.pageSpeed.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Action Plan */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Recommended Priority Action Plan</h4>
              <div className="space-y-2">
                {auditResult.actionPlan.map((step) => (
                  <div key={step.step} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-start space-x-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-white">{step.title}</span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${step.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>
                          {step.priority} Priority
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-cyan-500/10 p-5 rounded-xl border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">Want Zakia Tabassum to execute this action plan for you?</h4>
                <p className="text-xs text-slate-300">Book a 15-minute 1-on-1 strategy call. We will review your ad setup live.</p>
              </div>

              <button
                onClick={() => onScheduleCall(websiteUrl)}
                className="flex items-center space-x-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl flex-shrink-0"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book Walkthrough Call</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

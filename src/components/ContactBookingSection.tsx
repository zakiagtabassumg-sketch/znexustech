import React, { useState, useEffect } from 'react';
import { PortfolioConfig } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Calendar, RefreshCw, Sparkles, Clock, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactBookingSectionProps {
  config: PortfolioConfig;
  prefilledService?: string;
  prefilledWebsiteUrl?: string;
}

export const ContactBookingSection: React.FC<ContactBookingSectionProps> = ({
  config,
  prefilledService = '',
  prefilledWebsiteUrl = ''
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Meta & Google Ads Performance Scaling');
  const [budget, setBudget] = useState('$3,000 - $10,000 / month');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setServiceNeeded(prefilledService);
    }
    if (prefilledWebsiteUrl) {
      setWebsiteUrl(prefilledWebsiteUrl);
    }
  }, [prefilledService, prefilledWebsiteUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceNeeded,
          budget,
          websiteUrl,
          message
        })
      });

      const data = await res.json();
      setSubmittedResponse(data.message || 'Strategy request received!');
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.7 } });
    } catch (err) {
      setSubmittedResponse(`Thank you, ${name}! Your strategy session request has been queued. Zakia Tabassum will reply to ${email} within 12 hours.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Book 1-on-1 Growth Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let's Scale Your Business Revenue Together
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Have questions or ready to audit your ad account and SEO? Fill out the form below or reach out directly to Zakia Tabassum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Details & WhatsApp */}
          <div className="lg:col-span-5 bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-8 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                Direct Contact & Office Hours
              </h3>

              {/* Email */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-orange-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                  <a href={`mailto:${config.email}`} className="text-sm font-bold text-white hover:text-orange-400 transition-colors">
                    {config.email}
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Phone / WhatsApp</div>
                  <a href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                    {config.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-bold text-white">{config.location}</div>
                </div>
              </div>

              {/* WORK HOURS (GST) Card */}
              <div className="p-4 bg-slate-950/90 rounded-xl border border-orange-500/20 space-y-3 shadow-inner">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-orange-400 uppercase tracking-wider">
                  <span className="text-orange-400 text-sm">✦</span>
                  <span>WORK HOURS (GST)</span>
                </div>
                
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-medium">Monday - Friday</span>
                    <span className="font-bold text-white tracking-wide">09:00 AM - 06:00 PM</span>
                  </div>

                  <div className="border-b border-slate-800/80" />

                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-medium">Saturday - Sunday</span>
                    <span className="font-semibold text-orange-400">Consultation Only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Chat Button */}
            <a
              href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20Zakia%20Tabassum!%20I%20visited%20your%20ZNEXUSTECH%20portfolio%20and%20would%20like%20to%20discuss%20scaling%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-3 px-4 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-950" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            {submittedResponse ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">Strategy Request Received!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">{submittedResponse}</p>
                <button
                  onClick={() => setSubmittedResponse(null)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                  Request Strategy Proposal
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@yourbrand.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp</label>
                    <input
                      type="text"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Website URL</label>
                    <input
                      type="text"
                      placeholder="https://yourstore.com"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Service Required</label>
                    <select
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                    >
                      <option value="Webpage Developer from Scratch">Webpage Developer from Scratch</option>
                      <option value="n8n Chatbot & Automation Developer">n8n Chatbot & Automation Developer</option>
                      <option value="Custom Software & Full-Stack Developer">Custom Software & Full-Stack Developer</option>
                      <option value="Meta & Google Ads Performance Scaling">Meta & Google Ads Performance</option>
                      <option value="Technical SEO & Organic Revenue Growth">Technical SEO & Rank #1</option>
                      <option value="Shopify Conversion Rate Optimization (CRO)">Shopify CRO & Funnels</option>
                      <option value="Server-side Meta CAPI & Analytics Setup">Server-Side CAPI Setup</option>
                      <option value="Full E-Commerce Growth Retainer">Full Growth & Dev Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Estimated Monthly Budget</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                    >
                      <option value="$1,500 - $3,000 / month">$1,500 - $3,000 / month</option>
                      <option value="$3,000 - $10,000 / month">$3,000 - $10,000 / month</option>
                      <option value="$10,000+ / month">$10,000+ / month</option>
                      <option value="One-Time Audit & Strategy Setup">One-Time Audit & Setup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details & Goals</label>
                  <textarea
                    rows={4}
                    placeholder="Tell Zakia about your current monthly ad spend, main growth bottlenecks, or specific SEO goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 font-bold text-slate-950 bg-gradient-to-r from-orange-400 via-amber-400 to-pink-400 hover:from-orange-300 hover:to-pink-300 rounded-xl shadow-lg shadow-orange-500/20 transition transform active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Transmitting Strategy Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Submit Growth Strategy Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

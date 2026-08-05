import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { TrendingUp, DollarSign, Calculator, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RoiCalculatorSectionProps {
  onScrollToContact: () => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onScrollToContact }) => {
  const [adSpend, setAdSpend] = useState<number>(10000);
  const [currentRoas, setCurrentRoas] = useState<number>(1.8);
  const [targetRoasMultiplier, setTargetRoasMultiplier] = useState<number>(3.8);
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(25000);
  const [aov, setAov] = useState<number>(85);
  const [conversionRate, setConversionRate] = useState<number>(1.5);

  // Calculations
  const currentAdRevenue = adSpend * currentRoas;
  const currentOrganicOrders = (monthlyTraffic * (conversionRate / 100));
  const currentOrganicRevenue = currentOrganicOrders * aov;
  const currentTotalRevenue = currentAdRevenue + currentOrganicRevenue;

  // Optimized metrics with ZNEXUSTECH Strategy
  const optimizedAdRevenue = adSpend * targetRoasMultiplier;
  const optimizedConversionRate = Math.min(conversionRate * 1.35, 6.0); // 35% CRO Lift
  const optimizedOrganicTraffic = monthlyTraffic * 1.6; // +60% Technical SEO traffic lift
  const optimizedOrganicRevenue = (optimizedOrganicTraffic * (optimizedConversionRate / 100)) * aov;
  const optimizedTotalRevenue = optimizedAdRevenue + optimizedOrganicRevenue;

  const netMonthlyLift = optimizedTotalRevenue - currentTotalRevenue;
  const netAnnualLift = netMonthlyLift * 12;

  const chartData = [
    {
      name: 'Ad Revenue ($)',
      Current: Math.round(currentAdRevenue),
      Optimized: Math.round(optimizedAdRevenue),
    },
    {
      name: 'Organic Sales ($)',
      Current: Math.round(currentOrganicRevenue),
      Optimized: Math.round(optimizedOrganicRevenue),
    },
    {
      name: 'Total Monthly ($)',
      Current: Math.round(currentTotalRevenue),
      Optimized: Math.round(optimizedTotalRevenue),
    },
  ];

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onScrollToContact();
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900 border-y border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI & Growth Predictor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Business Revenue Potential with ZNEXUSTECH
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Adjust your current marketing numbers below to see the projected revenue lift from Meta & Google Ads optimization, technical SEO, and conversion rate engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-3">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span>Current Marketing Inputs</span>
            </h3>

            {/* Slider 1: Monthly Ad Spend */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Monthly Ad Spend ($)</span>
                <span className="text-orange-400 font-bold">${adSpend.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full accent-orange-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>$1,000</span>
                <span>$50,000</span>
                <span>$100,000+</span>
              </div>
            </div>

            {/* Slider 2: Current ROAS */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Current ROAS</span>
                <span className="text-amber-400 font-bold">{currentRoas.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="3.0"
                step="0.1"
                value={currentRoas}
                onChange={(e) => setCurrentRoas(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>1.0x (Break-even)</span>
                <span>2.0x</span>
                <span>3.0x</span>
              </div>
            </div>

            {/* Slider 3: Target ROAS Multiplier */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>ZNEXUSTECH Target ROAS Goal</span>
                <span className="text-emerald-400 font-bold">{targetRoasMultiplier.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="2.5"
                max="6.0"
                step="0.1"
                value={targetRoasMultiplier}
                onChange={(e) => setTargetRoasMultiplier(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>2.5x</span>
                <span>3.8x (Avg Client)</span>
                <span>6.0x (Peak)</span>
              </div>
            </div>

            {/* Grid 2-col for Traffic & Conversion Rate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Monthly Website Traffic
                </label>
                <input
                  type="number"
                  value={monthlyTraffic}
                  onChange={(e) => setMonthlyTraffic(Math.max(1000, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs font-semibold text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Average Order Value ($)
                </label>
                <input
                  type="number"
                  value={aov}
                  onChange={(e) => setAov(Math.max(10, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs font-semibold text-white focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-start space-x-2">
              <Zap className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
              <span>
                Calculations account for Meta CAPI server tracking accuracy (+15% attribution recovery), technical SEO traffic growth (+60%), and conversion rate optimizations (+35%).
              </span>
            </div>
          </div>

          {/* Results & Visual Chart Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Projected Output Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-950/80 to-slate-950 p-5 rounded-2xl border border-emerald-500/30 shadow-lg">
                <div className="text-xs font-medium text-emerald-300">Projected Monthly Revenue Lift</div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight mt-1">
                  +${Math.round(netMonthlyLift).toLocaleString()}
                </div>
                <div className="text-[11px] text-emerald-500/80 mt-1 font-medium">
                  {((netMonthlyLift / (currentTotalRevenue || 1)) * 100).toFixed(0)}% Revenue Increase
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-950/80 to-slate-950 p-5 rounded-2xl border border-cyan-500/30 shadow-lg">
                <div className="text-xs font-medium text-cyan-300">Projected Annual Growth</div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 tracking-tight mt-1">
                  +${Math.round(netAnnualLift).toLocaleString()}
                </div>
                <div className="text-[11px] text-cyan-500/80 mt-1 font-medium">
                  Annualized Growth Potential
                </div>
              </div>
            </div>

            {/* Recharts Comparison Chart */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                Monthly Revenue Comparison: Current vs ZNEXUSTECH
              </h4>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} />
                    <YAxis stroke="#64748b" fontSize={10} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                      formatter={(val: any) => [`$${Number(val).toLocaleString()}`, '']}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar dataKey="Current" fill="#475569" radius={[6, 6, 0, 0]} name="Current Revenue" />
                    <Bar dataKey="Optimized" fill="#10b981" radius={[6, 6, 0, 0]} name="ZNEXUSTECH Revenue" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="flex items-center space-x-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Target ROAS: {targetRoasMultiplier}x</span>
                </span>
                <span className="text-slate-600">•</span>
                <span>Optimized Conversion Rate: {optimizedConversionRate.toFixed(2)}%</span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-cyan-500/10 p-5 rounded-2xl border border-orange-500/30 text-center space-y-3">
              <h4 className="text-sm font-bold text-white">Ready to capture this +${Math.round(netMonthlyLift).toLocaleString()}/mo revenue lift?</h4>
              <p className="text-xs text-slate-300">
                Book a 1-on-1 Strategy Session with Zakia Tabassum. We will audit your ad account and SEO setup live on Google Meet.
              </p>
              <button
                onClick={triggerCelebration}
                className="inline-flex items-center space-x-2 px-6 py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-400 via-amber-400 to-pink-400 hover:from-orange-300 hover:to-pink-300 rounded-xl shadow-lg shadow-orange-500/20 transform transition active:scale-95 cursor-pointer"
              >
                <span>Claim Your Revenue Growth Plan</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

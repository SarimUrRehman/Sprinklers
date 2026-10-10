import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Droplets, Info } from 'lucide-react';

interface QuoteEstimatorProps {
  onProceedWithEstimate: (details: {
    serviceType: string;
    lotSize: string;
    zones: number;
    estimatedRange: string;
  }) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onProceedWithEstimate }) => {
  const [lotSize, setLotSize] = useState<'compact' | 'standard' | 'large' | 'estate'>('standard');
  const [serviceType, setServiceType] = useState<string>('repair');
  const [zones, setZones] = useState<number>(4);
  const [includeSmartController, setIncludeSmartController] = useState<boolean>(true);

  // Dynamic estimate calculator
  const calculateEstimate = () => {
    let low = 0;
    let high = 0;
    let duration = '1 day';

    if (serviceType === 'install') {
      const basePerZone = 480;
      low = zones * basePerZone;
      high = zones * (basePerZone + 160);
      if (includeSmartController) {
        low += 240;
        high += 320;
      }
      duration = zones <= 4 ? '1 business day' : '2 business days';
    } else if (serviceType === 'repair') {
      low = 120 + zones * 35;
      high = 260 + zones * 65;
      duration = '2 – 3 hours';
    } else if (serviceType === 'smart') {
      low = 280;
      high = 390;
      duration = '2 hours';
    } else if (serviceType === 'drip') {
      const perZone = 220;
      low = zones * perZone;
      high = zones * (perZone + 90);
      duration = '3 – 5 hours';
    } else {
      // Tune-up
      low = 99;
      high = 149;
      duration = '1 – 1.5 hours';
    }

    return {
      range: `$${low.toLocaleString()} – $${high.toLocaleString()}`,
      duration,
      low,
      high,
    };
  };

  const estimate = calculateEstimate();

  const getServiceLabel = () => {
    switch (serviceType) {
      case 'install':
        return 'Complete Lawn Sprinkler Installation';
      case 'repair':
        return 'Sprinkler Head & Valve Repair';
      case 'smart':
        return 'Smart Wi-Fi Controller Retrofit';
      case 'drip':
        return 'Foundation & Flowerbed Drip Irrigation';
      case 'tuneup':
        return 'Seasonal 18-Point Audit & Tune-Up';
      default:
        return 'Sprinkler Service';
    }
  };

  const getLotLabel = () => {
    switch (lotSize) {
      case 'compact':
        return 'Compact / Townhome (< 3,000 sq ft)';
      case 'standard':
        return 'Standard Suburban (3,000 – 6,500 sq ft)';
      case 'large':
        return 'Large Yard (6,500 – 12,000 sq ft)';
      case 'estate':
        return 'Estate Property (12,000+ sq ft)';
    }
  };

  return (
    <section id="estimator" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Transparent Houston Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Interactive Lawn Sprinkler Cost & Zone Estimator
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Get an instant, transparent ballpark budget tailored to your yard dimensions and irrigation requirements. Final quotes confirmed on-site after hydraulic water meter testing.
          </p>
        </div>

        {/* 2-Column interactive builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Service selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                1. Select Service Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'repair', label: 'Sprinkler Repair / Leak Fix' },
                  { id: 'install', label: 'New Complete Installation' },
                  { id: 'smart', label: 'Smart Wi-Fi Controller Retrofit' },
                  { id: 'drip', label: 'Foundation & Bed Drip Lines' },
                  { id: 'tuneup', label: '18-Point Tune-Up & Audit' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceType(s.id)}
                    className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                      serviceType === s.id
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-700'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Lot size */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Property / Lawn Footprint
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'compact', label: 'Under 3K sq ft', desc: 'Compact' },
                  { id: 'standard', label: '3K – 6.5K sq ft', desc: 'Suburban' },
                  { id: 'large', label: '6.5K – 12K sq ft', desc: 'Large' },
                  { id: 'estate', label: '12K+ sq ft', desc: 'Estate' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLotSize(item.id as any)}
                    className={`p-3 text-center rounded-xl border text-xs font-semibold transition-all ${
                      lotSize === item.id
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-700'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <p className="font-bold text-slate-900">{item.desc}</p>
                    <span className="text-[11px] text-slate-500">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Zone slider */}
            <div className="space-y-3 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  3. Approximate Zones / Valves
                </label>
                <span className="text-base font-bold text-emerald-800 font-mono tabular-nums">
                  {zones} {zones === 1 ? 'Zone' : 'Zones'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={zones}
                onChange={(e) => setZones(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-700 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>1 Zone</span>
                <span>4 Zones (Typical)</span>
                <span>8 Zones</span>
                <span>12 Zones (Large)</span>
              </div>
            </div>

            {/* Smart add-on checkbox */}
            {serviceType === 'install' && (
              <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={includeSmartController}
                  onChange={(e) => setIncludeSmartController(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-600 accent-emerald-700"
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-900">Include Smart Wi-Fi Controller + Weather Sensor</span>
                  <p className="text-slate-500">Qualifies for municipal water conservation rebates</p>
                </div>
              </label>
            )}
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Estimated Ballpark
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight mt-1">
                {estimate.range}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Includes commercial-grade components and labor warranty.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Selected Service:</span>
                <span className="font-semibold text-slate-100 text-right truncate max-w-[200px]">{getServiceLabel()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Property Footprint:</span>
                <span className="font-semibold text-slate-100 text-right">{getLotLabel()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Configured Zones:</span>
                <span className="font-semibold text-slate-100 font-mono">{zones} Zones</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Estimated Duration:</span>
                <span className="font-semibold text-slate-100">{estimate.duration}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Warranty Coverage:</span>
                <span className="font-semibold text-emerald-400">1-Year 100% Guarantee</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-2.5 text-xs text-slate-300">
              <Droplets className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Systems installed or tuned by Clean Water Sprinklers conserve up to <strong>35% more water</strong> compared to outdated spray heads.
              </span>
            </div>

            <button
              onClick={() =>
                onProceedWithEstimate({
                  serviceType: getServiceLabel(),
                  lotSize: getLotLabel(),
                  zones,
                  estimatedRange: estimate.range,
                })
              }
              className="w-full py-3.5 px-4 text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <span>Lock In This Estimate & Book Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

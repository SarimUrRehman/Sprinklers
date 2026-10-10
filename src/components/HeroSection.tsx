import React from 'react';
import { Phone, Calendar, Star, ShieldCheck, MapPin, Clock, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroSectionProps {
  onOpenBooking: (service?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Proposition & CTA */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker - Unboxed typography with typographic separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>{BUSINESS_INFO.rating} Rating ({BUSINESS_INFO.reviewCount} Verified Reviews)</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Houston, TX 77038</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">Licensed Irrigation Contractor</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance">
              Houston's Trusted Lawn Sprinkler System Contractor
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              From broken pop-up sprayers and stubborn valve leaks to complete custom-zoned installations and smart Wi-Fi upgrades. We keep your Houston turf lush while conserving every drop of water.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenBooking('Sprinkler Repair & Head Replacement')}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all duration-150 flex items-center justify-center gap-2.5 active:scale-[0.99] whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule an Inspection</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span className="tabular-nums">Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Guarantee Micro-Copy */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                1-Year Workmanship Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                Same-Day Emergency Leak Service
              </span>
              <span className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-emerald-600" />
                Commercial Rain Bird & Hunter Parts
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group">
              <img
                src="/src/assets/images/hero_sprinkler_lawn_1791664116220.jpg"
                alt="Clean Water Sprinklers high performance lawn irrigation in Houston Texas"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* Fallback pattern if image is hidden */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none" />

              {/* Inset badge info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200/80 shadow-md">
                <div className="flex items-center justify-between gap-3 text-xs">
                  <div>
                    <p className="font-bold text-slate-900">North Houston Dispatch Center</p>
                    <p className="text-slate-500 truncate">{BUSINESS_INFO.street}, {BUSINESS_INFO.cityStateZip}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-emerald-700 font-bold tabular-nums">4.7 / 5.0 ★</span>
                    <p className="text-[10px] text-slate-400">26 Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width 4-Column Credential Strip below Hero */}
      <div className="border-t border-slate-200 bg-slate-50/75">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">Response Speed</div>
              <div className="text-base font-bold text-slate-900">Same-Day Priority</div>
              <p className="text-xs text-slate-500">For urgent leaks & valve failures in 77038</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">Customer Score</div>
              <div className="text-base font-bold text-slate-900 tabular-nums">4.7 Out of 5.0</div>
              <p className="text-xs text-slate-500">26 verified local client evaluations</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">Quality Standards</div>
              <div className="text-base font-bold text-slate-900">TCEQ Compliant</div>
              <p className="text-xs text-slate-500">Licensed Texas backflow & irrigation</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">Water Conservation</div>
              <div className="text-base font-bold text-slate-900 tabular-nums">Up to 40% Savings</div>
              <p className="text-xs text-slate-500">Smart weather-predictive Wi-Fi schedules</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Droplets, Phone, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950">
                <Droplets className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Professional lawn sprinkler system contractor based in Houston, Texas. Delivering precision water management, commercial repairs, and smart controller retrofits.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{BUSINESS_INFO.license}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Irrigation Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Sprinkler Head & Valve Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Complete System Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Smart Wi-Fi Controller Upgrades
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Texas Certified Backflow Testing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Foundation & Flowerbed Drip Lines
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Interactive Utilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Homeowner Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#diagnostic" className="hover:text-emerald-400 transition-colors">
                  Sprinkler Diagnostic Tool
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-emerald-400 transition-colors">
                  Zone & Cost Estimator
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">
                  Verified Client Reviews (4.7 ★)
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-emerald-400 transition-colors">
                  Houston Coverage & ZIP Checker
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  Schedule Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Contact & Headquarters */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Business Information
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.street}
                  <br />
                  {BUSINESS_INFO.cityStateZip}, United States
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-white hover:text-emerald-400 transition-colors font-mono tabular-nums font-semibold"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Houston, Texas</span>
            <span aria-hidden="true">·</span>
            <span>Harris County</span>
            <span aria-hidden="true">·</span>
            <span>Lawn Sprinkler System Contractor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

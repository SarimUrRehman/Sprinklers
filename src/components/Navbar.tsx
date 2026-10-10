import React, { useState } from 'react';
import { Droplets, Phone, Menu, X, Calendar, MapPin, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'System Troubleshooter', href: '#diagnostic' },
    { label: 'Quote Calculator', href: '#estimator' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Area', href: '#service-area' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Strict Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Zone - Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Droplets className="w-5 h-5 text-white stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight font-extrabold text-slate-900 tracking-tight">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[11px] font-medium text-emerald-700 tracking-normal hidden sm:block">
              Houston Irrigation Specialists
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0"
            title="Call Clean Water Sprinklers"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span className="tabular-nums">{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            Request Service
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-lg"
            aria-label="Call Clean Water Sprinklers"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              {BUSINESS_INFO.rating} / 5.0 ({BUSINESS_INFO.reviewCount} Reviews)
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Houston, TX 77038
            </span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book Online Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

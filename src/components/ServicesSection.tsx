import React from 'react';
import { SERVICES } from '../data/businessData';
import { Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Professional Irrigation Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Complete Lawn Sprinkler Services Engineered for Houston Conditions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Houston's intense summer heat and shifting gumbo clay soil require robust pipe design and balanced zone pressure. We provide end-to-end irrigation diagnostics, repairs, and installations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const editorialIndex = `0${index + 1}.`;
            const isFeatured = index === 0 || index === 2;

            return (
              <div
                key={service.id}
                className={`rounded-2xl border border-slate-200 bg-white flex flex-col justify-between overflow-hidden hover:border-slate-300 transition-all duration-200 shadow-sm ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1 ring-1 ring-slate-900/5' : ''
                }`}
              >
                {/* Visual Asset if present */}
                {service.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-mono font-bold text-slate-800 border border-slate-200/80">
                      {editorialIndex}
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {!service.image && (
                      <span className="font-mono text-xs font-bold text-emerald-700">
                        {editorialIndex}
                      </span>
                    )}

                    <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs font-medium text-emerald-800">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="pt-2 space-y-2 border-t border-slate-100">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing indicator & action button */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {service.estimatedTime}
                      </span>
                      <span className="font-semibold text-slate-700">{service.startingPrice}</span>
                    </div>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full py-2.5 px-3.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-emerald-700 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-1.5 active:scale-[0.99]"
                    >
                      <span>Select for Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand guarantee banner */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                100% Workmanship Warranty on All Texas Installations & Repairs
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                We use high-grade Rain Bird and Hunter components with commercial-spec schedule 40 PVC fittings. If a repaired valve or head fails, we return and fix it.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('Warranty & System Inspection')}
            className="shrink-0 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
          >
            Inquire About Warranty
          </button>
        </div>
      </div>
    </section>
  );
};

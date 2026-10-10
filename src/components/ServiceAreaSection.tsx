import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICE_ZIP_CODES } from '../data/businessData';
import { MapPin, Phone, Clock, Search, CheckCircle, Navigation, ExternalLink } from 'lucide-react';

export const ServiceAreaSection: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    zip?: string;
    area?: string;
    status?: string;
  } | null>(null);

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    const matched = SERVICE_ZIP_CODES.find((item) => item.zip === cleanZip);
    if (matched) {
      setSearchResult({
        found: true,
        zip: matched.zip,
        area: matched.area,
        status: matched.status,
      });
    } else {
      setSearchResult({
        found: false,
        zip: cleanZip,
      });
    }
  };

  const encodedAddress = encodeURIComponent(BUSINESS_INFO.address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="service-area" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Local Houston Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Locally Operated on Moonglow Dr, Serving Greater Houston
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Headquartered at 12007 Moonglow Dr, Houston, TX 77038. Our rapid service trucks are stocked with commercial PVC valves, rotor heads, and electronic diagnostic gear for swift arrival across North Harris County.
          </p>
        </div>

        {/* 2-Column Location & Interactive Coverage Checker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Base Details & Map Visual */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Physical Headquarters</h3>
                  <p className="text-sm text-slate-700 font-medium">{BUSINESS_INFO.street}</p>
                  <p className="text-sm text-slate-500">{BUSINESS_INFO.cityStateZip}, United States</p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 mt-2"
                  >
                    <span>View Location on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Direct Telephone Line</h3>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-sm font-semibold text-emerald-800 hover:underline tabular-nums"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct dispatcher line · Emergency leak bypass support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Operating Schedule</h3>
                  <p className="text-xs sm:text-sm text-slate-700">{BUSINESS_INFO.hours}</p>
                  <p className="text-xs text-emerald-700 font-medium mt-0.5">
                    Same-day appointments available for early callers
                  </p>
                </div>
              </div>
            </div>

            {/* Stylized Houston Map Visual */}
            <div className="relative rounded-xl border border-slate-200 overflow-hidden bg-slate-900 text-white p-6 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                  Service Radius Radar
                </span>
                <span className="text-slate-400">Harris & South Montgomery Co.</span>
              </div>

              {/* Houston Schematic Graphic */}
              <div className="relative h-44 rounded-lg bg-slate-950 flex items-center justify-center overflow-hidden border border-slate-800">
                {/* Radial rings representing distance from Moonglow Dr */}
                <div className="absolute w-72 h-72 rounded-full border border-emerald-900/30" />
                <div className="absolute w-52 h-52 rounded-full border border-emerald-800/40" />
                <div className="absolute w-32 h-32 rounded-full border border-emerald-500/30" />
                <div className="absolute w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/60 animate-pulse" />

                {/* Center Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-lg" />
                  <span className="text-[11px] font-bold text-white bg-slate-900/90 px-2 py-0.5 rounded mt-1 border border-slate-700">
                    12007 Moonglow Dr
                  </span>
                </div>

                {/* Surrounding Nodes */}
                <div className="absolute top-4 left-6 text-[10px] text-slate-400 font-mono">
                  The Woodlands
                </div>
                <div className="absolute top-6 right-8 text-[10px] text-slate-400 font-mono">
                  Spring / FM 1960
                </div>
                <div className="absolute bottom-6 left-8 text-[10px] text-slate-400 font-mono">
                  Cypress / Willowbrook
                </div>
                <div className="absolute bottom-4 right-10 text-[10px] text-slate-400 font-mono">
                  Aldine / Greenspoint
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300 pt-2">
                <span>Avg. arrival in 77038 zone: <strong>30–45 mins</strong></span>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-emerald-400 font-bold hover:underline"
                >
                  Call for Dispatch
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive ZIP Code Checker & Common Zones */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900">
                Check Service Availability for Your ZIP Code
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Enter your 5-digit Houston ZIP code to verify immediate scheduling priority.
              </p>
            </div>

            {/* ZIP Input Form */}
            <form onSubmit={handleCheckZip} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  maxLength={5}
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 5-digit ZIP (e.g. 77038)"
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 font-mono"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Verify</span>
              </button>
            </form>

            {/* Result Box */}
            {searchResult && (
              <div
                className={`p-4 rounded-xl border text-xs sm:text-sm transition-all animate-in fade-in ${
                  searchResult.found
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                {searchResult.found ? (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-bold text-emerald-900">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>ZIP {searchResult.zip} is in Our Primary Service Zone!</span>
                    </div>
                    <p className="text-xs text-emerald-800">
                      Area: <strong>{searchResult.area}</strong> · Dispatch Status:{' '}
                      <strong className="underline">{searchResult.status}</strong>
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900">
                      ZIP {searchResult.zip} is in our extended Houston coverage!
                    </p>
                    <p className="text-xs text-slate-600">
                      We regularly dispatch to neighboring areas across Harris and Montgomery counties. Call us directly at{' '}
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-emerald-700 underline">
                        {BUSINESS_INFO.phoneDisplay}
                      </a>{' '}
                      to confirm your specific street address.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Quick list of primary service zones */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Primary Houston Service Neighborhoods
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {SERVICE_ZIP_CODES.slice(0, 8).map((item) => (
                  <button
                    key={item.zip}
                    type="button"
                    onClick={() => {
                      setZipInput(item.zip);
                      setSearchResult({
                        found: true,
                        zip: item.zip,
                        area: item.area,
                        status: item.status,
                      });
                    }}
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/50 text-left transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="font-mono font-bold text-slate-900 group-hover:text-emerald-800">
                        {item.zip}
                      </span>
                      <p className="text-[11px] text-slate-500 truncate max-w-[150px]">{item.area}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {item.status.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

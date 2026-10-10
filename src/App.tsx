/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { DiagnosticTool } from './components/DiagnosticTool';
import { QuoteEstimator } from './components/QuoteEstimator';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FaqSection } from './components/FaqSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from './data/businessData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [prefilledNotes, setPrefilledNotes] = useState<string | undefined>(undefined);

  const handleOpenBooking = (service?: string, notes?: string) => {
    setPrefilledService(service || 'Sprinkler Repair & Head Replacement');
    setPrefilledNotes(notes || '');
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    handleOpenBooking(serviceName, `Requesting inspection and estimate for ${serviceName}.`);
  };

  const handleRequestFix = (issueTitle: string) => {
    handleOpenBooking('Sprinkler Repair & Head Replacement', `Diagnostic finding: ${issueTitle}`);
  };

  const handleProceedWithEstimate = (details: {
    serviceType: string;
    lotSize: string;
    zones: number;
    estimatedRange: string;
  }) => {
    const notes = `Online Quote Estimator configuration:
- Service: ${details.serviceType}
- Lot size: ${details.lotSize}
- Zones: ${details.zones}
- Ballpark budget: ${details.estimatedRange}`;
    handleOpenBooking(details.serviceType, notes);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Proposition and Key Metrics */}
        <HeroSection onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* Core Services Bento */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Interactive Sprinkler Troubleshooter */}
        <DiagnosticTool onRequestFix={handleRequestFix} />

        {/* Interactive Quote & Zone Cost Estimator */}
        <QuoteEstimator onProceedWithEstimate={handleProceedWithEstimate} />

        {/* Verified Customer Reviews (4.7 / 5.0 with 26 reviews) */}
        <ReviewsSection />

        {/* Local Houston Service Coverage & Moonglow Dr Location */}
        <ServiceAreaSection />

        {/* Houston Irrigation FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Booking & Service Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefilledService={prefilledService}
        prefilledNotes={prefilledNotes}
      />

      {/* Mobile Floating Action Bar (respects 15% mobile sticky cap) */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-30 flex items-center gap-2 p-1.5 bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-700/80">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors tabular-nums"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Dispatch</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-2.5 px-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-emerald-700" />
          <span>Book Service</span>
        </button>
      </div>
    </div>
  );
}

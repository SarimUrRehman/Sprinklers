import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2, Clock, MapPin, AlertCircle, Wrench } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  prefilledNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
  prefilledNotes,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('Sprinkler Repair & Head Replacement');
  const [timeWindow, setTimeWindow] = useState('Morning (7:00 AM – 11:00 AM)');
  const [urgency, setUrgency] = useState<'Standard' | 'Urgent Same-Day'>('Standard');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
    if (prefilledNotes) {
      setNotes(prefilledNotes);
    }
  }, [prefilledService, prefilledNotes, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `CWS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(id);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="py-4 space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Ticket Ref #{bookingId}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Service Request Confirmed
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>! Clean Water Sprinklers dispatch has received your request for <strong>{address || 'your Houston property'}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-900 text-right">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Requested Window:</span>
                <span className="font-semibold text-slate-900 text-right">{timeWindow}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Number:</span>
                <span className="font-semibold text-slate-900 font-mono">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Dispatch Base:</span>
                <span className="font-semibold text-slate-900">12007 Moonglow Dr, Houston</span>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/60 text-xs text-emerald-900 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>A technician will call 30 minutes prior to on-site arrival.</span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="px-5 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-xs sm:text-sm font-semibold transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <Wrench className="w-3.5 h-3.5" />
                <span>Clean Water Sprinklers · Houston Dispatch</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Schedule Service Inspection
              </h3>
              <p className="text-xs text-slate-500">
                Fill in your property details below or call{' '}
                <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-emerald-700 underline">
                  {BUSINESS_INFO.phoneDisplay}
                </a>{' '}
                for immediate emergency leaks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Davis"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. (281) 555-0192"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-mono text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Houston Street & ZIP <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 12000 Moonglow Dr, 77038"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Service Required</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-xs sm:text-sm"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Emergency Underground Leak Repair">Emergency Underground Leak Repair</option>
                  <option value="Warranty & General Inspection">Warranty & General Inspection</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Preferred Time Window</label>
                <select
                  value={timeWindow}
                  onChange={(e) => setTimeWindow(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-xs sm:text-sm"
                >
                  <option>Morning (7:00 AM – 11:00 AM)</option>
                  <option>Midday (11:00 AM – 3:00 PM)</option>
                  <option>Late Afternoon (3:00 PM – 6:30 PM)</option>
                  <option>Urgent ASAP Dispatch</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Describe the Sprinkler Issue or Goals (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention head location, leaking valves, controller symptoms, or lawn size..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm"
              />
            </div>

            {/* Urgency toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-semibold text-slate-800">Priority Same-Day Dispatch Needed?</span>
              </div>
              <div className="flex items-center gap-1">
                {(['Standard', 'Urgent Same-Day'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setUrgency(mode)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                      urgency === mode
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2.5 font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors text-xs sm:text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all duration-150 text-xs sm:text-sm active:scale-[0.99]"
              >
                Submit Service Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

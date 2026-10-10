import React, { useState } from 'react';
import { INITIAL_REVIEWS, ReviewItem, BUSINESS_INFO } from '../data/businessData';
import { Star, CheckCircle, Plus, ThumbsUp, MapPin } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [filterService, setFilterService] = useState<string>('all');
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);

  // New review form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newService, setNewService] = useState('Sprinkler Repair & Head Replacement');
  const [newComment, setNewComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      location: newLocation || 'Houston, TX',
      rating: newRating,
      date: 'Just now',
      service: newService,
      comment: newComment,
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowReviewModal(false);
      setNewAuthor('');
      setNewLocation('');
      setNewComment('');
    }, 1500);
  };

  const filteredReviews = reviews.filter((r) => {
    if (filterService === 'all') return true;
    return r.service.toLowerCase().includes(filterService.toLowerCase());
  });

  return (
    <section id="reviews" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Verified Client Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Houston Homeowners Rate Us 4.7 Out of 5.0
            </h2>
            <p className="text-base text-slate-600">
              Trusted by over 26 verified property owners across Houston, Spring, Aldine, and Harris County.
            </p>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4 text-emerald-600" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Rating Scorecard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {/* Big Score */}
          <div className="md:col-span-4 flex flex-col justify-center items-center md:items-start md:border-r md:border-slate-100 md:pr-8 text-center md:text-left space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-extrabold text-slate-900 font-mono tracking-tight tabular-nums">
                {BUSINESS_INFO.rating}
              </span>
              <span className="text-xl text-slate-400 font-bold">/ 5.0</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i <= 4
                      ? 'fill-amber-500 text-amber-500'
                      : 'fill-amber-500/70 text-amber-500'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-slate-500">
              Based on <strong className="text-slate-800">{BUSINESS_INFO.reviewCount} total customer reviews</strong>
            </p>
            <span className="text-xs font-semibold text-emerald-700">
              96% Recommendation Rate
            </span>
          </div>

          {/* Breakdown bars */}
          <div className="md:col-span-8 flex flex-col justify-center space-y-2 md:pl-4">
            {[
              { stars: 5, pct: 85, count: 22 },
              { stars: 4, pct: 12, count: 3 },
              { stars: 3, pct: 3, count: 1 },
              { stars: 2, pct: 0, count: 0 },
              { stars: 1, pct: 0, count: 0 },
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-xs">
                <span className="w-12 text-slate-600 font-medium shrink-0 flex items-center gap-1">
                  {row.stars} <Star className="w-3 h-3 fill-slate-400 text-slate-400 inline" />
                </span>
                <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="w-8 text-right font-mono text-slate-500 tabular-nums">
                  {row.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 mr-2">Filter reviews:</span>
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'repair', label: 'Repairs' },
            { id: 'controller', label: 'Smart Controllers' },
            { id: 'installation', label: 'Installations' },
            { id: 'backflow', label: 'Backflow Testing' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterService(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filterService === tab.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                <p className="text-xs font-semibold text-emerald-800">
                  {rev.service}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">{rev.author}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                {rev.verified && (
                  <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Review Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-lg font-bold text-slate-900">Share Your Experience</h3>
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-semibold p-1"
                >
                  ✕
                </button>
              </div>

              {submittedMessage ? (
                <div className="p-6 text-center space-y-2">
                  <ThumbsUp className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-slate-900">Thank You!</h4>
                  <p className="text-xs text-slate-600">Your review has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4 text-xs">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Your Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setNewRating(s)}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              s <= newRating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-200'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-mono font-bold text-slate-700 ml-2">
                        {newRating} / 5 Stars
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jason Miller"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Neighborhood / City</label>
                    <input
                      type="text"
                      placeholder="e.g. North Houston, Spring, Aldine"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Service Received</label>
                    <select
                      value={newService}
                      onChange={(e) => setNewService(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                    >
                      <option>Sprinkler Repair & Head Replacement</option>
                      <option>Complete Lawn Sprinkler Installation</option>
                      <option>Smart Wi-Fi Controller Retrofits</option>
                      <option>Texas Backflow Testing</option>
                      <option>Drip Irrigation & Foundation Watering</option>
                      <option>Seasonal System Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Your Feedback</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe the technician's punctuality, repair quality, and pricing..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowReviewModal(false)}
                      className="px-4 py-2 font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm"
                    >
                      Publish Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

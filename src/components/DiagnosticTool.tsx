import React, { useState } from 'react';
import { DIAGNOSTIC_ISSUES, DiagnosticIssue } from '../data/businessData';
import { AlertTriangle, CheckCircle2, Wrench, ArrowRight, HelpCircle } from 'lucide-react';

interface DiagnosticToolProps {
  onRequestFix: (issueTitle: string) => void;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({ onRequestFix }) => {
  const [selectedIssueId, setSelectedIssueId] = useState<string>(DIAGNOSTIC_ISSUES[0].id);

  const activeIssue = DIAGNOSTIC_ISSUES.find((item) => item.id === selectedIssueId) || DIAGNOSTIC_ISSUES[0];

  const getSeverityStyle = (severity: DiagnosticIssue['severity']) => {
    switch (severity) {
      case 'Urgent':
        return 'text-red-700 bg-red-50 border-red-200';
      case 'Moderate':
        return 'text-amber-800 bg-amber-50 border-amber-200';
      case 'Routine':
        return 'text-emerald-800 bg-emerald-50 border-emerald-200';
      default:
        return 'text-slate-700 bg-slate-100 border-slate-200';
    }
  };

  return (
    <section id="diagnostic" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Interactive Troubleshooting Guide
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Sprinkler System Diagnostic Tool
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Not sure what’s wrong with your irrigation? Select the symptom you are observing in your Houston yard for an instant diagnosis, safety guidance, and estimated repair timeframe.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Symptom selector */}
          <div className="lg:col-span-5 space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Step 1: Choose Your Symptom
            </label>
            <div className="space-y-2.5">
              {DIAGNOSTIC_ISSUES.map((issue) => {
                const isSelected = issue.id === selectedIssueId;
                return (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssueId(issue.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-white border-emerald-700 shadow-sm ring-1 ring-emerald-700'
                        : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : 'border-slate-300 text-transparent'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <p className={`text-xs sm:text-sm font-semibold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                        {issue.symptom}
                      </p>
                      <span className="text-[11px] text-slate-500">
                        {issue.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Diagnosis & Action card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-slate-400">Diagnosis Report</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {activeIssue.title}
                </h3>
              </div>
              <div
                className={`px-3 py-1 rounded-md border text-xs font-semibold flex items-center gap-1.5 ${getSeverityStyle(
                  activeIssue.severity
                )}`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Severity: {activeIssue.severity}</span>
              </div>
            </div>

            {/* Root Causes */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                Likely Root Causes
              </h4>
              <ul className="space-y-2">
                {activeIssue.likelyCauses.map((cause, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Protocol */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-emerald-700" />
                Recommended Action & Next Steps:
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeIssue.recommendedAction}
              </p>
            </div>

            {/* Estimated Fix Time & Direct Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-100">
              <div className="text-xs text-slate-500">
                <span>Typical on-site resolution: </span>
                <strong className="text-slate-800 font-semibold">{activeIssue.estimatedFixTime}</strong>
              </div>

              <button
                onClick={() => onRequestFix(`Fix: ${activeIssue.title}`)}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.99]"
              >
                <span>Dispatch Technician for This Issue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

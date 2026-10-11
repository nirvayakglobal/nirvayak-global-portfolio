import React from 'react';
import { CheckCircle2, Zap, Cpu, ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="w-full bg-[#f8fafc] border-b border-slate-200 py-6">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider text-center md:text-left font-semibold">
            Trusted Modernization Paradigms for Industry Innovators
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-800">
            <div className="flex items-center gap-2 hover:text-[#004ac6] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#004ac6]" /> Cloud Native
            </div>
            <div className="flex items-center gap-2 hover:text-[#2563eb] transition-colors">
              <Zap className="w-4 h-4 text-[#2563eb]" /> Event-Driven
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Cpu className="w-4 h-4 text-slate-600" /> Neural AI
            </div>
            <div className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> SOC2 Engineered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

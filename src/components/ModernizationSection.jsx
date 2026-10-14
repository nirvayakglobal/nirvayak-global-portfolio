import React from 'react';
import { ArrowRight, Workflow, CheckCircle2 } from 'lucide-react';

export default function ModernizationSection() {
  const capabilities = [
    'Legacy Application Assessment',
    'Software Architecture Modernization',
    'UI/UX Redesign',
    'API Development & System Integration',
    'Database Modernization',
    'Cloud Migration',
    'Performance & Security Improvements'
  ];

  return (
    <section className="w-full bg-[#f8fafc] border-y border-slate-200 py-14 lg:py-20" id="modernization">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#004ac6] font-semibold">
              Modernization Engineering
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk']">
              Your Legacy Systems. Reimagined for the Future.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Outdated technology should not limit your business potential. We help organizations transform legacy applications into modern digital platforms that are easier to maintain, integrate, secure, and scale.
            </p>

            {/* 7 Core Capabilities Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {capabilities.map((cap, idx) => (
                <span 
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#0f172a] text-xs font-semibold shadow-2xs hover:border-blue-400 hover:text-[#004ac6] transition-colors"
                >
                  {cap}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#2563eb] text-white font-semibold text-base shadow-sm hover:bg-[#004ac6] active:scale-[0.98] transition-all"
              >
                <span>Modernize Your Software</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Before & After Comparison Showcase */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Before Card */}
            <div className="rounded-2xl bg-white border border-red-200 p-6 shadow-xs relative overflow-hidden transition-all hover:border-red-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-red-700 flex items-center gap-2 uppercase font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Before: Monolithic & Legacy
                </span>
                <span className="font-mono text-xs text-slate-400">v1.2-legacy-silo</span>
              </div>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-center gap-2.5">
                  <span className="text-red-500 font-bold">×</span>
                  High maintenance overhead & slow patch cycles
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-red-500 font-bold">×</span>
                  Tightly coupled code preventing rapid feature rollouts
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-red-500 font-bold">×</span>
                  Unpredictable on-prem hardware constraints & failure risks
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-red-500 font-bold">×</span>
                  Compounding technical debt and security compliance gaps
                </li>
              </ul>
            </div>

            {/* Transformation Flow Indicator */}
            <div className="flex justify-center -my-2 relative z-10">
              <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-md animate-pulse">
                <Workflow className="w-5 h-5" />
              </div>
            </div>

            {/* After Card */}
            <div className="rounded-2xl bg-white border border-emerald-300 p-6 shadow-sm relative overflow-hidden transition-all hover:border-emerald-400 hover:shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-700 flex items-center gap-2 uppercase font-bold tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  After: Modern Cloud-Native Platform
                </span>
                <span className="font-mono text-xs text-emerald-700 font-semibold">v3.0-decoupled</span>
              </div>
              <ul className="space-y-3 text-[#0f172a] text-sm">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Decoupled microservices, event queues, and containerized scale
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Automated continuous integration & deployment pipelines (CI/CD)
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Elastic auto-scaling infrastructure with 99.99% availability
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  10x faster deployment frequency with zero-downtime releases
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


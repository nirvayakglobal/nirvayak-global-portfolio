import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Cloud, Cpu, Boxes, ShieldCheck, Activity } from 'lucide-react';

export default function Hero() {
  const [latency, setLatency] = useState(11);
  const [activeRequests, setActiveRequests] = useState(1420);

  // Subtle live telemetry pulse for enterprise credibility
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => Math.floor(9 + Math.random() * 5));
      setActiveRequests(prev => Math.floor(1380 + Math.random() * 80));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white border-b border-slate-200 py-20 lg:py-28 overflow-hidden" id="hero">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#f8fafc] border border-slate-200 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#004ac6] animate-pulse" />
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-mono">
                Nirvayak Global — Transforming Technology. Accelerating Growth.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a] leading-[1.08] font-['Hanken_Grotesk']">
              Build Smarter.<br />
              <span className="bg-gradient-to-r from-[#004ac6] via-[#2563eb] to-[#0284c7] bg-clip-text text-transparent">
                Modernize Faster.
              </span><br />
              Grow Further.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
              We modernize legacy software, build next-generation digital products, and deliver intelligent AI and cloud solutions that help your business scale safely.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#2563eb] text-white font-semibold text-base shadow-sm hover:bg-[#004ac6] active:scale-[0.98] transition-all"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a 
                href="#services-overview" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-semibold text-base shadow-xs hover:bg-slate-50 active:scale-[0.98] transition-all"
              >
                <span>Explore Our Services</span>
                <ChevronDown className="w-4 h-4 animate-bounce text-slate-500" />
              </a>
            </div>

            {/* Trust Sub-metrics */}
            <div className="pt-6 grid grid-cols-3 gap-6 text-slate-600 border-t border-slate-200 w-full">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#004ac6] block font-mono">100%</span>
                <span className="text-xs sm:text-sm text-slate-500">Production-Ready Architecture</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#2563eb] block font-mono">&lt;{latency}ms</span>
                <span className="text-xs sm:text-sm text-slate-500">Optimized Core Latency</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] block font-mono">Zero</span>
                <span className="text-xs sm:text-sm text-slate-500">Vendor Lock-in Philosophy</span>
              </div>
            </div>

          </div>

          {/* Interactive Architecture Graphic with Live Micro-Interactions */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full rounded-2xl bg-white border border-slate-200 p-6 shadow-xl overflow-hidden hover:border-blue-300 transition-colors">
              
              {/* Top Status Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="font-mono text-slate-500 ml-1">sys_telemetry.nirvayak</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-semibold text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  LIVE CLUSTER
                </span>
              </div>

              {/* Vector Circuit Visual with Animated Circuit Signals */}
              <div className="relative w-full h-64 bg-[#f8fafc] rounded-xl border border-slate-200 p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-blue-500/5 pointer-events-none" />
                
                {/* SVG Nodes & Active Mesh Network */}
                <svg className="absolute inset-0 w-full h-full text-slate-300 pointer-events-none" fill="none" viewBox="0 0 400 240">
                  {/* Static background paths */}
                  <path className="text-slate-200" d="M 40 180 C 120 180, 140 80, 220 80 S 300 140, 360 60" stroke="currentColor" strokeWidth="1.5" />
                  <path className="text-slate-200" d="M 40 60 C 140 60, 180 180, 280 160 S 340 120, 370 180" stroke="currentColor" strokeWidth="1.5" />
                  
                  {/* Dynamic pulse wire streams */}
                  <path className="text-blue-500 animate-wire-stream" d="M 40 180 C 120 180, 140 80, 220 80 S 300 140, 360 60" stroke="currentColor" strokeWidth="2" />
                  <path className="text-sky-500 animate-wire-stream-reverse" d="M 40 60 C 140 60, 180 180, 280 160 S 340 120, 370 180" stroke="currentColor" strokeWidth="2" />
                  
                  <circle className="fill-[#004ac6]" cx="40" cy="180" r="5" />
                  <circle className="fill-[#2563eb]" cx="220" cy="80" r="5" />
                  <circle className="fill-[#0284c7]" cx="360" cy="60" r="5" />
                  <circle className="fill-[#004ac6]" cx="280" cy="160" r="5" />
                  <circle className="fill-slate-400" cx="40" cy="60" r="4" />
                  <circle className="fill-emerald-500" cx="370" cy="180" r="5" />
                </svg>

                {/* Node Cards inside Canvas */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 shadow-xs flex items-center gap-2 hover:border-blue-400 transition-colors">
                    <Cloud className="w-4 h-4 text-[#004ac6]" />
                    <span className="font-mono text-xs text-slate-800 font-semibold">us-east.mesh</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 shadow-xs flex items-center gap-2 hover:border-blue-400 transition-colors">
                    <Cpu className="w-4 h-4 text-[#2563eb]" />
                    <span className="font-mono text-xs text-slate-800 font-semibold">inference.v4</span>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between items-end">
                  <div className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 shadow-xs flex items-center gap-2 hover:border-blue-400 transition-colors">
                    <Boxes className="w-4 h-4 text-slate-600" />
                    <span className="font-mono text-xs text-slate-800 font-semibold">microservices</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 shadow-xs flex items-center gap-2 hover:border-blue-400 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="font-mono text-xs text-slate-800 font-semibold">zero-trust</span>
                  </div>
                </div>
              </div>

              {/* Architecture Monitor Telemetry Cards */}
              <div className="grid grid-cols-3 gap-2.5 mt-4 text-xs">
                <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-slate-500">UPTIME</span>
                  <span className="font-mono font-bold text-emerald-600 text-sm mt-0.5">99.99%</span>
                </div>
                <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-slate-500">REQ / SEC</span>
                  <span className="font-mono font-bold text-[#004ac6] text-sm mt-0.5">{activeRequests}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-slate-500">LATENCY</span>
                  <span className="font-mono font-bold text-slate-900 text-sm mt-0.5">&lt;{latency}ms</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

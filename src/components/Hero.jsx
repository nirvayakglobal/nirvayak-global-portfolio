import React, { useState } from 'react';
import { 
  ArrowRight, 
  Code2, 
  Cpu, 
  Cloud, 
  Smartphone, 
  PenTool, 
  Zap, 
  ShieldCheck, 
  Users2,
  TrendingUp,
  ChevronRight,
  Globe2,
  Workflow
} from 'lucide-react';

export default function Hero() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleHighlight = (name) => {
    setActiveItem((prev) => (prev === name ? null : name));
  };

  return (
    <section className="relative w-full bg-[#f8fbff] border-b border-slate-200/80 pt-8 pb-14 lg:pt-14 lg:pb-20 overflow-hidden" id="hero">
      {/* 3D-like Soft Atmospheric Glows */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-blue-300/25 via-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/15 via-indigo-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200 text-[#004ac6] text-xs font-bold tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#004ac6]" />
              <span>YOUR TECHNOLOGY PARTNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold tracking-tight text-[#0f172a] leading-[1.12] font-['Hanken_Grotesk']">
              <span className="block">We Build Digital.</span>
              <span className="text-[#1d63ed] block whitespace-nowrap">
                We Engineer What's Next.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              From AI-powered innovation to modern software, web, and cloud solutions, we help businesses modernize, scale, and move forward with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1d63ed] text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:bg-[#004ac6] hover:shadow-blue-600/30 active:scale-[0.98] transition-all duration-200"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a 
                href="#services-overview" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-base shadow-2xs hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] transition-all"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Trust Line */}
            <div className="pt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 tracking-wide">
              <span>Strategy</span>
              <span className="text-blue-500 font-bold">•</span>
              <span>Engineering</span>
              <span className="text-blue-500 font-bold">•</span>
              <span>Long-term Partnership</span>
            </div>

            {/* Value Props Row (Fast Delivery, Reliable Partner, Flexible Models) */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200/90 w-full mt-1">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d63ed] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0f172a] block">Fast Delivery</span>
                  <span className="text-[11px] text-slate-500">Agile & transparent process</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d63ed] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0f172a] block">Reliable Partner</span>
                  <span className="text-[11px] text-slate-500">Long-term tech support</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d63ed] flex items-center justify-center shrink-0">
                  <Users2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0f172a] block">Flexible Growth</span>
                  <span className="text-[11px] text-slate-500">Tailored engagement models</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Device Digital Mockup with Floating Service Pills */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex items-center justify-center w-full">
            
            {/* Visual Stage Container with 3D Podium Gradient */}
            <div className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[560px] h-[340px] xs:h-[370px] sm:h-[460px] lg:h-[480px] flex items-center justify-center mx-auto">
              
              {/* Soft 3D Floating Orbs (Visible on mobile too with glowing effect) */}
              <div className="absolute top-4 sm:top-10 right-1 sm:right-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-blue-500/40 via-sky-300 to-white shadow-md shadow-blue-400/30 blur-[0.5px] animate-pulse pointer-events-none" />
              <div className="absolute bottom-10 sm:bottom-16 left-2 sm:left-6 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-sky-400/50 via-blue-200 to-white shadow-md shadow-sky-300/30 blur-[0.5px] pointer-events-none" />
              <div className="absolute -top-2 sm:-top-4 left-1/3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-400/25 blur-xs pointer-events-none" />

              {/* 3D Circular Pedestal / Podium Base */}
              <div className="absolute bottom-2 w-[250px] xs:w-[280px] sm:w-[420px] md:w-[480px] h-8 xs:h-10 sm:h-14 bg-gradient-to-b from-blue-100/90 to-blue-200/60 rounded-[100%] shadow-xl shadow-blue-900/10 border-t border-white/80" />
              <div className="absolute bottom-4 xs:bottom-5 sm:bottom-6 w-[210px] xs:w-[240px] sm:w-[360px] md:w-[420px] h-6 xs:h-8 sm:h-10 bg-gradient-to-b from-white/95 to-blue-50/70 rounded-[100%] shadow-inner border border-white" />

              {/* Laptop Showcase Mockup */}
              <div 
                className={`relative z-10 w-[230px] xs:w-[260px] sm:w-[360px] md:w-[400px] bg-slate-900 rounded-t-xl sm:rounded-t-2xl p-1.5 xs:p-2 sm:p-2.5 pb-0 shadow-2xl border mb-5 sm:mb-8 transition-all duration-300 cursor-pointer ${
                  activeItem === 'laptop' 
                    ? 'scale-[1.02] -translate-y-1.5 shadow-blue-900/50 border-blue-400' 
                    : 'shadow-blue-950/25 border-slate-700/60 hover:scale-[1.01] hover:-translate-y-1'
                }`}
                onMouseEnter={() => setActiveItem('laptop')}
                onMouseLeave={() => setActiveItem((prev) => (prev === 'laptop' ? null : prev))}
                onClick={() => toggleHighlight('laptop')}
              >
                {/* Laptop Camera dot */}
                <div className="flex justify-center mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                </div>
                {/* Laptop Screen Content */}
                <div className="w-full bg-white rounded-t-lg p-2 xs:p-2.5 sm:p-4 text-left overflow-hidden border border-slate-200/80">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 xs:pb-2 mb-1.5 xs:mb-2 sm:mb-3">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-400" />
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400" />
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400" />
                      <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-slate-800 ml-1 sm:ml-1.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-sm bg-[#1d63ed]" />
                        Nirvayak Portal
                      </span>
                    </div>
                    <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-medium text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-200">
                      Live
                    </span>
                  </div>

                  {/* Mini Dashboard Content */}
                  <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-slate-900 block leading-tight">Build What's Next</span>
                        <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-slate-500">Scalable digital products</span>
                      </div>
                      <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#1d63ed] text-white text-[8px] xs:text-[9px] sm:text-[10px] font-semibold shadow-xs">
                        Get Started
                      </span>
                    </div>

                    {/* Chart Graphic Wave */}
                    <div className="w-full h-10 xs:h-12 sm:h-16 bg-gradient-to-t from-blue-50/70 to-transparent rounded-lg border border-blue-100/80 p-1 sm:p-2 flex items-end">
                      <svg className="w-full h-8 xs:h-10 sm:h-12 text-[#1d63ed]" viewBox="0 0 200 60" fill="none" preserveAspectRatio="none">
                        <path d="M0 45 Q 40 30, 80 40 T 140 20 T 200 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M0 45 Q 40 30, 80 40 T 140 20 T 200 10 L 200 60 L 0 60 Z" fill="currentColor" fillOpacity="0.08" />
                      </svg>
                    </div>

                    {/* Metric Cards Row */}
                    <div className="grid grid-cols-2 gap-1 xs:gap-1.5 sm:gap-2 pt-0.5">
                      <div className="p-1 xs:p-1.5 sm:p-2 rounded-md bg-slate-50 border border-slate-200/80">
                        <span className="text-[7px] xs:text-[8px] sm:text-[9px] text-slate-500 uppercase font-medium block">Total Users</span>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-slate-900">12.4k</span>
                          <span className="text-[7px] xs:text-[8px] sm:text-[9px] text-emerald-600 font-semibold flex items-center">
                            <TrendingUp className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-0.5" /> +12%
                          </span>
                        </div>
                      </div>
                      <div className="p-1 xs:p-1.5 sm:p-2 rounded-md bg-slate-50 border border-slate-200/80">
                        <span className="text-[7px] xs:text-[8px] sm:text-[9px] text-slate-500 uppercase font-medium block">Revenue</span>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-slate-900">$24.8k</span>
                          <span className="text-[7px] xs:text-[8px] sm:text-[9px] text-emerald-600 font-semibold flex items-center">
                            <TrendingUp className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-0.5" /> +18%
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                {/* Laptop Base Lip */}
                <div className="w-[242px] xs:w-[276px] sm:w-[380px] md:w-[420px] -ml-1.5 xs:-ml-2 sm:-ml-2.5 h-2 xs:h-2.5 sm:h-3 bg-slate-800 rounded-b-xl border-t border-slate-600 flex justify-center items-center shadow-lg">
                  <div className="w-8 xs:w-10 sm:w-12 h-1 bg-slate-600 rounded-full" />
                </div>
              </div>

              {/* Mobile Phone Mockup (Overlapping Front Left) with Real App UI */}
              <div 
                className={`absolute left-0 xs:left-1 sm:left-4 bottom-2 sm:bottom-4 z-40 w-[96px] xs:w-[110px] sm:w-[136px] md:w-[148px] bg-slate-950 rounded-xl sm:rounded-2xl p-1 xs:p-1.5 border transition-all duration-300 cursor-pointer ${
                  activeItem === 'phone'
                    ? '-translate-y-2.5 scale-105 shadow-2xl shadow-blue-600/50 border-blue-400'
                    : 'shadow-2xl shadow-blue-900/40 border-slate-700/80 hover:-translate-y-2 hover:shadow-blue-600/40 hover:scale-[1.03]'
                }`}
                onMouseEnter={() => setActiveItem('phone')}
                onMouseLeave={() => setActiveItem((prev) => (prev === 'phone' ? null : prev))}
                onClick={() => toggleHighlight('phone')}
              >
                <div className="w-full h-[175px] xs:h-[195px] sm:h-[235px] md:h-[250px] bg-white rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-2.5 flex flex-col justify-between text-left overflow-hidden border border-slate-200">
                  
                  {/* Phone Notch & Status Bar */}
                  <div>
                    <div className="flex justify-center mb-1 xs:mb-1.5">
                      <span className="w-6 xs:w-7 sm:w-8 h-1.5 sm:h-2 bg-slate-950 rounded-full" />
                    </div>
                    
                    {/* Header */}
                    <div className="flex items-center justify-between pb-1 mb-1 xs:mb-1.5 border-b border-slate-100">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-sm bg-[#1d63ed]" />
                        <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-slate-900 leading-none">Nirvayak</span>
                      </div>
                      <span className="text-[6px] xs:text-[7px] sm:text-[8px] font-semibold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded-full">
                        Live
                      </span>
                    </div>

                    {/* Stat Card 1: Revenue / Performance */}
                    <div className="p-1 xs:p-1.5 rounded-lg bg-blue-50/70 border border-blue-100 mb-1 xs:mb-1.5">
                      <span className="text-[6px] xs:text-[7px] sm:text-[8px] uppercase tracking-wider text-slate-500 font-medium block">Revenue</span>
                      <div className="flex items-baseline justify-between mt-0.5">
                        <span className="text-[9px] xs:text-[11px] sm:text-xs font-bold text-slate-900 leading-none">$24.8k</span>
                        <span className="text-[6px] xs:text-[7px] sm:text-[8px] text-emerald-600 font-semibold flex items-center">
                          <TrendingUp className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-0.5" /> +18%
                        </span>
                      </div>
                    </div>

                    {/* Mini Sparkline Chart */}
                    <div className="w-full h-7 xs:h-8 sm:h-10 bg-slate-50 rounded-md border border-slate-100 p-0.5 xs:p-1 flex items-end">
                      <svg className="w-full h-full text-[#1d63ed]" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                        <path d="M0 30 Q 25 15, 50 25 T 100 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M0 30 Q 25 15, 50 25 T 100 8 L 100 40 L 0 40 Z" fill="currentColor" fillOpacity="0.12" />
                      </svg>
                    </div>

                    {/* Stat Card 2: Users */}
                    <div className="mt-1 xs:mt-1.5 p-0.5 xs:p-1 rounded-md bg-slate-50 flex items-center justify-between text-[7px] xs:text-[8px] sm:text-[9px]">
                      <span className="text-slate-500">Users</span>
                      <span className="font-bold text-slate-900">12.4k <span className="text-emerald-600 font-semibold">(+12%)</span></span>
                    </div>
                  </div>

                  {/* App Action Button */}
                  <div className="w-full py-1 xs:py-1.5 rounded-lg bg-[#1d63ed] text-white text-[7px] xs:text-[8px] sm:text-[9px] font-bold text-center shadow-xs">
                    Get Started
                  </div>

                </div>
              </div>

              {/* Floating Service Pill 1: Web Development (Left) */}
              <div 
                className={`flex absolute top-10 sm:top-16 -left-1 xs:left-0 sm:-left-6 z-40 px-2 py-1 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border items-center gap-1.5 sm:gap-2.5 transition-all duration-300 cursor-pointer ${
                  activeItem === 'webdev'
                    ? '-translate-y-2 scale-110 shadow-2xl shadow-blue-500/30 border-blue-400 bg-white'
                    : 'border-slate-200/90 shadow-lg shadow-blue-900/10 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-300'
                }`}
                onMouseEnter={() => setActiveItem('webdev')}
                onMouseLeave={() => setActiveItem((prev) => (prev === 'webdev' ? null : prev))}
                onClick={() => toggleHighlight('webdev')}
              >
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-lg bg-[#1d63ed] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Code2 className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-slate-900 block leading-tight">Web Dev</span>
                  <span className="hidden sm:block text-[10px] text-slate-500">Fast & responsive</span>
                </div>
              </div>

              {/* Floating Service Pill 2: AI Solutions (Top Center) */}
              <div 
                className={`absolute -top-3 sm:-top-3 left-1/3 sm:left-1/3 z-40 px-2 py-1 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border flex items-center gap-1.5 sm:gap-2 transition-all duration-300 cursor-pointer ${
                  activeItem === 'ai'
                    ? '-translate-y-2 scale-110 shadow-2xl shadow-blue-500/30 border-blue-400 bg-white'
                    : 'border-slate-200/90 shadow-lg shadow-blue-900/10 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-300'
                }`}
                onMouseEnter={() => setActiveItem('ai')}
                onMouseLeave={() => setActiveItem((prev) => (prev === 'ai' ? null : prev))}
                onClick={() => toggleHighlight('ai')}
              >
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-lg bg-[#1d63ed] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Cpu className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-slate-900 block leading-tight">AI Solutions</span>
                  <span className="hidden sm:block text-[10px] text-slate-500">Smarter automation</span>
                </div>
              </div>

              {/* Floating Service Pill 3: Cloud Services (Top Right) */}
              <div 
                className={`flex absolute top-1 sm:top-2 right-1 sm:-right-4 z-40 px-2 py-1 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border items-center gap-1.5 sm:gap-2.5 transition-all duration-300 cursor-pointer ${
                  activeItem === 'cloud'
                    ? '-translate-y-2 scale-110 shadow-2xl shadow-blue-500/30 border-blue-400 bg-white'
                    : 'border-slate-200/90 shadow-lg shadow-blue-900/10 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-300'
                }`}
                onMouseEnter={() => setActiveItem('cloud')}
                onMouseLeave={() => setActiveItem((prev) => (prev === 'cloud' ? null : prev))}
                onClick={() => toggleHighlight('cloud')}
              >
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-lg bg-[#1d63ed] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Cloud className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-slate-900 block leading-tight">Cloud</span>
                  <span className="hidden sm:block text-[10px] text-slate-500">Secure. Scalable.</span>
                </div>
              </div>

              {/* Floating Service Pill 4: Mobile Apps (Right Mid) */}
              <div 
                className={`absolute top-28 xs:top-32 sm:top-44 -right-1 sm:-right-8 z-40 px-2 py-1 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border flex items-center gap-1.5 sm:gap-2 transition-all duration-300 cursor-pointer ${
                  activeItem === 'mobile'
                    ? '-translate-y-2 scale-110 shadow-2xl shadow-blue-500/30 border-blue-400 bg-white'
                    : 'border-slate-200/90 shadow-lg shadow-blue-900/10 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-300'
                }`}
                onMouseEnter={() => setActiveItem('mobile')}
                onMouseLeave={() => setActiveItem((prev) => (prev === 'mobile' ? null : prev))}
                onClick={() => toggleHighlight('mobile')}
              >
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-lg bg-[#1d63ed] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Smartphone className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-slate-900 block leading-tight">Mobile Apps</span>
                  <span className="hidden sm:block text-[10px] text-slate-500">iOS & Android</span>
                </div>
              </div>

              {/* Floating Service Pill 5: UI/UX Design (Bottom Right) */}
              <div 
                className={`flex absolute bottom-2 sm:bottom-6 right-0 sm:right-2 z-40 px-2 py-1 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border items-center gap-1.5 sm:gap-2.5 transition-all duration-300 cursor-pointer ${
                  activeItem === 'uiux'
                    ? '-translate-y-2 scale-110 shadow-2xl shadow-blue-500/30 border-blue-400 bg-white'
                    : 'border-slate-200/90 shadow-lg shadow-blue-900/10 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-300'
                }`}
                onMouseEnter={() => setActiveItem('uiux')}
                onMouseLeave={() => setActiveItem((prev) => (prev === 'uiux' ? null : prev))}
                onClick={() => toggleHighlight('uiux')}
              >
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-lg bg-[#1d63ed] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <PenTool className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-slate-900 block leading-tight">UI/UX</span>
                  <span className="hidden sm:block text-[10px] text-slate-500">Designs that users love</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Digital Ecosystem Banner: One partner. Connected solutions. */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 relative z-10">
        <div className="w-full bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-xl shadow-blue-900/5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 lg:gap-6">
          
          {/* Left Title Block */}
          <div className="flex flex-col justify-center lg:pr-6 lg:border-r border-slate-200/80 shrink-0">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#1d63ed] font-bold mb-1">
              DIGITAL ECOSYSTEM
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk'] whitespace-nowrap">
              One partner. Connected solutions.
            </h3>
          </div>

          {/* Right 4 Connected Solutions Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
            
            {/* Card 1: Web & Mobile */}
            <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all duration-200">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 border border-blue-100 text-[#1d63ed] flex items-center justify-center shrink-0">
                <Globe2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="text-left min-w-0">
                <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-tight truncate">
                  Web & Mobile
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">
                  Engaging experiences
                </span>
              </div>
            </div>

            {/* Card 2: AI Solutions */}
            <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all duration-200">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-indigo-50 border border-indigo-100 text-[#004ac6] flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="text-left min-w-0">
                <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-tight truncate">
                  AI Solutions
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">
                  Intelligent automation
                </span>
              </div>
            </div>

            {/* Card 3: Custom Software */}
            <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all duration-200">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-sky-50 border border-sky-100 text-[#2563eb] flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="text-left min-w-0">
                <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-tight truncate">
                  Custom Software
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">
                  Scalable & flexible
                </span>
              </div>
            </div>

            {/* Card 4: Cloud & Modernization */}
            <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all duration-200">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 border border-blue-100 text-[#004ac6] flex items-center justify-center shrink-0">
                <Cloud className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="text-left min-w-0">
                <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-tight truncate">
                  Cloud & Modernization
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">
                  Reliable infrastructure
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

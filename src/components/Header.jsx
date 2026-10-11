import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Header({ scrollProgress, activeSection }) {
  const navItems = [
    { label: 'Services', href: '#services-overview' },
    { label: 'Modernization', href: '#modernization' },
    { label: 'AI & Automation', href: '#ai-solutions' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Process', href: '#process' },
    { label: 'Industries', href: '#industries' },
    { label: 'Case Studies', href: '#case-studies' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/92 border-b border-slate-200/90 shadow-xs transition-all">
      {/* Scroll Progress Indicator Bar */}
      <div 
        className="h-[3px] bg-gradient-to-r from-[#004ac6] via-[#2563eb] to-[#0284c7] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Tag */}
        <a href="#" className="flex items-center gap-3 group focus:outline-hidden">
          <img 
            alt="Nirvayak Global Logo" 
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida/AEtjO1VGqMP3EBISH_3byp5v423_h6Hd5l1m5OQ3mt2IGBeQTnn0K-nfYuoUynMeIHBE4e2rCFE1TqjC3j4DeTA0tWTHwn81tPc2acrb6dtZUjbR_27OK02Tt5CpBzrBRcDQZZYsUhGBrpMHywcoCNBhDy8f_lI2VrnJ0Vmqfw1sJETo8xOyVpgBAycn_OX6ssztAs6Dnad3c6cxOQJzHbTvUuKTwkiskpCtCEeTo4nOMfrqXCjp7cJZ-xgurg" 
          />
          <div>
            <span className="text-xl font-bold tracking-tight text-[#0f172a] flex items-center gap-1.5 font-['Hanken_Grotesk']">
              Nirvayak <span className="text-[#004ac6]">Global</span>
            </span>
            <span className="hidden sm:block text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold">
              Enterprise IT Solutions & AI
            </span>
          </div>
        </a>

        {/* Quick-Jump Section Navigation Pills */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-slate-100/80 rounded-full border border-slate-200/80 text-xs font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-[#004ac6] font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-[#0f172a] hover:bg-white/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Senior Architect Led</span>
          </div>
          
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2563eb] hover:bg-[#004ac6] text-white text-sm font-semibold shadow-sm transition-all duration-200 active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

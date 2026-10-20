import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Header({ scrollProgress, activeSection }) {

  const navItems = [
    { label: 'Services', href: '#services-overview' },
    { label: 'Modernization', href: '#modernization' },
    { label: 'Why Us', href: '#why-choose-us' },
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
      
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Tag */}
        <a href="#" className="flex items-center gap-3 group focus:outline-hidden shrink-0">
          <img 
            alt="Nirvayak Global Logo" 
            className="h-11 w-auto object-contain transition-transform group-hover:scale-105" 
            src="/logo.png" 
          />
          <div>
            <span className="text-xl font-bold tracking-tight text-[#0f172a] flex items-center gap-1.5 font-['Hanken_Grotesk']">
              Nirvayak <span className="text-[#004ac6]">Global</span>
            </span>
            <span className="hidden sm:block text-[10.5px] tracking-tight text-slate-500 font-semibold font-sans">
              Transforming Technology. Accelerating Growth.
            </span>
          </div>
        </a>

        {/* Center: Quick-Jump Section Navigation Pills */}
        <div className="hidden lg:flex items-center gap-3">
          <nav className="flex items-center gap-1 p-1 bg-slate-100/80 rounded-full border border-slate-200/80 text-xs font-medium">
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
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
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

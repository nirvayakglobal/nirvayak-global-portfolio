import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8fafc] border-t border-slate-200 mt-auto">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                alt="Nirvayak Global Logo" 
                className="h-11 w-auto object-contain" 
                src="/logo.png" 
              />
              <span className="text-xl font-bold text-[#0f172a] font-['Hanken_Grotesk']">Nirvayak Global</span>
            </div>
            <p className="text-sm text-[#0f172a] font-medium max-w-sm">
              Transforming Technology. Accelerating Growth.
            </p>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Enterprise IT engineering, cloud modernization, and strategic digital transformation for global industry leaders.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0f172a] font-bold">Services</span>
            <div className="flex flex-col gap-1.5 text-xs text-slate-600">
              <a href="#services-overview" className="hover:text-[#004ac6] transition-colors">AI & Automation</a>
              <a href="#modernization" className="hover:text-[#004ac6] transition-colors">Software Modernization</a>
              <a href="#services-overview" className="hover:text-[#004ac6] transition-colors">Custom Web & Mobile Apps</a>
              <a href="#services-overview" className="hover:text-[#004ac6] transition-colors">Enterprise ERP & CRM</a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#004ac6] font-bold">Solutions</span>
            <div className="flex flex-col gap-1.5 text-xs text-slate-600">
              <a href="#modernization" className="hover:text-[#004ac6] transition-colors">Legacy Upgrades</a>
              <a href="#services-overview" className="hover:text-[#004ac6] transition-colors">Applied AI & RAG</a>
              <a href="#services-overview" className="hover:text-[#004ac6] transition-colors">Cloud & DevOps</a>
              <a href="#services-overview" className="hover:text-[#004ac6] transition-colors">SaaS Platforms</a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0f172a] font-bold">Company</span>
            <div className="flex flex-col gap-1.5 text-xs text-slate-600">
              <a href="#why-choose-us" className="hover:text-[#004ac6] transition-colors">Why Choose Nirvayak</a>
              <a href="#process" className="hover:text-[#004ac6] transition-colors">Our Process</a>
              <a href="#industries" className="hover:text-[#004ac6] transition-colors">Industries Served</a>
              <a href="#case-studies" className="hover:text-[#004ac6] transition-colors">Case Studies</a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0f172a] font-bold">Connect</span>
            <div className="flex flex-col gap-1.5 text-xs text-slate-600">
              <a href="#contact" className="hover:text-[#004ac6] transition-colors">Contact Us</a>
              <a href="mailto:info@nirvayakglobal.com" className="hover:text-[#004ac6] transition-colors">info@nirvayakglobal.com</a>
              <a href="#hero" className="hover:text-[#004ac6] transition-colors">Back to Top</a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-mono">
          <div>© {new Date().getFullYear()} Nirvayak Global Solutions Inc. All rights reserved.</div>
        </div>

      </div>
    </footer>
  );
}

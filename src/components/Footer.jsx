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
                className="h-8 w-auto object-contain" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1VGqMP3EBISH_3byp5v423_h6Hd5l1m5OQ3mt2IGBeQTnn0K-nfYuoUynMeIHBE4e2rCFE1TqjC3j4DeTA0tWTHwn81tPc2acrb6dtZUjbR_27OK02Tt5CpBzrBRcDQZZYsUhGBrpMHywcoCNBhDy8f_lI2VrnJ0Vmqfw1sJETo8xOyVpgBAycn_OX6ssztAs6Dnad3c6cxOQJzHbTvUuKTwkiskpCtCEeTo4nOMfrqXCjp7cJZ-xgurg" 
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
              <a href="#services-overview" className="hover:text-[#004ac6] transition-colors">Cloud Architecture</a>
              <a href="#services-overview" className="hover:text-[#004ac6] transition-colors">Cyber Resilience</a>
              <a href="#ai-solutions" className="hover:text-[#004ac6] transition-colors">Data & AI Engineering</a>
              <a href="#modernization" className="hover:text-[#004ac6] transition-colors">DevSecOps Pipeline</a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0f172a] font-bold">Solutions</span>
            <div className="flex flex-col gap-1.5 text-xs text-slate-600">
              <a href="#modernization" className="hover:text-[#004ac6] transition-colors">Digital Core Evolution</a>
              <a href="#capabilities" className="hover:text-[#004ac6] transition-colors">Hybrid Cloud Platform</a>
              <a href="#capabilities" className="hover:text-[#004ac6] transition-colors">Enterprise Microservices</a>
              <a href="#ai-solutions" className="hover:text-[#004ac6] transition-colors">Intelligent Automation</a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0f172a] font-bold">Company</span>
            <div className="flex flex-col gap-1.5 text-xs text-slate-600">
              <a href="#why-choose-us" className="hover:text-[#004ac6] transition-colors">About Nirvayak</a>
              <a href="#industries" className="hover:text-[#004ac6] transition-colors">Industries Served</a>
              <a href="#case-studies" className="hover:text-[#004ac6] transition-colors">Executive Insights</a>
              <a href="#contact" className="hover:text-[#004ac6] transition-colors">Leadership & Careers</a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0f172a] font-bold">Legal</span>
            <div className="flex flex-col gap-1.5 text-xs text-slate-600">
              <span className="hover:text-[#004ac6] cursor-pointer">Privacy Policy</span>
              <span className="hover:text-[#004ac6] cursor-pointer">Terms of Service</span>
              <span className="hover:text-[#004ac6] cursor-pointer">Security & Compliance</span>
              <span className="hover:text-[#004ac6] cursor-pointer">Global Offices</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-mono">
          <div>© {new Date().getFullYear()} Nirvayak Global Solutions Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>ISO/IEC 27001 Certified</span>
            <span>SOC 2 Type II Audited</span>
            <span>CMMI Level 5</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

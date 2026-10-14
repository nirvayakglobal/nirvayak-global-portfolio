import React from 'react';
import { 
  HeartPulse, 
  Landmark, 
  ShoppingBag, 
  Factory, 
  Truck, 
  GraduationCap, 
  Briefcase, 
  Cpu 
} from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    {
      icon: HeartPulse,
      color: 'text-[#004ac6]',
      name: 'Healthcare',
      desc: 'HIPAA, interoperability, EHR systems'
    },
    {
      icon: Landmark,
      color: 'text-[#2563eb]',
      name: 'FinTech & Banking',
      desc: 'PCI-DSS, payments, fraud analytics'
    },
    {
      icon: ShoppingBag,
      color: 'text-slate-600',
      name: 'Retail & E-commerce',
      desc: 'Omnichannel, high-concurrency cart'
    },
    {
      icon: Factory,
      color: 'text-[#004ac6]',
      name: 'Manufacturing',
      desc: 'IoT telemetry, predictive maintenance'
    },
    {
      icon: Truck,
      color: 'text-[#2563eb]',
      name: 'Logistics & Supply',
      desc: 'Fleet routing, inventory optimization'
    },
    {
      icon: GraduationCap,
      color: 'text-[#0284c7]',
      name: 'Education',
      desc: 'LMS platforms, personalized tutoring'
    },
    {
      icon: Briefcase,
      color: 'text-slate-600',
      name: 'Professional Services',
      desc: 'Knowledge bases, smart billing'
    },
    {
      icon: Cpu,
      color: 'text-[#004ac6]',
      name: 'SaaS & Tech',
      desc: 'Scalable MVPs, high-availability APIs'
    }
  ];

  return (
    <section className="w-full bg-[#f7f9fb] py-14 lg:py-20" id="industries">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#004ac6] font-semibold mb-2">
            Domain Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk']">
            Technology Solutions Across Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Tailored modernization and AI applications engineered for the specialized regulatory, security, and operational needs of your sector.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-400/50 hover:-translate-y-0.5 transition-all flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
                  <Icon className={`w-5 h-5 ${ind.color}`} />
                </div>
                <span className="font-semibold text-base text-[#0f172a]">{ind.name}</span>
                <span className="text-xs text-slate-500 mt-1">{ind.desc}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

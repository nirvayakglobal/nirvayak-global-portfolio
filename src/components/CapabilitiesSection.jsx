import React from 'react';
import { 
  Globe2, 
  Smartphone, 
  Boxes, 
  Building2, 
  Cloud, 
  Workflow, 
  Terminal, 
  Cpu 
} from 'lucide-react';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Boxes,
      color: 'bg-blue-50 border-blue-100 text-[#004ac6]',
      title: 'B2B SaaS Platforms',
      subtitle: 'Multi-tenant, subscription & billing architectures'
    },
    {
      icon: Building2,
      color: 'bg-indigo-50 border-indigo-100 text-[#2563eb]',
      title: 'Enterprise ERP & Portals',
      subtitle: 'Mission-critical internal operations & dashboards'
    },
    {
      icon: Smartphone,
      color: 'bg-sky-50 border-sky-100 text-[#004ac6]',
      title: 'Customer-Facing Mobile Apps',
      subtitle: 'High-retention iOS & Android applications'
    },
    {
      icon: Cpu,
      color: 'bg-blue-50 border-blue-100 text-[#004ac6]',
      title: 'AI Agents & RAG Engines',
      subtitle: 'Autonomous document analysis & context intelligence'
    },
    {
      icon: Cloud,
      color: 'bg-indigo-50 border-indigo-100 text-[#2563eb]',
      title: 'Cloud-Native Infrastructure',
      subtitle: 'Kubernetes clusters, auto-scaling & zero-trust'
    },
    {
      icon: Workflow,
      color: 'bg-slate-100 border-slate-200 text-slate-700',
      title: 'Automated Operations Systems',
      subtitle: 'Cross-department automated workflow pipelines'
    },
    {
      icon: Terminal,
      color: 'bg-sky-50 border-sky-100 text-[#004ac6]',
      title: 'High-Throughput APIs',
      subtitle: 'Resilient microservices & payment/third-party bridges'
    },
    {
      icon: Globe2,
      color: 'bg-blue-50 border-blue-100 text-[#004ac6]',
      title: 'Modern Web Platforms',
      subtitle: 'Ultra-fast Next/React customer experiences'
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] border-y border-slate-200 py-14 lg:py-20" id="capabilities">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#004ac6] font-semibold mb-2">
            Platforms We Deliver
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk']">
            Solutions Architected & Built by Nirvayak
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            From greenfield SaaS products to complex enterprise portals and AI pipelines, explore the production-grade platforms we engineer for our clients.
          </p>
        </div>

        {/* 8 Product Types Modular Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-blue-400/60 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center mb-3 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-base text-[#0f172a]">{item.title}</span>
                <span className="text-xs text-slate-500 mt-1">{item.subtitle}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

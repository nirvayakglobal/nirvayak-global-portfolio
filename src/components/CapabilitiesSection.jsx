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
      icon: Globe2,
      color: 'bg-blue-50 border-blue-100 text-[#004ac6]',
      title: 'Web Applications',
      subtitle: 'Responsive, resilient, high-speed'
    },
    {
      icon: Smartphone,
      color: 'bg-sky-50 border-sky-100 text-[#2563eb]',
      title: 'Android & iOS Mobile',
      subtitle: 'Native & cross-platform UX'
    },
    {
      icon: Boxes,
      color: 'bg-slate-100 border-slate-200 text-slate-700',
      title: 'SaaS Products',
      subtitle: 'Multi-tenant, subscription architectures'
    },
    {
      icon: Building2,
      color: 'bg-blue-50 border-blue-100 text-[#004ac6]',
      title: 'Enterprise Software',
      subtitle: 'Mission-critical business systems'
    },
    {
      icon: Cloud,
      color: 'bg-indigo-50 border-indigo-100 text-[#2563eb]',
      title: 'Cloud-Native Platforms',
      subtitle: 'Kubernetes, microservices & serverless'
    },
    {
      icon: Workflow,
      color: 'bg-slate-100 border-slate-200 text-slate-700',
      title: 'Business Automation',
      subtitle: 'Friction-free workflow tools'
    },
    {
      icon: Terminal,
      color: 'bg-sky-50 border-sky-100 text-[#004ac6]',
      title: 'API Integrations',
      subtitle: 'Robust third-party connectivity'
    },
    {
      icon: Cpu,
      color: 'bg-blue-50 border-blue-100 text-[#004ac6]',
      title: 'AI-Powered Products',
      subtitle: 'Smart predictive capabilities'
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] border-y border-slate-200 py-24 lg:py-32" id="capabilities">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#004ac6] font-semibold mb-2">
            Full-Lifecycle Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk']">
            From Idea to Scalable Digital Product
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We partner with you across the full spectrum of software product delivery: Discovery & Planning, Architecture, High-velocity Development, Quality Assurance, Cloud Deployment, and Ongoing Evolution.
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

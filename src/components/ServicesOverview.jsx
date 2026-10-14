import React, { useState } from 'react';
import { Cpu, Workflow, Terminal, Globe2, Smartphone, Cloud, ArrowRight, Building2, Database } from 'lucide-react';

export default function ServicesOverview() {
  const [filter, setFilter] = useState('all');

  const services = [
    {
      id: 'erp-crm',
      category: 'enterprise',
      title: 'Enterprise ERP & CRM Systems',
      desc: 'Architect and deploy custom ERP, CRM, and internal operations portals that unify your supply chain, customer journeys, billing, and workforce data.',
      icon: Building2,
      iconBg: 'bg-blue-50 border-blue-100 text-[#004ac6]',
      tag: 'ERP & CRM',
      keywords: ['sap', 'salesforce', 'operations', 'portal', 'billing', 'inventory', 'customer'],
      href: '#contact',
      cta: 'Build ERP / CRM System'
    },
    {
      id: 'ai-advantage',
      category: 'ai',
      title: 'Turn AI Into a Business Advantage',
      desc: 'Move beyond experimentation and put AI to work. Build context-aware applications, autonomous agent workflows, and intelligent assistants that drive tangible business ROI.',
      icon: Cpu,
      iconBg: 'bg-indigo-50 border-indigo-100 text-[#004ac6]',
      tag: 'AI Strategy & ROI',
      keywords: ['chatbots', 'agents', 'llm', 'generative', 'intelligence', 'automation', 'openai'],
      href: '#contact',
      cta: 'Explore AI Opportunities'
    },
    {
      id: 'rag-pipeline',
      category: 'ai',
      title: 'Applied AI & RAG Pipeline',
      desc: 'Connect foundation LLMs directly to your private databases and documents. We build zero-hallucination semantic search, automated vector pipelines, and deterministic business action APIs.',
      icon: Database,
      iconBg: 'bg-blue-50 border-blue-100 text-[#1d63ed]',
      tag: 'RAG & Vector DB',
      keywords: ['vector', 'embeddings', 'retrieval', 'semantic', 'knowledge base', 'documents', 'pinecone'],
      href: '#contact',
      cta: 'Build RAG Pipeline'
    },
    {
      id: 'modernization',
      category: 'cloud',
      title: 'Legacy Software Modernization',
      desc: 'Transform outdated applications, aging infrastructure, and legacy products into modern, maintainable, scalable solutions.',
      icon: Workflow,
      iconBg: 'bg-sky-50 border-sky-100 text-[#2563eb]',
      tag: 'Microservices',
      keywords: ['refactor', 'monolith', 'upgrade', 'migration', 'legacy', 'decouple', 'architecture'],
      href: '#modernization',
      cta: 'View Transformation Showcase'
    },
    {
      id: 'custom-dev',
      category: 'software',
      title: 'Custom Software & SaaS Development',
      desc: 'Develop tailored software platforms, multi-tenant SaaS products, and custom operational tools that automate bottlenecks and support growth.',
      icon: Terminal,
      iconBg: 'bg-slate-100 border-slate-200 text-slate-700',
      tag: 'Full-Stack / SaaS',
      keywords: ['saas', 'custom code', 'platform', 'backend', 'frontend', 'startup', 'software'],
      href: '#contact',
      cta: 'Discuss Custom Build'
    },
    {
      id: 'web-apps',
      category: 'software',
      title: 'Web Application Development',
      desc: 'Create fast, secure, scalable, and user-friendly web applications for customers, employees, and critical business operations.',
      icon: Globe2,
      iconBg: 'bg-blue-50 border-blue-100 text-[#2563eb]',
      tag: 'Next / React',
      keywords: ['website', 'react', 'nextjs', 'dashboard', 'frontend', 'responsive', 'ui/ux'],
      href: '#contact',
      cta: 'Build Web App'
    },
    {
      id: 'mobile',
      category: 'software',
      title: 'Mobile App Development',
      desc: 'Build modern Android and iOS applications that deliver seamless experiences and support unified digital business strategies.',
      icon: Smartphone,
      iconBg: 'bg-sky-50 border-sky-100 text-[#004ac6]',
      tag: 'iOS & Android',
      keywords: ['ios', 'android', 'react native', 'flutter', 'app', 'mobile', 'smartphone'],
      href: '#contact',
      cta: 'Build Mobile App'
    },
    {
      id: 'cloud-infra',
      category: 'cloud',
      title: 'Cloud Solutions & Migration',
      desc: 'Design, deploy, and modernize cloud-based applications and infrastructure for uncompromised flexibility, reliability, and scale.',
      icon: Cloud,
      iconBg: 'bg-indigo-50 border-indigo-100 text-[#004ac6]',
      tag: 'AWS / Multi-Cloud',
      keywords: ['aws', 'azure', 'gcp', 'devops', 'kubernetes', 'docker', 'infrastructure'],
      href: '#contact',
      cta: 'Plan Cloud Migration'
    }
  ];

  const filteredServices = services.filter((service) => {
    return filter === 'all' || service.category === filter;
  });

  return (
    <section className="w-full bg-[#f7f9fb] py-14 lg:py-20" id="services-overview">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#004ac6] font-semibold mb-2">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk']">
            Technology Solutions Built for Business Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            From enterprise ERP and CRM platforms to AI workflows, cloud infrastructure, and modern applications, we deliver end-to-end technology solutions aligned with your business goals.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-200/60 rounded-full border border-slate-300/60">
            {[
              { label: 'All Services', val: 'all' },
              { label: 'Enterprise ERP & CRM', val: 'enterprise' },
              { label: 'AI & Automation', val: 'ai' },
              { label: 'Cloud & Modernization', val: 'cloud' },
              { label: 'Custom & Web Apps', val: 'software' },
            ].map(tab => (
              <button
                key={tab.val}
                onClick={() => setFilter(tab.val)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  filter === tab.val
                    ? 'bg-white text-[#004ac6] shadow-xs'
                    : 'text-slate-600 hover:text-[#0f172a]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="group rounded-2xl bg-white border border-slate-200/90 p-8 flex flex-col justify-between shadow-xs hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle card ambient highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/8 via-sky-400/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${service.iconBg} group-hover:scale-110 shadow-xs transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#004ac6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <a 
                  href={service.href} 
                  className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#004ac6] font-semibold group-hover:text-[#2563eb] transition-colors relative z-10"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

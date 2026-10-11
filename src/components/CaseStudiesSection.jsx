import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesSection() {
  const projects = [
    {
      title: 'Clinical Workflow & Patient Triage Platform',
      domain: 'Healthcare Operations',
      tagColor: 'text-[#004ac6]',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy5U-iiQw1GxvoBTrKw7ysBEV_6PwOYBZDfUVafrvXAVlzrVE4GL4njHi7qdswQ6XEzgsLAjoxCROlxJUKOks7DpiaTWeEj_rZkulFGncf3LEVMmX4jzjXPUuU5F7VN5y-TVCeju9EzKGa__of2jgkPVTOPH7YVqHDSzLdQfCKilhVOeNiRPMlvut4oYtMC0YKUR-1ajhigcxXUfSmb3rj6_tnPY6Oz2R_0ISmtmvQmHeNgtpuTWM',
      challenge: 'Fragmented patient data spread across obsolete on-prem servers causing significant triage bottlenecks and manual scheduling friction.',
      solution: 'Designed a unified, FHIR-compliant cloud microservices platform with automated patient triage routing and real-time clinician scheduling.',
      tags: ['Next.js', 'Node.js', 'AWS FHIR', 'PostgreSQL'],
      badgeBg: 'bg-blue-50 border-blue-100 text-[#004ac6]'
    },
    {
      title: 'Global High-Throughput Payment Orchestration',
      domain: 'FinTech Platform',
      tagColor: 'text-[#2563eb]',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDECaF7p68njtATxA4gvFKQKFJ5YvkBDLlIxZJX5Jweg2Jqo6abS8H0-x8yxIcDAahMqowWADi72OdAJPhdj6Hk9wNqqmeJWu42yWaeVXSkhysA5nlLCYJ0ldqGyh2MMRNIa3M7t1mslXbKTkmCAqM0emrmrWnYhjFYAEF6Aa1knNvLmj_9e_1bHE1dfwJk8fdUTK7sQM3cWAZc4mB_97Wnzk0NcqMIShkqc8ROSoa9nLg66_eaTnc',
      challenge: 'Legacy monolithic payment gateway struggled under holiday transaction volumes, experiencing checkout drop-offs and failover latency.',
      solution: 'Architected an event-driven multi-region microservices layer with dynamic failover routing and sub-second payment settlement pipelines.',
      tags: ['Go', 'Kafka', 'Kubernetes', 'Redis'],
      badgeBg: 'bg-sky-50 border-sky-100 text-[#2563eb]'
    },
    {
      title: 'Predictive Inventory & Demand Forecasting AI',
      domain: 'Supply Chain AI',
      tagColor: 'text-slate-800',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN6uZkqSc0klqbvGBpIMx_o6hZUrUB_myDYMe_ksxyALO29IBDrB1Q3vcK_z_FvnWUj0ppQuIVmmnExyRZ6kyBHsBLwE2_0_sy1att6AMaymK5bGXUZarB3Gx6g3cXelDPJbx5qztdWFv_74ZEX2WTC8dsM088-n9eKlbDyA96NkNMatCpUJGojhJMi_2Zfbr4dnoF2xff0WDEZ9qWPTKDWv3wC_-lm_gRGEQp8XcBIzTBPM-MOlc',
      challenge: 'Manufacturer suffered from reactive procurement cycles, lead-time variances, and high warehouse carrying costs.',
      solution: 'Implemented deep learning time-series demand forecasting coupled with automated stock replenishment triggers across 14 global warehouses.',
      tags: ['Python', 'PyTorch', 'AWS SageMaker', 'Snowflake'],
      badgeBg: 'bg-slate-100 border-slate-200 text-slate-700'
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] border-y border-slate-200 py-24 lg:py-32" id="case-studies">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#004ac6] font-semibold mb-2">
            Engineered Outcomes
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk']">
            Turning Business Challenges Into Digital Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            A showcase of real-world problems solved through thoughtful architecture, modern cloud paradigms, and purposeful AI integration.
          </p>
        </div>

        {/* 3 Detailed Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="h-52 w-full relative overflow-hidden bg-slate-100">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={proj.image} 
                  alt={proj.title}
                  loading="lazy"
                />
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 font-mono text-xs font-semibold shadow-xs ${proj.tagColor}`}>
                  {proj.domain}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-[#0f172a] mb-3 group-hover:text-[#004ac6] transition-colors font-['Hanken_Grotesk']">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                    <strong className="text-[#0f172a] font-semibold">Challenge: </strong>
                    {proj.challenge}
                  </p>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    <strong className="text-[#0f172a] font-semibold">Solution: </strong>
                    {proj.solution}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`font-mono text-xs px-2.5 py-0.5 rounded border ${proj.badgeBg}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-12 flex justify-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold text-base shadow-xs hover:bg-slate-50 active:scale-[0.98] transition-all"
          >
            <span>Discuss Your Project With Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

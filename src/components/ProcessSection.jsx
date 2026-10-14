import React from 'react';
import { 
  Compass, 
  Boxes, 
  Layers, 
  Terminal, 
  Zap 
} from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      color: 'text-[#004ac6]',
      borderTop: 'border-t-[#004ac6]',
      icon: Compass,
      title: 'Discover',
      desc: 'Understand business goals, team bottlenecks, and existing software systems.'
    },
    {
      num: '02',
      color: 'text-[#2563eb]',
      borderTop: 'border-t-[#2563eb]',
      icon: Boxes,
      title: 'Strategize',
      desc: 'Define the technical architecture, technology stack, and phase-by-phase roadmap.'
    },
    {
      num: '03',
      color: 'text-slate-600',
      borderTop: 'border-t-slate-600',
      icon: Layers,
      title: 'Design',
      desc: 'Create intuitive user experiences, interactive prototypes, and scalable systems.'
    },
    {
      num: '04',
      color: 'text-[#004ac6]',
      borderTop: 'border-t-[#004ac6]',
      icon: Terminal,
      title: 'Develop',
      desc: 'Build, integrate, test, and optimize the solution with continuous sprint cycles.'
    },
    {
      num: '05',
      color: 'text-emerald-600',
      borderTop: 'border-t-emerald-600',
      icon: Zap,
      title: 'Launch & Evolve',
      desc: 'Deploy to production, monitor telemetry, maintain, and continuously improve.'
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] border-y border-slate-200 py-14 lg:py-20" id="process">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#004ac6] font-semibold mb-2">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk']">
            A Clear Path From Challenge to Solution
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            A structured, transparent engineering process designed to eliminate uncertainty and deliver dependable results.
          </p>
        </div>

        {/* 5-Step Progression Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className={`p-6 rounded-2xl bg-white border border-slate-200 border-t-4 ${step.borderTop} flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-3xl font-bold font-mono ${step.color}`}>{step.num}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#0f172a] mb-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

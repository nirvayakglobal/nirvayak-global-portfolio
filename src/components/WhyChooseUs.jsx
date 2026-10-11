import React from 'react';
import { 
  TrendingUp, 
  Code2, 
  Cpu, 
  Workflow, 
  Server, 
  ShieldCheck 
} from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: TrendingUp,
      color: 'text-[#004ac6]',
      title: 'Business-First Approach',
      desc: 'We align all architecture, tooling, and development decisions directly with strategic business objectives and ROI targets.'
    },
    {
      icon: Code2,
      color: 'text-[#2563eb]',
      title: 'Modern Engineering',
      desc: 'We build maintainable, modular, and future-ready software adhering strictly to industry standards and clean architecture.'
    },
    {
      icon: Cpu,
      color: 'text-slate-600',
      title: 'AI-Driven Innovation',
      desc: 'We identify tangible opportunities to improve operational efficiency, automate workflows, and empower teams through applied AI.'
    },
    {
      icon: Workflow,
      color: 'text-[#004ac6]',
      title: 'End-to-End Delivery',
      desc: 'We support your team throughout the complete journey: from initial discovery and product design to production launch and optimization.'
    },
    {
      icon: Server,
      color: 'text-[#2563eb]',
      title: 'Scalable Solutions',
      desc: 'We design systems engineered to handle explosive data growth, seasonal traffic spikes, and evolving organizational needs without refactoring.'
    },
    {
      icon: ShieldCheck,
      color: 'text-[#0284c7]',
      title: 'Long-Term Partnership',
      desc: 'We foster continuous improvement, proactive security posture, and strategic advisement that evolves alongside your digital roadmap.'
    }
  ];

  return (
    <section className="w-full bg-[#f7f9fb] py-24 lg:py-32" id="why-choose-us">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#004ac6] font-semibold mb-2">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk']">
            A Technology Partner Focused on Your Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We blend deep technical capability with commercial pragmatism to ensure every engineering decision yields tangible business ROI.
          </p>
        </div>

        {/* 6 Authentic Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className={`w-8 h-8 ${benefit.color} mb-4`} />
                <h3 className="font-semibold text-lg text-[#0f172a] mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

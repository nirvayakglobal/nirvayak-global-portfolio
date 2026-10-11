import React, { useState } from 'react';
import { 
  Database, 
  Boxes, 
  Zap, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  MessageSquareText, 
  Workflow, 
  FileCheck2, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';

export default function AISolutionsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      step: 1,
      title: 'Data Ingestion & Sanitization',
      subtitle: 'Structured DBs, APIs, and document repositories',
      icon: Database,
      badge: 'ETL Pipeline',
      detail: 'Automated data scrubbing, PII redaction, and compliance-first schema mapping.'
    },
    {
      step: 2,
      title: 'Vector Embeddings & Context Retrieval',
      subtitle: 'High-dimensional search with enterprise permissions',
      icon: Boxes,
      badge: 'Vector DB',
      detail: 'Sub-millisecond semantic search retrieving relevant organizational context securely.'
    },
    {
      step: 3,
      title: 'LLM Orchestration & Verification',
      subtitle: 'Deterministic guardrails and prompt engineering',
      icon: Zap,
      badge: 'Guardrails',
      detail: 'Multi-agent evaluation preventing hallucinations and ensuring brand safety.'
    },
    {
      step: 4,
      title: 'Real-Time Business Action',
      subtitle: 'Automated API execution, reports, and agent responses',
      icon: CheckCircle2,
      badge: 'Action APIs',
      detail: 'Webhook triggers, ERP update execution, and autonomous decision feeds.'
    }
  ];

  const aiCapabilities = [
    {
      icon: Cpu,
      color: 'text-[#004ac6]',
      title: 'AI-Powered Apps',
      desc: 'Custom workflows infused with context-aware intelligence.'
    },
    {
      icon: Sparkles,
      color: 'text-[#2563eb]',
      title: 'Generative AI',
      desc: 'Secure integrations with state-of-the-art foundation models.'
    },
    {
      icon: MessageSquareText,
      color: 'text-[#0284c7]',
      title: 'Intelligent Assistants',
      desc: 'Internal and customer-facing autonomous chatbots.'
    },
    {
      icon: Workflow,
      color: 'text-[#004ac6]',
      title: 'Process Automation',
      desc: 'End-to-end task execution replacing repetitive labor.'
    },
    {
      icon: FileCheck2,
      color: 'text-slate-600',
      title: 'Document Processing',
      desc: 'Automated OCR and structured information extraction.'
    },
    {
      icon: TrendingUp,
      color: 'text-[#2563eb]',
      title: 'Data Analytics',
      desc: 'Predictive dashboards driven by business metrics.'
    }
  ];

  return (
    <section className="w-full bg-[#f7f9fb] py-24 lg:py-32" id="ai-solutions">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#004ac6] font-semibold mb-2">
            Pragmatic Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk']">
            Turn AI Into a Business Advantage
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Move beyond experimentation and put AI to work. We help businesses identify practical AI opportunities and develop solutions that streamline operations, improve productivity, and create better customer experiences.
          </p>
        </div>

        {/* Capabilities & Interactive Pipeline Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Interactive AI Architecture Pipeline Graphic */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-md hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <div>
                  <span className="text-lg font-bold text-[#0f172a] font-['Hanken_Grotesk'] block">Enterprise AI Pipeline</span>
                  <span className="text-xs text-slate-500">Click a stage to inspect execution details</span>
                </div>
                <span className="font-mono text-xs text-[#004ac6] font-semibold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  RAG / Agentic Runtime
                </span>
              </div>

              {/* Pipeline Step Flow with interactive tabs */}
              <div className="space-y-3">
                {pipelineSteps.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = activeStep === idx;
                  return (
                    <div 
                      key={item.step}
                      onClick={() => setActiveStep(idx)}
                      className={`cursor-pointer transition-all duration-200 p-4 rounded-xl border flex flex-col gap-2 ${
                        isSelected 
                          ? 'bg-blue-50/70 border-blue-400 shadow-sm' 
                          : 'bg-[#f8fafc] border-slate-200 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm font-mono shrink-0 transition-colors ${
                          isSelected 
                            ? 'bg-[#004ac6] text-white shadow-xs' 
                            : 'bg-blue-100 text-[#004ac6]'
                        }`}>
                          {item.step}
                        </div>
                        <div className="flex flex-col flex-1">
                          <span className={`text-sm font-bold transition-colors ${isSelected ? 'text-[#004ac6]' : 'text-[#0f172a]'}`}>
                            {item.title}
                          </span>
                          <span className="text-xs text-slate-500">{item.subtitle}</span>
                        </div>
                        <Icon className={`w-4 h-4 transition-colors ${isSelected ? 'text-[#004ac6]' : 'text-slate-400'}`} />
                      </div>
                      
                      {isSelected && (
                        <div className="pt-2 mt-1 border-t border-blue-200 text-xs text-slate-600 flex items-center justify-between animate-fadeIn">
                          <span>{item.detail}</span>
                          <span className="font-mono text-[10px] uppercase font-semibold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                            {item.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* AI Capabilities List */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-300/80 transition-all duration-200"
                  >
                    <Icon className={`w-6 h-6 ${cap.color} mb-2`} />
                    <h4 className="font-semibold text-base text-[#0f172a] mb-1">{cap.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>

            <div>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#2563eb] text-white font-semibold text-base shadow-sm hover:bg-[#004ac6] active:scale-[0.98] transition-all"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

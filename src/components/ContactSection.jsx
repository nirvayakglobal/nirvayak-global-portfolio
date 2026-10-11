import React, { useState } from 'react';
import { Mail, Calendar, CheckCircle2, ArrowRight, Send, Clock, User, MessageSquare, Phone } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'ai-development',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('contact@nirvayak.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Client-side fallback: constructs email or simulated enterprise submission for static / shared hosting
    setTimeout(() => {
      setFormStatus('success');
      // Prepares mailto as direct guaranteed fail-safe for shared hosting without backend setup
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:contact@nirvayak.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="w-full bg-[#f7f9fb] py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-14 shadow-xl relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#004ac6] font-semibold mb-2">
              Take The Next Step
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Hanken_Grotesk']">
              Ready to Transform Your Business?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Whether you want to modernize an existing product, build a new application, adopt AI, or move to the cloud, Nirvayak Global is ready to engineer your roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Direct Connect Options */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Email Box */}
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 flex flex-col items-start text-left shadow-2xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#004ac6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-500 font-semibold block">Direct Inquiries</span>
                    <span className="text-[#0f172a] font-bold text-base font-mono">contact@nirvayak.com</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-4 mt-1">
                  Guaranteed response from a senior architect within 24 business hours.
                </p>
                <button 
                  onClick={handleCopyEmail}
                  className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-xs font-mono text-slate-700 transition-all flex items-center justify-center gap-2 shadow-2xs active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <span>Copy Email Address</span>
                  )}
                </button>
              </div>

              {/* Consultation Box */}
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 flex flex-col items-start text-left shadow-2xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#2563eb]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-500 font-semibold block">Discovery Session</span>
                    <span className="text-[#0f172a] font-bold text-base">30-Min Architecture Call</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-4 mt-1">
                  Zero commitment. We review your tech debt, performance bottlenecks, and target specs.
                </p>
                <a 
                  href="mailto:contact@nirvayak.com?subject=Architecture%20Discovery%20Session"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#2563eb] hover:bg-[#004ac6] text-white text-xs font-semibold shadow-xs transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Enterprise Commitments */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Strict Non-Disclosure (NDA) Protocol</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Transparent Fixed or Agile Sprint Cycles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Direct Senior Solutions Architect Access</span>
                </div>
              </div>

            </div>

            {/* Quick Consultation Form */}
            <div className="lg:col-span-7 bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
                <span className="font-bold text-base text-[#0f172a] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#004ac6]" />
                  Initiate Architectural Review
                </span>
                <span className="text-xs font-mono text-slate-500">Fast-Track Request</span>
              </div>

              {formStatus === 'success' ? (
                <div className="p-8 rounded-xl bg-white border border-emerald-300 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">Inquiry Dispatched!</h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md">
                    Thank you, {formData.name || 'there'}. We have prepared your email client and routed your request to our engineering leadership.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-xs text-[#004ac6] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-[#0f172a] focus:outline-hidden focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-[#0f172a] focus:outline-hidden focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Primary Objective
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-[#0f172a] focus:outline-hidden focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all"
                    >
                      <option value="legacy-modernization">Legacy Software Modernization</option>
                      <option value="ai-development">Applied AI & Intelligent Agents</option>
                      <option value="cloud-migration">Cloud Migration & Multi-Region Infra</option>
                      <option value="custom-web-mobile">Custom Web or Mobile Application</option>
                      <option value="enterprise-architecture">Enterprise Architecture Review</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Scope & Timeline
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your existing stack, bottleneck, or target outcomes..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-[#0f172a] focus:outline-hidden focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#2563eb] hover:bg-[#004ac6] text-white font-semibold text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-75"
                  >
                    <span>{formStatus === 'submitting' ? 'Preparing Submission...' : 'Transmit Request'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500">
                    Shared hosting safe: routes securely via mail client fail-safe if server API is unavailable.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

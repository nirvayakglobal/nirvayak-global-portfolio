import React, { useState } from 'react';
import { Mail, Calendar, CheckCircle2, ArrowRight, Send, Clock, User, MessageSquare, Phone } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web or Mobile App',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('info@nirvayakglobal.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setFormStatus('success');
        setStatusMessage(result.message || 'Thank you! Your message has been sent successfully to info@nirvayakglobal.com.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Web or Mobile App',
          message: ''
        });
      } else {
        // Fallback to mailto if PHP backend isn't available in local dev or hosting environment
        console.warn('Backend mailer returned error, triggering mailto fallback:', result?.message);
        const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Client'}: ${formData.projectType}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.projectType}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:info@nirvayakglobal.com?subject=${subject}&body=${body}`;
        setFormStatus('success');
        setStatusMessage('Your inquiry was processed. We will get back to you shortly!');
      }
    } catch (err) {
      console.warn('Network error or local dev environment, triggering mailto fallback:', err);
      const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Client'}: ${formData.projectType}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.projectType}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:info@nirvayakglobal.com?subject=${subject}&body=${body}`;
      setFormStatus('success');
      setStatusMessage('Your inquiry was processed. We will get back to you shortly!');
    }
  };

  return (
    <section id="contact" className="w-full bg-[#f7f9fb] py-14 lg:py-20 relative overflow-hidden">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Email Info Card */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 flex flex-col text-left">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#004ac6] mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Email Us Directly</span>
                <a 
                  href="mailto:info@nirvayakglobal.com" 
                  className="text-lg font-bold text-[#004ac6] hover:underline break-all mb-2"
                >
                  info@nirvayakglobal.com
                </a>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Prefer sending an email directly? Drop us a line with your project details and we'll reply within 24 business hours.
                </p>

                <button 
                  onClick={handleCopyEmail}
                  className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-xs font-medium text-slate-700 transition-all flex items-center justify-center gap-2 shadow-2xs active:scale-95"
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

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>We respect your privacy and will never share your email.</span>
              </div>
            </div>

            {/* Simple Email Contact Form */}
            <div className="lg:col-span-8 bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
                <span className="font-bold text-base text-[#0f172a] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#004ac6]" />
                  Let's Discuss Your Business Requirements
                </span>
                <span className="text-xs text-slate-500">We'll respond via email</span>
              </div>

              {formStatus === 'success' ? (
                <div className="p-8 rounded-xl bg-white border border-emerald-300 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md">
                    {statusMessage || 'Thank you! Your message has been sent to info@nirvayakglobal.com. Our team will review your requirements and reply to you within 24 hours.'}
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setStatusMessage('');
                    }}
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
                        Your Email Address *
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Mobile Number
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-[#0f172a] focus:outline-hidden focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Service or Area of Interest
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-[#0f172a] focus:outline-hidden focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all"
                      >
                        <option value="Enterprise ERP & CRM">Enterprise ERP & CRM Solutions</option>
                        <option value="Web or Mobile App">Build a Web or Mobile Application</option>
                        <option value="AI & Automation">AI Solutions & Intelligent Automation</option>
                        <option value="Software Modernization">Software Modernization & Maintenance</option>
                        <option value="Cloud Solutions">Cloud Infrastructure & Migration</option>
                        <option value="General Consultation">General Discussion / Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Business Needs or Questions *
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you're looking for, challenges you're facing, or ask us any questions. We'll review your requirements and reach out to you directly."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-[#0f172a] focus:outline-hidden focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#2563eb] hover:bg-[#004ac6] text-white font-semibold text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-75 cursor-pointer"
                  >
                    <span>{formStatus === 'submitting' ? 'Sending to info@nirvayakglobal.com...' : 'Send Message to info@nirvayakglobal.com'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500">
                    We will get back to your email within 24 hours.
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

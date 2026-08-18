import React, { useState } from 'react';
import { Send, CheckCircle2, Calendar, RefreshCw, AlertCircle } from 'lucide-react';
import { SITE_METADATA } from '../data/portfolioData';
import FAQSection from '../components/FAQSection';

export default function ContactPage({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Robotics & AI Collaboration',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const targetEmail = "shashankjangidofficial@gmail.com";
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          domain: formData.service,
          message: formData.message,
          _subject: `New Portfolio Contact Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback: direct mailto
      window.location.href = `mailto:shashankjangidofficial@gmail.com?subject=${encodeURIComponent(`Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nDomain: ${formData.service}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono uppercase tracking-wider text-sky-600 font-semibold shadow-xs">
              <span>Available for Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Get in touch
            </h1>

            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Hi, I’m Shashank Jangid, an IIT Engineer pursuing M.Tech in Artificial Intelligence at IIT Jodhpur. I engineer autonomous robotics, embedded microcontrollers, signal sampling algorithms, and Web3 systems.
            </p>

            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Have a project or technical collaboration in mind? Messages submitted here go straight to my inbox at <strong className="text-slate-900">shashankjangidofficial@gmail.com</strong>.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Talk to AI Twin</span>
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200 space-y-2 text-xs font-mono text-slate-600">
              <div>Email: <a href="mailto:shashankjangidofficial@gmail.com" className="text-slate-900 font-semibold hover:text-sky-600">shashankjangidofficial@gmail.com</a></div>
              <div>Phone: <span className="text-slate-900 font-semibold">{SITE_METADATA.phone}</span></div>
              <div>LinkedIn: <a href={SITE_METADATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-900 font-semibold hover:text-sky-600">{SITE_METADATA.linkedin}</a></div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="shashank-card p-8 sm:p-12 border border-slate-200 shadow-lg bg-white rounded-3xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-slate-900">Thank You!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Your message has been sent directly to <strong>shashankjangidofficial@gmail.com</strong>. Shashank will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', service: 'Robotics & AI Collaboration', message: '' });
                    }}
                    className="mt-4 px-6 py-2 rounded-full border border-slate-200 text-xs font-mono font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-2 uppercase font-semibold">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 transition-colors shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-2 uppercase font-semibold">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 transition-colors shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-2 uppercase font-semibold">Domain / Project Type</label>
                    <input
                      type="text"
                      placeholder="e.g. Autonomous Robotics, ESP32 IoT, Web3 DApp"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 transition-colors shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-2 uppercase font-semibold">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell Shashank about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 transition-colors shadow-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full gradient-btn font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Sending to Shashank...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Shashank</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      <FAQSection />
    </div>
  );
}

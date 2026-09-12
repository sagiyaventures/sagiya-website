import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Send, Loader2 } from 'lucide-react';

// TODO: Replace with your Formspree form ID after signing up at https://formspree.io
// Steps: 1) Sign up at formspree.io  2) Create new form  3) Copy the form ID (e.g. "xpwzabcd")
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xljegbww';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    domain: 'AI Solutions & Automation',
    scale: 'Small to Medium Organization',
    timeline: 'Within 3 Months',
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    projectNotes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const domains = [
    'AI Solutions & Automation',
    'Software Development',
    'Data Analytics & Dashboards',
    'Government / Public Sector AI',
  ];

  const scales = [
    'Small to Medium Organization',
    'Large Organization / Enterprise',
    'Government / Public Institution',
    'Startup / Early Stage',
  ];

  const timelines = [
    'Within 1 Month',
    'Within 3 Months',
    'Within 6 Months',
    'Just Exploring for Now',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError('');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          domain: formData.domain,
          scale: formData.scale,
          timeline: formData.timeline,
          message: formData.projectNotes,
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitError('Something went wrong. Please email us at sagiyaventures@gmail.com');
      }
    } catch {
      setSubmitError('Network error. Please email us at sagiyaventures@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({ domain: 'AI Solutions & Automation', scale: 'Small to Medium Organization', timeline: 'Within 3 Months', fullName: '', email: '', phone: '', organization: '', projectNotes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-[#004900]/20 max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} aria-label="Close" className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors">
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe2da] text-[#006400] font-label text-xs font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-[#006400]"></span>
                Step {step} of 3
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e]">Get in Touch</h2>
              <p className="font-body text-sm text-[#404a3b] mt-1">
                Tell us a bit about your project — we'll get back to you soon.
              </p>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block font-label text-sm font-semibold text-[#2c160e] mb-3">What are you looking for?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {domains.map((item) => (
                      <button key={item} type="button" onClick={() => setFormData({ ...formData, domain: item })}
                        className={`p-3.5 text-left rounded-lg border font-label text-xs transition-all ${formData.domain === item ? 'bg-[#006400] text-white border-[#006400] font-semibold' : 'bg-white text-[#2c160e] border-[#004900]/15 hover:bg-[#fff8f6]'}`}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-label text-sm font-semibold text-[#2c160e] mb-3">What type of organization are you?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {scales.map((item) => (
                      <button key={item} type="button" onClick={() => setFormData({ ...formData, scale: item })}
                        className={`p-3.5 text-left rounded-lg border font-label text-xs transition-all ${formData.scale === item ? 'bg-[#006400] text-white border-[#006400] font-semibold' : 'bg-white text-[#2c160e] border-[#004900]/15 hover:bg-[#fff8f6]'}`}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-4 flex justify-end">
                  <button type="button" onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#004d00] transition-colors">
                    <span>Next</span><ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block font-label text-sm font-semibold text-[#2c160e] mb-3">What's your timeline?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {timelines.map((t) => (
                      <button key={t} type="button" onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`p-3.5 text-left rounded-lg border font-label text-xs transition-all ${formData.timeline === t ? 'bg-[#006400] text-white border-[#006400] font-semibold' : 'bg-white text-[#2c160e] border-[#004900]/15 hover:bg-[#fff8f6]'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-4 flex justify-between">
                  <button type="button" onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 font-label text-sm px-5 py-3 rounded-sm hover:bg-stone-50">
                    <ArrowLeft className="w-4 h-4" /><span>Back</span>
                  </button>
                  <button type="button" onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#004d00] transition-colors">
                    <span>Next</span><ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label text-xs font-semibold text-[#2c160e] mb-1">Your Name *</label>
                    <input type="text" required value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajkumar Sundar"
                      className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-[#006400] focus:ring-1 focus:ring-[#006400] text-sm outline-none" />
                  </div>
                  <div>
                    <label className="block font-label text-xs font-semibold text-[#2c160e] mb-1">Email Address *</label>
                    <input type="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@organization.com"
                      className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-[#006400] focus:ring-1 focus:ring-[#006400] text-sm outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label text-xs font-semibold text-[#2c160e] mb-1">Phone Number</label>
                    <input type="tel" value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9790097716"
                      className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-[#006400] focus:ring-1 focus:ring-[#006400] text-sm outline-none" />
                  </div>
                  <div>
                    <label className="block font-label text-xs font-semibold text-[#2c160e] mb-1">Organization / Company</label>
                    <input type="text" value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. TNSTC, Tamil Nadu Govt, ABC Pvt Ltd"
                      className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-[#006400] focus:ring-1 focus:ring-[#006400] text-sm outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block font-label text-xs font-semibold text-[#2c160e] mb-1">Tell us about your project (Optional)</label>
                  <textarea rows={3} value={formData.projectNotes}
                    onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                    placeholder="Briefly describe what you're trying to solve..."
                    className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-[#006400] focus:ring-1 focus:ring-[#006400] text-sm outline-none" />
                </div>
                <div className="p-3 bg-[#fff1ed]/70 rounded-lg text-xs font-label text-[#404a3b] space-y-1">
                  <div><strong>Looking for:</strong> {formData.domain}</div>
                  <div><strong>Organization:</strong> {formData.scale} &bull; <strong>Timeline:</strong> {formData.timeline}</div>
                </div>
                {submitError && (
                  <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">{submitError}</div>
                )}
                <div className="pt-3 flex justify-between">
                  <button type="button" onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 font-label text-sm px-4 py-2.5 rounded-sm hover:bg-stone-50">
                    <ArrowLeft className="w-4 h-4" /><span>Back</span>
                  </button>
                  <button type="submit" disabled={isLoading}
                    className="inline-flex items-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#004d00] transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed">
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#006400] text-white flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#2c160e] mb-2">Message Sent!</h3>
            <p className="font-body text-base text-[#404a3b] max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold">{formData.fullName || 'there'}</span>! We've received your message and will get back to you as soon as possible.
            </p>
            <div className="bg-[#fff8f6] border border-[#004900]/15 rounded-xl p-5 text-left max-w-sm mx-auto mb-8 text-xs font-label space-y-2">
              <div className="flex justify-between">
                <span className="text-[#707a6a]">Contact:</span>
                <span className="font-bold text-[#2c160e]">Rajkumar Sundar</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#707a6a]">Email:</span>
                <span className="font-bold text-[#006400]">sagiyaventures@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#707a6a]">Response:</span>
                <span className="font-bold text-[#2c160e]">Within 1-2 Business Days</span>
              </div>
            </div>
            <button onClick={handleReset}
              className="inline-flex items-center justify-center bg-[#006400] text-white font-label text-sm font-semibold px-8 py-3 rounded-sm hover:bg-[#004d00] transition-colors">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

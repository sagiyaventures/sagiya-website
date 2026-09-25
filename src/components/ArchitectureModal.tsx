import React from 'react';
import { X, MessageSquare, Lightbulb, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { useEscapeClose } from '../hooks/useEscapeClose';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  // Accessibility fix: role=dialog + Escape-to-close + initial focus (see useEscapeClose).
  const panelRef = useEscapeClose(isOpen, onClose);

  if (!isOpen) return null;

  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      step: '01',
      title: 'Understand Your Problem',
      description: 'We start by listening — no assumptions. We deep-dive into your operations, workflows, and goals before proposing anything.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      step: '02',
      title: 'Design the Right Solution',
      description: 'We propose a solution that fits your actual context using proven, appropriate technology — not the most impressive-sounding one.',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      step: '03',
      title: 'Build & Pilot Fast',
      description: 'We deliver a working pilot quickly so you can validate real impact before committing to full-scale deployment.',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      step: '04',
      title: 'Scale & Support',
      description: 'Once the pilot proves value, we scale what works — with ongoing support, monitoring, and continuous improvement.',
    },
  ];

  const principles = [
    'Results before scale — pilot first, expand only after proving value',
    'Honest communication — we tell you what\'s possible and what isn\'t',
    'Your data stays private and secure at every stage',
    'Clean, documented code your team can own and maintain',
    'Results-first — every decision driven by measurable impact',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="architecture-modal-title"
        tabIndex={-1}
        className="bg-white rounded-2xl border border-[#004900]/20 max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto focus:outline-none"
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors">
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe2da] text-[#006400] font-label text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#006400]"></span>
            How We Work
          </div>
          <h2 id="architecture-modal-title" className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e]">Our Approach</h2>
          <p className="font-body text-sm text-[#404a3b] mt-1 leading-relaxed">
            Simple, transparent, and focused on delivering real value — from the first conversation to live deployment.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#fff8f6] border border-[#004900]/10 hover:border-[#006400]/30 transition-all">
              <div className="w-11 h-11 rounded-lg bg-[#006400] text-white flex items-center justify-center shrink-0">
                {s.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-headline text-xs font-bold text-[#006400]/50">{s.step}</span>
                  <h4 className="font-headline text-base font-bold text-[#2c160e]">{s.title}</h4>
                </div>
                <p className="font-body text-sm text-[#404a3b] leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="bg-[#fff1ed]/60 border border-[#004900]/15 rounded-xl p-5 mb-8">
          <div className="font-label text-xs uppercase tracking-wider text-[#006400] font-semibold mb-3">
            What You Can Always Expect
          </div>
          <div className="space-y-2">
            {principles.map((p, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#006400] shrink-0 mt-0.5" />
                <span className="font-body text-sm text-[#404a3b]">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200">
          <button
            onClick={() => { onClose(); onOpenConsultation(); }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#004d00] transition-colors"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={onClose} className="px-5 py-3 rounded-sm border border-stone-300 text-stone-700 font-label text-sm hover:bg-stone-50">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { MessageSquare, Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';

interface InteractiveTopologyProps {
  onOpenConsultation: () => void;
}

export const InteractiveTopology: React.FC<InteractiveTopologyProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      icon: <MessageSquare className="w-7 h-7" />,
      step: '01',
      title: 'Understand Your Problem',
      description: 'We start by listening. Deep dive into your operations, pain points, workflows, and goals — before writing a single line of code.',
      color: 'bg-[#ffe2da]',
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      step: '02',
      title: 'Design the Right Solution',
      description: 'We architect a solution that fits your specific context. No generic templates — the right technology for your real problem.',
      color: 'bg-[#e8f5e9]',
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      step: '03',
      title: 'Build & Pilot Fast',
      description: 'We deliver a working pilot quickly. You see real results and validate impact before we scale anything further.',
      color: 'bg-[#fff8e1]',
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      step: '04',
      title: 'Scale & Support',
      description: 'Once the pilot proves value, we scale what works. Ongoing support, monitoring, and continuous improvement — together.',
      color: 'bg-[#e3f2fd]',
    },
  ];

  const values = [
    { label: 'Honest Communication', desc: 'We tell you what\'s possible and what isn\'t — no overselling.' },
    { label: 'Impact-Focused', desc: 'Every solution we build is designed to create measurable, verifiable real-world impact.' },
    { label: 'Your Data, Your Privacy', desc: 'All client data stays private and secure at every step.' },
    { label: 'Built to Last', desc: 'Clean, documented, maintainable code your team can own.' },
  ];

  return (
    <section className="py-20 md:py-24 px-5 md:px-12 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-[#ffdbd0]/30 border border-[#bfcab7] px-3.5 py-1 rounded-full w-fit mb-3">
          <span className="w-2 h-2 rounded-full bg-[#006400]"></span>
          <span className="font-label text-xs tracking-wider text-[#004900] uppercase font-semibold">
            Our Process
          </span>
        </div>
        <h2 className="font-headline text-3xl md:text-[36px] font-bold text-[#2c160e] tracking-tight mb-3">
          How We Work
        </h2>
        <p className="font-body text-base text-[#404a3b] max-w-xl mx-auto leading-relaxed">
          Simple, transparent, and focused on delivering real value — from first conversation to live deployment.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {steps.map((step, i) => (
          <div key={i} className="relative bg-white border border-[#004900]/10 rounded-xl p-7 shadow-xs hover:shadow-md hover:border-[#004900]/30 transition-all group">
            <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center text-[#006400] mb-5 group-hover:scale-105 transition-transform`}>
              {step.icon}
            </div>
            <div className="font-headline text-3xl font-bold text-[#006400]/20 mb-2">{step.step}</div>
            <h3 className="font-headline text-lg font-bold text-[#2c160e] mb-2">{step.title}</h3>
            <p className="font-body text-sm text-[#404a3b] leading-relaxed">{step.description}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-[#006400]/30" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="bg-[#fff1ed]/60 border border-[#004900]/15 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h3 className="font-headline text-2xl font-bold text-[#2c160e]">What You Can Always Expect from Us</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-[#004900]/10 shadow-xs text-center">
              <div className="font-headline text-base font-bold text-[#006400] mb-2">{v.label}</div>
              <p className="font-body text-xs text-[#404a3b] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-8 py-3.5 rounded-sm hover:bg-[#004d00] transition-colors shadow-sm"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

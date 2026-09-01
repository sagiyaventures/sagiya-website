import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AIServicesViewProps {
  onOpenConsultation: () => void;
}

export const AIServicesView: React.FC<AIServicesViewProps> = ({ onOpenConsultation }) => {
  const aiCapabilities = [
    {
      icon: 'psychology',
      title: 'Custom AI Model Development',
      description: 'We build domain-specific AI models tailored to your industry and data — not generic off-the-shelf tools. Every model is designed for your specific problem, trained on your context.',
      highlights: [
        'Domain-specific model fine-tuning',
        'Private and secure — your data stays yours',
        'Optimized for your infrastructure',
        'Ongoing model improvement and support',
      ],
    },
    {
      icon: 'share',
      title: 'Intelligent Data & Analytics Platforms',
      description: 'Turn raw operational data into actionable insights. We design analytics pipelines and dashboards that give decision-makers real-time visibility into what matters.',
      highlights: [
        'Real-time operational dashboards',
        'Predictive analytics and forecasting',
        'Automated anomaly and alert detection',
        'Integration with existing systems',
      ],
    },
    {
      icon: 'robot_2',
      title: 'AI Workflow Automation',
      description: 'Replace repetitive, error-prone manual processes with intelligent automation. We design AI workflows that handle multi-step tasks reliably — with human oversight built in.',
      highlights: [
        'End-to-end process automation',
        'Human-in-the-loop escalation',
        'Audit trails and full logging',
        'Scalable and maintainable architecture',
      ],
    },
    {
      icon: 'visibility',
      title: 'Computer Vision & Document Intelligence',
      description: 'Extract structured information from images, documents, and video feeds. Ideal for inspection, compliance, and document processing workflows.',
      highlights: [
        'Document parsing and OCR',
        'Image-based quality inspection',
        'Real-time video analytics',
        'Edge and cloud deployment options',
      ],
    },
  ];

  return (
    <div className="pt-8 pb-24 px-5 md:px-12 max-w-[1280px] mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#ffdbd0]/30 border border-[#bfcab7] px-4 py-1.5 rounded-full w-fit mb-4">
          <span className="w-2 h-2 rounded-full bg-[#006400]"></span>
          <span className="font-label text-xs tracking-widest text-[#004900] uppercase font-semibold">
            What We Build
          </span>
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-[#2c160e] tracking-tight mb-4">
          AI Services Built for Real Problems
        </h1>
        <p className="font-body text-lg text-[#404a3b] leading-relaxed">
          Sagiya Ventures designs and delivers AI solutions that are practical, transparent, and built to create measurable impact — not just impressive demos.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {aiCapabilities.map((service, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#004900]/15 p-8 rounded-xl hover:border-[#004900]/40 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#ffe2da] flex items-center justify-center text-[#006400] mb-6 group-hover:bg-[#006400] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl" data-icon={service.icon}>
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-[#2c160e] mb-3 group-hover:text-[#006400] transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-base text-[#404a3b] leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#004900]/10">
              {service.highlights.map((item, hIdx) => (
                <div key={hIdx} className="flex items-center gap-2 text-xs font-label text-[#404a3b]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006400]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* How We Work */}
      <div className="bg-[#fff1ed]/70 border border-[#004900]/20 rounded-2xl p-8 md:p-12 mb-16 shadow-xs">
        <div className="text-center mb-10">
          <span className="font-label text-xs uppercase tracking-wider text-[#006400] font-semibold">
            Our Approach
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e] mt-1">
            How We Engage
          </h2>
          <p className="font-body text-sm text-[#404a3b] mt-2 max-w-xl mx-auto">
            Every engagement starts with understanding your problem — not selling a product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Understand', desc: 'Deep dive into your operations, pain points, and goals.' },
            { step: '02', title: 'Design', desc: 'Architect a solution that fits your context — not a generic template.' },
            { step: '03', title: 'Build & Pilot', desc: 'Deliver a working pilot fast. Validate results before scaling.' },
            { step: '04', title: 'Scale & Support', desc: 'Expand what works. Continuous improvement and support.' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#004900]/15 rounded-xl p-6 text-center shadow-xs">
              <div className="font-headline text-3xl font-bold text-[#006400]/30 mb-2">{item.step}</div>
              <div className="font-headline text-base font-bold text-[#2c160e] mb-2">{item.title}</div>
              <p className="font-body text-xs text-[#404a3b] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-8 py-3.5 rounded-sm hover:bg-[#004d00] transition-colors shadow-xs"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

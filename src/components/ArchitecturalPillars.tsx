import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ServicePillar } from '../types';

interface ArchitecturalPillarsProps {
  onSelectPillar?: (pillarId: string) => void;
  onNavigateTab: (tab: 'solutions' | 'ai-services' | 'infrastructure' | 'about' | 'case-studies') => void;
}

export const ArchitecturalPillars: React.FC<ArchitecturalPillarsProps> = ({ onNavigateTab }) => {
  const [activeModalPillar, setActiveModalPillar] = useState<ServicePillar | null>(null);

  const pillars: ServicePillar[] = [
    {
      id: 'infrastructure',
      title: 'Scalable Technology',
      icon: 'architecture',
      summary: 'We build solutions on modern, cloud-ready infrastructure — designed to grow with your organization without fragility.',
      fullDescription: 'Every system we build is architected to scale reliably. We use cloud-native tools, containerization, and CI/CD pipelines to ensure your software can handle growth without requiring costly rewrites.',
      capabilities: [
        'Cloud deployment on AWS, GCP, or Azure',
        'Containerized apps using Docker & Kubernetes',
        'Automated CI/CD for rapid, safe releases',
        'High availability architecture design',
        'Performance monitoring and alerting',
      ],
      metrics: [],
    },
    {
      id: 'ai-services',
      title: 'Applied Intelligence',
      icon: 'smart_toy',
      summary: 'We integrate AI into real workflows — not demos. From predictive analytics to automation, AI that actually works for your organization.',
      fullDescription: 'We design and deploy AI systems tailored to your specific domain and data. Whether it\'s predictive maintenance, demand forecasting, document intelligence, or workflow automation — we build AI that creates measurable operational value.',
      capabilities: [
        'Custom AI model development and fine-tuning',
        'Predictive analytics and forecasting systems',
        'Natural language processing for documents',
        'AI workflow automation with human oversight',
        'Ongoing model monitoring and improvement',
      ],
      metrics: [],
    },
    {
      id: 'security',
      title: 'Secure by Design',
      icon: 'shield_lock',
      summary: 'Security and data privacy are built into every solution from the start — not added as an afterthought.',
      fullDescription: 'We follow secure software development practices at every layer. Your data stays private, access is controlled, and systems are built to protect sensitive information — especially important for government and institutional clients.',
      capabilities: [
        'End-to-end data encryption in transit and at rest',
        'Role-based access control for all systems',
        'Secure API design and authentication',
        'Data privacy by design principles',
        'Regular security reviews and best practices',
      ],
      metrics: [],
    },
  ];

  return (
    <section className="py-20 md:py-28 px-5 md:px-12 bg-[#fff1ed]/50 border-t border-b border-[#004900]/10">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-headline text-3xl md:text-[32px] font-semibold text-[#2c160e] mb-3 md:mb-4 tracking-tight">
            Our Core Strengths
          </h2>
          <p className="font-body text-base md:text-lg text-[#404a3b] max-w-2xl mx-auto leading-relaxed">
            Three pillars that define how we design and deliver every solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => setActiveModalPillar(pillar)}
              className="bg-white border border-[#004900]/10 p-8 sm:p-10 rounded-xl hover:border-[#004900]/40 transition-all duration-300 group cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#ffe2da] flex items-center justify-center mb-6 group-hover:bg-[#006400] transition-colors duration-300 shadow-xs">
                  <span className="material-symbols-outlined text-2xl text-[#004900] group-hover:text-white transition-colors duration-300">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-[#2c160e] mb-3 group-hover:text-[#006400] transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-body text-[16px] text-[#404a3b] leading-relaxed mb-6">
                  {pillar.summary}
                </p>
              </div>
              <div className="pt-4 border-t border-[#004900]/10 flex items-center justify-between text-[#006400] font-label text-sm font-semibold">
                <span className="group-hover:underline">Learn More</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModalPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-xl border border-[#004900]/20 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalPillar(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-lg bg-[#006400] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">{activeModalPillar.icon}</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#2c160e]">
                {activeModalPillar.title}
              </h3>
            </div>

            <p className="font-body text-base text-[#404a3b] leading-relaxed mb-6">
              {activeModalPillar.fullDescription}
            </p>

            <h4 className="font-headline text-base font-semibold text-[#2c160e] mb-3">
              What We Deliver
            </h4>
            <div className="space-y-2.5 mb-8">
              {activeModalPillar.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#006400] shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-[#404a3b]">{cap}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={() => {
                  const targetTab = activeModalPillar.id === 'ai-services' ? 'ai-services' : activeModalPillar.id === 'infrastructure' ? 'infrastructure' : 'solutions';
                  setActiveModalPillar(null);
                  onNavigateTab(targetTab);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#006400] text-white py-3 px-5 rounded-sm font-label text-sm font-medium hover:bg-[#004d00] transition-colors"
              >
                <span>Explore {activeModalPillar.title}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button
                onClick={() => setActiveModalPillar(null)}
                className="px-5 py-3 rounded-sm border border-stone-300 text-stone-700 font-label text-sm hover:bg-stone-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

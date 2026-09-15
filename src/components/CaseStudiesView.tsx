import React, { useState } from 'react';
import { ArrowRight, Clock, Compass, Lightbulb, CheckCircle2, Mail } from 'lucide-react';

interface PilotProject {
  id: string;
  status: 'active' | 'exploring' | 'upcoming';
  sector: string;
  title: string;
  summary: string;
  highlights: string[];
}

interface CaseStudiesViewProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onOpenConsultation }) => {
  const projects: PilotProject[] = [
    {
      id: 'tnstc',
      status: 'active',
      sector: 'Public Transport',
      title: 'TNSTC — AI-Powered Transport Optimization',
      summary:
        'Sagiya Ventures is developing an AI platform for Tamil Nadu State Transport Corporation (TNSTC) to optimize fleet operations, and improve passenger experience across 21,678 buses and 320 depots statewide.',
      highlights: [
        'AI-based dynamic route and schedule optimization',
        'Predictive maintenance to reduce bus breakdowns',
        'Real-time passenger demand forecasting',
        'Fuel consumption analytics and cost reduction',
        'Driver performance monitoring and safety alerts',
        'Revenue leakage detection using AI ticketing analytics',
      ],

    },
    {
      id: 'transport',
      status: 'exploring',
      sector: 'Government Transport',
      title: 'State Transport Corporations — Pan-India Expansion',
      summary:
        'Following the TNSTC pilot, Sagiya Ventures plans to expand its AI transport platform to other state transport corporations across India, bringing the same solutions to more public sector operators.',
      highlights: [
        'Replicable AI modules from TNSTC pilot',
        'Scalable architecture for multi-state deployment',
        'Localization for regional languages and operations',
      ],

    },
    {
      id: 'smartcity',
      status: 'upcoming',
      sector: 'Smart City / EdTech-AI',
      title: 'Smart City Infrastructure & EdTech-AI',
      summary:
        'Sagiya Ventures is exploring AI applications for Smart City management systems and Education Technology — bringing intelligent automation, analytics, and personalized learning to urban governance and schools.',
      highlights: [
        'Smart City: AI dashboards for civic infrastructure monitoring',
        'Smart City: Predictive analytics for utilities and traffic',
        'EdTech-AI: Personalized learning path generation',
        'EdTech-AI: Student performance prediction and intervention',
        'EdTech-AI: Tamil language AI tutoring models',
      ],

    },
  ];

  const [selected, setSelected] = useState<PilotProject>(projects[0]);

  const statusConfig = {
    active: { label: 'Active Pilot', color: 'bg-[#fff8f6] text-[#006400] border-[#006400]/25' },
    exploring: { label: 'Exploring', color: 'bg-[#fff1ed] text-[#a67a00] border-[#ffdbd0]' },
    upcoming: { label: 'Upcoming', color: 'bg-stone-100 text-stone-600 border-stone-300' },
  };

  const statusIcon = {
    active: <CheckCircle2 className="w-4 h-4" />,
    exploring: <Compass className="w-4 h-4" />,
    upcoming: <Lightbulb className="w-4 h-4" />,
  };

  return (
    <div className="pt-8 pb-24 px-5 md:px-12 max-w-[1280px] mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#ffdbd0]/30 border border-[#bfcab7] px-4 py-1.5 rounded-full w-fit mb-4">
          <span className="w-2 h-2 rounded-full bg-[#006400]"></span>
          <span className="font-label text-xs tracking-widest text-[#004900] uppercase font-semibold">
            Our Work
          </span>
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-[#2c160e] tracking-tight mb-4">
          Pilot Projects &amp; Upcoming Initiatives
        </h1>
        <p className="font-body text-lg text-[#404a3b] leading-relaxed">
          Sagiya Ventures is building from the ground up — starting with a real pilot, expanding with purpose. Every project is honest, transparent, and designed to create lasting impact.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left: Project List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-label uppercase tracking-widest text-[#707a6a] font-semibold px-1 mb-2">
            Projects
          </div>
          {projects.map((project) => {
            const isSelected = selected.id === project.id;
            const sc = statusConfig[project.status];
            return (
              <button
                key={project.id}
                onClick={() => setSelected(project)}
                className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#006400] bg-[#006400] text-white shadow-md'
                    : 'border-stone-200 bg-white text-[#2c160e] hover:border-[#006400]/30 hover:bg-[#fff8f6]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-label font-semibold border ${
                      isSelected ? 'bg-white/20 text-white border-white/30' : sc.color
                    }`}
                  >
                    {statusIcon[project.status]}
                    {sc.label}
                  </span>
                </div>
                <div className="font-label text-[11px] uppercase tracking-wider mb-1 opacity-70">
                  {project.sector}
                </div>
                <div className="font-headline text-base font-bold">{project.title}</div>
              </button>
            );
          })}
        </div>

        {/* Right: Detail */}
        <div className="lg:col-span-8 bg-white border border-[#004900]/15 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="pb-6 border-b border-[#004900]/10 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label font-semibold border ${statusConfig[selected.status].color}`}
              >
                {statusIcon[selected.status]}
                {statusConfig[selected.status].label}
              </span>
              <span className="font-label text-xs text-[#707a6a] uppercase tracking-wider">
                {selected.sector}
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e] mb-3">
              {selected.title}
            </h2>
            <p className="font-body text-base text-[#404a3b] leading-relaxed">
              {selected.summary}
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="font-headline text-base font-bold text-[#2c160e] mb-3">
              Key Focus Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selected.highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#fff8f6] border border-[#004900]/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#006400] shrink-0 mt-0.5" />
                  <span className="font-body text-xs text-[#404a3b]">{hl}</span>
                </div>
              ))}
            </div>
          </div>



          {/* CTA */}
          <div className="pt-4 border-t border-stone-200 flex justify-end">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#004d00] transition-colors"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-[#fff8f6] border border-[#004900]/15 rounded-2xl p-10 shadow-xs">
        <h2 className="font-headline text-2xl font-bold text-[#2c160e] mb-2">
          Have a project in mind?
        </h2>
        <p className="font-body text-base text-[#404a3b] mb-6 max-w-xl mx-auto">
          Whether you're a government body, institution, or enterprise — Sagiya Ventures is open to conversations about how AI can work for you.
        </p>
        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-8 py-3.5 rounded-sm hover:bg-[#004d00] transition-colors shadow-sm"
        >
          <Mail className="w-4 h-4" />
          <span>Start a Conversation</span>
        </button>
      </div>
    </div>
  );
};

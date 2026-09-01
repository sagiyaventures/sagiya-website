import React from 'react';
import { Cloud, Code2, Brain, Shield, Database, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

interface InfrastructureViewProps {
  onOpenConsultation: () => void;
  onOpenTelemetry: () => void;
}

export const InfrastructureView: React.FC<InfrastructureViewProps> = ({ onOpenConsultation }) => {
  const techCategories = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI & Machine Learning',
      description: 'Core AI frameworks and tools we use to build intelligent solutions.',
      tools: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'LangChain', 'Hugging Face'],
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Application Development',
      description: 'Modern frameworks for building fast, scalable web and mobile applications.',
      tools: ['React', 'TypeScript', 'Node.js', 'Next.js', 'FastAPI', 'REST APIs', 'GraphQL'],
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud & Deployment',
      description: 'Cloud platforms and DevOps tools for reliable, scalable deployment.',
      tools: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Linux'],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data & Storage',
      description: 'Databases and data processing tools for managing and analyzing data at scale.',
      tools: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'Apache Kafka', 'Pandas'],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Security practices and tools we follow to keep client data safe.',
      tools: ['HTTPS / TLS Encryption', 'Role-Based Access Control', 'Secure API Design', 'Data Privacy by Design', 'Regular Security Audits'],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Data Visualization & Dashboards',
      description: 'Tools for turning complex data into clear, actionable dashboards.',
      tools: ['Power BI', 'Grafana', 'Chart.js', 'D3.js', 'Tableau', 'Custom React Dashboards'],
    },
  ];

  const principles = [
    {
      title: 'Build for Real Needs',
      desc: 'We select the right technology for each problem — not the trendiest one.',
    },
    {
      title: 'Security First',
      desc: 'Data privacy and secure design are built in from day one, not bolted on later.',
    },
    {
      title: 'Scalable by Default',
      desc: 'Solutions are designed to grow with your organization without requiring full rebuilds.',
    },
    {
      title: 'Transparent & Maintainable',
      desc: 'Clean code, good documentation, and systems your team can understand and own.',
    },
  ];

  return (
    <div className="pt-8 pb-24 px-5 md:px-12 max-w-[1280px] mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#ffdbd0]/30 border border-[#bfcab7] px-4 py-1.5 rounded-full w-fit mb-4">
          <span className="w-2 h-2 rounded-full bg-[#006400]"></span>
          <span className="font-label text-xs tracking-widest text-[#004900] uppercase font-semibold">
            How We Build
          </span>
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-[#2c160e] tracking-tight mb-4">
          Our Technology Stack
        </h1>
        <p className="font-body text-lg text-[#404a3b] leading-relaxed">
          We use proven, modern technologies to build reliable AI and software solutions. No unnecessary complexity — the right tool for the right job.
        </p>
      </div>

      {/* Tech Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {techCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#004900]/15 p-8 rounded-xl hover:border-[#004900]/40 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#ffe2da] flex items-center justify-center text-[#006400] mb-5 group-hover:bg-[#006400] group-hover:text-white transition-colors duration-300">
              {cat.icon}
            </div>
            <h3 className="font-headline text-xl font-bold text-[#2c160e] mb-2 group-hover:text-[#006400] transition-colors">
              {cat.title}
            </h3>
            <p className="font-body text-sm text-[#404a3b] leading-relaxed mb-5">
              {cat.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#004900]/10">
              {cat.tools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded bg-[#006400]/10 text-[#006400] font-label text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Principles */}
      <div className="bg-[#fff1ed]/70 border border-[#004900]/20 rounded-2xl p-8 md:p-12 mb-16 shadow-xs">
        <div className="text-center mb-10">
          <span className="font-label text-xs uppercase tracking-wider text-[#006400] font-semibold">
            How We Think
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e] mt-1">
            Engineering Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-[#004900]/10 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-[#006400] shrink-0 mt-0.5" />
              <div>
                <div className="font-headline text-base font-bold text-[#2c160e] mb-1">{p.title}</div>
                <p className="font-body text-sm text-[#404a3b] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 md:p-12 bg-[#006400] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="max-w-xl">
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2">
            Want to know if we're the right technical fit?
          </h3>
          <p className="font-body text-white/80 text-sm md:text-base">
            Let's talk about your project. We'll give you an honest answer about what's possible and how we'd approach it.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="shrink-0 bg-white text-[#006400] hover:bg-[#fff8f6] font-label font-bold text-sm px-8 py-3.5 rounded-sm transition-colors shadow-xs inline-flex items-center gap-2"
        >
          <span>Start a Conversation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Cpu, Zap, Gauge, ShieldCheck, ArrowDown, ChevronDown, CheckCircle2, FileText, Factory, Mail } from 'lucide-react';
import { PpuDieBlueprint } from './PpuDieBlueprint';
import photonicsCardImg from '../assets/photonics-card.png';
import {
  TELEMETRY_METRICS,
  CHIP_VARIANTS,
  HARDWARE_COMPARISONS,
  MAX_TOPS_PER_WATT,
  MATURATION_MILESTONES,
} from '../data/photonicsData';

interface PhotonicsViewProps {
  onOpenConsultation: () => void;
}

const ICONS = { clock: Zap, cpu: Cpu, gauge: Gauge, yield: ShieldCheck };

export const PhotonicsView: React.FC<PhotonicsViewProps> = ({ onOpenConsultation }) => {
  const [showDieExplorer, setShowDieExplorer] = useState(false);

  const scrollToMetrics = () => {
    document.getElementById('photonics-metrics')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-8 pb-24 px-5 md:px-12 max-w-[1280px] mx-auto animate-in fade-in duration-300">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-20">
        {/* Left Column */}
        <div className="lg:col-span-6 z-10 flex flex-col gap-6 md:gap-7">
          <div className="inline-flex items-center gap-2 bg-[#ffdbd0]/30 border border-[#bfcab7] px-4 py-1.5 rounded-full w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006400] animate-pulse"></span>
            <span className="font-label text-xs tracking-widest text-[#004900] uppercase font-semibold">
              Pre-Seed &middot; Patent Filed &middot; Pre-Silicon
            </span>
          </div>

          <div>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#2c160e] tracking-tight leading-tight">
              Sagiya <span className="text-[#006400]">Photonics</span>
            </h1>
            <p className="font-headline text-xl md:text-2xl font-medium text-[#006400] mt-2">
              AI Inference at the Speed of Light
            </p>
          </div>

          <p className="font-body text-lg md:text-[18px] text-[#404a3b] leading-relaxed max-w-xl">
            The Sagiya Photonic Processing Unit (PPU) performs matrix-vector multiplication by
            guiding light through engineered Mach-Zehnder Interferometer (MZI) meshes on standard
            silicon-on-insulator (SOI) — instead of routing electrons through transistors. In
            simulation, our PPU-v16 design targets <strong className="text-[#2c160e]">5.12 TOPS at
            0.82–1.26 TOPS/W</strong>, ahead of NVIDIA A100's measured 0.78 TOPS/W.
          </p>

          <div className="p-4 sm:p-5 rounded-md bg-[#fff1ed] border border-[#ffdbd0] flex items-start gap-3.5 max-w-xl">
            <div className="p-1.5 rounded bg-white border border-[#ffdbd0] shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-[#006400]" />
            </div>
            <p className="text-xs sm:text-[13px] font-body text-[#2c160e] leading-relaxed">
              <strong className="font-semibold">Status:</strong> Pre-silicon. Design and optical
              compiler have completed simulation and Monte Carlo phase-tolerance testing. The
              chip has not yet been fabricated or measured on real silicon.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={scrollToMetrics}
              className="inline-flex items-center justify-center gap-2 bg-[#006400] text-white font-label text-[14px] px-8 py-3.5 rounded-sm hover:bg-[#004d00] transition-all duration-200 shadow-sm font-medium tracking-wide group active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Architecture</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#006400] text-[#006400] font-label text-[14px] px-8 py-3.5 rounded-sm hover:bg-[#006400]/5 active:scale-[0.98] transition-colors duration-200 font-medium tracking-wide cursor-pointer"
            >
              <span>View Specs &amp; Simulations</span>
              <FileText className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Product Concept Render — sized/framed to match the Solutions page hero image */}
        <div className="lg:col-span-6 relative mt-4 lg:mt-0 flex flex-col items-center">
          <div className="relative w-full h-[300px] sm:h-[340px] lg:h-[360px]">
            <div className="relative w-full h-full rounded-2xl border border-[#006400]/15 overflow-hidden shadow-sm group bg-[#f0f8f0]">
              <img
                src={photonicsCardImg}
                alt="Sagiya Photonics PPU accelerator card — design concept render"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={720}
                height={360}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-[#ffe2da] to-transparent rounded-full blur-3xl opacity-50 scale-110 translate-x-8 translate-y-8 pointer-events-none" />
          </div>
          <p className="font-label text-[10px] text-[#707a6a] text-center mt-2 tracking-wide uppercase">
            Design Concept Render — Pre-Silicon
          </p>
        </div>
      </section>

      {/* Interactive Die Explorer — collapsible */}
      <section className="mb-20">
        <button
          onClick={() => setShowDieExplorer((v) => !v)}
          aria-expanded={showDieExplorer}
          className="w-full flex items-center justify-between gap-4 bg-white border border-[#004900]/15 hover:border-[#004900]/40 transition-all duration-300 shadow-xs hover:shadow-md rounded-xl p-6 md:p-7 text-left cursor-pointer"
        >
          <div>
            <span className="font-label text-xs uppercase tracking-wider text-[#006400] font-semibold">
              Interactive
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e] mt-1">
              Explore the PPU Die
            </h2>
            <p className="font-body text-sm text-[#404a3b] mt-2">
              Click to {showDieExplorer ? 'hide' : 'view'} the labeled die diagram and inspect simulated specs.
            </p>
          </div>
          <div className="shrink-0 w-11 h-11 rounded-lg bg-[#ffe2da] flex items-center justify-center text-[#006400]">
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showDieExplorer ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {showDieExplorer && (
          <div className="mt-6 animate-in fade-in duration-300">
            <PpuDieBlueprint onExpand={scrollToMetrics} />
          </div>
        )}
      </section>

      {/* Key Metrics */}
      <section id="photonics-metrics" className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-label text-xs uppercase tracking-wider text-[#006400] font-semibold">
            Simulation Results
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e] mt-1">
            Physical Simulation Benchmarks
          </h2>
          <p className="font-body text-sm text-[#404a3b] mt-2">
            FDTD &amp; SPICE validated · pre-silicon simulation results
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TELEMETRY_METRICS.map((m) => {
            const Icon = ICONS[m.icon];
            return (
              <div
                key={m.label}
                className="bg-white border border-[#004900]/15 p-6 rounded-xl hover:border-[#004900]/40 transition-all duration-300 shadow-xs hover:shadow-md text-center group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#ffe2da] flex items-center justify-center mx-auto mb-4 text-[#006400] group-hover:bg-[#006400] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-headline text-2xl md:text-3xl font-bold mb-1 text-[#2c160e]">{m.value}</div>
                <div className="font-label text-[11px] text-[#707a6a] leading-snug">{m.label}</div>
                <p className="font-body text-xs text-[#404a3b] mt-3 pt-3 border-t border-[#004900]/10">{m.description}</p>
                <div className="font-label text-[10px] text-[#006400] mt-2 uppercase tracking-wider font-semibold">{m.tag}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Physics / Data Path */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
        <div className="lg:col-span-6 space-y-4">
          <span className="font-label text-xs uppercase tracking-wider text-[#006400] font-semibold block">
            Underlying Physics
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e]">
            What is a Photonic Processing Unit (PPU)?
          </h2>
          <p className="font-body text-[#404a3b] leading-relaxed">
            Conventional processors hit a power wall running deep learning workloads: charging
            and discharging billions of copper interconnects generates heat and throttling. The
            Sagiya PPU takes a different path — continuous laser light enters silicon waveguides
            where a mesh of Mach-Zehnder interferometers shifts light phases in parallel, and wave
            interference performs the matrix multiplication directly, in the analog domain.
          </p>
          <div className="p-5 rounded-lg bg-[#fff1ed]/70 border border-[#004900]/20 space-y-1.5">
            <div className="flex items-center gap-2 text-[#006400] font-headline font-bold text-base">
              <Zap className="w-5 h-5" />
              <span>Passive Optical Compute</span>
            </div>
            <p className="font-body text-sm text-[#404a3b] leading-relaxed">
              Weight matrices are compiled directly onto the optical mesh — no instruction
              pipeline stalls, and no model retraining required.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-white rounded-xl p-6 border border-[#004900]/15 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#004900]/10 pb-3 mb-5 font-label">
              <span className="text-xs font-bold tracking-wider text-[#006400] uppercase">Inference Data Path</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { n: '01', title: 'Neural Network', sub: 'Trained weights & graph' },
                { n: '02', title: 'ONN Compiler', sub: 'Phase decomposition' },
                { n: '03', title: 'PPU Chip', sub: 'MZI optical matrix', highlight: true },
                { n: '04', title: 'Result', sub: '< 1 ns total latency' },
              ].map((step) => (
                <div
                  key={step.title}
                  className={`p-3.5 rounded-md flex flex-col justify-between h-[120px] ${
                    step.highlight ? 'bg-[#006400] text-white' : 'bg-[#fff8f6] border border-[#004900]/10'
                  }`}
                >
                  <div>
                    <span className={`font-mono text-xs font-bold block mb-1 ${step.highlight ? 'text-white/60' : 'text-[#707a6a]'}`}>{step.n}</span>
                    <h4 className={`font-headline text-sm font-bold ${step.highlight ? 'text-white' : 'text-[#2c160e]'}`}>{step.title}</h4>
                  </div>
                  <span className={`text-[11px] font-body ${step.highlight ? 'text-white/80' : 'text-[#404a3b]'}`}>{step.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chip Variants */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-label text-xs uppercase tracking-wider text-[#006400] font-semibold">Scalable Topologies</span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e] mt-1">PPU Chip Variants</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHIP_VARIANTS.map((v) => (
            <div
              key={v.id}
              className={`relative bg-white rounded-xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md ${
                v.isPrimary ? 'border-2 border-[#006400] ring-4 ring-[#006400]/5' : 'border border-[#004900]/15 hover:border-[#004900]/40'
              }`}
            >
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="font-headline text-xl font-bold text-[#2c160e]">{v.name}</h3>
                  <span
                    className={`font-label text-[11px] font-semibold px-2.5 py-1 rounded flex items-center gap-1.5 ${
                      v.statusType === 'planned' ? 'bg-[#fff1ed] text-[#a67a00] border border-[#ffdbd0]' : 'bg-[#fff8f6] text-[#006400] border border-[#006400]/20'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${v.statusType === 'planned' ? 'bg-[#c9a227]' : 'bg-[#006400]'}`} />
                    {v.statusBadge}
                  </span>
                </div>
                <p className="font-body text-sm text-[#404a3b] leading-relaxed">{v.description}</p>
                <div className="space-y-2.5 pt-3 border-t border-[#004900]/10 font-body text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#707a6a]">Matrix</span>
                    <span className="font-semibold text-[#2c160e] font-mono text-xs">{v.specs.matrixArchitecture}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#707a6a]">MZI Count</span>
                    <span className="font-semibold text-[#2c160e] font-mono text-xs">{v.specs.mziCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#707a6a]">Die Area</span>
                    <span className="font-semibold text-[#2c160e] font-mono text-xs">{v.specs.dieFootprint}</span>
                  </div>
                </div>
              </div>
              <div className={`px-8 py-3 border-t text-xs font-label font-semibold ${v.isPrimary ? 'bg-[#fff8f6] border-[#006400]/20 text-[#006400]' : 'bg-[#fafaf8] border-[#004900]/10 text-[#707a6a]'}`}>
                {v.classification}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Competition Comparison */}
      <section className="bg-[#fff1ed]/70 border border-[#004900]/20 rounded-2xl p-8 md:p-12 mb-16 shadow-xs">
        <div className="text-center mb-10">
          <span className="font-label text-xs uppercase tracking-wider text-[#006400] font-semibold">Benchmarks</span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e] mt-1">
            Simulated Performance vs. Published Hardware
          </h2>
          <p className="font-body text-sm text-[#404a3b] mt-2 max-w-xl mx-auto">
            PPU-v16 figures are pre-silicon simulation results, not yet independently benchmarked
            on fabricated hardware. Competitor figures are their publicly published, measured specs.
          </p>
        </div>
        <div className="max-w-[700px] mx-auto space-y-4">
          {HARDWARE_COMPARISONS.map((row) => (
            <div key={row.id} className="flex items-center gap-4">
              <div className={`w-36 shrink-0 font-label text-sm ${row.highlight ? 'text-[#006400] font-semibold' : 'text-[#404a3b]'}`}>
                {row.name}
              </div>
              <div className="flex-1 h-8 bg-white rounded-full overflow-hidden relative border border-[#004900]/10">
                <div
                  style={{ width: `${(row.topsPerWatt / MAX_TOPS_PER_WATT) * 100}%` }}
                  className={`h-full rounded-full ${row.highlight ? 'bg-gradient-to-r from-[#006400] to-[#3a9d3a]' : 'bg-[#bfcab7]'}`}
                />
              </div>
              <div className={`w-20 shrink-0 text-right font-label text-sm ${row.highlight ? 'text-[#006400] font-semibold' : 'text-[#707a6a]'}`}>
                {row.display}{row.highlight && ' ✅'}
              </div>
            </div>
          ))}
        </div>
        <p className="font-label text-[11px] text-[#707a6a] text-center mt-6">
          TOPS/W shown above (higher is more power-efficient). Standard electronic benchmarks are
          compiled from manufacturer-published specs at standard TDP limits.
        </p>
      </section>

      {/* IP & Status */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
        <div className="lg:col-span-5 space-y-5">
          <span className="font-label text-xs uppercase tracking-wider text-[#006400] font-semibold block">Technical Maturation</span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e] leading-tight">
            IP &amp; Development Status
          </h2>
          <p className="font-body text-[#404a3b] leading-relaxed text-sm">
            Every step toward tape-out has been engineered against commercial process design kits,
            minimizing optical cross-talk while maintaining thermal phase stability.
          </p>
          <div className="p-5 rounded-lg bg-[#fff1ed]/70 border border-[#004900]/20 space-y-3">
            <div className="flex items-center gap-2.5 text-[#2c160e]">
              <div className="p-2 rounded bg-white border border-[#004900]/10">
                <Factory className="w-5 h-5 text-[#006400]" />
              </div>
              <h4 className="font-headline text-base font-bold">Current Foundry Target</h4>
            </div>
            <p className="font-body text-sm text-[#404a3b] leading-relaxed">
              Actively seeking a university or commercial MPW (Multi-Project Wafer) fab partner
              for physical tape-out.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-3">
          {MATURATION_MILESTONES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 border border-[#004900]/15 hover:border-[#004900]/40 transition-all duration-300 shadow-xs hover:shadow-md flex items-start gap-3.5"
            >
              <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[#ffe2da] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#006400]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                  <h4 className="font-headline text-sm font-bold text-[#2c160e]">{item.title}</h4>
                  <span className="font-label text-[10px] font-bold tracking-wider uppercase bg-[#fff8f6] text-[#707a6a] border border-[#004900]/10 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>
                <p className="font-body text-xs text-[#404a3b] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / Collaborate CTA — matches the Infrastructure page's closing CTA band */}
      <section className="p-8 md:p-12 bg-[#006400] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="max-w-xl">
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2">
            Interested in Collaborating?
          </h3>
          <p className="font-body text-white/80 text-sm md:text-base">
            We are seeking university fab partners and research collaborators to help take the
            PPU from simulation to fabricated silicon. Reach us at sagiyaventures@gmail.com · +91 97900 97716.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="shrink-0 bg-white text-[#006400] hover:bg-[#fff8f6] font-label font-bold text-sm px-8 py-3.5 rounded-sm transition-colors shadow-xs inline-flex items-center gap-2"
        >
          <span>Contact Us</span>
          <Mail className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};

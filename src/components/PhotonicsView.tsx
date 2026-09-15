import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Gauge, ShieldCheck, ArrowRight, ArrowDown, CheckCircle2, FileText, Factory, Mail, Sparkles } from 'lucide-react';
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

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
});

const ICONS = { clock: Zap, cpu: Cpu, gauge: Gauge, yield: ShieldCheck };

export const PhotonicsView: React.FC<PhotonicsViewProps> = ({ onOpenConsultation }) => {
  const scrollToMetrics = () => {
    document.getElementById('photonics-metrics')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-[#2c160e] overflow-hidden">
      {/* Section 1 — Hero */}
      <section className="relative py-16 md:py-24 px-5 md:px-12 border-b border-[#004900]/10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] bg-[#ffe2da] rounded-full blur-[100px] opacity-60" />
          <div className="absolute top-1/3 right-[10%] w-[320px] h-[320px] bg-[#006400]/10 rounded-full blur-[90px]" />
        </div>

        <div className="relative max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdbd0]/30 border border-[#bfcab7] text-[#004900] font-label text-xs font-semibold tracking-wide uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Pre-Seed · Patent Filed · Pre-Silicon (Simulation Stage)
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-[#2c160e] leading-tight">
                Sagiya <span className="text-[#006400]">Photonics</span>
              </h1>
              <p className="font-headline text-xl md:text-2xl font-medium text-[#006400] mt-2">
                AI Inference at the Speed of Light
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-base md:text-[17px] text-[#404a3b] leading-relaxed"
            >
              The Sagiya Photonic Processing Unit (PPU) performs matrix-vector multiplication by
              guiding light through engineered Mach-Zehnder Interferometer (MZI) meshes on standard
              silicon-on-insulator (SOI) — instead of routing electrons through transistors. In
              simulation, our PPU-v16 design targets <strong className="text-[#2c160e]">5.12 TOPS at
              0.82–1.26 TOPS/W</strong>, ahead of NVIDIA A100's measured 0.78 TOPS/W.
            </motion.p>

            {/* Institutional Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 sm:p-5 rounded-md bg-[#fff1ed] border border-[#ffdbd0] flex items-start gap-3.5"
            >
              <div className="p-1.5 rounded bg-white border border-[#ffdbd0] shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-[#006400]" />
              </div>
              <p className="text-xs sm:text-[13px] font-body text-[#2c160e] leading-relaxed">
                <strong className="font-semibold">Status:</strong> Pre-silicon. Design and optical
                compiler have completed simulation and Monte Carlo phase-tolerance testing. The
                chip has not yet been fabricated or measured on real silicon.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <button
                onClick={scrollToMetrics}
                className="inline-flex items-center gap-2 bg-[#006400] hover:bg-[#004d00] text-white px-6 py-3 rounded-sm text-sm font-label font-semibold tracking-wide transition-colors shadow-sm"
              >
                <span>Explore Architecture</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#fff8f6] border border-[#006400]/30 text-[#004900] px-5 py-3 rounded-sm text-sm font-label font-semibold tracking-wide transition-colors"
              >
                <span>View Specs &amp; Simulations</span>
                <FileText className="w-4 h-4 text-[#006400]" />
              </button>
            </motion.div>
          </div>

          {/* Right: Product Concept Render */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#006400]/10 via-transparent to-[#ffdbd0]/30 rounded-xl blur-sm -z-10" />
              <div className="rounded-xl overflow-hidden border border-[#004900]/10 shadow-sm bg-[#0a1f2e]">
                <img
                  src={photonicsCardImg}
                  alt="Sagiya Photonics PPU accelerator card — design concept render"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-label text-[10px] text-[#707a6a] text-center mt-2 tracking-wide uppercase">
                Design Concept Render — Pre-Silicon
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1b — Interactive Die Explorer */}
      <section className="py-14 md:py-16 px-5 md:px-12 border-b border-[#004900]/10 bg-[#fff8f6]">
        <div className="max-w-[900px] mx-auto">
          <motion.div {...fadeUp} className="text-center mb-8">
            <span className="font-label text-xs font-bold tracking-[0.15em] uppercase text-[#006400] block mb-2">
              INTERACTIVE
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-[#2c160e]">
              Explore the PPU Die
            </h2>
            <p className="font-body text-sm text-[#707a6a] mt-2">
              Click a labeled region below to inspect its simulated specs.
            </p>
          </motion.div>
          <motion.div {...fadeUp}>
            <PpuDieBlueprint onExpand={scrollToMetrics} />
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Key Metrics */}
      <section id="photonics-metrics" className="py-16 md:py-20 px-5 md:px-12 border-b border-[#004900]/10 bg-[#fff8f6]">
        <div className="max-w-[1100px] mx-auto">
          <motion.h2 {...fadeUp} className="font-headline text-2xl md:text-3xl font-semibold mb-2 text-center text-[#2c160e]">
            Physical Simulation Benchmarks
          </motion.h2>
          <motion.p {...fadeUp} className="font-body text-sm text-[#707a6a] text-center mb-10">
            FDTD &amp; SPICE validated · pre-silicon simulation results
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {TELEMETRY_METRICS.map((m, i) => {
              const Icon = ICONS[m.icon];
              return (
                <motion.div
                  key={m.label}
                  {...stagger(i)}
                  whileHover={{ y: -4 }}
                  className="relative bg-white border border-[#004900]/10 rounded-xl p-5 md:p-6 text-center group transition-all hover:border-[#006400]/30 hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#006400]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#006400]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#006400]" />
                  </div>
                  <div className="font-headline text-2xl md:text-3xl font-bold mb-1 text-[#2c160e]">{m.value}</div>
                  <div className="font-label text-[11px] text-[#707a6a] leading-snug">{m.label}</div>
                  <p className="font-body text-xs text-[#404a3b] mt-2 pt-2 border-t border-[#004900]/10">{m.description}</p>
                  <div className="font-label text-[10px] text-[#006400] mt-2 uppercase tracking-wider font-semibold">{m.tag}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 — Physics / Data Path */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-[#004900]/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div {...fadeUp} className="lg:col-span-6 space-y-4">
            <span className="font-label text-xs font-bold tracking-[0.15em] uppercase text-[#006400] block">
              UNDERLYING PHYSICS
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-[#2c160e]">
              What is a Photonic Processing Unit (PPU)?
            </h2>
            <p className="font-body text-[#404a3b] leading-relaxed">
              Conventional processors hit a power wall running deep learning workloads: charging
              and discharging billions of copper interconnects generates heat and throttling. The
              Sagiya PPU takes a different path — continuous laser light enters silicon waveguides
              where a mesh of Mach-Zehnder interferometers shifts light phases in parallel, and wave
              interference performs the matrix multiplication directly, in the analog domain.
            </p>
            <div className="p-5 rounded-lg bg-[#fff8f6] border border-[#006400]/15 space-y-1.5">
              <div className="flex items-center gap-2 text-[#006400] font-headline font-bold text-base">
                <Zap className="w-5 h-5" />
                <span>Passive Optical Compute</span>
              </div>
              <p className="font-body text-sm text-[#404a3b] leading-relaxed">
                Weight matrices are compiled directly onto the optical mesh — no instruction
                pipeline stalls, and no model retraining required.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-6">
            <div className="bg-white rounded-lg p-6 border border-[#004900]/10 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#004900]/10 pb-3 mb-5 font-label">
                <span className="text-xs font-bold tracking-wider text-[#006400] uppercase">Inference Data Path</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { n: '01', title: 'Neural Network', sub: 'Trained weights & graph' },
                  { n: '02', title: 'ONN Compiler', sub: 'Phase decomposition' },
                  { n: '03', title: 'PPU Chip', sub: 'MZI optical matrix', highlight: true },
                  { n: '04', title: 'Result', sub: '< 1 ns total latency' },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    {...stagger(i)}
                    className={`p-3.5 rounded-md flex flex-col justify-between h-[120px] ${
                      step.highlight ? 'bg-[#006400] text-white' : 'bg-[#fff8f6] border border-[#004900]/10'
                    }`}
                  >
                    <div>
                      <span className={`font-mono text-xs font-bold block mb-1 ${step.highlight ? 'text-white/60' : 'text-[#707a6a]'}`}>{step.n}</span>
                      <h4 className={`font-headline text-sm font-bold ${step.highlight ? 'text-white' : 'text-[#2c160e]'}`}>{step.title}</h4>
                    </div>
                    <span className={`text-[11px] font-body ${step.highlight ? 'text-white/80' : 'text-[#404a3b]'}`}>{step.sub}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Chip Variants */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-[#004900]/10 bg-[#fff8f6]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12 space-y-1.5">
            <span className="font-label text-xs font-bold tracking-[0.15em] uppercase text-[#006400] block">SCALABLE TOPOLOGIES</span>
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-[#2c160e]">PPU Chip Variants</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHIP_VARIANTS.map((v, i) => (
              <motion.div
                key={v.id}
                {...stagger(i)}
                whileHover={{ y: -6 }}
                className={`relative bg-white rounded-xl overflow-hidden transition-all ${
                  v.isPrimary ? 'border-2 border-[#006400] shadow-sm ring-4 ring-[#006400]/5' : 'border border-[#004900]/10 hover:border-[#006400]/30'
                }`}
              >
                <div className="p-6 space-y-4">
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
                <div className={`px-6 py-3 border-t text-xs font-label font-semibold ${v.isPrimary ? 'bg-[#fff8f6] border-[#006400]/20 text-[#006400]' : 'bg-[#fafaf8] border-[#004900]/10 text-[#707a6a]'}`}>
                  {v.classification}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Competition Comparison */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-[#004900]/10">
        <div className="max-w-[900px] mx-auto">
          <motion.h2 {...fadeUp} className="font-headline text-2xl md:text-3xl font-semibold mb-3 text-center text-[#2c160e]">
            Simulated Performance vs. Published Hardware
          </motion.h2>
          <motion.p {...fadeUp} className="font-body text-sm text-[#707a6a] text-center mb-10 max-w-xl mx-auto">
            PPU-v16 figures are pre-silicon simulation results, not yet independently benchmarked
            on fabricated hardware. Competitor figures are their publicly published, measured specs.
          </motion.p>
          <div className="space-y-4">
            {HARDWARE_COMPARISONS.map((row, i) => (
              <motion.div key={row.id} {...stagger(i)} className="flex items-center gap-4">
                <div className={`w-36 shrink-0 font-label text-sm ${row.highlight ? 'text-[#006400] font-semibold' : 'text-[#404a3b]'}`}>
                  {row.name}
                </div>
                <div className="flex-1 h-8 bg-[#fff1ed] rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(row.topsPerWatt / MAX_TOPS_PER_WATT) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                    className={`h-full rounded-full ${row.highlight ? 'bg-gradient-to-r from-[#006400] to-[#3a9d3a]' : 'bg-[#bfcab7]'}`}
                  />
                </div>
                <div className={`w-20 shrink-0 text-right font-label text-sm ${row.highlight ? 'text-[#006400] font-semibold' : 'text-[#707a6a]'}`}>
                  {row.display}{row.highlight && ' ✅'}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="font-label text-[11px] text-[#707a6a] text-center mt-6">
            TOPS/W shown above (higher is more power-efficient). Standard electronic benchmarks are
            compiled from manufacturer-published specs at standard TDP limits.
          </p>
        </div>
      </section>

      {/* Section 6 — IP & Status */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-[#004900]/10 bg-[#fff8f6]">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div {...fadeUp} className="lg:col-span-5 space-y-5">
            <span className="font-label text-xs font-bold tracking-[0.15em] uppercase text-[#006400] block">TECHNICAL MATURATION</span>
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-[#2c160e] leading-tight">
              IP &amp; Development Status
            </h2>
            <p className="font-body text-[#404a3b] leading-relaxed text-sm">
              Every step toward tape-out has been engineered against commercial process design kits,
              minimizing optical cross-talk while maintaining thermal phase stability.
            </p>
            <div className="p-5 rounded-lg bg-white border border-[#004900]/10 space-y-3">
              <div className="flex items-center gap-2.5 text-[#2c160e]">
                <div className="p-2 rounded bg-[#fff8f6] border border-[#004900]/10">
                  <Factory className="w-5 h-5 text-[#006400]" />
                </div>
                <h4 className="font-headline text-base font-bold">Current Foundry Target</h4>
              </div>
              <p className="font-body text-sm text-[#404a3b] leading-relaxed">
                Actively seeking a university or commercial MPW (Multi-Project Wafer) fab partner
                for physical tape-out.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-3">
            {MATURATION_MILESTONES.map((item, i) => (
              <motion.div key={item.id} {...stagger(i)} className="bg-white rounded-md p-4 border border-[#004900]/10 hover:border-[#006400]/25 transition-colors flex items-start gap-3.5">
                <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[#fff8f6] border border-[#006400]/25 flex items-center justify-center">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Contact / Collaborate */}
      <section className="relative py-20 md:py-28 px-5 md:px-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ffe2da] rounded-full blur-[100px] opacity-50" />
        </div>
        <motion.div {...fadeUp} className="relative max-w-[700px] mx-auto text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-4 text-[#2c160e]">
            Interested in Collaborating?
          </h2>
          <p className="font-body text-[#404a3b] mb-8 leading-relaxed">
            We are seeking university fab partners and research collaborators to help take the
            PPU from simulation to fabricated silicon.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-7 py-3.5 rounded-sm shadow-sm hover:bg-[#004d00] transition-colors mb-4"
          >
            <span>Contact Us</span>
            <Mail className="w-4 h-4" />
          </motion.button>
          <p className="font-label text-xs text-[#707a6a]">sagiyaventures@gmail.com · +91 97900 97716</p>
        </motion.div>
      </section>
    </div>
  );
};

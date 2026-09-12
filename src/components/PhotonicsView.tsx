import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Gauge, ShieldCheck, ArrowRight, CheckCircle2, Microscope, Sparkles } from 'lucide-react';

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

export const PhotonicsView: React.FC<PhotonicsViewProps> = ({ onOpenConsultation }) => {
  const metrics = [
    { value: '345 ps', label: 'End-to-End Latency', sub: 'simulated', icon: Zap },
    { value: '0.82–1.26', label: 'TOPS/W · design target vs A100 @ 0.78', sub: 'simulated', icon: Gauge },
    { value: '5.12 TOPS', label: 'PPU-v16 Throughput', sub: 'simulated', icon: Cpu },
    { value: '99%', label: 'Monte Carlo Fab Yield · 1,000 trials', sub: 'verified in sim', icon: ShieldCheck },
  ];

  const variants = [
    { name: 'PPU-v4', matrix: '4×4 matrix', mzis: '6 MZIs', area: '0.813 mm²', status: 'Tape-out Ready', dot: 'bg-[#00FF88]', ring: 'from-[#00FF88]/40' },
    { name: 'PPU-v8', matrix: '8×8 matrix', mzis: '28 MZIs', area: '2.232 mm²', status: 'Designed', dot: 'bg-[#00FF88]', ring: 'from-[#00FF88]/40' },
    { name: 'PPU-v16', matrix: '16×16 matrix', mzis: '120 MZIs', area: '~8.5 mm²', status: 'Planned', dot: 'bg-[#00D4FF]', ring: 'from-[#00D4FF]/40' },
  ];

  const competition = [
    { system: 'PPU-v16', topsPerW: 1.26, display: '0.82–1.26', highlight: true },
    { system: 'Google TPU v4', topsPerW: 1.62, display: '1.62', highlight: false },
    { system: 'Intel Gaudi 2', topsPerW: 1.44, display: '1.44', highlight: false },
    { system: 'NVIDIA A100', topsPerW: 0.78, display: '0.78', highlight: false },
  ];
  const maxTopsPerW = 1.62;

  const ipStatus = [
    'Provisional patent filed — photonic AI accelerator architecture',
    'DRC (Design Rule Check) verified — 31/31 rules pass',
    'ONN (Optical Neural Network) compiler — SVD + Reck decomposition, complete',
    'Monte Carlo fabrication yield — 99% across 1,000 simulated trials',
    'Electro-optical pipeline latency — 345 ps, verified in simulation',
  ];

  return (
    <div className="bg-[#0A0A1A] text-white overflow-hidden">
      {/* Section 1 — Hero */}
      <section className="relative py-24 md:py-36 px-5 md:px-12 border-b border-white/10">
        {/* Ambient glow blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] bg-[#00D4FF]/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-1/3 right-[10%] w-[320px] h-[320px] bg-[#00FF88]/10 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '1.2s' }} />
          {/* light-beam streaks */}
          <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-[#00D4FF]/40 to-transparent" />
          <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-[#00FF88]/25 to-transparent" />
        </div>

        <div className="relative max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#00D4FF]/30 text-[#00D4FF] font-label text-xs font-semibold mb-6 tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Pre-Seed · Patent Filed · Pre-Silicon (Simulation Stage)
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-headline text-4xl md:text-6xl font-bold mb-5 tracking-tight bg-gradient-to-r from-white via-white to-[#00D4FF] bg-clip-text text-transparent"
          >
            Sagiya Photonics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xl md:text-2xl text-[#00D4FF] mb-7 font-medium"
          >
            AI Inference at the Speed of Light
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            A photonic AI accelerator chip (PPU) that performs matrix-vector multiplication using
            light through silicon waveguides — instead of electrons through transistors. In
            simulation, our PPU-v16 design targets <strong className="text-white">5.12 TOPS at
            0.82–1.26 TOPS/W</strong>, ahead of NVIDIA A100's measured 0.78 TOPS/W. The chip design
            is complete and tape-out ready; it has not yet been fabricated or measured on real
            silicon.
          </motion.p>
        </div>
      </section>

      {/* Section 2 — Key Metrics */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              {...stagger(i)}
              whileHover={{ y: -4 }}
              className="relative bg-white/[0.04] border border-white/10 rounded-xl p-5 md:p-6 text-center group transition-colors hover:border-[#00D4FF]/40"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00D4FF]/20 transition-colors">
                <m.icon className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <div className="font-headline text-2xl md:text-3xl font-bold mb-1">{m.value}</div>
              <div className="font-label text-[11px] text-white/50 leading-snug">{m.label}</div>
              <div className="font-label text-[10px] text-[#00FF88] mt-2 uppercase tracking-wider">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3 — What is PPU */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-4">What is a PPU?</h2>
            <p className="font-body text-white/70 leading-relaxed mb-4">
              The Photonic Processing Unit (PPU) is an AI inference accelerator — like a GPU, but it
              uses light through silicon waveguides instead of electrons through transistors.
            </p>
            <p className="font-body text-white/70 leading-relaxed">
              In our design, the PPU sits inside data centers as an accelerator card. Neural
              networks compile to PPU hardware automatically via our ONN (Optical Neural Network)
              compiler — no model retraining required.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-2"
          >
            {['Neural Network', 'ONN Compiler', 'PPU Chip', 'Result'].map((step, i) => (
              <React.Fragment key={step}>
                <motion.div
                  {...stagger(i)}
                  className="relative bg-white/5 border border-[#00D4FF]/30 rounded-lg px-4 py-3.5 text-center font-label text-sm min-w-[120px] overflow-hidden"
                >
                  {i === 2 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 to-[#00FF88]/10" />
                  )}
                  <span className="relative">{step}</span>
                </motion.div>
                {i < 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#00D4FF] shrink-0 rotate-90 sm:rotate-0" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Chip Variants */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <motion.h2 {...fadeUp} className="font-headline text-2xl md:text-3xl font-semibold mb-8 text-center">
            PPU Chip Variants
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {variants.map((v, i) => (
              <motion.div
                key={v.name}
                {...stagger(i)}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-white/[0.04] border border-white/10 rounded-xl p-6 overflow-hidden group transition-colors hover:border-white/25"
              >
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${v.ring} via-transparent to-transparent`} />
                <h3 className="font-headline text-xl font-bold mb-3">{v.name}</h3>
                <ul className="font-body text-sm text-white/70 space-y-1.5 mb-5">
                  <li>{v.matrix} · {v.mzis}</li>
                  <li>Area: {v.area}</li>
                </ul>
                <div className="inline-flex items-center gap-1.5 font-label text-xs font-semibold">
                  <span className={`w-1.5 h-1.5 rounded-full ${v.dot}`} />
                  {v.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Competition Comparison */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[900px] mx-auto">
          <motion.h2 {...fadeUp} className="font-headline text-2xl md:text-3xl font-semibold mb-3 text-center">
            Simulated Performance vs. Published Hardware
          </motion.h2>
          <motion.p {...fadeUp} className="font-body text-sm text-white/50 text-center mb-10 max-w-xl mx-auto">
            PPU-v16 figures are pre-silicon simulation results, not yet independently benchmarked
            on fabricated hardware. Competitor figures are their publicly published, measured specs.
          </motion.p>
          <div className="space-y-4">
            {competition.map((row, i) => (
              <motion.div key={row.system} {...stagger(i)} className="flex items-center gap-4">
                <div className={`w-32 shrink-0 font-label text-sm ${row.highlight ? 'text-[#00D4FF] font-semibold' : 'text-white/70'}`}>
                  {row.system}
                </div>
                <div className="flex-1 h-8 bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(row.topsPerW / maxTopsPerW) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                    className={`h-full rounded-full ${row.highlight ? 'bg-gradient-to-r from-[#00D4FF] to-[#00FF88]' : 'bg-white/25'}`}
                  />
                </div>
                <div className={`w-20 shrink-0 text-right font-label text-sm ${row.highlight ? 'text-[#00FF88] font-semibold' : 'text-white/60'}`}>
                  {row.display}{row.highlight && ' ✅'}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="font-label text-[11px] text-white/40 text-center mt-6">
            TOPS/W shown above (higher is more power-efficient). PPU-v16 is also optimized for
            ultra-low latency inference — 345 ps vs ~1 ms typical GPU latency.
          </p>
        </div>
      </section>

      {/* Section 6 — IP & Status */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[800px] mx-auto">
          <motion.h2 {...fadeUp} className="font-headline text-2xl md:text-3xl font-semibold mb-8 text-center">
            IP &amp; Development Status
          </motion.h2>
          <div className="space-y-3 mb-2">
            {ipStatus.map((item, i) => (
              <motion.div key={item} {...stagger(i)} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00FF88] shrink-0 mt-0.5" />
                <span className="font-body text-white/80 text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
            <motion.div {...stagger(ipStatus.length)} className="flex items-start gap-3">
              <Microscope className="w-5 h-5 text-[#00D4FF] shrink-0 mt-0.5" />
              <span className="font-body text-white/80 text-sm md:text-base">
                Next milestone: silicon tape-out — we are seeking a university or MPW fab partner.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7 — Contact / Collaborate */}
      <section className="relative py-20 md:py-28 px-5 md:px-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00D4FF]/10 rounded-full blur-[100px]" />
        </div>
        <motion.div {...fadeUp} className="relative max-w-[700px] mx-auto text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-4">
            Interested in Collaborating?
          </h2>
          <p className="font-body text-white/70 mb-8 leading-relaxed">
            We are seeking university fab partners and research collaborators to help take the
            PPU from simulation to fabricated silicon.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#00D4FF] text-[#0A0A1A] font-label text-sm font-semibold px-7 py-3.5 rounded-sm shadow-[0_0_30px_rgba(0,212,255,0.35)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-shadow mb-4"
          >
            Contact Us
          </motion.button>
          <p className="font-label text-xs text-white/50">sagiyaventures@gmail.com</p>
        </motion.div>
      </section>
    </div>
  );
};

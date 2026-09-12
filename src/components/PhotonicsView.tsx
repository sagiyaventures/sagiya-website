import React from 'react';
import { Cpu, Zap, Gauge, ShieldCheck, ArrowRight, CheckCircle2, Microscope } from 'lucide-react';

interface PhotonicsViewProps {
  onOpenConsultation: () => void;
}

export const PhotonicsView: React.FC<PhotonicsViewProps> = ({ onOpenConsultation }) => {
  const metrics = [
    { value: '345 ps', label: 'End-to-End Latency (simulated)', icon: Zap },
    { value: '0.82–1.26', label: 'Simulated TOPS/W (design target vs A100 @ 0.78)', icon: Gauge },
    { value: '5.12 TOPS', label: 'PPU-v16 Throughput (simulated)', icon: Cpu },
    { value: '99%', label: 'Monte Carlo Fab Yield (1,000 trials)', icon: ShieldCheck },
  ];

  const variants = [
    { name: 'PPU-v4', matrix: '4×4 matrix', mzis: '6 MZIs', area: '0.813 mm²', status: 'Tape-out Ready', statusColor: 'text-[#00FF88]' },
    { name: 'PPU-v8', matrix: '8×8 matrix', mzis: '28 MZIs', area: '2.232 mm²', status: 'Designed', statusColor: 'text-[#00FF88]' },
    { name: 'PPU-v16', matrix: '16×16 matrix', mzis: '120 MZIs', area: '~8.5 mm²', status: 'Planned', statusColor: 'text-[#00D4FF]' },
  ];

  const competition = [
    { system: 'PPU-v16', tops: '5.12', power: '4–6 W', topsPerW: '0.82–1.26', highlight: true },
    { system: 'NVIDIA A100', tops: '312', power: '400 W', topsPerW: '0.78', highlight: false },
    { system: 'Google TPU v4', tops: '275', power: '170 W', topsPerW: '1.62', highlight: false },
    { system: 'Intel Gaudi 2', tops: '865', power: '600 W', topsPerW: '1.44', highlight: false },
  ];

  const ipStatus = [
    'Provisional patent filed — photonic AI accelerator architecture',
    'DRC (Design Rule Check) verified — 31/31 rules pass',
    'ONN (Optical Neural Network) compiler — SVD + Reck decomposition, complete',
    'Monte Carlo fabrication yield — 99% across 1,000 simulated trials',
    'Electro-optical pipeline latency — 345 ps, verified in simulation',
  ];

  return (
    <div className="bg-[#0A0A1A] text-white">
      {/* Section 1 — Hero */}
      <section className="py-24 md:py-32 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#00D4FF]/30 text-[#00D4FF] font-label text-xs font-semibold mb-6 tracking-wide">
            Pre-Seed · Patent Filed · Pre-Silicon (Simulation Stage)
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Sagiya Photonics
          </h1>
          <p className="font-body text-xl md:text-2xl text-[#00D4FF] mb-6">
            AI Inference at the Speed of Light
          </p>
          <p className="font-body text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            A photonic AI accelerator chip (PPU) that performs matrix-vector multiplication using
            light through silicon waveguides — instead of electrons through transistors. In
            simulation, our PPU-v16 design targets <strong className="text-white">5.12 TOPS at
            0.82–1.26 TOPS/W</strong>, ahead of NVIDIA A100's measured 0.78 TOPS/W. The chip design
            is complete and tape-out ready; it has not yet been fabricated or measured on real
            silicon.
          </p>
        </div>
      </section>

      {/* Section 2 — Key Metrics */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 text-center">
              <m.icon className="w-6 h-6 text-[#00D4FF] mx-auto mb-3" />
              <div className="font-headline text-2xl md:text-3xl font-bold mb-1">{m.value}</div>
              <div className="font-label text-xs text-white/60 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — What is PPU */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
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
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {['Neural Network', 'ONN Compiler', 'PPU Chip', 'Result'].map((step, i) => (
              <React.Fragment key={step}>
                <div className="bg-white/5 border border-[#00D4FF]/30 rounded-lg px-4 py-3 text-center font-label text-sm min-w-[110px]">
                  {step}
                </div>
                {i < 3 && (
                  <ArrowRight className="w-5 h-5 text-[#00D4FF] shrink-0 rotate-90 sm:rotate-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Chip Variants */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-8 text-center">
            PPU Chip Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {variants.map((v) => (
              <div key={v.name} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-headline text-xl font-bold mb-3">{v.name}</h3>
                <ul className="font-body text-sm text-white/70 space-y-1.5 mb-4">
                  <li>{v.matrix} · {v.mzis}</li>
                  <li>Area: {v.area}</li>
                </ul>
                <div className={`font-label text-xs font-semibold ${v.statusColor}`}>{v.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Competition Table */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-3 text-center">
            Simulated Performance vs. Published Hardware
          </h2>
          <p className="font-body text-sm text-white/50 text-center mb-8 max-w-xl mx-auto">
            PPU-v16 figures are pre-silicon simulation results, not yet independently benchmarked
            on fabricated hardware. Competitor figures are their publicly published, measured specs.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[480px]">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 font-label text-white/60">System</th>
                  <th className="text-center py-3 px-4 font-label text-white/60">TOPS</th>
                  <th className="text-center py-3 px-4 font-label text-white/60">Power</th>
                  <th className="text-center py-3 px-4 font-label text-white/60">TOPS/W</th>
                </tr>
              </thead>
              <tbody>
                {competition.map((row) => (
                  <tr
                    key={row.system}
                    className={`border-b border-white/10 ${row.highlight ? 'bg-[#00D4FF]/10' : ''}`}
                  >
                    <td className={`py-3 px-4 font-body ${row.highlight ? 'font-semibold text-[#00D4FF]' : 'text-white/80'}`}>
                      {row.system}{row.highlight ? ' (simulated)' : ''}
                    </td>
                    <td className="text-center py-3 px-4 font-body text-white/80">{row.tops}</td>
                    <td className="text-center py-3 px-4 font-body text-white/80">{row.power}</td>
                    <td className={`text-center py-3 px-4 font-body ${row.highlight ? 'font-semibold text-[#00FF88]' : 'text-white/80'}`}>
                      {row.topsPerW}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6 — IP & Status */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-b border-white/10">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-8 text-center">
            IP &amp; Development Status
          </h2>
          <div className="space-y-3 mb-6">
            {ipStatus.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00FF88] shrink-0 mt-0.5" />
                <span className="font-body text-white/80 text-sm md:text-base">{item}</span>
              </div>
            ))}
            <div className="flex items-start gap-3">
              <Microscope className="w-5 h-5 text-[#00D4FF] shrink-0 mt-0.5" />
              <span className="font-body text-white/80 text-sm md:text-base">
                Next milestone: silicon tape-out — we are seeking a university or MPW fab partner.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Contact / Collaborate */}
      <section className="py-20 md:py-28 px-5 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-4">
            Interested in Collaborating?
          </h2>
          <p className="font-body text-white/70 mb-8 leading-relaxed">
            We are seeking university fab partners and research collaborators to help take the
            PPU from simulation to fabricated silicon.
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#00D4FF] text-[#0A0A1A] font-label text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#33ddff] transition-colors mb-4"
          >
            Contact Us
          </button>
          <p className="font-label text-xs text-white/50">sagiyaventures@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

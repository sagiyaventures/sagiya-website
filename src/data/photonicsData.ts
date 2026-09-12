// Sagiya Photonics — content data
// NOTE: All performance figures below are pre-silicon SIMULATION results unless stated
// otherwise. Competitor figures are their own publicly published, measured specs.
// Do not add unverified numbers here without checking against the source proposal doc.

export interface TelemetryMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  tag: string;
  icon: 'clock' | 'cpu' | 'gauge' | 'yield';
}

export interface ChipVariant {
  id: string;
  name: string;
  description: string;
  isPrimary?: boolean;
  statusBadge: string;
  statusType: 'ready' | 'primary' | 'planned';
  specs: {
    matrixArchitecture: string;
    mziCount: string;
    dieFootprint: string;
    targetProcess: string;
  };
  classification: string;
}

export interface HardwareComparison {
  id: string;
  name: string;
  type: 'optical' | 'electronic';
  tag: string;
  topsPerWatt: number;
  display: string;
  highlight?: boolean;
}

export interface MaturationMilestone {
  id: string;
  title: string;
  badge: string;
  description: string;
}

export interface DieProbePoint {
  id: string;
  label: string;
  tag: string;
  description: string;
  specs: Record<string, string>;
}

export const TELEMETRY_METRICS: TelemetryMetric[] = [
  {
    id: 'latency',
    value: '345 ps',
    label: 'End-to-End Latency',
    description: 'Full optical propagation delay across the coherent MZI phase mesh.',
    tag: 'SIMULATED',
    icon: 'clock',
  },
  {
    id: 'efficiency',
    value: '0.82–1.26',
    label: 'TOPS/W · design target vs A100 @ 0.78',
    description: 'Passive phase-shift compute — no active gate-switching current required.',
    tag: 'SIMULATED',
    icon: 'gauge',
  },
  {
    id: 'throughput',
    value: '5.12 TOPS',
    label: 'PPU-v16 Peak Throughput',
    description: 'Coherent matrix-vector products at native optical carrier modulation.',
    tag: 'SIMULATED',
    icon: 'cpu',
  },
  {
    id: 'yield',
    value: '99%',
    label: 'Monte Carlo Fab Yield · 1,000 trials',
    description: 'Phase-error tolerance simulated against standard SOI waveguide variation.',
    tag: 'VERIFIED IN SIM',
    icon: 'yield',
  },
];

export const CHIP_VARIANTS: ChipVariant[] = [
  {
    id: 'ppu-v4',
    name: 'PPU-v4',
    description: 'Ultra-low power edge deployment — microcontrollers and sensor telemetry.',
    statusBadge: 'Tape-out Ready',
    statusType: 'ready',
    specs: {
      matrixArchitecture: '4×4 MZI Core',
      mziCount: '6 MZIs',
      dieFootprint: '0.813 mm²',
      targetProcess: '220nm SOI Silicon',
    },
    classification: 'Edge Embedded',
  },
  {
    id: 'ppu-v8',
    name: 'PPU-v8',
    description: 'Balanced accelerator for low-latency autonomous systems and robotics.',
    isPrimary: true,
    statusBadge: 'Designed',
    statusType: 'primary',
    specs: {
      matrixArchitecture: '8×8 MZI Core',
      mziCount: '28 MZIs',
      dieFootprint: '2.232 mm²',
      targetProcess: '220nm SOI Silicon',
    },
    classification: 'Autonomous Co-Processor',
  },
  {
    id: 'ppu-v16',
    name: 'PPU-v16',
    description: 'High-density optical mesh designed for datacenter LLM inference.',
    statusBadge: 'Planned',
    statusType: 'planned',
    specs: {
      matrixArchitecture: '16×16 MZI Core',
      mziCount: '120 MZIs',
      dieFootprint: '~8.5 mm²',
      targetProcess: 'Multi-Die Integration',
    },
    classification: 'Scale-Out Datacenter',
  },
];

// Sagiya PPU-v16 figures are pre-silicon simulation; the three competitors' figures
// are their own publicly published, measured specs (verified against source proposal).
export const HARDWARE_COMPARISONS: HardwareComparison[] = [
  { id: 'ppu-v16', name: 'PPU-v16 (Simulated)', type: 'optical', tag: 'OPTICAL', topsPerWatt: 1.26, display: '0.82–1.26', highlight: true },
  { id: 'tpu-v4', name: 'Google TPU v4', type: 'electronic', tag: 'ELECTRONIC ASIC', topsPerWatt: 1.62, display: '1.62' },
  { id: 'gaudi-2', name: 'Intel Gaudi 2', type: 'electronic', tag: 'ELECTRONIC ASIC', topsPerWatt: 1.44, display: '1.44' },
  { id: 'a100', name: 'NVIDIA A100 (FP16 Tensor Core)', type: 'electronic', tag: 'ELECTRONIC GPU', topsPerWatt: 0.78, display: '0.78' },
];
export const MAX_TOPS_PER_WATT = 1.62;

export const MATURATION_MILESTONES: MaturationMilestone[] = [
  { id: 'patent', title: 'Provisional Patent Filed', badge: 'LEGAL FILING', description: 'Photonic AI accelerator architecture — Mach-Zehnder interferometer mesh topology.' },
  { id: 'drc', title: 'Design Rule Check (DRC) Passed', badge: 'VERIFICATION', description: '31/31 rules verified for 220nm SOI foundry standard, zero bend-radius violations.' },
  { id: 'compiler', title: 'ONN Compiler Complete', badge: 'SOFTWARE LAYER', description: 'Optical Neural Network compiler — SVD + Reck/Clements matrix decomposition.' },
  { id: 'monte-carlo', title: 'Yield & Monte Carlo Simulation', badge: 'RELIABILITY', description: '99% simulated operational yield across 1,000 trials under expected process variation.' },
  { id: 'latency-verified', title: 'Picosecond Latency Verified', badge: 'PROPAGATION', description: 'End-to-end optical propagation latency verified at 345 ps in simulation.' },
];

export const DIE_PROBE_POINTS: DieProbePoint[] = [
  {
    id: 'laser-input',
    label: 'Laser Input',
    tag: 'Optical Ingest',
    description: 'Continuous-wave laser input coupled into the die at standard telecom C-band wavelength.',
    specs: { 'Wavelength (λ)': '1550 nm (C-band)', 'Operating Mode': 'TE00 Fundamental' },
  },
  {
    id: 'waveguides',
    label: 'Optical Waveguides',
    tag: 'Interconnect',
    description: 'Single-mode silicon waveguides on standard 220nm SOI process with a buried-oxide layer.',
    specs: { 'Cross Section': '450 × 220 nm', 'Min Bend Radius': '5 µm' },
  },
  {
    id: 'mzi-mesh',
    label: 'Mach-Zehnder Interferometer Mesh',
    tag: 'Analog Compute Core',
    description: 'Coherent mesh of directional couplers and phase shifters executing matrix multiplication optically.',
    specs: { 'Topology': 'Clements Triangular Mesh', 'Phase Tuning': 'Thermo-/Electro-optic' },
  },
  {
    id: 'neural-layers',
    label: 'Neural Network Layers',
    tag: 'Modulator Array',
    description: 'Phase modulators encode neural-network weight matrices directly onto the light wavefront.',
    specs: { 'Precision': 'Quantized 8-bit equiv.', 'Modulator Bandwidth': '10–25 GHz' },
  },
  {
    id: 'accelerator',
    label: 'Photonic Accelerator',
    tag: 'ASIC Co-Engine',
    description: 'Peripheral circuitry managing DAC input, optical phase monitoring, and thermal feedback control.',
    specs: { 'Control Interface': 'SPI / PCIe Gen 4', 'Feedback Loop': 'On-chip Photodiode Sense' },
  },
  {
    id: 'data-output',
    label: 'Data Output',
    tag: 'Detection & Conversion',
    description: 'Germanium photodetectors convert coherent optical interference results back to digital output.',
    specs: { 'Photodetector': 'Epitaxial Germanium', 'Output Form': 'Differential Analog → ADC' },
  },
];

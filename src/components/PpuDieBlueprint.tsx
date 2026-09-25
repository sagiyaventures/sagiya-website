import React, { useState } from 'react';
import { Maximize2, CheckCircle2 } from 'lucide-react';
import { DIE_PROBE_POINTS, DieProbePoint } from '../data/photonicsData';

interface PpuDieBlueprintProps {
  onExpand?: () => void;
}

export const PpuDieBlueprint: React.FC<PpuDieBlueprintProps> = ({ onExpand }) => {
  const [selectedProbe, setSelectedProbe] = useState<DieProbePoint | null>(null);
  const [activeLaserAnimation, setActiveLaserAnimation] = useState(true);

  return (
    <div className="relative rounded-xl overflow-hidden border border-[#004900]/15 bg-white text-[#2c160e] shadow-xs flex flex-col w-full">
      {/* Top Technical Control Header */}
      <div className="bg-[#fff1ed]/70 px-4 py-2.5 border-b border-[#004900]/15 flex items-center justify-between text-xs font-label">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#006400] animate-pulse" />
          <span className="font-mono text-[#006400] font-semibold tracking-wider">
            OPTICAL DIE SIMULATOR
          </span>
          <span className="text-[#55604f]/50 hidden sm:inline">|</span>
          <span className="text-[#55604f] hidden sm:inline font-mono">220nm SOI PDK</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveLaserAnimation(!activeLaserAnimation)}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors border ${
              activeLaserAnimation
                ? 'bg-[#006400]/10 text-[#006400] border-[#006400]/30'
                : 'bg-[#004900]/5 text-[#55604f] border-[#004900]/10'
            }`}
            title="Toggle beam animation"
          >
            {activeLaserAnimation ? 'Beam: ACTIVE' : 'Beam: PAUSED'}
          </button>
          {onExpand && (
            <button
              onClick={onExpand}
              className="text-[#55604f] hover:text-[#006400] transition-colors p-1 rounded hover:bg-[#006400]/10"
              title="Jump to simulated telemetry"
              aria-label="Jump to simulated telemetry"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main SVG Blueprint Canvas */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#fff8f6] via-[#fef3ee] to-[#fff1ed] select-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cadGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#006400" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cadGrid)" />
        </svg>

        <div className="absolute top-3 left-4 pointer-events-none z-10">
          <div className="font-headline text-lg sm:text-xl font-bold tracking-wide text-[#2c160e]">
            PPU MICROCHIP DIE
          </div>
          <div className="w-12 h-0.5 bg-[#006400]/40 mt-0.5" />
        </div>
        <div className="absolute bottom-2 right-4 text-[9px] font-mono text-[#55604f]/70 pointer-events-none text-right">
          220nm SOI · Simulation Model
        </div>

        <svg viewBox="0 0 1000 750" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waferBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ded5c6" />
              <stop offset="100%" stopColor="#c5b9a7" />
            </linearGradient>
            <linearGradient id="dieTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8f4ec" />
              <stop offset="50%" stopColor="#f0e7d8" />
              <stop offset="100%" stopColor="#e3d8c5" />
            </linearGradient>
            <linearGradient id="cavityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e1d5c2" />
              <stop offset="100%" stopColor="#cdc0ac" />
            </linearGradient>
            <linearGradient id="goldPadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd875" />
              <stop offset="100%" stopColor="#d99928" />
            </linearGradient>
            <linearGradient id="modulatorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ece2d0" />
              <stop offset="100%" stopColor="#d3c5b2" />
            </linearGradient>
            <filter id="laserGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b2" />
              <feMerge><feMergeNode in="b2" /><feMergeNode in="b1" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0  0 0 0 0 0.39  0 0 0 0 0.13  0 0 0 1 0" />
              <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Isometric wafer + die base */}
          <polygon points="60,340 500,80 940,340 940,365 500,625 60,365" fill="#b3a592" stroke="#6e6252" strokeWidth="1.5" />
          <polygon points="60,340 500,80 940,340 500,600" fill="url(#waferBaseGrad)" stroke="#948471" strokeWidth="1.5" />
          <polygon points="140,345 500,135 860,345 860,365 500,575 140,365" fill="#a69784" stroke="#736655" strokeWidth="1.2" />
          <polygon points="140,345 500,135 860,345 500,555" fill="url(#dieTopGrad)" stroke="#baab98" strokeWidth="1.5" />
          <polygon points="280,345 500,215 720,345 500,475" fill="url(#cavityGrad)" stroke="#9f907d" strokeWidth="1.5" />

          {/* Gold wire-bond pads */}
          {[{x:285,y:195},{x:325,y:172},{x:365,y:149},{x:405,y:126},{x:445,y:103},{x:485,y:80}].map((pad, idx) => (
            <polygon key={`tl-${idx}`} points={`${pad.x},${pad.y} ${pad.x+22},${pad.y-13} ${pad.x+38},${pad.y-4} ${pad.x+16},${pad.y+9}`} fill="url(#goldPadGrad)" stroke="#b57a14" strokeWidth="0.8" />
          ))}
          {[{x:535,y:103},{x:575,y:126},{x:615,y:149},{x:655,y:172},{x:695,y:195},{x:735,y:218},{x:775,y:241}].map((pad, idx) => (
            <polygon key={`tr-${idx}`} points={`${pad.x},${pad.y} ${pad.x+22},${pad.y+13} ${pad.x+38},${pad.y+4} ${pad.x+16},${pad.y-9}`} fill="url(#goldPadGrad)" stroke="#b57a14" strokeWidth="0.8" />
          ))}
          {[{x:165,y:365},{x:200,y:385},{x:235,y:405},{x:270,y:425},{x:305,y:445},{x:340,y:465},{x:375,y:485},{x:410,y:505}].map((pad, idx) => (
            <polygon key={`bl-${idx}`} points={`${pad.x},${pad.y} ${pad.x+18},${pad.y+10} ${pad.x+32},${pad.y+2} ${pad.x+14},${pad.y-8}`} fill="url(#goldPadGrad)" stroke="#b57a14" strokeWidth="0.8" />
          ))}
          {[{x:565,y:520},{x:605,y:497},{x:645,y:474},{x:685,y:451},{x:725,y:428},{x:765,y:405},{x:805,y:382}].map((pad, idx) => (
            <polygon key={`br-${idx}`} points={`${pad.x},${pad.y} ${pad.x+18},${pad.y-10} ${pad.x+32},${pad.y-2} ${pad.x+14},${pad.y+8}`} fill="url(#goldPadGrad)" stroke="#b57a14" strokeWidth="0.8" />
          ))}

          {/* Modulator blocks */}
          <g className="cursor-pointer" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[3])}>
            <polygon points="340,240 430,190 470,215 380,265" fill="url(#modulatorGrad)" stroke="#8a7c6c" strokeWidth="1.2" />
            <polygon points="445,182 535,132 575,157 485,207" fill="url(#modulatorGrad)" stroke="#8a7c6c" strokeWidth="1.2" />
          </g>
          <g className="cursor-pointer" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[3])}>
            <polygon points="530,440 620,390 660,415 570,465" fill="url(#modulatorGrad)" stroke="#8a7c6c" strokeWidth="1.2" />
            <polygon points="600,400 690,350 730,375 640,425" fill="url(#modulatorGrad)" stroke="#8a7c6c" strokeWidth="1.2" />
          </g>
          <g className="cursor-pointer" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[4])}>
            <polygon points="200,320 280,275 320,298 240,343" fill="url(#modulatorGrad)" stroke="#8a7c6c" strokeWidth="1.2" />
            <polygon points="240,350 320,305 360,328 280,373" fill="url(#modulatorGrad)" stroke="#8a7c6c" strokeWidth="1.2" />
          </g>

          {/* MZI mesh */}
          <g className="cursor-pointer" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[2])}>
            <path d="M 360,395 C 410,360 430,430 480,395 C 530,360 550,430 600,395 C 640,365 670,350 700,330" fill="none" stroke="#0f6e2b" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 360,395 C 410,430 430,360 480,395 C 530,430 550,360 600,395 C 640,425 670,380 700,330" fill="none" stroke="#0f6e2b" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 320,350 C 370,315 390,385 440,350 C 490,315 510,385 560,350 C 600,320 630,280 660,255" fill="none" stroke="#0f6e2b" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 320,350 C 370,385 390,315 440,350 C 490,385 510,315 560,350 C 600,380 630,290 660,255" fill="none" stroke="#0f6e2b" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 360,395 C 410,360 430,430 480,395 C 530,360 550,430 600,395 C 640,365 670,350 700,330" fill="none" stroke="#16a34a" strokeWidth="4" filter="url(#coreGlow)" className={activeLaserAnimation ? 'animate-pulse' : ''} />
            <path d="M 320,350 C 370,315 390,385 440,350 C 490,315 510,385 560,350 C 600,320 630,280 660,255" fill="none" stroke="#16a34a" strokeWidth="4" filter="url(#coreGlow)" className={activeLaserAnimation ? 'animate-pulse' : ''} />
            <circle cx="440" cy="350" r="4.5" fill="#facc15" stroke="#713f12" strokeWidth="1" />
            <circle cx="480" cy="395" r="4.5" fill="#facc15" stroke="#713f12" strokeWidth="1" />
            <circle cx="560" cy="350" r="4.5" fill="#facc15" stroke="#713f12" strokeWidth="1" />
            <circle cx="600" cy="395" r="4.5" fill="#facc15" stroke="#713f12" strokeWidth="1" />
          </g>

          {/* Laser input beams */}
          <g className="cursor-pointer" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[0])}>
            <line x1="50" y1="500" x2="320" y2="350" stroke="#22c55e" strokeWidth="8" strokeOpacity="0.35" filter="url(#laserGlow)" />
            <line x1="50" y1="500" x2="320" y2="350" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" filter="url(#laserGlow)" />
            <line x1="50" y1="500" x2="320" y2="350" stroke="#065f46" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="130" y1="615" x2="360" y2="395" stroke="#22c55e" strokeWidth="8" strokeOpacity="0.35" filter="url(#laserGlow)" />
            <line x1="130" y1="615" x2="360" y2="395" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" filter="url(#laserGlow)" />
            <line x1="130" y1="615" x2="360" y2="395" stroke="#065f46" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="320" cy="350" r="5" fill="#16a34a" filter="url(#laserGlow)" />
            <circle cx="360" cy="395" r="5" fill="#16a34a" filter="url(#laserGlow)" />
          </g>

          {/* Data output beams */}
          <g className="cursor-pointer" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[5])}>
            <line x1="660" y1="255" x2="840" y2="165" stroke="#22c55e" strokeWidth="7" strokeOpacity="0.3" filter="url(#laserGlow)" />
            <line x1="660" y1="255" x2="840" y2="165" stroke="#16a34a" strokeWidth="3.2" filter="url(#laserGlow)" />
            <line x1="660" y1="255" x2="840" y2="165" stroke="#065f46" strokeWidth="1.4" />
            <polygon points="845,162 825,168 834,179" fill="#16a34a" filter="url(#laserGlow)" />
            <line x1="700" y1="330" x2="880" y2="190" stroke="#22c55e" strokeWidth="7" strokeOpacity="0.3" filter="url(#laserGlow)" />
            <line x1="700" y1="330" x2="880" y2="190" stroke="#16a34a" strokeWidth="3.2" filter="url(#laserGlow)" />
            <line x1="700" y1="330" x2="880" y2="190" stroke="#065f46" strokeWidth="1.4" />
            <polygon points="885,187 865,193 874,204" fill="#16a34a" filter="url(#laserGlow)" />
          </g>

          {/* Annotation labels */}
          <g className="cursor-pointer group" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[4])}>
            <polyline points="200,105 270,105 320,180" fill="none" stroke="#8a7c6c" strokeWidth="1.2" strokeDasharray="2,2" />
            <circle cx="320" cy="180" r="3" fill="#0284c7" />
            <text x="200" y="98" textAnchor="middle" className="text-[15px] font-semibold fill-[#2c160e] group-hover:fill-[#006400] transition-colors">PHOTONIC</text>
            <text x="200" y="118" textAnchor="middle" className="text-[15px] font-semibold fill-[#2c160e] group-hover:fill-[#006400] transition-colors">ACCELERATOR</text>
          </g>
          <g className="cursor-pointer group" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[3])}>
            <polyline points="690,75 620,75 590,130 540,150" fill="none" stroke="#8a7c6c" strokeWidth="1.2" strokeDasharray="2,2" />
            <circle cx="540" cy="150" r="3" fill="#0284c7" />
            <text x="690" y="80" textAnchor="middle" className="text-[15px] font-semibold fill-[#2c160e] group-hover:fill-[#006400] transition-colors">NEURAL NETWORK</text>
            <text x="690" y="100" textAnchor="middle" className="text-[15px] font-semibold fill-[#2c160e] group-hover:fill-[#006400] transition-colors">LAYERS</text>
          </g>
          <g className="cursor-pointer group" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[5])}>
            <polyline points="880,120 810,120 810,180" fill="none" stroke="#8a7c6c" strokeWidth="1.2" strokeDasharray="2,2" />
            <circle cx="810" cy="180" r="3" fill="#16a34a" />
            <text x="880" y="80" textAnchor="middle" className="text-[16px] font-bold fill-[#2c160e] group-hover:fill-[#006400] transition-colors">DATA OUTPUT</text>
          </g>
          <g className="cursor-pointer group" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[0])}>
            <polyline points="130,650 170,650 200,560" fill="none" stroke="#8a7c6c" strokeWidth="1.2" strokeDasharray="2,2" />
            <circle cx="200" cy="560" r="3" fill="#16a34a" />
            <text x="130" y="670" textAnchor="middle" className="text-[16px] font-bold fill-[#2c160e] group-hover:fill-[#006400] transition-colors">LASER INPUT</text>
          </g>
          <g className="cursor-pointer group" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[1])}>
            <polyline points="340,715 260,715 260,650 330,420" fill="none" stroke="#8a7c6c" strokeWidth="1.2" strokeDasharray="2,2" />
            <circle cx="330" cy="420" r="3" fill="#0284c7" />
            <text x="340" y="715" textAnchor="middle" className="text-[15px] font-semibold fill-[#2c160e] group-hover:fill-[#006400] transition-colors">OPTICAL WAVEGUIDES</text>
          </g>
          <g className="cursor-pointer group" onClick={() => setSelectedProbe(DIE_PROBE_POINTS[2])}>
            <polyline points="750,520 730,520 580,520 540,430" fill="none" stroke="#8a7c6c" strokeWidth="1.2" strokeDasharray="2,2" />
            <circle cx="540" cy="430" r="3" fill="#16a34a" />
            <text x="850" y="530" textAnchor="middle" className="text-[14px] font-semibold fill-[#2c160e] group-hover:fill-[#006400] transition-colors">MZI MESH</text>
          </g>
        </svg>

        {/* Live probe tooltip */}
        {selectedProbe && (
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-[#006400]/30 rounded-lg p-3.5 shadow-2xl z-30">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#006400]/10 text-[#006400] uppercase tracking-wider">
                  {selectedProbe.tag}
                </span>
                <h4 className="text-[#2c160e] font-headline font-bold text-sm sm:text-base mt-1">
                  {selectedProbe.label}
                </h4>
              </div>
              <button onClick={() => setSelectedProbe(null)} className="text-[#55604f] hover:text-[#2c160e] p-1 rounded hover:bg-[#004900]/10 text-xs">✕</button>
            </div>
            <p className="text-xs text-[#404a3b] mt-1.5 leading-relaxed font-body">{selectedProbe.description}</p>
            <div className="grid grid-cols-2 gap-2 mt-2.5 pt-2 border-t border-[#004900]/10 font-mono text-[11px]">
              {Object.entries(selectedProbe.specs).map(([key, val]) => (
                <div key={key} className="flex justify-between bg-[#fff1ed] px-2 py-1 rounded">
                  <span className="text-[#55604f]">{key}:</span>
                  <span className="text-[#006400] font-semibold">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer caption */}
      <div className="bg-[#fff1ed]/70 px-4 py-3 border-t border-[#004900]/15 flex items-center justify-between font-label">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#006400]" />
          <span className="text-xs font-semibold tracking-wide text-[#2c160e]">PPU Architecture v1.0</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#006400]/10 border border-[#006400]/30 text-[#006400] text-[11px] font-mono font-bold tracking-wider">
          <CheckCircle2 className="w-3.5 h-3.5" />
          MESH VALIDATED (SIM)
        </div>
      </div>
    </div>
  );
};

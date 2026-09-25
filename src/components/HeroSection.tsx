import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroAI from '../assets/hero-ai.webp';

interface HeroSectionProps {
  onConsult: () => void;
  onViewArchitecture: () => void;
  onOpenTelemetry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onConsult, onViewArchitecture }) => {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-28 px-5 md:px-12 max-w-[1280px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 z-10 flex flex-col gap-6 md:gap-7">
          <div className="inline-flex items-center gap-2 bg-[#ffdbd0]/30 border border-[#bfcab7] px-4 py-1.5 rounded-full w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006400] animate-pulse"></span>
            <span className="font-label text-xs tracking-widest text-[#004900] uppercase font-semibold">
              AI &amp; Software Solutions
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#2c160e] tracking-tight leading-tight">
            Practical AI for <span className="text-[#006400]">Government &amp; Enterprise</span>.
          </h1>

          <p className="font-body text-lg md:text-[18px] text-[#404a3b] leading-relaxed max-w-xl">
            Sagiya Ventures builds AI-powered software validated through real pilots — not slideware. Honest, measurable results for government departments and enterprises across India.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button onClick={onConsult}
              className="inline-flex items-center justify-center gap-2 bg-[#006400] text-white font-label text-[14px] px-8 py-3.5 rounded-sm hover:bg-[#004d00] transition-all duration-200 shadow-sm font-medium tracking-wide group active:scale-[0.98] cursor-pointer">
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={onViewArchitecture}
              className="inline-flex items-center justify-center bg-transparent border border-[#006400] text-[#006400] font-label text-[14px] px-8 py-3.5 rounded-sm hover:bg-[#006400]/5 active:scale-[0.98] transition-colors duration-200 font-medium tracking-wide cursor-pointer">
              Our Approach
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#004900]/10 max-w-lg">
            <div>
              <div className="font-headline text-xl font-bold text-[#006400]">AI-First</div>
              <div className="font-label text-xs text-[#55604f] uppercase tracking-wider mt-1">Engineering</div>
            </div>
            <div>
              <div className="font-headline text-xl font-bold text-[#006400]">Scalable</div>
              <div className="font-label text-xs text-[#55604f] uppercase tracking-wider mt-1">Architecture</div>
            </div>
            <div>
              <div className="font-headline text-xl font-bold text-[#006400]">Secure</div>
              <div className="font-label text-xs text-[#55604f] uppercase tracking-wider mt-1">By Design</div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Image */}
        <div className="lg:col-span-6 relative mt-4 lg:mt-0 h-[300px] sm:h-[340px] lg:h-[360px] flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl border border-[#006400]/15 overflow-hidden shadow-sm group bg-[#f0f8f0]">
            <img
              src={heroAI}
              alt="Sagiya AI Platform — Intelligent Infrastructure"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              // Perf fix: this is the above-the-fold hero image (the page's LCP
              // element) - it was previously loading="lazy", which actively
              // delays the Largest Contentful Paint instead of helping it.
              // fetchPriority hints the browser to fetch it before other assets.
              loading="eager"
              fetchPriority="high"
              width={720}
              height={360}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute -z-10 w-full h-full bg-gradient-to-tr from-[#ffe2da] to-transparent rounded-full blur-3xl opacity-50 scale-110 translate-x-8 translate-y-8 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

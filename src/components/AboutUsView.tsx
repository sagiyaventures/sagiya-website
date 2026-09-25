import React from 'react';
import { Shield, Target, Compass, MapPin, Mail, Phone } from 'lucide-react';
import sagiyaLogo from '../assets/sagiya-logo.webp';

interface AboutUsViewProps {
  onOpenConsultation: () => void;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({ onOpenConsultation }) => {
  return (
    <div className="pt-8 pb-24 px-5 md:px-12 max-w-[1280px] mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#ffdbd0]/30 border border-[#bfcab7] px-4 py-1.5 rounded-full w-fit mb-4">
          <span className="w-2 h-2 rounded-full bg-[#006400]"></span>
          <span className="font-label text-xs tracking-widest text-[#004900] uppercase font-semibold">
            Who We Are
          </span>
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-[#2c160e] tracking-tight mb-4">
          Bridging Intelligence with Purpose
        </h1>
        <p className="font-body text-lg text-[#404a3b] leading-relaxed">
          Sagiya Ventures is an AI and software solutions company committed to building practical, impactful technology for businesses and public institutions across India.
        </p>
      </div>

      {/* Philosophy Card */}
      <div className="bg-[#fff8f6] border border-[#004900]/15 rounded-2xl p-8 md:p-12 mb-20 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="font-label text-xs uppercase tracking-wider text-[#006400] font-semibold">
              Our Mission
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#2c160e]">
              AI That Works for People
            </h2>
            <p className="font-body text-base text-[#404a3b] leading-relaxed">
              We believe that AI should not just be powerful — it should be accessible, honest, and transformative for the organizations that need it most. Sagiya Ventures partners with clients to deliver AI-driven solutions that create measurable, real-world impact.
            </p>
            <p className="font-body text-base text-[#404a3b] leading-relaxed">
              Our approach is straightforward: understand your problem deeply, build the right solution carefully, and deliver results you can verify. No inflated claims. No unnecessary complexity.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="p-4 bg-white rounded-lg border border-[#004900]/10 flex items-center gap-3">
                <Target className="w-5 h-5 text-[#006400]" />
                <span className="font-label text-sm font-semibold text-[#2c160e]">Results-Driven</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-[#004900]/10 flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#006400]" />
                <span className="font-label text-sm font-semibold text-[#2c160e]">Transparent & Honest</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-[#004900]/10 flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#006400]" />
                <span className="font-label text-sm font-semibold text-[#2c160e]">Secure by Design</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-[#004900]/15 shadow-xs text-center">
            <div className="w-32 h-32 rounded-full shadow-lg mb-4 overflow-hidden">
              <img
                src={sagiyaLogo}
                alt="Sagiya Ventures"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="font-headline text-lg font-bold text-[#2c160e]">Sagiya Ventures</div>
            <div className="font-label text-xs text-[#006400] font-semibold tracking-wider uppercase mt-1">
              AI &amp; Software Solutions
            </div>
            <div className="mt-4 pt-4 border-t border-stone-100 max-w-xs text-xs font-label text-[#55604f]">
              Incorporated in India · Private Limited Company
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-[#2c160e]">
            Leadership
          </h2>
          <p className="font-body text-base text-[#404a3b] mt-1">
            The people driving Sagiya Ventures forward.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white border border-[#004900]/15 p-8 rounded-xl shadow-xs hover:border-[#004900]/30 transition-all flex flex-col items-center text-center max-w-sm w-full">
            <div className="w-16 h-16 rounded-full bg-[#006400] text-white flex items-center justify-center font-headline font-bold text-2xl mb-4">
              RS
            </div>
            <h3 className="font-headline text-xl font-bold text-[#2c160e] mb-1">
              Rajkumar Sundar
            </h3>
            <div className="font-label text-sm font-semibold text-[#006400] mb-3">
              Founder &amp; Managing Director
            </div>
            <p className="font-body text-sm text-[#404a3b] leading-relaxed">
              Visionary behind Sagiya Ventures, leading the company's strategy, technology direction, and partnerships to deliver AI-powered solutions that create real value for clients and communities.
            </p>
          </div>
        </div>
      </div>

      {/* Office */}
      <div>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-[#2c160e]">
            Our Office
          </h2>
          <p className="font-body text-base text-[#404a3b] mt-1">
            Based in Tamil Nadu, serving clients across India.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white border border-stone-200 p-8 rounded-xl hover:border-[#004900]/30 transition-all text-center shadow-xs max-w-sm w-full">
            <div className="flex items-center justify-center gap-2 text-[#006400] mb-3">
              <MapPin className="w-5 h-5" />
              <span className="font-headline text-lg font-bold text-[#2c160e]">Tamil Nadu, India</span>
            </div>
            <div className="font-label text-sm text-[#006400] font-semibold mb-1">Registered Office</div>
            <div className="font-body text-sm text-[#55604f]">Sagiya Ventures Private Limited</div>
            <div className="font-body text-sm text-[#55604f]">Tamil Nadu, India</div>
            <div className="mt-4 pt-4 border-t border-stone-100">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-6 py-2.5 rounded-sm hover:bg-[#004d00] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

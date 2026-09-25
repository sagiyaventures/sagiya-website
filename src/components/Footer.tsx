import React from 'react';
import { Linkedin } from 'lucide-react';
import sagiyaLogo from '../assets/sagiya-logo.webp';

interface FooterProps {
  onNavigateTab?: (tab: any) => void;
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onOpenConsultation }) => {
  return (
    <footer className="bg-[#fff1ed] w-full border-t border-[#004900]/10 mt-auto">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={sagiyaLogo} alt="Sagiya Ventures" className="w-full h-full object-cover" />
              </div>
              <span className="font-headline text-lg font-bold text-[#006400]">
                Sagiya Ventures
              </span>
            </div>
            <p className="font-body text-sm text-[#404a3b] max-w-xs leading-relaxed">
              AI &amp; Software Solutions company building practical, impactful technology for businesses and public institutions across India.
            </p>
            <p className="font-label text-xs text-[#55604f]">
              Sagiya Ventures Private Limited<br />
              Tamil Nadu, India<br />
              <a href="tel:+919790097716" className="hover:text-[#006400] transition-colors">
                +91 97900 97716
              </a>
            </p>
            <a
              href="https://www.linkedin.com/company/sagiya-ventures/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sagiya Ventures on LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#ffe2da] text-[#006400] hover:bg-[#006400] hover:text-white transition-colors duration-300 mt-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-label text-xs uppercase tracking-widest text-[#55604f] font-semibold mb-4">
              Company
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Solutions', tab: 'solutions' },
                { label: 'AI Services', tab: 'ai-services' },
                { label: 'Infrastructure', tab: 'infrastructure' },
                { label: 'About Us', tab: 'about' },
                { label: 'Pilot Projects', tab: 'case-studies' },
                { label: 'Sagiya Photonics', tab: 'photonics' },
                { label: 'Privacy Policy', tab: 'privacy-policy' },
                { label: 'Terms of Service', tab: 'terms-of-service' },
              ].map(({ label, tab }) => (
                <button
                  key={tab}
                  onClick={() => { onNavigateTab?.(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="font-body text-sm text-[#404a3b] hover:text-[#006400] transition-colors text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-label text-xs uppercase tracking-widest text-[#55604f] font-semibold mb-4">
              Get in Touch
            </div>
            <p className="font-body text-sm text-[#404a3b] mb-4 leading-relaxed">
              Interested in working with us? We'd love to hear about your project.
            </p>
            <a
              href="tel:+919790097716"
              className="font-label text-sm text-[#404a3b] hover:text-[#006400] transition-colors block mb-4"
            >
              📞 +91 97900 97716
            </a>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-[#004d00] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#004900]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#55604f]">
            &copy; 2026 Sagiya Ventures Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigateTab?.('privacy-policy')}
              className="font-label text-xs text-[#55604f] hover:text-[#006400] transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-[#c8d4c2]">·</span>
            <button
              onClick={() => onNavigateTab?.('terms-of-service')}
              className="font-label text-xs text-[#55604f] hover:text-[#006400] transition-colors"
            >
              Terms of Service
            </button>
            <span className="text-[#c8d4c2]">·</span>
            <p className="font-label text-xs text-[#55604f]">
              Made with ❤️ in Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

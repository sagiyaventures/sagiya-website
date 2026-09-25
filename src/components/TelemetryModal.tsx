import React from 'react';
import { X, Mail, ArrowRight } from 'lucide-react';
import { useEscapeClose } from '../hooks/useEscapeClose';

interface TelemetryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelemetryModal: React.FC<TelemetryModalProps> = ({ isOpen, onClose }) => {
  // Accessibility fix: role=dialog + Escape-to-close + initial focus (see useEscapeClose).
  const panelRef = useEscapeClose(isOpen, onClose);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="telemetry-modal-title"
        tabIndex={-1}
        className="bg-white rounded-2xl border border-[#004900]/20 max-w-md w-full p-8 shadow-2xl relative text-center focus:outline-none"
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-500">
          <X className="w-5 h-5" />
        </button>
        <div className="w-14 h-14 rounded-full bg-[#006400] text-white flex items-center justify-center mx-auto mb-4">
          <Mail className="w-7 h-7" />
        </div>
        <h3 id="telemetry-modal-title" className="font-headline text-xl font-bold text-[#2c160e] mb-2">Interested in a Demo?</h3>
        <p className="font-body text-sm text-[#404a3b] mb-6 leading-relaxed">
          Get in touch with us to see how Sagiya's AI solutions can work for your organization.
        </p>
        <button onClick={onClose} className="inline-flex items-center gap-2 bg-[#006400] text-white font-label text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#004d00] transition-colors">
          <span>Contact Us</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { loadGoogleAnalytics } from '../analytics';

interface CookieConsentProps {
  onNavigateTab?: (tab: any) => void;
}

const STORAGE_KEY = 'sagiya-cookie-consent';

export const CookieConsent: React.FC<CookieConsentProps> = ({ onNavigateTab }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage unavailable (private mode, etc.) — show once per session, no persistence
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'declined') => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore — nothing we can persist, banner will just show again next visit
    }
    if (choice === 'accepted') {
      loadGoogleAnalytics();
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#004900]/15 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] animate-in fade-in duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="shrink-0 w-9 h-9 rounded-lg bg-[#ffe2da] flex items-center justify-center text-[#006400]">
          <Cookie className="w-4 h-4" />
        </div>
        <p className="font-body text-sm text-[#404a3b] flex-1 leading-relaxed">
          We use cookies for basic analytics (Google Analytics) to understand how visitors use this site and improve it. See our{' '}
          <button
            onClick={() => onNavigateTab?.('privacy-policy')}
            className="underline text-[#006400] hover:text-[#004d00] font-semibold"
          >
            Privacy Policy
          </button>
          {' '}for details.
        </p>
        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => handleChoice('declined')}
            className="flex-1 sm:flex-none border border-stone-300 text-stone-700 font-label text-sm px-5 py-2.5 rounded-sm hover:bg-stone-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => handleChoice('accepted')}
            className="flex-1 sm:flex-none bg-[#006400] text-white font-label text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-[#004d00] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

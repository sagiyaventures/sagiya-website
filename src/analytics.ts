/**
 * Consent-gated Google Analytics (GA4) loader.
 *
 * GA is NOT loaded by default. It only initializes after the visitor
 * accepts the cookie notice (see CookieConsent.tsx), or immediately on
 * future visits if they already accepted previously (checked in App.tsx).
 */

const GA_MEASUREMENT_ID = 'G-BJ22D6MLCP';
const SCRIPT_ID = 'ga-gtag-script';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function loadGoogleAnalytics(): void {
  if (typeof window === 'undefined') return;
  if (document.getElementById(SCRIPT_ID)) return; // already loaded

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

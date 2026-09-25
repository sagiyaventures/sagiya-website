/**
 * Per-section SEO metadata for the hash-routed single-page app.
 *
 * The static index.html only has one <title>/<meta description>, so every
 * section (solutions, ai-services, photonics, ...) showed identical search
 * snippets. Google does render this app's JS and index the hash URLs
 * already listed in sitemap.xml, so updating these tags per section on
 * navigation gives each indexed URL its own accurate title/description
 * instead of duplicating the homepage's.
 *
 * Copy here is drawn directly from each section's own on-page heading/
 * intro text — nothing invented — just reworded to be search-friendly
 * within normal title/description length limits.
 */
import { NavigationTab } from './types';

interface SeoEntry {
  title: string;
  description: string;
}

export const SEO_BY_TAB: Record<NavigationTab, SeoEntry> = {
  solutions: {
    title: 'Sagiya Ventures | AI & Software Solutions for Government & Enterprise — Tamil Nadu, India',
    description: 'Sagiya Ventures builds AI-powered software validated through real pilots — not slideware. Practical AI and software solutions for government departments and enterprises across India.',
  },
  'ai-services': {
    title: 'AI Services | Custom AI Development & Automation — Sagiya Ventures',
    description: 'Sagiya Ventures designs and delivers custom AI solutions — automation, data analytics, and computer vision — that are practical, transparent, and built for measurable impact.',
  },
  infrastructure: {
    title: 'Technology Stack | AI & Software Infrastructure — Sagiya Ventures',
    description: 'The modern, reliable technology stack Sagiya Ventures uses to build AI and software solutions for government and enterprise clients in India — no unnecessary complexity.',
  },
  about: {
    title: 'About Us | AI Software Company in Tamil Nadu, India — Sagiya Ventures',
    description: 'Sagiya Ventures is an AI and software solutions company committed to building practical, impactful technology for businesses and public institutions across India.',
  },
  'case-studies': {
    title: 'Pilot Projects & Case Studies | Sagiya Ventures AI Solutions',
    description: "Sagiya Ventures' AI pilot and upcoming initiatives, including TNSTC's AI-powered transport optimization for Tamil Nadu's public bus fleet — honest, transparent, real-impact projects.",
  },
  photonics: {
    title: 'Sagiya Photonics | Photonic AI Processing Unit (PPU) for Light-Speed Inference',
    description: 'Sagiya Photonics is developing a Photonic Processing Unit (PPU) that performs AI matrix-vector multiplication by guiding light through silicon photonic interferometer meshes.',
  },
  'privacy-policy': {
    title: 'Privacy Policy — Sagiya Ventures',
    description: 'How Sagiya Ventures collects, uses, and protects your information on sagiyaventures.com.',
  },
  'terms-of-service': {
    title: 'Terms of Service — Sagiya Ventures',
    description: 'The terms and conditions for using the Sagiya Ventures website and services.',
  },
};

export function applySeoForTab(tab: NavigationTab): void {
  const entry = SEO_BY_TAB[tab] ?? SEO_BY_TAB.solutions;

  document.title = entry.title;

  const setMeta = (selector: string, attr: string, value: string) => {
    const el = document.head.querySelector<HTMLMetaElement>(selector);
    if (el) el.setAttribute(attr, value);
  };

  setMeta('meta[name="description"]', 'content', entry.description);
  setMeta('meta[property="og:title"]', 'content', entry.title);
  setMeta('meta[property="og:description"]', 'content', entry.description);
  setMeta('meta[name="twitter:title"]', 'content', entry.title);
  setMeta('meta[name="twitter:description"]', 'content', entry.description);

  const canonicalUrl =
    tab === 'solutions'
      ? 'https://www.sagiyaventures.com/'
      : `https://www.sagiyaventures.com/#${tab}`;
  setMeta('link[rel="canonical"]', 'href', canonicalUrl);
  setMeta('meta[property="og:url"]', 'content', canonicalUrl);
}

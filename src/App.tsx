/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { NavigationTab } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ArchitecturalPillars } from './components/ArchitecturalPillars';
import { InteractiveTopology } from './components/InteractiveTopology';
import { AIServicesView } from './components/AIServicesView';
import { InfrastructureView } from './components/InfrastructureView';
import { AboutUsView } from './components/AboutUsView';
import { CaseStudiesView } from './components/CaseStudiesView';
import { PhotonicsView } from './components/PhotonicsView';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { TelemetryModal } from './components/TelemetryModal';
import { NotFoundView } from './components/NotFoundView';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { TermsOfServiceView } from './components/TermsOfServiceView';
import { CookieConsent } from './components/CookieConsent';
import { loadGoogleAnalytics } from './analytics';
import { applySeoForTab } from './seo';

const VALID_TABS: NavigationTab[] = [
  'solutions',
  'ai-services',
  'infrastructure',
  'about',
  'case-studies',
  'photonics',
  'privacy-policy',
  'terms-of-service',
];

function tabFromHash(): NavigationTab {
  const hash = window.location.hash.replace('#', '');
  return (VALID_TABS as string[]).includes(hash) ? (hash as NavigationTab) : 'solutions';
}

export default function App() {
  // SEO fix: honour a deep-link hash on first load (e.g. /#ai-services from
  // the sitemap or a shared link) instead of always defaulting to 'solutions'.
  const [activeTab, setActiveTab] = useState<NavigationTab>(() => tabFromHash());
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
  const [isTelemetryOpen, setIsTelemetryOpen] = useState(false);

  // SEO/UX fix: keep the URL hash in sync with the active section so that
  // (a) each section is shareable/bookmarkable as its own URL, and
  // (b) the browser Back/Forward buttons move between sections instead of
  //     leaving the site entirely.
  const navigate = useCallback((tab: NavigationTab) => {
    setActiveTab(tab);
    if (window.location.hash.replace('#', '') !== tab) {
      window.history.pushState(null, '', `#${tab}`);
    }
  }, []);

  useEffect(() => {
    const onHashOrPopState = () => setActiveTab(tabFromHash());
    window.addEventListener('hashchange', onHashOrPopState);
    window.addEventListener('popstate', onHashOrPopState);
    return () => {
      window.removeEventListener('hashchange', onHashOrPopState);
      window.removeEventListener('popstate', onHashOrPopState);
    };
  }, []);

  // SEO: give each section its own title/description/canonical instead of
  // reusing the homepage's for every tab (see src/seo.ts).
  useEffect(() => {
    applySeoForTab(activeTab);
  }, [activeTab]);

  // Privacy: only load Google Analytics if the visitor already accepted
  // the cookie notice on a previous visit (see CookieConsent.tsx).
  useEffect(() => {
    try {
      if (window.localStorage.getItem('sagiya-cookie-consent') === 'accepted') {
        loadGoogleAnalytics();
      }
    } catch {
      // localStorage unavailable — skip analytics rather than assume consent
    }
  }, []);

  return (
    <div className="bg-[#ffffff] text-[#2c160e] font-body min-h-screen flex flex-col selection:bg-[#006400] selection:text-[#86df72]">
      {/* Top Sticky Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={navigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Canvas Viewport */}
      <main className="flex-grow">
        {activeTab === 'solutions' && (
          <div>
            {/* Primary Hero Section matching Image 2 */}
            <HeroSection
              onConsult={() => setIsConsultationOpen(true)}
              onViewArchitecture={() => setIsArchitectureOpen(true)}
              onOpenTelemetry={() => setIsTelemetryOpen(true)}
            />

            {/* Architectural Pillars Section matching Image 2 */}
            <ArchitecturalPillars
              onNavigateTab={(tab) => {
                navigate(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Live Interactive Topology & Mesh Explorer */}
            <InteractiveTopology
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {activeTab === 'ai-services' && (
          <AIServicesView
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeTab === 'infrastructure' && (
          <InfrastructureView
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenTelemetry={() => setIsTelemetryOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutUsView
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeTab === 'case-studies' && (
          <CaseStudiesView
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeTab === 'photonics' && (
          <PhotonicsView
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {activeTab === 'privacy-policy' && (
          <PrivacyPolicyView onBack={() => navigate('solutions')} />
        )}

        {activeTab === 'terms-of-service' && (
          <TermsOfServiceView onBack={() => navigate('solutions')} />
        )}

        {!VALID_TABS.includes(activeTab) && (
          <NotFoundView onGoHome={() => navigate('solutions')} />
        )}
      </main>

      {/* Footer matching Image 2 */}
      <Footer
        onNavigateTab={navigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Interactive Modals & Drawers */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <ArchitectureModal
        isOpen={isArchitectureOpen}
        onClose={() => setIsArchitectureOpen(false)}
        onOpenConsultation={() => {
          setIsArchitectureOpen(false);
          setIsConsultationOpen(true);
        }}
      />

      <TelemetryModal
        isOpen={isTelemetryOpen}
        onClose={() => setIsTelemetryOpen(false)}
      />

      <CookieConsent onNavigateTab={navigate} />
    </div>
  );
}

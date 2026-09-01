/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavigationTab } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ArchitecturalPillars } from './components/ArchitecturalPillars';
import { InteractiveTopology } from './components/InteractiveTopology';
import { AIServicesView } from './components/AIServicesView';
import { InfrastructureView } from './components/InfrastructureView';
import { AboutUsView } from './components/AboutUsView';
import { CaseStudiesView } from './components/CaseStudiesView';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { TelemetryModal } from './components/TelemetryModal';
import { NotFoundView } from './components/NotFoundView';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { TermsOfServiceView } from './components/TermsOfServiceView';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('solutions');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
  const [isTelemetryOpen, setIsTelemetryOpen] = useState(false);

  return (
    <div className="bg-[#ffffff] text-[#2c160e] font-body min-h-screen flex flex-col selection:bg-[#006400] selection:text-[#86df72]">
      {/* Top Sticky Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
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
                setActiveTab(tab);
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

        {activeTab === 'privacy-policy' && (
          <PrivacyPolicyView onBack={() => setActiveTab('solutions')} />
        )}

        {activeTab === 'terms-of-service' && (
          <TermsOfServiceView onBack={() => setActiveTab('solutions')} />
        )}

        {!['solutions','ai-services','infrastructure','about','case-studies','privacy-policy','terms-of-service'].includes(activeTab) && (
          <NotFoundView onGoHome={() => setActiveTab('solutions')} />
        )}
      </main>

      {/* Footer matching Image 2 */}
      <Footer
        onNavigateTab={setActiveTab}
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
    </div>
  );
}

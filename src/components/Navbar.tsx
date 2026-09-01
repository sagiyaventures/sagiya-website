import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';
import sagiyaLogo from '../assets/sagiya-logo.jpeg';

interface NavbarProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'solutions', label: 'Solutions' },
    { id: 'ai-services', label: 'AI Services' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'about', label: 'About Us' },
    { id: 'case-studies', label: 'Case Studies' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-[#fff8f6] sticky top-0 z-50 w-full border-b border-[#004900]/10 backdrop-blur-md transition-all duration-200">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-3 flex items-center justify-between">
        {/* Brand */}
        <button
          id="nav-brand-logo"
          onClick={() => handleNavClick('solutions')}
          className="flex items-center gap-3 text-left focus:outline-none group transition-transform"
        >
          {/* Logo in circular border */}
          <div className="relative w-12 h-12 rounded-full group-hover:scale-105 transition-all duration-200 overflow-hidden">
            <img
              src={sagiyaLogo}
              alt="Sagiya Ventures Logo"
              className="w-full h-full rounded-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-headline font-bold text-[#004900] tracking-tight">
              <span style={{fontSize:'26px'}}>S</span><span className="text-xl">agiya </span><span style={{fontSize:'26px', marginRight:'-2px'}}>V</span><span className="text-xl">entures</span>
            </span>
            <span className="text-[10px] text-[#5a6b55] font-medium tracking-widest uppercase">
              AI &amp; Software Solutions
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`font-label text-[14px] tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#004900] font-semibold border-b-2 border-[#004900] pb-1'
                    : 'text-[#404a3b] hover:text-[#004900] font-medium'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Trailing Action */}
        <div className="flex items-center gap-4">
          <button
            id="nav-consult-cta-desktop"
            onClick={onOpenConsultation}
            className="hidden md:inline-flex items-center justify-center bg-[#006400] text-white font-label text-[14px] px-6 py-2.5 rounded-sm hover:bg-[#004d00] active:scale-[0.98] transition-all duration-200 font-medium tracking-wide shadow-xs"
          >
            Get in Touch
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="nav-mobile-menu-toggle"
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#004900] hover:bg-[#ffdbd0]/30 rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fff8f6] border-b border-[#004900]/10 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base py-2 px-3 rounded-md transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#006400]/10 text-[#004900] font-semibold'
                    : 'text-[#404a3b] hover:bg-[#ffdbd0]/20'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-[#004900]/10">
              <button
                id="mobile-nav-consult-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#006400] text-white py-3 rounded font-medium text-sm shadow-xs"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

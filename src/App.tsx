/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { TopUrgencyBar } from './components/TopUrgencyBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { InteractiveEffectsGallery } from './components/InteractiveEffectsGallery';
import { TerminalPromptBox } from './components/TerminalPromptBox';
import { SocialProofCounters } from './components/SocialProofCounters';
import { PainPointsSection } from './components/PainPointsSection';
import { MethodFramework } from './components/MethodFramework';
import { RoiCalculator } from './components/RoiCalculator';
import { CourseCurriculum } from './components/CourseCurriculum';
import { ExclusiveBonuses } from './components/ExclusiveBonuses';
import { MentorSection } from './components/MentorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ForWhoSection } from './components/ForWhoSection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingCtaBar } from './components/FloatingCtaBar';
import { WhatsAppHelpModal } from './components/WhatsAppHelpModal';

export default function App() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#0B0D12] flex flex-col selection:bg-[#D6BE96] selection:text-[#0B0D12]">
      
      {/* 1. Urgency Countdown Announcement Top Bar */}
      <TopUrgencyBar />

      {/* 2. Top Navigation Bar conforming to the Top Bar Contract */}
      <Header />

      <main className="flex-grow">
        {/* 3. Hero Section with Neo-brutalist Showcase & Direct Conversion CTAs */}
        <HeroSection />

        {/* 4. Infinite Marquee Ticker Tape (Inspired by Ninja LP) */}
        <MarqueeBanner />

        {/* 5. The Dynamic Interactive Effects Gallery (Inspired by "16 Efeitos") */}
        <InteractiveEffectsGallery />

        {/* 6. Interactive Terminal / Scripts Engine Prompt Box */}
        <TerminalPromptBox />

        {/* 7. Social Proof Quantitative Metrics Bar */}
        <SocialProofCounters />

        {/* 8. Pain Points Agitation (O que acontece hoje vs. Método Fontenelle) */}
        <PainPointsSection />

        {/* 9. Method Pillars Framework */}
        <MethodFramework />

        {/* 10. Interactive ROI Revenue Calculator for Clinics */}
        <RoiCalculator />

        {/* 11. Course Curriculum (6 Complete Modules with Lessons) */}
        <CourseCurriculum />

        {/* 12. Exclusive Free Bonuses Stack */}
        <ExclusiveBonuses />

        {/* 13. Mentor Alexandre Fontinele Authority & Background */}
        <MentorSection />

        {/* 14. Real Clinic Social Proof & Case Studies */}
        <TestimonialsSection />

        {/* 15. "Antes de Comprar, Veja se é pra Você" (#pra-voce Section) */}
        <ForWhoSection />

        {/* 16. Irresistible Offer, Neo-brutalist Anchoring & Cakto Checkout CTA */}
        <PricingOfferSection />

        {/* 17. 7-Day Unconditional Guarantee (Risco Zero) */}
        <GuaranteeSection />

        {/* 18. Interactive FAQ Accordion */}
        <FaqSection onOpenSupport={() => setIsSupportModalOpen(true)} />

        {/* 19. Second Marquee Banner */}
        <MarqueeBanner />
      </main>

      {/* 20. Quiet Luxury Neo-brutal Footer */}
      <Footer />

      {/* 21. Floating Conversion CTA Bar (Mobile & Desktop) */}
      <FloatingCtaBar />

      {/* 22. Floating WhatsApp Support Button */}
      <button
        onClick={() => setIsSupportModalOpen(true)}
        className="fixed bottom-16 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 rounded-full bg-[#0B0D12] text-[#D6BE96] border-2 border-[#D6BE96] shadow-[3px_3px_0_#D6BE96] hover:scale-105 active:scale-95 transition-all flex items-center justify-center group cursor-pointer"
        title="Dúvidas no WhatsApp"
        aria-label="Falar com consultor no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-[#D6BE96]" />
        <span className="sr-only">Suporte no WhatsApp</span>
      </button>

      {/* 23. WhatsApp Consultation Modal */}
      <WhatsAppHelpModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />

    </div>
  );
}

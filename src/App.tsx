/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
import { MentorSection } from './components/MentorSection';
import { ForWhoSection } from './components/ForWhoSection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingCtaBar } from './components/FloatingCtaBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#0B0D12] flex flex-col selection:bg-[#D6BE96] selection:text-[#0B0D12]">
      
      {/* 1. Urgency Countdown Announcement Top Bar */}
      <TopUrgencyBar />

      {/* 2. Top Navigation Bar conforming to the Top Bar Contract */}
      <Header />

      <main className="flex-grow">
        {/* 3. Hero Section with Neo-brutalist Showcase & Direct Conversion CTAs */}
        <HeroSection />

        {/* 4. Infinite Marquee Ticker Tape in Azul Acinzentado */}
        <MarqueeBanner />

        {/* 5. The Dynamic Interactive Effects Gallery (Módulo 04 WhatsApp Scripts & Pós-Venda) */}
        <InteractiveEffectsGallery />

        {/* 6. Interactive Terminal / Scripts Engine Prompt Box */}
        <TerminalPromptBox />

        {/* 7. Social Proof Quantitative Metrics Bar */}
        <SocialProofCounters />

        {/* 8. Pain Points Agitation (Gargalos das Clínicas vs. Método 3²) */}
        <PainPointsSection />

        {/* 9. Method Pillars Framework (Os 3 Pilares & Detalhamento do Pilar 3) */}
        <MethodFramework />

        {/* 10. Interactive ROI / Diagnóstico de Lucro Clínico */}
        <RoiCalculator />

        {/* 11. Grade Curricular Completa (8 Módulos • 22h de Conteúdo) */}
        <CourseCurriculum />

        {/* 12. Mentor Alexandre Fontinele Authority & Bio */}
        <MentorSection />

        {/* 13. "Antes de Comprar, Veja se é pra Você" (#para-voce Section) */}
        <ForWhoSection />

        {/* 14. Planos & Ofertas (Plano Completo e Plano VIP com Mentoria) */}
        <PricingOfferSection />

        {/* 15. Garantia Incondicional de 7 Dias (Risco Zero) */}
        <GuaranteeSection />

        {/* 16. Perguntas Frequentes (8 Dúvidas Respondidas) */}
        <FaqSection />

        {/* 17. Second Marquee Banner */}
        <MarqueeBanner />
      </main>

      {/* 18. Rodapé Institucional com Azul Acinzentado */}
      <Footer />

      {/* 19. Floating Conversion CTA Bar (Mobile & Desktop - Direto para o Checkout) */}
      <FloatingCtaBar />

    </div>
  );
}

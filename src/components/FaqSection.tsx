import React, { useState } from 'react';
import { Plus, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_LIST, CHECKOUT_URL } from '../data/landingData';

interface FaqSectionProps {
  onOpenSupport?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenSupport }) => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="adesivo mb-3 inline-block">
            ★ Dúvidas? Direto ao Ponto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Perguntas Frequentes de <span className="block mt-1"><span className="mk">Donos de Clínicas</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3B3F4A] font-medium">
            Tire todas as suas dúvidas antes de garantir sua vaga promocional:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="nb bg-white border-3 border-[#0B0D12] shadow-[4px_4px_0_#0B0D12] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-black text-[#0B0D12] font-display">
                    {faq.question}
                  </span>
                  <div 
                    className={`w-8 h-8 rounded-lg bg-[#F7F5F0] border-2 border-[#0B0D12] flex items-center justify-center text-[#0B0D12] shrink-0 font-bold transition-transform duration-200 ${
                      isOpen ? 'rotate-45 bg-[#D6BE96]' : ''
                    }`}
                  >
                    <Plus className="w-5 h-5 stroke-[3]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#3B3F4A] leading-relaxed border-t-2 border-[#0B0D12]/20 pt-3 font-medium bg-[#F7F5F0]/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border-3 border-[#0B0D12] shadow-[5px_5px_0_#0B0D12] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 border-2 border-[#0B0D12]">
              <MessageCircle className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-base font-black text-[#0B0D12]">
                Ainda tem alguma dúvida sobre a sua clínica?
              </h4>
              <p className="text-xs text-[#5E626D] font-medium">
                Nossos consultores da Fontenelle Academy atendem você pelo WhatsApp.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenSupport}
            className="px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-[#0B0D12] bg-[#F7F5F0] hover:bg-[#D6BE96] border-2 border-[#0B0D12] shadow-[3px_3px_0_#0B0D12] active:translate-x-0.5 active:translate-y-0.5 transition-all whitespace-nowrap cursor-pointer uppercase"
          >
            Falar no WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};

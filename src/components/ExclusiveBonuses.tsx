import React from 'react';
import { MessageSquareText, FileSpreadsheet, Sparkles, Mic, Users, Gift, Check } from 'lucide-react';
import { EXCLUSIVE_BONUSES, CHECKOUT_URL } from '../data/landingData';

export const ExclusiveBonuses: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquareText':
        return MessageSquareText;
      case 'FileSpreadsheet':
        return FileSpreadsheet;
      case 'Sparkles':
        return Sparkles;
      case 'Mic':
        return Mic;
      case 'Users':
        return Users;
      default:
        return Gift;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="adesivo mb-3 inline-block">
            ★ Presentes Exclusivos Desta Turma
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Mais de <span className="block mt-1"><span className="mk">R$ 1.380 em Bônus Gratuitos</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3B3F4A] font-medium">
            Ferramentas práticas e aceleradores prontos para você não perder tempo criando nada do zero:
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXCLUSIVE_BONUSES.map((bonus) => {
            const IconComponent = getIcon(bonus.iconName);
            return (
              <div
                key={bonus.id}
                className="nb bg-white p-6 border-3 border-[#0B0D12] shadow-[5px_5px_0_#0B0D12] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-black tracking-wider text-[#0B0D12] bg-[#D6BE96] px-2.5 py-0.5 rounded border border-[#0B0D12]">
                      {bonus.tag}
                    </span>
                    <div className="text-right">
                      <span className="text-xs text-neutral-400 line-through block font-mono">
                        {bonus.originalPrice}
                      </span>
                      <span className="text-xs font-black text-emerald-700 uppercase">
                        GRÁTIS HOJE
                      </span>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#0B0D12] text-[#D6BE96] flex items-center justify-center mb-4 border-2 border-[#0B0D12]">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0B0D12] font-display mb-2">
                    {bonus.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3B3F4A] leading-relaxed mb-4 font-medium">
                    {bonus.description}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-[#0B0D12]/20 space-y-2">
                  {bonus.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#0B0D12] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0B0D12] shrink-0 mt-0.5 stroke-[3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Bonus Anchor Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B0D12] text-white text-center border-4 border-[#0B0D12] shadow-[6px_6px_0_#D6BE96]">
          <span className="adesivo adesivo-tinta text-[10px] mb-2 inline-block">
            ★ Condição de Lote Promocional
          </span>
          <h4 className="text-2xl font-black font-display text-white">
            Todos os 5 Bônus inclusos com 100% de desconto
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-xl mx-auto font-medium">
            Garantindo sua vaga agora, você recebe o Curso Completo Fontenelle Academy + todos os materiais bônus liberados na hora.
          </p>

          <div className="mt-6">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nb text-xs sm:text-sm font-black inline-flex items-center gap-2"
            >
              <span>Garantir Meus Bônus Gratuitos Agora</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

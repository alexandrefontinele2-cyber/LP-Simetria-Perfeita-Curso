import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Lock, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, MENTORIA_WHATSAPP_URL } from '../data/landingData';

export const PricingOfferSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 38,
    seconds: 44
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        }
        return { minutes: 45, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  const courseBenefits = [
    'Acesso imediato a todo o conteúdo do curso Simetria Perfeita',
    'Diagnóstico inteligente da sua clínica (R$ 997,00)',
    'Playbook de Scripts de WhatsApp da Secretária',
    'Materiais práticos inclusos para aplicação com a equipe',
    'Suporte prioritário para dúvidas na plataforma',
    'Garantia Incondicional de 7 Dias (Risco Zero)'
  ];

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="adesivo mb-3 inline-block">
            ★ Escolha Sua Forma de Acesso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Comece a Transformar Sua Clínica <span className="block mt-1"><span className="mk">Hoje Mesmo com o Método 3²</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E242B] max-w-xl mx-auto font-medium">
            Acesso ao curso completo com condição especial de lançamento ou contato direto para a mentoria personalizada:
          </p>
        </div>

        {/* 2 Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* CARD 1: SIMETRIA PERFEITA COMPLETO (7 Cols - Featured) */}
          <div className="lg:col-span-7 nb bg-white border-4 border-[#0B0D12] rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0_#0B0D12] relative flex flex-col justify-between">
            
            {/* Top Tilted Adhesive Stamp */}
            <div className="absolute -top-4 -left-2 sm:-left-3 z-20">
              <span className="adesivo text-xs py-1.5 px-3 shadow-[3px_3px_0_#0B0D12]">
                ★ MAIS ESCOLHIDO
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#0B0D12] pt-2">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#8495A6] font-mono font-bold block">
                    Treinamento Completo
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-display text-[#0B0D12]">
                    Simetria Perfeita Completo
                  </h3>
                </div>

                <div className="bg-[#8495A6] text-white px-2.5 py-1 rounded-lg border-2 border-[#0B0D12] text-xs font-mono font-bold">
                  {formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
                </div>
              </div>

              {/* Price Block */}
              <div className="py-6 border-b-2 border-[#0B0D12]/20">
                <span className="text-xs text-neutral-400 line-through font-mono font-bold">
                  De: R$ 997,00
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm font-bold text-[#0B0D12]">Por:</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#0B0D12] font-display tabular-nums">
                    12x R$ 41,01
                  </span>
                </div>
                <p className="text-xs font-bold text-[#8495A6] mt-1">
                  no cartão de crédito (ou <strong className="text-[#0B0D12]">R$ 397,00</strong> à vista no Pix)
                </p>
              </div>

              {/* Benefits list */}
              <div className="py-6 space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#0B0D12] block">
                  Benefícios Inclusos:
                </span>
                {courseBenefits.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B0D12] font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 mt-0.5 border border-[#0B0D12] font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button - Directly to Checkout */}
            <div className="pt-4 border-t-2 border-[#0B0D12]/20">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-nb text-xs sm:text-sm font-black flex items-center justify-center gap-2 py-4 shadow-[4px_4px_0_#0B0D12]"
              >
                <span>QUERO ESCALAR MINHA CLÍNICA AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-[#1E242B] font-bold">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#8495A6]" /> Compra Segura Cakto
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 7 Dias de Garantia
                </span>
              </div>
            </div>

          </div>

          {/* CARD 2: MENTORIA COM ALEXANDRE FONTINELE (Atendimento Exclusivo) */}
          <div 
            style={{ backgroundColor: '#8495A6', color: '#FFFFFF' }}
            className="lg:col-span-5 nb-cinza-azul border-4 border-[#0B0D12] rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0_#0B0D12] relative flex flex-col justify-between"
          >
            
            {/* Top Adhesive Stamp */}
            <div className="absolute -top-4 -right-2 sm:-right-3 z-20">
              <span className="adesivo text-xs py-1.5 px-3 bg-[#D6BE96] text-[#0B0D12] font-black shadow-[3px_3px_0_#0B0D12]">
                ★ ACOMPANHAMENTO INDIVIDUAL
              </span>
            </div>

            <div>
              <div className="pb-4 border-b-2 border-white/30 pt-2">
                <span className="text-[11px] uppercase tracking-widest text-[#D6BE96] font-mono font-black block">
                  Atendimento Exclusivo
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-display text-white mt-0.5">
                  Mentoria com Alexandre Fontinele
                </h3>
                <span className="text-xs text-white font-bold block mt-1">
                  Quero saber mais sobre a mentoria
                </span>
              </div>

              {/* Mentoria Description - Fundo Claro com Fonte em Preto para máxima legibilidade */}
              <div className="py-6 border-b-2 border-white/30">
                <div className="p-4 rounded-2xl bg-white text-[#0B0D12] border-2 border-[#0B0D12] shadow-[3px_3px_0_#0B0D12] text-xs leading-relaxed font-semibold">
                  <p>
                    Acompanhamento estratégico individual e personalizado para proprietários de clínicas que desejam uma análise aprofundada da sua operação, equipe e plano de escala.
                  </p>
                </div>
              </div>

              {/* Mentoria Highlights - Fonte Branca com Fundo Escuro */}
              <div className="py-6 space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#D6BE96] block">
                  O que contempla a mentoria:
                </span>
                <div className="flex items-start gap-2.5 text-xs text-white font-bold">
                  <Sparkles className="w-4 h-4 text-[#D6BE96] shrink-0 mt-0.5" />
                  <span className="text-white">Diagnóstico individualizado da operação da sua clínica</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white font-bold">
                  <Sparkles className="w-4 h-4 text-[#D6BE96] shrink-0 mt-0.5" />
                  <span className="text-white">Estruturação personalizada de processos comerciais e marketing</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-white font-bold">
                  <Sparkles className="w-4 h-4 text-[#D6BE96] shrink-0 mt-0.5" />
                  <span className="text-white">Canal direto com Alexandre Fontinele para direcionamento de decisões</span>
                </div>
              </div>
            </div>

            {/* CTA Button - Directly to WhatsApp: 43 98862-8997 */}
            <div className="pt-4 border-t-2 border-white/30">
              <a
                href={MENTORIA_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-nb bg-[#D6BE96] text-[#0B0D12] text-xs sm:text-sm font-black flex items-center justify-center gap-2 py-4 shadow-[4px_4px_0_#0B0D12] hover:bg-white"
              >
                <MessageCircle className="w-4 h-4 text-[#0B0D12]" />
                <span>QUERO SABER MAIS SOBRE A MENTORIA</span>
              </a>

              <p className="mt-3 text-center text-xs text-white font-bold">
                Contato direto via WhatsApp: <span className="text-[#D6BE96] font-mono font-black">(43) 98862-8997</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

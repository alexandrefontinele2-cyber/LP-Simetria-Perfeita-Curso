import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Zap, Lock, CreditCard, Sparkles, ArrowRight, Star } from 'lucide-react';
import { CHECKOUT_URL, PLANS } from '../data/landingData';

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

  const planCompleto = PLANS[0];
  const planVip = PLANS[1];

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="adesivo mb-3 inline-block">
            ★ Escolha Seu Plano de Acesso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Comece a Transformar Sua Clínica <span className="block mt-1"><span className="mk">Hoje Mesmo com o Método 3²</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3B3F4A] max-w-xl mx-auto font-medium">
            Selecione o plano ideal para a fase da sua clínica e garanta as condições exclusivas de lançamento:
          </p>
        </div>

        {/* 2 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* PLANO 1: SIMETRIA PERFEITA COMPLETO (7 Cols - Featured) */}
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
                    Plano 1 · Treinamento Completo
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-display text-[#0B0D12]">
                    {planCompleto.name}
                  </h3>
                </div>

                <div className="bg-[#8495A6] text-white px-2.5 py-1 rounded-lg border-2 border-[#0B0D12] text-xs font-mono font-bold">
                  {formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
                </div>
              </div>

              {/* Price Block */}
              <div className="py-6 border-b-2 border-[#0B0D12]/20">
                <span className="text-xs text-neutral-400 line-through font-mono font-bold">
                  De: {planCompleto.originalPrice}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm font-bold text-[#0B0D12]">Por:</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#0B0D12] font-display tabular-nums">
                    {planCompleto.installments}
                  </span>
                </div>
                <p className="text-xs font-bold text-[#8495A6] mt-1">
                  no cartão de crédito (ou <strong className="text-[#0B0D12]">{planCompleto.cashPrice}</strong> no Pix)
                </p>
              </div>

              {/* Benefits list */}
              <div className="py-6 space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#0B0D12] block">
                  Benefícios Inclusos:
                </span>
                {planCompleto.benefits.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B0D12] font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 mt-0.5 border border-[#0B0D12] font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t-2 border-[#0B0D12]/20">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-nb text-xs sm:text-sm font-black flex items-center justify-center gap-2 py-4 shadow-[4px_4px_0_#0B0D12]"
              >
                <span>{planCompleto.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-[#5E626D] font-bold">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" /> Compra Segura Cakto
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 7 Dias de Garantia
                </span>
              </div>
            </div>

          </div>

          {/* PLANO 2: PLANO VIP COM MENTORIA (5 Cols) */}
          <div className="lg:col-span-5 nb bg-[#8495A6] text-white border-4 border-[#0B0D12] rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0_#0B0D12] relative flex flex-col justify-between">
            
            {/* Top Adhesive Stamp */}
            <div className="absolute -top-4 -right-2 sm:-right-3 z-20">
              <span className="adesivo text-xs py-1.5 px-3 bg-[#D6BE96] text-[#0B0D12] shadow-[3px_3px_0_#0B0D12]">
                ★ VAGAS LIMITADAS
              </span>
            </div>

            <div>
              <div className="pb-4 border-b-2 border-white/20 pt-2">
                <span className="text-[11px] uppercase tracking-widest text-[#D6BE96] font-mono font-bold block">
                  Plano 2 · Acompanhamento Premium
                </span>
                <h3 className="text-xl font-black font-display text-white mt-0.5">
                  PLANO VIP + MENTORIA COM O ESTRATEGISTA
                </h3>
                <span className="text-xs text-neutral-100 font-bold block mt-0.5">
                  Com Análise Individual de Clínica
                </span>
              </div>

              {/* Price Block */}
              <div className="py-6 border-b-2 border-white/20">
                <span className="text-xs text-neutral-300 line-through font-mono font-bold">
                  De: {planVip.originalPrice}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm font-bold text-white">Por:</span>
                  <span className="text-3xl sm:text-4xl font-black text-[#D6BE96] font-display tabular-nums">
                    {planVip.installments}
                  </span>
                </div>
                <p className="text-xs font-bold text-white/90 mt-1">
                  no cartão (ou <strong className="text-white">{planVip.cashPrice}</strong> à vista no Pix)
                </p>
              </div>

              {/* Benefits list */}
              <div className="py-6 space-y-2.5">
                <span className="text-xs font-black uppercase tracking-wider text-[#D6BE96] block">
                  Tudo do Plano Completo + Exclusividades:
                </span>
                {planVip.benefits.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-white font-medium">
                    <Star className="w-3.5 h-3.5 text-[#D6BE96] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t-2 border-white/20">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-nb bg-[#D6BE96] text-[#0B0D12] text-xs sm:text-sm font-black flex items-center justify-center gap-2 py-4 shadow-[4px_4px_0_#0B0D12]"
              >
                <span>{planVip.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="mt-3 text-center text-[11px] text-white/80 font-bold">
                Mentoria quinzenal de 2 meses com Alexandre Fontinele
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Zap, Lock, CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

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
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 45, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12] relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="adesivo mb-3 inline-block">
            Oferta Especial com Desconto de Lançamento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Tudo o que sua clínica precisa. <span className="block mt-1"><span className="mk">Em um só lugar, na hora.</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3B3F4A] max-w-xl mx-auto font-medium">
            Leve o método validado, todos os scripts mastigados e os 5 bônus exclusivos pelo menor valor já oferecido:
          </p>
        </div>

        {/* The Giant Neo-Brutalist Offer Card Container (modeled on Ninja's ofr-cartao) */}
        <div className="nb bg-white border-4 border-[#0B0D12] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0_#0B0D12] relative">
          
          {/* Top Tilted Adhesive Stamp */}
          <div className="absolute -top-4 -left-2 sm:-left-4 z-20">
            <span className="adesivo text-xs sm:text-sm py-1.5 px-3.5 shadow-[4px_4px_0_#0B0D12] transform -rotate-3">
              ★ SUA CLÍNICA COMEÇA AQUI
            </span>
          </div>

          {/* Top urgency tag */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b-3 border-[#0B0D12] gap-3 pt-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8495A6] font-bold block">
                Acesso Imediato por 1 Ano Inteiro
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-[#0B0D12] mt-0.5">
                Fontenelle Academy · Gestão & Vendas de Clínicas
              </h3>
            </div>
            
            <div className="bg-[#0B0D12] text-[#D6BE96] px-3.5 py-1.5 rounded-xl border-2 border-[#0B0D12] flex items-center gap-2 self-start sm:self-center">
              <span className="text-xs text-neutral-300 font-mono">Oferta expira em:</span>
              <span className="text-xs font-mono font-black text-[#D6BE96] tabular-nums">
                {formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
              </span>
            </div>
          </div>

          {/* Value Stack Breakdown */}
          <div className="py-6 space-y-3.5 border-b-3 border-[#0B0D12]">
            <div className="flex items-center justify-between text-xs sm:text-sm text-[#0B0D12] font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 border border-[#0B0D12] font-bold text-xs">✓</span>
                <span>Curso Completo Fontenelle Academy (6 Módulos Práticos)</span>
              </div>
              <span className="text-neutral-400 line-through font-mono">R$ 997,00</span>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-[#0B0D12] font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 border border-[#0B0D12] font-bold text-xs">✓</span>
                <span>Bônus 1: O Livro de Ouro de Scripts de WhatsApp para Secretárias</span>
              </div>
              <span className="text-neutral-400 line-through font-mono">R$ 397,00</span>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-[#0B0D12] font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 border border-[#0B0D12] font-bold text-xs">✓</span>
                <span>Bônus 2: Planilha Dinâmica Financeira, DRE & Comissões</span>
              </div>
              <span className="text-neutral-400 line-through font-mono">R$ 297,00</span>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-[#0B0D12] font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 border border-[#0B0D12] font-bold text-xs">✓</span>
                <span>Bônus 3: Manual de Boas-Vindas & Encantamento do Paciente VIP</span>
              </div>
              <span className="text-neutral-400 line-through font-mono">R$ 197,00</span>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-[#0B0D12] font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 border border-[#0B0D12] font-bold text-xs">✓</span>
                <span>Bônus 4: Masterclass: Oratória & Liderança com Alexandre Fontinele</span>
              </div>
              <span className="text-neutral-400 line-through font-mono">R$ 497,00</span>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-[#0B0D12] font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 border border-[#0B0D12] font-bold text-xs">✓</span>
                <span>Bônus 5: Comunidade Fechada de Donos de Clínicas e Networking</span>
              </div>
              <span className="text-emerald-700 font-bold text-xs uppercase bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                Incluso Grátis
              </span>
            </div>

            <div className="pt-3 flex justify-between text-xs text-[#3B3F4A] font-bold">
              <span>Valor somado de tudo:</span>
              <span className="line-through font-mono text-neutral-500">R$ 2.385,00</span>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="py-8 text-center flex flex-col items-center bg-[#F7F5F0]/60 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-10 rounded-b-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0B0D12] font-bold mb-2">
              Condição Promocional Exclusiva:
            </span>

            <div className="flex items-baseline justify-center gap-2">
              <span className="text-base sm:text-lg text-[#0B0D12] font-bold">12x de</span>
              <span className="text-5xl sm:text-7xl font-black text-[#0B0D12] font-display tracking-tight tabular-nums">
                R$ 29,82
              </span>
            </div>

            <p className="mt-2 text-sm sm:text-base text-[#0B0D12] font-medium">
              ou apenas <strong>R$ 297,00 à vista</strong> no Pix
            </p>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 mt-2">
              ⚡ Mais de R$ 2.000,00 de economia garantida
            </span>

            {/* Giant Primary Checkout CTA Button */}
            <div className="mt-8 w-full max-w-md">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-nb text-base sm:text-lg font-black flex items-center justify-center gap-3 py-5"
              >
                <Zap className="w-5 h-5 fill-[#0B0D12] text-[#0B0D12]" />
                <span>Quero a Minha Vaga com Desconto</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Security and reassurance badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-[#0B0D12]">
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#0B0D12]" />
                <span>Pagamento 100% Seguro pela Cakto</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0B0D12]" />
                <span>7 Dias de Garantia Incondicional</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#0B0D12]" />
                <span>Acesso Imediato no E-mail</span>
              </div>
            </div>

            {/* Payment methods icons note */}
            <div className="mt-6 pt-4 border-t-2 border-[#0B0D12]/20 flex items-center justify-center gap-3 text-xs text-[#3B3F4A] font-medium">
              <CreditCard className="w-4 h-4 text-[#0B0D12]" />
              <span>Aceitamos Pix, Cartão de Crédito parcelado e Boleto Bancário</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

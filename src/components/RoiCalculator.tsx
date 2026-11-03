import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Users, DollarSign, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const RoiCalculator: React.FC = () => {
  const [clientesMes, setClientesMes] = useState<number>(60);
  const [ticketMedio, setTicketMedio] = useState<number>(850);

  // Formula solicitada:
  // Quantidade de clientes no mês x ticket médio dos atendimentos no mês = faturamento esperado.
  // "Precisa ter x clientes com tanto de ticket médio e isso compõe o faturamento. Menos clientes, menor o faturamento."
  const faturamentoEsperado = clientesMes * ticketMedio;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-white border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="adesivo mb-3 inline-block">
            ★ Régua de Faturamento da Clínica
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Descubra Quanto Dinheiro Sua Clínica Está <span className="block mt-1"><span className="mk">Deixando na Mesa Todo Mês.</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E242B] font-medium">
            Ajuste a quantidade de clientes e o ticket médio dos atendimentos para calcular a composição exata do faturamento da sua clínica:
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Controls Panel (7 columns) */}
          <div className="lg:col-span-7 nb bg-[#F7F5F0] p-6 sm:p-8 border-4 border-[#0B0D12] shadow-[6px_6px_0_#0B0D12] flex flex-col justify-between">
            <div className="space-y-7">
              
              <div className="flex items-center gap-2 border-b-2 border-[#0B0D12]/20 pb-3">
                <Calculator className="w-5 h-5 text-[#8495A6]" />
                <h3 className="text-base font-black text-[#0B0D12] font-display uppercase tracking-wide">
                  Parâmetros de Atendimento
                </h3>
              </div>

              {/* Slider 1: Quantidade de clientes no mês */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-black text-[#0B0D12] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#8495A6]" />
                    <span>Quantidade de clientes no mês:</span>
                  </label>
                  <span className="text-sm font-mono font-black text-[#0B0D12] bg-white px-3 py-1 rounded-lg border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
                    {clientesMes} clientes
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="250"
                  step="5"
                  value={clientesMes}
                  onChange={(e) => setClientesMes(Number(e.target.value))}
                  className="w-full accent-[#0B0D12] h-2.5 bg-neutral-300 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#1E242B] mt-1 font-bold">
                  <span>10 clientes</span>
                  <span>120 clientes</span>
                  <span>250+ clientes</span>
                </div>
              </div>

              {/* Slider 2: Ticket médio dos atendimentos no mês */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-black text-[#0B0D12] flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-[#8495A6]" />
                    <span>Ticket médio dos atendimentos no mês:</span>
                  </label>
                  <span className="text-sm font-mono font-black text-[#0B0D12] bg-white px-3 py-1 rounded-lg border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
                    {formatCurrency(ticketMedio)}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3500"
                  step="50"
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(Number(e.target.value))}
                  className="w-full accent-[#0B0D12] h-2.5 bg-neutral-300 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#1E242B] mt-1 font-bold">
                  <span>R$ 200</span>
                  <span>R$ 1.800</span>
                  <span>R$ 3.500+</span>
                </div>
              </div>

              {/* Dinâmica da regra explicada */}
              <div className="p-4 rounded-xl bg-white border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12] text-xs text-[#0B0D12] font-medium leading-relaxed">
                <span className="font-black block uppercase text-[11px] text-[#8495A6] mb-1">
                  A Equação do Seu Negócio:
                </span>
                <p>
                  Para atingir seu faturamento, sua clínica <strong>precisa ter {clientesMes} clientes</strong> atendidos com <strong>ticket médio de {formatCurrency(ticketMedio)}</strong>. Menos clientes ou ticket menor significa menor faturamento e maior aperto de caixa.
                </p>
              </div>

            </div>

            {/* Current status summary */}
            <div className="mt-6 pt-4 border-t-2 border-[#0B0D12]/20 flex items-center justify-between text-xs font-bold text-[#1E242B]">
              <span>Capacidade operacional simulada:</span>
              <span className="font-mono text-[#0B0D12] font-black">
                {clientesMes} atendimentos/mês
              </span>
            </div>

          </div>

          {/* Results Card with Azul Acinzentado (#8495A6) background */}
          <div 
            style={{ backgroundColor: '#8495A6', color: '#FFFFFF' }}
            className="lg:col-span-5 nb-cinza-azul p-6 sm:p-8 border-4 border-[#0B0D12] rounded-2xl shadow-[6px_6px_0_#0B0D12] flex flex-col justify-between relative overflow-hidden"
          >
            
            <div className="relative z-10">
              <span className="adesivo text-[10px] text-[#0B0D12] font-black mb-2 inline-block">
                ★ Resultado da Composição
              </span>
              <h3 className="text-2xl font-black font-display text-white">
                Faturamento Esperado:
              </h3>

              <div className="mt-5 space-y-4">
                
                {/* Big Metric Box (Fundo Dourado com texto preto em alto contraste) */}
                <div className="p-5 rounded-2xl bg-[#D6BE96] text-[#0B0D12] border-3 border-[#0B0D12] shadow-[4px_4px_0_#0B0D12]">
                  <span className="text-[11px] font-black uppercase tracking-wider block text-[#0B0D12]">
                    Total Composto no Mês:
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-mono tabular-nums mt-1 text-[#0B0D12]">
                    {formatCurrency(faturamentoEsperado)}
                  </div>
                  <div className="text-xs font-black mt-2 pt-2 border-t border-[#0B0D12]/20 font-mono text-[#0B0D12]">
                    {clientesMes} clientes × {formatCurrency(ticketMedio)} = {formatCurrency(faturamentoEsperado)}
                  </div>
                </div>

                {/* Explanatory points (Fundo Branco com texto Preto em alto contraste) */}
                <div className="p-4 rounded-xl bg-white text-[#0B0D12] border-2 border-[#0B0D12] shadow-[3px_3px_0_#0B0D12] text-xs font-bold space-y-2.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8495A6] shrink-0 mt-0.5" />
                    <span className="text-[#0B0D12]">Precisa ter {clientesMes} clientes com {formatCurrency(ticketMedio)} de ticket médio para compor esse faturamento.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-[#0B0D12]">Menos clientes atendidos = menor faturamento gerado.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8495A6] shrink-0 mt-0.5" />
                    <span className="text-[#0B0D12]">O Simetria Perfeita organiza sua clínica para atrair e reter os clientes certos com tickets mais saudáveis.</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action button inside card */}
            <div className="mt-6 pt-4 border-t border-[#0B0D12]/20 relative z-10">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nb text-xs font-black w-full flex items-center justify-center gap-2"
              >
                <span>QUERO ESCALAR MINHA CLÍNICA AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

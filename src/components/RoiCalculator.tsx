import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const RoiCalculator: React.FC = () => {
  const [leadsPerMonth, setLeadsPerMonth] = useState<number>(100);
  const [averageTicket, setAverageTicket] = useState<number>(2500);
  const [currentConversionRate, setCurrentConversionRate] = useState<number>(12);

  const projectedConversionRate = Math.min(Math.max(currentConversionRate * 2.8, 35), 65);

  const currentPatients = Math.round((leadsPerMonth * currentConversionRate) / 100);
  const currentRevenue = currentPatients * averageTicket;

  const projectedPatients = Math.round((leadsPerMonth * projectedConversionRate) / 100);
  const projectedRevenue = projectedPatients * averageTicket;

  const monthlyExtraRevenue = projectedRevenue - currentRevenue;
  const annualExtraRevenue = monthlyExtraRevenue * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculadora" className="py-16 sm:py-24 bg-white border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="adesivo mb-3 inline-block">
            ★ Calculadora de Impacto Financeiro
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Descubra quanto dinheiro sua clínica está <span className="block mt-1"><span className="mk">deixando na mesa todo mês.</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3B3F4A] font-medium">
            Mova as barras abaixo de acordo com a sua clínica e veja a projeção real ao profissionalizar o atendimento no WhatsApp:
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Controls Panel (7 columns) */}
          <div className="lg:col-span-7 nb bg-[#F7F5F0] p-6 sm:p-8 border-4 border-[#0B0D12] shadow-[6px_6px_0_#0B0D12] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Slider 1: Leads */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-black text-[#0B0D12]">
                    Contatos / Leads no WhatsApp por mês:
                  </label>
                  <span className="text-sm font-mono font-black text-[#0B0D12] bg-white px-3 py-1 rounded-lg border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
                    {leadsPerMonth} contatos
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full accent-[#0B0D12] h-2.5 bg-neutral-300 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#5E626D] mt-1 font-bold">
                  <span>20 contatos</span>
                  <span>250 contatos</span>
                  <span>500+ contatos</span>
                </div>
              </div>

              {/* Slider 2: Ticket Médio */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-black text-[#0B0D12]">
                    Ticket médio do seu tratamento / protocolo:
                  </label>
                  <span className="text-sm font-mono font-black text-[#0B0D12] bg-white px-3 py-1 rounded-lg border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
                    {formatCurrency(averageTicket)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full accent-[#0B0D12] h-2.5 bg-neutral-300 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#5E626D] mt-1 font-bold">
                  <span>R$ 500</span>
                  <span>R$ 5.000</span>
                  <span>R$ 10.000</span>
                </div>
              </div>

              {/* Slider 3: Current Conversion */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-black text-[#0B0D12]">
                    Taxa atual de conversão da recepção:
                  </label>
                  <span className="text-sm font-mono font-black text-[#0B0D12] bg-white px-3 py-1 rounded-lg border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
                    {currentConversionRate}% dos contatos
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                  className="w-full accent-[#0B0D12] h-2.5 bg-neutral-300 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#5E626D] mt-1 font-bold">
                  <span>5% (Sem processos)</span>
                  <span>15% (Médio)</span>
                  <span>30% (Avançado)</span>
                </div>
              </div>

            </div>

            {/* Current status summary */}
            <div className="mt-8 pt-5 border-t-2 border-[#0B0D12]/20 flex items-center justify-between text-xs text-[#3B3F4A] font-bold">
              <span>Hoje sua clínica fatura aprox.:</span>
              <strong className="text-sm font-black font-mono text-[#0B0D12]">
                {formatCurrency(currentRevenue)} /mês ({currentPatients} tratamentos)
              </strong>
            </div>

          </div>

          {/* Results Card (5 columns) */}
          <div className="lg:col-span-5 nb bg-[#0B0D12] text-white p-6 sm:p-8 border-4 border-[#0B0D12] shadow-[6px_6px_0_#D6BE96] flex flex-col justify-between relative overflow-hidden">
            
            <div className="relative z-10">
              <span className="adesivo adesivo-tinta text-[10px] mb-2 inline-block">
                ★ Projeção Fontenelle
              </span>
              <h3 className="text-2xl font-black font-display text-white">
                Com Atendimento de Elite:
              </h3>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-white/10 border-2 border-white/20">
                  <span className="text-xs text-neutral-300 block mb-1 font-bold">Nova Taxa de Conversão Estimada</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#D6BE96] font-mono tabular-nums">
                      {projectedConversionRate.toFixed(0)}%
                    </span>
                    <span className="text-xs text-emerald-400 font-bold">
                      (~{projectedPatients} tratamentos fechados)
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#D6BE96] text-[#0B0D12] border-2 border-[#0B0D12] shadow-[3px_3px_0_#FFFFFF]">
                  <span className="text-xs font-black uppercase tracking-wider block mb-1 text-[#0B0D12]">
                    Faturamento Adicional Estimado:
                  </span>
                  <div className="text-3xl font-black font-mono tabular-nums">
                    +{formatCurrency(monthlyExtraRevenue)} <span className="text-xs font-bold">/mês</span>
                  </div>
                  <div className="text-xs font-black mt-1">
                    ou +{formatCurrency(annualExtraRevenue)} a mais por ano!
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-neutral-300 leading-relaxed font-medium">
                Fechando apenas <strong>1 único paciente a mais</strong> com os scripts no primeiro mês, o curso já se paga mais de 8 vezes!
              </div>
            </div>

            {/* Action button inside card */}
            <div className="mt-8 pt-4 border-t border-white/20 relative z-10">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nb text-xs font-black w-full flex items-center justify-center gap-2"
              >
                <span>Aumentar Minhas Vendas Agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

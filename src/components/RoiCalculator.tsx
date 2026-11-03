import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const RoiCalculator: React.FC = () => {
  const [currentRevenue, setCurrentRevenue] = useState<number>(35000);
  const [attendancesPerMonth, setAttendancesPerMonth] = useState<number>(60);
  const [conversionRate, setConversionRate] = useState<number>(20);

  // Transformations with Method 3²:
  // - Conversion increases up to 1.8x
  // - Ticket average increases up to 2.5x with annual treatment plans
  // - Net margin rises from 22% to up to 48%
  const currentTicket = attendancesPerMonth > 0 ? currentRevenue / attendancesPerMonth : 500;
  const projectedConversion = Math.min(Math.round(conversionRate * 1.8), 65);
  const projectedTicket = currentTicket * 1.6;
  const projectedAttendances = Math.round(attendancesPerMonth * (projectedConversion / Math.max(conversionRate, 1)));
  const projectedRevenue = Math.round(projectedAttendances * projectedTicket);
  const monthlyExtra = Math.max(projectedRevenue - currentRevenue, 12000);
  const annualExtra = monthlyExtra * 12;

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
            ★ Diagnóstico de Lucro Clínico
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Descubra Quanto Dinheiro Sua Clínica Está <span className="block mt-1"><span className="mk">Deixando na Mesa Todo Mês.</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3B3F4A] font-medium">
            Simule os números atuais da sua clínica e veja o impacto instantâneo de aplicar a precificação e a esteira de vendas do Método 3²:
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Controls Panel (7 columns) */}
          <div className="lg:col-span-7 nb bg-[#F7F5F0] p-6 sm:p-8 border-4 border-[#0B0D12] shadow-[6px_6px_0_#0B0D12] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Slider 1: Faturamento Mensal Atual */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-black text-[#0B0D12]">
                    Faturamento Mensal Atual:
                  </label>
                  <span className="text-sm font-mono font-black text-[#0B0D12] bg-white px-3 py-1 rounded-lg border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
                    {formatCurrency(currentRevenue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="150000"
                  step="5000"
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                  className="w-full accent-[#0B0D12] h-2.5 bg-neutral-300 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#5E626D] mt-1 font-bold">
                  <span>R$ 10.000</span>
                  <span>R$ 75.000</span>
                  <span>R$ 150.000+</span>
                </div>
              </div>

              {/* Slider 2: Atendimentos por mês */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-black text-[#0B0D12]">
                    Atendimentos realizados por mês:
                  </label>
                  <span className="text-sm font-mono font-black text-[#0B0D12] bg-white px-3 py-1 rounded-lg border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
                    {attendancesPerMonth} atendimentos
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="300"
                  step="10"
                  value={attendancesPerMonth}
                  onChange={(e) => setAttendancesPerMonth(Number(e.target.value))}
                  className="w-full accent-[#0B0D12] h-2.5 bg-neutral-300 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#5E626D] mt-1 font-bold">
                  <span>20 pacientes</span>
                  <span>150 pacientes</span>
                  <span>300+ pacientes</span>
                </div>
              </div>

              {/* Slider 3: Taxa de Conversão */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-black text-[#0B0D12]">
                    Taxa de Conversão de Fechamento atual:
                  </label>
                  <span className="text-sm font-mono font-black text-[#0B0D12] bg-white px-3 py-1 rounded-lg border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="40"
                  step="2"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full accent-[#0B0D12] h-2.5 bg-neutral-300 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#5E626D] mt-1 font-bold">
                  <span>10% (Baixa)</span>
                  <span>20% (Média de mercado)</span>
                  <span>40% (Bem trabalhada)</span>
                </div>
              </div>

            </div>

            {/* Current status summary */}
            <div className="mt-8 pt-5 border-t-2 border-[#0B0D12]/20 text-xs text-[#3B3F4A] font-bold">
              <span>Situação atual da clínica:</span>
              <div className="mt-1 flex items-center justify-between text-sm font-black font-mono text-[#0B0D12]">
                <span>Margem líquida típica: ~22%</span>
                <span>Ticket médio: {formatCurrency(currentTicket)}</span>
              </div>
            </div>

          </div>

          {/* Results Card with Azul Acinzentado (#8495A6) background */}
          <div className="lg:col-span-5 nb bg-[#8495A6] text-white p-6 sm:p-8 border-4 border-[#0B0D12] shadow-[6px_6px_0_#0B0D12] flex flex-col justify-between relative overflow-hidden">
            
            <div className="relative z-10">
              <span className="adesivo text-[10px] mb-2 inline-block">
                ★ Transformação Método 3²
              </span>
              <h3 className="text-2xl font-black font-display text-white">
                Impacto com Simetria Perfeita:
              </h3>

              <div className="mt-5 space-y-3">
                <div className="p-3.5 rounded-xl bg-white/15 border-2 border-[#0B0D12] text-xs font-bold space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Aumento da Conversão:</span>
                    <span className="font-mono text-[#D6BE96]">Até 1.8x mais</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Elevação do Ticket Médio:</span>
                    <span className="font-mono text-[#D6BE96]">Até 2.5x com planos anuais</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Margem Líquida Média:</span>
                    <span className="font-mono text-[#D6BE96]">De 22% para até 48%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Faltas na Recepção (no-show):</span>
                    <span className="font-mono text-white">Redução drástica</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#D6BE96] text-[#0B0D12] border-2 border-[#0B0D12] shadow-[3px_3px_0_#0B0D12]">
                  <span className="text-[11px] font-black uppercase tracking-wider block text-[#0B0D12]">
                    Potencial de Faturamento Adicional:
                  </span>
                  <div className="text-3xl font-black font-mono tabular-nums">
                    +{formatCurrency(monthlyExtra)} <span className="text-xs font-bold">/mês</span>
                  </div>
                  <div className="text-xs font-black mt-1">
                    ou +{formatCurrency(annualExtra)} por ano com organização!
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

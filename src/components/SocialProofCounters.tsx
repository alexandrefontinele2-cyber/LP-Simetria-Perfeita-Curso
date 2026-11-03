import React from 'react';
import { TrendingUp, Users, MessageSquareCode, Award } from 'lucide-react';

export const SocialProofCounters: React.FC = () => {
  const metrics = [
    {
      value: '+150',
      label: 'Profissionais Mentorados',
      subtext: 'Médicos, biomédicos e donos de clínicas',
      icon: Users
    },
    {
      value: '84%',
      label: 'Taxa de Recompra',
      subtext: 'Fidelização e manutenção em 12 meses',
      icon: TrendingUp
    },
    {
      value: '1.8x',
      label: 'Mais Conversão no Fechamento',
      subtext: 'Com a consulta avaliativa do Método 3²',
      icon: MessageSquareCode
    },
    {
      value: '< 8%',
      label: 'Faltas na Agenda (No-Show)',
      subtext: 'Com o protocolo humanizado de WhatsApp',
      icon: Award
    }
  ];

  return (
    <section className="bg-[#8495A6] text-white py-12 border-b-4 border-[#0B0D12] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-[#485766] border-2 border-[#0B0D12] shadow-[4px_4px_0_#0B0D12] flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center mb-3 border-2 border-[#0B0D12]">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono tracking-tight tabular-nums">
                  {item.value}
                </div>
                <div className="mt-1 font-black text-sm sm:text-base text-[#D6BE96]">
                  {item.label}
                </div>
                <div className="text-xs text-white mt-0.5 leading-snug font-bold">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

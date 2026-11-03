import React from 'react';
import { TrendingUp, Users, MessageSquareCode, Award } from 'lucide-react';

export const SocialProofCounters: React.FC = () => {
  const metrics = [
    {
      value: '+R$ 18.4M',
      label: 'Gerados em Tratamentos',
      subtext: 'Fechados por donos de clínicas formados',
      icon: TrendingUp
    },
    {
      value: '480+',
      label: 'Clínicas Transformadas',
      subtext: 'Em estética, odonto, dermato e medicina',
      icon: Users
    },
    {
      value: '3.8x',
      label: 'Mais Vendas no WhatsApp',
      subtext: 'Aumento médio na taxa de conversão',
      icon: MessageSquareCode
    },
    {
      value: '98.4%',
      label: 'Taxa de Satisfação',
      subtext: 'Avaliação dos alunos na área de membros',
      icon: Award
    }
  ];

  return (
    <section className="bg-[#0B0D12] text-white py-12 border-b-4 border-[#0B0D12] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-[#161A22] border-2 border-white/20 shadow-[4px_4px_0_#D6BE96] flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center mb-3 border-2 border-[#0B0D12]">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#D6BE96] font-mono tracking-tight tabular-nums">
                  {item.value}
                </div>
                <div className="mt-1 font-black text-sm sm:text-base text-white">
                  {item.label}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5 leading-snug font-medium">
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

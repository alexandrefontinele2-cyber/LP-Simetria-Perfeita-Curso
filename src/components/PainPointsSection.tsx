import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const PainPointsSection: React.FC = () => {
  const gargalos = [
    {
      problem: 'A recepção responde o "quanto custa?" no WhatsApp passando apenas o valor seco, e o paciente nunca mais responde.',
      solution: 'Scripts de primeiro contato com perguntas investigativas que acolhem e agendam a consulta avaliativa com elegância.'
    },
    {
      problem: 'Índice de faltas (no-show) acima de 40%, gerando salas vazias e frustração na agenda dos profissionais.',
      solution: 'Protocolo anti-no-show com áudio humanizado da secretária que reduz as faltas para menos de 8%.'
    },
    {
      problem: 'O gestor ou dono passa o dia no operacional, apagando incêndios e sem tempo para gerenciar o crescimento.',
      solution: 'Rotina Harmoniosa do Método 3², com funções, processos e fluxos definidos para a equipe operar com autonomia.'
    },
    {
      problem: 'Dependência de procedimentos avulsos de baixo valor, que geram oscilação constante no faturamento mensal.',
      solution: 'Estruturação de planos de tratamento contínuos e anuais que elevam o ticket médio e aumentam a retenção.'
    },
    {
      problem: 'Pacientes que realizam um procedimento e nunca mais retornam, sem nenhum contato estruturado de pós-venda.',
      solution: 'Protocolos de cuidado D+1 e D+7 que geram 90% de NPS de satisfação e 84% de recompra em 12 meses.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="adesivo mb-3 inline-block">
            ★ Diagnóstico da Operação
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Os Gargalos Ocultos das Clínicas de Estética: <span className="block mt-1"><span className="mk">Como o Método 3² Resolve Cada Um</span></span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#3B3F4A] leading-relaxed font-medium">
            Muitos profissionais investem em aparelhos caros e cursos de aplicação, mas perdem pacientes por falhas na rotina e no atendimento. Veja a diferença:
          </p>
        </div>

        {/* Comparison List Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {gargalos.map((item, index) => (
            <div 
              key={index}
              className="nb bg-white p-5 sm:p-6 border-3 border-[#0B0D12] shadow-[5px_5px_0_#0B0D12] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center"
            >
              {/* Problem side */}
              <div className="flex items-start gap-3.5 pr-0 md:pr-4">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 border-2 border-[#0B0D12]">
                  <XCircle className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-black text-red-600 uppercase tracking-wider block mb-1">
                    Gargalo Comum na Clínica:
                  </span>
                  <p className="text-xs sm:text-sm text-[#3B3F4A] font-medium leading-relaxed">
                    {item.problem}
                  </p>
                </div>
              </div>

              {/* Solution side */}
              <div className="flex items-start gap-3.5 pl-0 md:pl-4 border-t-2 md:border-t-0 md:border-l-2 border-[#0B0D12]/20 pt-3 md:pt-0">
                <div className="w-8 h-8 rounded-lg bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 mt-0.5 border-2 border-[#0B0D12]">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-black text-[#0B0D12] uppercase tracking-wider block mb-1">
                    Solução Simetria Perfeita:
                  </span>
                  <p className="text-xs sm:text-sm text-[#0B0D12] font-bold leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section mini CTA */}
        <div className="mt-12 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nb text-xs sm:text-sm font-black inline-flex items-center gap-2"
          >
            <span>QUERO ESCALAR MINHA CLÍNICA AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

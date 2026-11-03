import React from 'react';
import { Target, MessageSquareText, Stethoscope, Layers, Users2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const MethodFramework: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Posicionamento High-End',
      description: 'Como transformar a percepção da sua clínica para que os pacientes não comparem seu preço com a concorrência e entendam a exclusividade do seu atendimento.',
      icon: Target,
      highlight: 'Fim da guerra de preços e descontos forçados'
    },
    {
      number: '02',
      title: 'Script de Atendimento no WhatsApp',
      description: 'Estrutura conversacional testada para recepcionistas que acolhe o lead com carinho, faz perguntas investigativas e agenda a avaliação sem entregar o preço seco.',
      icon: MessageSquareText,
      highlight: 'Redução de até 85% do sumiço de pacientes no WhatsApp'
    },
    {
      number: '03',
      title: 'Consulta Avaliativa de Alta Conversão',
      description: 'O roteiro consultivo que diagnostica a dor emocional do paciente e apresenta planos integrados de tratamento, gerando desejo incontrolável de fechar na hora.',
      icon: Stethoscope,
      highlight: 'Multiplica o fechamento de tratamentos completos'
    },
    {
      number: '04',
      title: 'Esteira de Protocolos High-Ticket',
      description: 'Aprenda a empacotar serviços pontuais em planos contínuos de 3 a 12 meses, gerando receita previsível e aumentando o LTV (valor do paciente no tempo).',
      icon: Layers,
      highlight: 'Previsibilidade de faturamento mês a mês'
    },
    {
      number: '05',
      title: 'Gestão de Equipe & Comissionamento',
      description: 'Processos claros, rotinas de alinhamento diário e sistema de comissão que engaja sua recepção e especialistas a baterem metas diárias com entusiasmo.',
      icon: Users2,
      highlight: 'Sua equipe vendendo e operando sem depender do dono'
    }
  ];

  return (
    <section id="metodo" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="adesivo mb-3 inline-block">
            A Metodologia em 5 Etapas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Os 5 Pilares do Método <span className="block mt-1"><span className="mk">Fontenelle Esthetic</span></span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#3B3F4A] leading-relaxed font-medium">
            Uma engrenagem comercial completa desenvolvida para clínicas que buscam lucro consistente, pacientes fiéis e uma equipe de atendimento verdadeiramente profissional.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="nb bg-white p-6 sm:p-7 border-3 border-[#0B0D12] shadow-[5px_5px_0_#0B0D12] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#0B0D12] bg-[#D6BE96] px-2.5 py-1 rounded-md border-2 border-[#0B0D12]">
                      Pilar {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0B0D12] text-[#D6BE96] flex items-center justify-center border-2 border-[#0B0D12]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#0B0D12] font-display mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3B3F4A] font-medium leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-[#0B0D12]/20 flex items-center gap-2 text-xs font-bold text-[#0B0D12]">
                  <span className="w-2 h-2 rounded-full bg-[#D6BE96] border border-[#0B0D12]" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}

          {/* 6th callout card */}
          <div className="nb bg-[#0B0D12] text-white p-6 sm:p-7 border-3 border-[#0B0D12] shadow-[5px_5px_0_#D6BE96] flex flex-col justify-between">
            <div>
              <span className="adesivo adesivo-tinta text-[10px] mb-3 inline-block">
                ★ Resultado Comprovado
              </span>
              <h3 className="text-xl font-black font-display text-white mb-3">
                Mais Pacientes Particulares, Menos Conflitos e Margem Protegida
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-medium">
                Ao alinhar esses 5 pilares, sua clínica passa a ser vista como referência e sua recepção se torna o motor mais lucrativo do seu negócio.
              </p>
            </div>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nb text-xs font-black w-full flex items-center justify-center gap-2"
            >
              <span>Aplicar na Minha Clínica</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

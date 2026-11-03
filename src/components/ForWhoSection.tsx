import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const ForWhoSection: React.FC = () => {
  const isForYou = [
    'Proprietários e gestores de clínicas de estética, médicos, biomédicos estéticos e esteticistas.',
    'Deseja crescer de forma estruturada, lucrativa e sustentável com o Método 3².',
    'Quer organizar a operação, a rotina pessoal e a rotina da sua equipe sem sobrecarga.',
    'Deseja transformar a recepção no WhatsApp em uma central ativa de fechamento de consultas.',
    'Busca criar uma experiência 5 estrelas que gera fidelização eterna e indicações espontâneas.'
  ];

  const isNotForYou = [
    'Busca promessas milagrosas e não está disposto a aplicar ferramentas e rotinas na clínica.',
    'Quer continuar disputando pacientes por leilão de preços e promoções apelativas.',
    'Não tem interesse em treinar ou capacitar sua secretária e equipe de atendimento.',
    'Acredita que apenas cursos técnicos de aplicação de procedimentos resolvem a gestão do negócio.'
  ];

  return (
    <section id="para-quem" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="adesivo mb-3 inline-block">
            ★ Critério de Seleção
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Antes de comprar, <span className="block mt-1"><span className="mk">veja se é pra você.</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3B3F4A] font-medium">
            O <strong>Simetria Perfeita</strong> foi desenhado exclusivamente para profissionais comprometidos com a excelência:
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card: É PRA VOCÊ */}
          <div className="nb bg-white p-6 sm:p-8 flex flex-col justify-between border-4 border-[#0B0D12] shadow-[6px_6px_0_#0B0D12]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#8495A6] text-white flex items-center justify-center font-bold border-2 border-[#0B0D12]">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0B0D12] font-display">
                    É para você se:
                  </h3>
                  <span className="text-xs text-[#8495A6] font-black uppercase">
                    Perfil Ideal de Gestor Simetria Perfeita
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {isForYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#0B0D12] leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center shrink-0 mt-0.5 border border-[#0B0D12] font-bold text-xs">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t-2 border-[#0B0D12] bg-[#F7F5F0] -mx-6 -mb-6 p-6 rounded-b-xl">
              <span className="text-xs font-bold text-[#0B0D12] block">
                ✓ Se você se identificou, sua clínica está pronta para implementar o Método 3².
              </span>
            </div>
          </div>

          {/* Card: NÃO É PRA VOCÊ */}
          <div className="nb bg-white p-6 sm:p-8 flex flex-col justify-between border-4 border-[#0B0D12] shadow-[6px_6px_0_#0B0D12]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold border-2 border-[#0B0D12]">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0B0D12] font-display">
                    NÃO é para você se:
                  </h3>
                  <span className="text-xs text-red-600 font-bold uppercase">
                    Por favor, não se inscreva nesses casos
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {isNotForYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#3B3F4A] leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 border border-[#0B0D12] font-bold text-xs">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t-2 border-[#0B0D12] bg-red-50/60 -mx-6 -mb-6 p-6 rounded-b-xl">
              <span className="text-xs font-bold text-red-800 block">
                ✕ O método exige comprometimento em aplicar processos e capacitar a equipe.
              </span>
            </div>
          </div>

        </div>

        {/* Transition CTA to Offer */}
        <div className="mt-12 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nb text-sm font-black inline-flex items-center gap-2"
          >
            <span>QUERO ESCALAR MINHA CLÍNICA AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const ForWhoSection: React.FC = () => {
  const isForYou = [
    'Você é dono(a) ou gestor(a) de clínica de estética, odontologia, dermatologia ou saúde.',
    'Sente que a sua recepção "joga dinheiro no lixo" passando preços sem estratégia no WhatsApp.',
    'Está cansado(a) de pacientes pedindo desconto ou dizendo que vão falar com o cônjuge.',
    'Quer treinar sua secretária para ter postura comercial de alto padrão sem parecer vendedora chata.',
    'Quer previsibilidade financeira vendendo planos e protocolos anuais de R$ 3.000 a R$ 10.000.'
  ];

  const isNotForYou = [
    'Você quer uma fórmula mágica para enriquecer do dia para a noite sem aplicar processos na clínica.',
    'Você insiste em competir por preço baixo e fazer leilão com a clínica da esquina.',
    'Não tem interesse em treinar ou capacitar sua secretária e equipe de atendimento.',
    'Não atende pacientes particulares e depende exclusivamente de convênios que pagam centavos.'
  ];

  return (
    <section id="para-quem" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="adesivo mb-3 inline-block">
            Critério de Seleção
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight">
            Antes de comprar, <span className="block mt-1"><span className="mk">veja se é pra você.</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3B3F4A] font-medium">
            Prezamos pela reputação da nossa academia e só queremos donos de clínicas comprometidos com resultados sérios:
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card: É PRA VOCÊ */}
          <div className="nb bg-white p-6 sm:p-8 flex flex-col justify-between border-4 border-[#0B0D12]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold border-2 border-[#0B0D12]">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0B0D12] font-display">
                    É para você se:
                  </h3>
                  <span className="text-xs text-emerald-700 font-bold">
                    Perfil Ideal de Aluno da Academia
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

            <div className="mt-8 pt-6 border-t-2 border-[#0B0D12] bg-[#F7F5F0] -mx-6 -mb-6 p-6 rounded-b-xl">
              <span className="text-xs font-bold text-emerald-800 block">
                ✓ Se você se identificou com esse perfil, os resultados na sua clínica serão rápidos e expressivos.
              </span>
            </div>
          </div>

          {/* Card: NÃO É PRA VOCÊ */}
          <div className="nb bg-white p-6 sm:p-8 flex flex-col justify-between border-4 border-[#0B0D12]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold border-2 border-[#0B0D12]">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0B0D12] font-display">
                    NÃO é para você se:
                  </h3>
                  <span className="text-xs text-red-600 font-bold">
                    Por favor, não compre se for o seu caso
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

            <div className="mt-8 pt-6 border-t-2 border-[#0B0D12] bg-red-50/60 -mx-6 -mb-6 p-6 rounded-b-xl">
              <span className="text-xs font-bold text-red-800 block">
                ✕ Preferimos não vender caso o seu objetivo seja buscar atalhos sem estruturar processos.
              </span>
            </div>
          </div>

        </div>

        {/* Transition CTA to Offer */}
        <div className="mt-12 text-center">
          <a
            href="#oferta"
            className="btn-nb text-sm font-black inline-flex items-center gap-2"
          >
            <span>Tenho o Perfil Certo · Ver Condição Especial</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

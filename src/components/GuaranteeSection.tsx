import React from 'react';
import { ShieldCheck, Award, Lock, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b-4 border-[#0B0D12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="nb bg-[#F7F5F0] border-4 border-[#0B0D12] rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0_#0B0D12] flex flex-col sm:flex-row items-center gap-8">
          
          {/* Guarantee Seal Badge */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#8495A6] border-4 border-[#0B0D12] shadow-[4px_4px_0_#0B0D12] flex flex-col items-center justify-center text-center p-3 text-white shrink-0 relative">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#D6BE96] mb-1 stroke-[2.5]" />
            <span className="text-xl sm:text-2xl font-black font-display text-white leading-none">
              7 DIAS
            </span>
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#D6BE96]">
              Garantia Total
            </span>
          </div>

          {/* Guarantee copy */}
          <div className="text-center sm:text-left">
            <span className="adesivo text-[10px] mb-2 inline-block">
              ★ Risco Zero
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B0D12] font-display mt-1">
              Garantia Incondicional de 7 Dias: Teste Sem Nenhum Risco
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#3B3F4A] leading-relaxed font-medium">
              Você tem 7 dias completos para testar tudo. Acesse as aulas do <strong>Simetria Perfeita</strong>, aplique com a sua equipe os scripts e as planilhas.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-[#3B3F4A] leading-relaxed font-medium">
              Se você não ficar 100% satisfeito com o método e com a organização que ele proporciona para a sua clínica, basta solicitar na plataforma ou enviar um e-mail que reembolsamos todo o dinheiro, sem complicação.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold text-[#0B0D12]">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nb text-xs font-black inline-flex items-center gap-2 py-3 px-6"
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

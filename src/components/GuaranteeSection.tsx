import React from 'react';
import { ShieldCheck, Award, Lock } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b-4 border-[#0B0D12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="nb bg-[#F7F5F0] border-4 border-[#0B0D12] rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0_#0B0D12] flex flex-col sm:flex-row items-center gap-8">
          
          {/* Guarantee Seal Badge */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#0B0D12] border-4 border-[#0B0D12] shadow-[4px_4px_0_#D6BE96] flex flex-col items-center justify-center text-center p-3 text-white shrink-0 relative">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#D6BE96] mb-1 stroke-[2.5]" />
            <span className="text-xl sm:text-2xl font-black font-display text-[#D6BE96] leading-none">
              7 DIAS
            </span>
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-neutral-300">
              Garantia Total
            </span>
          </div>

          {/* Guarantee copy */}
          <div className="text-center sm:text-left">
            <span className="adesivo text-[10px] mb-2 inline-block">
              ★ Risco Zero Absoluto
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B0D12] font-display mt-1">
              Teste por 7 Dias. Se não amar, 100% de volta.
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#3B3F4A] leading-relaxed font-medium">
              Temos tanta certeza do poder transformador do método da <strong>Fontenelle Academy</strong> para a sua clínica que assumimos todo o risco financeiro.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-[#3B3F4A] leading-relaxed font-medium">
              Você se inscreve, assiste às aulas com sua secretária, baixa os scripts e usa as planilhas. Se por qualquer motivo achar que o treinamento não pagou o investimento, basta solicitar o reembolso na Cakto com um único clique. Devolvemos cada centavo, sem perguntas e sem letras miúdas.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-bold text-[#0B0D12]">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
                <Lock className="w-4 h-4 text-[#0B0D12]" />
                Processado com segurança via Cakto
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
                <Award className="w-4 h-4 text-[#0B0D12]" />
                Reembolso sem burocracia
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

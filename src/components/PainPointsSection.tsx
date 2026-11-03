import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { PAIN_COMPARISON, CHECKOUT_URL } from '../data/landingData';

export const PainPointsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="adesivo mb-3 inline-block">
            Diagnóstico Comercial da Clínica
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Você reconhece algum desses <span className="block mt-1"><span className="mk">5 vazamentos de receita?</span></span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#3B3F4A] leading-relaxed font-medium">
            Investir em tráfego pago e redes sociais sem treinar sua equipe de atendimento é encher um balde furado. Veja a diferença entre a operação comum e o padrão Fontenelle:
          </p>
        </div>

        {/* Comparison List Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {PAIN_COMPARISON.map((item, index) => (
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
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    Como é hoje na maioria das clínicas:
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
                  <span className="text-[11px] font-bold text-[#0B0D12] uppercase tracking-wider block mb-1">
                    Com o Método Fontenelle:
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
            <span>Quero Estancar os Vazamentos na Minha Clínica</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

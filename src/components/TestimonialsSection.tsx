import React from 'react';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, CHECKOUT_URL } from '../data/landingData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="adesivo mb-3 inline-block">
            ★ Casos Reais de Donos de Clínicas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Veja o que acontece quando uma clínica aplica <span className="block mt-1"><span className="mk">o Método Fontenelle.</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3B3F4A] font-medium">
            Depoimentos com números comprovados de dermatologistas, dentistas e biomédicos que profissionalizaram sua recepção:
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="nb bg-white p-6 border-3 border-[#0B0D12] shadow-[5px_5px_0_#0B0D12] flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#0B0D12]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D6BE96] text-[#0B0D12]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                    <CheckCircle className="w-3 h-3 stroke-[2.5]" />
                    <span>Verificado</span>
                  </span>
                </div>

                {/* Key metric badge */}
                <div className="mb-4 inline-block px-3 py-1 rounded-lg bg-[#0B0D12] text-[#D6BE96] text-xs font-black font-mono border border-[#0B0D12]">
                  {item.metric}
                </div>

                {/* Quote body */}
                <p className="text-xs sm:text-sm text-[#3B3F4A] leading-relaxed italic mb-4 font-medium">
                  "{item.quote}"
                </p>

                {/* Highlight summary */}
                <div className="p-3 rounded-xl bg-[#F7F5F0] text-xs text-[#0B0D12] font-bold border-2 border-[#0B0D12] mb-4 shadow-[2px_2px_0_#0B0D12]">
                  <strong>Impacto:</strong> {item.highlight}
                </div>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t-2 border-[#0B0D12]/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B0D12] text-[#D6BE96] flex items-center justify-center font-bold text-sm shrink-0 border-2 border-[#0B0D12]">
                  {item.name.charAt(4) || 'D'}
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0B0D12]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#8495A6] font-bold">
                    {item.role} · {item.clinic}
                  </p>
                  <span className="text-[10px] text-neutral-500 font-mono">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-12 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nb text-xs sm:text-sm font-black inline-flex items-center gap-2"
          >
            <span>Quero Ter Esses Mesmos Resultados na Minha Clínica</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

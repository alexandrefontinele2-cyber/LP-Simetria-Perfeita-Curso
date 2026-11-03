import React from 'react';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL, OFFICIAL_WEBSITE_URL } from '../data/landingData';

export const MentorSection: React.FC = () => {
  return (
    <section id="mentor" className="py-16 sm:py-24 bg-white border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="nb bg-[#8495A6] border-4 border-[#0B0D12] shadow-[8px_8px_0_#0B0D12] rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto p-6 flex flex-col items-center justify-between text-center relative">
              
              <div className="absolute top-4 right-4 z-20">
                <span className="adesivo text-[10px] transform rotate-3">
                  ★ O Mentor
                </span>
              </div>

              {/* Watermark Monogram */}
              <div className="w-24 h-24 rounded-full border-2 border-white/40 flex items-center justify-center font-serif-luxury text-5xl text-white mt-4 shadow-[3px_3px_0_#0B0D12] bg-[#485766]">
                F
              </div>

              {/* Portrait frame */}
              <div className="relative z-10 my-4 w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-3 border-[#0B0D12] bg-[#F7F5F0] shadow-[4px_4px_0_#0B0D12] flex flex-col items-center justify-center p-4">
                <span className="font-serif-luxury text-4xl text-[#0B0D12] font-bold">AF</span>
                <span className="text-[11px] text-[#0B0D12] font-mono font-bold tracking-widest uppercase mt-2">
                  Alexandre Fontinele
                </span>
                <span className="text-[10px] text-[#8495A6] font-bold mt-1">
                  Criador do Método 3²
                </span>
              </div>

              {/* Authority Badge */}
              <div className="bg-white text-[#0B0D12] border-2 border-[#0B0D12] p-3 rounded-xl w-full text-left shadow-[3px_3px_0_#0B0D12]">
                <span className="text-[10px] font-black uppercase tracking-wider block text-[#8495A6]">
                  Autoridade Comprovada
                </span>
                <p className="text-xs font-bold leading-tight mt-0.5">
                  +150 profissionais mentorados em todo o Brasil
                </p>
              </div>

            </div>
          </div>

          {/* Bio / Authority Column (7 cols) */}
          <div className="lg:col-span-7">
            <span className="adesivo mb-3 inline-block">
              ★ Mentor & Estrategista de Clínicas de Estética de Alto Padrão
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
              Alexandre Fontinele
            </h2>
            <p className="text-sm font-bold text-[#8495A6] mt-1">
              Fundador da Fontenelle Academy & Criador do Método 3²
            </p>

            {/* Frase de Impacto */}
            <div className="my-5 p-4 rounded-xl bg-[#F7F5F0] border-2 border-[#0B0D12] shadow-[3px_3px_0_#0B0D12]">
              <p className="text-sm sm:text-base font-black italic text-[#0B0D12] font-display">
                "Minha missão é fazer sua clínica ser tão lucrativa por dentro quanto é bela por fora."
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#3B3F4A] leading-relaxed font-medium">
              <p>
                Alexandre Fontinele é estrategista de negócios focado no mercado de saúde e estética premium. Ao longo de sua carreira, diagnosticou e reestruturou centenas de clínicas médicas, odontológicas e de estética em todo o país.
              </p>
              <p>
                Constatou que a maioria dos profissionais investe fortunas em tecnologias de ponta e cursos práticos de aplicação, mas continua sofrendo com caixa apertado por não dominar o cálculo de custo-minuto, a triagem no WhatsApp e a consulta consultiva de alta conversão.
              </p>
              <p>
                Dessa experiência prática nasceu o <strong>Método 3²</strong> e o curso <strong>Simetria Perfeita</strong>.
              </p>
            </div>

            {/* Credential bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#0B0D12] font-bold">
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2.5 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#8495A6] shrink-0 stroke-[2.5]" />
                <span>+150 profissionais mentorados</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2.5 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#8495A6] shrink-0 stroke-[2.5]" />
                <span>Foco em Gestão, Comercial e Marketing</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2.5 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#8495A6] shrink-0 stroke-[2.5]" />
                <span>Metodologia 3² testada na prática</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2.5 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#8495A6] shrink-0 stroke-[2.5]" />
                <span>Aplicação imediata com sua equipe</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nb text-xs sm:text-sm font-black flex items-center gap-2"
              >
                <span>QUERO ESCALAR MINHA CLÍNICA AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={OFFICIAL_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl text-xs font-bold text-[#0B0D12] bg-white border-2 border-[#0B0D12] hover:bg-[#F7F5F0] transition-colors shadow-[2px_2px_0_#0B0D12]"
              >
                Site Oficial Fontenelle Academy →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

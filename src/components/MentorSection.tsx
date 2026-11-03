import React from 'react';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL, OFFICIAL_WEBSITE_URL } from '../data/landingData';

export const MentorSection: React.FC = () => {
  return (
    <section id="mentor" className="py-16 sm:py-24 bg-white border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Column with Alexandre Fontinele Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div 
              style={{ backgroundColor: '#8495A6' }}
              className="nb-cinza-azul border-4 border-[#0B0D12] shadow-[8px_8px_0_#0B0D12] rounded-2xl overflow-hidden max-w-md mx-auto p-4 sm:p-5 flex flex-col items-center relative"
            >
              
              <div className="absolute top-4 right-4 z-20">
                <span className="adesivo text-[10px] transform rotate-3">
                  ★ O Mentor
                </span>
              </div>

              {/* Photo Frame */}
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border-3 border-[#0B0D12] shadow-[4px_4px_0_#0B0D12] bg-[#F7F5F0] relative">
                <img
                  src="/assets/aistudio/Foto_Ale_Perfil_fdff022d.jpg"
                  alt="Alexandre Fontinele - O Mentor"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Name & Credentials beneath photo */}
              <div className="mt-4 bg-white text-[#0B0D12] border-2 border-[#0B0D12] p-3.5 rounded-xl w-full text-left shadow-[3px_3px_0_#0B0D12]">
                <span className="text-[10px] font-black uppercase tracking-wider block text-[#8495A6]">
                  Experiência Prática Comprovada
                </span>
                <p className="text-xs sm:text-sm font-black leading-tight mt-0.5 text-[#0B0D12]">
                  Mais de 10 anos atuando com donos de clínicas pelo Brasil
                </p>
              </div>

            </div>
          </div>

          {/* Bio / Authority Column (7 cols) */}
          <div className="lg:col-span-7">
            <span className="adesivo mb-3 inline-block">
              ★ Mentor & Estrategista de Clínicas de Estética
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
              Alexandre Fontinele
            </h2>
            <p className="text-sm sm:text-base font-bold text-[#8495A6] mt-1">
              Fundador da Fontenelle Academy & Criador do Método 3²
            </p>

            {/* Frase de Impacto */}
            <div className="my-5 p-4 rounded-xl bg-[#F7F5F0] border-2 border-[#0B0D12] shadow-[3px_3px_0_#0B0D12]">
              <p className="text-sm sm:text-base font-black italic text-[#0B0D12] font-display">
                "Minha missão é fazer sua clínica ser tão lucrativa por dentro quanto é bela por fora."
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#1E242B] leading-relaxed font-medium">
              <p>
                <strong>Mais de 10 anos atuando diretamente com donos de clínicas pelo Brasil</strong>, Alexandre Fontinele é estrategista de negócios focado no mercado de saúde, estética e odontologia.
              </p>
              <p>
                Ao longo de sua trajetória, acompanhou de perto a rotina de centenas de clínicas em todo o país e identificou um padrão claro: a maioria dos donos investe fortunas em equipamentos de última geração e cursos técnicos, mas continuam reféns do operacional diário e com margens apertadas por falta de processos comerciais e de gestão.
              </p>
              <p>
                Dessa vivência prática no campo de batalha nasceu o <strong>Método 3²</strong> e o treinamento <strong>Simetria Perfeita</strong>, unindo os 3 pilares fundamentais: Estrutura & Gestão, Performance Comercial & Marketing e Experiência do Cliente & Fidelização.
              </p>
            </div>

            {/* Credential bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#0B0D12] font-bold">
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2.5 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#8495A6] shrink-0 stroke-[2.5]" />
                <span>Mais de 10 anos no mercado de clínicas</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2.5 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#8495A6] shrink-0 stroke-[2.5]" />
                <span>+150 profissionais mentorados no país</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2.5 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#8495A6] shrink-0 stroke-[2.5]" />
                <span>Foco em Gestão, Comercial e Marketing</span>
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

import React from 'react';
import { Award, Briefcase, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL, OFFICIAL_WEBSITE_URL } from '../data/landingData';

export const MentorSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="nb bg-[#0B0D12] border-4 border-[#0B0D12] shadow-[8px_8px_0_#D6BE96] rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto p-6 flex flex-col items-center justify-between text-center relative">
              
              <div className="absolute top-4 right-4 z-20">
                <span className="adesivo text-[10px] transform rotate-3">
                  ★ O Mentor
                </span>
              </div>

              {/* Watermark Monogram */}
              <div className="w-24 h-24 rounded-full border-2 border-[#D6BE96]/40 flex items-center justify-center font-serif-luxury text-5xl text-[#D6BE96] mt-4 shadow-[3px_3px_0_#D6BE96]">
                F
              </div>

              {/* Portrait container */}
              <div className="relative z-10 my-4 w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-3 border-[#D6BE96] bg-[#1E2833] shadow-[4px_4px_0_#D6BE96] flex flex-col items-center justify-center p-4">
                <span className="font-serif-luxury text-4xl text-[#D6BE96] font-bold">AF</span>
                <span className="text-[11px] text-white font-mono font-bold tracking-widest uppercase mt-2">
                  Alexandre Fontinele
                </span>
                <span className="text-[10px] text-[#D6BE96] mt-1 font-medium">
                  Fundador Fontenelle Academy
                </span>
              </div>

              {/* Badge card */}
              <div className="bg-white text-[#0B0D12] border-2 border-[#0B0D12] p-3 rounded-xl w-full text-left shadow-[3px_3px_0_#D6BE96]">
                <span className="text-[10px] font-black uppercase tracking-wider block text-[#8495A6]">
                  Especialidade
                </span>
                <p className="text-xs font-bold leading-tight mt-0.5">
                  Comunicação Estratégica & Gestão de Clínicas de Alto Padrão
                </p>
              </div>

            </div>
          </div>

          {/* Bio / Authority Column (7 cols) */}
          <div className="lg:col-span-7">
            <span className="adesivo mb-3 inline-block">
              ★ Quem Conduz o Seu Treinamento
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
              Alexandre Fontinele, <span className="block mt-1"><span className="mk">fundador da Fontenelle Academy.</span></span>
            </h2>
            <p className="text-sm font-bold text-[#8495A6] mt-2">
              Estrategista de Comunicação, Oratória e Gestão Comercial para Serviços de Saúde e Clínicas
            </p>

            <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#3B3F4A] leading-relaxed font-medium">
              <p>
                Como fundador da <strong>Fontenelle Academy</strong>, Alexandre estruturou as duas principais verticais da marca: <em>Fontenelle Communication</em> (oratoria, segurança e autoridade) e <em>Fontenelle Esthetic</em> (gestão de clínicas, treinamento de recepção e conversão comercial).
              </p>
              <p>
                Ele identificou que a grande maioria dos donos de clínicas perde até 80% do potencial de faturamento simplesmente porque a equipe de atendimento passa o preço cru no WhatsApp ou não sabe conduzir a consulta avaliativa.
              </p>
              <p>
                Este treinamento foi desenhado exatamente para ser prático: você assiste, passa os scripts para sua secretária e já vê a postura da sua recepção mudar nas primeiras 24 horas.
              </p>
            </div>

            {/* Credential bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#0B0D12] font-bold">
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#0B0D12] shrink-0 stroke-[2.5]" />
                <span>+480 Clínicas e consultórios orientados</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#0B0D12] shrink-0 stroke-[2.5]" />
                <span>Foco em fechamento sem dar descontos</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#0B0D12] shrink-0 stroke-[2.5]" />
                <span>Método testado em todo o Brasil</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F5F0] p-2 rounded-lg border border-[#0B0D12]/30">
                <CheckCircle2 className="w-4 h-4 text-[#0B0D12] shrink-0 stroke-[2.5]" />
                <span>Didática direta para donos e secretárias</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nb text-xs sm:text-sm font-black flex items-center gap-2"
              >
                <span>Ser Aluno do Alexandre Fontinele</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={OFFICIAL_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl text-xs font-bold text-[#0B0D12] bg-white border-2 border-[#0B0D12] hover:bg-[#F7F5F0] transition-colors shadow-[2px_2px_0_#0B0D12]"
              >
                Conhecer o Site Oficial da Academia →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

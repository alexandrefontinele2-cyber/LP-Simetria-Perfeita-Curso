import React from 'react';
import { Layers, TrendingUp, Sparkles, HeartHandshake, Volume2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL, THREE_PILLARS } from '../data/landingData';

export const MethodFramework: React.FC = () => {
  return (
    <section id="metodo" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="adesivo mb-3 inline-block">
            ★ O Núcleo da Metodologia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Os 3 Pilares do Método 3²: <span className="block mt-1"><span className="mk">Estrutura, Performance & Experiência</span></span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#3B3F4A] leading-relaxed font-medium">
            O <strong>Simetria Perfeita</strong> é um treinamento estratégico criado para proprietários e gestores de clínicas de estética que desejam crescer de forma estruturada, lucrativa e sustentável. O foco é voltado para as três áreas principais: <strong>Gestão</strong>, <strong>Comunicação/Marketing</strong> e <strong>Área Comercial</strong>.
          </p>
        </div>

        {/* 3 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {THREE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="nb bg-white p-6 sm:p-7 border-3 border-[#0B0D12] shadow-[5px_5px_0_#0B0D12] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#0B0D12] bg-[#D6BE96] px-2.5 py-1 rounded-md border-2 border-[#0B0D12]">
                    PILAR {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#8495A6] text-white flex items-center justify-center border-2 border-[#0B0D12]">
                    {idx === 0 && <Layers className="w-5 h-5" />}
                    {idx === 1 && <TrendingUp className="w-5 h-5" />}
                    {idx === 2 && <Sparkles className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="text-lg font-black text-[#0B0D12] font-display mb-1">
                  {pillar.pillar}
                </h3>
                <span className="text-xs font-bold text-[#8495A6] block mb-3">
                  {pillar.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-[#3B3F4A] font-medium leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <ul className="space-y-2 border-t-2 border-[#0B0D12]/15 pt-3">
                  {pillar.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-[#0B0D12] font-medium flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8495A6] shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t-2 border-[#0B0D12]/20 flex items-center justify-between text-xs font-black text-[#0B0D12]">
                <span className="font-mono">{pillar.metric}</span>
                <span className="text-[#8495A6]">✓ Validado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Focus on PILAR 3: JORNADA DO CLIENTE & ENCANTAMENTO */}
        <div className="nb bg-[#8495A6] text-white p-6 sm:p-10 border-4 border-[#0B0D12] shadow-[8px_8px_0_#0B0D12]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b-2 border-[#0B0D12]">
            <div>
              <span className="adesivo text-[10px] mb-2 inline-block">
                ★ Destaque Metodológico
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                Pilar 3: Jornada do Cliente & Encantamento
              </h3>
              <p className="text-xs sm:text-sm text-neutral-100 font-medium mt-1">
                Fidelização & Indicação Espontânea: Crie uma experiência sensorial inesquecível desde o primeiro clique até o pós-procedimento.
              </p>
            </div>

            <div className="bg-[#D6BE96] text-[#0B0D12] px-4 py-2 rounded-xl border-2 border-[#0B0D12] shadow-[3px_3px_0_#0B0D12] shrink-0">
              <span className="text-xs font-mono font-black uppercase block">
                Métrica Comprovada
              </span>
              <strong className="text-lg font-black font-mono">
                84% de Recompra em 12 Meses
              </strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            
            {/* Dimensão 3.1 */}
            <div className="bg-white text-[#0B0D12] p-5 rounded-2xl border-2 border-[#0B0D12] shadow-[4px_4px_0_#0B0D12] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#8495A6] uppercase tracking-wider block mb-1">
                  Dimensão 3.1
                </span>
                <h4 className="text-base font-black font-display mb-2">
                  Experiência Sensorial na Recepção
                </h4>
                <p className="text-xs text-[#3B3F4A] leading-relaxed font-medium">
                  Assinatura olfativa, som ambiente calibrado, atendimento de hotelaria 5 estrelas e ritual de boas-vindas que justificam preços premium.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#0B0D12]/15 text-[11px] font-black text-[#8495A6]">
                Impacto: Posicionamento de Alto Padrão
              </div>
            </div>

            {/* Dimensão 3.2 */}
            <div className="bg-white text-[#0B0D12] p-5 rounded-2xl border-2 border-[#0B0D12] shadow-[4px_4px_0_#0B0D12] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#8495A6] uppercase tracking-wider block mb-1">
                  Dimensão 3.2
                </span>
                <h4 className="text-base font-black font-display mb-2">
                  Protocolo de Pós-Procedimento & Cuidado
                </h4>
                <p className="text-xs text-[#3B3F4A] leading-relaxed font-medium">
                  Acompanhamento carinhoso e estruturado nos dias D+1, D+7 que gera extrema segurança e previne queixas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#0B0D12]/15 text-[11px] font-black text-emerald-700">
                Impacto: 90% de índice NPS de satisfação
              </div>
            </div>

            {/* Dimensão 3.3 */}
            <div className="bg-white text-[#0B0D12] p-5 rounded-2xl border-2 border-[#0B0D12] shadow-[4px_4px_0_#0B0D12] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#8495A6] uppercase tracking-wider block mb-1">
                  Dimensão 3.3
                </span>
                <h4 className="text-base font-black font-display mb-2">
                  Motor de Indicação & Recorrência Natural
                </h4>
                <p className="text-xs text-[#3B3F4A] leading-relaxed font-medium">
                  Sistema elegante para incentivar pacientes satisfeitas a trazerem amigas e familiares do mesmo perfil socioeconômico.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#0B0D12]/15 text-[11px] font-black text-[#0B0D12]">
                Impacto: Média de 3 a 4 novas indicações
              </div>
            </div>

          </div>

          <div className="mt-8 text-center pt-2">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nb text-xs sm:text-sm font-black inline-flex items-center gap-2"
            >
              <span>Quero Implementar a Jornada 5 Estrelas na Minha Clínica</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

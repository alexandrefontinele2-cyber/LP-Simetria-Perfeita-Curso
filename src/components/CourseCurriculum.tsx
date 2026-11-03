import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, FileText, CheckCircle2, Clock } from 'lucide-react';
import { COURSE_MODULES_8, CHECKOUT_URL } from '../data/landingData';

export const CourseCurriculum: React.FC = () => {
  const [expandedModules, setExpandedModules] = useState<{ [key: number]: boolean }>({
    1: true,
    4: true,
    6: true
  });

  const toggleModule = (id: number) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: { [key: number]: boolean } = {};
    COURSE_MODULES_8.forEach(m => { all[m.id] = true; });
    setExpandedModules(all);
  };

  const collapseAll = () => {
    setExpandedModules({});
  };

  return (
    <section id="modulos" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="adesivo mb-3 inline-block">
            ★ Conteúdo Programático
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Grade Curricular Completa <span className="block mt-1"><span className="mk">(8 Módulos • 22h de Conteúdo)</span></span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#3B3F4A] font-medium">
            Da fundação e diagnóstico ao Desafio 90 Dias de expansão: cada aula foi estruturada com foco em aplicação prática e imediata na rotina da sua clínica.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={expandAll}
              className="text-xs font-bold text-[#0B0D12] hover:underline cursor-pointer"
            >
              Expandir todos os 8 módulos
            </button>
            <span className="text-[#0B0D12] font-bold">·</span>
            <button
              onClick={collapseAll}
              className="text-xs font-bold text-[#0B0D12] hover:underline cursor-pointer"
            >
              Recolher todos
            </button>
          </div>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-4">
          {COURSE_MODULES_8.map((module) => {
            const isExpanded = !!expandedModules[module.id];
            return (
              <div
                key={module.id}
                className="nb bg-white border-3 border-[#0B0D12] shadow-[4px_4px_0_#0B0D12] overflow-hidden transition-all"
              >
                {/* Header button */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="inline-block text-xs font-black font-mono text-[#0B0D12] bg-[#D6BE96] px-3 py-1 rounded-md border-2 border-[#0B0D12] self-start shrink-0">
                      {module.numberTag}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-[#0B0D12] font-display">
                        {module.title}
                      </h3>
                      <p className="text-xs text-[#5E626D] font-bold mt-0.5">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono font-bold text-[#8495A6] hidden sm:flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {module.duration}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F7F5F0] border-2 border-[#0B0D12] flex items-center justify-center text-[#0B0D12] shrink-0 font-bold">
                      {isExpanded ? <ChevronUp className="w-4 h-4 stroke-[3]" /> : <ChevronDown className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 border-t-2 border-[#0B0D12] bg-[#F7F5F0]/60">
                    
                    {/* Deliverable tag */}
                    <div className="mb-4 p-3 rounded-xl bg-white border-2 border-[#0B0D12] flex items-center gap-2 text-xs text-[#0B0D12] font-bold shadow-[2px_2px_0_#0B0D12]">
                      <FileText className="w-4 h-4 text-[#8495A6] shrink-0" />
                      <span>Material incluso: <strong>{module.deliverable}</strong></span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-black text-[#0B0D12] uppercase tracking-wider block">
                        Aulas práticas deste módulo:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0B0D12] font-medium">
                        {module.lessons.map((lesson, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-[#0B0D12]/30">
                            <PlayCircle className="w-4 h-4 text-[#8495A6] shrink-0 mt-0.5" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specific callout for Module 04 */}
                    {module.id === 4 && (
                      <div className="mt-4 p-3 rounded-xl bg-[#D6BE96]/30 border-2 border-[#0B0D12] text-xs text-[#0B0D12] font-bold">
                        ★ Acesso exclusivo ao script com mensagens validadas que elevam imediatamente o nível do atendimento da sua recepção.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section bottom CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#8495A6] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-4 border-[#0B0D12] shadow-[6px_6px_0_#0B0D12]">
          <div>
            <span className="adesivo text-[10px] mb-2 inline-block">
              ★ 22 Horas de Conteúdo Prático
            </span>
            <h4 className="text-xl font-black font-display text-white">
              Pronto para ter uma clínica linda por fora e por dentro?
            </h4>
            <p className="text-xs text-neutral-100 mt-1 font-medium">
              Tenha acesso a todos os 8 módulos, planilhas e scripts para aplicar com sua equipe hoje mesmo.
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nb text-xs sm:text-sm font-black whitespace-nowrap shrink-0 w-full sm:w-auto"
          >
            QUERO ESCALAR MINHA CLÍNICA AGORA →
          </a>
        </div>

      </div>
    </section>
  );
};

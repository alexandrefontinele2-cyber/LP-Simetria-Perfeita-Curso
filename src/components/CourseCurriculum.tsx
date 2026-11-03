import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, FileText, CheckCircle2 } from 'lucide-react';
import { COURSE_MODULES, CHECKOUT_URL } from '../data/landingData';

export const CourseCurriculum: React.FC = () => {
  const [expandedModules, setExpandedModules] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true
  });

  const toggleModule = (id: number) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: { [key: number]: boolean } = {};
    COURSE_MODULES.forEach(m => { all[m.id] = true; });
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
            ★ Grade Curricular Completa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            O que você vai aprender na <span className="block mt-1"><span className="mk">Fontenelle Academy</span></span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#3B3F4A] font-medium">
            6 módulos gravados em alta definição, direto ao ponto, com materiais complementares e modelos prontos para implementação imediata pela sua equipe.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={expandAll}
              className="text-xs font-bold text-[#0B0D12] hover:underline cursor-pointer"
            >
              Expandir todos os módulos
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
          {COURSE_MODULES.map((module) => {
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
                      {module.badge}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-[#0B0D12] font-display">
                        {module.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[#5E626D] font-bold mt-0.5">
                        <span className="font-mono">{module.duration}</span>
                        <span>·</span>
                        <span className="text-[#0B0D12] hidden sm:inline">
                          Entrega: {module.keyDeliverable}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#F7F5F0] border-2 border-[#0B0D12] flex items-center justify-center text-[#0B0D12] shrink-0 mt-1 sm:mt-0 font-bold">
                    {isExpanded ? <ChevronUp className="w-4 h-4 stroke-[3]" /> : <ChevronDown className="w-4 h-4 stroke-[3]" />}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 border-t-2 border-[#0B0D12] bg-[#F7F5F0]/60">
                    <p className="text-xs sm:text-sm text-[#3B3F4A] leading-relaxed mb-4 font-medium">
                      {module.description}
                    </p>

                    <div className="mb-4 p-3 rounded-xl bg-white border-2 border-[#0B0D12] flex items-center gap-2 text-xs text-[#0B0D12] font-bold shadow-[2px_2px_0_#0B0D12]">
                      <FileText className="w-4 h-4 text-[#8495A6]" />
                      <span>Material prático incluso: <strong>{module.keyDeliverable}</strong></span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-black text-[#0B0D12] uppercase tracking-wider block">
                        Aulas deste módulo:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0B0D12] font-medium">
                        {module.lessons.map((lesson, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-[#0B0D12]/30">
                            <PlayCircle className="w-4 h-4 text-[#0B0D12] shrink-0 mt-0.5" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section bottom notice & CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0B0D12] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-4 border-[#0B0D12] shadow-[6px_6px_0_#D6BE96]">
          <div>
            <span className="adesivo adesivo-tinta text-[10px] mb-2 inline-block">
              ★ Liberado Imediatamente
            </span>
            <h4 className="text-xl font-black font-display text-white">
              Pronto para colocar sua equipe no padrão das melhores clínicas?
            </h4>
            <p className="text-xs text-neutral-300 mt-1 font-medium">
              Comece a assistir hoje mesmo e receba todos os scripts e planilhas instantaneamente.
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nb text-xs sm:text-sm font-black whitespace-nowrap shrink-0 w-full sm:w-auto"
          >
            Quero Acessar Todos os Módulos →
          </a>
        </div>

      </div>
    </section>
  );
};

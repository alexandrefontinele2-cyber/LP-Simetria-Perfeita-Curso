import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, FileText, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { COURSE_CONTENT_LIST, CHECKOUT_URL } from '../data/landingData';

export const CourseCurriculum: React.FC = () => {
  const [expandedTopics, setExpandedTopics] = useState<{ [key: number]: boolean }>({
    1: true,
    4: true,
    6: true
  });

  const toggleTopic = (id: number) => {
    setExpandedTopics(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: { [key: number]: boolean } = {};
    COURSE_CONTENT_LIST.forEach(m => { all[m.id] = true; });
    setExpandedTopics(all);
  };

  const collapseAll = () => {
    setExpandedTopics({});
  };

  return (
    <section id="conteudos" className="py-16 sm:py-24 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="adesivo mb-3 inline-block">
            ★ Metodologia & Conteúdo Prático
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] font-display tracking-tight leading-tight">
            Conteúdos que você vai ter acesso
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#1E242B] font-medium">
            Da fundação e diagnóstico à jornada de encantamento e expansão da clínica: conteúdos estruturados com foco em aplicação prática e resultado imediato.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={expandAll}
              className="text-xs font-bold text-[#0B0D12] hover:underline cursor-pointer"
            >
              Expandir todos os conteúdos
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

        {/* Content Topics Accordion List */}
        <div className="space-y-4">
          {COURSE_CONTENT_LIST.map((item, idx) => {
            const isExpanded = !!expandedTopics[item.id];
            const numLabel = (idx + 1).toString().padStart(2, '0');

            return (
              <div
                key={item.id}
                className="nb bg-white border-3 border-[#0B0D12] shadow-[4px_4px_0_#0B0D12] overflow-hidden transition-all"
              >
                {/* Header button */}
                <button
                  onClick={() => toggleTopic(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="inline-block text-xs font-black font-mono text-[#0B0D12] bg-[#D6BE96] px-3 py-1 rounded-md border-2 border-[#0B0D12] self-start shrink-0">
                      {numLabel}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-[#0B0D12] font-display">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#1E242B] font-bold mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#F7F5F0] border-2 border-[#0B0D12] flex items-center justify-center text-[#0B0D12] shrink-0 font-bold">
                      {isExpanded ? <ChevronUp className="w-4 h-4 stroke-[3]" /> : <ChevronDown className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 border-t-2 border-[#0B0D12] bg-[#F7F5F0]/60">
                    
                    {/* Material incluso notice sem detalhar arquivo */}
                    <div className="mb-4 p-3 rounded-xl bg-white border-2 border-[#0B0D12] flex items-center gap-2 text-xs text-[#0B0D12] font-bold shadow-[2px_2px_0_#0B0D12]">
                      <FileText className="w-4 h-4 text-[#8495A6] shrink-0" />
                      <span>Material prático incluso na aula</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-black text-[#0B0D12] uppercase tracking-wider block">
                        Tópicos abordados:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0B0D12] font-medium">
                        {item.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-[#0B0D12]/30">
                            <CheckCircle className="w-4 h-4 text-[#8495A6] shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                )}
              </div>
            );
          })}

          {/* "E muito mais..." Card */}
          <div className="nb bg-[#D6BE96] border-3 border-[#0B0D12] p-6 rounded-2xl shadow-[5px_5px_0_#0B0D12] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#0B0D12] flex items-center justify-center shrink-0 shadow-[2px_2px_0_#0B0D12]">
                <Sparkles className="w-5 h-5 text-[#0B0D12]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-[#0B0D12] font-display">
                  E muito mais...
                </h4>
                <p className="text-xs sm:text-sm text-[#0B0D12] font-medium mt-0.5">
                  Atualizações contínuas de estratégias de mercado, novos modelos práticos e direcionamentos diretos para a realidade da sua clínica de estética.
                </p>
              </div>
            </div>

            <span className="adesivo text-xs px-3 py-1.5 whitespace-nowrap shrink-0">
              ★ Conteúdo Completo
            </span>
          </div>

        </div>

        {/* Section bottom CTA */}
        <div 
          style={{ backgroundColor: '#8495A6', color: '#FFFFFF' }}
          className="mt-12 p-6 sm:p-8 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-4 border-[#0B0D12] shadow-[6px_6px_0_#0B0D12]"
        >
          <div>
            <span className="adesivo text-[10px] text-[#0B0D12] font-black mb-2 inline-block">
              ★ Acesso Imediato
            </span>
            <h4 className="text-xl font-black font-display text-white">
              Pronto para ter uma clínica linda por fora e por dentro?
            </h4>
            <p className="text-xs sm:text-sm text-white mt-1 font-semibold">
              Tenha acesso a todo o conteúdo do curso Simetria Perfeita, materiais inclusos e scripts para aplicar com sua equipe hoje mesmo.
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

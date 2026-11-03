import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, Zap, Lock, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(30);

  const slides = [
    {
      title: 'O Erro Fatal: Responder Apenas Preço',
      subtitle: 'Por que passar o valor seco no WhatsApp faz 82% dos pacientes desaparecerem',
      badge: 'Etapa 01 · Recepção',
      metric: '82% Perda Média Evitável'
    },
    {
      title: 'A Consulta Avaliativa de R$ 5.000+',
      subtitle: 'O roteiro de 4 perguntas que ancora valor e elimina pedidos de desconto',
      badge: 'Etapa 02 · Negociação',
      metric: '3.4x Aumento de Conversão'
    },
    {
      title: 'Protocolos & Planos Anuais de Recorrência',
      subtitle: 'Como transformar um procedimento avulso de R$ 350 em um plano de R$ 4.800',
      badge: 'Etapa 03 · Escalar LTV',
      metric: '+R$ 48.000 no Caixa Mensal'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentSlideIndex(i => (i + 1) % slides.length);
          return 0;
        }
        return prev + 2.5;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#F7F5F0] border-b-4 border-[#0B0D12]">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Label / Adhesive Stamp */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="mb-4">
            <span className="adesivo">
              ★ O Workflow Comercial de Elite para Donos de Clínicas
            </span>
          </div>

          {/* Main Headline with Signature Neo-Brutalist Highlighter */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B0D12] tracking-tight leading-[1.08] max-w-4xl text-balance font-display">
            A sua clínica pode faturar múltiplos 6 dígitos. <span className="block mt-2"><span className="mk">Sem dar desconto e sem furos na agenda.</span></span>
          </h1>

          {/* Subheadline Lead */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#3B3F4A] max-w-3xl leading-relaxed text-balance font-medium">
            Você não precisa ficar refém de recepcionista desmotivada ou disputar pacientes por preço na sua cidade. O <strong>Método Fontenelle</strong> transforma seu WhatsApp e sua consulta avaliativa em uma engrenagem previsível de planos de alto valor.
          </p>
        </div>

        {/* Video / VSL Showcase Player inside Neo-brutalist Object */}
        <div className="mt-6 max-w-4xl mx-auto">
          <div className="nb bg-[#0B0D12] text-white border-4 border-[#0B0D12] shadow-[8px_8px_0_#0B0D12] overflow-hidden relative">
            
            {/* Top Bar inside Player */}
            <div className="bg-[#1C1F26] px-4 py-3 flex items-center justify-between border-b-2 border-white/10 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block border border-black/40" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block border border-black/40" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block border border-black/40" />
                <span className="ml-2 font-bold text-[#D6BE96] hidden sm:inline">
                  FONTENELLE ACADEMY · GESTÃO E VENDAS EM TEMPO REAL
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400 font-mono text-[11px]">
                  Capítulo {currentSlideIndex + 1} de {slides.length}
                </span>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 hover:text-white transition-colors cursor-pointer"
                  title={isMuted ? 'Desmutar' : 'Mutar'}
                  aria-label="Controle de áudio"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4 text-[#D6BE96]" />}
                </button>
              </div>
            </div>

            {/* Video Viewport Simulated Screen */}
            <div className="relative aspect-video w-full bg-[#12151C] flex flex-col items-center justify-center p-6 sm:p-12 text-center select-none overflow-hidden">
              
              {/* Subtle background tech grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D6BE96_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
              
              {/* Floating clinic badge stamp */}
              <div className="relative z-10 mb-4 inline-block">
                <span className="adesivo adesivo-tinta text-[11px]">
                  {slides[currentSlideIndex].badge}
                </span>
              </div>

              {/* Dynamic Slide Content */}
              <div className="relative z-10 max-w-xl transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display tracking-tight leading-snug">
                  {slides[currentSlideIndex].title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-lg mx-auto font-medium">
                  {slides[currentSlideIndex].subtitle}
                </p>

                {/* Highlight metric stamp */}
                <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 border-2 border-[#D6BE96] shadow-[3px_3px_0_#D6BE96]">
                  <Award className="w-4 h-4 text-[#D6BE96]" />
                  <span className="text-xs sm:text-sm font-bold text-[#D6BE96] font-mono">
                    {slides[currentSlideIndex].metric}
                  </span>
                </div>
              </div>

              {/* Play / Pause Interactive Overlay button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute bottom-6 left-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/80 hover:bg-black border-2 border-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#D6BE96]" /> : <Play className="w-3.5 h-3.5 text-[#D6BE96]" />}
                <span>{isPlaying ? 'Pausar Demonstração' : 'Continuar Apresentação'}</span>
              </button>

              {/* Slide picker tabs inside player */}
              <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSlideIndex(idx);
                      setProgress(0);
                    }}
                    className={`h-3 rounded-full transition-all border border-white/40 cursor-pointer ${
                      idx === currentSlideIndex ? 'bg-[#D6BE96] w-8 border-[#D6BE96]' : 'bg-white/30 w-3 hover:bg-white/60'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Progress bar at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10">
                <div 
                  className="h-full bg-[#D6BE96] transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

            </div>

            {/* Video footer bar */}
            <div className="bg-[#1C1F26] px-4 py-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-300 border-t-2 border-white/10">
              <div className="flex items-center gap-2 font-bold text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D6BE96] inline-block animate-pulse" />
                <span>Edição Oficial para Donos de Clínicas</span>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-300 font-normal">Aulas práticas + Scripts em PDF + Planilhas</span>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-[#D6BE96] font-mono font-bold">
                <span>✓ 6 MÓDULOS</span>
                <span>✓ 5 BÔNUS INCLUSOS</span>
              </div>
            </div>

          </div>
        </div>

        {/* Primary High-Intent Neo-brutalist CTA Box */}
        <div className="mt-12 max-w-xl mx-auto flex flex-col items-center text-center">
          
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-nb text-base sm:text-lg font-black flex items-center justify-center gap-3"
          >
            <Zap className="w-5 h-5 fill-[#0B0D12] text-[#0B0D12]" />
            <span>Quero a Fábrica de Vendas da Minha Clínica</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Pricing anchor under CTA */}
          <div className="mt-4 text-xs sm:text-sm text-[#3B3F4A] font-bold">
            <span className="text-neutral-500 line-through mr-2">De R$ 997,00</span>
            <span className="text-[#0B0D12]">Por apenas 12x de</span>
            <strong className="text-base sm:text-xl font-black text-[#0B0D12] ml-1 bg-[#D6BE96] px-2 py-0.5 rounded border border-[#0B0D12]">
              R$ 29,82
            </strong>
            <span className="text-neutral-600 ml-1.5">(ou R$ 297 à vista no Pix)</span>
          </div>

          {/* Trust badges with hard outlines */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-[#0B0D12]">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-md border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
              <Lock className="w-3.5 h-3.5 text-[#0B0D12]" />
              <span>Checkout 100% Seguro Cakto</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-md border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0B0D12]" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-md border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12]">
              <Zap className="w-3.5 h-3.5 text-[#0B0D12]" />
              <span>Acesso Imediato no E-mail</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

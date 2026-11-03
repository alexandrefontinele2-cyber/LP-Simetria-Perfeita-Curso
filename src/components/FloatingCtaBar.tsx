import React, { useState, useEffect } from 'react';
import { Zap, X } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const FloatingCtaBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <aside 
      aria-label="Aviso de inscrição rápida"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF] border-t-4 border-[#0B0D12] py-2.5 px-4 shadow-[0_-6px_0_rgba(11,13,18,0.1)] transition-all"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left price and condition note */}
        <div className="flex items-center gap-2.5">
          <span className="adesivo text-[9px] py-0.5 px-2 hidden sm:inline-block">
            ★ MÉTODO 3²
          </span>
          <div className="text-left leading-tight">
            <span className="text-[11px] text-[#5E626D] font-bold block sm:inline sm:mr-1.5">
              Simetria Perfeita:
            </span>
            <strong className="text-xs sm:text-sm text-[#0B0D12] font-black font-mono">
              12x de R$ 41,01 <span className="text-[#5E626D] font-medium text-[11px] font-sans">(ou R$ 397 no Pix)</span>
            </strong>
          </div>
        </div>

        {/* Right CTA button & close */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-black text-[#0B0D12] bg-[#D6BE96] border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12] active:translate-x-0.5 active:translate-y-0.5 rounded-lg transition-all uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <Zap className="w-3.5 h-3.5 fill-[#0B0D12] text-[#0B0D12]" />
            <span>QUERO ESCALAR MINHA CLÍNICA</span>
            <span>→</span>
          </a>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-[#0B0D12] hover:bg-neutral-200 rounded transition-colors cursor-pointer"
            title="Fechar barra"
            aria-label="Fechar barra de inscrição"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </aside>
  );
};

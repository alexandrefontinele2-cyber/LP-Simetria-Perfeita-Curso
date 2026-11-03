import React from 'react';
import { CHECKOUT_URL } from '../data/landingData';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#FFFFFF] border-b-4 border-[#0B0D12] sticky top-[37px] z-40 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Brand wordmark (single element, neo-brutalist lockup) */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 text-base sm:text-lg font-black tracking-tight text-[#0B0D12] whitespace-nowrap shrink-0 group"
        >
          <span className="w-9 h-9 rounded-lg bg-[#0B0D12] text-[#D6BE96] flex items-center justify-center font-serif-luxury text-xl font-bold border-2 border-[#0B0D12] shadow-[2px_2px_0_#D6BE96]">
            F
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-black tracking-wider text-sm sm:text-base font-display">
              FONTENELLE
            </span>
            <span className="text-[10px] tracking-widest text-[#8495A6] font-bold uppercase">
              ACADEMY
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-bold text-[#0B0D12]">
          <a href="#efeitos" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            Efeitos & Scripts
          </a>
          <a href="#metodo" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            O Método
          </a>
          <a href="#modulos" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            Grade de Aulas
          </a>
          <a href="#calculadora" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            Simulador de Lucro
          </a>
          <a href="#para-quem" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            Para Quem É
          </a>
          <a href="#faq" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-black text-[#0B0D12] bg-[#D6BE96] border-2 border-[#0B0D12] rounded-xl shadow-[3px_3px_0_#0B0D12] active:translate-x-0.5 active:translate-y-0.5 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Garantir Vaga</span>
            <span className="text-xs">→</span>
          </a>
        </div>

      </div>
    </header>
  );
};

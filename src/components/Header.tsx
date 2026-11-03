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
          <span className="w-9 h-9 rounded-lg bg-[#8495A6] text-[#FFFFFF] flex items-center justify-center font-serif-luxury text-xl font-bold border-2 border-[#0B0D12] shadow-[2px_2px_0_#D6BE96]">
            F
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-black tracking-wider text-sm sm:text-base font-display">
              FONTENELLE ACADEMY
            </span>
            <span className="text-[10px] tracking-widest text-[#8495A6] font-black uppercase">
              SIMETRIA PERFEITA
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-bold text-[#0B0D12]">
          <a href="#metodo" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            Método 3²
          </a>
          <a href="#conteudos" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            Conteúdos
          </a>
          <a href="#simulador" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            Régua de Faturamento
          </a>
          <a href="#mentor" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            O Mentor
          </a>
          <a href="#oferta" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            Inscrição & Mentoria
          </a>
          <a href="#faq" className="hover:text-[#8495A6] transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 primary action pointing to Cakto checkout */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-black text-[#0B0D12] bg-[#D6BE96] border-2 border-[#0B0D12] rounded-xl shadow-[3px_3px_0_#0B0D12] active:translate-x-0.5 active:translate-y-0.5 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Quero Escalar Minha Clínica</span>
            <span className="text-xs">→</span>
          </a>
        </div>

      </div>
    </header>
  );
};

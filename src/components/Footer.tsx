import React from 'react';
import { CHECKOUT_URL, OFFICIAL_WEBSITE_URL } from '../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0D12] text-neutral-300 py-12 text-xs border-t-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-white/10 text-center md:text-left">
          
          {/* Brand lockup */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-white text-[#0B0D12] flex items-center justify-center font-serif-luxury text-xl font-bold border-2 border-[#D6BE96]">
                F
              </span>
              <span className="font-black tracking-wider text-base text-white font-display">
                FONTENELLE ACADEMY
              </span>
            </div>
            <p className="mt-2 text-xs text-neutral-400 max-w-sm font-medium">
              Hub de alta performance e excelência comercial para donos de clínicas e profissionais liberais.
            </p>
          </div>

          {/* Nav links mirror */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-neutral-300">
            <a href="#efeitos" className="hover:text-[#D6BE96] transition-colors">Efeitos</a>
            <a href="#metodo" className="hover:text-[#D6BE96] transition-colors">O Método</a>
            <a href="#modulos" className="hover:text-[#D6BE96] transition-colors">Aulas</a>
            <a href="#calculadora" className="hover:text-[#D6BE96] transition-colors">Simulador</a>
            <a href="#depoimentos" className="hover:text-[#D6BE96] transition-colors">Resultados</a>
            <a href="#faq" className="hover:text-[#D6BE96] transition-colors">Dúvidas</a>
            <a href={OFFICIAL_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="text-[#D6BE96] hover:underline">
              Site Oficial Fontenelle →
            </a>
          </div>

        </div>

        {/* Legal and disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 text-center sm:text-left font-mono">
          <p>
            © {new Date().getFullYear()} Fontenelle Academy. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Termos de Uso</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacidade</span>
            <span>·</span>
            <span className="text-[#D6BE96]">Pagamentos Seguros Cakto</span>
          </div>
        </div>

        {/* Informative disclaimer */}
        <p className="mt-4 text-[10px] text-neutral-400 text-center leading-relaxed max-w-3xl mx-auto">
          Este site não é afiliado ao Facebook, Instagram ou qualquer entidade da Meta Inc. Os resultados podem variar de acordo com o comprometimento do aluno e aplicação das estratégias na rotina da clínica.
        </p>

      </div>
    </footer>
  );
};

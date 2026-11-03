import React from 'react';
import { CHECKOUT_URL, OFFICIAL_WEBSITE_URL } from '../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8495A6] text-white py-12 text-xs border-t-4 border-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-white/20 text-center md:text-left">
          
          {/* Brand lockup */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-white text-[#0B0D12] flex items-center justify-center font-serif-luxury text-xl font-bold border-2 border-[#0B0D12]">
                F
              </span>
              <span className="font-black tracking-wider text-base text-white font-display">
                FONTENELLE ACADEMY
              </span>
            </div>
            <p className="mt-2 text-xs text-white/90 max-w-sm font-medium">
              Simetria Perfeita: Gestão, Comercial & Marketing para Clínicas de Estética · Alexandre Fontinele.
            </p>
          </div>

          {/* Nav links mirror */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-white">
            <a href="#metodo" className="hover:text-[#D6BE96] transition-colors">O Método 3²</a>
            <a href="#conteudos" className="hover:text-[#D6BE96] transition-colors">Conteúdos</a>
            <a href="#simulador" className="hover:text-[#D6BE96] transition-colors">Régua de Faturamento</a>
            <a href="#mentor" className="hover:text-[#D6BE96] transition-colors">O Mentor</a>
            <a href="#oferta" className="hover:text-[#D6BE96] transition-colors">Inscrição & Mentoria</a>
            <a href="#faq" className="hover:text-[#D6BE96] transition-colors">Dúvidas</a>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="text-[#D6BE96] hover:underline font-black">
              Comprar Agora →
            </a>
          </div>

        </div>

        {/* Legal and disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/80 text-center sm:text-left font-mono font-medium">
          <p>
            © Fontenelle Academy. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#D6BE96]">Pagamentos 100% Seguros pela Cakto</span>
            <span>·</span>
            <a href={OFFICIAL_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
              fontenelleacademy.com.br
            </a>
          </div>
        </div>

        {/* Informative disclaimer */}
        <p className="mt-4 text-[11px] text-white/75 text-center leading-relaxed max-w-3xl mx-auto font-medium">
          Aviso Legal: Os resultados podem variar de acordo com o nível de aplicação e maturidade de cada clínica. O conteúdo tem caráter educacional e gerencial.
        </p>

      </div>
    </footer>
  );
};

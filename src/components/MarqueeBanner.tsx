import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const phrase = "MÉTODO 3² · SIMETRIA PERFEITA · GESTÃO ESTRUTURADA · PERFORMANCE COMERCIAL · MARKETING CONSCIENTE · JORNADA DO CLIENTE 5 ESTRELAS · FIDELIZAÇÃO & INDICAÇÃO · ";
  const repeated = phrase.repeat(4);

  return (
    <div className="w-full overflow-hidden py-3 bg-[#8495A6] border-y-4 border-[#0B0D12] select-none pointer-events-none">
      <div className="marquee-track flex items-center">
        <span className="text-sm sm:text-base font-black font-mono tracking-widest text-[#FFFFFF] uppercase whitespace-nowrap drop-shadow-sm">
          {repeated}
        </span>
      </div>
    </div>
  );
};

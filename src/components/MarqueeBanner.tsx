import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const phrase = "ATENDIMENTO DE ELITE · SCRIPTS DE WHATSAPP · ZERO DESCONTOS · PROTOCOLOS HIGH-TICKET · RECEPÇÃO VENDEDORA · AGENDA SEM FUROS · RESGATE DE LEADS · GESTÃO PREVISÍVEL · ";
  const repeated = phrase.repeat(4);

  return (
    <div className="w-full overflow-hidden py-3 bg-[#0B0D12] border-y-4 border-[#0B0D12] select-none pointer-events-none">
      <div className="marquee-track flex items-center">
        <span className="text-sm sm:text-base font-bold font-mono tracking-widest text-[#D6BE96] uppercase whitespace-nowrap">
          {repeated}
        </span>
      </div>
    </div>
  );
};

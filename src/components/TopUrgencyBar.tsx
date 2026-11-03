import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL } from '../data/landingData';

export const TopUrgencyBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 47,
    seconds: 22
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 3, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-[#0B0D12] text-white py-2 px-4 border-b-2 border-white/20 sticky top-0 z-50 text-xs md:text-sm select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="bg-[#D6BE96] text-[#0B0D12] font-black uppercase text-[10px] px-2 py-0.5 rounded border border-[#0B0D12] tracking-wider">
            ★ LOTE 01
          </span>
          <span className="text-neutral-200 font-bold">
            Condição Especial para Donos de Clínicas: <strong className="text-[#D6BE96]">12x de R$ 29,82</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-300">
            <span className="text-neutral-400 font-bold">Termina em:</span>
            <span className="bg-[#1C1F26] text-[#D6BE96] px-1.5 py-0.5 rounded font-black border border-white/20">
              {formatNum(timeLeft.hours)}h
            </span>
            <span>:</span>
            <span className="bg-[#1C1F26] text-[#D6BE96] px-1.5 py-0.5 rounded font-black border border-white/20">
              {formatNum(timeLeft.minutes)}m
            </span>
            <span>:</span>
            <span className="bg-[#1C1F26] text-[#D6BE96] px-1.5 py-0.5 rounded font-black border border-white/20">
              {formatNum(timeLeft.seconds)}s
            </span>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 px-3 py-1 text-xs font-black text-[#0B0D12] bg-[#D6BE96] hover:bg-[#EADBCA] rounded-lg transition-colors whitespace-nowrap border border-[#0B0D12]"
          >
            Garantir Desconto →
          </a>
        </div>
      </div>
    </div>
  );
};

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
    <div className="bg-[#8495A6] text-white py-2 px-4 border-b-2 border-[#0B0D12] sticky top-0 z-50 text-xs md:text-sm select-none shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="bg-[#D6BE96] text-[#0B0D12] font-black uppercase text-[10px] px-2 py-0.5 rounded border border-[#0B0D12] tracking-wider">
            ★ MÉTODO 3²
          </span>
          <span className="text-white font-bold">
            Simetria Perfeita: <strong className="text-[#0B0D12] bg-[#D6BE96] px-1.5 py-0.2 rounded border border-[#0B0D12]">12x de R$ 41,01</strong> ou R$ 397 à vista
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-white">
            <span className="font-bold opacity-90">Termina em:</span>
            <span className="bg-[#485766] text-[#D6BE96] px-1.5 py-0.5 rounded font-black border border-[#0B0D12]">
              {formatNum(timeLeft.hours)}h
            </span>
            <span>:</span>
            <span className="bg-[#485766] text-[#D6BE96] px-1.5 py-0.5 rounded font-black border border-[#0B0D12]">
              {formatNum(timeLeft.minutes)}m
            </span>
            <span>:</span>
            <span className="bg-[#485766] text-[#D6BE96] px-1.5 py-0.5 rounded font-black border border-[#0B0D12]">
              {formatNum(timeLeft.seconds)}s
            </span>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 px-3 py-1 text-xs font-black text-[#0B0D12] bg-[#D6BE96] hover:bg-[#EADBCA] rounded-lg transition-colors whitespace-nowrap border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12] active:translate-x-0.5 active:translate-y-0.5"
          >
            Quero Minha Vaga →
          </a>
        </div>
      </div>
    </div>
  );
};

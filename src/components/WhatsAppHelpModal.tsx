import React, { useState } from 'react';
import { X, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

interface WhatsAppHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppHelpModal: React.FC<WhatsAppHelpModalProps> = ({ isOpen, onClose }) => {
  const [clinicName, setClinicName] = useState('');
  const [specialty, setSpecialty] = useState('Estética Avançada');
  const [question, setQuestion] = useState('');

  if (!isOpen) return null;

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Estou na página da Fontenelle Academy e gostaria de tirar uma dúvida sobre o curso para clínicas.\n\n*Clínica:* ${clinicName || 'Não informado'}\n*Especialidade:* ${specialty}\n*Dúvida:* ${question || 'Gostaria de saber mais sobre as vagas e acesso.'}`
    );
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="nb bg-white text-[#0B0D12] w-full max-w-lg rounded-3xl p-6 sm:p-8 border-4 border-[#0B0D12] shadow-[10px_10px_0_#0B0D12] relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F7F5F0] border-2 border-[#0B0D12] text-[#0B0D12] flex items-center justify-center hover:bg-[#D6BE96] transition-all cursor-pointer font-bold"
          title="Fechar"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Modal Header */}
        <span className="adesivo text-[10px] mb-2 inline-block">
          ★ Plantão de Dúvidas · Fontenelle Academy
        </span>

        <h3 className="text-2xl font-black font-display text-[#0B0D12]">
          Fale com a Equipe da Academia
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-[#3B3F4A] font-medium">
          Tire dúvidas antes de garantir sua vaga promocional:
        </p>

        {/* Form */}
        <form onSubmit={handleSendToWhatsApp} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-black text-[#0B0D12] mb-1">
              Nome da sua Clínica ou Consultório:
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Clínica Bella Dermatologia"
              value={clinicName}
              onChange={(e) => setClinicName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F7F5F0] border-2 border-[#0B0D12] text-sm text-[#0B0D12] placeholder-neutral-400 focus:outline-none focus:bg-white transition-all font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-[#0B0D12] mb-1">
              Segmento da sua Clínica:
            </label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F7F5F0] border-2 border-[#0B0D12] text-sm text-[#0B0D12] focus:outline-none focus:bg-white transition-all font-medium cursor-pointer"
            >
              <option value="Estética Avançada">Estética Avançada & Harmonização</option>
              <option value="Dermatologia">Dermatologia & Cirurgia Plástica</option>
              <option value="Odontologia">Odontologia & Ortodontia</option>
              <option value="Nutrição / Medicina Integrativa">Nutrição / Medicina Integrativa</option>
              <option value="Fisioterapia / Pilates">Fisioterapia / Saúde</option>
              <option value="Outro Segmento">Outro Segmento de Saúde</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-black text-[#0B0D12] mb-1">
              Sua principal dúvida ou objetivo:
            </label>
            <textarea
              rows={3}
              placeholder="Ex: Minha secretária pode assistir junto? Como funciona o acesso aos scripts de WhatsApp?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F7F5F0] border-2 border-[#0B0D12] text-sm text-[#0B0D12] placeholder-neutral-400 focus:outline-none focus:bg-white transition-all font-medium"
            />
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              type="submit"
              className="btn-nb text-xs sm:text-sm font-black w-full flex items-center justify-center gap-2 py-3.5"
            >
              <span>Conversar com Consultor no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-[#0B0D12] hover:bg-[#F7F5F0] transition-colors border border-transparent hover:border-[#0B0D12]"
            >
              Prefiro ir direto para o Checkout Oficial da Cakto →
            </a>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t-2 border-[#0B0D12]/10 flex items-center justify-center gap-2 text-[11px] text-[#5E626D] font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0B0D12]" />
          <span>Atendimento oficial pela equipe da Fontenelle Academy</span>
        </div>

      </div>
    </div>
  );
};

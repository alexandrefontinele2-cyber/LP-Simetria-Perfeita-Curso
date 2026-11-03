import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const TerminalPromptBox: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<'botox' | 'falta' | 'retorno'>('botox');
  const [copied, setCopied] = useState(false);

  const prompts = {
    botox: {
      title: 'Script: "Quanto custa o Botox?"',
      command: 'simetria-script --modulo="04" --triagem="primeiro-contato"',
      output: `[SIMETRIA PERFEITA · PLAYBOOK DE ATENDIMENTO]
→ Etapa 1: Acolhimento e conexão imediata
  "Olá, [Nome]! Seja muito bem-vinda à nossa clínica. Aqui é a Juliana,
   consultora de atendimento da [Nome da Clínica]."

→ Etapa 2: A pergunta de triagem médica
  "Para te passar uma estimativa assertiva e segura, me conta: você já realizou
   esse procedimento antes ou é a sua primeira avaliação para prevenção
   e rejuvenescimento natural?"

→ Etapa 3: Áudio de 20s de condução para a consulta avaliativa
  [Apresenta a consulta com a Dra. sem entregar preço seco no WhatsApp]
[RESULTADO: Lead engajado e consulta avaliativa agendada]`
    },
    falta: {
      title: 'Protocolo Anti-No-Show',
      command: 'simetria-script --modulo="04" --agenda="reducao-faltas"',
      output: `[SIMETRIA PERFEITA · PROTOCOLO ANTI-FALTA]
→ Mensagem humanizada da secretária (Áudio de 18s):
  "Oi [Nome]! Tudo bem? Aqui é a Amanda da recepção. A Doutora acabou de
   revisar sua ficha clínica e já deixou o kit individual reservado para
   o nosso horário de amanhã às 14h30!
   Já posso pedir para prepararem seu café de boas-vindas?"

[RESULTADO: Faltas na recepção caem de 40% para menos de 8%]`
    },
    retorno: {
      title: 'Protocolo Pós-Procedimento D+1',
      command: 'simetria-script --modulo="06" --jornada="cuidado-d1"',
      output: `[SIMETRIA PERFEITA · JORNADA 5 ESTRELAS]
→ Contato de Cuidado e Acompanhamento:
  "Bom dia, [Nome]! Aqui é a equipe da Dra. [Nome]. Passando para saber
   como você amanheceu hoje e como está a região do procedimento.
   Lembrou de seguir as orientações das primeiras 4 horas?
   Qualquer dúvida estamos com linha aberta para você!"

[RESULTADO: 90% índice NPS de satisfação e fidelização]`
    }
  };

  const current = prompts[selectedPrompt];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#8495A6] border-b-4 border-[#0B0D12] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="adesivo mb-3 inline-block">
            ★ Console de Scripts da Secretária
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-tight">
            Scripts Validados de WhatsApp. <span className="block mt-1"><span className="mk text-[#0B0D12]">Prontos para Sua Recepção Aplicar.</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-100 font-medium">
            Além das 22h de aulas, você terá acesso a scripts que elevam o padrão do seu atendimento no mesmo dia:
          </p>
        </div>

        {/* Buttons / Scenarios tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setSelectedPrompt('botox')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
              selectedPrompt === 'botox'
                ? 'bg-[#D6BE96] text-[#0B0D12] border-[#0B0D12] shadow-[3px_3px_0_#0B0D12]'
                : 'bg-white text-[#0B0D12] border-[#0B0D12] hover:bg-[#F7F5F0]'
            }`}
          >
            "Quanto Custa o Botox?"
          </button>

          <button
            onClick={() => setSelectedPrompt('falta')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
              selectedPrompt === 'falta'
                ? 'bg-[#D6BE96] text-[#0B0D12] border-[#0B0D12] shadow-[3px_3px_0_#0B0D12]'
                : 'bg-white text-[#0B0D12] border-[#0B0D12] hover:bg-[#F7F5F0]'
            }`}
          >
            Protocolo Anti-No-Show
          </button>

          <button
            onClick={() => setSelectedPrompt('retorno')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
              selectedPrompt === 'retorno'
                ? 'bg-[#D6BE96] text-[#0B0D12] border-[#0B0D12] shadow-[3px_3px_0_#0B0D12]'
                : 'bg-white text-[#0B0D12] border-[#0B0D12] hover:bg-[#F7F5F0]'
            }`}
          >
            Cuidado D+1 e D+7
          </button>
        </div>

        {/* Terminal Window Box with Azul Acinzentado styling */}
        <div className="nb bg-[#485766] border-4 border-[#0B0D12] rounded-2xl shadow-[8px_8px_0_#0B0D12] overflow-hidden">
          
          {/* Terminal Title Bar */}
          <div className="bg-[#36424D] px-4 py-3 flex items-center justify-between border-b-2 border-[#0B0D12] text-xs font-mono text-neutral-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block border border-black/40" />
              <span className="w-3 h-3 rounded-full bg-amber-300 inline-block border border-black/40" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block border border-black/40" />
              <span className="ml-2 text-[#D6BE96] font-bold">
                simetria-perfeita v3.2 · {current.title}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/20 hover:bg-white/30 text-white font-mono text-[11px] transition-colors cursor-pointer border border-white/30 font-bold"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5 text-[#D6BE96]" />}
              <span>{copied ? 'Copiado!' : 'Copiar Script'}</span>
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-white select-text overflow-x-auto">
            <div className="flex items-center gap-2 text-[#D6BE96] mb-4 font-bold">
              <span>$</span>
              <span className="text-white">{current.command}</span>
            </div>

            <pre className="text-neutral-100 whitespace-pre-wrap font-mono">
              {current.output}
            </pre>
          </div>

          {/* Terminal Footer */}
          <div className="bg-[#36424D] px-6 py-3.5 border-t-2 border-[#0B0D12] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Playbook completo de mensagens incluso para toda a sua equipe
            </span>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-[#D6BE96] hover:underline"
            >
              QUERO ESCALAR MINHA CLÍNICA AGORA →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

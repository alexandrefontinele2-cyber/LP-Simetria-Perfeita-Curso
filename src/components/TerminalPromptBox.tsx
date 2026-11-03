import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const TerminalPromptBox: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<'preco' | 'marido' | 'falta'>('preco');
  const [copied, setCopied] = useState(false);

  const prompts = {
    preco: {
      title: 'Objeção: "Achei o valor muito caro"',
      command: 'fontenelle-script --objecao="preco-alto" --tom="acolhedor-autoridade"',
      output: `[SISTEMA FONTENELLE INICIALIZADO]
→ Etapa 1: Acolhimento emocional
  "Compreendo perfeitamente sua preocupação, [Nome]. Quando se trata de procedimentos faciais e corporais, cada detalhe conta."

→ Etapa 2: Reenquadramento de Risco x Benefício
  "Aqui na clínica nós não economizamos em insumos e a aplicação é 100% feita por especialistas com pós-graduação e pós-operatório monitorado 24h."

→ Etapa 3: Chamada suave para a experiência presencial
  "Você prefere vir tomar um café conosco na terça às 15h ou quinta às 10h para a Dra. analisar sua pele sem compromisso de fechamento?"
[RESULTADO: 84% de conversão para agendamento]`
    },
    marido: {
      title: 'Objeção: "Vou falar com meu marido/esposa"',
      command: 'fontenelle-script --objecao="vou-conversar-conjuge" --estrategia="aliado"',
      output: `[SISTEMA FONTENELLE INICIALIZADO]
→ Etapa 1: Validação do parceiro
  "Excelente, [Nome]! Apoio familiar faz toda a diferença em qualquer tratamento de autocuidado."

→ Etapa 2: A entrega do resumo executivo
  "Para te ajudar a apresentar os detalhes para ele(a) sem dúvidas técnicas, eu preparei um resumo em PDF com o cronograma das sessões e as condições especiais de parcelamento."

→ Etapa 3: O convite duplo
  "Inclusive, muitos maridos acompanham a primeira consulta para tirar dúvidas sobre a recuperação. Posso já reservar a cadeira dele junto com a sua na quinta?"
[RESULTADO: Desarma o 'sumiço' e traz o decisor para a clínica]`
    },
    falta: {
      title: 'Anti-Falta: "Protocolo 0 No-Show"',
      command: 'fontenelle-script --agenda="confirmacao-blindada" --canal="whatsapp"',
      output: `[SISTEMA FONTENELLE INICIALIZADO]
→ Áudio humanizado da secretária (18 segundos):
  "Oi [Nome]! Tudo bem? Aqui é a Amanda da Clínica Dra. Fontenelle.
   A Doutora acabou de separar seu kit individual e já organizou a sala
   para o nosso horário de amanhã às 14h30!
   Já posso pedir para a copeira deixar seu cappuccino preparado?"

[RESULTADO: Paciente responde em menos de 10 minutos confirmando presença]`
    }
  };

  const current = prompts[selectedPrompt];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 secao-tinta border-b-4 border-[#0B0D12] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="adesivo adesivo-tinta mb-3 inline-block">
            Console de Automação de Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            Um comando em português. <span className="block mt-1"><span className="mk text-[#0B0D12]">O script perfeito na hora.</span></span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-medium">
            Testado em milhares de conversas reais. Veja a mecânica das respostas inteligentes que sua equipe vai aprender:
          </p>
        </div>

        {/* Buttons / Scenarios tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setSelectedPrompt('preco')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
              selectedPrompt === 'preco'
                ? 'bg-[#D6BE96] text-[#0B0D12] border-[#D6BE96] shadow-[3px_3px_0_#FFFFFF]'
                : 'bg-[#1E2833] text-neutral-300 border-white/20 hover:border-white'
            }`}
          >
            Objeção de Preço
          </button>

          <button
            onClick={() => setSelectedPrompt('marido')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
              selectedPrompt === 'marido'
                ? 'bg-[#D6BE96] text-[#0B0D12] border-[#D6BE96] shadow-[3px_3px_0_#FFFFFF]'
                : 'bg-[#1E2833] text-neutral-300 border-white/20 hover:border-white'
            }`}
          >
            "Falar com Cônjuge"
          </button>

          <button
            onClick={() => setSelectedPrompt('falta')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
              selectedPrompt === 'falta'
                ? 'bg-[#D6BE96] text-[#0B0D12] border-[#D6BE96] shadow-[3px_3px_0_#FFFFFF]'
                : 'bg-[#1E2833] text-neutral-300 border-white/20 hover:border-white'
            }`}
          >
            Confirmação Anti-Falta
          </button>
        </div>

        {/* Terminal Window Box */}
        <div className="nb bg-[#12151C] border-4 border-[#0B0D12] rounded-2xl shadow-[8px_8px_0_#D6BE96] overflow-hidden">
          
          {/* Terminal Title Bar */}
          <div className="bg-[#1C1F26] px-4 py-3 flex items-center justify-between border-b-2 border-white/10 text-xs font-mono text-neutral-300">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-[#D6BE96] font-bold">
                fontenelle-engine v2.4 · {current.title}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#D6BE96]" />}
              <span>{copied ? 'Copiado!' : 'Copiar Script'}</span>
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-neutral-200 select-text overflow-x-auto">
            <div className="flex items-center gap-2 text-[#8495A6] mb-4 font-bold">
              <span className="text-[#D6BE96]">$</span>
              <span>{current.command}</span>
            </div>

            <pre className="text-neutral-300 whitespace-pre-wrap font-mono">
              {current.output}
            </pre>
          </div>

          {/* Terminal Footer */}
          <div className="bg-[#181B22] px-6 py-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Scripts integrados no treinamento em PDF e áudio para a sua secretária
            </span>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#D6BE96] hover:underline"
            >
              Ver todos os 40 scripts na área de membros →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

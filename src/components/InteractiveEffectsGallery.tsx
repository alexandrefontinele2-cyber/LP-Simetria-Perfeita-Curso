import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause, Copy, Check, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

interface CommercialEffect {
  id: number;
  tag: string;
  category: string;
  title: string;
  headlineMark: string;
  description: string;
  impactMetric: string;
  chatDialog: {
    sender: 'patient' | 'clinic';
    text: string;
    time: string;
    isAudio?: boolean;
    audioDuration?: string;
  }[];
  copyableScript: string;
}

export const InteractiveEffectsGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const effects: CommercialEffect[] = [
    {
      id: 1,
      tag: 'Efeito 01',
      category: 'Módulo 04 · WhatsApp',
      title: 'Como Responder: "Quanto custa o Botox?"',
      headlineMark: 'Do Preço Seco ao Agendamento Confirmado',
      description: 'Como transformar a resposta da recepção quando o lead pergunta apenas preço. Em vez de passar o valor seco e perder o contato, a secretária acolhe e faz a triagem com elegância.',
      impactMetric: 'Até 1.8x mais conversão',
      chatDialog: [
        {
          sender: 'patient',
          text: 'Olá, boa tarde! Gostaria de saber quanto custa o botox / aplicação de toxina botulínica de vocês?',
          time: '14:22'
        },
        {
          sender: 'clinic',
          text: 'Olá! Seja muito bem-vinda à nossa clínica. Aqui é a Juliana, consultora de atendimento. É uma alegria falar com você! ✨',
          time: '14:23'
        },
        {
          sender: 'clinic',
          text: 'Para te passar uma estimativa segura, me conta: você já realizou esse procedimento antes ou é a sua primeira avaliação para prevenção e rejuvenescimento natural?',
          time: '14:23'
        },
        {
          sender: 'patient',
          text: 'É a primeira vez! Tenho muito medo de ficar com aspecto artificial ou travado.',
          time: '14:25'
        },
        {
          sender: 'clinic',
          isAudio: true,
          audioDuration: '0:22',
          text: 'Áudio acolhedor explicando a filosofia de harmonia natural da clínica e abrindo 2 opções de horário para a consulta avaliativa.',
          time: '14:26'
        }
      ],
      copyableScript: 'Olá, [Nome]! Seja muito bem-vinda à [Nome da Clínica]. Aqui é a [Nome da Secretária]. Para te passar a estimativa mais assertiva e segura, me conta: você já realizou esse procedimento antes ou é a sua primeira avaliação para rejuvenescimento natural?'
    },
    {
      id: 2,
      tag: 'Efeito 02',
      category: 'Módulo 04 · Anti-No-Show',
      title: 'Protocolo Anti-No-Show',
      headlineMark: 'Reduzindo Faltas de 40% para Menos de 8%',
      description: 'Mensagens automatizadas e impessoais fazem os pacientes desmarcarem de última hora. O protocolo humanizado do Método 3² cria compromisso afetivo e zera as salas vazias.',
      impactMetric: 'Faltas caem para menos de 8%',
      chatDialog: [
        {
          sender: 'clinic',
          isAudio: true,
          audioDuration: '0:18',
          text: 'Áudio da Secretária: "Oi Mariana! Aqui é a Juliana. A Doutora já revisou sua ficha e reservou sua sala amanhã às 15h. Já posso deixar seu cappuccino de boas-vindas organizado?"',
          time: '10:15'
        },
        {
          sender: 'patient',
          text: 'Oi Juliana! Que delicadeza de atendimento! Estarei aí pontualmente às 14h50 com certeza!',
          time: '10:18'
        }
      ],
      copyableScript: 'Oi [Nome]! Aqui é a [Secretária] da Clínica [Nome]. A Doutora já revisou sua ficha e reservou a sala para amanhã às [Horário]. Posso confirmar seu café de boas-vindas?'
    },
    {
      id: 3,
      tag: 'Efeito 03',
      category: 'Módulo 03 · Comercial',
      title: 'Como Dobrar o Ticket Médio na Avaliação',
      headlineMark: 'Migração de Procedimento Avulso para Plano Anual',
      description: 'Apresente o tratamento em formato de programa de cuidado continuado. O paciente compreende que o resultado sustentável depende de um plano estruturado.',
      impactMetric: 'Até 2.5x elevação do ticket médio',
      chatDialog: [
        {
          sender: 'clinic',
          text: 'Apresentação Clínica: "Mariana, se fizermos apenas uma aplicação isolada, a durabilidade será limitada. Estruturamos para você o Programa Simetria Anual com todas as etapas e manutenções inclusas."',
          time: '16:10'
        },
        {
          sender: 'patient',
          text: 'Ficou muito claro! Assim eu sei exatamente como vai ser o meu ano e tenho garantia de acompanhamento.',
          time: '16:13'
        }
      ],
      copyableScript: 'Apresentação de Plano: "Dona [Nome], nosso Programa [Nome] foi planejado para entregar constância e naturalidade o ano todo. Ele inclui os procedimentos principais, o pós-cuidado monitorado e revisões a cada 60 dias."'
    },
    {
      id: 4,
      tag: 'Efeito 04',
      category: 'Módulo 06 · Recepção',
      title: 'Experiência Sensorial na Recepção',
      headlineMark: 'Assinatura Olfativa & Hotelaria 5 Estrelas',
      description: 'Como alinhar o olfato, som ambiente calibrado, temperatura e acolhimento para transmitir posicionamento de alto padrão desde os primeiros 30 segundos.',
      impactMetric: 'Posicionamento de Alto Padrão',
      chatDialog: [
        {
          sender: 'clinic',
          text: 'Checklist Sensorial da Clínica: Aroma exclusivo borrifado nos tecidos, playlist em decibéis calibrados, água aromatizada e apresentação visual padronizada da equipe.',
          time: '08:00'
        },
        {
          sender: 'patient',
          text: '"Doutora, entrar na sua clínica traz uma paz indescritível! Dá vontade de passar o dia todo aqui."',
          time: '09:40'
        }
      ],
      copyableScript: 'Checklist de Recepção Sensorial: 1. Aromatização com notas de baunilha/chá branco às 07h45 e 13h45. 2. Volume ambiente entre 40-45dB em estilo lounge suave. 3. Saudação nominal imediata ao abrir da porta.'
    },
    {
      id: 5,
      tag: 'Efeito 05',
      category: 'Pilar 3 · Pós-Venda',
      title: 'Protocolo de Pós-Procedimento D+1 & D+7',
      headlineMark: 'Acompanhamento Carinhoso que Previne Queixas',
      description: 'O contato ativo nos dias D+1 e D+7 após o procedimento transmite extrema segurança, zera a ansiedade pós-procedimento e consolida a fidelização.',
      impactMetric: '90% índice NPS de satisfação',
      chatDialog: [
        {
          sender: 'clinic',
          text: 'Mensagem D+1: "Bom dia, Mariana! Aqui é a Dra. Camila e a Juliana. Como você acordou hoje? Como está a sensibilidade na região? Qualquer dúvida estamos com linha aberta para você."',
          time: '09:15'
        },
        {
          sender: 'patient',
          text: 'Bom dia! Está super tranquilo, quase nada inchado! Muito obrigada pela preocupação, nunca tive um médico que me mandasse mensagem assim no dia seguinte!',
          time: '09:22'
        }
      ],
      copyableScript: 'Mensagem D+1: "Bom dia, [Nome]! Aqui é a equipe da Dra. [Nome]. Passando para saber como você amanheceu e como está a região do procedimento. Lembrou de seguir os cuidados de não deitar nas primeiras horas? Conte conosco!"'
    },
    {
      id: 6,
      tag: 'Efeito 06',
      category: 'Pilar 3 · Indicação',
      title: 'Motor de Indicação Espontânea',
      headlineMark: 'Média de 3 a 4 Novas Indicações por Paciente',
      description: 'Como incentivar elegantemente suas pacientes mais satisfeitas a recomendarem a clínica para amigas e familiares do mesmo perfil socioeconômico.',
      impactMetric: '84% taxa de recompra e manutenção',
      chatDialog: [
        {
          sender: 'clinic',
          text: 'Mensagem de Reconhecimento: "Mariana, seu resultado final na revisão ficou deslumbrante! Como forma de carinho, separamos um Gift Card de Consulta Avaliativa Cortesia para você presentear uma pessoa especial da sua família."',
          time: '15:30'
        },
        {
          sender: 'patient',
          text: 'Ai que maravilhoso! Minha irmã estava louca querendo fazer! Já vou mandar o contato dela para vocês agendarem!',
          time: '15:38'
        }
      ],
      copyableScript: 'Script de Indicação Elegante: "[Nome], ficamos encantados com o seu resultado na revisão! Liberamos para você um Gift Card de Boas-Vindas exclusivo para você presentear uma amiga ou familiar querida que também preza por cuidados de excelência."'
    }
  ];

  const current = effects[currentIndex];

  const nextEffect = () => {
    setCurrentIndex((prev) => (prev + 1) % effects.length);
    setIsPlayingAudio(false);
    setHasCopied(false);
  };

  const prevEffect = () => {
    setCurrentIndex((prev) => (prev - 1 + effects.length) % effects.length);
    setIsPlayingAudio(false);
    setHasCopied(false);
  };

  const copyScript = () => {
    navigator.clipboard.writeText(current.copyableScript);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2500);
  };

  return (
    <section id="efeitos" className="py-16 sm:py-24 bg-[#F7F5F0] relative overflow-hidden border-b-4 border-[#0B0D12]">
      
      {/* Huge Outlined Background Lettering */}
      <div className="absolute top-10 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-10">
        <div className="text-[120px] sm:text-[180px] font-black tracking-tighter whitespace-nowrap text-transparent font-display text-stroke text-neutral-800">
          SIMETRIA PERFEITA · MÉTODO 3² · FONTENELLE ·
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="adesivo mb-3 inline-block">
            ★ Os Efeitos Práticos do Método 3²
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] tracking-tight leading-tight">
            Veja as estratégias em ação. <span className="block mt-1"><span className="mk">{current.headlineMark}</span></span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#3B3F4A] leading-relaxed max-w-xl mx-auto font-medium">
            Você terá acesso exclusivo aos roteiros e processos que organizam a operação da sua clínica e elevam o nível do seu atendimento no WhatsApp e na recepção.
          </p>
        </div>

        {/* Effect Selector Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {effects.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsPlayingAudio(false);
                setHasCopied(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-[3px] border-[#0B0D12] cursor-pointer ${
                idx === currentIndex
                  ? 'bg-[#8495A6] text-white shadow-[4px_4px_0_#0B0D12]'
                  : 'bg-white text-[#0B0D12] hover:bg-[#D6BE96]/30 shadow-[3px_3px_0_#0B0D12]'
              }`}
            >
              <span className="font-mono mr-1.5 opacity-80">{item.tag}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* The Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Phone / Chat Simulator (7 cols) */}
          <div className="lg:col-span-7 nb p-5 sm:p-6 bg-white relative flex flex-col justify-between border-4 border-[#0B0D12]">
            
            {/* Simulator Header */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#0B0D12] mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8495A6] text-white flex items-center justify-center font-bold text-sm border-2 border-[#0B0D12]">
                    SP
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#0B0D12] leading-tight">
                      Simetria Perfeita · Protocolo Ativo
                    </h4>
                    <span className="text-[11px] text-[#8495A6] font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#8495A6] inline-block" />
                      Método 3² • Recepção de Alta Performance
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#F7F5F0] border-2 border-[#0B0D12]">
                  {current.tag} / 06
                </span>
              </div>

              {/* Chat Messages Simulator */}
              <div className="space-y-3.5 bg-[#F7F5F0] p-4 rounded-xl border-2 border-[#0B0D12]/30 max-h-[380px] overflow-y-auto">
                {current.chatDialog.map((msg, mIdx) => (
                  <div
                    key={mIdx}
                    className={`flex flex-col ${
                      msg.sender === 'clinic' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-medium leading-relaxed border-2 border-[#0B0D12] ${
                        msg.sender === 'clinic'
                          ? 'bg-[#D6BE96] text-[#0B0D12] shadow-[3px_3px_0_#0B0D12]'
                          : 'bg-white text-[#0B0D12] shadow-[3px_3px_0_#0B0D12]'
                      }`}
                    >
                      {msg.isAudio ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                              className="w-8 h-8 rounded-full bg-[#8495A6] text-white flex items-center justify-center shrink-0 border-2 border-[#0B0D12] active:scale-90 transition-transform cursor-pointer"
                              aria-label="Tocar áudio demonstrativo"
                            >
                              {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                            </button>

                            <div className="flex items-center gap-1">
                              {[12, 24, 16, 28, 8, 20, 26, 14, 22, 10, 18, 25].map((h, i) => (
                                <span
                                  key={i}
                                  className={`w-1 rounded-full transition-all duration-200 ${
                                    isPlayingAudio ? 'bg-[#0B0D12] animate-pulse' : 'bg-[#0B0D12]/40'
                                  }`}
                                  style={{ height: isPlayingAudio ? `${(h % 18) + 8}px` : '10px' }}
                                />
                              ))}
                            </div>

                            <span className="text-[11px] font-mono font-bold text-[#0B0D12]">
                              {msg.audioDuration}
                            </span>
                          </div>
                          <p className="text-[11px] italic text-[#0B0D12]/80 border-t border-[#0B0D12]/20 pt-1.5 font-medium">
                            {msg.text}
                          </p>
                        </div>
                      ) : (
                        <p>{msg.text}</p>
                      )}

                      <span className="text-[9px] font-mono opacity-60 block text-right mt-1 font-bold">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Script Copy Action Footer */}
            <div className="mt-4 pt-3 border-t-2 border-[#0B0D12] flex items-center justify-between gap-3">
              <button
                onClick={copyScript}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-[#0B0D12] bg-[#F7F5F0] hover:bg-[#D6BE96] border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              >
                {hasCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{hasCopied ? 'Script Copiado!' : 'Copiar Script Deste Efeito'}</span>
              </button>

              <span className="text-[11px] font-bold text-[#0B0D12] bg-[#D6BE96] px-2.5 py-1 rounded-md border border-[#0B0D12]">
                {current.impactMetric}
              </span>
            </div>

          </div>

          {/* Right Column: Effect Explanation & Controls (5 cols with Azul Acinzentado background) */}
          <div className="lg:col-span-5 nb bg-[#8495A6] text-white p-6 sm:p-8 flex flex-col justify-between border-4 border-[#0B0D12] shadow-[6px_6px_0_#0B0D12]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="adesivo text-[10px]">
                  {current.category}
                </span>

                {/* Round Nav Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevEffect}
                    className="w-9 h-9 rounded-full bg-white text-[#0B0D12] flex items-center justify-center border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                    title="Efeito Anterior"
                    aria-label="Ver efeito anterior"
                  >
                    <ArrowLeft className="w-4 h-4 stroke-[3]" />
                  </button>
                  <button
                    onClick={nextEffect}
                    className="w-9 h-9 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center border-2 border-[#0B0D12] shadow-[2px_2px_0_#0B0D12] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                    title="Próximo Efeito"
                    aria-label="Ver próximo efeito"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-black font-display text-white mb-3">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-100 leading-relaxed mb-6 font-medium">
                {current.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 text-xs text-white font-medium">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#D6BE96] shrink-0 mt-0.5" />
                  <span>Sua secretária aprende scripts estruturados para o dia a dia.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D6BE96] shrink-0 mt-0.5" />
                  <span>Elimina as faltas na agenda com o protocolo de áudio e cuidado.</span>
                </div>
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-[#D6BE96] shrink-0 mt-0.5" />
                  <span>Processo validado para estética, dermatologia e clínicas médicas.</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA to secure all scripts */}
            <div className="mt-8 pt-6 border-t-2 border-[#0B0D12]/20">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-nb text-xs sm:text-sm font-black flex items-center justify-center gap-2"
              >
                <span>QUERO ESCALAR MINHA CLÍNICA AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[10px] text-white/80 block text-center mt-2 font-mono font-medium">
                Acesso imediato após confirmação na Cakto
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

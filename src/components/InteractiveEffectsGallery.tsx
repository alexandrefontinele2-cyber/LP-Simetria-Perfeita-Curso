import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause, Copy, Check, Sparkles, MessageSquare, Volume2, ShieldCheck } from 'lucide-react';
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
      category: 'Recepção no WhatsApp',
      title: 'O Script Anti-Sumiço',
      headlineMark: 'Do "Quanto custa?" à Consulta Agendada',
      description: 'Quando o lead chega perguntando preço seco, 82% das clínicas respondem o valor e o paciente nunca mais responde. Esse script usa o gatilho da triagem médica para prender a atenção e conduzir ao agendamento.',
      impactMetric: 'Reduz o sumiço em até 78%',
      chatDialog: [
        {
          sender: 'patient',
          text: 'Olá, boa tarde! Quanto custa a harmonização / protocolo facial de vocês?',
          time: '14:22'
        },
        {
          sender: 'clinic',
          text: 'Olá, querida! Aqui é a Juliana, consultora da Clínica Dra. Fontenelle. Que alegria receber seu contato! 🥰',
          time: '14:23'
        },
        {
          sender: 'clinic',
          text: 'Antes de te passar os valores exatos, me conta: você já realizou esse procedimento alguma vez ou é sua primeira avaliação com foco em rejuvenescimento natural?',
          time: '14:23'
        },
        {
          sender: 'patient',
          text: 'É a minha primeira vez! Tenho muito receio de ficar artificial, queria algo discreto.',
          time: '14:25'
        },
        {
          sender: 'clinic',
          isAudio: true,
          audioDuration: '0:22',
          text: 'Áudio explicativo acolhendo a insegurança e abrindo 2 opções de horário na agenda VIP.',
          time: '14:26'
        }
      ],
      copyableScript: 'Olá, [Nome]! Aqui é a [Nome da Secretária] da Clínica [Nome]. Que alegria receber seu contato! 🥰 Para eu te passar o protocolo mais assertivo e seguro, me conta: você já realizou esse tratamento antes ou é sua primeira avaliação para esse objetivo?'
    },
    {
      id: 2,
      tag: 'Efeito 02',
      category: 'Consulta Avaliativa',
      title: 'A Ancoragem High-Ticket',
      headlineMark: 'Como Vender Planos de R$ 5k+ Sem Dar Desconto',
      description: 'Apresente o plano de tratamento completo em 3 camadas de valor. Ao comparar o investimento anual com soluções fragmentadas ou cirurgias caras, o paciente enxerga seu protocolo como uma grande oportunidade.',
      impactMetric: '3.4x aumento no ticket médio',
      chatDialog: [
        {
          sender: 'clinic',
          text: 'Dra. Camila: "Mariana, se fizermos apenas sessões avulsas, seu resultado vai oscilar e você gastará mais de R$ 9.200 ao longo do ano sem previsibilidade."',
          time: '16:10'
        },
        {
          sender: 'clinic',
          text: 'Dra. Camila: "Estruturei para você o nosso Protocolo Full Rejuvenescimento de 6 meses. Ele inclui todos os bioestimuladores, manutenções e o acompanhamento mensal por 12x de R$ 420."',
          time: '16:11'
        },
        {
          sender: 'patient',
          text: 'Nossa Doutora! Ficou muito mais vantajoso assim! Já podemos começar hoje mesmo?',
          time: '16:13'
        }
      ],
      copyableScript: 'Script de Fechamento de Protocolo: "Dona [Nome], nós temos duas opções: ou tratamos o sintoma pontual com sessões avulsas, ou resolvemos a causa raiz com o Protocolo Integrado onde garantimos o acompanhamento e você economiza 35% no pacote anual."'
    },
    {
      id: 3,
      tag: 'Efeito 03',
      category: 'Combate ao No-Show',
      title: 'Confirmação Blindada de Agenda',
      headlineMark: 'Zere os Furos na Agenda com Áudio Humanizado',
      description: 'Mensagens automatizadas e frias ("Digite 1 para confirmar") incentivam o paciente a desmarcar. O protocolo de áudio humanizado da secretária cria compromisso moral e zera o índice de falta.',
      impactMetric: 'Menos de 2% de falta na agenda',
      chatDialog: [
        {
          sender: 'clinic',
          isAudio: true,
          audioDuration: '0:18',
          text: 'Áudio da Secretária: "Oi Vanessa! Aqui é a Bia. O Dr. Rodrigo já separou seu prontuário e preparou a sala para amanhã às 14h. Já deixo seu cafezinho pronto?"',
          time: '10:15'
        },
        {
          sender: 'patient',
          text: 'Oi Bia! Que capricho! Estarei aí com certeza às 13h50. Muito obrigada pela atenção!',
          time: '10:18'
        }
      ],
      copyableScript: 'Oi [Nome]! Aqui é a [Secretária] da Clínica [Nome]. O Dr. [Nome] já separou seu prontuário e reservou a sala para nossa consulta de amanhã às [Horário]. Posso confirmar seu cafezinho de boas-vindas?'
    },
    {
      id: 4,
      tag: 'Efeito 04',
      category: 'Resgate de Leads',
      title: 'A Máquina de Reativação',
      headlineMark: '20 a 40 Pacientes Ativados em 24 Horas',
      description: 'Ative contatos antigos da clínica que não compram há 3, 6 ou 12 meses. Sem parecer vendedor chato ou desesperado por dinheiro, usando a checagem clínica de rotina.',
      impactMetric: '+R$ 32.000 resgatados em 1 dia',
      chatDialog: [
        {
          sender: 'clinic',
          text: 'Olá, Renata! Tudo bem? Aqui é a Amanda da recepção. Estava revisando os prontuários da Dra. e vi que faz exatamente 8 meses desde sua última aplicação de colágeno!',
          time: '09:30'
        },
        {
          sender: 'clinic',
          text: 'Como esse é o período exato onde a curva de renovação celular começa a cair, a Dra. pediu para entrar em contato com você para uma checagem preventiva cortesia nesta semana.',
          time: '09:31'
        },
        {
          sender: 'patient',
          text: 'Nossa, Amanda! Que bom que você me chamou, eu estava mesmo sentindo necessidade de retocar! Tem horário quinta-feira?',
          time: '09:42'
        }
      ],
      copyableScript: 'Olá, [Nome]! Aqui é a [Secretária] da Clínica [Nome]. Estava revisando os prontuários e vi que já faz [X meses] do seu procedimento. Como é o período ideal de manutenção preventiva, a Dra. pediu para checar seu resultado nesta semana. Você prefere manhã ou tarde?'
    },
    {
      id: 5,
      tag: 'Efeito 05',
      category: 'Comunicação da Recepção',
      title: 'O Áudio Hipnótico de 20s',
      headlineMark: 'A Conexão Humana que Robôs Não Conseguem Fazer',
      description: 'Como ensinar sua secretária a gravar áudios de 20 segundos com cadência, tom de voz executivo e acolhimento que desarmam qualquer objeção financeira.',
      impactMetric: 'Conversão 4x maior que mensagens de texto',
      chatDialog: [
        {
          sender: 'patient',
          text: 'Achei o valor um pouco acima do que eu esperava gastar...',
          time: '17:04'
        },
        {
          sender: 'clinic',
          isAudio: true,
          audioDuration: '0:24',
          text: 'Áudio desarmando a objeção: "Eu entendo perfeitamente, Luciana... O que nossos pacientes mais valorizam aqui não é só o produto, mas a garantia de zero risco de intercorrência..."',
          time: '17:05'
        },
        {
          sender: 'patient',
          text: 'Faz todo sentido. Segurança em primeiro lugar! Vou agendar sim.',
          time: '17:08'
        }
      ],
      copyableScript: 'Áudio Script: "Compreendo perfeitamente, [Nome]. Quando se trata do seu rosto e saúde, o mais importante é não correr risco de intercorrências. O Dr. [Nome] tem mais de 10 anos de experiência e nosso pós-atendimento é 24h. Vamos agendar para você conhecer pessoalmente a estrutura?"'
    },
    {
      id: 6,
      tag: 'Efeito 06',
      category: 'Estruturação Comercial',
      title: 'O Plano de Recorrência',
      headlineMark: 'Transforme Sessão de R$ 350 em Contrato de R$ 4.800',
      description: 'O método para desenhar planos mensais e semestrais que garantem previsibilidade no caixa da clínica mesmo nos meses tradicionalmente parados.',
      impactMetric: 'Receita previsível 12 meses por ano',
      chatDialog: [
        {
          sender: 'clinic',
          text: 'Proposta Comercial Apresentada: Plano Anual Skin Club VIP · R$ 397/mês com 1 procedimento principal + 1 manutenção mensal + produtos home care inclusos.',
          time: '11:00'
        },
        {
          sender: 'patient',
          text: 'Adorei esse formato em mensalidade! Fica muito mais leve no orçamento e eu não esqueço de me cuidar.',
          time: '11:15'
        }
      ],
      copyableScript: 'Apresentação de Assinatura: "Nosso Clube [Nome da Clínica] foi feito para quem quer manter a pele e a saúde impecáveis o ano todo sem desembolsos pesados de uma só vez. Por apenas [X]/mês você tem atendimento garantido todo mês."'
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
      
      {/* Huge Outlined Background Lettering (Like Ninja's gal-faixa) */}
      <div className="absolute top-10 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-10">
        <div className="text-[120px] sm:text-[180px] font-black tracking-tighter whitespace-nowrap text-transparent font-display text-stroke text-neutral-800">
          EFEITOS COMERCIAIS · FONTENELLE ACADEMY · SCRIPTS ·
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with Neo-brutalist Tag */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="adesivo">
              ★ Os 6 Efeitos Comerciais da Fábrica
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D12] tracking-tight leading-tight">
            Veja os efeitos em ação. <span className="block mt-1"><span className="mk">{current.headlineMark}</span></span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#3B3F4A] leading-relaxed max-w-xl mx-auto font-medium">
            Você não precisa inventar o que falar. <b>O método já entrega os scripts mastigados</b> para sua recepção copiar, colar e fechar vendas todos os dias.
          </p>
        </div>

        {/* Effect Selector Pills (Horizontal Scrollable Tabs) */}
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
                  ? 'bg-[#0B0D12] text-[#D6BE96] shadow-[4px_4px_0_#D6BE96]'
                  : 'bg-white text-[#0B0D12] hover:bg-[#D6BE96]/30 shadow-[3px_3px_0_#0B0D12]'
              }`}
            >
              <span className="font-mono mr-1.5 opacity-80">{item.tag}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* The Interactive Stage (2 Columns: Left Simulator, Right Explanation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Phone / Chat Simulator (7 cols) */}
          <div className="lg:col-span-7 nb p-5 sm:p-6 bg-white relative flex flex-col justify-between">
            
            {/* Simulator Header */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#0B0D12] mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B0D12] text-[#D6BE96] flex items-center justify-center font-bold text-sm border-2 border-[#0B0D12]">
                    FA
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B0D12] leading-tight">
                      Recepção · Script em Tempo Real
                    </h4>
                    <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      Protocolo Validado · Atendimento Ativo
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
                              className="w-8 h-8 rounded-full bg-[#0B0D12] text-[#D6BE96] flex items-center justify-center shrink-0 border-2 border-[#0B0D12] active:scale-90 transition-transform cursor-pointer"
                              aria-label="Tocar áudio demonstrativo"
                            >
                              {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                            </button>

                            {/* Sound wave animated visualizer */}
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
                          <p className="text-[11px] italic text-[#0B0D12]/80 border-t border-[#0B0D12]/20 pt-1.5">
                            {msg.text}
                          </p>
                        </div>
                      ) : (
                        <p>{msg.text}</p>
                      )}

                      <span className="text-[9px] font-mono opacity-60 block text-right mt-1">
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

              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-400">
                {current.impactMetric}
              </span>
            </div>

          </div>

          {/* Right Column: Effect Explanation & Controls (5 cols) */}
          <div className="lg:col-span-5 nb tinta p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="adesivo adesivo-tinta text-[10px]">
                  {current.category}
                </span>

                {/* Round Nav Buttons (like Ninja's .gal-btn) */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevEffect}
                    className="w-9 h-9 rounded-full bg-white text-[#0B0D12] flex items-center justify-center border-2 border-[#0B0D12] shadow-[2px_2px_0_#D6BE96] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                    title="Efeito Anterior"
                    aria-label="Ver efeito anterior"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextEffect}
                    className="w-9 h-9 rounded-full bg-[#D6BE96] text-[#0B0D12] flex items-center justify-center border-2 border-[#0B0D12] shadow-[2px_2px_0_#D6BE96] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                    title="Próximo Efeito"
                    aria-label="Ver próximo efeito"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-black font-display text-white mb-3">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-medium">
                {current.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 text-xs text-neutral-200">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#D6BE96] shrink-0 mt-0.5" />
                  <span>Sua secretária só precisa abrir e seguir o roteiro exato.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D6BE96] shrink-0 mt-0.5" />
                  <span>Elimina qualquer constrangimento de parecer "vendedora forçada".</span>
                </div>
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-[#D6BE96] shrink-0 mt-0.5" />
                  <span>Funciona para estética, dermatologia, odonto e consultas médicas.</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA to secure all scripts */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-nb text-xs sm:text-sm font-black flex items-center justify-center gap-2"
              >
                <span>Quero Todos os 6 Efeitos Prontos</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[10px] text-neutral-400 block text-center mt-2 font-mono">
                Acesso imediato no e-mail após a confirmação pela Cakto
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

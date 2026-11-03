export const CHECKOUT_URL = 'https://pay.cakto.com.br/3czvimn_919773';
export const OFFICIAL_WEBSITE_URL = 'https://fontenelleacademy.com.br/';

export interface ModuleItem {
  id: number;
  numberTag: string;
  title: string;
  subtitle: string;
  duration: string;
  deliverable: string;
  lessons: string[];
}

export interface PlanItem {
  id: string;
  name: string;
  tag: string;
  featured: boolean;
  originalPrice: string;
  installments: string;
  cashPrice: string;
  benefits: string[];
  ctaText: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const HERO_CHAPTERS = [
  {
    number: '01',
    title: 'O Grande Gargalo Oculto das Clínicas de Estética',
    subtitle: 'Por que profissionais excelentes continuam com caixa apertado e agenda desorganizada',
    badge: 'Módulo de Diagnóstico'
  },
  {
    number: '02',
    title: 'A Metodologia do Método 3²',
    subtitle: 'O alinhamento dos 3 pilares fundamentais: Estrutura, Performance e Experiência',
    badge: 'O Núcleo Estratégico'
  },
  {
    number: '03',
    title: 'Como Dobrar o Ticket Médio das Consultas de Avaliação',
    subtitle: 'A transição de procedimentos avulsos para planos de tratamento de alto valor',
    badge: 'Performance Comercial'
  },
  {
    number: '04',
    title: 'A Jornada do Paciente 5 Estrelas & Plano de Ação',
    subtitle: 'Experiência sensorial na recepção e protocolo estruturado de pós-procedimento',
    badge: 'Fidelização & LTV'
  }
];

export const THREE_PILLARS = [
  {
    number: '01',
    pillar: 'PILAR 1: ESTRUTURA & GESTÃO',
    subtitle: 'Organização, Processos & Rotina Harmoniosa',
    description: 'Construa os alicerces operacionais da sua clínica com fluxos, rotinas e indicadores claros, permitindo que o negócio funcione com previsibilidade sem o dono precisar apagar incêndios.',
    highlights: [
      'Definição de papéis, funções e rotina diária sem sobrecarga',
      'Painel de indicadores e controle para tomada de decisões',
      'Processos operacionais padronizados para toda a equipe'
    ],
    metric: 'Organização total da rotina'
  },
  {
    number: '02',
    pillar: 'PILAR 2: PERFORMANCE COMERCIAL',
    subtitle: 'Vendas Estratégicas & Recepção Ativa',
    description: 'Transforme o WhatsApp e a recepção em uma central ativa de fechamento de consultas e planos de tratamento completos, reduzindo o no-show e elevando a conversão.',
    highlights: [
      'Scripts validados de primeiro contato para responder "quanto custa?"',
      'Protocolo anti-no-show reduzindo faltas de 40% para menos de 8%',
      'Consulta avaliativa consultiva com fechamento de planos de alto valor'
    ],
    metric: 'Até 1.8x mais conversão'
  },
  {
    number: '03',
    pillar: 'PILAR 3: JORNADA DO CLIENTE & ENCANTAMENTO',
    subtitle: 'Fidelização & Indicação Espontânea',
    description: 'Crie uma experiência sensorial inesquecível desde o primeiro clique até o pós-procedimento, transformando pacientes em defensores fiéis da sua marca.',
    highlights: [
      'Experiência Sensorial na Recepção (Assinatura olfativa, som calibrado e hotelaria 5 estrelas)',
      'Protocolo de Pós-Procedimento & Cuidado D+1 e D+7 (Segurança e 90% NPS de satisfação)',
      'Motor de Indicação & Recorrência Natural (Média de 3 a 4 novas indicações por paciente)'
    ],
    metric: '84% de taxa de recompra e manutenção'
  }
];

export const COURSE_MODULES_8: ModuleItem[] = [
  {
    id: 1,
    numberTag: 'MÓDULO 01',
    title: 'O Método 3² & Diagnóstico da sua Clínica',
    subtitle: 'Identificação dos gargalos invisíveis que travam o crescimento da sua clínica',
    duration: '2h 15m',
    deliverable: 'Mapa de Diagnóstico da Clínica',
    lessons: [
      'Apresentação e fundamentos do Método 3²',
      'Diagnóstico operacional e mapeamento de gargalos',
      'A transição do dono operacional para o gestor estratégico',
      'Alinhamento entre Estrutura, Performance e Experiência'
    ]
  },
  {
    id: 2,
    numberTag: 'MÓDULO 02',
    title: 'Definindo suas Metas & Rotina Harmoniosa',
    subtitle: 'Como planejar o crescimento e organizar o dia a dia sem sobrecarga',
    duration: '2h 30m',
    deliverable: 'Cronograma de Rotina Harmoniosa',
    lessons: [
      'Metodologia de metas para clínicas de estética',
      'Organização da agenda do gestor e dos profissionais',
      'Eliminação do desperdício de tempo e tarefas desnecessárias',
      'A rotina diária, semanal e mensal de acompanhamento'
    ]
  },
  {
    id: 3,
    numberTag: 'MÓDULO 03',
    title: 'Indicadores e Controle da Operação',
    subtitle: 'Acompanhe a saúde do seu negócio com dados simples e objetivos',
    duration: '2h 45m',
    deliverable: 'Painel de Indicadores Clínicos',
    lessons: [
      'Os principais indicadores que todo dono de clínica deve monitorar',
      'Controle de comparecimento, faltas e reagendamentos',
      'Acompanhamento de conversão por canal de captação',
      'Como tomar decisões estratégicas baseadas em fatos'
    ]
  },
  {
    id: 4,
    numberTag: 'MÓDULO 04',
    title: 'A Secretária de Alta Performance no WhatsApp',
    subtitle: 'Transformando sua recepção em uma central ativa de fechamento',
    duration: '3h 15m',
    deliverable: 'Playbook Completo de Mensagens WhatsApp • Tabela de Metas & Comissões',
    lessons: [
      'Scripts de primeiro contato: como responder o "quanto custa o botox?"',
      'Protocolo anti-no-show: reduzindo faltas de 40% para menos de 8%',
      'Treinamento prático de atendimento ágil, humanizado e refinado',
      'Acesso exclusivo ao script com mensagens que elevam o padrão de atendimento'
    ]
  },
  {
    id: 5,
    numberTag: 'MÓDULO 05',
    title: 'Fluxos, Processos & Funções da Equipe',
    subtitle: 'Treinamento, capacitação e alinhamento do time de atendimento',
    duration: '2h 40m',
    deliverable: 'Manual de Funções e Processos da Equipe',
    lessons: [
      'Mapeamento dos fluxos de trabalho da recepção à cabine de atendimento',
      'Definição clara das responsabilidades de cada função',
      'Roteiro de treinamento contínuo para colaboradoras',
      'Cultura de comprometimento e foco no paciente'
    ]
  },
  {
    id: 6,
    numberTag: 'MÓDULO 06',
    title: 'Jornada de Encantamento & Retenção 5 Estrelas',
    subtitle: 'A experiência sensorial que gera fidelização e indicações espontâneas',
    duration: '3h 00m',
    deliverable: 'Checklist de Design Sensorial e Pós-Procedimento',
    lessons: [
      'Design sensorial da clínica: olfato, som ambiente, recepção e conforto',
      'Ritual de acolhimento e café de boas-vindas refinado',
      'Protocolos de pós-atendimento D+1 e D+7 que geram extrema segurança',
      'A equação do encantamento que transforma clientes em embaixadoras'
    ]
  },
  {
    id: 7,
    numberTag: 'MÓDULO 07',
    title: 'Marketing Consciente & Autoridade',
    subtitle: 'Posicionamento refinado no Instagram e captação inteligente',
    duration: '2h 50m',
    deliverable: 'Guia de Posicionamento e Marketing Consciente',
    lessons: [
      'Posicionamento no Instagram como autoridade médica e estética refinada',
      'Comunicação visual e verbal alinhada ao público ideal',
      'Como atrair pacientes qualificados sem depender de promoções apelativas',
      'Estratégias de conteúdo ético, educativo e de valor'
    ]
  },
  {
    id: 8,
    numberTag: 'MÓDULO 08',
    title: 'Expansão, Equipe & Escala da Clínica (Desafio 90 Dias)',
    subtitle: 'Como sair do operacional e construir uma clínica que funciona sem você',
    duration: '3h 10m',
    deliverable: 'Plano de Ação Desafio 90 Dias',
    lessons: [
      'O passo a passo para delegar tarefas e sair do operacional diário',
      'Estruturação para expansão sustentável da clínica',
      'O Desafio 90 Dias de implementação guiada do Método 3²',
      'Consolidação de uma clínica organizada por fora e por dentro'
    ]
  }
];

export const PLANS: PlanItem[] = [
  {
    id: 'completo',
    name: 'SIMETRIA PERFEITA COMPLETO',
    tag: 'MAIS ESCOLHIDO',
    featured: true,
    originalPrice: 'R$ 1.197,00',
    installments: '12x de R$ 41,01',
    cashPrice: 'R$ 397 à vista',
    benefits: [
      'Acesso Imediato a Todos os 8 Módulos Completos (22h de Conteúdo)',
      'Planilha Inteligente de Precificação 3² (Valor R$ 997)',
      'Playbook de Scripts de WhatsApp da Secretária (Valor R$ 497)',
      'Suporte Prioritário para Dúvidas na Plataforma',
      'Garantia Incondicional de 7 Dias (Risco Zero)',
      'Certificado Oficial Fontenelle Academy'
    ],
    ctaText: 'QUERO TRANSFORMAR MINHA CLÍNICA AGORA'
  },
  {
    id: 'vip',
    name: 'PLANO VIP COM MENTORIA & ANÁLISE INDIVIDUAL',
    tag: 'VAGAS LIMITADAS',
    featured: false,
    originalPrice: 'R$ 4.997,00',
    installments: '12x de R$ 199,30',
    cashPrice: 'R$ 1.997 à vista',
    benefits: [
      'Tudo incluído no Plano Completo Simetria Perfeita',
      'Sessão Estratégica Individual 1 a 1 de Diagnóstico Clínico',
      'Mentoria quinzenal de 2 meses com Alexandre Fontinele para fortalecer sua clínica',
      'Auditoria dos Scripts de WhatsApp da sua Recepção',
      'Estratégias de marketing, redes sociais, Google, abordagens, atendimento e jornada do cliente',
      'Acesso Vitalício ao Conteúdo e Todas as Futuras Atualizações',
      'Linha Direta de WhatsApp VIP com time de Mentores'
    ],
    ctaText: 'QUERO O PLANO VIP COM ANÁLISE INDIVIDUAL'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: '1. Para quem é o curso Simetria Perfeita?',
    answer: 'O curso foi desenvolvido para proprietários e gestores de clínicas de estética, sejam médicos, biomédicos estéticos ou esteticistas que desejam profissionalizar a gestão, elevar o ticket médio e criar uma experiência de alto padrão.'
  },
  {
    id: 2,
    question: '2. Minha clínica ainda é pequena ou estou começando agora. O método funciona para mim?',
    answer: 'Com certeza! Começar com os processos certos de organização e vendas evita erros caros que custam milhares de reais e anos de frustração. O método atende desde quem está abrindo o consultório até clínicas com filiais.'
  },
  {
    id: 3,
    question: '3. Como recebo o acesso ao curso e às ferramentas?',
    answer: 'Imediatamente após a confirmação do pagamento, você receberá um e-mail com os dados de login exclusivos na plataforma da Fontenelle Academy. As aulas, planilhas e bônus ficam disponíveis instantaneamente.'
  },
  {
    id: 4,
    question: '4. Por quanto tempo terei acesso ao conteúdo?',
    answer: 'No Plano Completo você tem 1 ano inteiro de acesso ilimitado para assistir no computador, celular ou tablet quantas vezes quiser. No Plano VIP o acesso é vitalício.'
  },
  {
    id: 5,
    question: '5. Posso liberar o acesso para minha secretária e equipe assistirem?',
    answer: 'Sim! Os materiais e scripts de atendimento no WhatsApp, recepção e pós-venda foram desenhados para você passar diretamente para a sua equipe estudar e aplicar.'
  },
  {
    id: 6,
    question: '6. Como funciona a Garantia Blindada de 7 Dias?',
    answer: 'Você tem 7 dias completos para testar tudo. Se não ficar 100% satisfeito, basta solicitar na plataforma ou enviar uma mensagem que reembolsamos todo o dinheiro, sem complicação.'
  },
  {
    id: 7,
    question: '7. Terei suporte para tirar dúvidas durante o curso?',
    answer: 'Sim! Abaixo de cada aula há um campo de dúvidas com suporte técnico, além das mentorias e da comunidade exclusiva de alunos.'
  },
  {
    id: 8,
    question: '8. Quais são as formas de pagamento disponíveis?',
    answer: 'Cartão de Crédito em até 12x (podendo dividir em até 2 cartões) e PIX à vista com liberação imediata.'
  }
];

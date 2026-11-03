export const CHECKOUT_URL = 'https://pay.cakto.com.br/3czvimn_919773';
export const OFFICIAL_WEBSITE_URL = 'https://fontenelleacademy.com.br/';
export const MENTORIA_WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5543988628997&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20com%20Alexandre%20Fontinele.';

export interface CourseTopicItem {
  id: number;
  title: string;
  subtitle: string;
  topics: string[];
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
    badge: 'Diagnóstico Operacional'
  },
  {
    number: '02',
    title: 'A Metodologia do Método 3²',
    subtitle: 'O alinhamento dos pilares fundamentais: Estrutura, Performance e Experiência',
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
    pillar: 'PILAR 2: PERFORMANCE COMERCIAL E DE MARKETING',
    subtitle: 'Vendas Estratégicas, Marketing & Recepção Ativa',
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
    pillar: 'PILAR 3: EXPERIÊNCIA DO CLIENTE E FIDELIZAÇÃO',
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

export const COURSE_CONTENT_LIST: CourseTopicItem[] = [
  {
    id: 1,
    title: 'O Método 3² & Diagnóstico da sua Clínica',
    subtitle: 'Identificação dos gargalos invisíveis que travam o crescimento da sua clínica',
    topics: [
      'Fundamentos e pilares do Método 3²',
      'Diagnóstico operacional completo da sua clínica',
      'A transição do dono operacional para o gestor estratégico',
      'Alinhamento entre Estrutura, Performance e Experiência'
    ]
  },
  {
    id: 2,
    title: 'Definindo suas Metas & Rotina Harmoniosa',
    subtitle: 'Como planejar o crescimento e organizar o dia a dia sem sobrecarga',
    topics: [
      'Metodologia de metas para clínicas de estética',
      'Organização da agenda do gestor e dos profissionais',
      'Eliminação do desperdício de tempo e tarefas desnecessárias',
      'A rotina diária, semanal e mensal de acompanhamento'
    ]
  },
  {
    id: 3,
    title: 'Indicadores e Controle da Operação',
    subtitle: 'Acompanhe a saúde do seu negócio com dados simples e objetivos',
    topics: [
      'Os principais indicadores que todo dono de clínica deve monitorar',
      'Controle de comparecimento, faltas e reagendamentos',
      'Acompanhamento de conversão por canal de captação',
      'Tomada de decisões estratégicas baseada em fatos'
    ]
  },
  {
    id: 4,
    title: 'A Secretária de Alta Performance no WhatsApp',
    subtitle: 'Transformando sua recepção em uma central ativa de fechamento',
    topics: [
      'Scripts de primeiro contato: como responder o "quanto custa o botox?"',
      'Protocolo anti-no-show: reduzindo faltas de 40% para menos de 8%',
      'Treinamento prático de atendimento ágil, humanizado e refinado',
      'Acesso exclusivo ao script com mensagens que elevam o padrão de atendimento'
    ]
  },
  {
    id: 5,
    title: 'Fluxos, Processos e Definição das Funções',
    subtitle: 'Treinamento, capacitação e alinhamento do time de atendimento',
    topics: [
      'Mapeamento dos fluxos de trabalho da recepção à cabine de atendimento',
      'Definição clara das responsabilidades de cada função',
      'Roteiro de treinamento contínuo para colaboradoras',
      'Cultura de comprometimento e foco no paciente'
    ]
  },
  {
    id: 6,
    title: 'Jornada de Encantamento & Retenção 5 Estrelas',
    subtitle: 'A experiência sensorial que gera fidelização eterna e indicações',
    topics: [
      'Design sensorial da clínica: olfato, som ambiente, recepção e conforto',
      'Ritual de acolhimento e café de boas-vindas refinado',
      'Protocolos de pós-atendimento D+1 e D+7 que geram extrema segurança',
      'A equação do encantamento que transforma clientes em embaixadoras'
    ]
  },
  {
    id: 7,
    title: 'Marketing Consciente & Posicionamento',
    subtitle: 'Posicionamento refinado no Instagram e autoridade estética',
    topics: [
      'Posicionamento no Instagram como autoridade médica e estética refinada',
      'Comunicação visual e verbal alinhada ao público ideal',
      'Como atrair pacientes qualificados sem depender de promoções apelativas',
      'Estratégias de conteúdo ético, educativo e de valor'
    ]
  },
  {
    id: 8,
    title: 'Expansão, Equipe & Escala da Clínica (Desafio 90 Dias)',
    subtitle: 'Como sair do operacional e construir uma clínica que funciona sem você',
    topics: [
      'O passo a passo para delegar tarefas e sair do operacional diário',
      'Estruturação para expansão sustentável da clínica',
      'O Desafio 90 Dias de implementação guiada do Método 3²',
      'Consolidação de uma clínica organizada por fora e por dentro'
    ]
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
    answer: 'Você tem 1 ano inteiro de acesso ilimitado para assistir no computador, celular ou tablet quantas vezes quiser.'
  },
  {
    id: 5,
    question: '5. Posso liberar o acesso para minha secretária e equipe assistirem?',
    answer: 'Sim! Os materiais e scripts de atendimento no WhatsApp, recepção e pós-venda foram desenhados para você passar diretamente para a sua equipe estudar e aplicar.'
  },
  {
    id: 6,
    question: '6. Como funciona a Garantia Blindada de 7 Dias?',
    answer: 'Você tem 7 dias completos para testar tudo. Se não ficar 100% satisfeito, basta enviar um e-mail ou solicitar na plataforma que reembolsamos todo o dinheiro, sem complicação.'
  },
  {
    id: 7,
    question: '7. Terei suporte para tirar dúvidas durante o curso?',
    answer: 'Sim! Abaixo de cada aula há um campo de dúvidas com suporte técnico, além das mentorias mensais ao vivo no Zoom com Alexandre Fontinele e a Comunidade VIP de alunos.'
  },
  {
    id: 8,
    question: '8. Quais são as formas de pagamento disponíveis?',
    answer: 'Cartão de Crédito em até 12x (podendo dividir em até 2 cartões) e PIX à vista com liberação imediata e 10% de desconto.'
  }
];

import { ModuleItem, BonusItem, TestimonialItem, FaqItem } from '../types';

export const CHECKOUT_URL = 'https://pay.cakto.com.br/3czvimn_919773';
export const OFFICIAL_WEBSITE_URL = 'https://fontenelleacademy.com.br/';

export const COURSE_MODULES: ModuleItem[] = [
  {
    id: 1,
    title: 'Fundação da Clínica Lucrativa & Posicionamento High-End',
    badge: 'Módulo 01',
    description: 'Como sair da guerra de preços e posicionar sua clínica como a opção mais desejada da sua região, atraindo pacientes dispostos a pagar pelo valor real do seu serviço.',
    duration: '1h 45m · 6 aulas práticas',
    keyDeliverable: 'Mapa de Posicionamento e Tabela de Percepção de Valor',
    lessons: [
      'A psicologia do paciente de alto poder aquisitivo no setor de saúde e estética',
      'Como eliminar a comparação com concorrentes que cobram barato',
      'Construção dos 7 pontos de contato de luxo (da fachada ao café da recepção)',
      'A transição do dono operacional para o Dono Estrategista',
      'Diagnóstico de vazamentos invisíveis de receita na sua operação',
      'Definição da esteira de produtos e serviços para maximizar o ticket médio'
    ]
  },
  {
    id: 2,
    title: 'O Script de Elite no WhatsApp & Recepção Vendedora',
    badge: 'Módulo 02',
    description: 'O exato método passo a passo para nunca mais responder apenas o preço quando o lead perguntar "Qual o valor?". Transforme secretárias em negociadoras de elite.',
    duration: '2h 15m · 8 aulas práticas',
    keyDeliverable: 'Playbook Oficial de Scripts Prontos para Copiar e Colar',
    lessons: [
      'A anatomia da resposta perfeita nos primeiros 3 minutos de contato',
      'O método das 3 perguntas investigativas que despertam desejo imediato',
      'Como apresentar a consulta ou procedimento sem espantar o interessado',
      'Script de contorno de objeções: "Vou ver e te aviso" e "Achei caro"',
      'Técnicas de áudio persuasivo de 20 segundos que geram conexão humana',
      'Rotina diária da recepcionista: metas de mensagens, follow-ups e confirmações',
      'Como zerar o índice de "no-show" (pacientes que agendam e não aparecem)'
    ]
  },
  {
    id: 3,
    title: 'Consulta Avaliativa de Alta Conversão (Sem Falar de Preço)',
    badge: 'Módulo 03',
    description: 'A metodologia de apresentação clínica que faz o paciente implorar pelo seu plano de tratamento completo, sem questionar valores ou pedir descontos.',
    duration: '2h 00m · 7 aulas práticas',
    keyDeliverable: 'Roteiro de Consulta de 4 Etapas e Formulário de Anamnese Estratégica',
    lessons: [
      'A preparação do ambiente e o acolhimento memorável nos primeiros minutos',
      'O roteiro de perguntas para descobrir a dor emocional profunda do paciente',
      'Como apresentar o plano de tratamento completo (e não apenas uma sessão avulsa)',
      'A técnica da ancoragem de valor que torna o preço final imperceptível',
      'Fechamento na sala de atendimento vs. Fechamento na recepção',
      'Como lidar com: "Preciso falar com meu cônjuge primeiro"',
      'Contratos de tratamento e alinhamento de expectativas para evitar cancelamentos'
    ]
  },
  {
    id: 4,
    title: 'Estruturação de Planos e Protocolos de Alto Valor (High-Ticket)',
    badge: 'Módulo 04',
    description: 'Como empacotar seus procedimentos em protocolos exclusivos de 3, 6 e 12 meses, gerando receita previsível e garantindo que o paciente permaneça na clínica.',
    duration: '1h 50m · 5 aulas práticas',
    keyDeliverable: 'Planilha de Precificação e Matriz de Montagem de Protocolos',
    lessons: [
      'Por que vender sessões isoladas está matando a margem da sua clínica',
      'A fórmula para calcular o CAC e LTV real de cada paciente',
      'Como batizar tratamentos com nomes proprietários que ninguém consegue comparar',
      'Estruturação de planos de assinatura e recorrência estética/médica',
      'Formas de pagamento facilitadas que aumentam a conversão em 45% sem gerar risco'
    ]
  },
  {
    id: 5,
    title: 'Gestão de Equipe, Metas e Comissionamento Saudável',
    badge: 'Módulo 05',
    description: 'Crie uma cultura de alta performance onde suas recepcionistas, esteticistas, biomédicos ou dentistas trabalham com sangue nos olhos para bater metas diárias.',
    duration: '1h 35m · 6 aulas práticas',
    keyDeliverable: 'Calculadora de Comissionamento Progressivo e Dashboard de Metas',
    lessons: [
      'Como contratar recepcionistas e consultoras com perfil comercial agressivo e educado',
      'O modelo de remuneração variável e premiações que não quebra o caixa',
      'Reunião diária de 10 minutos (Daily Huddle) que alinha a equipe todo dia',
      'Feedback corretivo e gestão de conflitos na equipe clínica',
      'Plano de carreira simples que retém os melhores talentos da sua clínica'
    ]
  },
  {
    id: 6,
    title: 'Máquina de Resgate de Pacientes Inativos & Automações',
    badge: 'Módulo 06',
    description: 'Ative o dinheiro esquecido na sua base de contatos. Métodos práticos para reativar pacientes que não voltam há mais de 90 dias com mensagens altamente atrativas.',
    duration: '1h 40m · 5 aulas práticas',
    keyDeliverable: 'Campanhas Prontas de Resgate em 3 Etapas para WhatsApp',
    lessons: [
      'O raio-x da sua base: como catalogar e segmentar pacientes inativos',
      'A mensagem de "Checagem de Saúde/Estética" que traz de 15 a 30 retornos no mesmo dia',
      'Campanhas sazonais inteligentes sem parecer "desesperado por vendas"',
      'Automação de lembretes pós-procedimento que geram avaliações 5 estrelas no Google',
      'O programa de indicação de pacientes VIP ("Membro traz Membro")'
    ]
  }
];

export const EXCLUSIVE_BONUSES: BonusItem[] = [
  {
    id: 1,
    title: 'O Livro de Ouro de Scripts de WhatsApp para Secretárias',
    tag: 'BÔNUS 01',
    originalPrice: 'R$ 397,00',
    description: 'Mais de 40 mensagens testadas e validadas para responder dúvidas de preço, contornar "vou pensar", reverter cancelamentos e confirmar agendamentos com taxa zero de falta.',
    deliverables: [
      'Scripts prontos organizados por tipo de especialidade',
      'Áudios modelo gravados com tom de voz e cadência ideais',
      'Versão em PDF editável para imprimir e deixar no balcão da recepção'
    ],
    iconName: 'MessageSquareText'
  },
  {
    id: 2,
    title: 'Planilha Dinâmica de Gestão Financeira, DRE & Comissões',
    tag: 'BÔNUS 02',
    originalPrice: 'R$ 297,00',
    description: 'Tenha clareza milimétrica do seu lucro real por procedimento, custo fixo da hora clínica e comissões automáticas para sua equipe sem complicações.',
    deliverables: [
      'DRE automático simplificado para clínicas',
      'Calculadora de custo/hora por sala de atendimento',
      'Simulador de comissões por metas alcançadas'
    ],
    iconName: 'FileSpreadsheet'
  },
  {
    id: 3,
    title: 'Manual de Recepção VIP & Encantamento do Paciente',
    tag: 'BÔNUS 03',
    originalPrice: 'R$ 197,00',
    description: 'O protocolo dos melhores centros médicos e estéticos do país para transformar a recepção em uma experiência de hotel 5 estrelas que fideliza no primeiro instante.',
    deliverables: [
      'Checklist de abertura e fechamento da clínica',
      'Manual de etiqueta telefônica, postura física e vestimenta',
      'Roteiro de acolhimento e café de boas-vindas memorável'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 4,
    title: 'Masterclass Exclusiva: Oratória & Liderança com Alexandre Fontinele',
    tag: 'BÔNUS 04',
    originalPrice: 'R$ 497,00',
    description: 'Aprenda a se comunicar com magnetismo, autoridade inabalável e clareza perante sua equipe, pacientes exigentes e nas redes sociais da sua clínica.',
    deliverables: [
      'Técnicas de presença e postura corporal para donos de clínica',
      'Como gravar vídeos para o Instagram que atraem pacientes qualificados',
      'Método de argumentação persuasiva para liderar sua equipe'
    ],
    iconName: 'Mic'
  },
  {
    id: 5,
    title: 'Acesso à Comunidade Fechada de Donos de Clínicas',
    tag: 'BÔNUS 05',
    originalPrice: 'Inestimável',
    description: 'Faça networking com médicos, dentistas, biomédicos e donos de clínicas de todo o Brasil que faturam múltiplos 6 dígitos e compartilham estratégias em tempo real.',
    deliverables: [
      'Troca de fornecedores de insumos e equipamentos',
      'Compartilhamento de campanhas que deram certo',
      'Encontros mensais de tira-dúvidas ao vivo'
    ],
    iconName: 'Users'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Dra. Camila Mendonça',
    role: 'Dermatologista & Sócia-Diretora',
    clinic: 'Clínica Lumina Dermatologia',
    location: 'São Paulo - SP',
    metric: '+R$ 68.000 no 1º mês',
    quote: 'Minha secretária perdia quase 80% das pessoas que chamavam no WhatsApp só passando preço seco. Depois de aplicar os scripts e a postura do método Fontenelle, nosso fechamento de protocolos saltou de 18% para mais de 52%. Foi a melhor decisão para minha clínica.',
    highlight: 'Triplicou o fechamento de protocolos corporais e faciais sem dar nenhum desconto.',
    avatarSeed: 'Camila'
  },
  {
    id: 2,
    name: 'Dr. Rodrigo Alencar',
    role: 'Cirurgião Dentista & Proprietário',
    clinic: 'Alencar Odontologia Integrada',
    location: 'Belo Horizonte - MG',
    metric: 'Agenda cheia com 0 furos',
    quote: 'Eu vivia estressado com salas vazias por conta de pacientes que desmarcavam em cima da hora. O protocolo de confirmação e a nova consulta avaliativa mudaram o jogo. As pessoas hoje chegam no horário e prontas para fechar o tratamento completo.',
    highlight: 'Eliminou 95% do no-show e elevou o ticket médio para R$ 5.400 por paciente.',
    avatarSeed: 'Rodrigo'
  },
  {
    id: 3,
    name: 'Dra. Vanessa Prado',
    role: 'Biomédica Esteta & Gestora',
    clinic: 'Instituto Vanessa Prado Estética',
    location: 'Curitiba - PR',
    metric: 'De R$ 42k para R$ 135k/mês',
    quote: 'O que o Alexandre ensina sobre comunicação de autoridade e treinamento da recepção é outro nível. O curso se pagou literalmente no terceiro dia, quando minha recepcionista fechou um plano anual de R$ 9.600 usando exatamente o script do módulo 2.',
    highlight: 'Faturamento mais que triplicou em 90 dias com a mesma equipe de 2 colaboradoras.',
    avatarSeed: 'Vanessa'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 1,
    question: 'Para quais tipos de clínica este treinamento é indicado?',
    answer: 'O método é 100% aplicável para clínicas de Estética Avançada, Dermatologia, Cirurgia Plástica, Odontologia, Harmonização Orofacial, Nutrição, Fisioterapia, Clínicas Médicas e Centros de Saúde Integrativa que vendem consultas, procedimentos ou planos de tratamento.',
    category: 'curso'
  },
  {
    id: 2,
    question: 'Minha recepcionista ou secretária pode assistir às aulas?',
    answer: 'Com certeza! Na verdade, recomendamos fortemente que sua secretária, recepcionista e equipe de atendimento assistam juntas aos Módulos 2 e 5. Eles foram pensados com linguagem didática e prática para que qualquer colaboradora consiga aplicar no WhatsApp no mesmo dia.',
    category: 'curso'
  },
  {
    id: 3,
    question: 'Por quanto tempo terei acesso ao treinamento?',
    answer: 'Você terá acesso completo durante 1 ano inteiro (365 dias), com direito a todas as atualizações de conteúdo, novos scripts e materiais complementares lançados na plataforma.',
    category: 'acesso'
  },
  {
    id: 4,
    question: 'Como e quando recebo o acesso após a compra?',
    answer: 'O acesso é imediato! Assim que o pagamento for aprovado pela Cakto (via Pix ou Cartão de Crédito), você receberá automaticamente em seu e-mail os dados de login e senha para acessar a área de membros exclusiva da Fontenelle Academy.',
    category: 'acesso'
  },
  {
    id: 5,
    question: 'E se eu não gostar ou achar que não serve para a minha clínica?',
    answer: 'Você conta com nossa Garantia Incondicional de 7 dias. Entre na plataforma, assista às aulas e baixe os scripts. Se você achar que o método não é para você, basta solicitar o reembolso com apenas um clique e nós devolveremos 100% do seu dinheiro, sem perguntas e sem letras miúdas.',
    category: 'garantia'
  },
  {
    id: 6,
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Você pode pagar através do Pix (com aprovação e acesso imediato em 1 minuto) ou parcelar em até 12x no cartão de crédito na plataforma Cakto com total segurança e criptografia bancária.',
    category: 'pagamento'
  }
];

export const PAIN_COMPARISON = [
  {
    problem: 'Sua recepção passa o preço de bate-pronto no WhatsApp e o paciente simplesmente desaparece ("sumiço total").',
    solution: 'Script de 3 etapas que prende a atenção do lead, gera percepção de exclusividade e conduz ao agendamento sem falar de preço primeiro.'
  },
  {
    problem: 'Agenda cheia de consultas avaliativas, mas poucos fecham o tratamento completo porque pedem desconto ou "vão pensar".',
    solution: 'Metodologia de Consulta Avaliativa em 4 passos com ancoragem de valor para fechar protocolos completos com pagamento à vista.'
  },
  {
    problem: 'O dono ou gestor passa o dia apagando incêndios, atendendo no consultório e sem tempo para gerenciar o negócio.',
    solution: 'Processos claros de rotina, checklists diários e equipe treinada para operar e vender sem precisar do dono o tempo todo.'
  },
  {
    problem: 'Equipe de atendimento acomodada, sem ambição e tratando pacientes como simples "fichas de cadastro".',
    solution: 'Sistema de metas claras e comissionamento progressivo que faz suas recepcionistas vestirem a camisa da clínica.'
  },
  {
    problem: 'Milhares de contatos parados no WhatsApp que vieram de anúncios e nunca mais voltaram a falar com a clínica.',
    solution: 'Campanha comprovada de resgate de leads inativos capaz de reativar 20 a 40 pacientes já na sua primeira semana.'
  }
];

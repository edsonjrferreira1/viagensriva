/**
 * Configuração central da landing page da Viagens Riva.
 * Altere aqui: WhatsApp, dados da agência, textos, navegação, destinos, FAQ e CTAs.
 */

export const agency = {
  name: "Viagens Riva",
  legal: "Agência de Viagens",
  cnpj: "52.272.137/0001-07",
  cadastur: "Agência cadastrada no Cadastur",
  whatsappNumber: "5562982179433",
  whatsappDisplay: "(62) 98217-9433",
  instagramHandle: "@viagensriva",
  instagramUrl: "https://instagram.com/viagensriva",
};

/** Serviços organizados pela agência (viagens nacionais e internacionais). */
export const agencyServices = [
  { icon: "plane", label: "Passagens aéreas" },
  { icon: "bed", label: "Hospedagens" },
  { icon: "ship", label: "Cruzeiros" },
  { icon: "car", label: "Aluguel de carros" },
  { icon: "shield", label: "Seguro viagem" },
  { icon: "bus", label: "Transfer" },
  { icon: "map", label: "Passeios e experiências" },
] as const;


export const expert = {
  name: "Edson Ferreira",
  role: "Responsável pela agência Viagens Riva",
  bio: "Professor, mestre e apaixonado pelo mundo das viagens. Acompanha cada cotação com atenção às preferências de quem está planejando a próxima experiência.",
  image: null as string | null,
};


export const whatsappLink = (message: string) =>
  `https://wa.me/${agency.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultWhatsappMessage =
  "Olá! Vi a página da Viagens Riva e gostaria de receber uma cotação personalizada para minha viagem.";

export const navItems = [
  { label: "Experiências", href: "#experiencias" },
  { label: "All Inclusive", href: "#all-inclusive" },
  { label: "Gastronomia", href: "#gastronomia" },
  { label: "Lazer", href: "#lazer" },
  { label: "Famílias", href: "#familias" },
  { label: "Casais", href: "#casais" },
  { label: "Destinos", href: "#destinos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Cotação", href: "#cotacao" },
  { label: "Dúvidas", href: "#faq" },
];

/**
 * Avaliações reais publicadas no Google.
 * Para atualizar a nota ou a quantidade, altere `rating` e `count`.
 */
export const googleReviews = {
  rating: "5,0",
  count: 23,
  profileUrl: "https://share.google/k24MKSS3qRVz2ec5M",
  items: [
    {
      highlight: "Cuidou de todos os detalhes da minha viagem.",
      text: "Quero agradecer a atenção e presteza dos serviços que a agência Riva teve com minha família, cuidou de todos os detalhes da minha viagem, atendeu minhas necessidades e enquadrou dentro das minhas necessidades. Foi maravilhosa nossa experiência e com certeza será somente a primeira de várias futuras.",
      author: "Gleice Nascimento",
    },
    {
      highlight: "Total suporte durante toda a viagem.",
      text: "Tivemos total suporte durante toda a viagem. Experiência incrível.",
      author: "Izabella Cardoso",
    },
    {
      highlight: "A experiência começou já no atendimento.",
      text: "A experiência da minha viagem começou já no atendimento! Empresa perfeita, preço ótimo, atendimento melhor ainda!",
      author: "Nathalia Moura",
    },
  ],
};


export const heroHighlights = [
  "Atendimento personalizado",
  "Resorts selecionados",
  "Cotação sem compromisso",
  "Agência regularizada",
];

export const inclusiveCards = [
  {
    title: "Café da manhã",
    text: "Comece o dia sem pressa, com opções variadas para todos os gostos.",
  },
  {
    title: "Almoço",
    text: "Refeições servidas durante a hospedagem, conforme a programação do resort.",
  },
  {
    title: "Petiscos",
    text: "Opções ao longo do dia para acompanhar a piscina e a praia.",
  },
  {
    title: "Jantar",
    text: "Jantares com propostas diferentes a cada noite, conforme cardápios vigentes.",
  },
  {
    title: "Bebidas",
    text: "Seleção de bebidas conforme as regras e horários do regime contratado.",
  },
  {
    title: "Gastronomia",
    text: "Experiências em restaurantes participantes do regime All Inclusive.",
  },
  {
    title: "Lazer",
    text: "Piscinas, recreação e atividades incluídas conforme a programação do resort.",
  },
];

export const leisureCards = [
  "Piscinas",
  "Praia",
  "Recreação",
  "Kids Club",
  "Relaxamento",
  "SPA",
  "Esportes",
  "Entretenimento",
];

export const accommodations = [
  {
    name: "Acomodação standard",
    capacity: "Ocupação sob consulta",
    description:
      "Quartos e suítes confortáveis para descansar depois de um dia inteiro de férias. Consulte as categorias disponíveis para as suas datas.",
  },
  {
    name: "Opção para casais",
    capacity: "Ocupação sob consulta",
    description:
      "Acomodações pensadas para quem quer descansar a dois, com vistas e conforto especiais.",
  },
  {
    name: "Opção para famílias",
    capacity: "Ocupação sob consulta",
    description:
      "Espaço para acomodar adultos e crianças com conforto durante toda a estadia.",
  },
];

export const destinations = [
  {
    name: "Litoral brasileiro",
    description: "Praias, resorts e muito sol para quem quer aproveitar o verão brasileiro.",
    tag: "Nacional",
  },
  {
    name: "Destinos de montanha",
    description: "Clima ameno, paisagens verdes e estrutura para descansar em qualquer época.",
    tag: "Nacional",
  },
  {
    name: "Resorts internacionais",
    description: "Experiências fora do país com atendimento e suporte em português.",
    tag: "Internacional",
  },
];

export const experiences = [
  {
    name: "Resort All Inclusive",
    destination: "Destino nacional",
    regime: "All Inclusive",
    differentials: ["Refeições", "Bebidas", "Lazer", "Recreação"],
  },
  {
    name: "Resort para famílias",
    destination: "Destino nacional",
    regime: "Meia pensão ou All Inclusive",
    differentials: ["Kids Club", "Piscinas", "Recreação", "Família"],
  },
  {
    name: "Experiência a dois",
    destination: "Nacional ou internacional",
    regime: "Sob consulta",
    differentials: ["Romântico", "Bem-estar", "Gastronomia", "Exclusividade"],
  },
];

export const whyAllInclusive = [
  {
    title: "Previsibilidade",
    text: "Saiba antecipadamente o que está incluído na sua hospedagem e planeje seu orçamento com mais tranquilidade.",
  },
  {
    title: "Praticidade",
    text: "Menos preocupação com refeições, bebidas e atividades do dia a dia durante as férias.",
  },
  {
    title: "Variedade",
    text: "Restaurantes, bares, lazer e recreação reunidos no mesmo lugar, para todos os perfis.",
  },
  {
    title: "Família",
    text: "Estrutura pensada para que crianças e adultos aproveitem juntos — e separados também.",
  },
  {
    title: "Experiência",
    text: "Mais tempo para curtir a viagem e menos tempo resolvendo detalhes por conta própria.",
  },
];

export const faq = [
  {
    q: "O que está incluído em um resort All Inclusive?",
    a:
      "O que está incluído varia de acordo com cada resort. Normalmente, o regime All Inclusive pode contemplar refeições, petiscos, bebidas e algumas atividades durante a hospedagem. Antes da reserva, informamos exatamente o que está incluído na opção escolhida.",
  },
  {
    q: "Posso contratar somente hospedagem ou montar um pacote completo?",
    a:
      "Sim. Podemos cotar somente a hospedagem ou organizar uma viagem completa, incluindo passagens aéreas, hospedagem, transfer, seguro viagem, aluguel de carro, passeios e outras experiências, conforme a necessidade de cada cliente.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a:
      "Trabalhamos com diferentes formas de pagamento.\n\n💳 Cartão de crédito: pacotes podem ter parcelamento em até 10x sem juros, conforme as condições disponíveis para a reserva.\n\n💰 Pix: pagamento à vista com possibilidade de desconto.\n\n📄 Boleto: disponível mediante análise de crédito, podendo haver opções de parcelamento em até 10 ou 12 vezes sem juros, de acordo com a aprovação e as condições disponíveis.\n\nAs condições exatas são apresentadas juntamente com cada cotação.",
  },
  {
    q: "Posso viajar com crianças?",
    a:
      "Sim. Podemos buscar hospedagens e resorts adequados para famílias, considerando a idade das crianças, estrutura infantil, alimentação, recreação e demais necessidades da viagem.\n\nÉ importante informar a idade de cada criança no momento da cotação, pois as regras e tarifas podem variar de acordo com a hospedagem.",
  },
  {
    q: "Os preços apresentados são fixos?",
    a:
      "Não. Tarifas de passagens, hospedagens e pacotes são dinâmicas e podem sofrer alterações conforme disponibilidade, período da viagem, quantidade de hóspedes e condições dos fornecedores.\n\nPor isso, uma cotação representa as condições disponíveis no momento da pesquisa e está sujeita a alteração até a confirmação da reserva.",
  },
  {
    q: "Quais documentos preciso para viajar?",
    a:
      "A documentação necessária depende do destino e do perfil dos passageiros.\n\nViagens nacionais e internacionais podem exigir documentos diferentes, principalmente quando há menores de idade envolvidos.\n\nDurante o atendimento, orientamos o cliente sobre a documentação necessária para a viagem contratada.",
  },
  {
    q: "É possível alterar ou cancelar uma viagem depois da reserva?",
    a:
      "Sim, porém as condições dependem das regras da tarifa, hospedagem, companhia aérea e demais serviços contratados.\n\nAlgumas tarifas permitem alteração ou cancelamento mediante cobrança de multas e diferença tarifária, enquanto outras podem possuir condições mais restritivas.\n\nAntes da confirmação da reserva, apresentamos as principais regras aplicáveis.",
  },
  {
    q: "Vocês oferecem suporte depois que a viagem é contratada?",
    a:
      "Sim. O atendimento da Viagens Riva não termina após a reserva.\n\nNossa equipe auxilia com orientações antes da viagem e presta suporte relacionado aos serviços contratados sempre que necessário.",
  },
  {
    q: "Posso solicitar uma cotação mesmo sem saber exatamente para onde quero viajar?",
    a:
      "Sim. Informe o período aproximado, cidade de origem, quantidade de passageiros e o tipo de experiência que procura.\n\nPodemos ajudar na escolha do destino e apresentar opções compatíveis com o perfil da viagem.",
  },
  {
    q: "Com quanto tempo de antecedência é melhor reservar?",
    a:
      "Quanto maior a antecedência, normalmente maiores são as possibilidades de encontrar boas opções de voos, hospedagens e condições de pagamento.\n\nEm períodos de alta procura, como férias, feriados, réveillon e carnaval, recomendamos iniciar o planejamento com antecedência ainda maior.",
  },
];

export const interestOptions = [
  "Hospedagem",
  "Passagens aéreas",
  "All Inclusive",
  "Cruzeiros",
  "Aluguel de carros",
  "Transfer",
  "Seguro viagem",
  "Passeios e experiências",
];


export const tripTypes = [
  "Ainda não sei",
  "Família com crianças",
  "Casal",
  "Grupo de amigos",
  "Viagem solo",
  "Lua de mel",
  "Aniversário",
  "Outra ocasião",
];

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
  {
    icon: "plane",
    label: "Passagens aéreas",
    description: "Voos nacionais e internacionais pesquisados de acordo com o seu roteiro.",
  },
  {
    icon: "bed",
    label: "Hospedagens",
    description: "Hotéis, pousadas, flats e resorts para cada perfil de viagem.",
  },
  {
    icon: "ship",
    label: "Cruzeiros",
    description: "Roteiros em alto-mar reunindo vários destinos em uma só viagem.",
  },
  {
    icon: "car",
    label: "Aluguel de carros",
    description: "Mais autonomia para explorar o destino no seu ritmo.",
  },
  {
    icon: "shield",
    label: "Seguro viagem",
    description: "Coberturas adequadas ao destino, ao período e ao perfil dos passageiros.",
  },
  {
    icon: "bus",
    label: "Transfer",
    description: "Traslados entre aeroporto, hospedagem e passeios contratados.",
  },
  {
    icon: "map",
    label: "Passeios e experiências",
    description: "Ingressos, roteiros e experiências para aproveitar cada dia.",
  },
] as const;


export const expert = {
  name: "Edson Ferreira",
  role: "Responsável pela agência Viagens Riva",
  bio: "Professor, mestre e apaixonado pelo mundo das viagens. À frente da Viagens Riva, acompanha junto com a equipe cada planejamento com atenção ao perfil, ao período e às expectativas de quem vai viajar.",
  image: null as string | null,
};


export const whatsappLink = (message: string) =>
  `https://wa.me/${agency.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultWhatsappMessage =
  "Olá! Conheci a Viagens Riva pela página e gostaria de conversar sobre uma viagem.";

/** Submenu de Experiências — cada item leva a um bloco de conteúdo real. */
export const experienceMenu = [
  { label: "Resorts & All Inclusive", href: "#resorts" },
  { label: "Cruzeiros", href: "#cruzeiros" },
  { label: "Famílias & viagens a dois", href: "#momentos" },
  { label: "Férias nacionais e internacionais", href: "#destinos" },
];

/** Conteúdo da seção de cruzeiros. */
export const cruiseIntro =
  "Em um cruzeiro, a própria viagem já faz parte das férias. Você embarca, aproveita a estrutura do navio e pode conhecer diferentes destinos ao longo do mesmo roteiro, sem precisar trocar de hospedagem a cada parada.";

export const cruiseIntroComplement =
  "Existem roteiros nacionais e internacionais, diferentes categorias de cabine e opções para casais, famílias, grupos e comemorações especiais.";

export const cruiseBenefits = [
  {
    icon: "map",
    title: "Vários destinos em uma viagem",
    text: "Conheça diferentes cidades, praias ou países ao longo do mesmo roteiro.",
  },
  {
    icon: "bed",
    title: "Sua hospedagem viaja com você",
    text: "Você permanece na mesma cabine enquanto o navio segue para novos destinos, evitando trocas constantes de hotel e malas.",
  },
  {
    icon: "sparkles",
    title: "Experiência a bordo",
    text: "Gastronomia, piscinas, shows, atividades e diferentes opções de entretenimento podem fazer parte da experiência, conforme o navio e a companhia.",
  },
  {
    icon: "users",
    title: "Para diferentes perfis",
    text: "Existem cruzeiros para casais, famílias, grupos de amigos, comemorações e diferentes estilos de viajante.",
  },
  {
    icon: "ship",
    title: "Roteiros nacionais e internacionais",
    text: "Podemos pesquisar opções no Brasil e no exterior conforme período, disponibilidade e perfil da viagem.",
  },
];

/** Serviços complementares que a agência pode organizar junto ao cruzeiro. */
export const cruiseExtras = [
  "Passagem aérea quando necessária",
  "Hospedagem antes ou depois do embarque",
  "Transfer",
  "Seguro viagem",
  "Passeios e experiências",
];

export const cruiseNote =
  "Cabines, alimentação, bebidas, atividades e demais serviços incluídos variam conforme companhia marítima, navio, roteiro e tarifa contratada.";



export const navItems: {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Experiências", href: "#experiencias", children: experienceMenu },
  { label: "Destinos", href: "#destinos" },
  { label: "Comunidades", href: "/comunidades" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
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
  "Viagens nacionais e internacionais",
  "Cotação sem compromisso",
  "Agência regularizada",
];

/** Benefícios resumidos do regime All Inclusive (bloco comercial enxuto). */
export const inclusiveBenefits = [
  {
    icon: "chef",
    title: "Gastronomia variada",
    text: "Refeições, restaurantes temáticos e cardápios que acompanham o regime contratado.",
  },
  {
    icon: "wine",
    title: "Bebidas inclusas",
    text: "Seleção de bebidas disponível conforme as regras e horários do resort.",
  },
  {
    icon: "waves",
    title: "Lazer e recreação",
    text: "Piscinas, atividades, kids club e espaços para relaxar sem sair da hospedagem.",
  },
  {
    icon: "sparkles",
    title: "Orçamento previsível",
    text: "Mais controle sobre os gastos da viagem: você sabe o que já está pago antes de embarcar.",
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
    name: "Hotéis e pousadas",
    capacity: "Do bem localizado ao boutique de charme",
    description:
      "Endereços escolhidos pela localização, pelo café da manhã e pela avaliação real de quem já se hospedou.",
  },
  {
    name: "Flats e apartamentos",
    capacity: "Ideal para estadias de 7 noites ou mais",
    description:
      "Mais espaço, cozinha e autonomia para viagens longas, em família ou quando o roteiro pede uma base fixa.",
  },
  {
    name: "Hospedagens premium",
    capacity: "Alto padrão e serviço personalizado",
    description:
      "Suítes, vistas privilegiadas e atendimento diferenciado para ocasiões que pedem algo especial.",
  },
];



export const destinations = [
  {
    id: "destinos-praia",
    name: "Destinos de praia",
    description:
      "Sol, mar e dias de descanso: praias brasileiras e internacionais para desacelerar de verdade.",
    tag: "Sol e mar",
    preference: "Praia",
  },
  {
    id: "destinos-montanha",
    name: "Destinos de montanha",
    description:
      "Clima agradável, natureza e charme para viajar em qualquer época do ano.",
    tag: "Serra e natureza",
    preference: "Montanha / natureza",
  },
  {
    id: "destinos-internacionais",
    name: "Destinos internacionais",
    description:
      "Viagens fora do país com planejamento completo: aéreo, hospedagem, seguro, transfer e passeios.",
    tag: "Internacional",
    preference: "Internacional",
  },
  {
    id: "destinos-ferias",
    name: "Destinos de férias",
    description:
      "Roteiros pensados para as férias em família ou entre amigos, com ritmo, conforto e experiências na medida.",
    tag: "Férias",
    preference: "Férias",
  },
];

/** Formas de viajar — estilos de experiência (sem repetir a lista de serviços). */
export const experiences = [
  {
    name: "Resorts & All Inclusive",
    icon: "sparkles",
    description:
      "Dias sem logística: você chega, desacelera e aproveita tudo o que a hospedagem oferece.",
    tags: ["Descanso", "Gastronomia", "Lazer", "Conforto"],
  },
  {
    name: "Cruzeiros",
    icon: "ship",
    description:
      "A viagem começa a bordo: você dorme em um destino e acorda em outro, sem trocar de mala.",
    tags: ["Alto-mar", "Múltiplos destinos", "Entretenimento", "Experiências"],
  },
  {
    name: "Férias nacionais e internacionais",
    icon: "luggage",
    description:
      "Do Brasil ao exterior, um roteiro com o ritmo certo para o seu tempo livre.",
    tags: ["Brasil", "Exterior", "Roteiros", "Férias"],
  },
  {
    name: "Praia & descanso",
    icon: "palm",
    description:
      "Mar, silêncio e dias sem hora marcada para quem só quer sair da rotina.",
    tags: ["Praia", "Descanso", "Bem-estar", "Tranquilidade"],
  },
  {
    name: "Lua de mel",
    icon: "heart",
    description:
      "Destinos, hospedagens e experiências especiais para começar essa nova fase com uma viagem inesquecível.",
    tags: ["Romance", "Experiências", "Conforto", "Destinos especiais"],
  },
  {
    name: "Neve & inverno",
    icon: "snowflake",
    description:
      "Destinos para viver o frio, paisagens de inverno e experiências que transformam a estação em parte da viagem.",
    tags: ["Neve", "Inverno", "Montanha", "Experiências"],
  },
  {
    name: "Natureza & aventura",
    icon: "mountain",
    description:
      "Viagens para quem quer descobrir paisagens, natureza e experiências diferentes da rotina.",
    tags: ["Natureza", "Aventura", "Paisagens", "Experiências"],
  },
  {
    name: "Cultura & gastronomia",
    icon: "utensils",
    description:
      "Destinos para conhecer também pelos sabores, história, cultura e experiências locais.",
    tags: ["Cultura", "Gastronomia", "História", "Experiências"],
  },
];


export const faq = [
  {
    q: "Quais são as formas de pagamento?",
    a:
      "Trabalhamos com diferentes formas de pagamento.\n\n💳 Cartão de crédito: pacotes podem ter parcelamento em até 10x sem juros, conforme as condições disponíveis para a reserva.\n\n💰 Pix: pagamento à vista com possibilidade de desconto.\n\n📄 Boleto: disponível mediante análise de crédito, podendo haver opções de parcelamento em até 10 ou 12 vezes sem juros, de acordo com a aprovação e as condições disponíveis.\n\nAs condições exatas são apresentadas juntamente com cada cotação.",
  },
  {
    q: "Posso contratar somente alguns serviços ou preciso fechar um pacote completo?",
    a:
      "Você escolhe. Podemos cotar apenas passagens aéreas, apenas hospedagem, apenas seguro viagem ou transfer, por exemplo.\n\nTambém podemos montar a viagem completa, reunindo aéreo, hospedagem, transfer, seguro, aluguel de carro, passeios e experiências em uma única cotação.",
  },
  {
    q: "Vocês montam a viagem completa, do começo ao fim?",
    a:
      "Sim. Organizamos viagens nacionais e internacionais de forma completa: escolha do destino, voos, hospedagem, deslocamentos, seguro, passeios e experiências.\n\nO roteiro é montado de acordo com o seu perfil, o período disponível e o orçamento definido.",
  },
  {
    q: "Quais documentos preciso para viajar?",
    a:
      "A documentação necessária depende do destino e do perfil dos passageiros.\n\nViagens nacionais e internacionais podem exigir documentos diferentes, principalmente quando há menores de idade envolvidos.\n\nDurante o atendimento, orientamos você sobre a documentação necessária para a viagem contratada.",
  },
  {
    q: "Posso viajar com crianças?",
    a:
      "Sim. Planejamos a viagem considerando a idade das crianças, estrutura infantil, alimentação, recreação, assentos, bagagens e demais necessidades.\n\nÉ importante informar a idade de cada criança no momento da solicitação, pois regras e tarifas variam conforme os serviços contratados.",
  },
  {
    q: "É possível alterar ou cancelar uma viagem depois da reserva?",
    a:
      "Sim, porém as condições dependem das regras da tarifa, hospedagem, companhia aérea e demais serviços contratados.\n\nAlgumas tarifas permitem alteração ou cancelamento mediante multas e diferença tarifária, enquanto outras possuem condições mais restritivas.\n\nAntes da confirmação da reserva, apresentamos as principais regras aplicáveis.",
  },
  {
    q: "Com quanto tempo de antecedência é melhor reservar?",
    a:
      "Quanto maior a antecedência, normalmente maiores são as possibilidades de encontrar boas opções de voos, hospedagens e condições de pagamento.\n\nEm períodos de alta procura, como férias, feriados, réveillon e carnaval, recomendamos iniciar o planejamento com antecedência ainda maior.",
  },
  {
    q: "Os preços apresentados são fixos?",
    a:
      "Não. Tarifas de passagens, hospedagens, cruzeiros e pacotes são dinâmicas e podem mudar conforme disponibilidade, período da viagem, quantidade de passageiros e condições dos fornecedores.\n\nUma cotação representa as condições disponíveis no momento da pesquisa e está sujeita a alteração até a confirmação da reserva.",
  },
  {
    q: "Posso pedir ajuda mesmo sem saber para onde quero viajar?",
    a:
      "Sim. Informe o período aproximado, cidade de origem, quantidade de passageiros e o tipo de experiência que procura.\n\nAjudamos você a escolher o destino e apresentamos opções compatíveis com o perfil da viagem.",
  },
  {
    q: "O que está incluído em um resort All Inclusive?",
    a:
      "Varia conforme cada resort e o regime contratado. Normalmente, o All Inclusive pode contemplar refeições, petiscos, bebidas e algumas atividades durante a hospedagem.\n\nAntes da reserva, informamos exatamente o que está incluído na opção escolhida.",
  },
  {
    q: "Vocês oferecem suporte depois que a viagem é contratada?",
    a:
      "Sim. O atendimento da Viagens Riva não termina após a reserva.\n\nNossa equipe auxilia com orientações antes da viagem e presta suporte relacionado aos serviços contratados sempre que necessário.",
  },
  {
    q: "Como faço para receber as promoções?",
    a:
      "A Viagens Riva mantém comunidades de ofertas no WhatsApp separadas por região de embarque — Rio de Janeiro, São Paulo, Goiânia e Brasília, e Petrolina.\n\nVocê escolhe a sua e recebe as ofertas algumas vezes por semana, já com voo, hospedagem e valor final. É só entrar na página de Comunidades.",
    link: { label: "Ver as comunidades de ofertas", to: "/comunidades" },
  },
];

/** Comunidades de ofertas no WhatsApp, separadas por região de embarque. */
export const communities = [
  {
    id: "rio",
    name: "Rio de Janeiro",
    airports: "GIG · SDU",
    description:
      "Saídas do Galeão e Santos Dumont para destinos nacionais e internacionais.",
    link: "https://chat.whatsapp.com/KI1qRpi2ctOABEgwhdqMqB",
    alt: "Pão de Açúcar e orla do Rio de Janeiro ao entardecer",
  },
  {
    id: "sao-paulo",
    name: "São Paulo",
    airports: "GRU · CGH · VCP",
    description:
      "Saídas de Guarulhos, Congonhas e Viracopos, com a maior malha aérea do país.",
    link: "https://chat.whatsapp.com/KhpmozmxVjb4pcA7tqLc7c",
    alt: "Skyline de São Paulo com a Ponte Estaiada ao anoitecer",
  },
  {
    id: "goiania-brasilia",
    name: "Goiânia e Brasília",
    airports: "GYN · BSB",
    description:
      "Saídas do Centro-Oeste, com as conexões que valem a pena para quem embarca em Goiânia ou Brasília.",
    link: "https://chat.whatsapp.com/LsiZMzJbUju9WyPjtdLlO7",
    alt: "Arquitetura modernista de Brasília",
  },
  {
    id: "petrolina",
    name: "Petrolina",
    airports: "PNZ",
    description: "Saídas de Petrolina e região do Vale do São Francisco.",
    link: "https://chat.whatsapp.com/KffHckm9HfDAjFcJS8FeQC",
    alt: "Vinhedos do Vale do São Francisco, região de Petrolina",
  },
] as const;

export const communityWaitlistMessage =
  "Olá! Gostaria de ser avisado quando abrir a comunidade de ofertas para a minha região de embarque. Eu embarco de: ";

/** Serviços que o cliente pode marcar no formulário (seleção múltipla). */
export const interestOptions = [
  "Passagens aéreas",
  "Hospedagem",
  "Resort / All Inclusive",
  "Cruzeiro",
  "Transfer",
  "Seguro viagem",
  "Aluguel de carros",
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

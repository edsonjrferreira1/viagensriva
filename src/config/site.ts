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
  { label: "Experiências", href: "#experiencias" },
  { label: "Cruzeiros", href: "/servicos/cruzeiros" },
  { label: "Hospedagens", href: "/servicos/hospedagens" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Comunidades", href: "/comunidades" },
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



/**
 * Bloco único "Experiências e destinos" — carrossel com foto.
 * Substitui os antigos blocos `experiences` (cards brancos) e `destinations`.
 * `image` é a chave do mapa `travelImages` em Sections.tsx.
 * `tripType` / `destination` / `interest` pré-selecionam o campo correspondente
 * no formulário de cotação quando o card é clicado.
 */
export const travelCards: {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  tripType?: string;
  destination?: string;
  interest?: string;
  /** Quando presente, o card leva para uma página de serviço. */
  href?: string;
}[] = [
  {
    id: "exp-resorts",
    name: "Resorts & All Inclusive",
    tag: "Experiência",
    description:
      "Dias sem logística: você chega, desacelera e aproveita tudo o que a hospedagem oferece.",
    image: "resort",
    interest: "Resort / All Inclusive",
    href: "/servicos/resorts-all-inclusive",
  },
  {
    id: "exp-cruzeiros",
    name: "Cruzeiros",
    tag: "Experiência",
    description:
      "A viagem começa a bordo: você dorme em um destino e acorda em outro, sem trocar de mala.",
    image: "cruise",
    interest: "Cruzeiro",
    href: "/servicos/cruzeiros",
  },
  {
    id: "hosp-hoteis-pousadas",
    name: "Hotéis e pousadas",
    tag: "Hospedagem",
    description:
      "Endereços escolhidos pela localização, pelo café da manhã e pela avaliação real de quem já se hospedou.",
    image: "hotel",
    interest: "Hospedagem",
    href: "/servicos/hospedagens",
  },
  {
    id: "hosp-flats",
    name: "Flats e apartamentos",
    tag: "Hospedagem",
    description:
      "Mais espaço, cozinha e autonomia para estadias de 7 noites ou mais, em família ou quando o roteiro pede uma base fixa.",
    image: "flat",
    interest: "Hospedagem",
    href: "/servicos/hospedagens",
  },
  {
    id: "hosp-premium",
    name: "Hospedagens premium",
    tag: "Hospedagem",
    description:
      "Suítes, vistas privilegiadas e atendimento diferenciado para ocasiões que pedem algo especial.",
    image: "premium",
    interest: "Hospedagem",
    href: "/servicos/hospedagens",
  },
  {
    id: "destinos-praia",
    name: "Destinos de praia",
    tag: "Sol e mar",
    description:
      "Sol, mar e dias de descanso: praias brasileiras e internacionais para desacelerar de verdade.",
    image: "beach",
    destination: "Praia",
  },
  {
    id: "destinos-montanha",
    name: "Destinos de montanha",
    tag: "Serra e natureza",
    description:
      "Clima agradável, natureza e charme para viajar em qualquer época do ano — inclusive no inverno.",
    image: "mountain",
    destination: "Montanha / natureza",
  },
  {
    id: "destinos-internacionais",
    name: "Destinos internacionais",
    tag: "Internacional",
    description:
      "Viagens fora do país com planejamento completo: aéreo, hospedagem, seguro, transfer e passeios.",
    image: "international",
    destination: "Internacional",
  },
  {
    id: "exp-familia",
    name: "Viagens em família",
    tag: "Experiência",
    description:
      "Voos, hospedagem, transporte, seguro e experiências planejados considerando adultos e crianças.",
    image: "family",
    tripType: "Família com crianças",
  },
  {
    id: "exp-casais",
    name: "Lua de mel & viagens a dois",
    tag: "Experiência",
    description:
      "Destinos e hospedagens para casais que querem comemorar uma data especial ou apenas descansar.",
    image: "couples",
    tripType: "Lua de mel",
  },
];



export const faq: {
  q: string;
  a: string;
  /** Perguntas marcadas aparecem no bloco resumido da home. */
  home?: boolean;
  link?: { label: string; to: string };
}[] = [
  {
    q: "Quais são as formas de pagamento?",
    home: true,
    a:
      "Trabalhamos com diferentes formas de pagamento.\n\n💳 Cartão de crédito: pacotes podem ter parcelamento em até 10x sem juros, conforme as condições disponíveis para a reserva.\n\n💰 Pix: pagamento à vista com possibilidade de desconto.\n\n📄 Boleto: disponível mediante análise de crédito, podendo haver opções de parcelamento em até 10 ou 12 vezes sem juros, de acordo com a aprovação e as condições disponíveis.\n\nAs condições exatas são apresentadas juntamente com cada cotação.",
  },
  {
    q: "Posso contratar somente alguns serviços ou preciso fechar um pacote completo?",
    home: true,
    a:
      "Você escolhe. Podemos cotar apenas passagens aéreas, apenas hospedagem, apenas seguro viagem ou transfer, por exemplo.\n\nTambém podemos montar a viagem completa, reunindo aéreo, hospedagem, transfer, seguro, aluguel de carro, passeios e experiências em uma única cotação.",
  },
  {
    q: "Vocês montam a viagem completa, do começo ao fim?",
    home: true,
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
    home: true,
    a:
      "Sim, porém as condições dependem das regras da tarifa, hospedagem, companhia aérea e demais serviços contratados.\n\nAlgumas tarifas permitem alteração ou cancelamento mediante multas e diferença tarifária, enquanto outras possuem condições mais restritivas.\n\nAntes da confirmação da reserva, apresentamos as principais regras aplicáveis.",
  },
  {
    q: "Com quanto tempo de antecedência é melhor reservar?",
    home: true,
    a:
      "Quanto maior a antecedência, normalmente maiores são as possibilidades de encontrar boas opções de voos, hospedagens e condições de pagamento.\n\nEm períodos de alta procura, como férias, feriados, réveillon e carnaval, recomendamos iniciar o planejamento com antecedência ainda maior.",
  },
  {
    q: "Os preços apresentados são fixos?",
    home: true,
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
    home: true,
    a:
      "Sim. O atendimento da Viagens Riva não termina após a reserva.\n\nNossa equipe auxilia com orientações antes da viagem e presta suporte relacionado aos serviços contratados sempre que necessário.",
  },
  {
    q: "Como faço para receber as promoções?",
    home: true,
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

/**
 * Páginas de serviço (/servicos/$slug).
 * Para criar uma página nova, basta acrescentar um bloco aqui — sem arquivo novo.
 */
export type ServicePage = {
  slug: string;
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  intro: [string, string];
  /** Chaves do mapa de imagens em src/routes/servicos.$slug.tsx */
  heroImage: string;
  photos: { image: string; alt: string }[];
  cards: { icon: string; title: string; text: string; to?: string }[];
  highlight?: { title: string; text: string };
  note: string;
  preselectInterest: string;
  serviceType: string;
};

export const servicePages: Record<string, ServicePage> = {
  cruzeiros: {
    slug: "cruzeiros",
    eyebrow: "Cruzeiros",
    h1: "Cruzeiros nacionais e internacionais",
    title: "Cruzeiros Nacionais e Internacionais | Viagens Riva",
    description:
      "Cruzeiros nacionais e internacionais com a Viagens Riva: roteiros, cabines, aéreo, transfer e seguro organizados em um único atendimento. Cotação sem compromisso.",
    intro: [cruiseIntro, cruiseIntroComplement],
    heroImage: "cruise",
    photos: [
      {
        image: "cruise",
        alt: "Navio de cruzeiro navegando em águas cristalinas com luz dourada do entardecer",
      },
      {
        image: "cruiseOnboard",
        alt: "Piscina e espreguiçadeiras no deck de um navio de cruzeiro ao entardecer",
      },
      {
        image: "cruiseDining",
        alt: "Jantar sofisticado a bordo com vista para o mar durante o pôr do sol",
      },
    ],
    cards: cruiseBenefits.map((b) => ({
      icon: b.icon,
      title: b.title,
      text: b.text,
    })),
    highlight: {
      title: "A viagem completa, não só o embarque.",
      text: `Organizamos também o que vem antes e depois do navio: ${cruiseExtras
        .join(" · ")
        .toLowerCase()}.`,
    },
    note: cruiseNote,
    preselectInterest: "Cruzeiro",
    serviceType: "Cruzeiros",
  },

  hospedagens: {
    slug: "hospedagens",
    eyebrow: "Hospedagens",
    h1: "Hospedagens para cada estilo de viagem",
    title:
      "Hospedagem para Viagem: Hotéis, Pousadas, Flats e Resorts | Viagens Riva",
    description:
      "Hotéis, pousadas pé na areia, flats, hotéis urbanos e hospedagens premium selecionados pela Viagens Riva conforme destino, perfil da viagem e investimento.",
    intro: [
      "De uma pousada pé na areia a um flat com cozinha para 15 noites, o tipo de hospedagem muda completamente a viagem. Selecionamos as opções pelo destino, pelo perfil de quem viaja e pelo investimento — e conferimos localização e avaliações recentes antes de indicar.",
      "Você não precisa saber de antemão qual formato faz mais sentido. Conte como é a viagem e nós apresentamos as opções que se encaixam, com os prós e contras de cada uma.",
    ],
    heroImage: "hotel",
    photos: [
      { image: "hotel", alt: "Hotel com piscina e área de convivência" },
      { image: "flat", alt: "Sala de estar de um flat com cozinha integrada" },
      { image: "premium", alt: "Suíte premium com vista privilegiada" },
    ],
    cards: [
      {
        icon: "bed",
        title: "Hotéis e pousadas",
        text: "Do bem localizado e econômico ao boutique de charme. Escolhemos pela localização real, pelo café da manhã e pela avaliação de quem já se hospedou.",
      },
      {
        icon: "palm",
        title: "Pousadas pé na areia",
        text: "Acesso direto à praia, sem depender de carro ou travessia. Ideal para quem quer acordar e já estar na areia.",
      },
      {
        icon: "home",
        title: "Flats e apartamentos",
        text: "Cozinha, lavanderia e mais espaço. Compensam a partir de 7 noites, em família ou quando o roteiro pede uma base fixa na cidade.",
      },
      {
        icon: "building",
        title: "Hotéis urbanos",
        text: "Para viagens a trabalho, city tour ou conexão longa. Prioridade para quem está perto do centro, do aeroporto ou do metrô.",
      },
      {
        icon: "sparkles",
        title: "Hospedagens premium",
        text: "Suítes, vistas privilegiadas e serviço personalizado, para aniversário, lua de mel ou uma data que pede algo diferente.",
      },
      {
        icon: "waves",
        title: "Resorts & All Inclusive",
        text: "Refeições, bebidas e lazer já resolvidos na hospedagem.",
        to: "/servicos/resorts-all-inclusive",
      },
    ],
    highlight: {
      title: "O que a gente confere antes de indicar",
      text: "Localização real no mapa e não só o nome do bairro · avaliações dos últimos meses, não as antigas · o que o café da manhã inclui de fato · política de cancelamento e de crianças · taxas cobradas no destino, que não aparecem no valor da reserva.",
    },
    note: "Café da manhã, horários de check-in e check-out, política para crianças e taxas locais variam conforme a hospedagem e a tarifa contratada. Confirmamos cada item antes de você fechar.",
    preselectInterest: "Hospedagem",
    serviceType: "Reserva de hospedagem",
  },

  "resorts-all-inclusive": {
    slug: "resorts-all-inclusive",
    eyebrow: "Resorts & All Inclusive",
    h1: "Resorts e All Inclusive no Brasil e no exterior",
    title: "Resort All Inclusive: Como Funciona e o Que Está Incluso | Viagens Riva",
    description:
      "Como funciona o regime all inclusive, o que costuma estar incluso, como se compara à pensão completa e meia pensão, e resorts no Brasil e no exterior com a Viagens Riva.",
    intro: [
      "All inclusive é o regime em que refeições, bebidas e boa parte do lazer já estão pagos antes de você embarcar. Na prática, é a viagem em que você não abre a carteira a cada decisão — e sabe quanto vai gastar antes de sair de casa.",
      'O que muda de um resort para outro é justamente o que está dentro do "tudo incluso". Abaixo está o que costuma entrar, o que varia, e como o all inclusive se compara aos outros regimes.',
    ],
    heroImage: "resort",
    photos: [
      { image: "resort", alt: "Vista aérea de um resort à beira-mar" },
      { image: "gastronomy", alt: "Mesa com pratos variados durante a viagem" },
      {
        image: "lazer",
        alt: "Piscina de borda infinita com espreguiçadeiras e paisagismo tropical",
      },
    ],
    cards: [
      {
        icon: "utensils",
        title: "O que costuma estar incluso",
        text: "Refeições no restaurante principal, bebidas não alcoólicas, acesso às piscinas e à programação de lazer e recreação do resort.",
      },
      {
        icon: "chef",
        title: "All inclusive x pensão completa x meia pensão",
        text: "All inclusive soma refeições, bebidas e lazer. Pensão completa é café, almoço e jantar, sem bebidas. Meia pensão é café mais uma refeição. Só café da manhã é o regime mais comum em hotel de cidade.",
      },
      {
        icon: "wine",
        title: "Bebidas: onde mora a diferença",
        text: "Alguns resorts incluem bebida alcoólica nacional, outros cobram à parte, e há os que separam rótulos premium. É o item que mais muda de um para outro.",
      },
      {
        icon: "waves",
        title: "Lazer e recreação",
        text: "Piscinas, esportes, atividades guiadas e programação noturna. Em alguns resorts o spa e passeios externos são cobrados separadamente.",
      },
      {
        icon: "users",
        title: "Kids club e famílias",
        text: "Recreação monitorada por faixa etária, cardápio infantil e estrutura de piscina para crianças. A idade atendida muda conforme o resort.",
      },
      {
        icon: "palm",
        title: "No Brasil e no exterior",
        text: "Cotamos resorts no litoral brasileiro e no exterior, incluindo Caribe e México, com aéreo, transfer e seguro organizados no mesmo atendimento.",
      },
    ],
    note: "Os serviços incluídos variam conforme o resort e o regime contratado. Antes de fechar, confirmamos por escrito o que está e o que não está incluso na sua reserva.",
    preselectInterest: "Resort / All Inclusive",
    serviceType: "Pacotes em resorts All Inclusive",
  },

  "pacotes-de-viagem": {
    slug: "pacotes-de-viagem",
    eyebrow: "Pacotes de viagem",
    h1: "Pacotes de viagem nacionais e internacionais",
    title: "Pacotes de Viagem Nacionais e Internacionais | Viagens Riva",
    description:
      "Pacotes de viagem nacionais e internacionais montados sob medida pela Viagens Riva: aéreo, hospedagem, transfer, seguro e passeios em um único orçamento.",
    intro: [
      "Pacote é quando aéreo, hospedagem e serviços chegam num orçamento só, já com as datas batendo entre si. Você não precisa fechar cada parte separada e torcer para tudo se encaixar.",
      "Nem todo pacote é fechado. A maior parte do que montamos é sob medida: você diz o destino, o período e o ritmo que quer, e a viagem é montada em cima disso.",
    ],
    heroImage: "aviao",
    photos: [
      { image: "aviao", alt: "Avião na pista de um aeroporto ao entardecer" },
      { image: "vacation", alt: "Destino de férias com paisagem aberta" },
      { image: "family", alt: "Família aproveitando a piscina durante a viagem" },
    ],
    cards: [
      {
        icon: "sparkles",
        title: "Pronto ou sob medida",
        text: "Pacotes de operadora costumam sair mais em conta em datas fixas. Sob medida, você escolhe hotel, categoria de voo e o que entra ou sai.",
      },
      {
        icon: "bed",
        title: "O que costuma entrar",
        text: "Aéreo, hospedagem e transfer são a base. Seguro, passeios, aluguel de carro e ingressos entram conforme a viagem.",
      },
      {
        icon: "map",
        title: "Nacional",
        text: "Litoral, serra, capitais e destinos de férias, com voos e hospedagem ajustados ao calendário de quem viaja.",
      },
      {
        icon: "plane",
        title: "Internacional",
        text: "Roteiros fora do país com documentação, seguro, transfer e passeios organizados junto, para você não descobrir pendência em cima da hora.",
      },
      {
        icon: "users",
        title: "Grupos e comemorações",
        text: "Aniversário, formatura, viagem de amigos ou família grande: o pacote muda quando são muitas pessoas, e a negociação também.",
      },
      {
        icon: "alert",
        title: "Quando o pacote compensa — e quando não",
        text: "Em alta temporada e destino com poucos voos, o pacote costuma sair melhor. Em viagem curta e com data flexível, às vezes vale separar. Falamos isso com você antes de fechar, não depois.",
      },
    ],
    highlight: {
      title: "Formas de pagamento facilitadas",
      text: "Trabalhamos com cartão de crédito parcelado, Pix à vista e boleto. As condições variam conforme o produto e o fornecedor, e são apresentadas junto com a proposta.",
    },
    note: "Valores, disponibilidade e serviços incluídos variam conforme período, destino, número de passageiros e fornecedor. Toda cotação é personalizada.",
    preselectInterest: "Passagens aéreas",
    serviceType: "Pacotes de viagem",
  },

  "passagens-aereas": {
    slug: "passagens-aereas",
    eyebrow: "Passagens aéreas",
    h1: "Passagens aéreas: bagagem, alterações e o que conferir antes de comprar",
    title: "Passagem Aérea: Regras de Bagagem e de Alteração | Viagens Riva",
    description:
      "Como funcionam bagagem, tipos de tarifa e alteração de passagem aérea. A Viagens Riva também emite passagens com as suas milhas, conforme as regras de cada programa.",
    intro: [
      "A maior parte dos problemas com passagem aérea não acontece no dia do voo: acontece na hora da compra, quando alguém escolhe a tarifa mais barata sem saber o que ela não inclui.",
      "Reunimos aqui o que costuma gerar dúvida e custar dinheiro depois — bagagem, tipo de tarifa e alteração. São as regras que a gente confere em toda emissão.",
    ],
    heroImage: "aviao",
    photos: [
      { image: "aviao", alt: "Vista do saguão de um aeroporto com avião na pista ao entardecer" },
      { image: "vacation", alt: "Destino de férias com paisagem aberta" },
      { image: "international", alt: "Destino internacional em dia de sol" },
    ],
    cards: [
      {
        icon: "luggage",
        title: "Bagagem de mão depende da tarifa, não do voo",
        text: "Em muitas tarifas promocionais, principalmente internacionais, entra apenas o item pessoal: a mochila que cabe embaixo do assento. A bagagem de mão no compartimento superior é um direito da tarifa, não do bilhete. Confira antes de comprar, não no embarque.",
      },
      {
        icon: "luggage",
        title: "Bagagem despachada: olhe o peso, não só a quantidade",
        text: "O que mais muda entre companhias e tarifas é o limite de peso por peça, e não apenas quantas peças você pode levar. Excesso é cobrado no balcão do aeroporto e sai bem mais caro do que contratar antes. Confirme o que o seu bilhete inclui.",
      },
      {
        icon: "ticket",
        title: "Tarifas: mudam as regras, e às vezes a cabine",
        text: "Dentro da mesma cabine, o assento é o mesmo: o que separa a tarifa barata da cara é bagagem, direito a remarcar, valor da multa e reembolso. Atenção: uma tarifa muito mais cara pode ser de outra cabine, como executiva ou premium economy — aí mudam assento, serviço e franquia de bagagem.",
      },
      {
        icon: "alert",
        title: "O preço da busca não é o preço final",
        text: "Bagagem, marcação de assento e taxas entram depois. Duas tarifas separadas por duzentos reais na tela podem terminar iguais, ou invertidas, depois de somar o despacho. É essa conta que fazemos antes de indicar uma opção.",
      },
      {
        icon: "users",
        title: "Assento marcado tem custo à parte",
        text: "Na maioria das tarifas econômicas, escolher assento é pago, e mais caro ainda nas fileiras de saída de emergência e de espaço extra. Viajando em família, isso costuma pesar mais no total do que a própria bagagem.",
      },
      {
        icon: "alert",
        title: "Alteração quase sempre tem custo",
        text: "Na maioria das tarifas, remarcar envolve a multa da companhia mais a diferença de tarifa, quando o novo voo estiver mais caro. Bilhetes flexíveis, que custam mais na compra, costumam não cobrar multa — mas a diferença de tarifa continua valendo. De um jeito ou de outro, alteração tem valor a pagar.",
      },
      {
        icon: "clock",
        title: "Peça a remarcação com antecedência",
        text: "As companhias têm prazo limite para aceitar mudança antes do embarque. Deixar para a última hora costuma transformar remarcação em passagem perdida, sem direito a nada.",
      },
      {
        icon: "shield",
        title: "Você tem 24 horas para desistir",
        text: "Se a passagem foi comprada com sete dias ou mais de antecedência em relação ao voo, existe o direito de cancelar sem custo em até 24 horas após a compra. Passado esse prazo, valem as regras da tarifa contratada.",
      },
      {
        icon: "alert",
        title: "O nome do bilhete precisa bater com o documento",
        text: "A passagem é emitida no nome do passageiro, e corrigir nome depois costuma ter taxa, quando a companhia aceita. Confira nome completo e documento antes de autorizar a emissão.",
      },
      {
        icon: "map",
        title: "Conexão: tempo e bagagem",
        text: "Quando o roteiro tem mais de uma companhia e os bilhetes não estão na mesma reserva, pode ser preciso retirar a mala e despachar de novo na conexão. Isso muda o tempo mínimo que você precisa deixar entre um voo e outro.",
      },
    ],
    highlight: {
      title: "Tem milhas paradas e não sabe como usar?",
      text: "Muita gente acumula milhas por anos e nunca emite, por não conhecer as regras do programa ou não saber quando vale a pena trocar. Podemos emitir sua passagem usando as suas próprias milhas, conforme o que cada programa permite, cobrando uma taxa de serviço combinada antes da emissão. Você acompanha o processo do início ao fim e recebe o bilhete em seu nome. Se fizer sentido, completamos a viagem com hospedagem, transfer, seguro e passeios.",
    },
    note: "Regras de bagagem, tarifa e alteração variam conforme a companhia aérea, o trecho e a tarifa contratada. Confirmamos cada item com você antes de emitir o bilhete.",
    preselectInterest: "Passagens aéreas",
    serviceType: "Emissão de passagens aéreas",
  },

  "seguro-viagem": {
    slug: "seguro-viagem",
    eyebrow: "Seguro viagem",
    h1: "Seguro viagem: o que a cobertura resolve",
    title: "Seguro Viagem: Tipos de Cobertura e Como Escolher | Viagens Riva",
    description:
      "O que o seguro viagem cobre: emergência médica, odontológico, bagagem, cancelamento e traslado. Entenda os tipos de apólice com a Viagens Riva.",
    intro: [
      "Seguro viagem é daquelas coisas que parecem custo até o dia em que deixam de ser. Uma consulta de emergência fora do país custa, sozinha, mais do que a apólice da viagem inteira.",
      "O que ele resolve depende inteiramente do tipo de cobertura contratada. Abaixo estão os itens que costumam aparecer nas apólices, para você saber o que perguntar.",
    ],
    heroImage: "seguro",
    photos: [
      { image: "seguro", alt: "Viajante consultando o celular no aeroporto" },
      { image: "aviao", alt: "Avião na pista de um aeroporto ao entardecer" },
      { image: "international", alt: "Destino internacional em dia de sol" },
    ],
    cards: [
      {
        icon: "shield",
        title: "Emergência médica e hospitalar",
        text: "Atendimento, exames e internação durante a viagem, dentro dos limites e das condições da apólice contratada.",
      },
      {
        icon: "sparkles",
        title: "Atendimento odontológico",
        text: "Emergências de dente, que costumam ficar de fora quando a pessoa contrata a cobertura mais básica sem olhar.",
      },
      {
        icon: "luggage",
        title: "Bagagem extraviada ou danificada",
        text: "Indenização quando a mala não chega, chega danificada ou atrasa, conforme o previsto na apólice.",
      },
      {
        icon: "alert",
        title: "Cancelamento e interrupção de viagem",
        text: "Ressarcimento quando a viagem precisa ser cancelada ou interrompida por motivo previsto em contrato.",
      },
      {
        icon: "map",
        title: "Traslado médico e traslado de corpo",
        text: "Remoção para outro hospital e, no caso mais grave, o traslado de volta. É a cobertura que ninguém quer usar e que mais pesa quando falta.",
      },
      {
        icon: "plane",
        title: "Nacional e internacional",
        text: "Existe apólice para viagem dentro do Brasil e para o exterior, com coberturas diferentes. Alguns destinos exigem seguro para permitir a entrada.",
      },
    ],
    note: "Tudo depende do tipo de cobertura contratada. Cada apólice tem limites, prazos, carências e exclusões próprios, informados antes da contratação. Nós ajudamos a comparar e a escolher.",
    preselectInterest: "Seguro viagem",
    serviceType: "Seguro viagem",
  },

  "transporte-no-destino": {
    slug: "transporte-no-destino",
    eyebrow: "Transporte no destino",
    h1: "Transfer e aluguel de carro no destino",
    title: "Transfer e Aluguel de Carro para Viagem | Viagens Riva",
    description:
      "Transfer de aeroporto, traslado privativo ou compartilhado e aluguel de carro no destino, organizados junto com a sua viagem pela Viagens Riva.",
    intro: [
      "Como você vai se locomover muda o roteiro inteiro. Um destino de praia com pontos espalhados pede carro. Uma capital com trânsito e estacionamento caro quase sempre não.",
      "Organizamos as duas coisas junto com a viagem, para você não desembarcar tendo que resolver transporte na hora, que é quando sai mais caro.",
    ],
    heroImage: "carro",
    photos: [
      { image: "carro", alt: "Carro em estrada litorânea com vista para o mar" },
      { image: "aviao", alt: "Avião na pista de um aeroporto ao entardecer" },
      { image: "vacation", alt: "Destino de férias com paisagem aberta" },
    ],
    cards: [
      {
        icon: "car",
        title: "Transfer aeroporto–hospedagem",
        text: "Motorista esperando no desembarque, com o trajeto já pago. Resolve principalmente a chegada de madrugada e a viagem com criança pequena ou muita bagagem.",
      },
      {
        icon: "users",
        title: "Privativo ou compartilhado",
        text: "O compartilhado sai mais em conta e para em outros hotéis no caminho. O privativo vai direto e costuma compensar a partir de três pessoas.",
      },
      {
        icon: "car",
        title: "Aluguel de carro: quando compensa",
        text: "Vale quando o roteiro tem vários pontos, praias distantes ou cidades próximas. Em capital grande, o custo de estacionamento costuma anular a vantagem.",
      },
      {
        icon: "alert",
        title: "O que conferir antes de retirar",
        text: "Habilitação válida, cartão de crédito no nome do condutor para o bloqueio de caução, e qual proteção está incluída. É onde mais gente se surpreende no balcão.",
      },
      {
        icon: "users",
        title: "Crianças e cadeirinha",
        text: "A cadeirinha é obrigatória por faixa etária e precisa ser reservada junto com o carro, porque a locadora tem quantidade limitada.",
      },
      {
        icon: "clock",
        title: "Combustível e pedágio",
        text: "Cada locadora tem uma política de devolução de tanque, e alguns roteiros têm pedágio que pesa. Vale considerar isso na comparação com o transfer.",
      },
    ],
    note: "Valores, políticas de proteção, caução e devolução variam conforme a locadora, a cidade e o período. Confirmamos as condições antes da reserva.",
    preselectInterest: "Transfer",
    serviceType: "Transfer e aluguel de carro",
  },

  "passeios-e-experiencias": {
    slug: "passeios-e-experiencias",
    eyebrow: "Passeios e experiências",
    h1: "Passeios e experiências no destino",
    title: "Passeios, Ingressos e Experiências no Destino | Viagens Riva",
    description:
      "Passeios guiados, ingressos de atrações e experiências locais reservados antecipadamente pela Viagens Riva, organizados junto com o restante da viagem.",
    intro: [
      "Passeio é o que a pessoa lembra depois. E é também o que mais fica de fora do planejamento, porque parece que dá para resolver no destino — até chegar e descobrir que a atração está esgotada para o dia.",
      "Reservamos os passeios junto com a viagem, encaixados no roteiro e nos horários de voo, para você não perder um dia inteiro por causa de fila ou de disponibilidade.",
    ],
    heroImage: "passeio",
    photos: [
      { image: "passeio", alt: "Grupo pequeno em passeio guiado ao ar livre no fim da tarde" },
      { image: "gastronomy", alt: "Mesa com pratos variados durante a viagem" },
      { image: "vacation", alt: "Destino de férias com paisagem aberta" },
    ],
    cards: [
      {
        icon: "ticket",
        title: "Reservar antes ou no destino",
        text: "Reservar antes garante data, horário e costuma sair mais barato. No destino você ganha flexibilidade, mas depende do que sobrou.",
      },
      {
        icon: "clock",
        title: "Ingressos e atrações com fila",
        text: "Parques, museus e atrações concorridas trabalham com horário marcado e esgotam em alta temporada. Esse é o item que mais frustra quando fica para depois.",
      },
      {
        icon: "users",
        title: "Privativo ou em grupo",
        text: "O passeio em grupo é mais econômico e tem horário fixo. O privativo permite ajustar o ritmo, e faz diferença com criança pequena ou idoso no roteiro.",
      },
      {
        icon: "utensils",
        title: "Gastronomia e experiências locais",
        text: "Passeios de comida, visitas a produtores e experiências que mostram o destino por dentro, além dos pontos turísticos.",
      },
      {
        icon: "map",
        title: "Encaixe no roteiro",
        text: "Um passeio de dia inteiro no dia do voo de volta não funciona. Montamos a ordem considerando horário de chegada, distância e o cansaço de cada dia.",
      },
      {
        icon: "alert",
        title: "Alta temporada",
        text: "Em feriado e férias escolares, os passeios esgotam antes das hospedagens. Quando a viagem é nesse período, é o primeiro item que a gente trava.",
      },
    ],
    note: "Disponibilidade, horários e valores dos passeios variam conforme o destino, a época e o operador local. Confirmamos tudo antes da reserva.",
    preselectInterest: "Passeios e experiências",
    serviceType: "Passeios e experiências",
  },
};

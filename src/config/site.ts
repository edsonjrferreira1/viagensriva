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
  { emoji: "✈️", label: "Passagens aéreas" },
  { emoji: "🏨", label: "Hospedagens" },
  { emoji: "🚢", label: "Cruzeiros" },
  { emoji: "🚗", label: "Aluguel de carros" },
  { emoji: "🛡️", label: "Seguro viagem" },
  { emoji: "🚐", label: "Transfer" },
  { emoji: "🎯", label: "Passeios e experiências" },
];

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
  { label: "Cotação", href: "#cotacao" },
  { label: "Dúvidas", href: "#faq" },
];

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
    q: "O que é um resort All Inclusive?",
    a: "É um regime de hospedagem que inclui, conforme as regras de cada resort, refeições, bebidas, lazer e outras atividades. Cada estabelecimento define o que está incluído, os horários e as condições vigentes.",
  },
  {
    q: "Posso contratar somente hospedagem?",
    a: "Sim. É possível solicitar cotação somente da hospedagem, com o regime que você preferir.",
  },
  {
    q: "Também posso incluir passagem aérea?",
    a: "Sim. Podemos preparar uma cotação incluindo hospedagem e passagem aérea, além de outros serviços.",
  },
  {
    q: "Posso viajar com crianças?",
    a: "Sim. Trabalhamos com resorts que possuem estrutura e experiências voltadas também para famílias com crianças.",
  },
  {
    q: "É possível parcelar?",
    a: "As condições de pagamento disponíveis serão apresentadas juntamente com a cotação personalizada.",
  },
  {
    q: "Os preços apresentados são fixos?",
    a: "Não. As tarifas dependem do período, ocupação, disponibilidade e condições vigentes no momento da reserva.",
  },
  {
    q: "É possível incluir transfer?",
    a: "Sim. Consulte disponibilidade para incluir transfer, seguro viagem e outros serviços na sua viagem.",
  },
];

export const interestOptions = [
  "Hospedagem",
  "Hospedagem + passagem aérea",
  "All Inclusive",
  "Transfer",
  "Seguro viagem",
  "Passeios",
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

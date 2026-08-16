/**
 * Configuração central da landing page.
 * Altere aqui: WhatsApp, dados da agência, números do resort, restaurantes, textos e CTAs.
 */

export const agency = {
  name: "Viagens Riva",
  legal: "Agência de Viagens",
  cnpj: "52.272.137/0001-07",
  cadastur: "Agência cadastrada no Cadastur",
  whatsappNumber: "5562982179433",
  whatsappDisplay: "(62) 98217-9433",
};

export const resort = {
  name: "SERHS Natal Grand Hotel & Resort",
  shortName: "SERHS Natal",
  city: "Natal/RN",
  address: "Via Costeira, Natal — Rio Grande do Norte",
  mapEmbed:
    "https://www.google.com/maps?q=Via+Costeira,+Natal+-+RN&output=embed",
  stats: {
    restaurants: "6",
    bars: "4",
    pools: "4",
  },
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${agency.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultWhatsappMessage =
  "Olá! Vi a página do SERHS Natal e gostaria de receber uma cotação.";

export const navItems = [
  { label: "O Resort", href: "#resort" },
  { label: "SERHS Inclusive", href: "#serhs-inclusive" },
  { label: "Gastronomia", href: "#gastronomia" },
  { label: "Piscinas e Lazer", href: "#lazer" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Famílias", href: "#familias" },
  { label: "Localização", href: "#localizacao" },
  { label: "Dúvidas", href: "#faq" },
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
    text: "Experiências em restaurantes participantes do SERHS Inclusive.",
  },
];

export const restaurants = [
  { name: "Potiguar", note: "Sabores regionais e buffet variado" },
  { name: "Renato Romagnoni", note: "Inspiração italiana" },
  { name: "Jangada", note: "Ambiente descontraído à beira das piscinas" },
  { name: "Tapiro Grill", note: "Carnes e churrasco" },
  { name: "Marenostrum", note: "Frutos do mar e cozinha mediterrânea" },
  { name: "SERUTZU Japanese Restaurant", note: "Culinária japonesa" },
];

export const leisureCards = [
  "Piscinas",
  "Praia",
  "Lazer",
  "Recreação",
  "Kids Club",
  "Relaxamento",
  "SPA",
];

/** Acomodações — estrutura pronta para receber as categorias oficiais. */
export const accommodations = [
  {
    name: "Categoria a consultar",
    capacity: "Ocupação sob consulta",
    description:
      "Quartos e suítes confortáveis para descansar depois de um dia inteiro de férias. Consulte as categorias disponíveis para as suas datas.",
  },
  {
    name: "Opção para casais",
    capacity: "Ocupação sob consulta",
    description:
      "Acomodações pensadas para quem quer descansar a dois, com o mar sempre por perto.",
  },
  {
    name: "Opção para famílias",
    capacity: "Ocupação sob consulta",
    description:
      "Espaço para acomodar adultos e crianças com conforto durante toda a estadia.",
  },
];

export const faq = [
  {
    q: "O SERHS Natal é All Inclusive?",
    a: "O resort possui o regime SERHS Inclusive, que oferece uma experiência ampla de alimentação e bebidas conforme os cardápios, restaurantes, horários e condições vigentes para a hospedagem.",
  },
  {
    q: "Posso contratar somente hospedagem?",
    a: "Sim. É possível solicitar cotação somente da hospedagem.",
  },
  {
    q: "Também posso incluir passagem aérea?",
    a: "Sim. Podemos preparar uma cotação incluindo hospedagem e passagem aérea.",
  },
  {
    q: "Posso viajar com crianças?",
    a: "Sim. O resort possui estrutura e experiências voltadas também para famílias com crianças.",
  },
  {
    q: "É possível parcelar?",
    a: "As condições de pagamento disponíveis serão apresentadas juntamente com a cotação.",
  },
  {
    q: "Os preços apresentados são fixos?",
    a: "Não. As tarifas dependem do período, ocupação, disponibilidade e condições vigentes no momento da reserva.",
  },
  {
    q: "É possível incluir transfer?",
    a: "Sim. Consulte disponibilidade para incluir transfer e outros serviços na sua viagem.",
  },
];

export const interestOptions = [
  "Hospedagem",
  "Hospedagem + passagem aérea",
  "SERHS Inclusive",
  "Transfer",
  "Seguro viagem",
];

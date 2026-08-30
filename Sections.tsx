import { Button } from "@/components/ui/button";
import {

  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  UtensilsCrossed,
  Wine,
  ChefHat,
  Sparkles,
  Waves,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Plane,
  MapPinned,
  BedDouble,
  Ship,
  Car,
  BusFront,
  Users,
  Heart,
  Luggage,
  Palmtree,
  Star,
  Instagram,
  ArrowRight,
  Snowflake,
  Mountain,
  type LucideIcon,
} from "lucide-react";

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./Section";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  accommodations,
  agency,
  cruiseBenefits,
  cruiseExtras,
  cruiseIntro,
  cruiseIntroComplement,
  cruiseNote,
  destinations,
  experiences,
  expert,
  faq,
  googleReviews,
  inclusiveBenefits,
  whatsappLink,
  defaultWhatsappMessage,
} from "@/config/site";

import expertImg from "@/assets/edson-ferreira.jpg";
import cruiseImg from "@/assets/cruise-premium.jpg";
import cruiseOnboardImg from "@/assets/cruise-onboard.jpg";
import cruiseDiningImg from "@/assets/cruise-dining.jpg";

/** Pré-seleciona serviço, destino ou tipo de viagem no formulário de cotação. */
function preselect(detail: {
  interest?: string;
  destination?: string;
  tripType?: string;
}) {
  window.dispatchEvent(new CustomEvent("riva:preselect", { detail }));
}

function preselectInterest(option: string) {
  preselect({ interest: option });
}


import desire1 from "@/assets/desire-mosaic-1.webp";
import desire2 from "@/assets/desire-mosaic-2.webp";
import lazerImg from "@/assets/lazer-premium.jpg";
import gastro from "@/assets/gastronomy-1.webp";
import hospHotel from "@/assets/hosp-hoteis-pousadas.jpg";
import hospFlat from "@/assets/hosp-flats.jpg";
import hospPremium from "@/assets/hosp-premium.jpg";
import spa from "@/assets/spa-wellness.webp";
import destMountain from "@/assets/destination-mountain.webp";
import destInternational from "@/assets/destination-international.webp";
import agentImg from "@/assets/agent-placeholder.webp";
import panorama from "@/assets/final-cta.webp";
import servicosImg from "@/assets/servicos-completos.webp";


const destinationImages = [desire2, destMountain, destInternational, desire1];

const experienceIcons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  users: Users,
  heart: Heart,
  luggage: Luggage,
  ship: Ship,
  palm: Palmtree,
  snowflake: Snowflake,
  mountain: Mountain,
  utensils: UtensilsCrossed,
};

const benefitIcons: Record<string, LucideIcon> = {
  chef: ChefHat,
  wine: Wine,
  waves: Waves,
  sparkles: Sparkles,
  utensils: UtensilsCrossed,
};

/**
 * Cada experiência aponta para o bloco de conteúdo correspondente.
 * "Cultura & gastronomia" não tem bloco próprio: vai direto ao formulário.
 */
const experienceLinks: Record<
  string,
  { href: string; cta: string; preselect?: Parameters<typeof preselect>[0] }
> = {
  "Resorts & All Inclusive": { href: "#resorts", cta: "Conhecer essa experiência" },
  Cruzeiros: { href: "#cruzeiros", cta: "Conhecer essa experiência" },
  "Férias nacionais e internacionais": { href: "#destinos", cta: "Conhecer essa experiência" },
  "Praia & descanso": { href: "#destinos-praia", cta: "Conhecer essa experiência" },
  "Lua de mel": {
    href: "#cotacao",
    cta: "Conhecer essa experiência",
    preselect: { tripType: "Lua de mel" },
  },
  "Viagens em família": {
    href: "#cotacao",
    cta: "Conhecer essa experiência",
    preselect: { tripType: "Família com crianças" },
  },
  "Viagens a dois": {
    href: "#cotacao",
    cta: "Conhecer essa experiência",
    preselect: { tripType: "Casal" },
  },
  "Neve & inverno": { href: "#destinos-montanha", cta: "Conhecer essa experiência" },
  "Natureza & aventura": { href: "#destinos-montanha", cta: "Conhecer essa experiência" },
  "Cultura & gastronomia": {
    href: "#cotacao",
    cta: "Conhecer essa experiência",
    preselect: {
      interest: "Passeios e experiências",
      destination: "Cultura & gastronomia",
    },
  },
};

export function ExperiencesSection() {
  return (
    <Section id="experiencias">
      <SectionHeading
        align="center"
        eyebrow="Formas de viajar"
        title="Escolha como quer viajar. A gente cuida do resto."
        subtitle="Você escolhe a experiência e a Viagens Riva organiza os serviços necessários para transformar o planejamento em viagem."
      />

      <p className="mt-7 text-center text-xs uppercase tracking-[0.24em] text-foreground/60">
        Como você quer viajar?
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {experiences.map((exp) => {
          const Icon = experienceIcons[exp.icon] ?? Sparkles;
          const link = experienceLinks[exp.name] ?? {
            href: "#cotacao",
            cta: "Conhecer essa experiência",
          };
          return (
            <a
              key={exp.name}
              href={link.href}
              onClick={() => link.preselect && preselect(link.preselect)}
              className="group flex h-full flex-col rounded-3xl border border-primary/15 bg-card p-4 shadow-soft transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary">
                <Icon className="size-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-3 min-h-[2.9rem] text-base leading-snug text-primary line-clamp-2">
                {exp.name}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-foreground/75">
                {exp.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition group-hover:text-gold">
                {link.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </a>
          );
        })}
      </div>


      {/* Faixa compacta de serviços */}
      <div
        id="servicos"
        className="mt-8 scroll-mt-[104px] rounded-3xl border border-primary/15 bg-secondary/60 px-6 py-8 sm:px-10"
      >
        <h3 className="text-center font-display text-2xl text-primary sm:text-[1.7rem]">
          Podemos cuidar de cada etapa da sua viagem.
        </h3>

        <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {travelServices.map((s) => (
            <li
              key={s.title}
              className="flex flex-col items-center gap-2 px-2 text-center lg:border-r lg:border-primary/15 lg:last:border-r-0"
            >
              <s.icon className="size-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-sm leading-snug text-foreground/85">{s.title}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-foreground/70">
          Você pode contratar apenas o que precisa ou montar uma viagem completa em
          um único atendimento.
        </p>
      </div>

    </Section>
  );
}

const cruiseIcons: Record<string, LucideIcon> = {
  map: MapPinned,
  bed: BedDouble,
  sparkles: Sparkles,
  users: Users,
  ship: Ship,
};

export function CruisesSection() {
  return (
    <Section id="cruzeiros">
      <div className="grid items-stretch gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Cruzeiros"
            title="Uma viagem. Vários destinos."
            subtitle={cruiseIntro}
          />
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">
            {cruiseIntroComplement}
          </p>

          <div className="mt-8 grid gap-3 lg:hidden">
            <img
              src={cruiseImg}
              alt="Navio de cruzeiro navegando em águas cristalinas com luz dourada do entardecer"
              width={1600}
              height={1067}
              loading="lazy"
              decoding="async"
              className="h-56 w-full rounded-3xl object-cover shadow-lift sm:h-72"
            />
            <div className="grid grid-cols-2 gap-3">
              <img
                src={cruiseOnboardImg}
                alt="Piscina e espreguiçadeiras no deck de um navio de cruzeiro ao entardecer"
                width={1408}
                height={1008}
                loading="lazy"
                decoding="async"
                className="h-32 w-full rounded-2xl object-cover shadow-soft sm:h-40"
              />
              <img
                src={cruiseDiningImg}
                alt="Jantar sofisticado a bordo com vista para o mar durante o pôr do sol"
                width={1408}
                height={1008}
                loading="lazy"
                decoding="async"
                className="h-32 w-full rounded-2xl object-cover shadow-soft sm:h-40"
              />
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {cruiseBenefits.map((b) => {
              const Icon = cruiseIcons[b.icon] ?? Ship;
              return (
                <li
                  key={b.title}
                  className="rounded-2xl border border-border bg-card px-5 py-3 shadow-soft"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="size-5 shrink-0 text-gold" aria-hidden="true" />
                    <span className="text-sm font-medium text-primary">{b.title}</span>
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    {b.text}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 rounded-2xl border border-primary/15 bg-secondary/60 px-5 py-4">
            <p className="text-sm leading-relaxed text-foreground/80">
              <span className="font-medium text-primary">
                A viagem completa, não só o embarque.
              </span>{" "}
              Organizamos também o que vem antes e depois do navio:{" "}
              {cruiseExtras.join(" · ").toLowerCase()}.
            </p>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-foreground/70">
            {cruiseNote}
          </p>

          <Button asChild variant="gold" size="xl" className="mt-6">
            <a href="#cotacao" onClick={() => preselectInterest("Cruzeiro")}>
              Quero cotar um cruzeiro
            </a>
          </Button>
        </div>

        <div className="hidden h-full min-h-[520px] grid-rows-[1.35fr_1fr] gap-4 lg:grid">
          <img
            src={cruiseImg}
            alt="Navio de cruzeiro navegando em águas cristalinas com luz dourada do entardecer"
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src={cruiseOnboardImg}
              alt="Piscina e espreguiçadeiras no deck de um navio de cruzeiro ao entardecer"
              width={1408}
              height={1008}
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-3xl object-cover shadow-lift"
            />
            <img
              src={cruiseDiningImg}
              alt="Jantar sofisticado a bordo com vista para o mar durante o pôr do sol"
              width={1408}
              height={1008}
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
        </div>
      </div>

    </Section>
  );
}

export function AccommodationsSection() {
  return (
    <Section id="hospedagens">
      <SectionHeading
        align="center"
        eyebrow="Hospedagens"
        title="Hospedagens para cada estilo de viagem"
        subtitle="De hotéis e pousadas a resorts completos e experiências All Inclusive, selecionamos opções de acordo com o destino, perfil da viagem e investimento desejado."
      />

      {/* Destaque: Resorts & All Inclusive */}
      <div
        id="resorts"
        className="mt-8 scroll-mt-[104px] overflow-hidden rounded-3xl surface-deep shadow-lift"
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-champagne">Uma das nossas especialidades</p>
            <h3 className="mt-3 font-display text-3xl leading-tight text-sand sm:text-4xl">
              Resorts &amp; All Inclusive
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Férias sem logística: gastronomia, bebidas, piscinas e recreação já
              resolvidos na hospedagem, no Brasil ou no exterior.
            </p>

            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {inclusiveBenefits.map((b) => {
                const Icon = benefitIcons[b.icon] ?? Sparkles;
                return (
                  <li
                    key={b.title}
                    className="flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm"
                  >
                    <Icon className="size-5 shrink-0 text-gold" aria-hidden="true" />
                    <span className="text-sm text-white">{b.title}</span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-4 text-xs leading-relaxed text-white/80">
              Os serviços incluídos variam conforme o resort e o regime contratado.
            </p>

            <Button asChild variant="gold" size="xl" className="mt-6">
              <a
                href="#cotacao"
                onClick={() => preselectInterest("Resort / All Inclusive")}
              >
                Quero conhecer opções All Inclusive
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={gastro}
              alt="Mesa com pratos variados durante uma viagem"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-40 w-full rounded-2xl object-cover shadow-lift sm:h-52"
            />
            <img
              src={lazerImg}
              alt="Piscina de borda infinita com espreguiçadeiras e paisagismo tropical"
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-40 w-full rounded-2xl object-cover shadow-lift sm:h-52"
            />
          </div>
        </div>
      </div>

      <Carousel
        opts={{ align: "start", containScroll: "trimSnaps" }}
        className="mt-8"
      >
        <CarouselContent className="-ml-4">
        {accommodations.map((a, i) => {
          const media = [
            {
              src: hospHotel,
              alt: "Fachada iluminada de pousada de charme com varanda de madeira e jardim tropical ao entardecer",
            },
            {
              src: hospFlat,
              alt: "Flat com sala integrada, mesa de jantar e cozinha completa, com grande janela e vista da cidade",
            },
            {
              src: hospPremium,
              alt: "Suíte de alto padrão com piscina privativa e vista para o mar ao pôr do sol",
            },
          ][i] ?? { src: hospHotel, alt: `Hospedagem — ${a.name}` };
          return (
          <CarouselItem
            key={a.name}
            className="basis-[82%] pl-4 sm:basis-1/2 lg:basis-1/3"
          >
          <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:border-gold/50">
            <img
              src={media.src}
              alt={media.alt}
              width={1200}
              height={912}
              loading="lazy"
              decoding="async"
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-xl text-primary">{a.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/70">
                {a.capacity}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                {a.description}
              </p>
            </div>
            <a
              href="#cotacao"
              onClick={() => preselectInterest("Hospedagem")}
              aria-label={`Consultar disponibilidade — ${a.name}`}
              className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            />
          </article>
          </CarouselItem>
          );
        })}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </Section>
  );
}

export function DestinationsSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;

    const revealAnchoredDestination = () => {
      const destinationId = decodeURIComponent(window.location.hash.slice(1));
      const destinationIndex = destinations.findIndex(
        (destination) => destination.id === destinationId,
      );

      if (destinationIndex >= 0) {
        carouselApi.scrollTo(destinationIndex);
      }
    };

    revealAnchoredDestination();
    window.addEventListener("hashchange", revealAnchoredDestination);

    return () => window.removeEventListener("hashchange", revealAnchoredDestination);
  }, [carouselApi]);

  return (
    <Section id="destinos" tone="sand">
      <SectionHeading
        align="center"
        eyebrow="Destinos"
        title="Para onde você quer viajar?"
        subtitle="Do Brasil ao exterior, ajudamos você a encontrar a experiência ideal para as suas próximas férias."
      />

      <Carousel
        opts={{ align: "start", containScroll: "trimSnaps" }}
        setApi={setCarouselApi}
        className="mt-8"
      >
        <CarouselContent className="-ml-4">
        {destinations.map((d, i) => {
          const img = destinationImages[i % destinationImages.length];
          return (
            <CarouselItem
              key={d.name}
              id={d.id}
              className="scroll-mt-[104px] basis-[82%] pl-4 sm:basis-1/2 lg:basis-1/3"
            >
            <article
              className="group relative flex h-full overflow-hidden rounded-3xl border border-white/15 shadow-soft transition hover:border-gold/50"
            >
              <img
                src={img}
                alt={`Destino — ${d.name}`}
                width={1200}
                height={900}
                loading="lazy"
        decoding="async"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-gold">
                  {d.tag}
                </span>
                <h3 className="mt-2 text-2xl text-white">{d.name}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90">
                  {d.description}
                </p>

              </div>
              <a
                href="#cotacao"
                onClick={() => preselect({ destination: d.preference })}
                aria-label={`Quero receber opções de ${d.name}`}
                className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              />
            </article>
            </CarouselItem>
          );
        })}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>

      <div className="mt-8 text-center">
        <Button asChild variant="gold" size="xl">
          <a href="#cotacao">Quero receber opções</a>
        </Button>
      </div>
    </Section>
  );
}

const travelServices = [
  { icon: Plane, title: "Passagens aéreas" },
  { icon: BedDouble, title: "Hospedagens" },
  { icon: BusFront, title: "Transfer" },
  { icon: ShieldCheck, title: "Seguro viagem" },
  { icon: Car, title: "Aluguel de carros" },
  { icon: MapPinned, title: "Passeios e experiências" },
];





export function GoogleRatingBadge() {
  return (
    <div className="border-b border-primary/10 bg-secondary px-4 py-5 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
        <a
          href={googleReviews.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-primary/20 bg-card px-6 py-3 text-center shadow-soft transition hover:border-gold/70"
        >
          <Stars />
          <span className="text-sm font-medium text-primary sm:text-base">
            {googleReviews.rating} no Google
          </span>
          <span className="text-sm text-foreground/80">
            · {googleReviews.count} avaliações reais
          </span>
        </a>
        <span className="flex items-center gap-2 rounded-full border border-primary/20 bg-card px-5 py-3 text-sm text-foreground/85 shadow-soft">
          <ShieldCheck className="size-4 text-teal" aria-hidden="true" />
          Agência regularizada · CNPJ {agency.cnpj}
        </span>
        <span className="flex items-center gap-2 rounded-full border border-primary/20 bg-card px-5 py-3 text-sm text-foreground/85 shadow-soft">
          <BadgeCheck className="size-4 text-teal" aria-hidden="true" />
          {agency.cadastur}
        </span>
      </div>
    </div>
  );
}



export function ExpertSection() {
  return (
    <Section id="sobre">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-border bg-card p-3 shadow-lift">
            <img
              src={expertImg}
              alt={`${expert.name}, responsável pela ${agency.name}`}
              width={900}
              height={1125}
              loading="lazy"
        decoding="async"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Quem cuida da sua viagem"
            title={expert.name}
            subtitle={expert.bio}
          />
          <p className="mt-4 text-sm text-foreground/80">
            {expert.role}
          </p>

          <p className="mt-6 text-sm leading-relaxed text-foreground/80">
            A Viagens Riva organiza viagens nacionais e internacionais, do
            planejamento aos principais serviços necessários para a experiência.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, text: `CNPJ ${agency.cnpj}` },
              { icon: BadgeCheck, text: agency.cadastur },
            ].map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-card px-4 py-3 shadow-soft"
              >
                <item.icon className="size-[18px] shrink-0 text-teal" aria-hidden="true" />
                <span className="text-sm text-foreground/85">{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="cta" size="xl">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com o Edson
              </a>
            </Button>

            <Button asChild variant="outline" size="xl">
              <a
                href={agency.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="size-[18px]" strokeWidth={1.5} />
                {agency.instagramHandle}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}



export function WhyRivaSection() {
  const cards = [
    {
      icon: Headphones,
      t: "Atendimento humano, não robô",
      d: "Você fala com quem entende de viagem e conhece o seu roteiro — sem chatbot e sem fila de call center.",
    },
    {
      icon: BadgeCheck,
      t: "Suporte antes, durante e depois",
      d: "Acompanhamos a viagem do planejamento ao retorno, inclusive se algo mudar no meio do caminho.",
    },
    {
      icon: ShieldCheck,
      t: "Agência regularizada",
      d: `CNPJ ${agency.cnpj} e cadastro no Cadastur: contratação com respaldo legal.`,
    },
    {
      icon: Plane,
      t: "Cotação sem compromisso",
      d: "Opções montadas pelo seu perfil de viajante e pelo seu ritmo de decisão, sem pressão de compra.",
    },
  ];

  return (
    <Section id="diferenciais" tone="sand">
      <SectionHeading
        align="center"
        eyebrow="Por que a Viagens Riva"
        title="A diferença entre reservar sozinho e viajar acompanhado"
        subtitle="O que você ganha ao planejar com uma agência de verdade em vez de fechar tudo por conta própria em um site."
      />

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.t}
            className="rounded-2xl border border-primary/15 bg-card p-5 shadow-soft"
          >
            <c.icon className="size-6 text-teal" aria-hidden="true" />
            <h3 className="mt-4 text-lg text-primary">{c.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">{c.d}</p>
          </div>
        ))}
      </div>

    </Section>
  );
}


export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeading
        align="center"
        eyebrow="Dúvidas"
        title="Perguntas frequentes"
        subtitle="Esclarecemos as principais dúvidas sobre pagamento, documentação, prazos e serviços para você planejar sua viagem com tranquilidade."
      />
      <Accordion type="single" collapsible className="mx-auto mt-8 max-w-3xl">
        {faq.filter((item) => item.home).map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display text-lg font-normal text-primary">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="whitespace-pre-line text-sm leading-relaxed text-foreground/85">
              {item.a}
              {item.link && (
                <Link
                  to={item.link.to}
                  className="mt-3 inline-flex font-medium text-teal underline underline-offset-4"
                >
                  {item.link.label}
                </Link>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mx-auto mt-6 max-w-3xl text-center">
        <Link
          to="/duvidas"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline underline-offset-4 transition hover:text-gold"
        >
          Ver todas as dúvidas
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-primary/15 bg-card p-6 text-center shadow-soft">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-foreground/75">
          Ainda ficou com alguma dúvida?
        </p>

        <h3 className="mt-3 font-display text-2xl text-primary sm:text-3xl">
          Nossa equipe pode ajudar você a planejar sua viagem.
        </h3>
        <Button asChild variant="cta" size="xl" className="mt-6">
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a Viagens Riva
          </a>
        </Button>

      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={panorama}
        alt="Praia tropical ao pôr do sol"
        width={1920}
        height={1080}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/75" />
      <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
        <h2 className="text-3xl leading-tight text-white sm:text-5xl">
          Vamos começar a planejar sua próxima viagem?
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-white/95 sm:text-base">
          Conte para a Viagens Riva o que você está procurando e receba uma
          cotação personalizada.
        </p>
        <Button asChild variant="gold" size="xl" className="mt-8">
          <a href="#cotacao">Quero minha cotação</a>
        </Button>
      </div>
    </section>

  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-gold text-gold" />
      ))}
    </span>
  );
}

export function TestimonialsSection() {
  return (
    <Section id="avaliacoes" tone="sand">
      <SectionHeading
        align="center"
        eyebrow="Prova social"
        title="Quem viaja com a gente, recomenda."
        subtitle="Experiências reais de clientes que confiaram suas viagens à Viagens Riva."
      />

      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-4 rounded-full border border-primary/20 bg-card px-6 py-3 shadow-lift">
          <Stars />
          <span className="text-lg font-medium text-primary">
            {googleReviews.rating} no Google
          </span>
          <span className="text-sm text-foreground/80">
            {googleReviews.count} avaliações
          </span>
        </div>
      </div>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-foreground/75">
        <BadgeCheck className="size-3.5 text-primary" aria-hidden="true" />
        Avaliações reais publicadas no Google
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {googleReviews.items.map((r) => (
          <figure
            key={r.author}
            className="flex h-full flex-col rounded-2xl border border-primary/20 bg-card p-6 shadow-lift"
          >
            <Stars />
            <p className="mt-5 font-display text-xl italic leading-snug text-primary">
              “{r.highlight}”
            </p>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
              {r.text}
            </blockquote>
            <figcaption className="mt-6 border-t border-primary/15 pt-4">
              <span className="block text-sm font-medium text-primary">
                {r.author}
              </span>
            </figcaption>

          </figure>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="navy" size="xl">
          <a
            href={googleReviews.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais avaliações no Google
          </a>
        </Button>
      </div>
    </Section>
  );
}

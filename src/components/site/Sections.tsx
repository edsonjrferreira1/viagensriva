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
  type LucideIcon,
} from "lucide-react";

import { Section, SectionHeading } from "./Section";
import {
  accommodations,
  agency,
  destinations,
  experiences,
  expert,
  faq,
  googleReviews,
  inclusiveBenefits,
  leisureCards,
  
} from "@/config/site";

import expertImg from "@/assets/edson-ferreira.jpg.asset.json";
import cruiseImg from "@/assets/cruzeiro.jpg";

/** Pré-seleciona um serviço no formulário de cotação. */
function preselectInterest(option: string) {
  window.dispatchEvent(new CustomEvent("riva:preselect-interest", { detail: option }));
}


import desire1 from "@/assets/desire-mosaic-1.webp";
import desire2 from "@/assets/desire-mosaic-2.webp";
import desire3 from "@/assets/desire-mosaic-3.webp";
import lazerImg from "@/assets/lazer-premium.jpg.asset.json";
import gastro from "@/assets/desire-mosaic-3.webp";
import family from "@/assets/family-pool.webp";
import couples from "@/assets/couples-dinner.webp";
import room from "@/assets/room-suite.webp";
import spa from "@/assets/spa-wellness.webp";
import destBeach from "@/assets/destination-beach.webp";
import destMountain from "@/assets/destination-mountain.webp";
import destInternational from "@/assets/destination-international.webp";
import destVacation from "@/assets/destination-vacation.webp";
import agentImg from "@/assets/agent-placeholder.webp";
import panorama from "@/assets/final-cta.webp";
import servicosImg from "@/assets/servicos-completos.webp";


const destinationImages = [destBeach, destMountain, destInternational, destVacation];

const experienceIcons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  users: Users,
  heart: Heart,
  luggage: Luggage,
  ship: Ship,
  palm: Palmtree,
};

const benefitIcons: Record<string, LucideIcon> = {
  chef: ChefHat,
  wine: Wine,
  waves: Waves,
  sparkles: Sparkles,
  utensils: UtensilsCrossed,
};

export function DesireSection() {
  return (
    <Section id="inspiracao" tone="sand">
      <SectionHeading
        align="center"
        eyebrow="Inspiração"
        title="E se a sua próxima viagem fosse assim?"
        subtitle="Destinos nacionais e internacionais, roteiros bem planejados e experiências que ficam na memória."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <img
          src={desire1}
          alt="Vista aérea de destino litorâneo com piscinas e praia ao pôr do sol"
          width={1200}
          height={900}
          loading="lazy"
        decoding="async"
          className="h-72 w-full rounded-2xl object-cover shadow-lift md:col-span-2 md:h-96"
        />
        <div className="grid gap-4 md:grid-rows-2">
          <img
            src={desire2}
            alt="Praia tropical com águas cristalinas"
            width={1200}
            height={900}
            loading="lazy"
        decoding="async"
            className="h-40 w-full rounded-2xl object-cover shadow-soft md:h-full"
          />
          <img
            src={desire3}
            alt="Mesa com gastronomia variada durante uma viagem"
            width={1200}
            height={900}
            loading="lazy"
        decoding="async"
            className="h-40 w-full rounded-2xl object-cover shadow-soft md:h-full"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="cta" size="xl">
          <a href="#cotacao">Quero planejar minha viagem</a>
        </Button>
      </div>
    </Section>
  );
}


export function ServicesSection() {
  return (
    <Section id="servicos">
      <SectionHeading
        align="center"
        eyebrow="Serviços Viagens Riva"
        title="Cuidamos de cada etapa da sua viagem."
        subtitle="Da passagem aos passeios no destino, organizamos os serviços da sua viagem em um único atendimento."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {travelServices.map((s) => (
          <li
            key={s.title}
            className="rounded-2xl border border-primary/15 bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary">
              <s.icon
                className="size-5 text-primary"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
            <h3 className="mt-5 text-lg text-primary">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">
              {s.text}
            </p>
          </li>
        ))}
      </ul>


      <div className="mt-10 flex justify-center">
        <Button asChild variant="cta" size="xl">
          <a href="#cotacao">Quero planejar minha viagem</a>
        </Button>
      </div>
    </Section>
  );
}

export function CruisesSection() {
  const highlights = [
    { icon: MapPinned, text: "Vários destinos em um único roteiro" },
    { icon: Ship, text: "Experiências a bordo" },
    { icon: UtensilsCrossed, text: "Gastronomia variada" },
    { icon: Sparkles, text: "Entretenimento todos os dias" },
    { icon: Plane, text: "Roteiros nacionais e internacionais" },
    { icon: Users, text: "Casais, famílias e grupos" },
  ];

  return (
    <Section id="cruzeiros">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Cruzeiros"
            title="Uma viagem. Vários destinos."
            subtitle="Conheça diferentes destinos em uma única viagem, com hospedagem, gastronomia, entretenimento e experiências a bordo."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h.text}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft"
              >
                <h.icon className="size-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-sm text-foreground/85">{h.text}</span>
              </li>
            ))}
          </ul>

          <Button asChild variant="gold" size="xl" className="mt-8">
            <a href="#cotacao" onClick={() => preselectInterest("Cruzeiro")}>
              Quero cotar um cruzeiro
            </a>
          </Button>
        </div>

        <img
          src={cruiseImg}
          alt="Navio de cruzeiro sofisticado navegando ao pôr do sol"
          width={1600}
          height={1067}
          loading="lazy"
          decoding="async"
          className="h-full max-h-[520px] w-full rounded-3xl object-cover shadow-lift"
        />
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
        className="mt-12 scroll-mt-24 overflow-hidden rounded-3xl surface-deep shadow-lift lg:scroll-mt-28"
      >
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-champagne">Uma das nossas especialidades</p>
            <h3 className="mt-3 font-display text-3xl leading-tight text-sand sm:text-4xl">
              Resorts &amp; All Inclusive
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Férias sem logística: gastronomia, bebidas, piscinas e recreação já
              resolvidos na hospedagem, no Brasil ou no exterior.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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

            <div className="mt-5 flex flex-wrap gap-2">
              {leisureCards.slice(0, 5).map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-white"
                >
                  {c}
                </span>
              ))}
            </div>

            <p className="mt-5 text-xs leading-relaxed text-white/80">
              Os serviços incluídos variam conforme o resort e o regime contratado.
            </p>

            <Button asChild variant="gold" size="xl" className="mt-7">
              <a href="#cotacao">Quero conhecer opções All Inclusive</a>
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
              className="h-52 w-full rounded-2xl object-cover shadow-lift sm:h-72"
            />
            <img
              src={lazerImg.url}
              alt="Piscina de borda infinita com espreguiçadeiras e paisagismo tropical"
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-52 w-full rounded-2xl object-cover shadow-lift sm:h-72"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {accommodations.map((a) => (
          <article
            key={a.name}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
          >
            <img
              src={room}
              alt={`Hospedagem — ${a.name}`}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl text-primary">{a.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/70">
                {a.capacity}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                {a.description}
              </p>
              <Button asChild variant="outline" className="mt-5 w-full rounded-full">
                <a href="#cotacao">Consultar disponibilidade</a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function MomentsSection() {
  const cards = [
    {
      img: family,
      alt: "Família se divertindo na piscina de resort",
      eyebrow: "Viagens em família",
      title: "As crianças se divertem. Os adultos aproveitam.",
      text: "Voos, hospedagem, transporte, seguro e experiências planejados considerando adultos e crianças.",
      variant: "navy" as const,
    },
    {
      img: couples,
      alt: "Casal jantando em restaurante com vista para o mar",
      eyebrow: "Viagens a dois",
      title: "Também existe espaço para desacelerar a dois.",
      text: "Destinos, hospedagens e experiências para casais que querem descansar ou comemorar uma data especial.",
      variant: "cta" as const,
    },
  ];

  return (
    <Section id="momentos" tone="sand">
      <SectionHeading
        align="center"
        eyebrow="Perfis de viagem"
        title="Viagens para cada momento da sua vida"
        subtitle="Cada viagem tem um ritmo diferente — e o roteiro é montado a partir dele."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {cards.map((c) => (
          <article
            key={c.eyebrow}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-primary/15 bg-card shadow-soft"
          >
            <img
              src={c.img}
              alt={c.alt}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-64 w-full object-cover sm:h-72"
            />
            <div className="flex flex-1 flex-col p-7">
              <p className="eyebrow">{c.eyebrow}</p>
              <h3 className="mt-3 font-display text-2xl leading-snug text-primary">
                {c.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                {c.text}
              </p>
              <Button asChild variant={c.variant} size="xl" className="mt-6">
                <a href="#cotacao">Quero planejar minha viagem</a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}


export function DestinationsSection() {
  return (
    <Section id="destinos" tone="sand">
      <SectionHeading
        align="center"
        eyebrow="Destinos"
        title="Para onde você quer viajar?"
        subtitle="Do Brasil ao exterior, ajudamos você a encontrar a experiência ideal para as suas próximas férias."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {destinations.map((d, i) => {
          const img = destinationImages[i % destinationImages.length];
          return (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-3xl border border-white/15 shadow-soft transition hover:border-gold/50"
            >
              <img
                src={img}
                alt={`Destino — ${d.name}`}
                width={1200}
                height={900}
                loading="lazy"
        decoding="async"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-gold">
                  {d.tag}
                </span>
                <h3 className="mt-2 text-2xl text-white">{d.name}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90">
                  {d.description}
                </p>

                <Button asChild variant="gold" size="sm" className="mt-5">
                  <a href="#cotacao">Quero receber opções</a>
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export function ExperiencesSection() {
  return (
    <Section id="experiencias">
      <SectionHeading
        align="center"
        eyebrow="Formas de viajar"
        title="Experiências para cada jeito de viajar."
        subtitle="Comece pelo estilo de viagem que combina com você — o roteiro nasce a partir dessa escolha."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp) => {
          const Icon = experienceIcons[exp.icon] ?? Sparkles;
          return (
            <article
              key={exp.name}
              className="flex h-full flex-col rounded-3xl border border-primary/15 bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary">
                <Icon className="size-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl text-primary">{exp.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                {exp.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/25 px-3 py-1 text-xs text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="cta" className="mt-6 w-full">
                <a href="#cotacao">Montar minha viagem</a>
              </Button>



            </article>
          );
        })}
      </div>
    </Section>
  );
}


const travelServices = [
  {
    icon: Plane,
    title: "Passagens aéreas",
    text: "Companhias, conexões e horários comparados para achar o voo que faz sentido no seu roteiro.",
  },
  {
    icon: BedDouble,
    title: "Hospedagens",
    text: "Hotéis, pousadas, flats e resorts selecionados pelo destino, pelo perfil da viagem e pelo investimento.",
  },
  {
    icon: Ship,
    title: "Cruzeiros",
    text: "Vários destinos em uma só viagem, com cabine, regime de bordo e excursões escolhidos com você.",
  },
  {
    icon: Car,
    title: "Aluguel de carros",
    text: "Categoria, seguro e retirada organizados para explorar o destino com autonomia.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro viagem",
    text: "Cobertura adequada ao destino, ao período e à idade dos passageiros, inclusive onde é obrigatório.",
  },
  {
    icon: BusFront,
    title: "Transfer",
    text: "Traslado entre aeroporto, hospedagem e passeios já contratado antes do embarque.",
  },
  {
    icon: MapPinned,
    title: "Passeios e experiências",
    text: "Ingressos, tours e experiências reservados com antecedência, sem fila e sem improviso.",
  },
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
              src={expertImg.url}
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
            {expert.role} · CNPJ {agency.cnpj} · {agency.cadastur}
          </p>

          <p className="mt-6 text-sm leading-relaxed text-foreground/80">
            A Viagens Riva organiza viagens nacionais e internacionais, do
            planejamento aos principais serviços necessários para a experiência.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, text: `CNPJ ${agency.cnpj}` },
              { icon: BadgeCheck, text: agency.cadastur },
              { icon: Headphones, text: "Atendimento personalizado" },
              { icon: Plane, text: "Viagens nacionais e internacionais" },
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
              <a href="#cotacao">Falar com a Viagens Riva</a>
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

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.t}
            className="rounded-2xl border border-primary/15 bg-card p-6 shadow-soft"
          >
            <c.icon className="size-6 text-teal" aria-hidden="true" />
            <h3 className="mt-4 text-lg text-primary">{c.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="cta" size="xl">
          <a href="#cotacao">Quero uma cotação personalizada</a>
        </Button>
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
      <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
        {faq.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display text-lg font-normal text-primary">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="whitespace-pre-line text-sm leading-relaxed text-foreground/85">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-primary/15 bg-card p-8 text-center shadow-soft sm:p-10">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-foreground/75">
          Ainda ficou com alguma dúvida?
        </p>

        <h3 className="mt-3 font-display text-2xl text-primary sm:text-3xl">
          Nossa equipe pode ajudar você a planejar sua viagem.
        </h3>
        <Button asChild variant="cta" size="xl" className="mt-8">
          <a href="#cotacao">Quero planejar minha viagem</a>
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
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <h2 className="text-3xl leading-tight text-white sm:text-5xl">
          Vamos começar a planejar sua próxima viagem?
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-white/95 sm:text-base">
          Conte para a Viagens Riva o que você está procurando e receba uma
          cotação personalizada.
        </p>
        <Button asChild variant="gold" size="xl" className="mt-8">
          <a href="#cotacao">Quero planejar minha viagem</a>
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

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {googleReviews.items.map((r) => (
          <figure
            key={r.author}
            className="flex h-full flex-col rounded-2xl border border-primary/20 bg-card p-7 shadow-lift"
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
              <span className="mt-1 flex items-center gap-1.5 text-xs text-foreground/75">
                <BadgeCheck className="size-3.5 text-primary" aria-hidden="true" />
                Avaliação real publicada no Google
              </span>
            </figcaption>

          </figure>
        ))}
      </div>

      <div className="mt-10 text-center">
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

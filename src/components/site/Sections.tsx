import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  agencyServices,
  defaultWhatsappMessage,
  destinations,
  experiences,
  expert,
  faq,
  googleReviews,
  inclusiveBenefits,
  leisureCards,
  whatsappLink,
  whyAllInclusive,
} from "@/config/site";

import expertImg from "@/assets/edson-ferreira.jpg.asset.json";


import desire1 from "@/assets/desire-mosaic-1.jpg";
import desire2 from "@/assets/desire-mosaic-2.jpg";
import desire3 from "@/assets/desire-mosaic-3.jpg";
import lazerImg from "@/assets/lazer-premium.jpg.asset.json";
import gastro from "@/assets/desire-mosaic-3.jpg";
import family from "@/assets/family-pool.jpg";
import couples from "@/assets/couples-dinner.jpg";
import room from "@/assets/room-suite.jpg";
import spa from "@/assets/spa-wellness.jpg";
import destBeach from "@/assets/destination-beach.jpg";
import destMountain from "@/assets/destination-mountain.jpg";
import destInternational from "@/assets/destination-international.jpg";
import destVacation from "@/assets/destination-vacation.jpg";
import agentImg from "@/assets/agent-placeholder.jpg";
import panorama from "@/assets/final-cta.jpg";

const destinationImages = [destBeach, destMountain, destInternational, destVacation];

const serviceIcons: Record<string, LucideIcon> = {
  plane: Plane,
  bed: BedDouble,
  ship: Ship,
  car: Car,
  shield: ShieldCheck,
  bus: BusFront,
  map: MapPinned,
};

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
          className="h-72 w-full rounded-2xl object-cover shadow-lift md:col-span-2 md:h-96"
        />
        <div className="grid gap-4 md:grid-rows-2">
          <img
            src={desire2}
            alt="Praia tropical com águas cristalinas"
            width={1200}
            height={900}
            loading="lazy"
            className="h-40 w-full rounded-2xl object-cover shadow-soft md:h-full"
          />
          <img
            src={desire3}
            alt="Mesa com gastronomia variada durante uma viagem"
            width={1200}
            height={900}
            loading="lazy"
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
        subtitle="Organizamos viagens nacionais e internacionais do planejamento ao retorno, reunindo todos os serviços em um só atendimento."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {agencyServices.map((s) => {
          const Icon = serviceIcons[s.icon] ?? MapPinned;
          return (
            <li
              key={s.label}
              className="rounded-2xl border border-primary/15 bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary">
                <Icon
                  className="size-5 text-primary"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-5 text-lg text-primary">{s.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                {s.description}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="cta" size="xl">
          <a href="#cotacao">Quero planejar minha viagem</a>
        </Button>
      </div>
    </Section>
  );
}

export function InclusiveSection() {
  return (
    <Section id="all-inclusive" tone="deep">
      <SectionHeading
        invert
        align="center"
        eyebrow="Uma das nossas especialidades"
        title="Quer férias com ainda mais praticidade?"
        subtitle="Também selecionamos resorts e experiências All Inclusive no Brasil e no exterior para quem quer aproveitar gastronomia, bebidas, lazer e estrutura completa durante a hospedagem."
      />

      <p className="mx-auto mt-6 w-fit rounded-full border border-gold/70 bg-gold/15 px-5 py-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-gold">
        Resorts &amp; All Inclusive
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {inclusiveBenefits.map((b) => {
          const Icon = benefitIcons[b.icon] ?? Sparkles;
          return (
            <div
              key={b.title}
              className="rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-sm transition hover:border-gold/60"
            >
              <Icon className="size-6 text-gold" aria-hidden="true" />
              <h3 className="mt-4 text-xl uppercase tracking-wide text-white">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {b.text}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/75">
        Serviços e itens incluídos variam conforme o resort e o regime
        contratado.
      </p>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="gold" size="xl">
          <a href="#cotacao">Quero conhecer opções All Inclusive</a>
        </Button>
      </div>
    </Section>
  );
}


export function GastronomySection() {
  return (
    <Section id="gastronomia">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          src={gastro}
          alt="Mesa com pratos variados durante uma viagem"
          width={1200}
          height={900}
          loading="lazy"
          className="h-72 w-full rounded-2xl object-cover shadow-lift sm:h-[28rem]"
        />
        <div>
          <SectionHeading
            eyebrow="Gastronomia e experiências"
            title="Viajar também é feito de sabores"
            subtitle="Além de passagens e hospedagem, ajudamos você a incluir na viagem experiências gastronômicas, passeios e momentos que valem a pena reservar com antecedência."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              { t: "Restaurantes e roteiros", d: "Sugestões e reservas conforme o destino escolhido." },
              { t: "Regimes de alimentação", d: "Do café da manhã ao All Inclusive, conforme a hospedagem." },
              { t: "Passeios e ingressos", d: "Experiências garantidas antes mesmo de embarcar." },
              { t: "Opções para crianças", d: "Roteiros e cardápios pensados também nos pequenos." },
            ].map((b) => (
              <div key={b.t} className="border-l-2 border-gold pl-4">
                <h3 className="text-lg text-primary">{b.t}</h3>
                <p className="mt-1 text-sm text-foreground/75">{b.d}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="cta" size="xl" className="mt-9">
            <a href="#cotacao">Quero conhecer as opções</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function LeisureSection() {
  return (
    <Section id="lazer" tone="sand">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          src={lazerImg.url}
          alt="Piscina de borda infinita com espreguiçadeiras e paisagismo tropical"
          width={1600}
          height={1200}
          loading="lazy"
          className="h-72 w-full rounded-2xl object-cover shadow-lift sm:h-[28rem]"
        />

        <div>
          <SectionHeading
            eyebrow="Lazer e descanso"
            title="Dias inteiros para aproveitar"
            subtitle="Praia, piscina, natureza, passeios ou simplesmente não fazer nada: montamos a viagem de acordo com o ritmo que você quer ter nas férias."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {leisureCards.map((c) => (
              <span
                key={c}
                className="rounded-full border border-primary/25 bg-card px-4 py-2 text-xs uppercase tracking-[0.16em] text-primary"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-8 text-xs text-foreground/70">
            A estrutura disponível varia conforme o destino e os serviços contratados.
          </p>
          <Button asChild variant="navy" size="xl" className="mt-6">
            <a href="#cotacao">Quero planejar minhas férias</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}


export function FamilySection() {
  return (
    <Section id="familias">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Famílias"
            title={
              <>
                As crianças se divertem.
                <br />
                Os adultos aproveitam.
              </>
            }
            subtitle="Planejamos cada etapa considerando adultos e crianças: voos, hospedagem, transporte, seguro e experiências para toda a família aproveitar junto."
          />
          <Button asChild variant="navy" size="xl" className="mt-8">
            <a href="#cotacao">Quero planejar a viagem da família</a>
          </Button>

        </div>
        <img
          src={family}
          alt="Família se divertindo na piscina de resort"
          width={1200}
          height={900}
          loading="lazy"
          className="h-72 w-full rounded-2xl object-cover shadow-lift sm:h-[26rem]"
        />
      </div>
    </Section>
  );
}

export function CouplesSection() {
  return (
    <Section id="casais" tone="sand">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          src={couples}
          alt="Casal jantando em restaurante com vista para o mar"
          width={1200}
          height={900}
          loading="lazy"
          className="order-2 h-72 w-full rounded-2xl object-cover shadow-lift sm:h-[26rem] lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Viagens a dois"
            title="Também existe espaço para desacelerar a dois"
            subtitle="Destinos, hospedagens e experiências para casais que querem descansar, comemorar uma data especial ou simplesmente viajar juntos."

          />
          <Button asChild variant="cta" size="xl" className="mt-8">
            <a href="#cotacao">Quero planejar minha viagem</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function AccommodationsSection() {
  return (
    <Section id="acomodacoes">
      <SectionHeading
        eyebrow="Acomodações"
        title="Conforto para descansar depois de um dia inteiro de férias"
        subtitle="As categorias disponíveis variam conforme período e ocupação. Consulte as opções para as suas datas."
      />

      <Carousel className="mt-10" opts={{ align: "start" }}>
        <CarouselContent>
          {accommodations.map((a) => (
            <CarouselItem
              key={a.name}
              className="sm:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <img
                  src={room}
                  alt={`Acomodação — ${a.name}`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-primary">{a.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {a.capacity}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {a.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-5 w-full rounded-full"
                  >
                    <a href="#cotacao">Consultar disponibilidade</a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </Section>
  );
}

export function DestinationsSection() {
  return (
    <Section id="destinos" tone="deep">
      <SectionHeading
        invert
        align="center"
        eyebrow="Destinos"
        title="Para onde você quer viajar?"
        subtitle="Da praia ao clima de montanha, do Brasil ao exterior, selecionamos destinos e experiências para as suas próximas férias."
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
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-gold">
                  {d.tag}
                </span>
                <h3 className="mt-2 text-2xl text-white">{d.name}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
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
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Seleção Viagens Riva"
        title="Experiências selecionadas"
        subtitle="Experiências e viagens planejadas para diferentes perfis, com opções de hospedagem, transporte, passeios e serviços complementares."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp) => {
          const Icon = experienceIcons[exp.icon] ?? Sparkles;
          return (
            <article
              key={exp.name}
              className="flex h-full flex-col rounded-3xl border border-primary/10 bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary">
                <Icon className="size-5 text-primary" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-xl text-primary">{exp.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/10 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="cta" className="mt-6 w-full">
                <a href="#cotacao">Montar minha viagem</a>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                A cotação pode incluir aéreo, transfer, seguro e passeios.
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}


export function WhyAllInclusiveSection() {
  return (
    <Section tone="sand">
      <SectionHeading
        align="center"
        eyebrow="Por que All Inclusive"
        title="Mais liberdade para aproveitar suas férias"
        subtitle="Descubra as vantagens de reservar uma experiência com tudo incluso, sob medida para o seu perfil."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {whyAllInclusive.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
          >
            <h3 className="text-xl text-primary">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ExpertSection() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-border bg-card p-3 shadow-lift">
            <img
              src={expertImg.url}
              alt={`${expert.name}, responsável pela ${agency.name}`}
              width={900}
              height={1125}
              loading="lazy"
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
          <p className="mt-4 text-sm text-muted-foreground">
            {expert.role} · CNPJ {agency.cnpj} · {agency.cadastur}
          </p>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Organizamos viagens nacionais e internacionais, cuidando de cada
            etapa do roteiro:
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {agencyServices.map((s) => {
              const Icon = serviceIcons[s.icon] ?? MapPinned;
              return (
                <li
                  key={s.label}
                  className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-card px-4 py-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Icon
                      className="size-[18px] text-primary"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm text-primary">{s.label}</span>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="cta" size="xl">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com a {agency.name}
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
      icon: BadgeCheck,
      t: "Atendimento personalizado",
      d: "Cotação preparada de acordo com o perfil da sua viagem.",
    },
    {
      icon: Headphones,
      t: "Suporte",
      d: "Orientação antes e durante sua experiência.",
    },
    {
      icon: ShieldCheck,
      t: "Agência regularizada",
      d: "CNPJ ativo e cadastro no Cadastur.",
    },
    {
      icon: Plane,
      t: "Viagem completa",
      d: "Possibilidade de contratar hospedagem, passagem aérea, transfer, seguro viagem e outros serviços.",
    },
  ];

  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow={`Por que reservar com a ${agency.name}?`}
        title="Sua viagem começa antes do check-in"
        subtitle={`Na ${agency.name}, sua reserva vem acompanhada de atendimento personalizado para ajudar você a planejar cada detalhe da viagem.`}
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.t}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <c.icon className="size-6 text-teal" />
            <h3 className="mt-4 text-lg text-primary">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        {agency.name} · CNPJ {agency.cnpj} · {agency.cadastur}
      </p>
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
        subtitle="Esclarecemos as principais dúvidas para você planejar sua viagem com mais tranquilidade."
      />
      <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
        {faq.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display text-lg text-primary">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-10">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Ainda ficou com alguma dúvida?
        </p>
        <h3 className="mt-3 font-display text-2xl text-primary sm:text-3xl">
          Nossa equipe pode ajudar você a planejar sua viagem.
        </h3>
        <Button asChild variant="cta" size="xl" className="mt-8">
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a {agency.name}
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
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 media-overlay" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <h2 className="text-3xl leading-tight text-white sm:text-5xl">
          Suas próximas férias podem começar aqui.
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-white/85 sm:text-base">
          Resorts selecionados, gastronomia, lazer e dias inteiros para aproveitar.
          Conte para a gente quando você pretende viajar e receba sua cotação
          personalizada.
        </p>
        <Button asChild variant="gold" size="xl" className="mt-8">
          <a href="#cotacao">Quero receber minha cotação</a>
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
        <div className="flex items-center gap-4 rounded-full border border-primary/10 bg-card px-6 py-3 shadow-lift">
          <Stars />
          <span className="text-lg font-medium text-primary">
            {googleReviews.rating} no Google
          </span>
          <span className="text-sm text-muted-foreground">
            {googleReviews.count} avaliações
          </span>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {googleReviews.items.map((r) => (
          <figure
            key={r.author}
            className="flex h-full flex-col rounded-2xl border border-primary/10 bg-card p-7 shadow-lift"
          >
            <Stars />
            <p className="mt-5 font-display text-xl italic leading-snug text-primary">
              “{r.highlight}”
            </p>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {r.text}
            </blockquote>
            <figcaption className="mt-6 border-t border-primary/10 pt-4">
              <span className="block text-sm font-medium text-primary">
                {r.author}
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <BadgeCheck className="size-3.5 text-primary/70" />
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

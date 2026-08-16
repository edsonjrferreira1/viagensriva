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
  Coffee,
  UtensilsCrossed,
  Salad,
  Wine,
  ChefHat,
  Sparkles,
  Waves,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Plane,
  MapPin,
  Star,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import {
  accommodations,
  agency,
  destinations,
  experiences,
  expert,
  faq,
  inclusiveCards,
  leisureCards,
  whyAllInclusive,
} from "@/config/site";

import desire1 from "@/assets/desire-mosaic-1.jpg";
import desire2 from "@/assets/desire-mosaic-2.jpg";
import desire3 from "@/assets/desire-mosaic-3.jpg";
import lazerImg from "@/assets/lazer-piscinas.jpg.asset.json";
import gastro from "@/assets/desire-mosaic-3.jpg";
import family from "@/assets/family-pool.jpg";
import couples from "@/assets/couples-dinner.jpg";
import room from "@/assets/room-suite.jpg";
import spa from "@/assets/spa-wellness.jpg";
import destBeach from "@/assets/destination-beach.jpg";
import destMountain from "@/assets/destination-mountain.jpg";
import destInternational from "@/assets/destination-international.jpg";
import agentImg from "@/assets/agent-placeholder.jpg";
import panorama from "@/assets/final-cta.jpg";

const inclusiveIcons = [Coffee, UtensilsCrossed, Salad, ChefHat, Wine, Sparkles, Waves];
const destinationImages = [destBeach, destMountain, destInternational];

export function DesireSection() {
  return (
    <Section id="experiencias">
      <SectionHeading
        align="center"
        eyebrow="Experiências"
        title="E se a sua próxima viagem fosse assim?"
        subtitle="Resorts selecionados que reúnem conforto, gastronomia, lazer e paisagens de tirar o fôlego."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <img
          src={desire1}
          alt="Resort tropical com piscinas e praia ao pôr do sol"
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
            alt="Gastronomia variada em resort"
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

export function InclusiveSection() {
  return (
    <Section id="all-inclusive" tone="deep">
      <SectionHeading
        invert
        align="center"
        eyebrow="Regime de alimentação e bebidas"
        title="O que é All Inclusive?"
        subtitle="Um conceito de hospedagem que oferece mais liberdade para aproveitar as férias. Cada resort define o que está incluído, os horários e as regras vigentes."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {inclusiveCards.map((card, i) => {
          const Icon = inclusiveIcons[i % inclusiveIcons.length] ?? Sparkles;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition hover:border-gold/50"
            >
              <Icon className="size-6 text-gold" />
              <h3 className="mt-4 text-xl uppercase tracking-wide text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {card.text}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/55">
        Os alimentos, bebidas e atividades disponíveis dependem dos cardápios,
        restaurantes participantes, horários e regras vigentes de cada resort.
        Restaurantes, cardápios, horários, bebidas e serviços podem sofrer
        alterações conforme programação e regras do estabelecimento escolhido.
      </p>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="gold" size="xl">
          <a href="#cotacao">Quero cotar All Inclusive</a>
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
          alt="Gastronomia variada em resort premium"
          width={1200}
          height={900}
          loading="lazy"
          className="h-72 w-full rounded-2xl object-cover shadow-lift sm:h-[28rem]"
        />
        <div>
          <SectionHeading
            eyebrow="Gastronomia"
            title="Férias também são feitas de sabores"
            subtitle="Experiências gastronômicas variadas para aproveitar durante toda a hospedagem, com opções para diferentes paladares e momentos do dia."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              { t: "Restaurantes temáticos", d: "Propostas diferentes para cada refeição." },
              { t: "Buffet e à la carte", d: "Opções que acompanham o regime contratado." },
              { t: "Drinks e petiscos", d: "Para acompanhar a piscina e o entardecer." },
              { t: "Opções para crianças", d: "Cardápios pensados também nos pequenos." },
            ].map((b) => (
              <div key={b.t} className="border-l-2 border-gold pl-4">
                <h3 className="text-lg text-primary">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
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
          alt="Área de lazer de resort com piscinas e coqueiros"
          width={1512}
          height={2016}
          loading="lazy"
          className="h-72 w-full rounded-2xl object-cover shadow-lift sm:h-[28rem]"
        />
        <div>
          <SectionHeading
            eyebrow="Piscinas e lazer"
            title="Dias inteiros para aproveitar"
            subtitle="Escolha entre aproveitar a piscina, relaxar de frente para o mar ou simplesmente não fazer nada."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {leisureCards.map((c) => (
              <span
                key={c}
                className="rounded-full border border-primary/15 bg-card px-4 py-2 text-xs uppercase tracking-[0.16em] text-primary"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            A estrutura de lazer varia conforme o resort escolhido.
          </p>
          <Button asChild variant="navy" size="xl" className="mt-6">
            <a href="#cotacao">Quero cotar meu lazer</a>
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
            subtitle="Piscinas, recreação, Kids Club e refeições variadas: estrutura para que cada um da família aproveite as férias do seu jeito, no mesmo lugar."
          />
          <Button asChild variant="navy" size="xl" className="mt-8">
            <a href="#cotacao">Quero cotar para minha família</a>
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
            eyebrow="Para casais"
            title="Também existe espaço para desacelerar a dois"
            subtitle="Jantares com calma, drinks ao entardecer, momentos de bem-estar e cenários especiais. Uma viagem para descansar de verdade."
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
        subtitle="Trabalhamos com resorts e hotéis selecionados no Brasil e no exterior. Conte para a gente o seu destino dos sonhos."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d, i) => {
          const img = destinationImages[i % destinationImages.length];
          return (
            <div
              key={d.name}
              className="group overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-soft transition hover:border-gold/50"
            >
              <img
                src={img}
                alt={`Destino — ${d.name}`}
                width={1200}
                height={900}
                loading="lazy"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold">
                  {d.tag}
                </span>
                <h3 className="mt-2 text-xl text-white">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {d.description}
                </p>
                <Button asChild variant="gold" size="sm" className="mt-5">
                  <a href="#cotacao">Ver opções</a>
                </Button>
              </div>
            </div>
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
        subtitle="Opções de hospedagem pensadas para diferentes perfis de viagem."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp) => (
          <div
            key={exp.name}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <div className="flex items-center gap-2">
              <Star className="size-4 text-gold" />
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {exp.destination}
              </span>
            </div>
            <h3 className="mt-3 text-xl text-primary">{exp.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Regime: {exp.regime}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.differentials.map((diff) => (
                <span
                  key={diff}
                  className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {diff}
                </span>
              ))}
            </div>
            <Button asChild variant="cta" className="mt-6 w-full">
              <a href="#cotacao">Solicitar cotação</a>
            </Button>
          </div>
        ))}
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
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {agencyServices.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2 text-sm text-secondary-foreground"
              >
                <span aria-hidden="true">{s.emoji}</span>
                {s.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="cta" size="xl">
              <a href="#cotacao">Falar com {expert.name.split(" ")[0]}</a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a
                href={agency.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="size-4" />
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
      />
      <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
        {faq.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display text-lg text-primary">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
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

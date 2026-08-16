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
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Plane,
  MapPin,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import {
  accommodations,
  agency,
  faq,
  inclusiveCards,
  leisureCards,
  resort,
  restaurants,
} from "@/config/site";

import aerial from "@/assets/resort-aerial.jpg";
import pools from "@/assets/pools.jpg";
import gastro1 from "@/assets/gastronomy-1.jpg";
import gastro2 from "@/assets/gastronomy-2.jpg";
import drinks from "@/assets/drinks.jpg";
import family from "@/assets/family.jpg";
import couples from "@/assets/couples.jpg";
import room from "@/assets/room.jpg";
import spa from "@/assets/spa.jpg";
import panorama from "@/assets/cta-panorama.jpg";

const inclusiveIcons = [Coffee, UtensilsCrossed, Salad, ChefHat, Wine, Sparkles];

export function ResortSection() {
  return (
    <Section id="resort">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="O SERHS Natal"
            title="Um resort para viver Natal de um jeito diferente"
            subtitle="Um resort à beira-mar na Via Costeira, onde o dia pode começar com o som do mar e terminar com um jantar sem pressa. Praia, piscinas, gastronomia e espaços de descanso reunidos no mesmo lugar."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                t: "Praia e piscinas",
                d: "Dias inteiros entre o mar e as áreas de lazer do resort.",
              },
              {
                t: "Gastronomia",
                d: "Restaurantes e bares com propostas diferentes.",
              },
              {
                t: "Para as crianças",
                d: "Recreação e espaços pensados para os pequenos.",
              },
              {
                t: "Para os adultos",
                d: "Descanso, bem-estar e momentos com calma.",
              },
            ].map((b) => (
              <div key={b.t} className="border-l-2 border-champagne pl-4">
                <h3 className="text-lg text-primary">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="deep" size="xl" className="mt-9">
            <a href="#cotacao">Consultar valores</a>
          </Button>
        </div>

        <div className="grid gap-4">
          <img
            src={aerial}
            alt="Vista aérea da orla de Natal com praia e Via Costeira"
            width={1600}
            height={1100}
            loading="lazy"
            className="h-72 w-full rounded-2xl object-cover shadow-lift sm:h-96"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src={pools}
              alt="Complexo de piscinas do resort"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-40 w-full rounded-2xl object-cover shadow-soft sm:h-52"
            />
            <img
              src={drinks}
              alt="Drinks tropicais no bar da piscina"
              width={1200}
              height={900}
              loading="lazy"
              className="h-40 w-full rounded-2xl object-cover shadow-soft sm:h-52"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export function InclusiveSection() {
  return (
    <Section id="serhs-inclusive" tone="deep">
      <SectionHeading
        invert
        align="center"
        eyebrow="Regime de alimentação e bebidas"
        title="SERHS Inclusive"
        subtitle="Mais liberdade para aproveitar suas férias. O resort possui seu próprio regime de alimentação e bebidas, proporcionando uma experiência semelhante ao conceito All Inclusive."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {inclusiveCards.map((card, i) => {
          const Icon = inclusiveIcons[i % inclusiveIcons.length] ?? Sparkles;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-sand/15 bg-background/5 p-6 backdrop-blur-sm transition hover:border-champagne/50"
            >
              <Icon className="size-6 text-champagne" />
              <h3 className="mt-4 text-xl uppercase tracking-wide text-sand">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/70">
                {card.text}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-sand/55">
        Os alimentos e bebidas disponíveis dependem dos cardápios, restaurantes
        participantes, horários e regras vigentes do SERHS Inclusive.
        Restaurantes, cardápios, horários, bebidas e serviços disponíveis podem
        sofrer alterações conforme programação e regras vigentes do resort.
      </p>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="champagne" size="xl">
          <a href="#cotacao">Quero cotar com SERHS Inclusive</a>
        </Button>
      </div>
    </Section>
  );
}

export function GastronomySection() {
  return (
    <Section id="gastronomia">
      <SectionHeading
        eyebrow="Gastronomia"
        title="Férias também são feitas de sabores"
        subtitle="Uma experiência gastronômica para aproveitar durante toda a hospedagem."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <img
          src={gastro1}
          alt="Buffet com carnes grelhadas e frutas tropicais"
          width={1200}
          height={900}
          loading="lazy"
          className="h-64 w-full rounded-2xl object-cover shadow-soft md:col-span-2 md:h-80"
        />
        <img
          src={gastro2}
          alt="Sushi e sashimi em restaurante japonês"
          width={1200}
          height={900}
          loading="lazy"
          className="h-64 w-full rounded-2xl object-cover shadow-soft md:h-80"
        />
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Stat value={resort.stats.restaurants} label="Restaurantes" />
        <Stat value={resort.stats.bars} label="Bares" />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((r) => (
          <div
            key={r.name}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <p className="eyebrow">Restaurante</p>
            <h3 className="mt-2 text-xl text-primary">{r.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{r.note}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Consulte as experiências disponíveis para o regime contratado.
      </p>

      <Button asChild variant="cta" size="xl" className="mt-8">
        <a href="#cotacao">Quero viver essa experiência</a>
      </Button>
    </Section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-secondary px-7 py-5">
      <p className="font-display text-4xl leading-none text-primary">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function LeisureSection() {
  return (
    <Section id="lazer" tone="sand">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          src={pools}
          alt="Piscinas do resort com palmeiras e espreguiçadeiras"
          width={1400}
          height={1000}
          loading="lazy"
          className="h-72 w-full rounded-2xl object-cover shadow-lift sm:h-[28rem]"
        />
        <div>
          <SectionHeading
            eyebrow="Piscinas e lazer"
            title="Dias inteiros para aproveitar"
            subtitle="Escolha entre aproveitar a piscina, relaxar de frente para o mar ou simplesmente não fazer nada."
          />
          <div className="mt-8 inline-block rounded-2xl bg-card px-7 py-5 shadow-soft">
            <p className="font-display text-4xl leading-none text-primary">
              {resort.stats.pools}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Piscinas
            </p>
          </div>
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
          <Button asChild variant="deep" size="xl" className="mt-8">
            <a href="#cotacao">Quero cotar para minha família</a>
          </Button>
        </div>
        <img
          src={family}
          alt="Crianças se divertindo na piscina do resort"
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
    <Section tone="sand">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          src={couples}
          alt="Casal jantando em terraço com vista para o mar"
          width={1200}
          height={900}
          loading="lazy"
          className="order-2 h-72 w-full rounded-2xl object-cover shadow-lift sm:h-[26rem] lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Para casais"
            title="Também existe espaço para desacelerar a dois"
            subtitle="Jantares com calma, drinks ao entardecer, momentos de bem-estar e o mar como cenário. Uma viagem para descansar de verdade."
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

export function SpaSection() {
  return (
    <Section tone="deep">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            invert
            eyebrow="Bem-estar"
            title="Um tempo só para você"
            subtitle="O resort conta com o Kensho SPA Zen, com experiências voltadas a relaxamento, massagens e bem-estar para equilibrar os dias de férias."
          />
          <p className="mt-6 text-xs text-sand/55">
            Serviços sujeitos a contratação e disponibilidade.
          </p>
          <Button asChild variant="champagne" size="xl" className="mt-8">
            <a href="#cotacao">Falar com um consultor</a>
          </Button>
        </div>
        <img
          src={spa}
          alt="Sala de massagem do SPA com toalhas e orquídeas"
          width={1200}
          height={900}
          loading="lazy"
          className="h-72 w-full rounded-2xl object-cover shadow-lift sm:h-[26rem]"
        />
      </div>
    </Section>
  );
}

export function LocationSection() {
  return (
    <Section id="localizacao">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Localização"
            title="Natal aos seus pés"
            subtitle="O resort fica na Via Costeira, em Natal/RN, de frente para o mar e próximo à região de Ponta Negra — um dos pontos mais procurados da cidade."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {["Natal/RN", "Via Costeira", "À beira-mar"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs uppercase tracking-[0.16em] text-secondary-foreground"
              >
                <MapPin className="size-3.5" />
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lift">
          <iframe
            title="Mapa — Via Costeira, Natal/RN"
            src={resort.mapEmbed}
            loading="lazy"
            className="h-80 w-full border-0 sm:h-[26rem]"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
            <c.icon className="size-6 text-ocean" />
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
        alt="Praia panorâmica ao pôr do sol no litoral do Rio Grande do Norte"
        width={1920}
        height={900}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 media-overlay" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <h2 className="text-3xl leading-tight text-sand sm:text-5xl">
          Suas próximas férias podem ser aqui.
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-sand/85 sm:text-base">
          Mar, piscinas, gastronomia e dias inteiros para aproveitar. Conte para
          a gente quando você pretende viajar e receba sua cotação personalizada
          para o SERHS Natal.
        </p>
        <Button asChild variant="champagne" size="xl" className="mt-8">
          <a href="#cotacao">Quero receber minha cotação</a>
        </Button>
      </div>
    </section>
  );
}

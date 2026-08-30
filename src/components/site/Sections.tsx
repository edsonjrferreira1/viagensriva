import { Button } from "@/components/ui/button";
import {

  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Plane,
  MapPinned,
  BedDouble,
  Car,
  BusFront,
  Star,
  Instagram,
  ArrowRight,
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
  agency,
  travelCards,
  expert,
  faq,
  googleReviews,
  whatsappLink,
  defaultWhatsappMessage,
} from "@/config/site";

import expertImg from "@/assets/edson-ferreira.jpg";
import cruiseImg from "@/assets/cruise-premium.webp";

/** Pré-seleciona serviço, destino ou tipo de viagem no formulário de cotação. */
function preselect(detail: {
  interest?: string | undefined;
  destination?: string | undefined;
  tripType?: string | undefined;
}) {
  window.dispatchEvent(new CustomEvent("riva:preselect", { detail }));
}

import hospHotel from "@/assets/hosp-hoteis-pousadas.jpg";
import hospFlat from "@/assets/hosp-flats.jpg";
import hospPremium from "@/assets/hosp-premium.jpg";
import destMountain from "@/assets/destination-mountain.webp";
import destBeach from "@/assets/destination-beach.webp";
import destVacation from "@/assets/destination-vacation.webp";
import resortAerial from "@/assets/resort-aerial.webp";
import familyPool from "@/assets/family-pool.webp";
import couplesImg from "@/assets/couples.webp";
import destInternational from "@/assets/destination-international.webp";
import panorama from "@/assets/final-cta.webp";


/** Fotos do carrossel de experiências e destinos (chave = campo `image`). */
const travelImages: Record<string, string> = {
  resort: resortAerial,
  cruise: cruiseImg,
  hotel: hospHotel,
  flat: hospFlat,
  premium: hospPremium,
  beach: destBeach,
  mountain: destMountain,
  international: destInternational,
  family: familyPool,
  couples: couplesImg,
  vacation: destVacation,
};



export function TravelSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  // Permite abrir a página já com um card específico visível (ex.: #destinos-praia).
  useEffect(() => {
    if (!carouselApi) return;

    const revealAnchoredCard = () => {
      const cardId = decodeURIComponent(window.location.hash.slice(1));
      const index = travelCards.findIndex((card) => card.id === cardId);
      if (index >= 0) carouselApi.scrollTo(index);
    };

    revealAnchoredCard();
    window.addEventListener("hashchange", revealAnchoredCard);
    return () => window.removeEventListener("hashchange", revealAnchoredCard);
  }, [carouselApi]);

  return (
    <Section id="experiencias">
      <SectionHeading
        align="center"
        eyebrow="Experiências e destinos"
        title="Escolha como quer viajar. A gente cuida do resto."
        subtitle="Você escolhe a experiência ou o destino e a Viagens Riva organiza os serviços necessários para transformar o planejamento em viagem."
      />

      <Carousel
        opts={{ align: "start", containScroll: "trimSnaps" }}
        setApi={setCarouselApi}
        className="mt-8"
      >
        <CarouselContent className="-ml-4">
          {travelCards.map((card) => (
            <CarouselItem
              key={card.id}
              id={card.id}
              className="scroll-mt-[104px] basis-[82%] pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <article className="group relative flex h-full overflow-hidden rounded-3xl border border-white/15 shadow-soft transition hover:border-gold/50">
                <img
                  src={travelImages[card.image] ?? destBeach}
                  alt={card.name}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-gold">
                    {card.tag}
                  </span>
                  <h3 className="mt-2 text-2xl text-white">{card.name}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90">
                    {card.description}
                  </p>

                  <Button asChild variant="gold" size="sm" className="mt-5">
                    {card.href ? (
                      <Link to={card.href}>Conhecer</Link>
                    ) : (
                      <a
                        href="#cotacao"
                        onClick={() =>
                          preselect({
                            tripType: card.tripType,
                            destination: card.destination,
                            interest: card.interest,
                          })
                        }
                      >
                        Quero receber opções
                      </a>
                    )}
                  </Button>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>

      {/* Faixa compacta de serviços — mantém a âncora #servicos usada no topo da página */}
      <div
        id="servicos"
        className="mt-10 scroll-mt-[104px] rounded-3xl border border-primary/15 bg-secondary/60 px-6 py-8 sm:px-10"
      >
        <h3 className="text-center font-display text-2xl text-primary sm:text-[1.7rem]">
          Podemos cuidar de cada etapa da sua viagem.
        </h3>

        <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {travelServices.map((s) => (
            <li
              key={s.title}
              className="flex px-2 text-center lg:border-r lg:border-primary/15 lg:last:border-r-0"
            >
              <Link
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="flex w-full flex-col items-center gap-2 rounded-xl px-1 py-2 transition-colors hover:bg-primary/5"
              >
                <s.icon className="size-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm leading-snug text-foreground/85">{s.title}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-foreground/70">
          Você pode contratar apenas o que precisa ou montar uma viagem completa em
          um único atendimento.
        </p>

        <p className="mt-3 text-center text-sm">
          <Link
            to="/servicos/$slug"
            params={{ slug: "pacotes-de-viagem" }}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Prefere tudo montado em um orçamento só? Conheça nossos pacotes de viagem
          </Link>
        </p>
      </div>
    </Section>
  );
}


const travelServices = [
  { icon: Plane, title: "Passagens aéreas", slug: "passagens-aereas" },
  { icon: BedDouble, title: "Hospedagens", slug: "hospedagens" },
  { icon: BusFront, title: "Transfer", slug: "transporte-no-destino" },
  { icon: ShieldCheck, title: "Seguro viagem", slug: "seguro-viagem" },
  { icon: Car, title: "Aluguel de carros", slug: "transporte-no-destino" },
  { icon: MapPinned, title: "Passeios e experiências", slug: "passeios-e-experiencias" },
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
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com a Viagens Riva
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
      t: "Planejamento feito por gente",
      d: "Sua viagem é montada por um agente que conhece o seu roteiro e o seu perfil — não por um comparador de preços que devolve uma lista e some.",
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

      <div className="mt-7 flex justify-center">
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
              <span className="mt-1 flex items-center gap-1.5 text-xs text-foreground/75">
                <BadgeCheck className="size-3.5 text-primary" aria-hidden="true" />
                Avaliação real publicada no Google
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

import { useEffect } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  BedDouble,
  Building2,
  ChefHat,
  Home,
  MapPinned,
  MessageCircle,
  Palmtree,
  Ship,
  Sparkles,
  UtensilsCrossed,
  Users,
  Waves,
  Wine,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Section, SectionHeading } from "@/components/site/Section";
import { servicePages, whatsappLink } from "@/config/site";

import cruiseImg from "@/assets/cruise-premium.jpg";
import cruiseOnboardImg from "@/assets/cruise-onboard.jpg";
import cruiseDiningImg from "@/assets/cruise-dining.jpg";
import hospHotel from "@/assets/hosp-hoteis-pousadas.jpg";
import hospFlat from "@/assets/hosp-flats.jpg";
import hospPremium from "@/assets/hosp-premium.jpg";
import resortAerial from "@/assets/resort-aerial.webp";
import gastro from "@/assets/gastronomy-1.webp";
import lazerImg from "@/assets/lazer-premium.jpg";
import aviaoImg from "@/assets/servico-aviao.jpg";
import seguroImg from "@/assets/servico-seguro.jpg";
import carroImg from "@/assets/servico-carro.jpg";
import passeioImg from "@/assets/servico-passeio.jpg";
import vacationImg from "@/assets/destination-vacation.webp";
import internationalImg from "@/assets/destination-international.webp";
import familyImg from "@/assets/family-pool.webp";

const images: Record<string, string> = {
  cruise: cruiseImg,
  cruiseOnboard: cruiseOnboardImg,
  cruiseDining: cruiseDiningImg,
  hotel: hospHotel,
  flat: hospFlat,
  premium: hospPremium,
  resort: resortAerial,
  gastronomy: gastro,
  lazer: lazerImg,
  aviao: aviaoImg,
  seguro: seguroImg,
  carro: carroImg,
  passeio: passeioImg,
  vacation: vacationImg,
  international: internationalImg,
  family: familyImg,
};

const icons: Record<string, LucideIcon> = {
  map: MapPinned,
  bed: BedDouble,
  sparkles: Sparkles,
  users: Users,
  ship: Ship,
  palm: Palmtree,
  home: Home,
  building: Building2,
  waves: Waves,
  wine: Wine,
  chef: ChefHat,
  utensils: UtensilsCrossed,
  plane: Plane,
  car: Car,
  shield: ShieldCheck,
  ticket: Ticket,
  luggage: Luggage,
  clock: Clock,
  alert: TriangleAlert,
};

const SITE = "https://viagensriva.com";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const page = servicePages[params.slug];
    if (!page) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const page = servicePages[params.slug];
    if (!page) {
      return {
        meta: [{ title: "Página não encontrada | Viagens Riva" }, { name: "robots", content: "noindex" }],
      };
    }
    const url = `${SITE}/servicos/${page.slug}`;
    return {
      meta: [
        { title: page.title },
        { name: "description", content: page.description },
        { property: "og:title", content: page.title },
        { property: "og:description", content: page.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.h1,
            serviceType: page.serviceType,
            description: page.description,
            url,
            areaServed: "BR",
            provider: {
              "@type": "TravelAgency",
              name: "Viagens Riva",
              url: `${SITE}/`,
              telephone: "+55 62 98217-9433",
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServicePageView,
});

function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Section>
        <h1 className="text-3xl text-primary">Página não encontrada</h1>
        <p className="mt-3 text-foreground/80">
          Esse serviço não existe ou saiu do ar.
        </p>
        <Button asChild variant="gold" className="mt-6">
          <Link to="/">Voltar para a home</Link>
        </Button>
      </Section>
      <Footer />
    </div>
  );
}

function ServicePageView() {
  const { slug } = Route.useLoaderData();
  const page = servicePages[slug]!;

  // Pré-seleciona o serviço no formulário de cotação da própria página.
  useEffect(() => {
    const id = window.setTimeout(
      () =>
        window.dispatchEvent(
          new CustomEvent("riva:preselect", {
            detail: { interest: page.preselectInterest },
          }),
        ),
      100,
    );
    return () => window.clearTimeout(id);
  }, [page.preselectInterest]);

  const whatsMessage = `Olá! Vim pela página de ${page.eyebrow} da Viagens Riva e gostaria de conversar sobre uma viagem.`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Topo */}
        <Section className="pt-28 lg:pt-32">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">{page.eyebrow}</p>
              <h1 className="mt-2 text-3xl leading-[1.1] text-primary sm:text-4xl md:text-5xl">
                {page.h1}
              </h1>
              {page.intro.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mt-4 text-base leading-relaxed text-foreground/80"
                >
                  {p}
                </p>
              ))}
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="gold" size="xl">
                  <a href="#cotacao">Quero receber opções</a>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <a
                    href={whatsappLink(whatsMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <img
              src={images[page.heroImage] ?? resortAerial}
              alt={page.photos[0]?.alt ?? page.h1}
              width={1600}
              height={1200}
              loading="eager"
              decoding="async"
              className="h-64 w-full rounded-3xl object-cover shadow-lift sm:h-80 lg:h-[420px]"
            />
          </div>
        </Section>

        {/* Cards informativos */}
        <Section tone="sand">
          <SectionHeading
            align="center"
            eyebrow="O que você precisa saber"
            title="Os pontos que fazem diferença na hora de escolher"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.cards.map((c) => {
              const Icon = icons[c.icon] ?? Sparkles;
              return (
                <li
                  key={c.title}
                  className="rounded-2xl border border-border bg-card px-5 py-5 shadow-soft"
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      className="size-5 shrink-0 text-gold"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-medium text-primary">
                      {c.title}
                    </span>
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    {c.text}
                  </p>
                  {c.to && (
                    <Link
                      to={c.to}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Conhecer
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {page.highlight && (
            <div className="mt-6 rounded-3xl border border-primary/15 bg-card px-6 py-6 shadow-soft sm:px-8">
              <h2 className="font-display text-xl text-primary sm:text-2xl">
                {page.highlight.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {page.highlight.text}
              </p>
            </div>
          )}

          <p className="mt-5 text-xs leading-relaxed text-foreground/70">
            {page.note}
          </p>
        </Section>

        {/* Colagem de fotos */}
        <Section>
          <div className="grid gap-4 sm:grid-cols-3">
            {page.photos.map((photo, i) => (
              <img
                key={photo.image + i}
                src={images[photo.image] ?? resortAerial}
                alt={photo.alt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className={
                  i === 0
                    ? "h-56 w-full rounded-3xl object-cover shadow-lift sm:col-span-3 sm:h-80"
                    : "h-44 w-full rounded-3xl object-cover shadow-soft sm:h-56"
                }
              />
            ))}
          </div>

          {/* CTA WhatsApp no meio da página */}
          <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl surface-deep px-6 py-8 text-center">
            <h2 className="font-display text-2xl text-sand sm:text-3xl">
              Prefere conversar antes de preencher formulário?
            </h2>
            <Button asChild variant="gold" size="xl">
              <a
                href={whatsappLink(whatsMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Falar com a Viagens Riva
              </a>
            </Button>
          </div>
        </Section>

        <Section id="cotacao" tone="sand">
          <QuoteForm />
        </Section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

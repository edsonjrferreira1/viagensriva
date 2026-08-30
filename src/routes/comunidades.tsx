import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { cn } from "@/lib/utils";
import {
  agency,
  communities,
  communityWaitlistMessage,
  whatsappLink,
} from "@/config/site";

import rioImg from "@/assets/comunidade-rio.jpg";
import spImg from "@/assets/comunidade-sao-paulo.jpg";
import gynImg from "@/assets/comunidade-goiania-brasilia.jpg";
import pnzImg from "@/assets/comunidade-petrolina.jpg";

const images: Record<string, string> = {
  rio: rioImg,
  "sao-paulo": spImg,
  "goiania-brasilia": gynImg,
  petrolina: pnzImg,
};

const title = "Comunidades de Ofertas | Viagens Riva";
const description =
  "Entre na comunidade de ofertas da sua região de embarque e receba passagens, pacotes e hospedagens selecionadas pela Viagens Riva.";

export const Route = createFileRoute("/comunidades")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://viagensriva.com/og-viagens-riva.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:image", content: "https://viagensriva.com/og-viagens-riva.jpg" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://viagensriva.com/comunidades",
      },
    ],
  }),
  component: Comunidades,
});

const steps = [
  {
    icon: MapPin,
    title: "Escolha sua região de embarque",
    text: "As comunidades são separadas por aeroporto de saída, para você receber só o que faz sentido para você.",
  },
  {
    icon: MessageCircle,
    title: "Entre na comunidade",
    text: "Um toque e você está dentro. Pode sair quando quiser.",
  },
  {
    icon: Sparkles,
    title: "Receba as ofertas prontas",
    text: "Voo com horários, hospedagem, valor total e parcelamento — tudo já calculado.",
  },
];

function Comunidades() {
  const [highlight, setHighlight] = useState<string | null>(null);

  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get("r");
    if (!r || !communities.some((c) => c.id === r)) return;
    setHighlight(r);
    const el = document.getElementById(`comunidade-${r}`);
    if (el) {
      window.setTimeout(
        () => el.scrollIntoView({ behavior: "smooth", block: "center" }),
        250,
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero curto */}
        <section className="bg-secondary px-4 pb-14 pt-28 sm:px-6 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Comunidades de ofertas</p>
            <h1 className="mt-3 text-3xl leading-[1.1] text-primary sm:text-5xl">
              Ofertas selecionadas para quem embarca da sua região.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              Entre na comunidade da sua cidade de embarque e receba passagens,
              pacotes e hospedagens com voo, hotel e valor final já calculados.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Algumas ofertas por semana, selecionadas. Só a Riva publica — sem
              conversa paralela.
            </p>
          </div>
        </section>

        {/* Como funciona */}
        <section className="section-y px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center md:text-left">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-secondary">
                  <s.icon
                    className="size-6 text-primary"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </span>
                <h2 className="mt-5 font-display text-xl text-primary">
                  {i + 1}. {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Grid de regiões */}
        <section className="px-4 pb-20 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communities.map((c) => (
              <article
                key={c.id}
                id={`comunidade-${c.id}`}
                className={cn(
                  "flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border bg-card p-4 shadow-soft transition",
                  highlight === c.id
                    ? "border-gold ring-2 ring-gold/60"
                    : "border-border",
                )}
              >
                <img
                  src={images[c.id]}
                  alt={c.alt}
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 font-display text-2xl text-primary">
                  {c.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  {c.airports}
                </p>
                <p className="mt-3 mb-5 text-sm leading-relaxed text-foreground/75">
                  {c.description}
                </p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-comunidade={c.id}
                  className="mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground transition hover:bg-whatsapp/90"
                >
                  Entrar na comunidade →
                </a>
              </article>
            ))}

            {/* Card especial */}
            <article className="flex flex-col justify-center rounded-2xl bg-navy p-7 text-navy-foreground shadow-soft">
              <h3 className="font-display text-2xl text-sand">
                Não é da sua região?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Ainda não temos comunidade para a sua cidade de embarque. Me diga
                de onde você viaja e eu aviso assim que abrir.
              </p>
              <a
                href={whatsappLink(communityWaitlistMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-gold px-5 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition hover:bg-gold hover:text-gold-foreground"
              >
                Avisar quando abrir
              </a>
              <p className="mt-3 text-xs text-white/60">
                {agency.whatsappDisplay}
              </p>
            </article>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-secondary px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl text-primary sm:text-4xl">
              Prefere uma viagem montada sob medida?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              As comunidades trazem ofertas prontas. Se você tem data, destino ou
              ocasião definidos, peça uma cotação personalizada.
            </p>
            <Button asChild variant="cta" size="xl" className="mt-8">
              <Link to="/" hash="cotacao">
                Solicitar cotação
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

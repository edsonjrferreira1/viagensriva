import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroDesktop from "@/assets/hero-premium-desktop.jpg.asset.json";
import heroMobile from "@/assets/hero-premium-mobile.jpg.asset.json";
import { heroHighlights } from "@/config/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <picture>
        <source media="(max-width: 767px)" srcSet={heroMobile.url} />
        <source media="(min-width: 768px)" srcSet={heroDesktop.url} />
        <img
          src={heroDesktop.url}
          alt="Piscina de borda infinita em resort premium ao pôr do sol"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />


      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-20">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/60 bg-white/10 px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold backdrop-blur-md">
          All Inclusive
        </span>

        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Viagens selecionadas para quem merece o extraordinário.
        </h1>
        <p className="mt-4 max-w-2xl font-display text-2xl italic text-white/90 sm:text-3xl">
          Resorts premium e All Inclusive no Brasil e no exterior.
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          Hospedagem, gastronomia, lazer e atendimento personalizado para você
          aproveitar suas férias de um jeito ainda mais completo.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
            <a href="#cotacao">Quero uma cotação personalizada</a>
          </Button>
          <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
            <a href="#experiencias">Falar com especialista</a>
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {heroHighlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-xs text-white/85 sm:text-sm"
            >
              <Check className="size-4 text-gold" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

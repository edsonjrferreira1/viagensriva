import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImg from "@/assets/hero-pordosol.jpg.asset.json";
import { heroHighlights } from "@/config/site";
import logoAsset from "@/assets/logo-riva.png.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg.url}
        alt="Piscina de resort à beira-mar ao pôr do sol"
        width={1512}
        height={2016}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 media-overlay" />

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

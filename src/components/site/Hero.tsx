import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImg from "@/assets/hero-resort.jpg";
import { resort } from "@/config/site";

const highlights = [
  "Resort à beira-mar",
  "Estrutura completa",
  "Gastronomia variada",
  "Experiência SERHS Inclusive",
  "Opções para famílias e casais",
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Piscina à beira-mar do resort ao pôr do sol em Natal"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 media-overlay" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-20">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-champagne/50 bg-background/10 px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-champagne backdrop-blur-md">
          SERHS Inclusive
        </span>

        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] text-sand sm:text-6xl md:text-7xl">
          {resort.name}
        </h1>
        <p className="mt-4 max-w-2xl font-display text-2xl italic text-sand/90 sm:text-3xl">
          Sua experiência de férias à beira-mar em Natal
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-sand/80 sm:text-base">
          Hospedagem premium, gastronomia, piscinas, lazer e a experiência SERHS
          Inclusive para aproveitar suas férias de um jeito ainda mais completo.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
            <a href="#cotacao">Quero receber uma cotação</a>
          </Button>
          <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
            <a href="#resort">Conhecer o resort</a>
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-xs text-sand/85 sm:text-sm"
            >
              <Check className="size-4 text-champagne" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

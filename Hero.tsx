import { Button } from "@/components/ui/button";
import heroDesktop from "@/assets/hero-premium-desktop.jpg";
import heroMobile from "@/assets/hero-premium-mobile.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[440px] items-center overflow-hidden lg:min-h-[520px] lg:max-h-[660px]"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={heroMobile} />
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroDesktop}
          alt="Piscina de borda infinita em resort premium ao pôr do sol"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[50%_45%] lg:object-[50%_40%]"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-5 pb-10 pt-[104px] sm:px-6 sm:pb-12 sm:pt-[120px] lg:pb-16 lg:pt-[132px]">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/70 bg-black/45 px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold backdrop-blur-md">
          Viagens nacionais &amp; internacionais
        </span>

        <h1 className="mt-4 max-w-4xl text-[2rem] leading-[1.12] text-white sm:text-6xl sm:leading-[1.05] md:text-7xl lg:mt-4 lg:text-6xl xl:text-7xl">
          Viagens selecionadas para quem merece o extraordinário.
        </h1>
        <p className="mt-3 max-w-2xl font-display text-xl italic leading-snug text-white sm:text-3xl">
          Viagens nacionais e internacionais planejadas para você.
        </p>
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-white/95 sm:text-base">
          Passagens, hospedagens, resorts, cruzeiros e experiências para você
          aproveitar sua viagem com mais tranquilidade.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-6">
          <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
            <a href="#cotacao">Quero planejar minha viagem</a>
          </Button>
          <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
            <a href="#servicos">Ver nossos serviços</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { communities } from "@/config/site";

export function CommunitiesInvite() {
  return (
    <section id="comunidades" className="surface-deep scroll-mt-[104px] px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-champagne">Comunidades de ofertas</p>
          <h2 className="mt-3 text-3xl leading-tight text-sand sm:text-4xl">
            Ainda não é a hora de fechar? Receba as ofertas.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85">
            Comunidades no WhatsApp separadas por região de embarque, com
            passagens e pacotes selecionados algumas vezes por semana.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {communities.map((c) => (
              <li
                key={c.id}
                className="rounded-full border border-white/25 px-3 py-1 text-xs text-white/85"
              >
                {c.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0">
          <Button asChild variant="cta" size="xl">
            <Link to="/comunidades">Ver as comunidades →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

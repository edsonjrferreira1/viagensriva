import { createFileRoute, Link } from "@tanstack/react-router";
import { agency } from "@/config/site";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Viagens Riva" },
      {
        name: "description",
        content:
          "Termos de uso da página da Viagens Riva, agência de viagens independente.",
      },
      { property: "og:title", content: "Termos de Uso | Viagens Riva" },
      {
        property: "og:description",
        content:
          "Condições de uso da página de cotação da Viagens Riva.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://viagensriva.com/og-viagens-riva.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:image", content: "https://viagensriva.com/og-viagens-riva.jpg" },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link to="/" className="eyebrow">
        Voltar
      </Link>
      <h1 className="mt-4 text-4xl text-primary">Termos de Uso</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Esta página é administrada pela {agency.name}, agência de viagens
          independente (CNPJ {agency.cnpj}, {agency.cadastur}), para divulgação e
          comercialização de serviços turísticos. Não se trata de site oficial de
          nenhum hotel, resort ou rede hoteleira específica.
        </p>
        <p>
          As informações sobre estrutura, restaurantes, regime de alimentação e
          serviços são apresentadas de forma comercial e genérica, podendo sofrer
          alterações conforme a programação e as regras vigentes de cada
          estabelecimento.
        </p>
        <p>
          Esta página não realiza reservas automáticas nem apresenta valores
          fixos. As tarifas dependem de período, ocupação, idade das crianças,
          categoria da acomodação, regime escolhido e disponibilidade no momento
          da consulta, sendo confirmadas apenas na cotação enviada pela agência.
        </p>
        <p>
          Marcas e nomes de terceiros citados pertencem aos seus respectivos
          titulares e são mencionados apenas para identificar os serviços
          comercializados, quando aplicável.
        </p>
      </div>
    </main>
  );
}

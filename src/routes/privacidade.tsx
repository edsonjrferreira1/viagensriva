import { createFileRoute, Link } from "@tanstack/react-router";
import { agency } from "@/config/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Viagens Riva" },
      {
        name: "description",
        content:
          "Saiba como a Viagens Riva coleta e utiliza os dados enviados no formulário de cotação.",
      },
      { property: "og:title", content: "Política de Privacidade | Viagens Riva" },
      {
        property: "og:description",
        content:
          "Como a Viagens Riva trata os dados enviados nas solicitações de cotação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link to="/" className="eyebrow">
        Voltar
      </Link>
      <h1 className="mt-4 text-4xl text-primary">Política de Privacidade</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          A {agency.name} (CNPJ {agency.cnpj}) coleta apenas os dados informados
          voluntariamente no formulário de cotação: nome, WhatsApp, e-mail,
          destino de interesse, tipo de viagem, datas de viagem, número de hóspedes,
          idades das crianças, serviços de interesse e observações.
        </p>
        <p>
          Esses dados são utilizados exclusivamente para elaborar e enviar sua
          cotação de viagem e prestar atendimento, sendo encaminhados por
          WhatsApp a partir do seu próprio aplicativo no momento do envio.
        </p>
        <p>
          Não vendemos nem compartilhamos seus dados com terceiros para fins
          publicitários. Dados podem ser compartilhados com fornecedores
          turísticos (hospedagem, companhias aéreas, transfer, seguro) apenas
          quando necessário para efetivar a reserva solicitada.
        </p>
        <p>
          Você pode solicitar a qualquer momento a confirmação, correção ou
          exclusão dos seus dados pelo WhatsApp {agency.whatsappDisplay}.
        </p>
      </div>
    </main>
  );
}

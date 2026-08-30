import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { faq, whatsappLink, defaultWhatsappMessage } from "@/config/site";

const title = "Dúvidas frequentes | Viagens Riva";
const description =
  "Todas as dúvidas sobre pagamento, parcelamento, documentação, remarcação, prazos e serviços das viagens organizadas pela Viagens Riva.";

export const Route = createFileRoute("/duvidas")({
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
  }),
  component: Duvidas,
});

function Duvidas() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
        <p className="eyebrow">Dúvidas</p>
        <h1 className="mt-3 text-4xl leading-tight text-primary sm:text-5xl">
          Todas as perguntas frequentes
        </h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/80">
          Pagamento, documentação, prazos, alterações e serviços: reunimos aqui
          tudo o que costuma ser perguntado antes de fechar uma viagem.
        </p>

        <Accordion type="single" collapsible className="mt-10">
          {faq.map((item, i) => (
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

        <div className="mt-12 rounded-3xl border border-primary/15 bg-card p-8 text-center shadow-soft">
          <h2 className="font-display text-2xl text-primary">
            Ainda ficou com alguma dúvida?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
              <Link to="/">Voltar para a home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

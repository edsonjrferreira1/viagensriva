import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import {
  AccommodationsSection,
  CouplesSection,
  FamilySection,
  FaqSection,
  FinalCta,
  GastronomySection,
  InclusiveSection,
  LeisureSection,
  LocationSection,
  ResortSection,
  SpaSection,
  WhyRivaSection,
} from "@/components/site/Sections";

const title = "SERHS Natal com SERHS Inclusive | Cotação Viagens Riva";
const description =
  "Conheça o SERHS Natal Grand Hotel & Resort e solicite sua cotação personalizada com opção SERHS Inclusive. Hospedagem e serviços para sua viagem a Natal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ResortSection />
        <InclusiveSection />
        <GastronomySection />
        <LeisureSection />
        <FamilySection />
        <CouplesSection />
        <AccommodationsSection />
        <SpaSection />
        <LocationSection />
        <WhyRivaSection />
        <Section id="cotacao">
          <QuoteForm />
        </Section>
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

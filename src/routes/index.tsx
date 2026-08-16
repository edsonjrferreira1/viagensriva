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
  DesireSection,
  DestinationsSection,
  ExperiencesSection,
  ExpertSection,
  FaqSection,
  FinalCta,
  GastronomySection,
  InclusiveSection,
  LeisureSection,
  FamilySection,
  WhyAllInclusiveSection,
  WhyRivaSection,
  TestimonialsSection,

} from "@/components/site/Sections";

const title = "Viagens Riva | Resorts Premium e All Inclusive";
const description =
  "Agência de viagens especializada em resorts premium e All Inclusive no Brasil e no exterior. Cotação personalizada via WhatsApp com a Viagens Riva.";

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
        <DesireSection />
        <InclusiveSection />
        <GastronomySection />
        <LeisureSection />
        <FamilySection />
        <CouplesSection />
        <AccommodationsSection />
        <DestinationsSection />
        <ExperiencesSection />
        <WhyAllInclusiveSection />
        <ExpertSection />
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

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
  GoogleRatingBadge,
  InclusiveSection,
  FamilySection,
  ServicesSection,
  TravelServicesSection,
  WhyRivaSection,
  TestimonialsSection,
} from "@/components/site/Sections";
import heroDesktop from "@/assets/hero-premium-desktop.jpg.asset.json";
import heroMobile from "@/assets/hero-premium-mobile.jpg.asset.json";

const title = "Viagens Riva | Viagens nacionais e internacionais";
const description =
  "Agência de viagens que organiza passagens, hospedagens, resorts All Inclusive, cruzeiros, seguro, transfer e passeios. Cotação personalizada via WhatsApp.";

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
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroMobile.url,
        media: "(max-width: 767px)",
        fetchpriority: "high",
      },
      {
        rel: "preload",
        as: "image",
        href: heroDesktop.url,
        media: "(min-width: 768px)",
        fetchpriority: "high",
      },
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
        <GoogleRatingBadge />
        <ServicesSection />
        <DesireSection />
        <ExperiencesSection />
        <TravelServicesSection />
        <DestinationsSection />
        <InclusiveSection />
        <FamilySection />
        <CouplesSection />
        <AccommodationsSection />
        <ExpertSection />
        <WhyRivaSection />
        <TestimonialsSection />

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

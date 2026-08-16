import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import {
  AccommodationsSection,
  DesireSection,
  DestinationsSection,
  ExperiencesSection,
  ExpertSection,
  FaqSection,
  FinalCta,
  GoogleRatingBadge,
  MomentsSection,
  ServicesSection,
  WhyRivaSection,
  TestimonialsSection,
} from "@/components/site/Sections";

import heroDesktop from "@/assets/hero-premium-desktop.jpg.asset.json";
import heroMobile from "@/assets/hero-premium-mobile.jpg.asset.json";

const title =
  "Agência de Viagens em Goiânia | Passagens, Hospedagem, Cruzeiros e Resorts All Inclusive — Viagens Riva";
const description =
  "Viagens Riva: agência de viagens em Goiânia com Cadastur. Passagens aéreas, hospedagem, resorts All Inclusive, cruzeiros, seguro viagem, transfer e passeios, nacionais e internacionais. Cotação personalizada.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://viagensriva.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://viagensriva.lovable.app/" },
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Viagens Riva",
          url: "https://viagensriva.lovable.app/",
          telephone: "+55 62 98217-9433",
          areaServed: "BR",
          address: { "@type": "PostalAddress", addressLocality: "Goiânia", addressRegion: "GO", addressCountry: "BR" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: 23 },
        }),
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
        <WhyRivaSection />
        <DesireSection />
        <ExperiencesSection />
        <DestinationsSection />
        <AccommodationsSection />
        <MomentsSection />
        <ExpertSection />

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

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { CommunitiesInvite } from "@/components/site/CommunitiesInvite";
import { BackToTop } from "@/components/site/BackToTop";
import {
  TravelSection,
  ExpertSection,
  FaqSection,
  FinalCta,
  GoogleRatingBadge,
  WhyRivaSection,
  TestimonialsSection,
} from "@/components/site/Sections";

import heroDesktop from "@/assets/hero-premium-desktop.jpg";
import heroMobile from "@/assets/hero-premium-mobile.jpg";

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
      { property: "og:url", content: "https://viagensriva.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://viagensriva.com/" },
      {
        rel: "preload",
        as: "image",
        href: heroMobile,
        media: "(max-width: 767px)",
        fetchpriority: "high",
      },
      {
        rel: "preload",
        as: "image",
        href: heroDesktop,
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
          url: "https://viagensriva.com/",
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
        <TravelSection />
        <WhyRivaSection />
        <ExpertSection />

        <TestimonialsSection />


        <CommunitiesInvite />

        <Section id="cotacao">
          <QuoteForm />
        </Section>
        <FaqSection />
        <FinalCta />

      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

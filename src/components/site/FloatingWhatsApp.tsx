import { MessageCircle } from "lucide-react";
import { whatsappLink, defaultWhatsappMessage } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-ocean px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ocean-foreground shadow-lift transition hover:bg-ocean/90"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Falar pelo WhatsApp</span>
    </a>
  );
}

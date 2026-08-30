import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Botão discreto de "voltar ao topo", exibido após duas telas de rolagem. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 left-4 z-40 inline-flex size-11 items-center justify-center rounded-full border border-primary/20 bg-card text-primary shadow-lift transition hover:border-gold hover:text-gold"
    >
      <ArrowUp className="size-5" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, agency } from "@/config/site";
import logoAsset from "@/assets/logo-riva.png.asset.json";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft"
          : "bg-white/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <a href="#top" className="flex items-center" aria-label={agency.name}>
          <img
            src={logoAsset.url}
            alt={`Logo ${agency.name}`}
            width={512}
            height={512}
            className="h-12 w-auto object-contain sm:h-14 lg:h-16"
          />
        </a>


        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.78rem] font-medium tracking-wide text-foreground/80 transition-colors hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="cta"
            size="sm"
            className="hidden rounded-full px-5 sm:inline-flex"
          >
            <a href="#cotacao">Solicitar cotação</a>
          </Button>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary xl:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col surface-deep xl:hidden">
          <div className="flex items-center justify-between px-4 py-4">
            <span className="inline-flex items-center rounded-xl bg-white px-3 py-2">
              <img
                src={logoAsset.url}
                alt={`Logo ${agency.name}`}
                width={512}
                height={512}
                className="h-10 w-auto object-contain"
              />
            </span>

            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 pb-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/15 py-4 font-display text-2xl text-white"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              variant="gold"
              size="xl"
              className="mt-8 w-full"
              onClick={() => setOpen(false)}
            >
              <a href="#cotacao">Solicitar cotação</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

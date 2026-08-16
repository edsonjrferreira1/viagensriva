import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, agency } from "@/config/site";
import logo from "@/assets/logo-riva.png";
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
          ? "bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logo}
            alt={`Logo ${agency.name}`}
            width={512}
            height={512}
            className={cn(
              "h-10 w-10 object-contain transition",
              !scrolled && "brightness-0 invert",
            )}
          />
          <span
            className={cn(
              "font-display text-lg leading-none tracking-wide",
              scrolled ? "text-primary" : "text-sand",
            )}
          >
            Viagens <span className="italic">Riva</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.78rem] tracking-wide transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-ocean"
                  : "text-sand/90 hover:text-sand",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant={scrolled ? "cta" : "glass"}
            size="sm"
            className="hidden rounded-full px-5 sm:inline-flex"
          >
            <a href="#cotacao">Solicitar cotação</a>
          </Button>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full xl:hidden",
              scrolled ? "text-primary" : "text-sand",
            )}
          >
            {open ? <Menu className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col surface-deep xl:hidden">
          <div className="flex items-center justify-between px-4 py-4">
            <span className="font-display text-xl text-sand">
              Viagens <span className="italic">Riva</span>
            </span>
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sand"
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
                className="border-b border-sand/15 py-4 font-display text-2xl text-sand"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              variant="champagne"
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

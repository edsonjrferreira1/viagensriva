import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, agency } from "@/config/site";
import logoAsset from "@/assets/logo-riva.png.asset.json";
import { cn } from "@/lib/utils";

const sectionIds = [
  "servicos",
  "diferenciais",
  "inspiracao",
  "experiencias",
  "cruzeiros",
  "destinos",
  "hospedagens",
  "resorts",
  "momentos",
  "sobre",
  "avaliacoes",
  "cotacao",
  "faq",
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (item: { href: string; children?: { href: string }[] }) =>
    active === item.href ||
    Boolean(item.children?.some((c) => c.href === active)) ||
    (item.href === "#hospedagens" && active === "#resorts");

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 160);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft"
          : "bg-white/85 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:gap-6">
        <a
          href="#top"
          className="flex shrink-0 items-center"
          aria-label={agency.name}
        >
          <img
            src={logoAsset.url}
            alt={`Logo ${agency.name}`}
            width={512}
            height={512}
            className="h-11 w-auto object-contain lg:h-14"
          />
        </a>

        <nav className="hidden h-full items-center gap-4 lg:flex xl:gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative flex h-full items-center"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenDropdown(item.href);
                }}
                onMouseLeave={scheduleClose}
              >
                <a
                  href={item.href}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.href}
                  onClick={() => setOpenDropdown(null)}
                  onFocus={() => setOpenDropdown(item.href)}
                  className={cn(
                    "inline-flex items-center gap-1 whitespace-nowrap border-b-2 border-transparent py-1 text-[0.94rem] font-medium leading-none tracking-wide transition-colors",
                    isActive(item)
                      ? "border-gold text-primary"
                      : "text-foreground/80 hover:text-teal",
                  )}
                >
                  {item.label}
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </a>

                {openDropdown === item.href && (
                  <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                    <ul className="overflow-hidden rounded-2xl border border-primary/15 bg-white p-2 shadow-lift">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block rounded-xl px-4 py-2.5 text-[0.95rem] text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center whitespace-nowrap border-b-2 border-transparent py-1 text-[0.94rem] font-medium leading-none tracking-wide transition-colors",
                  isActive(item)
                    ? "border-gold text-primary"
                    : "text-foreground/80 hover:text-teal",
                )}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            asChild
            variant="cta"
            size="sm"
            className="hidden whitespace-nowrap rounded-full px-5 text-[0.9rem] sm:inline-flex lg:h-11 lg:px-6"
          >
            <a href="#cotacao">Solicitar cotação</a>
          </Button>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col surface-deep lg:hidden">
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
              <div key={item.href} className="border-b border-white/15 py-3">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-2xl text-white"
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="mt-2 space-y-1 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-white/80"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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

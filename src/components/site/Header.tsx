import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, agency } from "@/config/site";
import logoAsset from "@/assets/logo-riva.png";
import { cn } from "@/lib/utils";

// A ordem do menu espelha a ordem das seções na página — manter sincronizado.
const sectionIds = [
  "experiencias",
  "servicos",
  "destinos",
  "sobre",
  "avaliacoes",
  "cotacao",
  "faq",
];

function NavA({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  if (href.startsWith("/") && !href.includes("#")) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const resolve = (href: string) =>
    href.startsWith("#") ? (isHome ? href : `/${href}`) : href;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: destaca no menu a seção visível no momento.
  useEffect(() => {
    if (!isHome) return;
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
  }, [isHome]);

  const linkClass = (href: string) =>
    cn(
      "inline-flex items-center whitespace-nowrap border-b-2 border-transparent py-1 text-[0.94rem] font-medium leading-none tracking-wide transition-colors",
      active === href
        ? "border-gold text-primary"
        : "text-foreground/80 hover:text-teal",
    );

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
          href={isHome ? "#top" : "/"}
          className="flex shrink-0 items-center"
          aria-label={agency.name}
        >
          <img
            src={logoAsset}
            alt={`Logo ${agency.name}`}
            width={512}
            height={512}
            className="h-11 w-auto object-contain lg:h-14"
          />
        </a>

        <nav className="hidden h-full items-center gap-4 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <NavA
              key={item.href}
              href={resolve(item.href)}
              className={linkClass(item.href)}
            >
              {item.label}
            </NavA>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            asChild
            variant="cta"
            size="sm"
            className="hidden whitespace-nowrap rounded-full px-5 text-[0.9rem] sm:inline-flex lg:h-11 lg:px-6"
          >
            <a href={resolve("#cotacao")}>Solicitar cotação</a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[100] lg:hidden">
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-sm"
            />
            <div className="absolute inset-y-0 right-0 flex h-full w-[86%] max-w-sm animate-in slide-in-from-right duration-200 flex-col surface-deep shadow-lift">
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5">
                  <img
                    src={logoAsset}
                    alt={`Logo ${agency.name}`}
                    width={512}
                    height={512}
                    className="h-8 w-auto object-contain"
                  />
                </span>
                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
                <ul className="flex flex-col">
                  {navItems.map((item) => (
                    <li key={item.href} className="border-b border-white/10">
                      <NavA
                        href={resolve(item.href)}
                        onClick={() => setOpen(false)}
                        className="block py-4 text-lg font-medium text-white"
                      >
                        {item.label}
                      </NavA>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="gold"
                  size="xl"
                  className="mt-6 w-full"
                  onClick={() => setOpen(false)}
                >
                  <a href={resolve("#cotacao")}>Solicitar cotação</a>
                </Button>
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "sand" | "deep";
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-y scroll-mt-[104px] px-4 sm:px-6",
        tone === "sand" && "bg-secondary",
        tone === "deep" && "surface-deep",
        className,
      )}

    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  invert,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  invert?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", invert && "text-champagne")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-2 text-3xl leading-[1.1] sm:text-4xl md:text-5xl",
          invert ? "text-sand" : "text-primary",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed",
            invert ? "text-white/90" : "text-foreground/80",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

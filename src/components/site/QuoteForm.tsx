import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { SectionHeading } from "./Section";
import { interestOptions, resort, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

const initial = {
  nome: "",
  whatsapp: "",
  cidade: "",
  checkin: "",
  checkout: "",
  adultos: "2",
  criancas: "0",
  idades: "",
  observacoes: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(initial);
  const [interests, setInterests] = useState<string[]>(["Hospedagem"]);

  const set = (key: keyof typeof initial) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleInterest = (option: string) =>
    setInterests((list) =>
      list.includes(option)
        ? list.filter((i) => i !== option)
        : [...list, option],
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      `Olá! Gostaria de receber uma cotação para o ${resort.name}.`,
      "",
      `Nome: ${form.nome || "-"}`,
      `WhatsApp: ${form.whatsapp || "-"}`,
      `Cidade de origem: ${form.cidade || "-"}`,
      `Check-in: ${form.checkin || "-"}`,
      `Check-out: ${form.checkout || "-"}`,
      `Adultos: ${form.adultos || "-"}`,
      `Crianças: ${form.criancas || "0"}`,
      `Idades: ${form.idades || "-"}`,
      "",
      "Tenho interesse em:",
      interests.length ? interests.join(", ") : "-",
      "",
      "Observações:",
      form.observacoes || "-",
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionHeading
        eyebrow="Cotação personalizada"
        title="Quanto custa viver essa experiência?"
        subtitle="Conte para a gente como será sua viagem e receba uma cotação personalizada. Os valores variam conforme período, ocupação, categoria da acomodação, regime escolhido e disponibilidade."
      />

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nome" id="nome">
            <Input
              id="nome"
              required
              value={form.nome}
              onChange={(e) => set("nome")(e.target.value)}
              placeholder="Seu nome"
            />
          </Field>
          <Field label="WhatsApp" id="whatsapp">
            <Input
              id="whatsapp"
              required
              inputMode="tel"
              value={form.whatsapp}
              onChange={(e) => set("whatsapp")(e.target.value)}
              placeholder="(00) 00000-0000"
            />
          </Field>
          <Field label="Cidade de origem" id="cidade" className="sm:col-span-2">
            <Input
              id="cidade"
              value={form.cidade}
              onChange={(e) => set("cidade")(e.target.value)}
              placeholder="De onde você vai sair"
            />
          </Field>
          <Field label="Check-in" id="checkin">
            <Input
              id="checkin"
              type="date"
              value={form.checkin}
              onChange={(e) => set("checkin")(e.target.value)}
            />
          </Field>
          <Field label="Check-out" id="checkout">
            <Input
              id="checkout"
              type="date"
              value={form.checkout}
              onChange={(e) => set("checkout")(e.target.value)}
            />
          </Field>
          <Field label="Adultos" id="adultos">
            <Input
              id="adultos"
              type="number"
              min={1}
              value={form.adultos}
              onChange={(e) => set("adultos")(e.target.value)}
            />
          </Field>
          <Field label="Crianças" id="criancas">
            <Input
              id="criancas"
              type="number"
              min={0}
              value={form.criancas}
              onChange={(e) => set("criancas")(e.target.value)}
            />
          </Field>
          <Field
            label="Idade das crianças"
            id="idades"
            className="sm:col-span-2"
          >
            <Input
              id="idades"
              value={form.idades}
              onChange={(e) => set("idades")(e.target.value)}
              placeholder="Ex.: 4 e 9 anos"
            />
          </Field>
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-primary">
            Tenho interesse em:
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {interestOptions.map((option) => {
              const active = interests.includes(option);
              return (
                <label
                  key={option}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-xs transition",
                    active
                      ? "border-ocean bg-ocean text-ocean-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-ocean",
                  )}
                >
                  <Checkbox
                    checked={active}
                    onCheckedChange={() => toggleInterest(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </fieldset>

        <Field label="Observações" id="obs" className="mt-6">
          <Textarea
            id="obs"
            rows={3}
            value={form.observacoes}
            onChange={(e) => set("observacoes")(e.target.value)}
            placeholder="Datas flexíveis, preferências, ocasião especial..."
          />
        </Field>

        <Button type="submit" variant="cta" size="xl" className="mt-6 w-full">
          Receber minha cotação
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Ao enviar, seus dados são organizados em uma única mensagem no
          WhatsApp da Viagens Riva.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  id,
  children,
  className,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <Label htmlFor={id} className="text-xs text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}

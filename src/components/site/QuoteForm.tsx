import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { SectionHeading } from "./Section";
import { agency, interestOptions, whatsappLink, tripTypes } from "@/config/site";
import { cn } from "@/lib/utils";

const initial = {
  nome: "",
  whatsapp: "",
  email: "",
  destino: "",
  checkin: "",
  checkout: "",
  adultos: "2",
  criancas: "0",
  idades: "",
  tipo: "Ainda não sei",
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
      "Olá! Gostaria de planejar minha próxima viagem com a Viagens Riva.",
      "",
      `Nome: ${form.nome || "-"}`,
      `WhatsApp: ${form.whatsapp || "-"}`,
      `E-mail: ${form.email || "-"}`,
      `Destino de interesse: ${form.destino || "-"}`,
      `Tipo de viagem: ${form.tipo || "-"}`,
      `Ida: ${form.checkin || "-"}`,
      `Volta: ${form.checkout || "-"}`,
      `Adultos: ${form.adultos || "-"}`,
      `Crianças: ${form.criancas || "0"}`,
      `Idades: ${form.idades || "-"}`,
      "",
      "Gostaria de incluir na viagem:",
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
        eyebrow="Planejamento de viagem"
        title="Vamos planejar sua próxima viagem?"
        subtitle="Conte como você quer viajar e receba uma cotação personalizada. Os valores variam conforme período, destino, número de passageiros, serviços escolhidos e disponibilidade."
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
          <Field label="E-mail" id="email" className="sm:col-span-2">
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => set("email")(e.target.value)}
              placeholder="seu@email.com"
            />
          </Field>
          <Field label="Destino de interesse" id="destino" className="sm:col-span-2">
            <Input
              id="destino"
              value={form.destino}
              onChange={(e) => set("destino")(e.target.value)}
              placeholder="Ex: Nordeste, Sul, Caribe, Europa..."
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
          <Field label="Tipo de viagem" id="tipo" className="sm:col-span-2">
            <select
              id="tipo"
              value={form.tipo}
              onChange={(e) => set("tipo")(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {tripTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
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
                      ? "border-teal bg-teal text-teal-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-teal",
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
            placeholder="Datas flexíveis, preferências, ocasião especial, necessidades especiais..."
          />
        </Field>

        <Button type="submit" variant="cta" size="xl" className="mt-6 w-full">
          Receber minha cotação
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Ao enviar, seus dados são organizados em uma única mensagem no
          WhatsApp da Viagens Riva.
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Acompanhe também no Instagram{" "}
          <a
            href={agency.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal hover:underline"
          >
            {agency.instagramHandle}
          </a>
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

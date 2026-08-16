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
  flexibilidade: "",
  perfil: "",
  momento: "",
  observacoes: "",
};

const flexOptions = [
  "Até 1 ou 2 dias",
  "Até 3 dias",
  "Até 5 dias",
  "Até 7 dias",
  "Tenho bastante flexibilidade",
  "Posso considerar outras datas se houver uma boa oportunidade",
];

const perfilOptions: { label: string; hint: string }[] = [
  {
    label: "Melhor preço / Promoção",
    hint: "Quero priorizar as opções mais econômicas e boas oportunidades.",
  },
  {
    label: "Melhor custo-benefício",
    hint: "Quero equilibrar preço, conforto, horários e qualidade.",
  },
  {
    label: "Mais conforto",
    hint: "Aceito investir um pouco mais para ter melhores opções de voo, hospedagem ou experiência.",
  },
  {
    label: "Experiência premium",
    hint: "Quero priorizar qualidade, conforto e experiências diferenciadas.",
  },
  {
    label: "Ainda não sei",
    hint: "Quero receber orientação para entender qual opção faz mais sentido para mim.",
  },
];

const momentoOptions: { label: string; hint: string }[] = [
  {
    label: "Quero reservar o quanto antes",
    hint: "Já estou decidido(a) a viajar e quero avançar assim que encontrarmos uma boa opção.",
  },
  {
    label: "Pretendo reservar nos próximos dias",
    hint: "Já estou pesquisando para tomar uma decisão em breve.",
  },
  {
    label: "Estou comparando opções",
    hint: "Ainda estou avaliando destinos, valores ou possibilidades.",
  },
  {
    label: "Estou apenas começando a pesquisar",
    hint: "Ainda não tenho previsão de fechar a viagem.",
  },
];

export function QuoteForm() {
  const [form, setForm] = useState(initial);
  const [interests, setInterests] = useState<string[]>(["Hospedagem"]);
  const [hasFlex, setHasFlex] = useState(false);

  const set = (key: keyof typeof initial) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleInterest = (option: string) =>
    setInterests((list) =>
      list.includes(option)
        ? list.filter((i) => i !== option)
        : [...list, option],
    );

  const handleFlexCheck = (checked: boolean) => {
    setHasFlex(checked);
    if (!checked) set("flexibilidade")("");
  };

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
      `Flexibilidade de datas: ${hasFlex ? form.flexibilidade || "-" : "Não tenho flexibilidade"}`,
      `Adultos: ${form.adultos || "-"}`,
      `Crianças: ${form.criancas || "0"}`,
      `Idades: ${form.idades || "-"}`,
      "",
      "Perfil da viagem:",
      form.perfil || "-",
      "",
      "Momento da decisão:",
      form.momento || "-",
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
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10">
      <SectionHeading
        align="center"
        eyebrow="Planejamento de viagem"
        title="Vamos planejar sua próxima viagem?"
        subtitle="Conte como você quer viajar e receba uma cotação personalizada. Os valores variam conforme período, destino, número de passageiros, serviços escolhidos e disponibilidade."
      />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-8"
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
          <Field label="Data de ida" id="checkin">
            <Input
              id="checkin"
              type="date"
              value={form.checkin}
              onChange={(e) => set("checkin")(e.target.value)}
            />
          </Field>
          <Field label="Data de volta" id="checkout">
            <Input
              id="checkout"
              type="date"
              value={form.checkout}
              onChange={(e) => set("checkout")(e.target.value)}
            />
          </Field>

          <div className="sm:col-span-2">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border/60 bg-background p-3 transition hover:border-primary/30">
              <Checkbox
                checked={hasFlex}
                onCheckedChange={handleFlexCheck}
                className="mt-0.5"
                aria-describedby="flex-label"
              />
              <span id="flex-label" className="text-sm font-medium text-foreground">
                Tenho flexibilidade nas datas para buscar melhores valores
              </span>
            </label>

            {hasFlex && (
              <div className="mt-4">
                <p className="mb-2 text-sm font-medium text-foreground">
                  Qual é a sua flexibilidade?
                </p>
                <div className="flex flex-wrap gap-2">
                  {flexOptions.map((option) => {
                    const active = form.flexibilidade === option;
                    return (
                      <label
                        key={option}
                        className={cn(
                          "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition",
                          active
                            ? "border-teal bg-teal text-teal-foreground"
                            : "border-primary/25 bg-background text-foreground/85 hover:border-teal hover:text-primary",
                        )}
                      >
                        <input
                          type="radio"
                          name="flexibilidade"
                          value={option}
                          checked={active}
                          onChange={() => set("flexibilidade")(option)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

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
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {tripTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>

          <div className="sm:col-span-2">
            <p className="text-sm font-medium text-primary">
              O que você busca principalmente para esta viagem?
            </p>
            <p className="mt-1 text-xs text-foreground/75">
              Selecione apenas uma opção.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {perfilOptions.map(({ label, hint }) => {
                const active = form.perfil === label;
                return (
                  <label
                    key={label}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition",
                      active
                        ? "border-primary bg-primary/5"
                        : "border-border/60 bg-background hover:border-primary/30",
                    )}
                  >
                    <input
                      type="radio"
                      name="perfil"
                      value={label}
                      checked={active}
                      onChange={() => set("perfil")(label)}
                      className="mt-1 size-4 shrink-0 accent-primary"
                    />
                    <span className="block">
                      <span className="block text-sm font-medium text-foreground">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-foreground/75">
                        {hint}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="sm:col-span-2">
            <p className="text-sm font-medium text-primary">
              Em que momento você está para fechar sua viagem?
            </p>
            <p className="mt-1 text-xs text-foreground/75">
              Selecione apenas uma opção.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {momentoOptions.map(({ label, hint }) => {
                const active = form.momento === label;
                return (
                  <label
                    key={label}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition",
                      active
                        ? "border-primary bg-primary/5"
                        : "border-border/60 bg-background hover:border-primary/30",
                    )}
                  >
                    <input
                      type="radio"
                      name="momento"
                      value={label}
                      checked={active}
                      onChange={() => set("momento")(label)}
                      className="mt-1 size-4 shrink-0 accent-primary"
                    />
                    <span className="block">
                      <span className="block text-sm font-medium text-foreground">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-foreground/75">
                        {hint}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-foreground/70">
              Solicitações de clientes com viagem definida e intenção de reserva
              mais imediata podem receber prioridade na ordem de atendimento,
              conforme disponibilidade da equipe.
            </p>
          </div>
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-primary">
            Quais serviços você quer incluir?
          </legend>
          <p className="mt-1 text-xs text-foreground/75">
            Selecione quantas opções quiser.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {interestOptions.map((option) => {
              const active = interests.includes(option);
              return (
                <label
                  key={option}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition",
                    active
                      ? "border-teal bg-teal text-teal-foreground"
                      : "border-primary/25 bg-background text-foreground/85 hover:border-teal hover:text-primary",
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
        <p className="mt-3 text-center text-xs text-foreground/80">
          Ao enviar, seus dados são organizados em uma única mensagem no
          WhatsApp da Viagens Riva.
        </p>
        <p className="mt-2 text-center text-xs text-foreground/80">

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
      <Label htmlFor={id} className="text-xs font-medium text-foreground/85">
        {label}
      </Label>
      {children}
    </div>

  );
}

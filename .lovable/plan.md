# Ajustes: Especialista, Experiências e Destinos

Três seções revisadas para transmitir uma agência completa, premium e consultiva.

## 1. Seção "Quem cuida da sua viagem"

**Ícones dos serviços** — remover os emojis coloridos e usar ícones lineares Lucide, todos com o mesmo tamanho, espessura e cor da identidade (turquesa/dourado sobre fundo claro):

- Passagens aéreas → Plane
- Hospedagens → BedDouble
- Cruzeiros → Ship
- Aluguel de carros → Car
- Seguro viagem → ShieldCheck
- Transfer → BusFront
- Passeios e experiências → MapPinned

**Cards dos serviços** — em vez de "caixas de formulário": cartões com fundo branco, borda sutil, cantos arredondados, sombra leve, ícone dentro de um círculo de cor suave à esquerda e leve elevação no hover. Grade responsiva de 2 colunas (1 no mobile).

**Botões** — o principal passa a ser "Falar com a Viagens Riva" (WhatsApp, cor de destaque dourada) e o secundário "@viagensriva" em outline, com a mesma altura, arredondamento, tipografia, padding e tamanho de ícone do principal, formando um par visual coerente.

## 2. Seção "Experiências selecionadas"

**Subtítulo novo:** "Experiências e viagens planejadas para diferentes perfis, com opções de hospedagem, transporte, passeios e serviços complementares."

**Cards** passam a representar perfis de viagem (5 cards, texto e tags conforme solicitado):

- All Inclusive — Hospedagem | Aéreo | Transfer | Seguro | Lazer
- Viagem em família — Família | Hospedagem | Aéreo | Passeios | Transfer
- Experiência a dois — Casal | Hospedagem | Passeios | Seguro | Gastronomia
- Pacote completo — Aéreo | Hospedagem | Transfer | Seguro | Passeios
- Cruzeiros e experiências especiais — Cruzeiros | Experiências | Roteiros | Lazer

A linha "Regime:" sai (soava a hotel) e cada card ganha um ícone-perfil discreto no topo. O botão passa a ser "Montar minha viagem", com uma linha de apoio indicando que a cotação pode incluir aéreo, transfer, seguro e passeios.

## 3. Seção "Para onde você quer viajar?"

Título mantido. **Subtítulo novo:** "Da praia ao clima de montanha, do Brasil ao exterior, selecionamos destinos e experiências para as suas próximas férias."

**Quatro cards** com textos mais aspiracionais:

- Destinos de praia — sol, mar, resorts e dias de descanso
- Destinos de montanha — clima agradável, natureza, charme e hospedagens para relaxar
- Resorts internacionais — experiências fora do país com suporte completo
- Destinos de férias (novo) — conforto, lazer, boa hospedagem e experiências especiais

Botão dos cards: "Quero receber opções". Grade de 2 colunas no desktop com imagens maiores, gradiente sobre a foto e título sobreposto, dando um ar de seleção curada em vez de catálogo.

## Imagens

Será gerada uma nova imagem de alta qualidade para o card "Destinos de férias"; as três existentes (praia, montanha, internacional) permanecem.

## Detalhes técnicos

- `src/config/site.ts`: `agencyServices` passa a guardar o nome do ícone Lucide em vez do emoji; `experiences` e `destinations` reescritos com os novos textos, tags e ícones.
- `src/components/site/Sections.tsx`: `ExpertSection` (cards + botões), `ExperiencesSection` e `DestinationsSection` atualizadas; mapa de ícones tipado para Lucide.
- Nova imagem publicada via Lovable Assets e referenciada por ponteiro `.asset.json`.
- Sem mudanças de backend; todos os CTAs seguem para `#cotacao` ou WhatsApp.

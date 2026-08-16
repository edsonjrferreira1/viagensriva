# Reposicionamento da narrativa + revisão de legibilidade

Sem reconstruir o site: layout, paleta, tipografia e componentes atuais permanecem. Muda a NARRATIVA (a Viagens Riva organiza a viagem completa; resorts e All Inclusive são uma das especialidades) e o contraste dos textos.

## 1. Hero

- Mantém o título "Viagens selecionadas para quem merece o extraordinário."
- Etiqueta do topo passa de "ALL INCLUSIVE" para "VIAGENS NACIONAIS & INTERNACIONAIS".
- Linha de apoio passa a "Viagens nacionais e internacionais planejadas para você."
- Parágrafo: "Passagens, hospedagens, resorts, cruzeiros e experiências para você aproveitar sua viagem com mais tranquilidade."
- Destaques de credibilidade revisados para linguagem de agência completa.

## 2. Nova seção de serviços (logo após o Hero)

"Cuidamos de cada etapa da sua viagem." com 7 itens em ícones vetoriais minimalistas (sem emojis): passagens aéreas, hospedagens, cruzeiros, aluguel de carros, seguro viagem, transfer, passeios e experiências. CTA para o formulário.

## 3. Experiências para cada jeito de viajar

Seções hoje concentradas em hospedagem passam a apresentar formas de viajar: Resorts & All Inclusive, Viagens em família, Viagens a dois, Cruzeiros, Férias nacionais e internacionais, Praia & descanso. Composição visual equilibrada (não todos os cards em uma grade longa). Subtítulo de "Experiências selecionadas" passa a "Viagens e experiências pensadas para diferentes perfis."

## 4. All Inclusive enxuto

A seção de 7 cards vira um bloco comercial: título "Quer férias com ainda mais praticidade?", destaque "Resorts & All Inclusive", texto explicativo curto, 4 benefícios (gastronomia, bebidas, lazer, praticidade), nota discreta sobre variação por resort e CTA "Quero conhecer opções All Inclusive".

## 5. Destinos

Mesma seção, comunicação ampliada: praia, férias, montanha, internacionais e experiências especiais. Subtítulo inspirador, sem parecer catálogo de hotéis.

## 6. Institucional

Mantém foto, CNPJ, Cadastur e Instagram; reforça viagens nacionais e internacionais e a lista completa de serviços. Botão "Falar com a Viagens Riva".

## 7. Prova social

Mantida como está, imediatamente antes do formulário (5,0 no Google, 23 avaliações, depoimentos reais).

## 8. Formulário

Reposicionado como planejamento de viagem: "Vamos planejar sua próxima viagem?". A pergunta de serviços vira "O que você gostaria de incluir na sua viagem?" com seleção múltipla: passagens aéreas, hospedagem, resort/All Inclusive, cruzeiro, transfer, seguro viagem, aluguel de carros, passeios e experiências. Tudo enviado na mesma mensagem de WhatsApp.

## 9. FAQ

Reescrito com foco em viagem: pagamento, parcelamento, Pix, boleto sujeito a análise, documentação, crianças, alterações e cancelamentos, antecedência, contratar apenas alguns serviços, pacote completo, suporte. Apenas uma pergunta específica sobre All Inclusive. CTA final da seção mantido.

## 10. CTA final

"Vamos começar a planejar sua próxima viagem?" + "Conte para a Viagens Riva o que você está procurando e receba uma cotação personalizada." Botão "Quero planejar minha viagem".

## 11. Revisão de vocabulário

Varredura de "resort", "hospedagem", "All Inclusive" e "hotel" em toda a página, ampliando para viagem, experiência, pacote, férias, planejamento e destinos nacionais e internacionais onde a comunicação parecer restrita. SEO (title, description, og) atualizado para agência de viagens completa.

## 12. Legibilidade e contraste (toda a página)

- Tokens globais: escurecer o tom de texto secundário e criar um tom auxiliar separado para notas pequenas; bordas de cards e campos levemente mais definidas.
- Hero e blocos sobre foto: overlay/gradiente suficiente e textos em branco pleno ou quase pleno, sem apagar a fotografia.
- Cards: descrições e tags no novo tom escuro.
- Formulário: labels em azul-marinho, texto digitado de alto contraste, placeholders legíveis, chips inativos com texto escuro, notas abaixo do botão legíveis.
- FAQ: perguntas em contraste forte, respostas confortáveis.
- Rodapé: opacidades mais altas, aviso legal deixa de ser quase transparente, foco visível nos links.
- Menu: itens mais escuros em repouso.

## Detalhes técnicos

- Textos, listas de serviços, perfis, destinos e FAQ centralizados em `src/config/site.ts`.
- Ajustes de conteúdo em `Hero.tsx`, `Sections.tsx`, `QuoteForm.tsx`, `Footer.tsx`; nova seção de serviços reutilizando os componentes existentes.
- Contraste ajustado principalmente via tokens em `src/styles.css`, com substituições pontuais de classes `text-white/xx`.
- Sem mudança de identidade visual, logo, estrutura de rotas ou lógica de envio ao WhatsApp.

# Ajustes: Hero mais compacta, menu maior e Cruzeiros com 3 imagens

## 1. Hero mais compacta no desktop

Hoje a hero ocupa `min-h-[100svh]` com o conteúdo ancorado no rodapé da imagem, o que cria um vazio grande entre o cabeçalho e o texto.

- Desktop: altura passa a ~80vh (faixa 75–85vh), com limite máximo para telas muito altas.
- Conteúdo (badge, título, subtítulo, botões, selos) passa a ficar centralizado verticalmente no desktop, subindo em relação ao rodapé — o CTA fica dentro da primeira dobra.
- Redução dos espaçamentos internos (respiros entre título, subtítulo, parágrafo, botões e lista de destaques) para uma composição mais densa, sem apertar.
- Enquadramento da foto preservado: a imagem continua `object-cover`, com ponto de foco ajustado para que os elementos importantes não sejam cortados na altura menor.
- Margem confortável entre header e conteúdo mantida (padding superior compatível com a altura do header fixo).
- Mobile: mantém a leitura atual (altura de tela cheia e conteúdo ancorado embaixo), apenas com pequeno ajuste de espaçamentos para não ficar apertado.

## 2. Menu do cabeçalho com mais presença

- Aumento de ~12% no tamanho dos itens do menu principal e do botão "Solicitar cotação".
- Espaçamento entre itens reajustado para manter todos na mesma linha, sem quebra, em telas a partir de 1024px.
- Alinhamento vertical mantido entre logo, menu e botão; altura do header inalterada para não pesar.
- Itens do dropdown "Experiências" acompanham o mesmo ganho proporcional.

## 3. Seção de Cruzeiros com composição de 3 imagens

Substituir a imagem única por um mosaico elegante:

```text
Desktop (coluna direita):
+--------------------------+
|                          |
|      IMAGEM 1 (navio)    |
|                          |
+------------+-------------+
| IMAGEM 2   |  IMAGEM 3   |
| a bordo    |  destino/   |
|            |  gastronomia|
+------------+-------------+
```

- Imagem 1: navio de cruzeiro em cenário paradisíaco, luz dourada (a atual premium é reaproveitada).
- Imagem 2: experiência a bordo (deck com piscina / lounge elegante ao entardecer) — nova imagem.
- Imagem 3: diferencial da viagem (jantar sofisticado a bordo ou parada em enseada paradisíaca) — nova imagem.
- Cantos arredondados, mesma sombra e espaçamentos do restante da página; alturas equilibradas para o mosaico acompanhar a coluna de texto.
- Mobile: as três imagens aparecem em composição compacta (principal maior + duas menores lado a lado), mantendo carregamento leve.

## Detalhes técnicos

- `src/components/site/Hero.tsx`: alturas responsivas (`min-h` mobile mantido, `lg:h-[80vh]` com `max-h`), troca de `justify-end` para centralização no desktop, ajuste de paddings e escalas de espaçamento; `object-position` refinado.
- `src/components/site/Header.tsx`: `text-[0.82rem]` → ~`text-[0.92rem]` nos itens, gaps ajustados, tamanho do botão de cotação levemente maior, dropdown proporcional.
- `src/components/site/Sections.tsx` (`CruisesSection`): grid de mosaico substituindo o `<img>` único (versões desktop e mobile).
- Duas novas imagens geradas em alta resolução e publicadas via Lovable Assets, com `alt` descritivo e `loading="lazy"`.

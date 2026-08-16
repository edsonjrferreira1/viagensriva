# Ajustes de reorganização e refinamento de texto

## Objetivo
Reforçar o posicionamento de "agência completa" da Viagens Riva, eliminando repetições de seções de All Inclusive, Família e Casal, e melhorando a sofisticação dos textos — sem reconstruir o visual e sem tocar no formulário de cotação ou no FAQ.

## Ajustes solicitados

### 1. Resorts & All Inclusive unificado
```text
- Garantir que exista apenas uma seção de "Resorts & All Inclusive" na página.
- Consolidar nela os melhores pontos de gastronomia, lazer e benefícios do regime, sem repetição.
- Remover qualquer fragmento de seção separada sobre o mesmo tema.
- Revisar títulos dos cards para eliminar termos genéricos (ex: "Praticidade", "Previsibilidade", "Variedade") e adotar tom de confiança, proximidade e sofisticação.
```

### 2. Família e Casal: uma única ocorrência cada
```text
- Atualmente há referência a família/casal em cards da seção "Formas de viajar" e em seções dedicadas.
- Remover as referências duplicadas de "Família" e "Casal" da lista de experiências, mantendo as seções dedicadas com imagem e melhor texto.
- Ajustar a navegação/menu para refletir a estrutura final.
```

### 3. Agência completa com destaque visual
```text
- Fortalecer a seção "Agência completa" (Passagens Aéreas, Cruzeiros, Seguro Viagem, Transfer, Aluguel de Carro) para que tenha peso visual equivalente à seção de Resorts.
- Avaliar se a imagem atual e o layout transmitem claramente que a Viagens Riva não é apenas uma agência de resorts.
- Manter os 5 serviços como cards principais, com descrições diretas e CTA claro.
```

### 4. Selo do Google abaixo do Hero
```text
- Manter o selo compacto "5,0 no Google · 23 avaliações reais" logo abaixo do Hero.
- Preservar a seção completa de depoimentos (cards + botão "Ver mais avaliações no Google") antes do formulário.
```

### 5. Revisão de textos genéricos
```text
- Substituir/revisar textos como "Categorias sob consulta" / "Ocupação sob consulta" na seção de Hospedagens.
- Revisar títulos de cards de All Inclusive para evitar termos genéricos.
- Alinhar todo o tom a sofisticação, confiança e proximidade com o cliente.
```

## O que NÃO será alterado
```text
- Formulário de cotação (campos, lógica, mensagem do WhatsApp).
- Estrutura e perguntas do FAQ.
- Paleta de cores, fontes e identidade visual geral.
- Prova social completa (testemunhos do Google).
```

## Arquivos que serão editados
```text
- src/config/site.ts        — textos de experiências, hospedagens, benefícios All Inclusive, navegação.
- src/components/site/Sections.tsx — reorganização de seções, remoção de duplicatas, ajustes visuais da Agência Completa.
- src/routes/index.tsx      — ordem e presença das seções na página, se necessário.
```

## Critério de conclusão
```text
- Landing page renderiza sem erro.
- Seção de All Inclusive aparece uma única vez, com cards de texto sofisticados.
- Seções de Família e Casal aparecem uma única vez cada, com imagem dedicada.
- Seção "Agência completa" tem destaque visual comparável ao de Resorts.
- Selo do Google permanece abaixo do Hero; depoimentos completos permanecem antes do formulário.
- Textos genéricos são substituídos por versões mais específicas e alinhadas à marca.
- Build e preview visual aprovados.
```

# Hero em alta resolução, nova imagem de lazer e prova social do Google

Três ajustes na landing page da Viagens Riva: qualidade visual da primeira dobra, substituição da imagem de piscinas/lazer e criação de uma seção de avaliações reais do Google.

## 1. Hero em alta definição

- Gerar uma nova imagem premium de resort ao entardecer (piscina, iluminação quente, atmosfera sofisticada) em resolução ampla para desktop (1920px de largura) e uma variação vertical enquadrada para mobile.
- Publicar as duas versões via Lovable Assets e servir com `<picture>`: versão mobile abaixo de 768px, versão desktop acima disso — sem esticar nem ampliar além do tamanho original.
- Reduzir o peso do overlay atual, trocando o escurecimento uniforme por um degradê apenas na base, onde ficam título e botões, preservando nitidez e cor no restante da imagem.
- Manter `fetchPriority="high"` e dimensões declaradas para evitar salto de layout.

## 2. Nova imagem para "Piscinas e lazer"

- Substituir a foto atual por uma composição editorial: piscina de borda infinita, paisagismo tropical, espreguiçadeiras alinhadas, luz de fim de tarde, pessoas apenas discretas ao fundo.
- Alta resolução, enquadramento limpo, sensação de descanso e exclusividade.
- Manter o mesmo bloco e textos da seção; troca apenas do arquivo de imagem.

## 3. Seção de prova social — avaliações do Google

Nova seção entre o bloco do especialista e o formulário de cotação.

- Cabeçalho: título "Quem viaja com a gente, recomenda." e subtítulo "Experiências reais de clientes que confiaram suas viagens à Viagens Riva."
- Destaque no topo: bloco com 5 estrelas, "5,0 no Google" e "23 avaliações".
- Três cards com os depoimentos reais fornecidos (Gleice Nascimento, Izabella Cardoso, Nathalia Moura), cada um com frase de destaque em aspas, texto completo, 5 estrelas, nome do cliente e selo discreto indicando avaliação publicada no Google.
- Botão final "Ver mais avaliações no Google" apontando para https://share.google/k24MKSS3qRVz2ec5M (abre em nova aba).
- Nenhum depoimento, nome ou nota inventado. Visual próprio da marca (dourado, azul-marinho, fundo claro), sem imitar a interface do Google.
- Item "Avaliações" adicionado à navegação do cabeçalho.

## Detalhes técnicos

- Nota, número de avaliações, link do perfil e lista de depoimentos ficam em `src/config/site.ts` (`googleReviews`), facilitando atualizar a contagem no futuro.
- Novo componente `TestimonialsSection` em `src/components/site/Sections.tsx`, renderizado em `src/routes/index.tsx`.
- Imagens novas geradas e publicadas via Lovable Assets; ponteiros `.asset.json` em `src/assets/`. As imagens antigas do hero e de lazer deixam de ser referenciadas.
- As capturas do Google enviadas servem apenas como fonte dos textos; não serão embutidas na página.

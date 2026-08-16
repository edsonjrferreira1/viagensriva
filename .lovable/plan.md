# Revisão geral de legibilidade e contraste

Objetivo: manter a estética sofisticada da Viagens Riva, mas garantir leitura fácil em toda a landing page, seguindo boas práticas de acessibilidade (WCAG AA).

## Hierarquia de leitura adotada

- Títulos: azul-marinho profundo, contraste máximo.
- Subtítulos e descrições: cinza-azulado escuro, perfeitamente legível.
- Textos corridos: leitura confortável, nunca abaixo do contraste AA.
- Informações auxiliares (notas sob botões, avisos legais): discretas, mas ainda dentro do mínimo aceitável.

## Ajustes por área

1. Tokens globais
   - Escurecer o tom de texto secundário usado em toda a página (hoje claro demais sobre branco) e criar um tom auxiliar separado para notas pequenas, para que "secundário" e "auxiliar" não sejam a mesma cor apagada.
   - Escurecer levemente as bordas de cards e campos, para separar blocos sem depender de texto claro.

2. Banner principal (Hero)
   - Reforçar o gradiente escuro na base e adicionar leve escurecimento lateral onde ficam os textos, sem apagar a fotografia.
   - Subir o contraste do subtítulo, do parágrafo e da lista de destaques (hoje em branco translúcido) para branco pleno ou quase pleno.
   - Selo "All Inclusive" com fundo mais sólido para o dourado não sumir sobre áreas claras da foto.

3. Seções sobre imagem (desejo, gastronomia, famílias, casais, CTA final)
   - Padronizar overlay/gradiente suficiente atrás dos textos.
   - Textos sobre foto passam de branco translúcido para branco pleno; legendas em branco de alta opacidade.

4. Cards (All Inclusive, lazer, destinos, experiências, comparativo, depoimentos)
   - Descrições e tags com o novo tom secundário escuro.
   - Tags/pílulas com borda e texto mais definidos.

5. Formulário de cotação
   - Labels em azul-marinho, com peso um pouco maior.
   - Texto digitado em cor de alto contraste e placeholders num tom legível (nunca cinza claro).
   - Chips de interesse: estado inativo com texto escuro em vez de cinza claro.
   - Notas abaixo do botão em tom auxiliar legível.

6. FAQ
   - Perguntas em azul-marinho forte, respostas no tom de texto corrido confortável.
   - Bloco de CTA final da seção com texto mais escuro.

7. Rodapé (fundo escuro)
   - Textos brancos translúcidos passam para opacidades mais altas; o aviso legal pequeno deixa de ser quase transparente.
   - Links com estado hover e foco visível.

8. Menu e cabeçalho
   - Itens de navegação com tom mais escuro em repouso.

## Detalhes técnicos

- Ajustes concentrados em `src/styles.css` (tokens `--muted-foreground`, `--border`, `--input` e um novo token para texto auxiliar) para que a maior parte das seções melhore automaticamente.
- Substituições pontuais nas classes `text-white/xx` em `Hero.tsx`, `Sections.tsx` e `Footer.tsx`.
- Ajustes de label/placeholder em `QuoteForm.tsx` e nos primitivos `input`/`textarea` quando necessário.
- Nenhuma mudança de cor da logo, de estrutura de seções ou de lógica de conversão.
- Verificação final com checagem de contraste dos principais pares texto/fundo.

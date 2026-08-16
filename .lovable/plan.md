# Ajustes de marca, foto do Edson e serviços

## 1. Cabeçalho — apenas a logo
- Remover o texto "Viagens Riva" ao lado da logo (marca duplicada).
- Aumentar a logo: ~40px de altura no mobile e ~64px no desktop, sempre proporcional (`w-auto`, `object-contain`), sem cortes.
- Manter as cores originais da logo: remover o filtro que a deixa branca quando o cabeçalho está sobre o Hero. Para garantir contraste e nitidez, o cabeçalho passa a ter fundo branco levemente translúcido com desfoque desde o topo (em vez de transparente), preservando a logo colorida.
- Mesmo tratamento no menu mobile e no rodapé (logo original, sem recoloração).

## 2. Sua foto na seção institucional
- Usar a foto enviada na seção "Quem cuida da sua viagem" (Edson Ferreira), substituindo a imagem gerada atualmente.
- Apresentação profissional: recorte vertical elegante com cantos arredondados, sombra suave e leve moldura, alinhada ao texto em duas colunas no desktop e centralizada no mobile.

## 3. Instagram @viagensriva
- Adicionar nos dados da agência e exibir: no rodapé (ícone + @viagensriva), na seção de contato/CTA e no bloco do especialista.
- Link para instagram.com/viagensriva, abrindo em nova aba.

## 4. Serviços da agência (nacional e internacional)
- Novo bloco na parte institucional com os serviços em cartões/chips:
  Passagens aéreas · Hospedagens · Cruzeiros · Aluguel de carros · Seguro viagem · Transfer · Passeios e experiências.
- Texto de apoio deixando claro que a agência organiza viagens nacionais e internacionais.
- Incluir esses serviços também como opções de interesse no formulário de cotação (vai junto na mensagem do WhatsApp).

## Detalhes técnicos
- Foto enviada (HEIC) convertida para JPG otimizado e publicada via pointer de asset; importada na seção do especialista.
- `src/config/site.ts`: novos campos `instagram` e lista `services` (ícone + rótulo) para edição centralizada.
- Alterações em `Header.tsx`, `Footer.tsx`, `Sections.tsx` (Expert e novo bloco de serviços) e `QuoteForm.tsx`.

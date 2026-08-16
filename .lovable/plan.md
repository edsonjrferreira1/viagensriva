# Landing page Viagens Riva — Resorts e All Inclusive

Reposicionar a página atual (hoje focada em um resort específico) em uma landing page de marca própria da Viagens Riva, especializada em resorts premium e All Inclusive, sem citar nenhuma rede, hotel ou marca hoteleira. A página terá fundo branco/clean e profissional para acomodar naturalmente a logo da agência (que possui fundo branco), mantendo blocos de cor quentes para sofisticação e conversão.

## Identidade visual

Paleta extraída da logo enviada, com amarelo/dourado como cor dominante:
- Amarelo/âmbar dourado (cor principal, botões principais, destaques de CTA)
- Azul-marinho profundo (títulos, textos fortes, elementos de confiança)
- Turquesa (cor secundária, ícones, detalhes, toques de frescor)
- Vermelho-carmim (uso pontual, selos e destaques emocionais)
- Branco/off-white (fundo predominante, leitura confortável e profissional)
- Azul-marinho muito claro ou areia (fundo de blocos alternativos, quando necessário)

A logo será usada na versão transparente (sem fundo branco) no header e rodapé, garantindo integração limpa com o fundo branco da página. O amarelo/dourado lidera os elementos de conversão, enquanto o azul-marinho estrutura a hierarquia tipográfica e transmite credibilidade. Contraste e acessibilidade verificados para texto azul sobre branco e amarelo sobre branco.

## Estrutura de seções

1. Hero — "Férias do jeito que você merece." + selo ALL INCLUSIVE, subtítulo, texto complementar, dois botões (QUERO RECEBER UMA COTAÇÃO / CONHECER AS EXPERIÊNCIAS) e 4 destaques com check.
2. Seção de desejo — "E se suas próximas férias fossem assim?" com composição visual em mosaico de imagens.
3. Destaque All Inclusive — 7 cards (café da manhã, almoço, petiscos, jantar, bebidas, gastronomia, lazer), nota sobre variação de regras por resort e CTA.
4. Gastronomia — galeria visual + CTA "QUERO CONHECER AS OPÇÕES".
5. Piscinas, mar e lazer — 8 cards + observação sobre variação de estrutura.
6. Para famílias — imagem + texto + CTA.
7. Para casais — bloco mais intimista + CTA.
8. Destinos — cards editáveis (imagem, nome, descrição curta, botão "VER OPÇÕES"), definidos em arquivo de configuração.
9. Experiências selecionadas — cards de hospedagem genéricos e editáveis (foto, nome, destino, regime, diferenciais, botão de cotação), sem inventar hotéis reais.
10. Por que All Inclusive — 5 blocos comparativos (previsibilidade, praticidade, variedade, família, experiência).
11. Por que a Viagens Riva — 4 cards + bloco de credibilidade (CNPJ, Cadastur, WhatsApp).
12. Formulário de cotação — todos os campos pedidos, incluindo destino com opção "Ainda não sei", tipo de experiência e serviços desejados.
13. CTA final em seção visual ampla.
14. FAQ com as 7 perguntas indicadas (accordion).
15. Rodapé com logo, dados legais e links (Política de Privacidade, Termos de Uso, Contato).
16. Botão flutuante de WhatsApp em toda a página.

## Conversão e WhatsApp

Todo CTA leva ao formulário ou abre o WhatsApp `+55 62 98217-9433`. O envio do formulário monta **uma única mensagem** no formato exato solicitado e abre o WhatsApp em nova aba. Sem motor de reservas, sem preços fixos.

## Imagens

As fotos atuais serão reaproveitadas quando genéricas, e novas imagens serão geradas para cobrir os temas que faltam (mosaico de desejo, gastronomia variada, destinos, cards de experiências), sempre sem elementos que identifiquem um estabelecimento real.

## SEO e responsividade

Title, meta description, H1 e og tags atualizados para o novo posicionamento; termos como resort All Inclusive, resort para família, resort para casal, resort no Nordeste, pacote All Inclusive usados de forma natural no texto. Mobile em primeiro lugar: botões grandes, imagens otimizadas com dimensões definidas e lazy loading fora da primeira tela, WhatsApp sempre acessível.

## Detalhes técnicos

- `src/config/site.ts` passa a centralizar agência, paleta de referência, navegação, destinos, experiências, cards, FAQ e textos de CTA; remoção de todos os dados específicos do resort atual.
- `src/styles.css` recebe os novos tokens semânticos (OKLCH) da paleta da logo e variantes de botão correspondentes.
- Logo enviada publicada via Lovable Assets e referenciada por ponteiro.
- Componentes reutilizáveis em `src/components/site/` (Section, cards de destino, cards de experiência, galeria), permitindo adicionar novos destinos/resorts apenas editando a configuração.
- Rotas `/privacidade` e `/termos` mantidas e atualizadas com o novo nome/posicionamento; cada rota com head() próprio.

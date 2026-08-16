# Landing page Viagens Riva — Agência de Viagens Premium

Transformar a página atual (hoje focada em um resort de Natal) em uma landing page de **marca própria da agência Viagens Riva**, especializada em **resorts premium e All Inclusive no Brasil e no exterior**. A página não citará nenhuma cidade, hotel, rede ou marca hoteleira específica. O tom será **institucional e sofisticado**, com fundo branco/clean para integrar a logo da agência de forma elegante.

## Identidade visual

Paleta extraída da logo da Viagens Riva, com amarelo/dourado como cor dominante de conversão:
- Amarelo/âmbar dourado (CTAs principais, destaques, selos de conversão)
- Azul-marinho profundo (títulos, textos de autoridade, confiança)
- Turquesa (detalhes, ícones, toques de frescor e viagem)
- Vermelho-carmim (pontual, selos emocionais e urgentes)
- Branco/off-white (fundo predominante, leitura confortável)
- Areia/azul muito claro (fundo de blocos alternativos, quando necessário)

A logo será aplicada em versão transparente (sem fundo branco) no header e rodapé. O amarelo/dourado lidera os elementos de conversão; o azul-marinho estrutura a hierarquia tipográfica e transmite credibilidade. Contraste e acessibilidade verificados para texto azul sobre branco e amarelo sobre branco.

## Estrutura de seções

1. Hero — "Viagens selecionadas para quem merece o extraordinário." + selo ALL INCLUSIVE, subtítulo institucional, 4 destaques de credibilidade (atendimento personalizado, resorts selecionados, cotação sem compromisso, agência regularizada) e dois botões (QUERO UMA COTAÇÃO PERSONALIZADA / FALAR COM ESPECIALISTA).
2. Seção de desejo — "E se a sua próxima viagem fosse assim?" com composição visual em mosaico de imagens genéricas de resorts, praia, gastronomia e lazer.
3. O que é All Inclusive — 7 cards explicativos (refeições, petiscos, bebidas, gastronomia variada, lazer, recreação, praticidade), com nota de que regras variam por resort.
4. Gastronomia — galeria visual + CTA "QUERO CONHECER AS OPÇÕES".
5. Piscinas, mar e lazer — 8 cards genéricos sobre experiências de resort + observação sobre variação de estrutura.
6. Para famílias — bloco com imagem e texto + CTA.
7. Para casais — bloco mais intimista + CTA.
8. Acomodações — seção genérica sobre quartos e suítes, com opções para consulta.
9. Destinos — cards editáveis (imagem, nome, descrição curta, botão "VER OPÇÕES"), definidos em arquivo de configuração, sem nomear cidades específicas a menos que o usuário deseje.
10. Experiências selecionadas — cards genéricos de hospedagem (foto, nome, destino, regime, diferenciais, botão de cotação), sem inventar hotéis reais.
11. Por que All Inclusive — 5 blocos comparativos (previsibilidade, praticidade, variedade, família, experiência).
12. Quem cuida da sua viagem — seção de credibilidade com **Edson Ferreira**, responsável pela Viagens Riva, descrito como professor, mestre e apaixonado pelo mundo das viagens. Aguardará envio de foto pessoal ou usará imagem profissional/placeholder a ser confirmado.
13. Formulário de cotação — todos os campos (nome, WhatsApp, e-mail, destino de interesse com opção "Ainda não sei", datas, número de hóspedes, idades das crianças, tipo de experiência, serviços desejados, observações) compilados em uma única mensagem formatada para WhatsApp.
14. CTA final em seção visual ampla.
15. FAQ com 7 perguntas genéricas sobre All Inclusive, cotação, parcelamento, crianças, passagem aérea, transfer e preços.
16. Rodapé com logo, dados legais (CNPJ 52.272.137/0001-07), WhatsApp (62) 98217-9433 e links para Política de Privacidade, Termos de Uso e Contato.
17. Botão flutuante de WhatsApp em toda a página.

## Conversão e WhatsApp

Todo CTA leva ao formulário de cotação ou inicia conversa no WhatsApp `+55 62 98217-9433`. O envio do formulário monta **uma única mensagem organizada** no formato exato e abre o WhatsApp em nova aba. Sem motor de reservas, sem preços fixos, sem redirecionamento para sites de terceiros.

## Imagens

- Logo oficial da Viagens Riva: versão transparente enviada, publicada via Lovable Assets e usada no header e rodapé.
- Fotos reais enviadas pela agência (piscina ao pôr do sol e área de lazer diurna) serão convertidas de HEIC para JPG otimizado e usadas em posições de destaque — sem identificar marca ou estabelecimento.
- Novas imagens serão geradas para os temas que faltam (mosaico de desejo, gastronomia variada, destinos, cards de experiências), sempre genéricas e sem elementos que identifiquem um estabelecimento real.
- Foto de Edson Ferreira: o usuário será consultado sobre envio de uma imagem pessoal. Caso não envie, será usada uma imagem profissional genérica ou placeholder elegante, a ser confirmado.

## SEO e responsividade

Title, meta description, H1 e og tags atualizados para o novo posicionamento: agência de viagens, resorts premium, All Inclusive, viagens personalizadas, cotação de resort. Palavras-chave usadas de forma natural no texto. Mobile em primeiro lugar: botões grandes, imagens otimizadas com dimensões definidas, lazy loading fora da primeira tela, WhatsApp sempre acessível.

## Detalhes técnicos

- `src/config/site.ts` passa a centralizar agência, paleta de referência, navegação, destinos, experiências, cards, FAQ, textos de CTA e dados de Edson Ferreira; remoção de todos os dados específicos do resort atual (SERHS, Natal, restaurantes específicos).
- `src/styles.css` recebe os novos tokens semânticos (OKLCH) da paleta da logo e variantes de botão correspondentes.
- Logo enviada publicada via Lovable Assets e referenciada por ponteiro.
- Componentes reutilizáveis em `src/components/site/` (Section, cards de destino, cards de experiência, galeria), permitindo adicionar novos destinos/resorts apenas editando a configuração.
- Rotas `/privacidade` e `/termos` mantidas e atualizadas com o novo nome/posicionamento; cada rota com head() próprio.
- Formulário de cotação sem backend: a montagem da mensagem ocorre no cliente e abre WhatsApp via `https://wa.me/`.

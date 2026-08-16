# Revisão final: estrutura e cabeçalho

Sem reconstruir a página. Identidade visual, tipografia, paleta, imagens e o formulário atual permanecem como estão. O trabalho é de fusão de seções repetidas, reordenação e refinamento do menu.

## Cabeçalho

Menu principal reduzido a 6 itens + botão:

SERVIÇOS · EXPERIÊNCIAS · DESTINOS · SOBRE NÓS · AVALIAÇÕES · DÚVIDAS · [SOLICITAR COTAÇÃO]

- "Agência completa", "All Inclusive", "Famílias", "Casais" e "Planejar viagem" saem do menu — os conteúdos continuam na página.
- "Experiências" vira dropdown no desktop (abre no hover e no clique, fecha com Esc/clique fora, navegável por teclado) com: Resorts & All Inclusive, Cruzeiros, Viagens em família, Viagens a dois, Férias nacionais e internacionais. Cada item rola para a área correspondente. O próprio "Experiências" continua clicável e leva à seção geral.
- No mobile, esses subitens aparecem recuados dentro do menu hambúrguer.

### Alinhamento

- Linha única: logo à esquerda, navegação centralizada, botão à direita, tudo com a mesma altura e centralizado verticalmente.
- `whitespace-nowrap` em todos os itens: nada quebra em duas linhas.
- Espaçamento horizontal uniforme, ligeiramente reduzido em telas médias; o menu hambúrguer é ativado antes de qualquer quebra (breakpoint de troca ajustado para baixo, hoje em `xl`).
- Fonte não diminui de forma perceptível.

### Comportamento

- Header continua fixo, com rolagem suave até a âncora e compensação da altura do header (`scroll-margin-top` nas seções) para o título não ficar escondido.
- Indicação discreta da seção ativa durante a rolagem (sublinhado/cor no item correspondente), via observador de seções.

## Fusões de conteúdo

1. **Serviços + Agência completa → uma seção** (`#servicos`), título "Cuidamos de cada etapa da sua viagem.", com os 7 serviços: passagens aéreas, hospedagens, cruzeiros, aluguel de carros, seguro viagem, transfer, passeios e experiências. Descrições curtas e úteis. A seção "Agência completa" deixa de existir separadamente.
2. **Hospedagens + Resorts & All Inclusive → uma seção** (`#hospedagens`), título "Hospedagens para cada estilo de viagem" e o subtítulo indicado. Cards: Hotéis e pousadas, Resorts & All Inclusive (card em destaque visual), Flats e apartamentos, Hospedagens premium. Dentro do card em destaque, resumo em linha: gastronomia, bebidas quando incluídas, piscinas e lazer, recreação, praticidade + nota "Os serviços incluídos variam conforme o resort e o regime contratado." Nenhuma seção grande separada de All Inclusive.
3. **Famílias + Casais → uma seção** (`#momentos`), título "Viagens para cada momento da sua vida", dois cards lado a lado no desktop e empilhados no mobile, com os textos indicados.
4. **Inspiração** ("E se a sua próxima viagem fosse assim?") encurtada: imagens + bloco curto de texto + CTA, sem repetir o que já está em Serviços/Experiências/Destinos.
5. **Destinos**, **Sobre nós** (Edson + agência + CNPJ + Cadastur + Instagram), **Avaliações** (5,0 · 23 avaliações · depoimentos reais) e **FAQ** permanecem como estão, apenas com âncoras confirmadas e textos redundantes aparados.

## Nova ordem

Hero → Selo Google/credenciais → Serviços → Diferenciais → Inspiração → Experiências → Destinos → Hospedagens & All Inclusive → Viagens para cada momento → Sobre a Viagens Riva → Avaliações → Formulário → FAQ → CTA final → Rodapé.

## Detalhes técnicos

- `src/config/site.ts`: `navItems` reescrito com os 6 itens e a lista de subitens de Experiências; textos de serviços consolidados numa única lista; acréscimo dos tipos de hospedagem.
- `src/components/site/Header.tsx`: grid de três colunas, `whitespace-nowrap`, dropdown acessível, breakpoint responsivo ajustado, destaque de seção ativa com IntersectionObserver.
- `src/components/site/Sections.tsx`: `ServicesSection` absorve `TravelServicesSection` (removida); `AccommodationsSection` absorve `InclusiveSection` (removida) virando `#hospedagens`; `FamilySection` + `CouplesSection` viram `MomentsSection` (`#momentos`); `DesireSection` enxuta.
- `src/components/site/Section.tsx`: `scroll-mt` compatível com a altura do header.
- `src/routes/index.tsx`: ordem de renderização atualizada; head/JSON-LD mantidos.
- `QuoteForm` e a estrutura do FAQ não são alterados; todos os CTAs continuam apontando para `#cotacao`.

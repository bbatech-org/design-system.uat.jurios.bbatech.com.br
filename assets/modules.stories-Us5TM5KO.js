import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./modules-DPZSj9rI.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Website/Seções/Modules`,component:n,parameters:{layout:`fullscreen`,docs:{description:{component:[`Apresenta os módulos pagos: cabeçalho central, cards de módulo com preço e uma citação de cliente.`,``,`**Blocos:** Section, Container, SectionHeading, ModuleCard e QuoteCard.`,``,"**Props de conteúdo:** `eyebrow`, `title`, `description`, `modules` (até três ModuleCardProps: dois na primeira linha e o terceiro ao lado da citação) e `quote` (QuoteCardProps).",``,`**Responsividade**`,`- 375: tudo em uma coluna; título em 40px e quebras de linha manuais ocultas.`,`- 768: dois módulos por linha; na segunda, terceiro módulo e citação em proporção 532/644.`,`- 1440: mesma grade, limitada a 1200px.`].join(`
`)}}},args:{eyebrow:`Módulos`,modules:[{name:`Processos`,price:`A partir de R$ 149/mês`,dailyPrice:`R$ 5 por dia`,image:`/img/1479142506502-19b3a3b7ff33.jpg`,href:`#processos`},{name:`Prazos`,price:`A partir de R$ 99/mês`,dailyPrice:`R$ 3,30 por dia`,image:`/img/1454165804606-c3d57bc86b40.jpg`,href:`#prazos`},{name:`Financeiro`,price:`A partir de R$ 129/mês`,dailyPrice:`R$ 4,30 por dia`,image:`/img/1521791136064-7986c2920216.jpg`,href:`#financeiro`}],quote:{quote:`“O JuriOS tirou o caos da nossa sexta-feira.”`,author:`Dra. Ana Ribeiro, sócia · Ribeiro & Costa`}},argTypes:{eyebrow:{control:`text`,description:`Texto acima do título.`},title:{control:`text`,description:`Título da seção. Vazio usa o título padrão (com quebra de linha manual).`},description:{control:`text`,description:`Texto abaixo do título. Vazio usa o padrão (com quebra de linha manual).`},modules:{control:`object`,description:"Até três módulos (ModuleCardProps[]: `{ name, price, dailyPrice, image, href }`)."},quote:{control:`object`,description:"Citação ao lado do terceiro módulo (`{ quote, author, avatar? }`)."},className:{table:{disable:!0}}}},i={},a={parameters:{docs:{description:{story:`Citação com foto do autor.`}}},args:{quote:{quote:`“O JuriOS tirou o caos da nossa sexta-feira.”`,author:`Dra. Ana Ribeiro, sócia · Ribeiro & Costa`,avatar:`/img/1573497019940-1c28c88b4f3e.jpg`}}},o=[`Default`,`WithQuotePhoto`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Citação com foto do autor."
      }
    }
  },
  args: {
    quote: {
      quote: "“O JuriOS tirou o caos da nossa sexta-feira.”",
      author: "Dra. Ana Ribeiro, sócia · Ribeiro & Costa",
      avatar: "/img/1573497019940-1c28c88b4f3e.jpg"
    }
  }
}`,...a.parameters?.docs?.source}}}})))()}s();export{i as Default,a as WithQuotePhoto,o as __namedExportsOrder,r as default};
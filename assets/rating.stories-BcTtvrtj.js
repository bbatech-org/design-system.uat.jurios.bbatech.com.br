import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./rating-DU3MOrer.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Website/Blocos/Rating`,component:n,parameters:{docs:{description:{component:[`Estrelas com a nota e a origem da avaliação (ex.: "5/5 no Google").`,``,`**Onde aparece:** topo do TestimonialCard e depoimento do SiteFooter.`,``,'**Props de conteúdo:** `rating` (0 a 5, aceita frações), `scoreLabel` (texto antes da origem; padrão "{nota}/5 no", com a nota formatada em pt-BR) e `source` (padrão "Google").',``,'A nota é formatada com `Intl.NumberFormat("pt-BR")` (até uma casa decimal): `rating={4.9}` exibe "4,9/5 no Google" sem precisar de `scoreLabel`. Use `scoreLabel` só para trocar o texto (ex.: "Nota média").'].join(`
`)}}},args:{rating:5,source:`Google`},argTypes:{rating:{control:{type:`range`,min:0,max:5,step:.1},description:`Nota de 0 a 5.`},scoreLabel:{control:`text`,description:`Texto da nota; vazio usa "{nota}/5 no".`},source:{control:`text`,description:`Origem da avaliação.`},className:{table:{disable:!0}}}},i={},a={parameters:{docs:{description:{story:`Nota fracionária: o padrão já formata "4,9/5 no Google".`}}},args:{rating:4.9}},o=[`Default`,`Fractional`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Nota fracionária: o padrão já formata \\"4,9/5 no Google\\"."
      }
    }
  },
  args: {
    rating: 4.9
  }
}`,...a.parameters?.docs?.source}}}})))()}s();export{i as Default,a as Fractional,o as __namedExportsOrder,r as default};
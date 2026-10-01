import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./support-column-rdQduv2m.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`Website/Blocos/SupportColumn`,component:r,parameters:{docs:{description:{component:[`Coluna de apoio com filete à esquerda: título (ou estrelas) e legenda curta.`,``,`**Onde aparece:** as três colunas abaixo do título da SupportSection.`,``,"**Props de conteúdo:** `title`, `description` e `rating`. Com `rating`, as estrelas substituem o título; use a legenda para explicar a nota."].join(`
`)}}},args:{title:`Fale conosco a qualquer hora`,description:`Converse com a equipe a qualquer hora do dia ou da noite, em português`},argTypes:{title:{control:`text`,description:"Título da coluna; omitido quando há `rating`."},rating:{control:{type:`range`,min:0,max:5,step:.1},description:`Quando informado, mostra as estrelas no lugar do título.`},description:{control:`text`,description:`Texto da coluna.`},className:{table:{disable:!0}}},render:e=>(0,i.jsx)(`div`,{className:`w-[384px]`,children:(0,i.jsx)(r,{...e})})},o={},s={parameters:{docs:{description:{story:`Estrelas no lugar do título.`}}},args:{title:void 0,rating:5,description:`Avaliação 4,9 no Google: o triplo da média do setor jurídico`}},c=[`Default`,`WithRating`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Estrelas no lugar do título."
      }
    }
  },
  args: {
    title: undefined,
    rating: 5,
    description: "Avaliação 4,9 no Google: o triplo da média do setor jurídico"
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Default,s as WithRating,c as __namedExportsOrder,a as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r,t as i}from"./stars-D08v4CRE.js";var a,o,s,c,l;function u(){return(u=e((()=>{r(),a=t(),o={title:`Website/Blocos/Stars`,component:i,parameters:{docs:{description:{component:[`Cinco estrelas douradas; a nota preenche a fileira de forma proporcional (4,5 pinta quatro estrelas e meia).`,``,`**Onde aparece:** dentro de Rating e da SupportColumn com avaliação.`,``,"**Props:** `rating` de 0 a 5, com frações.",``,'**Formatação:** `formatRating(nota)` formata a nota em pt-BR (`Intl.NumberFormat("pt-BR")`, até uma casa decimal: 4.9 vira "4,9"). É a mesma usada no rótulo acessível e no Rating.',``,'**Acessibilidade:** `role="img"` com rótulo "Avaliação 4,5 de 5". É só exibição; não serve para coletar avaliações.',``,`As estrelas são um dos três usos permitidos do dourado, junto com o logo e o ActionLink.`].join(`
`)}}},args:{rating:5},argTypes:{rating:{control:{type:`range`,min:0,max:5,step:.1},description:`Nota de 0 a 5; aceita frações.`},className:{table:{disable:!0}}}},s={},c={parameters:{docs:{description:{story:`Notas inteiras e fracionárias para conferir o preenchimento proporcional.`}}},render:()=>(0,a.jsx)(`div`,{className:`flex flex-col gap-3`,children:[5,4.5,3,1.5,0].map(e=>(0,a.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,a.jsx)(i,{rating:e}),(0,a.jsx)(`span`,{className:`text-body-sm text-muted-foreground`,children:n(e)})]},e))})},l=[`Default`,`Ratings`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Notas inteiras e fracionárias para conferir o preenchimento proporcional."
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      {[5, 4.5, 3, 1.5, 0].map(rating => <div key={rating} className="flex items-center gap-4">
          <Stars rating={rating} />
          <span className="text-body-sm text-muted-foreground">{formatRating(rating)}</span>
        </div>)}
    </div>
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Default,c as Ratings,l as __namedExportsOrder,o as default};
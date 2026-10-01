import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./logo-DIXgNjrP.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={title:`Fundamentos/Marca`,component:r,parameters:{docs:{description:{component:'Wordmark do JuriOS: "Juri" no tom do texto e "OS" em dourado (`brand-accent`). Tamanhos `sm` 18, `md` 22 (padrão) e `lg` 32. Use `tone="inverse"` sobre fundos escuros ou `primary`.\n\nNão recrie o logo com texto solto nem troque as cores. O Logo é exposto como `role="img"` com nome "JuriOS" (`data-slot="logo"`). Quando o logo for link para a página inicial, dê ao link um rótulo acessível (`aria-label="JuriOS, página inicial"`).'}}}},o={},s={render:()=>(0,i.jsxs)(`div`,{className:`flex items-baseline gap-8`,children:[(0,i.jsx)(r,{size:`sm`}),(0,i.jsx)(r,{size:`md`}),(0,i.jsx)(r,{size:`lg`})]})},c={parameters:{docs:{description:{story:`tone="inverse" sobre fundo primary.`}}},render:()=>(0,i.jsx)(`div`,{className:`rounded-surface bg-primary px-10 py-8`,children:(0,i.jsx)(r,{tone:`inverse`,size:`lg`})})},l=[`Wordmark`,`Sizes`,`Inverse`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-baseline gap-8">
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "tone=\\"inverse\\" sobre fundo primary."
      }
    }
  },
  render: () => <div className="rounded-surface bg-primary px-10 py-8">
      <Logo tone="inverse" size="lg" />
    </div>
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Inverse,s as Sizes,o as Wordmark,l as __namedExportsOrder,a as default};
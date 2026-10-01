import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./tokens-J2rXc_Cs.js";import{i,n as a,t as o}from"./swatch-DfCwojk5.js";var s,c,l,u;function d(){return(d=e((()=>{r(),i(),s=t(),c={title:`Fundamentos/Espaçamento`,parameters:{layout:`fullscreen`,docs:{description:{component:["Escala base 4 para paddings e gaps. Use as classes do Tailwind que caem na escala (`p-4`, `gap-6`), não valores arbitrários.",``,`**Paddings de segurança:** botões 16/24/32 (por tamanho), controles 16 nas laterais, badge, tab e kbd 10×4, item de menu 12×8, flutuantes 8, card, alerta e toast 24 (compacto 16), modal 24 a 32, seções do site 80 a 128 na vertical. Nada encosta na borda.`].join(`
`)}}}},l={render:()=>(0,s.jsx)(o,{children:(0,s.jsx)(a,{title:`Espaçamento`,description:`Escala base 4. Paddings de segurança: controles 16, cards 24, seções de site 96 a 128.`,children:(0,s.jsx)(`div`,{className:`flex flex-col gap-3`,children:Object.entries(n.spacing).map(([e,t])=>(0,s.jsxs)(`div`,{className:`grid grid-cols-[120px_60px_1fr] items-center gap-6`,children:[(0,s.jsxs)(`span`,{className:`text-label-sm`,children:[`space-`,e]}),(0,s.jsxs)(`span`,{className:`text-data text-muted-foreground`,children:[t,`px`]}),(0,s.jsx)(`div`,{className:`h-3 rounded-full bg-primary`,style:{width:t||1}})]},e))})})})},u=[`Escala`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Page>
      <Section title="Espaçamento" description="Escala base 4. Paddings de segurança: controles 16, cards 24, seções de site 96 a 128.">
        <div className="flex flex-col gap-3">
          {Object.entries(tokens.spacing).map(([name, value]) => <div key={name} className="grid grid-cols-[120px_60px_1fr] items-center gap-6">
              <span className="text-label-sm">space-{name}</span>
              <span className="text-data text-muted-foreground">{value}px</span>
              <div className="h-3 rounded-full bg-primary" style={{
            width: value || 1
          }} />
            </div>)}
        </div>
      </Section>
    </Page>
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Escala,u as __namedExportsOrder,c as default};
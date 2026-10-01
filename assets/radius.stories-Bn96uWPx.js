import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./tokens-J2rXc_Cs.js";import{i,n as a,t as o}from"./swatch-DfCwojk5.js";var s,c,l,u,d;function f(){return(f=e((()=>{r(),i(),s=t(),c={title:`Fundamentos/Raios`,parameters:{layout:`fullscreen`,docs:{description:{component:[`Três raios cobrem quase tudo; o raio indica o tipo de elemento.`,``,"- `rounded-full` (pílula): botões, badges, tabs, toggles e paginação.","- `rounded-control` (12): inputs, selects, busca e demais campos.","- `rounded-surface` (16): cards, alertas, modais, popovers e mídia.","- `rounded-lg` (8): itens de menu e peças internas pequenas.",``,"Sheet encosta na borda da tela e não tem raio. Evite os demais passos da escala (`xs` a `md`) em componentes novos."].join(`
`)}}}},l={control:`Inputs, selects, busca`,surface:`Cards, modais, mídia`,pill:`Botões, badges, tabs`},u={render:()=>(0,s.jsx)(o,{children:(0,s.jsx)(a,{title:`Raios`,description:`Pílula em ações, 12 em campos, 16 em superfícies.`,children:(0,s.jsx)(`div`,{className:`grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-8`,children:Object.entries(n.radius).map(([e,t])=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(`div`,{className:`h-24 bg-card shadow-card`,style:{borderRadius:t}}),(0,s.jsxs)(`span`,{className:`text-label-sm`,children:[`radius-`,e]}),(0,s.jsxs)(`span`,{className:`text-data text-muted-foreground`,children:[t===9999?`full`:`${t}px`,l[e]?` · ${l[e]}`:``]})]},e))})})})},d=[`Escala`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Page>
      <Section title="Raios" description="Pílula em ações, 12 em campos, 16 em superfícies.">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-8">
          {Object.entries(tokens.radius).map(([name, value]) => <div key={name} className="flex flex-col gap-3">
              <div className="h-24 bg-card shadow-card" style={{
            borderRadius: value
          }} />
              <span className="text-label-sm">radius-{name}</span>
              <span className="text-data text-muted-foreground">{value === 9999 ? "full" : \`\${value}px\`}{usage[name] ? \` · \${usage[name]}\` : ""}</span>
            </div>)}
        </div>
      </Section>
    </Page>
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Escala,d as __namedExportsOrder,c as default};
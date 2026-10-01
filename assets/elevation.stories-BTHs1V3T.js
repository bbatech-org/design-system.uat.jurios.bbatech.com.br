import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./tokens-J2rXc_Cs.js";import{i,n as a,t as o}from"./swatch-DfCwojk5.js";var s,c,l,u,d;function f(){return(f=e((()=>{r(),i(),s=t(),c={title:`Fundamentos/Elevação`,parameters:{layout:`fullscreen`,docs:{description:{component:[`Sombras quase imperceptíveis; a hierarquia vem primeiro do contraste de fundo.`,``,"- `shadow-level-2`: flutuantes (menus, popover, tooltip, toast).","- `shadow-level-3`: modais, sheets e drawers.","- `shadow-card`: cards do site (TestimonialCard, ModuleCard, MediaCard).","- `shadow-level-1`: separação mínima, uso raro.",``,`Sem sombra em inputs, triggers e cards do app. Não crie sombras novas nem aumente a opacidade.`].join(`
`)}}}},l={"level-1":`Separação mínima`,"level-2":`Flutuantes: menus, popovers, tooltips`,"level-3":`Modais, sheets, drawers`,card:`Cards de conteúdo (site)`},u={render:()=>(0,s.jsx)(o,{children:(0,s.jsx)(a,{title:`Elevação`,description:`Sombras quase imperceptíveis. Superfícies se separam por contraste de fundo, sem bordas.`,children:(0,s.jsx)(`div`,{className:`grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-10`,children:Object.entries(n.shadow).map(([e,t])=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,s.jsx)(`div`,{className:`h-32 rounded-surface bg-card`,style:{boxShadow:t}}),(0,s.jsxs)(`span`,{className:`text-label-sm`,children:[`shadow-`,e]}),(0,s.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:l[e]})]},e))})})})},d=[`Sombras`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Page>
      <Section title="Elevação" description="Sombras quase imperceptíveis. Superfícies se separam por contraste de fundo, sem bordas.">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-10">
          {Object.entries(tokens.shadow).map(([name, value]) => <div key={name} className="flex flex-col gap-4">
              <div className="h-32 rounded-surface bg-card" style={{
            boxShadow: value
          }} />
              <span className="text-label-sm">shadow-{name}</span>
              <span className="text-caption text-muted-foreground">{usage[name]}</span>
            </div>)}
        </div>
      </Section>
    </Page>
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Sombras,d as __namedExportsOrder,c as default};
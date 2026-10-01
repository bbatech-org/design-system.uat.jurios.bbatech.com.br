import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./tokens-J2rXc_Cs.js";import{i,n as a,t as o}from"./swatch-DfCwojk5.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{r(),s=t(),i(),c=n.textStyles,l={title:`Fundamentos/Tipografia`,parameters:{layout:`fullscreen`,docs:{description:{component:[`Três famílias e um conjunto fechado de text styles gerados do Figma.`,``,`**Famílias**`,`- Inter: toda a interface e os títulos.`,'- Newsreader Medium Italic (`text-emphasis`): ênfase pontual, no máximo uma por título (ex.: "gerir o *escritório jurídico*", "JuriOS *Processos*"). Herda o tamanho do texto ao redor. Nunca em parágrafos, botões ou rótulos.',"- IBM Plex Mono: eyebrows (`text-overline`, 11px em caixa alta), dados (`text-data`) e código (`text-code`). Use em números CNJ, OAB, valores de tabela e datas técnicas.",``,`**Regras de uso**`,"- Use sempre um utilitário `text-*` (`text-heading-2`, `text-body-md`, `text-label-sm`...) e a cor em classe separada (`text-heading-2 text-foreground`). Não combine com `font-*`, `text-[px]` ou `leading-*` avulsos, salvo o ajuste móvel de títulos do site.","- `display` e `heading-1` são do site. No app, títulos de página usam `heading-3` (PageHeader); `heading-2` fica para o painel de marca das telas de entrada e cadastro.","- `body-*` para texto corrido, `label-*` para controles e navegação, `caption` para legendas e dicas, `title-*` para títulos de cards e itens."].join(`
`)}}}},u={display:`Seu escritório jurídico`,"heading-1":`Gestão sem ruído`,"heading-2":`Processos em ordem`,overline:`Módulos · JuriOS`,code:`0001234-56.2024.8.26.0100`,data:`OAB/SP 123.456`},d={render:()=>(0,s.jsxs)(o,{children:[(0,s.jsx)(a,{title:`Famílias`,description:`Inter em toda a interface. Newsreader Medium Italic só para ênfase pontual. IBM Plex Mono para eyebrows, números e dados.`,children:(0,s.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,s.jsx)(`p`,{className:`text-heading-3`,children:`Inter · interface`}),(0,s.jsxs)(`p`,{className:`text-heading-3`,children:[`JuriOS `,(0,s.jsx)(`span`,{className:`text-emphasis`,children:`Processos`})]}),(0,s.jsx)(`p`,{className:`text-overline text-muted-foreground`,children:`IBM Plex Mono · eyebrow`})]})}),(0,s.jsx)(a,{title:`Text styles`,description:`Utilitários text-* gerados dos estilos do Figma.`,children:(0,s.jsx)(`div`,{className:`flex flex-col divide-y divide-border`,children:Object.entries(c).filter(([e])=>e!==`emphasis`).map(([e,t])=>(0,s.jsxs)(`div`,{className:`grid grid-cols-[200px_1fr] items-baseline gap-8 py-5`,children:[(0,s.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,s.jsxs)(`span`,{className:`text-label-sm`,children:[`text-`,e]}),(0,s.jsxs)(`span`,{className:`text-data text-muted-foreground`,children:[t.size,`/`,Math.round((t.lineHeight??1)*100),`% · `,t.weight,` · `,Math.round(t.tracking*100),`%`]})]}),(0,s.jsx)(`span`,{className:`text-${e} truncate`,children:u[e]??`Prazos, clientes e documentos`})]},e))})})]})},f=[`Estilos`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Page>
      <Section title="Famílias" description="Inter em toda a interface. Newsreader Medium Italic só para ênfase pontual. IBM Plex Mono para eyebrows, números e dados.">
        <div className="flex flex-col gap-4">
          <p className="text-heading-3">Inter · interface</p>
          <p className="text-heading-3">JuriOS <span className="text-emphasis">Processos</span></p>
          <p className="text-overline text-muted-foreground">IBM Plex Mono · eyebrow</p>
        </div>
      </Section>
      <Section title="Text styles" description="Utilitários text-* gerados dos estilos do Figma.">
        <div className="flex flex-col divide-y divide-border">
          {Object.entries(styles).filter(([name]) => name !== "emphasis").map(([name, s]) => <div key={name} className="grid grid-cols-[200px_1fr] items-baseline gap-8 py-5">
              <div className="flex flex-col gap-1">
                <span className="text-label-sm">text-{name}</span>
                <span className="text-data text-muted-foreground">
                  {s.size}/{Math.round((s.lineHeight ?? 1) * 100)}% · {s.weight} · {Math.round(s.tracking * 100)}%
                </span>
              </div>
              <span className={\`text-\${name} truncate\`}>{sample[name] ?? "Prazos, clientes e documentos"}</span>
            </div>)}
        </div>
      </Section>
    </Page>
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Estilos,f as __namedExportsOrder,l as default};
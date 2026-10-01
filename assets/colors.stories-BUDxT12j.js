import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./tokens-J2rXc_Cs.js";import{i,n as a,r as o,t as s}from"./swatch-DfCwojk5.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{r(),i(),c=t(),l={title:`Fundamentos/Cores`,parameters:{layout:`fullscreen`,docs:{description:{component:[`Cores do JuriOS em duas camadas: primitivas (escalas neutral, bronze, gold, red, green, amber e blue) e semânticas, que apontam para as primitivas e trocam de valor no tema escuro.`,``,`**Regras de uso**`,"- No código, use só as semânticas: `bg-card`, `text-muted-foreground`, `border-input`, `bg-success-subtle`. Nada de hex nem de `--jurios-neutral-500`; primitivas servem para definir tokens, não componentes.","- Superfícies se separam por contraste de fundo (`background`, `card`, `muted`), sem bordas. `border` fica para divisórias de tabela e lista; `input` para campos, checkbox e radio.","- Texto: `foreground` para conteúdo, `muted-foreground` para apoio. Sobre `primary`, `brand` ou `overlay`, use o `*-foreground` correspondente.","- Status: `success`, `warning`, `destructive` e `info` comunicam estado de prazo, processo ou operação; as versões `*-subtle` são fundos de alerta e badge. Nunca dependa só da cor: acompanhe com texto ou ícone.","- Dourado (`brand-accent`) é estratégico: só no logo, no ActionLink e nas estrelas de avaliação. Não use em botões, ícones, títulos ou fundos.","- `brand` (bronze) é superfície de marca pontual: painel do cadastro e QuoteCard.","- `chart-1` a `chart-5` só em gráficos, na ordem das séries."].join(`
`)}}}},u={Superfícies:[`background`,`card`,`popover`,`muted`,`secondary`,`accent`,`sidebar`],Texto:[`foreground`,`muted-foreground`,`primary-foreground`],Ação:[`primary`,`ring`,`border`,`input`],Marca:[`brand`,`brand-accent`,`brand-foreground`],Status:[`success`,`success-subtle`,`warning`,`warning-subtle`,`destructive`,`destructive-subtle`,`info`,`info-subtle`],Gráficos:[`chart-1`,`chart-2`,`chart-3`,`chart-4`,`chart-5`]},d={parameters:{docs:{description:{story:`Tokens para uso em componentes, com os valores claro e escuro.`}}},name:`Semânticas`,render:()=>(0,c.jsx)(s,{children:Object.entries(u).map(([e,t])=>(0,c.jsx)(a,{title:e,description:e===`Marca`?`Dourado só no logo, links de ação e avaliações.`:void 0,children:(0,c.jsx)(`div`,{className:`grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6`,children:t.map(e=>{let t=n.semantic[e];return(0,c.jsx)(o,{name:e,cssVar:`--${e}`,value:t.join(` · `)},e)})})},e))})},f={parameters:{docs:{description:{story:`Escalas de origem. Referência para quem mantém os tokens; não use direto em componentes.`}}},render:()=>(0,c.jsx)(s,{children:Object.entries(n.primitives).map(([e,t])=>(0,c.jsx)(a,{title:e,children:(0,c.jsx)(`div`,{className:`grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4`,children:Object.entries(t).map(([t,n])=>(0,c.jsx)(o,{name:`${e}/${t}`,value:n,cssVar:`--jurios-${e}-${t}`},t))})},e))})},p=[`Semanticas`,`Primitivas`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Tokens para uso em componentes, com os valores claro e escuro."
      }
    }
  },
  name: "Semânticas",
  render: () => <Page>
      {Object.entries(groups).map(([group, names]) => <Section key={group} title={group} description={group === "Marca" ? "Dourado só no logo, links de ação e avaliações." : undefined}>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6">
            {names.map(name => {
          const modes = (tokens.semantic as Record<string, string[]>)[name];
          return <Swatch key={name} name={name} cssVar={\`--\${name}\`} value={modes.join(" · ")} />;
        })}
          </div>
        </Section>)}
    </Page>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Escalas de origem. Referência para quem mantém os tokens; não use direto em componentes."
      }
    }
  },
  render: () => <Page>
      {Object.entries(tokens.primitives).map(([scale, steps]) => <Section key={scale} title={scale}>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4">
            {Object.entries(steps).map(([step, hex]) => <Swatch key={step} name={\`\${scale}/\${step}\`} value={hex} cssVar={\`--jurios-\${scale}-\${step}\`} />)}
          </div>
        </Section>)}
    </Page>
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Primitivas,d as Semanticas,p as __namedExportsOrder,l as default};
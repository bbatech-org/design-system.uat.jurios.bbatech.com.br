import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./circle-alert-BZNRfjYC.js";import{t as r}from"./circle-check-CWl1mL6v.js";import{t as i}from"./clock-CCqDXeg4.js";import{t as a}from"./file-text-BIUmgn_r.js";import{t as o}from"./folder-DPDP5LPG.js";import{t as s}from"./info-xKB6Rqxq.js";import{r as c,t as l}from"./badge-CgZcyeNt.js";import{r as u}from"./icons.stories-CuLmnsRb.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{u(),c(),d=t(),f={title:`Componentes/Exibição de dados/Badge`,component:l,parameters:{docs:{description:{component:'Rótulo curto de status ou categoria: situação do prazo, área do direito, tipo de publicação. Pílula, sem interação por padrão.\n\n**Variantes**\n- `success`, `warning`, `destructive` e `info`: status (Cumprido, Vence em 2 dias, Vencido, Nova publicação).\n- `default` e `secondary`: destaque neutro (Ativo, Rascunho, Responsável).\n- `outline`: categoria ou etiqueta (Cível, Trabalhista).\n\n**Quando não usar**\n- Ação clicável: use Button. Se o badge precisa navegar (ex.: filtrar por área), use `asChild` com `<a>`.\n- Mensagem longa ou que exige atenção: use Alert.\n\n**Acessibilidade**\n- A cor só reforça: o texto precisa carregar o significado sozinho ("Vencido", não apenas vermelho).\n- Ícones dentro do badge são decorativos: `aria-hidden`.'}}},args:{children:`Ativo`},argTypes:{variant:{control:`inline-radio`,options:[`default`,`secondary`,`destructive`,`outline`,`success`,`warning`,`info`],description:`Cor e significado do badge.`},children:{control:`text`,description:`Texto do badge.`},asChild:{table:{disable:!0}},className:{table:{disable:!0}}}},p=[{variant:`default`,label:`Ativo`,icon:r},{variant:`secondary`,label:`Rascunho`,icon:a},{variant:`destructive`,label:`Vencido`,icon:n},{variant:`outline`,label:`Cível`,icon:o},{variant:`success`,label:`Cumprido`,icon:r},{variant:`warning`,label:`Vence em 2 dias`,icon:i},{variant:`info`,label:`Nova publicação`,icon:s}],m={},h={parameters:{docs:{description:{story:`Cada variante com o uso típico no JuriOS, com e sem ícone.`}}},render:()=>(0,d.jsxs)(`div`,{className:`grid grid-cols-[auto_auto_auto] items-center gap-x-10 gap-y-4 rounded-surface bg-card p-8`,children:[(0,d.jsx)(`span`,{}),(0,d.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:`Sem ícone`}),(0,d.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:`Com ícone`}),p.map(({variant:e,label:t,icon:n})=>(0,d.jsxs)(`div`,{className:`contents`,children:[(0,d.jsx)(`span`,{className:`text-right text-caption text-muted-foreground`,children:e}),(0,d.jsx)(l,{variant:e,children:t}),(0,d.jsxs)(l,{variant:e,children:[(0,d.jsx)(n,{"aria-hidden":!0}),t]})]},e))]})},g={args:{variant:`warning`},render:e=>(0,d.jsxs)(l,{...e,children:[(0,d.jsx)(i,{"aria-hidden":!0}),`Vence em 2 dias`]})},_={parameters:{docs:{description:{story:`Com asChild, o Badge renderiza o <a> filho e ganha hover.`}}},render:()=>(0,d.jsx)(l,{asChild:!0,variant:`outline`,children:(0,d.jsx)(`a`,{href:`#civel`,children:`Cível`})})},v=[`Default`,`Variants`,`WithIcon`,`AsLink`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Cada variante com o uso típico no JuriOS, com e sem ícone."
      }
    }
  },
  render: () => <div className="grid grid-cols-[auto_auto_auto] items-center gap-x-10 gap-y-4 rounded-surface bg-card p-8">
      <span />
      <span className="text-caption text-muted-foreground">Sem ícone</span>
      <span className="text-caption text-muted-foreground">Com ícone</span>
      {variants.map(({
      variant,
      label,
      icon: Icon
    }) => <div key={variant} className="contents">
          <span className="text-right text-caption text-muted-foreground">{variant}</span>
          <Badge variant={variant}>{label}</Badge>
          <Badge variant={variant}><Icon aria-hidden />{label}</Badge>
        </div>)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  },
  render: args => <Badge {...args}><Clock aria-hidden />Vence em 2 dias</Badge>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Com asChild, o Badge renderiza o <a> filho e ganha hover."
      }
    }
  },
  render: () => <Badge asChild variant="outline">
      <a href="#civel">Cível</a>
    </Badge>
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as AsLink,m as Default,h as Variants,g as WithIcon,v as __namedExportsOrder,f as default};
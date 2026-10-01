import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./italic-CijlcNc8.js";import{t as i}from"./calendar-clock-D0j_PpHZ.js";import{n as a,t as o}from"./toggle-YKDCMD6E.js";import{r as s}from"./icons.stories-CuLmnsRb.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{s(),a(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Componentes/Ações/Toggle`,component:o,parameters:{docs:{description:{component:'Botão de dois estados (pressionado ou não) que liga um recurso ou modo na própria interface: negrito no editor de peças, fixar um processo, mostrar só os prazos da semana. Baseado no Toggle do Radix, expõe `aria-pressed` e `data-state="on" | "off"`.\n\n**Toggle, Switch ou Checkbox**\n- Toggle: botão com estado pressionado em barra de ferramentas (negrito, fixar, filtro ativo). Não é campo de formulário.\n- Switch: liga ou desliga uma configuração com efeito imediato, sem botão Salvar ("Receber avisos de prazo por e-mail").\n- Checkbox: escolha booleana (ou múltipla em lista) que vale ao enviar o formulário. Aceita estado indeterminado.\n\n**Quando não usar**\n- Vários toggles do mesmo assunto (formatação, filtros por tipo de publicação): use Toggle Group.\n- Ação pontual, sem estado (Salvar, Exportar): use Button.\n\n**Uso**\n- Não controlado: `defaultPressed`. Controlado: `pressed` com `onPressedChange`.\n- `variant`: `default` (transparente) ou `outline` (com borda, para separar do fundo).\n- `size`: `sm` 36, `default` 44, `lg` 52. Só com ícone fica quadrado.\n\n**Acessibilidade**\n- Só com ícone, exige `aria-label`. O rótulo nomeia o recurso e não muda com o estado ("Negrito", não "Ativar negrito"); o estado é anunciado pelo `aria-pressed`.'}}},args:{"aria-label":`Negrito`,children:(0,c.jsx)(n,{}),variant:`default`,size:`default`,disabled:!1,onPressedChange:l()},argTypes:{variant:{control:`inline-radio`,options:[`default`,`outline`],description:`Transparente ou com borda.`},size:{control:`inline-radio`,options:[`sm`,`default`,`lg`],description:`Altura 36, 44 ou 52.`},pressed:{control:`boolean`,description:`Estado controlado (pressionado).`},defaultPressed:{control:`boolean`,description:`Estado inicial, não controlado.`},disabled:{control:`boolean`,description:`Desabilita o toggle.`},"aria-label":{control:`text`,description:`Nome acessível, obrigatório só com ícone.`},children:{control:!1},asChild:{table:{disable:!0}},className:{table:{disable:!0}},onPressedChange:{table:{category:`Eventos`}}}},d={render:e=>(0,c.jsx)(o,{...e},String(e.defaultPressed))},f={args:{variant:`outline`}},p=[`sm`,`default`,`lg`],m=[`default`,`outline`],h={parameters:{docs:{description:{story:`Desligado, ligado (defaultPressed) e desabilitado em cada variante e tamanho.`}}},render:e=>(0,c.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(3,64px)] items-center gap-x-4 gap-y-3 rounded-surface bg-card p-6`,children:[(0,c.jsx)(`span`,{}),[`off`,`on`,`disabled`].map(e=>(0,c.jsx)(`span`,{className:`text-center text-caption text-muted-foreground`,children:e},e)),m.flatMap(t=>p.map(n=>(0,c.jsxs)(`div`,{className:`contents`,children:[(0,c.jsxs)(`span`,{className:`pr-4 text-right text-caption text-muted-foreground`,children:[t,` · `,n]}),(0,c.jsx)(`div`,{className:`flex justify-center`,children:(0,c.jsx)(o,{...e,variant:t,size:n})}),(0,c.jsx)(`div`,{className:`flex justify-center`,children:(0,c.jsx)(o,{...e,variant:t,size:n,defaultPressed:!0})}),(0,c.jsx)(`div`,{className:`flex justify-center`,children:(0,c.jsx)(o,{...e,variant:t,size:n,disabled:!0})})]},`${t}-${n}`)))]})},g={render:e=>(0,c.jsx)(`div`,{className:`flex items-center gap-4`,children:p.map(t=>(0,c.jsx)(o,{...e,size:t,variant:`outline`},t))})},_={parameters:{docs:{description:{story:`Toggle com ícone e texto para filtros de tela; o texto serve de rótulo, sem aria-label.`}}},args:{"aria-label":void 0},render:e=>(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsxs)(o,{...e,variant:`outline`,defaultPressed:!0,children:[(0,c.jsx)(i,{}),` Só prazos da semana`]}),(0,c.jsxs)(o,{...e,variant:`outline`,children:[(0,c.jsx)(r,{}),` Destacar citações`]})]})},v={args:{disabled:!0}},y=[`Default`,`Outline`,`States`,`Sizes`,`WithText`,`Disabled`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Toggle key={String(args.defaultPressed)} {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Desligado, ligado (defaultPressed) e desabilitado em cada variante e tamanho."
      }
    }
  },
  render: args => <div className="grid grid-cols-[auto_repeat(3,64px)] items-center gap-x-4 gap-y-3 rounded-surface bg-card p-6">
      <span />
      {["off", "on", "disabled"].map(state => <span key={state} className="text-center text-caption text-muted-foreground">{state}</span>)}
      {variants.flatMap(variant => sizes.map(size => <div key={\`\${variant}-\${size}\`} className="contents">
            <span className="pr-4 text-right text-caption text-muted-foreground">{variant} · {size}</span>
            <div className="flex justify-center"><Toggle {...args} variant={variant} size={size} /></div>
            <div className="flex justify-center"><Toggle {...args} variant={variant} size={size} defaultPressed /></div>
            <div className="flex justify-center"><Toggle {...args} variant={variant} size={size} disabled /></div>
          </div>))}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      {sizes.map(size => <Toggle key={size} {...args} size={size} variant="outline" />)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Toggle com ícone e texto para filtros de tela; o texto serve de rótulo, sem aria-label."
      }
    }
  },
  args: {
    "aria-label": undefined
  },
  render: args => <div className="flex items-center gap-3">
      <Toggle {...args} variant="outline" defaultPressed>
        <CalendarClock /> Só prazos da semana
      </Toggle>
      <Toggle {...args} variant="outline">
        <Italic /> Destacar citações
      </Toggle>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{d as Default,v as Disabled,f as Outline,g as Sizes,h as States,_ as WithText,y as __namedExportsOrder,u as default};
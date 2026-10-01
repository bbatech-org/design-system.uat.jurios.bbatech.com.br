import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,r as a,t as o}from"./tabs-BOAQcmsn.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Componentes/Navegação/Tabs`,component:o,args:{defaultValue:`andamentos`,variant:`default`,orientation:`horizontal`,activationMode:`automatic`,disabledTab:!0,onValueChange:c()},argTypes:{defaultValue:{control:`select`,options:[`resumo`,`andamentos`,`prazos`,`documentos`],description:`Aba ativa ao montar.`},variant:{control:`inline-radio`,options:[`default`,`line`],description:"Visual da `TabsList`: pílulas (`default`) ou linha base (`line`)."},orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`],description:`Orientação da navegação por setas.`},activationMode:{control:`inline-radio`,options:[`automatic`,`manual`],description:"`automatic` ativa a aba ao focar com as setas; `manual` exige Enter ou Espaço."},disabledTab:{control:`boolean`,description:"Desabilita a aba Financeiro (`disabled` no `TabsTrigger`)."},value:{table:{disable:!0}},dir:{table:{disable:!0}},asChild:{table:{disable:!0}},className:{table:{disable:!0}},children:{table:{disable:!0}},onValueChange:{table:{disable:!0}}},parameters:{docs:{description:{component:'Alterna entre painéis de conteúdo diferentes dentro do mesmo contexto, como as seções do detalhe de um processo (Resumo, Andamentos, Prazos, Documentos). Só o painel ativo fica visível.\n\n**Quando usar**\n- Cada opção leva a um conteúdo distinto, com seu próprio `TabsContent`.\n- Poucas seções de mesmo nível (até uns 6) que o usuário alterna sem sair da página.\n\n**Quando não usar**\n- A escolha muda um parâmetro do mesmo conteúdo (lista ou quadro, filtro de status, período): use Toggle Group. Regra prática: se muda o conteúdo mostrado em painéis distintos, Tabs; se muda um parâmetro do mesmo conteúdo, Toggle Group.\n- Navegação entre módulos do app: use Sidebar.\n- Várias seções que o usuário pode querer abrir ao mesmo tempo, em sequência vertical: use Accordion.\n\n**Variantes da `TabsList`**\n- `default`: pílulas sobre fundo `muted`, aba ativa em `card`. Para cards, modais e áreas compactas.\n- `line`: linha base com indicador de 2px em `primary`. Para páginas de detalhe, logo abaixo do Page Header.\n\n**Anatomia**\n- `Tabs`: raiz. `defaultValue` (não controlado) ou `value` + `onValueChange`. Aceita também `orientation` e `activationMode` do Radix.\n- `TabsList`: grupo de abas (`variant`).\n- `TabsTrigger`: aba (`value`, `disabled`).\n- `TabsContent`: painel de cada aba (`value`).\n\n```tsx\n<Tabs defaultValue="andamentos">\n  <TabsList variant="line">\n    <TabsTrigger value="resumo">Resumo</TabsTrigger>\n    <TabsTrigger value="andamentos">Andamentos</TabsTrigger>\n  </TabsList>\n  <TabsContent value="resumo">…</TabsContent>\n  <TabsContent value="andamentos">…</TabsContent>\n</Tabs>\n```\n\n**Acessibilidade**\n- As setas movem entre as abas e já ativam a aba focada; Tab leva ao painel. Se trocar de painel for custoso (carrega dados), use `activationMode="manual"` para ativar só com Enter ou Espaço.\n- Abas desabilitadas são puladas pelo teclado. Explique o motivo em outro lugar da tela (ex.: sem permissão para ver o Financeiro).'}}}},u=[{value:`resumo`,label:`Resumo`,content:`Procedimento comum cível · 3ª Vara Cível de São Paulo · valor da causa R$ 48.000,00`},{value:`andamentos`,label:`Andamentos`,content:`12/03/2026 · Juntada de contestação pelo réu Banco X S.A.`},{value:`prazos`,label:`Prazos`,content:`02/10/2026 · Réplica à contestação (15 dias úteis)`},{value:`documentos`,label:`Documentos`,content:`Petição inicial, procuração e contestação`},{value:`financeiro`,label:`Financeiro`,disabled:!0,content:`Honorários contratuais e custas`}],d={parameters:{docs:{description:{story:`Pílulas (variant="default"). A aba Financeiro está desabilitada.`}}},render:({variant:e,disabledTab:t,...n})=>(0,s.jsxs)(o,{...n,className:`w-[560px]`,children:[(0,s.jsx)(a,{variant:e,className:e===`line`?`w-full`:void 0,children:u.map(e=>(0,s.jsx)(r,{value:e.value,disabled:e.disabled&&t,children:e.label},e.value))}),u.map(t=>(0,s.jsx)(i,{value:t.value,className:e===`line`?`text-body-sm text-muted-foreground`:`rounded-surface bg-card p-6 text-body-sm text-muted-foreground`,children:t.content},t.value))]},n.defaultValue)},f={parameters:{docs:{description:{story:`variant="line": padrão das páginas de detalhe, abaixo do Page Header.`}}},args:{variant:`line`},render:d.render},p={parameters:{docs:{description:{story:`Duas abas em área compacta (card ou modal), cada uma com o seu painel. Se a escolha só mudasse a visualização do mesmo conteúdo (lista ou calendário), o certo seria Toggle Group.`}}},args:{defaultValue:`prazos`},render:({variant:e,disabledTab:t,...n})=>(0,s.jsxs)(o,{...n,className:`w-[440px]`,children:[(0,s.jsxs)(a,{variant:e,children:[(0,s.jsx)(r,{value:`prazos`,children:`Prazos`}),(0,s.jsx)(r,{value:`audiencias`,children:`Audiências`})]}),(0,s.jsx)(i,{value:`prazos`,className:`rounded-surface bg-card p-4 text-body-sm text-muted-foreground`,children:`02/10/2026 · Contestação no processo 1002345-67.2026.8.26.0100`}),(0,s.jsx)(i,{value:`audiencias`,className:`rounded-surface bg-card p-4 text-body-sm text-muted-foreground`,children:`08/10/2026 · Audiência de conciliação na 3ª Vara Cível de São Paulo`})]})},m=[`Default`,`Line`,`Compact`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pílulas (variant=\\"default\\"). A aba Financeiro está desabilitada."
      }
    }
  },
  render: ({
    variant,
    disabledTab,
    ...args
  }) => <Tabs key={args.defaultValue} {...args} className="w-[560px]">
      <TabsList variant={variant} className={variant === "line" ? "w-full" : undefined}>
        {secoes.map(s => <TabsTrigger key={s.value} value={s.value} disabled={s.disabled && disabledTab}>{s.label}</TabsTrigger>)}
      </TabsList>
      {secoes.map(s => <TabsContent key={s.value} value={s.value} className={variant === "line" ? "text-body-sm text-muted-foreground" : "rounded-surface bg-card p-6 text-body-sm text-muted-foreground"}>
          {s.content}
        </TabsContent>)}
    </Tabs>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "variant=\\"line\\": padrão das páginas de detalhe, abaixo do Page Header."
      }
    }
  },
  args: {
    variant: "line"
  },
  render: Default.render
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Duas abas em área compacta (card ou modal), cada uma com o seu painel. Se a escolha só mudasse a visualização do mesmo conteúdo (lista ou calendário), o certo seria Toggle Group."
      }
    }
  },
  args: {
    defaultValue: "prazos"
  },
  render: ({
    variant,
    disabledTab,
    ...args
  }) => <Tabs {...args} className="w-[440px]">
      <TabsList variant={variant}>
        <TabsTrigger value="prazos">Prazos</TabsTrigger>
        <TabsTrigger value="audiencias">Audiências</TabsTrigger>
      </TabsList>
      <TabsContent value="prazos" className="rounded-surface bg-card p-4 text-body-sm text-muted-foreground">
        02/10/2026 · Contestação no processo 1002345-67.2026.8.26.0100
      </TabsContent>
      <TabsContent value="audiencias" className="rounded-surface bg-card p-4 text-body-sm text-muted-foreground">
        08/10/2026 · Audiência de conciliação na 3ª Vara Cível de São Paulo
      </TabsContent>
    </Tabs>
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Compact,d as Default,f as Line,m as __namedExportsOrder,l as default};
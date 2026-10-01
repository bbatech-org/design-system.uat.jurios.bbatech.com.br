import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./label-Jxxk7pzc.js";import{r as a,t as o}from"./button-BxLqnFN9.js";import{n as s,r as c,t as l}from"./date-picker-CojGAseJ.js";function u(){let[e,t]=(0,d.useState)(new Date(2026,8,28)),[n,r]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,f.jsx)(i,{htmlFor:`vencimento`,children:`Vencimento do prazo`}),(0,f.jsx)(l,{id:`vencimento`,value:e,onValueChange:t,open:n,onOpenChange:r}),(0,f.jsxs)(`div`,{className:`flex gap-2`,children:[(0,f.jsx)(o,{variant:`secondary`,size:`sm`,onClick:()=>t(void 0),children:`Limpar`}),(0,f.jsx)(o,{variant:`secondary`,size:`sm`,onClick:()=>r(!0),children:`Abrir calendário`})]})]})}var d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{d=t(),a(),r(),c(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Componentes/Formulários/Date Picker`,component:l,parameters:{docs:{description:{component:'Campo de data: gatilho no formato de input (mesma altura e estados do Select) que abre o Calendar em um Popover. Mostra a data em dd/MM/aaaa. `DateRangePicker` escolhe um período, com dois meses lado a lado.\n\n**Date Picker ou Calendar**\n- Date Picker: a data é um campo entre outros, em formulários e filtros (data da audiência, vencimento do prazo, período do relatório). Ocupa uma linha e só mostra o calendário ao abrir.\n- Calendar: o calendário é o próprio conteúdo, sempre visível (agenda de prazos, painel de audiências), ou a base para montar um seletor próprio.\n\n**Quando não usar**\n- Data conhecida e distante que a pessoa prefere digitar (nascimento, distribuição de um processo antigo): o Date Picker não aceita digitação. Use Input com máscara, ou passe `captionLayout: "dropdown"` em `calendarProps` para escolher mês e ano em listas.\n\n**API**\n- `DatePicker`: `value`/`defaultValue` (`Date`), `onValueChange(date)`, `placeholder` (padrão "Selecione a data"), `size` (`sm` ou `default`) e `calendarProps`. Fecha ao escolher o dia.\n- `DateRangePicker`: `value`/`defaultValue` (`DateRange`, com `from` e `to`), `onValueChange(range)`, `placeholder` (padrão "Selecione o período"), `size` e `calendarProps`. Fica aberto para escolher início e fim; fecha com Esc ou clique fora.\n- Valor controlado: passar a prop `value` (mesmo `undefined`) torna o campo controlado, e `value={undefined}` limpa a data. Sem a prop `value`, o campo guarda o próprio estado a partir de `defaultValue`.\n- Abertura, nos dois: `open`/`onOpenChange` (controlada) ou `defaultOpen` (não controlada).\n- `calendarProps`: repassadas ao Calendar, exceto `mode`, `selected` e `onSelect`. Ex.: `nonBusinessDays` (feriados forenses, riscados e bloqueados), `deadlines` (ponto de prazo), `disabled`, `startMonth`/`endMonth`.\n- As demais props (`id`, `aria-label`, `aria-invalid`, `disabled`, `className`) vão para o botão gatilho.\n\n```tsx\n<Label htmlFor="audiencia">Data da audiência</Label>\n<DatePicker\n  id="audiencia"\n  value={data}\n  onValueChange={setData}\n  calendarProps={{ nonBusinessDays: feriadosForenses, disabled: { before: hoje } }}\n/>\n```\n\n**Acessibilidade**\n- O gatilho é um `<button>`: ligue o Label por `id`/`htmlFor` ou use `aria-label`.\n- Com Form, envolva o `DatePicker` em `FormControl` e ligue `value`/`onValueChange` ao `field`.\n- Dias bloqueados continuam visíveis no calendário; explique a regra na descrição do campo ("Não é possível agendar em feriados forenses.").\n'}}},decorators:[e=>(0,f.jsx)(`div`,{className:`w-72`,children:(0,f.jsx)(e,{})})],args:{label:`Data da audiência`,placeholder:`Selecione a data`,size:`default`,filled:!1,defaultOpen:!1,disabled:!1,"aria-invalid":!1,onValueChange:p(),onOpenChange:p()},argTypes:{label:{control:`text`,description:`Texto do Label (só na story).`},placeholder:{control:`text`,description:`Texto do gatilho sem data.`},size:{control:`inline-radio`,options:[`sm`,`default`],description:`Altura 40 (sm) ou 48.`},filled:{control:`boolean`,description:`Começa com uma data selecionada (só na story).`},defaultOpen:{control:`boolean`,description:`Abre o calendário ao montar.`},disabled:{control:`boolean`,description:`Desabilita o gatilho.`},"aria-invalid":{control:`boolean`,description:`Estado de erro (borda destructive).`},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}},open:{table:{disable:!0}},calendarProps:{table:{disable:!0}},className:{table:{disable:!0}},onValueChange:{table:{category:`Eventos`}},onOpenChange:{table:{category:`Eventos`}}}},h={parameters:{layout:`padded`,docs:{description:{story:`Rótulo ligado ao gatilho por id e htmlFor.`}}},decorators:[e=>(0,f.jsx)(`div`,{className:`h-[460px]`,children:(0,f.jsx)(e,{})})],render:({label:e,filled:t,...n})=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,f.jsx)(i,{htmlFor:`audiencia`,children:e}),(0,f.jsx)(l,{id:`audiencia`,...n,defaultValue:t?new Date(2026,8,28):void 0,calendarProps:{today:new Date(2026,8,24),nonBusinessDays:new Date(2026,8,7),deadlines:new Date(2026,8,30)}},`${t}-${n.defaultOpen}`)]})},g={parameters:{layout:`padded`,docs:{description:{story:`Aberto, com hoje, feriado forense (riscado) e prazo (ponto) via calendarProps.`}}},decorators:[e=>(0,f.jsx)(`div`,{className:`h-[460px]`,children:(0,f.jsx)(e,{})})],render:()=>(0,f.jsx)(l,{"aria-label":`Prazo`,defaultOpen:!0,defaultValue:new Date(2026,8,28),calendarProps:{today:new Date(2026,8,24),nonBusinessDays:new Date(2026,8,7),deadlines:new Date(2026,8,30)}})},_={parameters:{docs:{description:{story:`Preenchido, pequeno (sm), inválido e desabilitado.`}}},render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,f.jsx)(l,{"aria-label":`Preenchido`,defaultValue:new Date(2026,8,28)}),(0,f.jsx)(l,{"aria-label":`Pequeno`,size:`sm`}),(0,f.jsx)(l,{"aria-label":`Inválido`,"aria-invalid":!0}),(0,f.jsx)(l,{"aria-label":`Desabilitado`,disabled:!0})]})},v={parameters:{docs:{description:{story:`DateRangePicker com um período de uma semana; dois meses lado a lado.`}}},decorators:[e=>(0,f.jsx)(`div`,{className:`w-80`,children:(0,f.jsx)(e,{})})],render:()=>(0,f.jsx)(s,{"aria-label":`Período`,defaultValue:{from:new Date(2026,8,14),to:new Date(2026,8,18)}})},y={parameters:{docs:{description:{story:`value e open controlados: Limpar passa value={undefined} e esvazia o campo; Abrir calendário usa open/onOpenChange.`}}},decorators:[e=>(0,f.jsx)(`div`,{className:`h-[460px] w-72`,children:(0,f.jsx)(e,{})})],render:()=>(0,f.jsx)(u,{})},b=[`Default`,`Open`,`States`,`Range`,`Controlled`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Rótulo ligado ao gatilho por id e htmlFor."
      }
    }
  },
  decorators: [Story => <div className="h-[460px]"><Story /></div>],
  render: ({
    label,
    filled,
    ...args
  }) => <div className="flex flex-col gap-2">
      <Label htmlFor="audiencia">{label}</Label>
      <DatePicker key={\`\${filled}-\${args.defaultOpen}\`} id="audiencia" {...args} defaultValue={filled ? new Date(2026, 8, 28) : undefined} calendarProps={{
      today: new Date(2026, 8, 24),
      nonBusinessDays: new Date(2026, 8, 7),
      deadlines: new Date(2026, 8, 30)
    }} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Aberto, com hoje, feriado forense (riscado) e prazo (ponto) via calendarProps."
      }
    }
  },
  decorators: [Story => <div className="h-[460px]"><Story /></div>],
  render: () => <DatePicker aria-label="Prazo" defaultOpen defaultValue={new Date(2026, 8, 28)} calendarProps={{
    today: new Date(2026, 8, 24),
    nonBusinessDays: new Date(2026, 8, 7),
    deadlines: new Date(2026, 8, 30)
  }} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Preenchido, pequeno (sm), inválido e desabilitado."
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <DatePicker aria-label="Preenchido" defaultValue={new Date(2026, 8, 28)} />
      <DatePicker aria-label="Pequeno" size="sm" />
      <DatePicker aria-label="Inválido" aria-invalid />
      <DatePicker aria-label="Desabilitado" disabled />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "DateRangePicker com um período de uma semana; dois meses lado a lado."
      }
    }
  },
  decorators: [Story => <div className="w-80"><Story /></div>],
  render: () => <DateRangePicker aria-label="Período" defaultValue={{
    from: new Date(2026, 8, 14),
    to: new Date(2026, 8, 18)
  }} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "value e open controlados: Limpar passa value={undefined} e esvazia o campo; Abrir calendário usa open/onOpenChange."
      }
    }
  },
  decorators: [Story => <div className="h-[460px] w-72"><Story /></div>],
  render: () => <ControlledDatePicker />
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Controlled,h as Default,g as Open,v as Range,_ as States,b as __namedExportsOrder,m as default};
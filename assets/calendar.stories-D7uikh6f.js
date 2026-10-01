import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./utils-5BEY1ubH.js";import{n as a,r as o,t as s}from"./calendar-289FZQod.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{c=t(),r(),o(),l=n(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Componentes/Formulários/Calendar`,component:s,parameters:{docs:{description:{component:'Calendário mensal (react-day-picker) em pt-BR, com extensões do JuriOS para feriados forenses e prazos processuais. Seleciona um dia (`mode="single"`), um período (`mode="range"`) ou vários dias (`mode="multiple"`).\n\n**Date Picker ou Calendar**\n- Date Picker: a data é um campo entre outros, em formulários e filtros (data da audiência, vencimento do prazo, período do relatório). Ocupa uma linha e só mostra o calendário ao abrir.\n- Calendar: o calendário é o próprio conteúdo, sempre visível (agenda de prazos, painel de audiências), ou a base para montar um seletor próprio.\n\n**Props do JuriOS**\n- `nonBusinessDays`: dias não úteis (feriados forenses, recesso). Aparecem riscados e não podem ser selecionados; somam-se ao `disabled`.\n- `deadlines`: dias com prazo processual, marcados com um ponto em `warning`.\n- `buttonVariant`: variante dos botões de navegação entre meses (padrão `ghost`).\n\nOs dois primeiros aceitam qualquer `Matcher` do react-day-picker: uma data, uma lista, `{ dayOfWeek: [0, 6] }`, `{ from, to }` ou `{ before }`/`{ after }`.\n\n**Props do react-day-picker mais usadas**\n`selected`/`onSelect`, `defaultMonth`, `numberOfMonths`, `captionLayout` (`label` ou `dropdown`, com `startMonth`/`endMonth`), `today`, `showOutsideDays` (padrão `true`) e `components`.\n\n**Customização**\n`CalendarDayButton` é o botão de cada dia. Use-o em `components.DayButton` para acrescentar conteúdo (ex.: quantidade de prazos) mantendo visual, estados e foco.\n\n```tsx\nconst [data, setData] = useState<Date | undefined>();\n\n<Calendar\n  mode="single"\n  selected={data}\n  onSelect={setData}\n  nonBusinessDays={[{ dayOfWeek: [0, 6] }, ...feriadosForenses]}\n  deadlines={prazos}\n/>\n```\n\n**Acessibilidade**\n- A grade é navegável por teclado: setas mudam o dia, PageUp/PageDown mudam o mês.\n- O ponto de prazo e o de hoje são só visuais: repita a informação em texto (lista de prazos do dia ao lado, por exemplo).\n'}}},args:{mode:`single`,numberOfMonths:1,captionLayout:`label`,showOutsideDays:!0,showWeekNumber:!1,fixedWeeks:!1,buttonVariant:`ghost`,onDayClick:u()},argTypes:{mode:{control:`inline-radio`,options:[`single`,`multiple`,`range`],description:`Um dia, vários dias ou um período.`},numberOfMonths:{control:{type:`range`,min:1,max:3,step:1},description:`Meses exibidos lado a lado.`},captionLayout:{control:`select`,options:[`label`,`dropdown`,`dropdown-months`,`dropdown-years`],description:`Cabeçalho com rótulo ou listas de mês/ano.`},showOutsideDays:{control:`boolean`,description:`Mostra dias dos meses vizinhos.`},showWeekNumber:{control:`boolean`,description:`Mostra o número da semana.`},fixedWeeks:{control:`boolean`,description:`Sempre 6 semanas por mês.`},buttonVariant:{control:`inline-radio`,options:[`ghost`,`outline`,`secondary`],description:`Variante dos botões de navegação.`},weekStartsOn:{control:`select`,options:[0,1],description:`Primeiro dia da semana (0 domingo, 1 segunda).`},onDayClick:{table:{category:`Eventos`}}}},f=new Date(2026,8,1),p=new Date(2026,8,7),m=new Date(2026,8,30),h={parameters:{docs:{description:{story:`Ajuste modo, meses e cabeçalho pelos controles. Hoje, feriado forense (riscado) e prazo (ponto) fixos para referência.`}}},render:({mode:e,...t})=>{let n={...t,defaultMonth:f,startMonth:new Date(2015,0),endMonth:new Date(2030,11),today:new Date(2026,8,24),nonBusinessDays:p,deadlines:m};return e===`range`?(0,l.jsx)(s,{mode:`range`,...n},`range`):e===`multiple`?(0,l.jsx)(s,{mode:`multiple`,...n},`multiple`):(0,l.jsx)(s,{mode:`single`,...n},`single`)}},g={parameters:{docs:{description:{story:`Um dia selecionado, com hoje, feriado forense riscado e um prazo marcado.`}}},render:()=>{let[e,t]=(0,c.useState)(new Date(2026,8,28));return(0,l.jsx)(s,{mode:`single`,selected:e,onSelect:t,defaultMonth:f,today:new Date(2026,8,24),nonBusinessDays:p,deadlines:m})}},_={parameters:{docs:{description:{story:`Período de uma semana; o feriado forense fica bloqueado.`}}},render:()=>{let[e,t]=(0,c.useState)({from:new Date(2026,8,14),to:new Date(2026,8,18)});return(0,l.jsx)(s,{mode:`range`,selected:e,onSelect:t,defaultMonth:f,today:new Date(2026,8,24),nonBusinessDays:p})}},v={parameters:{docs:{description:{story:`Dois meses lado a lado, para períodos que cruzam a virada do mês.`}}},render:()=>(0,l.jsx)(s,{mode:`range`,numberOfMonths:2,defaultMonth:f,today:new Date(2026,8,24)})},y={render:()=>(0,l.jsx)(s,{mode:`single`,captionLayout:`dropdown`,defaultMonth:f,startMonth:new Date(2015,0),endMonth:new Date(2030,11),today:new Date(2026,8,24)})},b={9:1,15:3,22:2,30:1},x={render:()=>(0,l.jsx)(s,{mode:`single`,defaultMonth:f,today:new Date(2026,8,24),className:`[--cell-size:--spacing(12)]`,components:{DayButton:({children:e,modifiers:t,day:n,...r})=>{let o=n.date.getMonth()===8?b[n.date.getDate()]:void 0;return(0,l.jsxs)(a,{...r,day:n,modifiers:t,className:i(r.className,`flex-col gap-0.5 leading-none`),children:[e,o&&!t.outside&&(0,l.jsx)(`span`,{className:`text-caption text-warning`,children:o})]})}}})},S=[`Default`,`Single`,`Range`,`TwoMonths`,`Dropdown`,`CustomDayButton`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ajuste modo, meses e cabeçalho pelos controles. Hoje, feriado forense (riscado) e prazo (ponto) fixos para referência."
      }
    }
  },
  render: ({
    mode,
    ...args
  }) => {
    const shared = {
      ...args,
      defaultMonth: month,
      startMonth: new Date(2015, 0),
      endMonth: new Date(2030, 11),
      today: new Date(2026, 8, 24),
      nonBusinessDays: holiday,
      deadlines: deadline
    };
    if (mode === "range") return <Calendar key="range" mode="range" {...shared} />;
    if (mode === "multiple") return <Calendar key="multiple" mode="multiple" {...shared} />;
    return <Calendar key="single" mode="single" {...shared} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Um dia selecionado, com hoje, feriado forense riscado e um prazo marcado."
      }
    }
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2026, 8, 28));
    return <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={month} today={new Date(2026, 8, 24)} nonBusinessDays={holiday} deadlines={deadline} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Período de uma semana; o feriado forense fica bloqueado."
      }
    }
  },
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(2026, 8, 14),
      to: new Date(2026, 8, 18)
    });
    return <Calendar mode="range" selected={range} onSelect={setRange} defaultMonth={month} today={new Date(2026, 8, 24)} nonBusinessDays={holiday} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Dois meses lado a lado, para períodos que cruzam a virada do mês."
      }
    }
  },
  render: () => <Calendar mode="range" numberOfMonths={2} defaultMonth={month} today={new Date(2026, 8, 24)} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Calendar mode="single" captionLayout="dropdown" defaultMonth={month} startMonth={new Date(2015, 0)} endMonth={new Date(2030, 11)} today={new Date(2026, 8, 24)} />
}`,...y.parameters?.docs?.source},description:{story:`Mês e ano em listas, para datas distantes (ex.: distribuição do processo).`,...y.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Calendar mode="single" defaultMonth={month} today={new Date(2026, 8, 24)} className="[--cell-size:--spacing(12)]" components={{
    DayButton: ({
      children,
      modifiers,
      day,
      ...props
    }) => {
      const total = day.date.getMonth() === 8 ? prazosPorDia[day.date.getDate()] : undefined;
      return <CalendarDayButton {...props} day={day} modifiers={modifiers} className={cn(props.className, "flex-col gap-0.5 leading-none")}>
              {children}
              {total && !modifiers.outside && <span className="text-caption text-warning">{total}</span>}
            </CalendarDayButton>;
    }
  }} />
}`,...x.parameters?.docs?.source},description:{story:"`CalendarDayButton` customizado: quantidade de prazos abaixo de cada dia.",...x.parameters?.docs?.description}}}})))()}C();export{x as CustomDayButton,h as Default,y as Dropdown,_ as Range,g as Single,v as TwoMonths,S as __namedExportsOrder,d as default};
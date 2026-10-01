import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./bell-BNIQEdpI.js";import{t as i}from"./building-complex-Bz8qnFrA.js";import{t as a}from"./copy-DhFFy67p.js";import{t as o}from"./ellipsis-DnbAV_rk.js";import{t as s}from"./file-text-BIUmgn_r.js";import{t as c}from"./log-out-BA9hNgKY.js";import{t as l}from"./settings-9LDTiira.js";import{t as u}from"./trash-0C4gm3qt.js";import{t as d}from"./user-C-USvdz7.js";import{a as f,c as p,d as m,f as h,h as g,i as _,l as v,m as y,n as b,o as x,p as S,r as C,s as w,t as T,u as E}from"./dropdown-menu-DFEElUO7.js";import{r as D,t as O}from"./button-BxLqnFN9.js";import{r as k}from"./icons.stories-CuLmnsRb.js";var A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{A=t(),k(),D(),g(),j=n(),{fn:M}=__STORYBOOK_MODULE_TEST__,N={title:`Componentes/Menus/Dropdown Menu`,component:T,args:{defaultOpen:!0,modal:!1,side:`bottom`,align:`start`,sideOffset:8,label:`Minha conta`,disabledItem:!1,onOpenChange:M()},argTypes:{defaultOpen:{control:`boolean`,description:`Abre o menu ao montar (estado inicial não controlado).`},modal:{control:`boolean`,description:`Bloqueia a interação com o restante da página enquanto aberto.`},side:{control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`],description:"Lado do gatilho em que o menu abre (`DropdownMenuContent`)."},align:{control:`inline-radio`,options:[`start`,`center`,`end`],description:`Alinhamento do menu em relação ao gatilho.`},sideOffset:{control:{type:`range`,min:0,max:24,step:2},description:`Distância em px entre gatilho e menu.`},label:{control:`text`,description:"Texto do `DropdownMenuLabel`."},disabledItem:{control:`boolean`,description:"Desabilita o item Notificações (exemplo de `disabled` no item)."},open:{table:{disable:!0}},dir:{table:{disable:!0}},children:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}},parameters:{layout:`padded`,docs:{description:{component:'Menu de ações aberto a partir de um botão: ações da linha de um processo (abrir, copiar número CNJ, excluir), menu da conta, opções de exibição de uma listagem.\n\n### Qual menu usar?\n- **Command**: paleta de comandos e busca pelo teclado (Ctrl+K), com filtragem enquanto se digita.\n- **Dropdown Menu**: lista de ações aberta a partir de um botão (ações da linha, menu da conta).\n- **Context Menu**: ações no clique direito sobre uma área. Sempre ofereça as mesmas ações por outro caminho visível.\n- **Menubar**: barra de menus estilo aplicativo desktop (Arquivo, Editar, Exibir), para ferramentas densas como o editor de peças.\n\n**Quando não usar**: para escolher um valor de formulário (use Select ou Combobox) ou para navegação principal (use os componentes de Navegação).\n\n**Anatomia**\n- `DropdownMenu`: raiz (`open`, `onOpenChange`, `modal`).\n- `DropdownMenuTrigger`: botão que abre o menu (use `asChild` sobre um Button; botão só com ícone precisa de `aria-label`).\n- `DropdownMenuContent`: superfície; `align`, `side` e `sideOffset` posicionam o menu.\n\nOs itens são compartilhados entre Dropdown Menu, Context Menu e Menubar: `DropdownMenuItem` (aceita `inset` para alinhar com itens que têm ícone e `variant="destructive"`), `CheckboxItem`, `RadioGroup` com `RadioItem`, `Label`, `Separator`, `Shortcut`, `Group` e `Sub` com `SubTrigger` e `SubContent`.\n\n```tsx\n<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant="outline" size="icon-sm" aria-label="Ações do processo"><MoreHorizontal /></Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent align="start">\n    <DropdownMenuItem><FileText /> Abrir processo</DropdownMenuItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem variant="destructive"><Trash2 /> Excluir</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>\n```\n\nAções destrutivas ficam no fim, separadas, e devem abrir um Alert Dialog antes de executar.'}}},decorators:[e=>(0,j.jsx)(`div`,{className:`min-h-[420px] w-[520px]`,children:(0,j.jsx)(e,{})})]},P={parameters:{docs:{description:{story:`Menu da conta com rótulo, grupo, atalhos, submenu e ação destrutiva.`}}},render:({side:e,align:t,sideOffset:n,label:a,disabledItem:s,...u})=>(0,j.jsxs)(T,{...u,children:[(0,j.jsx)(y,{asChild:!0,children:(0,j.jsx)(O,{variant:`outline`,size:`icon`,"aria-label":`Mais ações`,children:(0,j.jsx)(o,{})})}),(0,j.jsxs)(C,{side:e,align:t,sideOffset:n,className:`w-60`,children:[(0,j.jsx)(x,{children:a}),(0,j.jsx)(v,{className:`mt-0`}),(0,j.jsxs)(_,{children:[(0,j.jsxs)(f,{children:[(0,j.jsx)(d,{}),` Perfil `,(0,j.jsx)(E,{children:`Ctrl+Shift+P`})]}),(0,j.jsxs)(f,{disabled:s,children:[(0,j.jsx)(r,{}),` Notificações`]}),(0,j.jsxs)(f,{children:[(0,j.jsx)(l,{}),` Preferências `,(0,j.jsx)(E,{children:`Ctrl+,`})]}),(0,j.jsxs)(m,{children:[(0,j.jsxs)(S,{children:[(0,j.jsx)(i,{}),` Mudar escritório`]}),(0,j.jsxs)(h,{children:[(0,j.jsx)(f,{children:`BBA Advogados · São Paulo`}),(0,j.jsx)(f,{children:`BBA Advogados · Campinas`})]})]})]}),(0,j.jsx)(v,{}),(0,j.jsxs)(f,{variant:`destructive`,children:[(0,j.jsx)(c,{}),` Sair `,(0,j.jsx)(E,{children:`Ctrl+Shift+Q`})]})]})]},String(u.defaultOpen))},F={parameters:{docs:{description:{story:`Ações da linha de uma tabela de processos, com item desabilitado.`}}},render:e=>(0,j.jsxs)(T,{...e,children:[(0,j.jsx)(y,{asChild:!0,children:(0,j.jsx)(O,{variant:`outline`,size:`icon-sm`,"aria-label":`Ações do processo`,children:(0,j.jsx)(o,{})})}),(0,j.jsxs)(C,{align:`start`,children:[(0,j.jsxs)(f,{children:[(0,j.jsx)(s,{}),` Abrir processo `,(0,j.jsx)(E,{children:`Ctrl+O`})]}),(0,j.jsxs)(f,{children:[(0,j.jsx)(a,{}),` Copiar número CNJ`]}),(0,j.jsxs)(f,{disabled:!0,children:[(0,j.jsx)(s,{}),` Protocolar petição`]}),(0,j.jsx)(v,{}),(0,j.jsxs)(f,{variant:`destructive`,children:[(0,j.jsx)(u,{}),` Excluir `,(0,j.jsx)(E,{children:`Del`})]})]})]})},I={parameters:{docs:{description:{story:"Opções de exibição: `DropdownMenuCheckboxItem` para colunas visíveis e `DropdownMenuRadioGroup` para a ordenação."}}},render:function(e){let[t,n]=(0,A.useState)({cliente:!0,responsavel:!0,valor:!1}),[r,i]=(0,A.useState)(`prazo`);return(0,j.jsxs)(T,{...e,children:[(0,j.jsx)(y,{asChild:!0,children:(0,j.jsx)(O,{variant:`outline`,size:`sm`,children:`Exibir`})}),(0,j.jsxs)(C,{align:`start`,className:`w-60`,children:[(0,j.jsx)(x,{children:`Colunas`}),(0,j.jsx)(b,{checked:t.cliente,onCheckedChange:e=>n(t=>({...t,cliente:e})),children:`Cliente`}),(0,j.jsx)(b,{checked:t.responsavel,onCheckedChange:e=>n(t=>({...t,responsavel:e})),children:`Responsável`}),(0,j.jsx)(b,{checked:t.valor,onCheckedChange:e=>n(t=>({...t,valor:e})),children:`Valor da causa`}),(0,j.jsx)(v,{}),(0,j.jsx)(x,{children:`Ordenar por`}),(0,j.jsxs)(w,{value:r,onValueChange:i,children:[(0,j.jsx)(p,{value:`prazo`,children:`Próximo prazo`}),(0,j.jsx)(p,{value:`distribuicao`,children:`Data de distribuição`})]})]})]})}},L=[`Default`,`RowActions`,`CheckboxAndRadio`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Menu da conta com rótulo, grupo, atalhos, submenu e ação destrutiva."
      }
    }
  },
  render: ({
    side,
    align,
    sideOffset,
    label,
    disabledItem,
    ...args
  }) => <DropdownMenu key={String(args.defaultOpen)} {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Mais ações">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={side} align={align} sideOffset={sideOffset} className="w-60">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator className="mt-0" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User /> Perfil <DropdownMenuShortcut>Ctrl+Shift+P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled={disabledItem}>
            <Bell /> Notificações
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings /> Preferências <DropdownMenuShortcut>Ctrl+,</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Building2 /> Mudar escritório
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>BBA Advogados · São Paulo</DropdownMenuItem>
              <DropdownMenuItem>BBA Advogados · Campinas</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut /> Sair <DropdownMenuShortcut>Ctrl+Shift+Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ações da linha de uma tabela de processos, com item desabilitado."
      }
    }
  },
  render: args => <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon-sm" aria-label="Ações do processo">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <FileText /> Abrir processo <DropdownMenuShortcut>Ctrl+O</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy /> Copiar número CNJ
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <FileText /> Protocolar petição
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2 /> Excluir <DropdownMenuShortcut>Del</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Opções de exibição: \`DropdownMenuCheckboxItem\` para colunas visíveis e \`DropdownMenuRadioGroup\` para a ordenação."
      }
    }
  },
  render: function Render(args) {
    const [colunas, setColunas] = useState({
      cliente: true,
      responsavel: true,
      valor: false
    });
    const [ordem, setOrdem] = useState("prazo");
    return <DropdownMenu {...args}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">Exibir</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-60">
          <DropdownMenuLabel>Colunas</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={colunas.cliente} onCheckedChange={v => setColunas(c => ({
          ...c,
          cliente: v
        }))}>
            Cliente
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={colunas.responsavel} onCheckedChange={v => setColunas(c => ({
          ...c,
          responsavel: v
        }))}>
            Responsável
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={colunas.valor} onCheckedChange={v => setColunas(c => ({
          ...c,
          valor: v
        }))}>
            Valor da causa
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={ordem} onValueChange={setOrdem}>
            <DropdownMenuRadioItem value="prazo">Próximo prazo</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="distribuicao">Data de distribuição</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as CheckboxAndRadio,P as Default,F as RowActions,L as __namedExportsOrder,N as default};
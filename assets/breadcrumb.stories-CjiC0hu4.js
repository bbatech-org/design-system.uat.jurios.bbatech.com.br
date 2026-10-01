import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./slash-Daj2D5qa.js";import{a as r,h as i,m as a,r as o,t as s}from"./dropdown-menu-DFEElUO7.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./breadcrumb-DnSyOyOI.js";import{r as g}from"./icons.stories-CuLmnsRb.js";var _,v,y,b,x,S;function C(){return(C=e((()=>{g(),i(),l(),_=t(),v={title:`Componentes/Navegação/Breadcrumb`,component:h,args:{"aria-label":`Trilha de navegação`,currentPage:`Contestação`,showProcess:!0,separator:`chevron`},argTypes:{currentPage:{control:`text`,description:"Texto da página atual (`BreadcrumbPage`)."},showProcess:{control:`boolean`,description:`Mostra o nível intermediário com o número CNJ.`},separator:{control:`inline-radio`,options:[`chevron`,`slash`],description:"Ícone do `BreadcrumbSeparator`: chevron (padrão) ou barra, passada como `children`."},"aria-label":{control:`text`,description:"Nome acessível do `nav`."},className:{table:{disable:!0}},children:{table:{disable:!0}}},parameters:{docs:{description:{component:'Mostra onde a página atual está na hierarquia (Início › Processos › número CNJ › peça) e permite voltar a qualquer nível.\n\n**Quando usar**\n- Páginas de detalhe com dois ou mais níveis. No app, fica no Page Header, acima do título.\n\n**Quando não usar**\n- Navegação principal entre módulos: use Sidebar.\n- Páginas de primeiro nível, que já estão na Sidebar: a trilha só repetiria o item ativo.\n\n**Anatomia**\n- `Breadcrumb`: `<nav>` da trilha.\n- `BreadcrumbList` e `BreadcrumbItem`: lista ordenada (`ol`) e cada nível (`li`).\n- `BreadcrumbLink`: nível navegável; `asChild` para usar o link do roteador.\n- `BreadcrumbPage`: nível atual, com `aria-current="page"`; não é link.\n- `BreadcrumbSeparator`: chevron entre níveis; passe `children` para outro ícone.\n- `BreadcrumbEllipsis`: níveis intermediários recolhidos; combine com Dropdown Menu para listá-los.\n\n```tsx\n<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem><BreadcrumbLink href="/processos">Processos</BreadcrumbLink></BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem><BreadcrumbPage>Contestação</BreadcrumbPage></BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>\n```\n\n**Acessibilidade**\n- O `<nav>` vem com `aria-label="Trilha de navegação"`. Troque só se houver mais de uma trilha na página.\n- `BreadcrumbEllipsis` fica oculto para leitores de tela: o gatilho em volta dele precisa de `aria-label` (ex.: "Mostrar níveis ocultos").\n- Número CNJ em fonte mono, para leitura dígito a dígito.'}}}},y=`1002345-67.2026.8.26.0100`,b={render:({currentPage:e,showProcess:t,separator:r,...i})=>{let a=(0,_.jsx)(m,{children:r===`slash`?(0,_.jsx)(n,{}):void 0});return(0,_.jsx)(h,{...i,children:(0,_.jsxs)(c,{children:[(0,_.jsx)(p,{children:(0,_.jsx)(u,{href:`#inicio`,children:`Início`})}),a,(0,_.jsx)(p,{children:(0,_.jsx)(u,{href:`#processos`,children:`Processos`})}),a,t&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p,{children:(0,_.jsx)(u,{href:`#processo`,className:`font-mono text-[13px]`,children:y})}),a]}),(0,_.jsx)(p,{children:(0,_.jsx)(f,{children:e})})]})})}},x={parameters:{docs:{description:{story:`Níveis intermediários recolhidos em BreadcrumbEllipsis e listados em um Dropdown Menu.`}}},render:({currentPage:e,showProcess:t,separator:n,...i})=>(0,_.jsx)(h,{...i,children:(0,_.jsxs)(c,{children:[(0,_.jsx)(p,{children:(0,_.jsx)(u,{href:`#inicio`,children:`Início`})}),(0,_.jsx)(m,{}),(0,_.jsx)(p,{children:(0,_.jsxs)(s,{modal:!1,children:[(0,_.jsx)(a,{className:`rounded-full hover:bg-accent`,"aria-label":`Mostrar níveis ocultos`,children:(0,_.jsx)(d,{})}),(0,_.jsxs)(o,{align:`start`,children:[(0,_.jsx)(r,{children:`Clientes`}),(0,_.jsx)(r,{children:`Maria da Silva`}),(0,_.jsx)(r,{children:`Processos`})]})]})}),(0,_.jsx)(m,{}),(0,_.jsx)(p,{children:(0,_.jsx)(u,{href:`#processo`,className:`font-mono text-[13px]`,children:y})}),(0,_.jsx)(m,{}),(0,_.jsx)(p,{children:(0,_.jsx)(f,{children:e})})]})})},S=[`Default`,`Collapsed`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: ({
    currentPage,
    showProcess,
    separator,
    ...args
  }) => {
    const sep = <BreadcrumbSeparator>{separator === "slash" ? <Slash /> : undefined}</BreadcrumbSeparator>;
    return <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="#inicio">Início</BreadcrumbLink></BreadcrumbItem>
          {sep}
          <BreadcrumbItem><BreadcrumbLink href="#processos">Processos</BreadcrumbLink></BreadcrumbItem>
          {sep}
          {showProcess && <>
              <BreadcrumbItem><BreadcrumbLink href="#processo" className="font-mono text-[13px]">{CNJ}</BreadcrumbLink></BreadcrumbItem>
              {sep}
            </>}
          <BreadcrumbItem><BreadcrumbPage>{currentPage}</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Níveis intermediários recolhidos em BreadcrumbEllipsis e listados em um Dropdown Menu."
      }
    }
  },
  render: ({
    currentPage,
    showProcess,
    separator,
    ...args
  }) => <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#inicio">Início</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="rounded-full hover:bg-accent" aria-label="Mostrar níveis ocultos">
              <BreadcrumbEllipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Clientes</DropdownMenuItem>
              <DropdownMenuItem>Maria da Silva</DropdownMenuItem>
              <DropdownMenuItem>Processos</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#processo" className="font-mono text-[13px]">{CNJ}</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>{currentPage}</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Collapsed,b as Default,S as __namedExportsOrder,v as default};
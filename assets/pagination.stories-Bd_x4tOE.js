import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./pagination-DkZytsX9.js";function d(e){return e<=3?[1,2,3,`ellipsis`,h]:e>=10?[1,`ellipsis`,10,11,h]:[1,`ellipsis`,e-1,e,e+1,`ellipsis`,h]}var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{f=t(),i(),p=n(),m={title:`Componentes/Navegação/Pagination`,component:u,args:{"aria-label":`Paginação`,page:2,size:`icon-sm`,previousLabel:`Anterior`,nextLabel:`Próxima`},argTypes:{page:{control:{type:`range`,min:1,max:12,step:1},description:"Página atual (de 12): define o `isActive` e as reticências."},size:{control:`inline-radio`,options:[`icon-sm`,`icon`,`icon-lg`],description:"Tamanho dos links numéricos (`PaginationLink` `size`): 36, 44 ou 52 px."},previousLabel:{control:`text`,description:"Texto do `PaginationPrevious` (children)."},nextLabel:{control:`text`,description:"Texto do `PaginationNext` (children)."},"aria-label":{control:`text`,description:"Nome acessível do `nav`."},className:{table:{disable:!0}},children:{table:{disable:!0}}},parameters:{docs:{description:{component:'Navegação entre páginas de uma listagem (processos, publicações, clientes). As partes são links (`<a>`), então cada página pode ter URL própria (ex.: `?pagina=3`).\n\n**Quando usar**\n- Listagens e tabelas (Data Table) com total conhecido, em que o usuário quer ir a uma página específica.\n\n**Quando não usar**\n- Feeds contínuos (andamentos, histórico de um processo): prefira um botão "Carregar mais".\n- Listas curtas que cabem numa área rolável: use Scroll Area.\n\n**Anatomia**\n- `Pagination`: `<nav>` com `aria-label="Paginação"`.\n- `PaginationContent` e `PaginationItem`: lista (`ul` e `li`).\n- `PaginationLink`: link de uma página. `isActive` marca a página atual (primary, `aria-current="page"`); `disabled` aplica `aria-disabled`, tira o link da ordem de foco e bloqueia o clique; `size` segue o Button (padrão `icon-sm`).\n- `PaginationPrevious` e `PaginationNext`: anterior e próxima; o texto padrão ("Anterior", "Próxima") pode ser trocado via `children`.\n- `PaginationEllipsis`: páginas omitidas.\n\nO componente não calcula quais números mostrar: essa lógica fica com quem usa (veja a story Default).\n\n**Acessibilidade e UX**\n- `disabled` aplica `aria-disabled="true"` e `tabIndex={-1}` (o Tab pula o link) e cancela o clique e o Enter: nem a navegação do `href` nem o seu `onClick` acontecem.\n- Mostre o total ao lado ("1–20 de 238 processos") para dar contexto.'}}}},h=12,g={parameters:{docs:{description:{story:`Interativa: a janela de números e as reticências mudam conforme a página atual.`}}},render:function({page:e=2,size:t,previousLabel:n,nextLabel:i,...m}){let[g,_]=(0,f.useState)(e);(0,f.useEffect)(()=>_(e),[e]);let v=e=>t=>{t.preventDefault(),_(Math.min(h,Math.max(1,e)))};return(0,p.jsx)(u,{...m,children:(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{children:(0,p.jsx)(l,{href:`#`,onClick:v(g-1),disabled:g===1,children:n})}),d(g).map((e,n)=>(0,p.jsx)(a,{children:e===`ellipsis`?(0,p.jsx)(c,{}):(0,p.jsx)(r,{href:`#`,size:t,isActive:e===g,onClick:v(e),children:e})},`${e}-${n}`)),(0,p.jsx)(a,{children:(0,p.jsx)(s,{href:`#`,onClick:v(g+1),disabled:g===h,children:i})})]})})}},_={parameters:{docs:{description:{story:`Padrão, hover (simulado), atual (isActive) e desabilitado (disabled).`}}},render:({page:e,size:t,previousLabel:n,nextLabel:i,...s})=>(0,p.jsx)(u,{...s,children:(0,p.jsxs)(o,{className:`gap-4`,children:[(0,p.jsx)(a,{children:(0,p.jsx)(r,{href:`#`,children:`2`})}),(0,p.jsx)(a,{children:(0,p.jsx)(r,{href:`#`,className:`bg-accent`,children:`2`})}),(0,p.jsx)(a,{children:(0,p.jsx)(r,{href:`#`,isActive:!0,children:`2`})}),(0,p.jsx)(a,{children:(0,p.jsx)(r,{href:`#`,disabled:!0,children:`2`})})]})})},v={parameters:{docs:{description:{story:`Com a contagem de itens à esquerda, padrão das listagens do app.`}}},render:({page:e,size:t,previousLabel:n,nextLabel:i,...d})=>(0,p.jsxs)(`div`,{className:`flex w-[640px] items-center justify-between`,children:[(0,p.jsx)(`span`,{className:`text-body-sm text-muted-foreground`,children:`1–20 de 238 processos`}),(0,p.jsx)(u,{...d,className:`mx-0 w-auto`,children:(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{children:(0,p.jsx)(l,{href:`#`,disabled:!0})}),(0,p.jsx)(a,{children:(0,p.jsx)(r,{href:`#`,isActive:!0,children:`1`})}),(0,p.jsx)(a,{children:(0,p.jsx)(r,{href:`#`,children:`2`})}),(0,p.jsx)(a,{children:(0,p.jsx)(r,{href:`#`,children:`3`})}),(0,p.jsx)(a,{children:(0,p.jsx)(c,{})}),(0,p.jsx)(a,{children:(0,p.jsx)(r,{href:`#`,children:`12`})}),(0,p.jsx)(a,{children:(0,p.jsx)(s,{href:`#`})})]})})]})},y=[`Default`,`States`,`WithTotal`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Interativa: a janela de números e as reticências mudam conforme a página atual."
      }
    }
  },
  render: function Render({
    page = 2,
    size,
    previousLabel,
    nextLabel,
    ...args
  }) {
    const [current, setCurrent] = useState(page);
    useEffect(() => setCurrent(page), [page]);
    const go = (page: number) => (e: MouseEvent) => {
      e.preventDefault();
      setCurrent(Math.min(TOTAL, Math.max(1, page)));
    };
    return <Pagination {...args}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={go(current - 1)} disabled={current === 1}>
              {previousLabel}
            </PaginationPrevious>
          </PaginationItem>
          {pages(current).map((p, i) => <PaginationItem key={\`\${p}-\${i}\`}>
              {p === "ellipsis" ? <PaginationEllipsis /> : <PaginationLink href="#" size={size} isActive={p === current} onClick={go(p)}>{p}</PaginationLink>}
            </PaginationItem>)}
          <PaginationItem>
            <PaginationNext href="#" onClick={go(current + 1)} disabled={current === TOTAL}>
              {nextLabel}
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Padrão, hover (simulado), atual (isActive) e desabilitado (disabled)."
      }
    }
  },
  render: ({
    page,
    size,
    previousLabel,
    nextLabel,
    ...args
  }) => <Pagination {...args}>
      <PaginationContent className="gap-4">
        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" className="bg-accent">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" disabled>2</PaginationLink></PaginationItem>
      </PaginationContent>
    </Pagination>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Com a contagem de itens à esquerda, padrão das listagens do app."
      }
    }
  },
  render: ({
    page,
    size,
    previousLabel,
    nextLabel,
    ...args
  }) => <div className="flex w-[640px] items-center justify-between">
      <span className="text-body-sm text-muted-foreground">1–20 de 238 processos</span>
      <Pagination {...args} className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem><PaginationPrevious href="#" disabled /></PaginationItem>
          <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
          <PaginationItem><PaginationEllipsis /></PaginationItem>
          <PaginationItem><PaginationLink href="#">12</PaginationLink></PaginationItem>
          <PaginationItem><PaginationNext href="#" /></PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
}`,...v.parameters?.docs?.source}}}})))()}b();export{g as Default,_ as States,v as WithTotal,y as __namedExportsOrder,m as default};
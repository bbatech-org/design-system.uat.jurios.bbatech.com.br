import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./ellipsis-DnbAV_rk.js";import{t as i}from"./plus-DR-VRBqS.js";import{t as a}from"./upload-BmJaqzp_.js";import{r as o,t as s}from"./button-BxLqnFN9.js";import{r as c,t as l}from"./badge-CgZcyeNt.js";import{a as u,c as d,i as f,o as p,r as m,s as h,t as g}from"./breadcrumb-DnSyOyOI.js";import{a as _,c as v,i as y,n as b,o as x,r as S,s as C,t as w}from"./page-header-BhTkA3B6.js";import{a as T,i as E,r as D,t as O}from"./tabs-BOAQcmsn.js";import{r as k}from"./icons.stories-CuLmnsRb.js";function A({items:e}){let t=e[e.length-1];return(0,P.jsx)(g,{children:(0,P.jsxs)(u,{children:[e.slice(0,-1).map(e=>(0,P.jsxs)(N.Fragment,{children:[(0,P.jsx)(m,{children:(0,P.jsx)(f,{href:`#${e.toLowerCase()}`,children:e})}),(0,P.jsx)(h,{})]},e)),(0,P.jsx)(m,{children:(0,P.jsx)(p,{children:t})})]})})}function j(){return(0,P.jsxs)(w,{children:[(0,P.jsx)(A,{items:[`Início`,`Prazos`]}),(0,P.jsxs)(x,{children:[(0,P.jsxs)(S,{children:[(0,P.jsx)(C,{children:`Prazos`}),(0,P.jsx)(y,{children:`Todos os prazos da sua carteira, ordenados por vencimento.`})]}),(0,P.jsxs)(b,{children:[(0,P.jsxs)(s,{variant:`secondary`,children:[(0,P.jsx)(a,{}),` Exportar`]}),(0,P.jsxs)(s,{children:[(0,P.jsx)(i,{}),` Novo prazo`]})]})]})]})}function M({withTabs:e=!1}){return(0,P.jsxs)(w,{children:[(0,P.jsx)(A,{items:[`Início`,`Processos`,`Silva × Banco X S.A.`]}),(0,P.jsxs)(x,{children:[(0,P.jsxs)(S,{children:[(0,P.jsx)(C,{status:(0,P.jsx)(l,{variant:`success`,children:`Em andamento`}),children:`Silva × Banco X S.A.`}),(0,P.jsxs)(y,{children:[(0,P.jsx)(`span`,{className:`text-code text-[13px]`,children:`1002345-67.2026.8.26.0100`}),(0,P.jsx)(`span`,{children:`TJSP · 3ª Vara Cível · Resp. Ana Lima`})]})]}),(0,P.jsxs)(b,{children:[(0,P.jsx)(s,{variant:`secondary`,size:`icon-sm`,"aria-label":`Mais ações`,children:(0,P.jsx)(r,{})}),(0,P.jsxs)(s,{children:[(0,P.jsx)(i,{}),` Cadastrar prazo`]})]})]}),e&&(0,P.jsx)(O,{defaultValue:`andamentos`,children:(0,P.jsxs)(D,{variant:`line`,className:`w-full`,children:[(0,P.jsx)(E,{value:`resumo`,children:`Resumo`}),(0,P.jsx)(E,{value:`andamentos`,children:`Andamentos`}),(0,P.jsx)(E,{value:`prazos`,children:`Prazos`}),(0,P.jsx)(E,{value:`documentos`,children:`Documentos`}),(0,P.jsx)(E,{value:`financeiro`,children:`Financeiro`})]})})]})}var N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{N=t(),k(),o(),c(),d(),T(),v(),P=n(),F={success:`Em andamento`,warning:`Prazo próximo`,destructive:`Prazo vencido`,secondary:`Arquivado`},I={title:`Componentes/Layout/Page Header`,component:w,args:{title:`Prazos`,description:`Todos os prazos da sua carteira, ordenados por vencimento.`,eyebrow:``,status:`nenhum`,showBreadcrumb:!0,primaryAction:`Novo prazo`,secondaryAction:`Exportar`,showTabs:!1},argTypes:{title:{control:`text`,description:"Texto do `PageHeaderTitle` (h1)."},description:{control:`text`,description:"Texto do `PageHeaderDescription` (vazio remove)."},eyebrow:{control:`text`,description:"Texto do `PageHeaderEyebrow` acima do título (vazio remove)."},status:{control:`select`,options:[`nenhum`,`success`,`warning`,`destructive`,`secondary`],description:"Badge passado em `status` do título."},showBreadcrumb:{control:`boolean`,description:`Mostra a trilha (Breadcrumb) no topo.`},primaryAction:{control:`text`,description:`Rótulo da ação principal (vazio remove).`},secondaryAction:{control:`text`,description:`Rótulo da ação secundária (vazio remove).`},showTabs:{control:`boolean`,description:'Inclui Tabs `variant="line"` como última linha.'},className:{table:{disable:!0}}},parameters:{docs:{description:{component:'Cabeçalho padrão das telas do app: trilha (Breadcrumb), título `h1`, descrição ou metadados, status, ações e, em páginas de detalhe, abas.\n\n**Quando usar**\n- No topo de toda página dentro do App Shell, em listagens e detalhes.\n\n**Quando não usar**\n- Títulos de seções dentro da página: use a tipografia (`text-title-*`) com o nível de título adequado.\n- Cabeçalho de card: use `CardHeader` do Card.\n- Hero do site: use as seções de Website.\n\n**Anatomia**\n- `PageHeader`: `<header>` que empilha as linhas. O Breadcrumb, quando houver, é o primeiro filho.\n- `PageHeaderMain`: linha principal, com os textos à esquerda e as ações à direita; quebra em telas estreitas.\n- `PageHeaderContent`: coluna de textos.\n- `PageHeaderEyebrow`: rótulo curto em Plex Mono caixa alta acima do título (módulo, período).\n- `PageHeaderTitle`: `h1` da página. A prop `status` recebe um Badge exibido ao lado do título.\n- `PageHeaderDescription`: texto ou metadados em linha (número CNJ, tribunal, vara, responsável).\n- `PageHeaderActions`: ações da página.\n- Abas: coloque Tabs com `TabsList variant="line"` como último filho do `PageHeader`.\n\n```tsx\n<PageHeader>\n  <Breadcrumb>{/* Início › Processos › Silva × Banco X S.A. */}</Breadcrumb>\n  <PageHeaderMain>\n    <PageHeaderContent>\n      <PageHeaderTitle status={<Badge variant="success">Em andamento</Badge>}>\n        Silva × Banco X S.A.\n      </PageHeaderTitle>\n      <PageHeaderDescription>\n        <span className="text-code">1002345-67.2026.8.26.0100</span>\n        <span>TJSP · 3ª Vara Cível</span>\n      </PageHeaderDescription>\n    </PageHeaderContent>\n    <PageHeaderActions>\n      <Button>Cadastrar prazo</Button>\n    </PageHeaderActions>\n  </PageHeaderMain>\n</PageHeader>\n```\n\n**Boas práticas**\n- Um único botão principal (`default`) em `PageHeaderActions`. As demais ações vão como `secondary` ou num Dropdown Menu "Mais ações" (botão de ícone com `aria-label`).\n- Um único `h1` por tela: o `PageHeaderTitle`.'}},layout:`padded`}},L={parameters:{docs:{description:{story:`Listagem: trilha, título, descrição e ações (Exportar e a ação principal). Use os controles para montar outras combinações.`}}},render:({title:e,description:t,eyebrow:n,status:r,showBreadcrumb:o,primaryAction:c,secondaryAction:u,showTabs:d,...f})=>(0,P.jsxs)(w,{...f,children:[o&&(0,P.jsx)(A,{items:[`Início`,e||`Prazos`]}),(0,P.jsxs)(x,{children:[(0,P.jsxs)(S,{children:[n&&(0,P.jsx)(_,{children:n}),(0,P.jsx)(C,{status:r&&r!==`nenhum`?(0,P.jsx)(l,{variant:r,children:F[r]}):void 0,children:e}),t&&(0,P.jsx)(y,{children:t})]}),(c||u)&&(0,P.jsxs)(b,{children:[u&&(0,P.jsxs)(s,{variant:`secondary`,children:[(0,P.jsx)(a,{}),` `,u]}),c&&(0,P.jsxs)(s,{children:[(0,P.jsx)(i,{}),` `,c]})]})]}),d&&(0,P.jsx)(O,{defaultValue:`todos`,children:(0,P.jsxs)(D,{variant:`line`,className:`w-full`,children:[(0,P.jsx)(E,{value:`todos`,children:`Todos`}),(0,P.jsx)(E,{value:`hoje`,children:`Vencem hoje`}),(0,P.jsx)(E,{value:`semana`,children:`Esta semana`}),(0,P.jsx)(E,{value:`cumpridos`,children:`Cumpridos`})]})})]})},R={render:()=>(0,P.jsx)(M,{}),parameters:{docs:{description:{story:`Detalhe de processo: status ao lado do título e metadados (CNJ, tribunal, vara, responsável).`}}}},z={render:()=>(0,P.jsx)(M,{withTabs:!0}),parameters:{docs:{description:{story:`Detalhe com Tabs variant="line" como última linha do cabeçalho.`}}}},B={parameters:{docs:{description:{story:`Eyebrow com módulo e período acima do título, sem trilha.`}}},render:()=>(0,P.jsx)(w,{children:(0,P.jsxs)(x,{children:[(0,P.jsxs)(S,{children:[(0,P.jsx)(_,{children:`Financeiro · Setembro 2026`}),(0,P.jsx)(C,{children:`Honorários a receber`}),(0,P.jsx)(y,{children:`42 lançamentos em aberto de 18 clientes.`})]}),(0,P.jsx)(b,{children:(0,P.jsxs)(s,{children:[(0,P.jsx)(i,{}),` Novo lançamento`]})})]})})},V={parameters:{docs:{description:{story:`As três composições (listagem, detalhe, detalhe com abas) para comparação.`}}},render:()=>(0,P.jsxs)(`div`,{className:`flex flex-col gap-14 rounded-surface bg-background p-8`,children:[(0,P.jsx)(j,{}),(0,P.jsx)(M,{}),(0,P.jsx)(M,{withTabs:!0})]})},H=[`Default`,`Detail`,`DetailWithTabs`,`WithEyebrow`,`Types`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Listagem: trilha, título, descrição e ações (Exportar e a ação principal). Use os controles para montar outras combinações."
      }
    }
  },
  render: ({
    title,
    description,
    eyebrow,
    status,
    showBreadcrumb,
    primaryAction,
    secondaryAction,
    showTabs,
    ...args
  }) => <PageHeader {...args}>
      {showBreadcrumb && <Trail items={["Início", title || "Prazos"]} />}
      <PageHeaderMain>
        <PageHeaderContent>
          {eyebrow && <PageHeaderEyebrow>{eyebrow}</PageHeaderEyebrow>}
          <PageHeaderTitle status={status && status !== "nenhum" ? <Badge variant={status}>{statusLabels[status]}</Badge> : undefined}>
            {title}
          </PageHeaderTitle>
          {description && <PageHeaderDescription>{description}</PageHeaderDescription>}
        </PageHeaderContent>
        {(primaryAction || secondaryAction) && <PageHeaderActions>
            {secondaryAction && <Button variant="secondary">
                <Upload /> {secondaryAction}
              </Button>}
            {primaryAction && <Button>
                <Plus /> {primaryAction}
              </Button>}
          </PageHeaderActions>}
      </PageHeaderMain>
      {showTabs && <Tabs defaultValue="todos">
          <TabsList variant="line" className="w-full">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="hoje">Vencem hoje</TabsTrigger>
            <TabsTrigger value="semana">Esta semana</TabsTrigger>
            <TabsTrigger value="cumpridos">Cumpridos</TabsTrigger>
          </TabsList>
        </Tabs>}
    </PageHeader>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <DetailHeader />,
  parameters: {
    docs: {
      description: {
        story: "Detalhe de processo: status ao lado do título e metadados (CNJ, tribunal, vara, responsável)."
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <DetailHeader withTabs />,
  parameters: {
    docs: {
      description: {
        story: "Detalhe com Tabs variant=\\"line\\" como última linha do cabeçalho."
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Eyebrow com módulo e período acima do título, sem trilha."
      }
    }
  },
  render: () => <PageHeader>
      <PageHeaderMain>
        <PageHeaderContent>
          <PageHeaderEyebrow>Financeiro · Setembro 2026</PageHeaderEyebrow>
          <PageHeaderTitle>Honorários a receber</PageHeaderTitle>
          <PageHeaderDescription>42 lançamentos em aberto de 18 clientes.</PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <Button>
            <Plus /> Novo lançamento
          </Button>
        </PageHeaderActions>
      </PageHeaderMain>
    </PageHeader>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "As três composições (listagem, detalhe, detalhe com abas) para comparação."
      }
    }
  },
  render: () => <div className="flex flex-col gap-14 rounded-surface bg-background p-8">
      <ListHeader />
      <DetailHeader />
      <DetailHeader withTabs />
    </div>
}`,...V.parameters?.docs?.source}}}})))()}U();export{L as Default,R as Detail,z as DetailWithTabs,V as Types,B as WithEyebrow,H as __namedExportsOrder,I as default};
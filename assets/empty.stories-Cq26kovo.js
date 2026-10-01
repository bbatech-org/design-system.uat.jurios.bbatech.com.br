import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./circle-alert-BZNRfjYC.js";import{t as r}from"./eye-DPJFMb7z.js";import{t as i}from"./inbox-CezP_KKG.js";import{t as a}from"./search-CGMycZmG.js";import{r as o,t as s}from"./button-BxLqnFN9.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./empty-CoD3YDXe.js";import{r as h}from"./icons.stories-CuLmnsRb.js";function g(){return(0,_.jsxs)(m,{children:[(0,_.jsxs)(l,{children:[(0,_.jsx)(c,{children:(0,_.jsx)(i,{})}),(0,_.jsx)(d,{children:`Nenhum prazo cadastrado`}),(0,_.jsx)(f,{children:`Cadastre o primeiro prazo ou importe publicações do DJe para receber sugestões.`})]}),(0,_.jsxs)(u,{children:[(0,_.jsx)(s,{size:`sm`,children:`Cadastrar prazo`}),(0,_.jsx)(s,{size:`sm`,variant:`outline`,children:`Importar publicações`})]})]})}var _,v,y,b,x,S;function C(){return(C=e((()=>{h(),o(),p(),_=t(),v={title:`Componentes/Feedback/Empty`,component:m,parameters:{docs:{description:{component:`Estado vazio de uma lista, tabela, busca ou painel. Explica por que não há conteúdo e oferece o próximo passo, em vez de deixar a área em branco.

**Quando usar**
- Carteira sem registros (nenhum prazo cadastrado), busca ou filtro sem resultado, acesso restrito (segredo de justiça) ou falha ao carregar.

**Quando não usar**
- Conteúdo ainda carregando: use Skeleton.
- Aviso sobre um registro que existe: use Alert.

**Anatomia**
- \`Empty\`: contêiner centralizado. Sem fundo por padrão; em áreas soltas, aplique \`className="bg-card"\`.
- \`EmptyHeader\`: agrupa mídia, título e descrição.
- \`EmptyMedia\`: ícone decorativo. \`variant="icon"\` (padrão, fundo muted), \`destructive\` (erro) ou \`default\` (sem fundo, para ilustrações).
- \`EmptyTitle\`: diz o estado ("Nenhum resultado").
- \`EmptyDescription\`: diz o que fazer a seguir. Links internos recebem o estilo de link de ação.
- \`EmptyContent\`: uma ação principal e, se preciso, uma secundária.

\`\`\`tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia><Search /></EmptyMedia>
    <EmptyTitle>Nenhum resultado</EmptyTitle>
    <EmptyDescription>Nenhum processo corresponde aos filtros.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button size="sm">Limpar filtros</Button>
  </EmptyContent>
</Empty>
\`\`\`

**Boas práticas**
- Título curto e factual; descrição com o próximo passo concreto. Evite "Ops!" e tom informal.
- Em resultado de busca vazio, a ação deve desfazer a causa (limpar filtros), não criar registro.
- \`EmptyMedia\` já é \`aria-hidden\`; o texto precisa bastar sozinho.`}}},args:{title:`Nenhum prazo cadastrado`,description:`Cadastre o primeiro prazo ou importe publicações do DJe para receber sugestões.`,mediaVariant:`icon`,primaryAction:`Cadastrar prazo`,secondaryAction:`Importar publicações`,onCard:!1},argTypes:{title:{control:`text`,description:"Texto do `EmptyTitle`."},description:{control:`text`,description:"Texto do `EmptyDescription`."},mediaVariant:{control:`inline-radio`,options:[`icon`,`destructive`,`default`],description:"`variant` do `EmptyMedia`."},primaryAction:{control:`text`,description:`Rótulo da ação principal (vazio remove).`},secondaryAction:{control:`text`,description:`Rótulo da ação secundária (vazio remove).`},onCard:{control:`boolean`,description:"Aplica `bg-card` ao contêiner."},className:{table:{disable:!0}}}},y={render:({title:e,description:t,mediaVariant:r,primaryAction:a,secondaryAction:o,onCard:p,className:h,...g})=>(0,_.jsx)(`div`,{className:`w-100`,children:(0,_.jsxs)(m,{className:p?`bg-card`:h,...g,children:[(0,_.jsxs)(l,{children:[(0,_.jsx)(c,{variant:r,children:r===`destructive`?(0,_.jsx)(n,{}):(0,_.jsx)(i,{})}),e&&(0,_.jsx)(d,{children:e}),t&&(0,_.jsx)(f,{children:t})]}),(a||o)&&(0,_.jsxs)(u,{children:[a&&(0,_.jsx)(s,{size:`sm`,children:a}),o&&(0,_.jsx)(s,{size:`sm`,variant:`outline`,children:o})]})]})})},b={parameters:{layout:`padded`,docs:{description:{story:'Os quatro casos típicos: sem dados, sem resultado, acesso restrito e falha ao carregar (`EmptyMedia variant="destructive"`).'}}},render:()=>(0,_.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,_.jsx)(g,{}),(0,_.jsxs)(m,{children:[(0,_.jsxs)(l,{children:[(0,_.jsx)(c,{children:(0,_.jsx)(a,{})}),(0,_.jsx)(d,{children:`Nenhum resultado`}),(0,_.jsx)(f,{children:`Nenhum processo corresponde aos filtros. Tente outros termos ou limpe os filtros.`})]}),(0,_.jsx)(u,{children:(0,_.jsx)(s,{size:`sm`,children:`Limpar filtros`})})]}),(0,_.jsxs)(m,{children:[(0,_.jsxs)(l,{children:[(0,_.jsx)(c,{children:(0,_.jsx)(r,{})}),(0,_.jsx)(d,{children:`Acesso restrito`}),(0,_.jsx)(f,{children:`Este processo está em segredo de justiça. Solicite acesso ao responsável.`})]}),(0,_.jsx)(u,{children:(0,_.jsx)(s,{size:`sm`,children:`Solicitar acesso`})})]}),(0,_.jsxs)(m,{children:[(0,_.jsxs)(l,{children:[(0,_.jsx)(c,{variant:`destructive`,children:(0,_.jsx)(n,{})}),(0,_.jsx)(d,{children:`Não foi possível carregar`}),(0,_.jsx)(f,{children:`Houve uma falha ao buscar os dados. Tente novamente em instantes.`})]}),(0,_.jsx)(u,{children:(0,_.jsx)(s,{size:`sm`,children:`Tentar novamente`})})]})]})},x={parameters:{docs:{description:{story:"Sobre `bg-card`, quando o estado vazio ocupa uma área isolada da tela."}}},render:()=>(0,_.jsx)(`div`,{className:`w-120`,children:(0,_.jsxs)(m,{className:`bg-card`,children:[(0,_.jsxs)(l,{children:[(0,_.jsx)(c,{children:(0,_.jsx)(a,{})}),(0,_.jsx)(d,{children:`Nenhum cliente encontrado`}),(0,_.jsx)(f,{children:`Revise o CPF/CNPJ informado ou cadastre um novo cliente.`})]}),(0,_.jsx)(u,{children:(0,_.jsx)(s,{size:`sm`,children:`Novo cliente`})})]})})},S=[`Default`,`Types`,`OnCard`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: ({
    title,
    description,
    mediaVariant,
    primaryAction,
    secondaryAction,
    onCard,
    className,
    ...args
  }) => <div className="w-100">
      <Empty className={onCard ? "bg-card" : className} {...args}>
        <EmptyHeader>
          <EmptyMedia variant={mediaVariant}>
            {mediaVariant === "destructive" ? <CircleAlert /> : <Inbox />}
          </EmptyMedia>
          {title && <EmptyTitle>{title}</EmptyTitle>}
          {description && <EmptyDescription>{description}</EmptyDescription>}
        </EmptyHeader>
        {(primaryAction || secondaryAction) && <EmptyContent>
            {primaryAction && <Button size="sm">{primaryAction}</Button>}
            {secondaryAction && <Button size="sm" variant="outline">{secondaryAction}</Button>}
          </EmptyContent>}
      </Empty>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Os quatro casos típicos: sem dados, sem resultado, acesso restrito e falha ao carregar (\`EmptyMedia variant=\\"destructive\\"\`)."
      }
    }
  },
  render: () => <div className="grid grid-cols-2 gap-4">
      <NoData />
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <Search />
          </EmptyMedia>
          <EmptyTitle>Nenhum resultado</EmptyTitle>
          <EmptyDescription>Nenhum processo corresponde aos filtros. Tente outros termos ou limpe os filtros.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Limpar filtros</Button>
        </EmptyContent>
      </Empty>
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <Eye />
          </EmptyMedia>
          <EmptyTitle>Acesso restrito</EmptyTitle>
          <EmptyDescription>Este processo está em segredo de justiça. Solicite acesso ao responsável.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Solicitar acesso</Button>
        </EmptyContent>
      </Empty>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="destructive">
            <CircleAlert />
          </EmptyMedia>
          <EmptyTitle>Não foi possível carregar</EmptyTitle>
          <EmptyDescription>Houve uma falha ao buscar os dados. Tente novamente em instantes.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Tentar novamente</Button>
        </EmptyContent>
      </Empty>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sobre \`bg-card\`, quando o estado vazio ocupa uma área isolada da tela."
      }
    }
  },
  render: () => <div className="w-120">
      <Empty className="bg-card">
        <EmptyHeader>
          <EmptyMedia>
            <Search />
          </EmptyMedia>
          <EmptyTitle>Nenhum cliente encontrado</EmptyTitle>
          <EmptyDescription>Revise o CPF/CNPJ informado ou cadastre um novo cliente.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Novo cliente</Button>
        </EmptyContent>
      </Empty>
    </div>
}`,...x.parameters?.docs?.source}}}})))()}C();export{y as Default,x as OnCard,b as Types,S as __namedExportsOrder,v as default};
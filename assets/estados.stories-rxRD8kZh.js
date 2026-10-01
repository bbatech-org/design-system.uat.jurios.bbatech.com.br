import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./circle-alert-BZNRfjYC.js";import{t as r}from"./inbox-CezP_KKG.js";import{t as i}from"./search-CGMycZmG.js";import{n as a,t as o}from"./utils-5BEY1ubH.js";import{r as s,t as c}from"./button-BxLqnFN9.js";import{i as l,n as u,s as d,t as f}from"./input-group-BqUCSqoh.js";import{i as p,n as m,r as h,t as g}from"./alert-DCSiLL4s.js";import{a as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./empty-CoD3YDXe.js";import{n as w,t as T}from"./skeleton-BysSyuXb.js";import{a as E,c as D,i as O,o as k,r as A,s as j,t as M}from"./page-header-BhTkA3B6.js";import{r as N}from"./icons.stories-CuLmnsRb.js";function P({rows:e=5,className:t,...n}){return(0,V.jsx)(`div`,{role:`status`,"aria-label":`Carregando lista`,className:o(`flex flex-col gap-4`,t),...n,children:Array.from({length:e},(e,t)=>(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsx)(T,{className:`size-9 shrink-0 rounded-full`}),(0,V.jsxs)(`div`,{className:`flex flex-1 flex-col gap-2.5`,children:[(0,V.jsx)(T,{className:`h-3 w-full rounded-full`}),(0,V.jsx)(T,{className:`h-2.5 w-2/5 rounded-full`})]})]},t))})}function F({title:e=`Nenhum prazo cadastrado`,description:t=`Cadastre o primeiro prazo ou importe publicações do DJe para receber sugestões.`,actions:n=(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(c,{size:`sm`,children:`Cadastrar prazo`}),(0,V.jsx)(c,{variant:`outline`,size:`sm`,children:`Importar publicações`})]}),...i}){return(0,V.jsxs)(C,{...i,children:[(0,V.jsxs)(v,{children:[(0,V.jsx)(_,{children:(0,V.jsx)(r,{})}),(0,V.jsx)(b,{children:e}),(0,V.jsx)(x,{children:t})]}),(0,V.jsx)(y,{children:n})]})}function I({query:e=`silva junior`,title:t=`Nenhum resultado`,description:n=`Nenhum processo corresponde aos filtros. Tente outros termos ou limpe os filtros.`,actions:r=(0,V.jsx)(c,{size:`sm`,children:`Limpar filtros`}),className:a,...s}){return(0,V.jsxs)(`div`,{className:o(`flex flex-col gap-2`,a),...s,children:[(0,V.jsxs)(f,{className:`h-10`,children:[(0,V.jsx)(u,{children:(0,V.jsx)(i,{})}),(0,V.jsx)(l,{defaultValue:e,"aria-label":`Buscar processos`})]}),(0,V.jsxs)(C,{children:[(0,V.jsxs)(v,{children:[(0,V.jsx)(_,{children:(0,V.jsx)(i,{})}),(0,V.jsx)(b,{children:t}),(0,V.jsx)(x,{children:n})]}),(0,V.jsx)(y,{children:r})]})]})}function L({title:e=`Não foi possível carregar`,description:t=`Houve uma falha ao buscar os dados. Tente novamente em instantes.`,actions:r=(0,V.jsx)(c,{size:`sm`,children:`Tentar novamente`}),...i}){return(0,V.jsxs)(C,{role:`alert`,...i,children:[(0,V.jsxs)(v,{children:[(0,V.jsx)(_,{variant:`destructive`,children:(0,V.jsx)(n,{})}),(0,V.jsx)(b,{children:e}),(0,V.jsx)(x,{children:t})]}),(0,V.jsx)(y,{children:r})]})}function R({className:e,...t}){return(0,V.jsxs)(g,{role:`alert`,className:o(`grid-cols-[--spacing(4)_1fr_auto] items-start p-4 shadow-level-2 has-[>svg]:grid-cols-[--spacing(4)_1fr_auto] [&>svg]:text-destructive`,e),...t,children:[(0,V.jsx)(n,{}),(0,V.jsx)(h,{children:`Falha ao salvar`}),(0,V.jsx)(m,{className:`row-start-2`,children:`Verifique a conexão e tente novamente.`}),(0,V.jsx)(c,{size:`sm`,className:`col-start-3 row-span-2 row-start-1`,children:`Tentar novamente`})]})}function z({step:e,label:t,children:n}){return(0,V.jsxs)(`section`,{"aria-label":t,className:`flex min-h-140 flex-col gap-4 rounded-surface bg-card p-6`,children:[(0,V.jsxs)(`p`,{className:`text-overline text-muted-foreground`,children:[e,` · `,t]}),n]})}function B({className:e,...t}){return(0,V.jsxs)(`div`,{className:o(`flex min-h-svh flex-col gap-12 bg-background px-10 py-12`,e),...t,children:[(0,V.jsx)(M,{children:(0,V.jsx)(k,{children:(0,V.jsxs)(A,{children:[(0,V.jsx)(E,{children:`Padrões`}),(0,V.jsx)(j,{children:`Estados vazio · carregando · erro`}),(0,V.jsx)(O,{children:`Carregando, vazio, sem resultados e erro, montados com Skeleton, Empty, Alert e Toast.`})]})})}),(0,V.jsxs)(`div`,{className:`grid grid-cols-2 gap-8`,children:[(0,V.jsx)(z,{step:1,label:`Carregando`,children:(0,V.jsx)(P,{})}),(0,V.jsx)(z,{step:2,label:`Vazio`,children:(0,V.jsx)(F,{className:`justify-start pt-12`})}),(0,V.jsx)(z,{step:3,label:`Sem resultados`,children:(0,V.jsx)(I,{className:`[&>[data-slot=empty]]:justify-start [&>[data-slot=empty]]:pt-12`})}),(0,V.jsxs)(z,{step:4,label:`Erro`,children:[(0,V.jsx)(L,{className:`flex-none pt-12`}),(0,V.jsx)(R,{})]})]})]})}var V;function H(){return(H=e((()=>{N(),a(),s(),p(),S(),w(),d(),D(),V=t();try{P.displayName=`ListLoadingState`,P.__docgenInfo={description:`Carregando: linhas em Skeleton no formato da lista final.`,displayName:`ListLoadingState`,filePath:`/media/demax/development/clients/bbatech/jurios/jurios-design-system/src/patterns/estados/estados.tsx`,methods:[],props:{rows:{defaultValue:{value:`5`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`TypeLiteral`}],description:``,name:`rows`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}try{F.displayName=`ListEmptyState`,F.__docgenInfo={description:`Vazio: explica o que é a tela e como começar.`,displayName:`ListEmptyState`,filePath:`/media/demax/development/clients/bbatech/jurios/jurios-design-system/src/patterns/estados/estados.tsx`,methods:[],props:{title:{defaultValue:{value:`Nenhum prazo cadastrado`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`}],description:``,name:`title`,parent:{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:{value:`Cadastre o primeiro prazo ou importe publicações do DJe para receber sugestões.`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`}],description:``,name:`description`,parent:{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`},required:!1,tags:{},type:{name:`ReactNode`}},actions:{defaultValue:{value:`(
    <>
      <Button size="sm">Cadastrar prazo</Button>
      <Button variant="outline" size="sm">
        Importar publicações
      </Button>
    </>
  )`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`}],description:`Ações sugeridas; substituem as padrões.`,name:`actions`,parent:{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{I.displayName=`ListNoResultsState`,I.__docgenInfo={description:`Sem resultados: mantém o termo buscado e oferece limpar filtros.`,displayName:`ListNoResultsState`,filePath:`/media/demax/development/clients/bbatech/jurios/jurios-design-system/src/patterns/estados/estados.tsx`,methods:[],props:{title:{defaultValue:{value:`Nenhum resultado`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`}],description:``,name:`title`,parent:{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:{value:`Nenhum processo corresponde aos filtros. Tente outros termos ou limpe os filtros.`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`}],description:``,name:`description`,parent:{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`},required:!1,tags:{},type:{name:`ReactNode`}},actions:{defaultValue:{value:`<Button size="sm">Limpar filtros</Button>`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`}],description:`Ações sugeridas; substituem as padrões.`,name:`actions`,parent:{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`},required:!1,tags:{},type:{name:`ReactNode`}},query:{defaultValue:{value:`silva junior`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`TypeLiteral`}],description:``,name:`query`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{L.displayName=`ListErrorState`,L.__docgenInfo={description:`Erro: diz o que falhou e oferece nova tentativa, sem detalhes técnicos.`,displayName:`ListErrorState`,filePath:`/media/demax/development/clients/bbatech/jurios/jurios-design-system/src/patterns/estados/estados.tsx`,methods:[],props:{title:{defaultValue:{value:`Não foi possível carregar`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`}],description:``,name:`title`,parent:{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:{value:`Houve uma falha ao buscar os dados. Tente novamente em instantes.`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`}],description:``,name:`description`,parent:{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`},required:!1,tags:{},type:{name:`ReactNode`}},actions:{defaultValue:{value:`<Button size="sm">Tentar novamente</Button>`},declarations:[{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`}],description:`Ações sugeridas; substituem as padrões.`,name:`actions`,parent:{fileName:`jurios-design-system/src/patterns/estados/estados.tsx`,name:`ListStateProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{R.displayName=`ActionErrorNotice`,R.__docgenInfo={description:`Falha pontual de uma ação (ex.: salvar), no formato do toast de erro.`,displayName:`ActionErrorNotice`,filePath:`/media/demax/development/clients/bbatech/jurios/jurios-design-system/src/patterns/estados/estados.tsx`,methods:[],props:{},tags:{}}}catch{}try{B.displayName=`Estados`,B.__docgenInfo={description:`Os quatro estados que toda listagem precisa: carregando, vazio, sem resultados e erro.`,displayName:`Estados`,filePath:`/media/demax/development/clients/bbatech/jurios/jurios-design-system/src/patterns/estados/estados.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{H(),U=t(),W={title:`Padrões/Estados`,component:B,parameters:{layout:`fullscreen`,docs:{description:{component:[`Os quatro estados que toda listagem do JuriOS precisa, mais a falha pontual de uma ação. Evita telas em branco e mensagens técnicas quando dados de processos, prazos ou clientes não chegam.`,``,`**Regras**`,`- Carregando: Skeleton imediato no formato da lista final; passando de ~10s, vira erro com nova tentativa.`,`- Vazio: explica a tela e como começar.`,`- Sem resultados: mostra o termo buscado e oferece limpar filtros.`,`- Erro: diz o que falhou e oferece nova tentativa, nunca stack ou código técnico.`,``,`**Partes exportadas**`,"- `ListLoadingState` (`rows`): linhas em Skeleton.","- `ListEmptyState`, `ListNoResultsState` (mais `query`) e `ListErrorState`: aceitam `title`, `description` e `actions` para trocar o texto e os botões.","- `ActionErrorNotice`: falha de uma ação (ex.: salvar) no formato do toast de erro. Em produção, dispare um Toast com o mesmo conteúdo.","- `Estados`: página de referência com os quatro estados lado a lado.",``,`**Componentes do DS:** Skeleton, Empty (EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent), InputGroup, Alert, Button e PageHeader.`,``,'**Acessibilidade:** erro usa `role="alert"` para ser anunciado. Em estado vazio, não use `role="alert"`: não é uma falha.'].join(`
`)}}}},G={},K=e=>(0,U.jsx)(`div`,{className:`w-[520px] rounded-surface bg-card p-6`,children:e}),q={title:{control:`text`,description:`Título do estado.`},description:{control:`text`,description:`Texto de apoio abaixo do título.`},actions:{control:!1,description:`Botões do estado (ReactNode).`}},J={parameters:{docs:{description:{story:`Skeleton com cinco linhas no formato da lista.`}},layout:`centered`},args:{rows:5},argTypes:{rows:{control:{type:`range`,min:1,max:12,step:1},description:`Quantidade de linhas em Skeleton.`}},render:e=>K((0,U.jsx)(P,{...e}))},Y={parameters:{docs:{description:{story:`Primeira visita: explica a tela e oferece cadastrar ou importar.`}},layout:`centered`},args:{title:`Nenhum prazo cadastrado`,description:`Cadastre o primeiro prazo ou importe publicações do DJe para receber sugestões.`},argTypes:q,render:e=>K((0,U.jsx)(F,{...e}))},X={name:`Sem resultados`,parameters:{docs:{description:{story:`Busca sem retorno: o termo continua visível e há ação para limpar filtros.`}},layout:`centered`},args:{query:`silva junior`,title:`Nenhum resultado`,description:`Nenhum processo corresponde aos filtros. Tente outros termos ou limpe os filtros.`},argTypes:{query:{control:`text`,description:`Termo buscado, mantido no campo de busca.`},...q},render:e=>K((0,U.jsx)(I,{...e},e.query))},Z={parameters:{docs:{description:{story:`Falha ao carregar a lista e falha pontual ao salvar.`}},layout:`centered`},args:{title:`Não foi possível carregar`,description:`Houve uma falha ao buscar os dados. Tente novamente em instantes.`},argTypes:q,render:e=>K((0,U.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,U.jsx)(L,{...e}),(0,U.jsx)(R,{})]}))},Q=[`Default`,`Carregando`,`Vazio`,`SemResultados`,`Erro`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Skeleton com cinco linhas no formato da lista."
      }
    },
    layout: "centered"
  },
  args: {
    rows: 5
  },
  argTypes: {
    rows: {
      control: {
        type: "range",
        min: 1,
        max: 12,
        step: 1
      },
      description: "Quantidade de linhas em Skeleton."
    }
  },
  render: args => frame(<ListLoadingState {...args} />)
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Primeira visita: explica a tela e oferece cadastrar ou importar."
      }
    },
    layout: "centered"
  },
  args: {
    title: "Nenhum prazo cadastrado",
    description: "Cadastre o primeiro prazo ou importe publicações do DJe para receber sugestões."
  },
  argTypes: textArgTypes,
  render: args => frame(<ListEmptyState {...args} />)
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Sem resultados",
  parameters: {
    docs: {
      description: {
        story: "Busca sem retorno: o termo continua visível e há ação para limpar filtros."
      }
    },
    layout: "centered"
  },
  args: {
    query: "silva junior",
    title: "Nenhum resultado",
    description: "Nenhum processo corresponde aos filtros. Tente outros termos ou limpe os filtros."
  },
  argTypes: {
    query: {
      control: "text",
      description: "Termo buscado, mantido no campo de busca."
    },
    ...textArgTypes
  },
  // O termo é o valor inicial do campo: a key remonta o estado quando o controle muda.
  render: args => frame(<ListNoResultsState key={args.query} {...args} />)
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Falha ao carregar a lista e falha pontual ao salvar."
      }
    },
    layout: "centered"
  },
  args: {
    title: "Não foi possível carregar",
    description: "Houve uma falha ao buscar os dados. Tente novamente em instantes."
  },
  argTypes: textArgTypes,
  render: args => frame(<div className="flex flex-col gap-6">
        <ListErrorState {...args} />
        <ActionErrorNotice />
      </div>)
}`,...Z.parameters?.docs?.source}}}})))()}$();export{J as Carregando,G as Default,Z as Erro,X as SemResultados,Y as Vazio,Q as __namedExportsOrder,W as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./ellipsis-DnbAV_rk.js";import{r,t as i}from"./button-BxLqnFN9.js";import{r as a,t as o}from"./badge-CgZcyeNt.js";import{a as s,i as c,n as l,t as u}from"./sample-processes-jmvoOcjM.js";import{a as d,c as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y}from"./table-u77QFVdc.js";import{n as b,t as x}from"./checkbox-BF_Relgc.js";import{r as S}from"./icons.stories-CuLmnsRb.js";function C({process:e,selected:t=!1,className:r}){let a=c[e.status];return(0,T.jsxs)(f,{"data-state":t?`selected`:void 0,className:r,children:[(0,T.jsx)(p,{children:(0,T.jsx)(x,{checked:t,"aria-label":`Selecionar processo ${e.title}`})}),(0,T.jsx)(p,{children:(0,T.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,T.jsx)(`span`,{className:`text-body-sm`,children:e.title}),(0,T.jsx)(`span`,{className:`text-data text-muted-foreground`,children:e.cnj})]})}),(0,T.jsx)(p,{children:e.client}),(0,T.jsx)(p,{className:`tabular-nums`,children:u(e.deadline)}),(0,T.jsx)(p,{children:(0,T.jsx)(o,{variant:a.variant,children:a.label})}),(0,T.jsx)(p,{className:`w-12 text-right`,children:(0,T.jsx)(i,{variant:`ghost`,size:`icon-sm`,"aria-label":`Ações de ${e.title}`,children:(0,T.jsx)(n,{})})})]})}function w(){return(0,T.jsx)(v,{children:(0,T.jsxs)(f,{className:`hover:bg-transparent`,children:[(0,T.jsx)(g,{children:(0,T.jsx)(x,{"aria-label":`Selecionar todos os processos`})}),(0,T.jsx)(g,{children:`Processo`}),(0,T.jsx)(g,{children:`Cliente`}),(0,T.jsx)(g,{children:`Prazo`}),(0,T.jsx)(g,{children:`Status`}),(0,T.jsx)(g,{children:(0,T.jsx)(`span`,{className:`sr-only`,children:`Ações`})})]})})}var T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{S(),r(),a(),b(),l(),m(),T=t(),E={title:`Componentes/Exibição de dados/Table`,component:y,parameters:{docs:{description:{component:'Tabela HTML semântica com o estilo do DS: cabeçalho em Plex Mono caixa alta, divisórias entre linhas, hover e linha selecionada. É só apresentação: não guarda estado nem ordena, filtra ou pagina.\n\n**Data Table ou Table**\n- Data Table: listagens de trabalho com volume (carteira de processos, prazos, publicações, clientes), em que o usuário busca, filtra, ordena, seleciona e pagina.\n- Table: exibição estática e curta, montada à mão (honorários do mês, resumo com totais, tabela dentro de um card). Não guarda estado.\n- Na dúvida: se o usuário precisa agir sobre o conjunto de linhas (buscar, filtrar, ordenar, selecionar), use Data Table.\n\n**Anatomia**\n- `Table`: `<table>` dentro de um contêiner com rolagem horizontal quando não cabe.\n- `TableHeader`, `TableBody` e `TableFooter`: `thead`, `tbody` e `tfoot` (rodapé para totais).\n- `TableRow`: linha. `data-state="selected"` aplica o fundo de selecionada. No cabeçalho, use `className="hover:bg-transparent"`.\n- `TableHead`: célula de cabeçalho, com `scope="col"` por padrão.\n- `TableCell`: célula de dados. Colunas com checkbox ficam estreitas automaticamente.\n- `TableCaption`: legenda, exibida abaixo da tabela.\n\nA tabela não tem raio próprio: envolva-a numa `div` com `overflow-hidden rounded-surface bg-card` ou coloque-a num Card.\n\n```tsx\n<Table>\n  <TableCaption>Honorários a receber em setembro de 2026</TableCaption>\n  <TableHeader>\n    <TableRow className="hover:bg-transparent">\n      <TableHead>Cliente</TableHead>\n      <TableHead className="text-right">Valor</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Maria da Silva</TableCell>\n      <TableCell className="text-right tabular-nums">R$ 12.500,00</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>\n```\n\n**Acessibilidade**\n- Descreva a tabela com `TableCaption` (pode ser `sr-only`).\n- Coluna de ações precisa de cabeçalho com texto `sr-only` ("Ações"), e cada botão de ícone, de `aria-label` com o nome do item.\n- Valores e datas com `tabular-nums`; valores monetários alinhados à direita.'}}},args:{rows:4,selectedRow:3,caption:`Processos da carteira com prazo e status`,showCaption:!1},argTypes:{rows:{control:{type:`range`,min:1,max:4,step:1},description:`Quantidade de linhas de exemplo.`},selectedRow:{control:{type:`range`,min:0,max:4,step:1},description:`Linha selecionada (data-state="selected"). 0 = nenhuma.`},caption:{control:`text`,description:`Texto do TableCaption.`},showCaption:{control:`boolean`,description:`Mostra a legenda visualmente (desligado, fica só para leitores de tela).`},className:{table:{disable:!0}}}},D={render:({rows:e=4,selectedRow:t=0,caption:n,showCaption:r,...i})=>(0,T.jsx)(`div`,{className:`w-[766px] overflow-hidden rounded-surface bg-card`,children:(0,T.jsxs)(y,{...i,children:[(0,T.jsx)(_,{className:r?void 0:`sr-only`,children:n}),(0,T.jsx)(w,{}),(0,T.jsx)(h,{children:s.slice(0,e).map((e,n)=>(0,T.jsx)(C,{process:e,selected:n+1===t},e.id))})]})})},O={parameters:{docs:{description:{story:`Linha normal, em hover (simulado com bg-muted/50) e selecionada (data-state="selected").`}}},render:()=>(0,T.jsx)(`div`,{className:`w-[766px] overflow-hidden rounded-surface bg-card`,children:(0,T.jsxs)(y,{children:[(0,T.jsx)(w,{}),(0,T.jsxs)(h,{children:[(0,T.jsx)(C,{process:s[0]}),(0,T.jsx)(C,{process:s[0],className:`bg-muted/50`}),(0,T.jsx)(C,{process:s[0],selected:!0})]})]})})},k=[{client:`Maria da Silva`,matter:`Contencioso bancário`,amount:12500},{client:`Silva & Filhos Ltda`,matter:`Consultivo trabalhista`,amount:8300},{client:`João Pereira`,matter:`Ação indenizatória`,amount:4700}],A=new Intl.NumberFormat(`pt-BR`,{style:`currency`,currency:`BRL`}),j={parameters:{docs:{description:{story:`TableFooter com o total e TableCaption visível.`}}},render:()=>(0,T.jsx)(`div`,{className:`w-[560px] overflow-hidden rounded-surface bg-card`,children:(0,T.jsxs)(y,{children:[(0,T.jsx)(_,{className:`pb-4`,children:`Honorários a receber em setembro de 2026`}),(0,T.jsx)(v,{children:(0,T.jsxs)(f,{className:`hover:bg-transparent`,children:[(0,T.jsx)(g,{children:`Cliente`}),(0,T.jsx)(g,{children:`Assunto`}),(0,T.jsx)(g,{className:`text-right`,children:`Valor`})]})}),(0,T.jsx)(h,{children:k.map(e=>(0,T.jsxs)(f,{children:[(0,T.jsx)(p,{children:e.client}),(0,T.jsx)(p,{className:`text-muted-foreground`,children:e.matter}),(0,T.jsx)(p,{className:`text-right tabular-nums`,children:A.format(e.amount)})]},e.client))}),(0,T.jsx)(d,{children:(0,T.jsxs)(f,{className:`hover:bg-transparent`,children:[(0,T.jsx)(p,{colSpan:2,children:`Total`}),(0,T.jsx)(p,{className:`text-right tabular-nums`,children:A.format(k.reduce((e,t)=>e+t.amount,0))})]})})]})})},M=[`Default`,`RowStates`,`WithFooter`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: ({
    rows = 4,
    selectedRow = 0,
    caption,
    showCaption,
    ...args
  }) => <div className="w-[766px] overflow-hidden rounded-surface bg-card">
      <Table {...args}>
        <TableCaption className={showCaption ? undefined : "sr-only"}>{caption}</TableCaption>
        <ProcessHeader />
        <TableBody>
          {sampleProcesses.slice(0, rows).map((process, index) => <ProcessRow key={process.id} process={process} selected={index + 1 === selectedRow} />)}
        </TableBody>
      </Table>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Linha normal, em hover (simulado com bg-muted/50) e selecionada (data-state=\\"selected\\")."
      }
    }
  },
  render: () => <div className="w-[766px] overflow-hidden rounded-surface bg-card">
      <Table>
        <ProcessHeader />
        <TableBody>
          <ProcessRow process={sampleProcesses[0]} />
          <ProcessRow process={sampleProcesses[0]} className="bg-muted/50" />
          <ProcessRow process={sampleProcesses[0]} selected />
        </TableBody>
      </Table>
    </div>
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "TableFooter com o total e TableCaption visível."
      }
    }
  },
  render: () => <div className="w-[560px] overflow-hidden rounded-surface bg-card">
      <Table>
        <TableCaption className="pb-4">Honorários a receber em setembro de 2026</TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Cliente</TableHead>
            <TableHead>Assunto</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fees.map(fee => <TableRow key={fee.client}>
              <TableCell>{fee.client}</TableCell>
              <TableCell className="text-muted-foreground">{fee.matter}</TableCell>
              <TableCell className="text-right tabular-nums">{currency.format(fee.amount)}</TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter>
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right tabular-nums">{currency.format(fees.reduce((sum, fee) => sum + fee.amount, 0))}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
}`,...j.parameters?.docs?.source}}}})))()}N();export{D as Default,O as RowStates,j as WithFooter,M as __namedExportsOrder,E as default};
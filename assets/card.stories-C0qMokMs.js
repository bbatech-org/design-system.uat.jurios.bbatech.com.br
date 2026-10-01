import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./clock-CCqDXeg4.js";import{t as r}from"./ellipsis-DnbAV_rk.js";import{r as i,t as a}from"./button-BxLqnFN9.js";import{r as o,t as s}from"./badge-CgZcyeNt.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./card-JQLjIgjx.js";import{r as g}from"./icons.stories-CuLmnsRb.js";function _(e){return(0,b.jsxs)(h,{...e,className:`w-[360px]`,children:[(0,b.jsxs)(f,{children:[(0,b.jsx)(m,{children:`Prazo · Contestação`}),(0,b.jsx)(u,{children:`Processo 1002345-67.2026.8.26.0100`})]}),(0,b.jsxs)(p,{children:[(0,b.jsx)(`p`,{children:`Vence em 30/09/2026 (6 dias úteis).`}),(0,b.jsx)(`p`,{children:`Responsável: Ana Lima.`})]}),(0,b.jsxs)(c,{className:`justify-end`,children:[(0,b.jsx)(a,{variant:`outline`,size:`sm`,children:`Ver processo`}),(0,b.jsx)(a,{size:`sm`,children:`Marcar cumprido`})]})]})}function v(e){return(0,b.jsxs)(h,{...e,className:`w-[360px]`,children:[(0,b.jsxs)(f,{children:[(0,b.jsx)(m,{children:`Cliente`}),(0,b.jsx)(u,{children:`Maria da Silva · CPF ***.456.789-**`}),(0,b.jsx)(d,{children:(0,b.jsx)(a,{variant:`ghost`,size:`icon-sm`,"aria-label":`Opções do cliente`,children:(0,b.jsx)(r,{})})})]}),(0,b.jsx)(p,{className:`flex flex-col gap-2`,children:S.map(([e,t])=>(0,b.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,b.jsx)(`span`,{className:`text-muted-foreground`,children:e}),(0,b.jsx)(`span`,{className:`text-body-sm-strong`,children:t})]},e))})]})}function y(e){return(0,b.jsxs)(h,{...e,className:`w-[360px] gap-2`,children:[(0,b.jsxs)(f,{className:`flex items-center justify-between`,children:[(0,b.jsx)(u,{children:`Prazos da semana`}),(0,b.jsx)(n,{className:`size-4 text-muted-foreground`,"aria-hidden":!0})]}),(0,b.jsxs)(p,{className:`flex items-center gap-2`,children:[(0,b.jsx)(`span`,{className:`text-title-lg`,children:`18`}),(0,b.jsx)(s,{variant:`warning`,children:`5 vencem hoje`})]}),(0,b.jsx)(c,{children:(0,b.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:`+3 em relação à semana passada`})})]})}var b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{g(),i(),o(),l(),b=t(),x={title:`Componentes/Exibição de dados/Card`,component:h,parameters:{docs:{description:{component:`Superfície que agrupa conteúdo sobre um mesmo assunto: um prazo, um cliente, um indicador. Fundo \`card\`, raio de 16px, sem borda nem sombra.

**Quando usar**
- Blocos independentes em dashboards e páginas de detalhe (resumo do cliente, KPI, próximo prazo).
- Conteúdo com título, corpo e ações próprias.

**Quando não usar**
- Linhas repetidas de uma lista (documentos, membros da equipe): use Item, mais compacto e feito para empilhar.
- Dados para comparar por coluna: use Table ou Data Table.

**Anatomia**
- \`Card\`: raiz.
- \`CardHeader\`: título, descrição e ação opcional. Com \`CardAction\` vira grade de duas colunas.
- \`CardTitle\` e \`CardDescription\`: título e texto de apoio.
- \`CardAction\`: ação no canto superior direito (ex.: menu de opções).
- \`CardContent\`: corpo.
- \`CardFooter\`: rodapé em linha, geralmente com botões.

\`\`\`tsx
<Card>
  <CardHeader>
    <CardTitle>Prazo · Contestação</CardTitle>
    <CardDescription>Processo 1002345-67.2026.8.26.0100</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon-sm" aria-label="Opções do prazo"><Ellipsis /></Button>
    </CardAction>
  </CardHeader>
  <CardContent>Vence em 30/09/2026.</CardContent>
  <CardFooter>
    <Button size="sm">Marcar cumprido</Button>
  </CardFooter>
</Card>
\`\`\`

**Acessibilidade**
- \`CardTitle\` é uma \`div\`. Quando o card forma uma seção da página, coloque um heading dentro dele (\`<h2>\`, \`<h3>\`) para manter a hierarquia.`}}},args:{title:`Prazo · Contestação`,description:`Processo 1002345-67.2026.8.26.0100`,content:`Vence em 30/09/2026 (6 dias úteis). Responsável: Ana Lima.`,showAction:!1,showFooter:!0},argTypes:{title:{control:`text`,description:`Texto do CardTitle.`},description:{control:`text`,description:`Texto do CardDescription.`},content:{control:`text`,description:`Corpo do card (CardContent).`},showAction:{control:`boolean`,description:`Mostra o CardAction (menu de opções) no cabeçalho.`},showFooter:{control:`boolean`,description:`Mostra o CardFooter com ações.`},className:{table:{disable:!0}}}},S=[[`Processos ativos`,`4`],[`Responsável`,`Ana Lima`],[`Desde`,`03/2024`]],C={render:({title:e,description:t,content:n,showAction:i,showFooter:o,...s})=>(0,b.jsxs)(h,{...s,className:`w-[360px]`,children:[(0,b.jsxs)(f,{children:[(0,b.jsx)(m,{children:e}),(0,b.jsx)(u,{children:t}),i&&(0,b.jsx)(d,{children:(0,b.jsx)(a,{variant:`ghost`,size:`icon-sm`,"aria-label":`Opções do prazo`,children:(0,b.jsx)(r,{})})})]}),(0,b.jsx)(p,{children:(0,b.jsx)(`p`,{children:n})}),o&&(0,b.jsxs)(c,{className:`justify-end`,children:[(0,b.jsx)(a,{variant:`outline`,size:`sm`,children:`Ver processo`}),(0,b.jsx)(a,{size:`sm`,children:`Marcar cumprido`})]})]})},w={parameters:{docs:{description:{story:`CardAction no cabeçalho com menu de opções do cliente.`}}},render:()=>(0,b.jsx)(v,{})},T={parameters:{docs:{description:{story:`Indicador: descrição, valor em destaque e comparação no rodapé.`}}},render:()=>(0,b.jsx)(y,{})},E={render:()=>(0,b.jsxs)(`div`,{className:`flex items-start gap-6`,children:[(0,b.jsx)(_,{}),(0,b.jsx)(v,{}),(0,b.jsx)(y,{})]})},D=[`Default`,`WithAction`,`Stat`,`Layouts`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: ({
    title,
    description,
    content,
    showAction,
    showFooter,
    ...args
  }) => <Card {...args} className="w-[360px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {showAction && <CardAction>
            <Button variant="ghost" size="icon-sm" aria-label="Opções do prazo"><Ellipsis /></Button>
          </CardAction>}
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      {showFooter && <CardFooter className="justify-end">
          <Button variant="outline" size="sm">Ver processo</Button>
          <Button size="sm">Marcar cumprido</Button>
        </CardFooter>}
    </Card>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "CardAction no cabeçalho com menu de opções do cliente."
      }
    }
  },
  render: () => <ClientCard />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Indicador: descrição, valor em destaque e comparação no rodapé."
      }
    }
  },
  render: () => <StatCard />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-start gap-6">
      <DeadlineCard />
      <ClientCard />
      <StatCard />
    </div>
}`,...E.parameters?.docs?.source}}}})))()}O();export{C as Default,E as Layouts,T as Stat,w as WithAction,D as __namedExportsOrder,x as default};
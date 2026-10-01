import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./circle-alert-BZNRfjYC.js";import{t as r}from"./circle-check-CWl1mL6v.js";import{t as i}from"./info-xKB6Rqxq.js";import{t as a}from"./triangle-alert-B29u8JyQ.js";import{i as o,n as s,r as c,t as l}from"./alert-DCSiLL4s.js";import{r as u}from"./icons.stories-CuLmnsRb.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{u(),o(),d=t(),f={default:i,destructive:n,success:r,warning:a,info:i},p={title:`Componentes/Feedback/Alert`,component:l,parameters:{docs:{description:{component:'Mensagem persistente dentro da página, ligada ao contexto em que aparece: prazo vencido, sugestão que precisa de revisão, sincronização concluída. Fica visível até a situação mudar.\n\n**Quando usar**\n- Informar um estado da tela ou do registro que o usuário precisa ver enquanto trabalha (ex.: "Prazo vencido" no topo do processo).\n- Pedir revisão antes de salvar (variante `warning`).\n\n**Quando não usar**\n- Confirmação passageira de algo que já aconteceu: use Toast.\n- Decisão que bloqueia o fluxo (excluir, arquivar): use Alert Dialog.\n- Erro de um campo específico: use a mensagem de erro do Field.\n\n**Anatomia**\n- `Alert`: contêiner com `variant` (`default`, `destructive`, `success`, `warning`, `info`).\n- Ícone Lucide como primeiro filho (opcional): ocupa a primeira coluna e herda a cor do status.\n- `AlertTitle`: diz o estado em poucas palavras.\n- `AlertDescription`: detalhe e próximo passo. O título é opcional.\n\n```tsx\n<Alert variant="destructive">\n  <CircleAlert aria-hidden />\n  <AlertTitle>Prazo vencido</AlertTitle>\n  <AlertDescription>A contestação venceu em 22/09/2026.</AlertDescription>\n</Alert>\n```\n\n**Acessibilidade**\n- O papel padrão é `role="status"` (anúncio discreto). A variante `destructive` passa a `role="alert"` automaticamente, para o leitor de tela interromper e anunciar o erro. Passe `role` para sobrescrever (ex.: `role="status"` num erro que já está na tela ao carregar, ou `role="alert"` num aviso crítico).\n- Marque o ícone com `aria-hidden`; a cor nunca é o único sinal, o título precisa dizer o estado.'}}},args:{variant:`default`,title:`Atenção`,description:`A publicação foi importada e aguarda interpretação.`,showIcon:!0},argTypes:{variant:{control:`inline-radio`,options:[`default`,`destructive`,`success`,`warning`,`info`],description:'Tom do alerta. `destructive` usa `role="alert"`.'},title:{control:`text`,description:"Texto do `AlertTitle` (vazio remove o título)."},description:{control:`text`,description:"Texto do `AlertDescription`."},showIcon:{control:`boolean`,description:`Mostra o ícone Lucide do status.`},role:{control:`inline-radio`,options:[`status`,`alert`],description:`Sobrescreve o papel ARIA padrão.`},className:{table:{disable:!0}}},decorators:[e=>(0,d.jsx)(`div`,{className:`w-[520px]`,children:(0,d.jsx)(e,{})})]},m={render:({title:e,description:t,showIcon:n,...r})=>{let i=f[r.variant??`default`];return(0,d.jsxs)(l,{...r,children:[n&&(0,d.jsx)(i,{"aria-hidden":!0}),e&&(0,d.jsx)(c,{children:e}),t&&(0,d.jsx)(s,{children:t})]})}},h={parameters:{docs:{description:{story:'As cinco variantes. `destructive` recebe `role="alert"` automaticamente; as demais usam `role="status"`.'}}},render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,d.jsxs)(l,{children:[(0,d.jsx)(i,{"aria-hidden":!0}),(0,d.jsx)(c,{children:`Atenção`}),(0,d.jsx)(s,{children:`A publicação foi importada e aguarda interpretação.`})]}),(0,d.jsxs)(l,{variant:`destructive`,children:[(0,d.jsx)(n,{"aria-hidden":!0}),(0,d.jsx)(c,{children:`Prazo vencido`}),(0,d.jsx)(s,{children:`A contestação do processo 1002345-67 venceu em 22/09/2026.`})]}),(0,d.jsxs)(l,{variant:`success`,children:[(0,d.jsx)(r,{"aria-hidden":!0}),(0,d.jsx)(c,{children:`Prazo cumprido`}),(0,d.jsx)(s,{children:`Protocolo registrado por Ana Lima às 14:32.`})]}),(0,d.jsxs)(l,{variant:`warning`,children:[(0,d.jsx)(a,{"aria-hidden":!0}),(0,d.jsx)(c,{children:`Prazo sugerido — confirme`}),(0,d.jsx)(s,{children:`O sistema sugeriu 15 dias úteis a partir de 25/09. Revise antes de salvar.`})]}),(0,d.jsxs)(l,{variant:`info`,children:[(0,d.jsx)(i,{"aria-hidden":!0}),(0,d.jsx)(c,{children:`Nova publicação`}),(0,d.jsx)(s,{children:`3 publicações do DJe vinculadas a processos da sua carteira.`})]})]})},g={parameters:{docs:{description:{story:"Sem `AlertTitle`, para avisos de uma linha."}}},render:()=>(0,d.jsxs)(l,{variant:`info`,children:[(0,d.jsx)(i,{"aria-hidden":!0}),(0,d.jsx)(s,{children:`Sincronização com o PJe concluída há 5 minutos.`})]})},_=[`Default`,`Variants`,`WithoutTitle`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ({
    title,
    description,
    showIcon,
    ...args
  }) => {
    const Icon = variantIcons[args.variant ?? "default"];
    return <Alert {...args}>
        {showIcon && <Icon aria-hidden />}
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
      </Alert>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "As cinco variantes. \`destructive\` recebe \`role=\\"alert\\"\` automaticamente; as demais usam \`role=\\"status\\"\`."
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <Alert>
        <Info aria-hidden />
        <AlertTitle>Atenção</AlertTitle>
        <AlertDescription>A publicação foi importada e aguarda interpretação.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert aria-hidden />
        <AlertTitle>Prazo vencido</AlertTitle>
        <AlertDescription>A contestação do processo 1002345-67 venceu em 22/09/2026.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CircleCheck aria-hidden />
        <AlertTitle>Prazo cumprido</AlertTitle>
        <AlertDescription>Protocolo registrado por Ana Lima às 14:32.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlert aria-hidden />
        <AlertTitle>Prazo sugerido — confirme</AlertTitle>
        <AlertDescription>O sistema sugeriu 15 dias úteis a partir de 25/09. Revise antes de salvar.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <Info aria-hidden />
        <AlertTitle>Nova publicação</AlertTitle>
        <AlertDescription>3 publicações do DJe vinculadas a processos da sua carteira.</AlertDescription>
      </Alert>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sem \`AlertTitle\`, para avisos de uma linha."
      }
    }
  },
  render: () => <Alert variant="info">
      <Info aria-hidden />
      <AlertDescription>Sincronização com o PJe concluída há 5 minutos.</AlertDescription>
    </Alert>
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as Default,h as Variants,g as WithoutTitle,_ as __namedExportsOrder,p as default};
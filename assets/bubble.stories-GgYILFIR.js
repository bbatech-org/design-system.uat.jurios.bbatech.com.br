import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./thumbs-up-BVoVL0i9.js";import{n as r,t as i}from"./spinner-A6ETEnJO.js";import{o as a,r as o,t as s}from"./marker-mcw76duQ.js";import{a as c,i as l,n as u,r as d,t as f}from"./bubble-lDMq41Sz.js";import{r as p}from"./icons.stories-CuLmnsRb.js";var m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{p(),a(),r(),c(),m=t(),h=`Pela publicação de 24/09, o sistema sugere 15 dias úteis. Confirme a contagem antes de salvar.`,g=`Qual é o prazo para contestar no processo 1002345-67?`,_={title:`Componentes/IA e chat/Bubble`,component:f,parameters:{docs:{description:{component:'O balão com o texto de uma mensagem. Define cor, raio e o canto mais fechado (4px) do lado de quem fala. Em geral vai dentro de um Message, mas também serve sozinho para sugestões clicáveis e prévias.\n\n**Quando usar**\n- Texto da pergunta da pessoa (`default`, cor `primary`, alinhado à direita) e da resposta do assistente (`muted`, à esquerda).\n- Estados de conteúdo: `tinted` para destaque informativo, `outline` para sugestões, `destructive` para falha do assistente ("Não foi possível consultar o DJe agora"), `ghost` para resposta longa sem fundo, ocupando a largura toda.\n- Sugestão de pergunta clicável ("Resumir a última publicação") com `BubbleContent asChild` sobre um `<button>`.\n\n**Quando não usar**\n- Mensagem com autor, horário e ações: envolva o Bubble em um Message.\n- Aviso persistente fora do chat: use Alert. Confirmação passageira: use Toast.\n- Status entre mensagens ("Consultou 3 fontes", "Hoje"): use Marker.\n\n**Anatomia**\n- `Bubble`: container do balão. Props `variant` (`default`, `secondary`, `muted`, `tinted`, `outline`, `ghost`, `destructive`) e `align` (`start` ou `end`). Sem `align`, segue o `align` do Message em volta. Largura máxima de 90% ou 22,5rem (exceto `ghost`).\n- `BubbleContent`: corpo com cor, raio e padding; preserva quebras de linha. `asChild` troca o elemento (ex.: `<button>` ou `<a>`), com hover e foco próprios.\n- `BubbleReactions`: pílula sobreposta à borda do balão; `side` (`top`, `bottom`) e `align` (`start`, `end`).\n- `BubbleGroup`: sequência de balões seguidos da mesma pessoa.\n- Um ícone SVG como filho direto do `Bubble` (tipicamente o `Spinner`) fica ao lado do conteúdo, para indicar geração.\n\n```tsx\n<Bubble variant="muted" aria-busy>\n  <BubbleContent>Analisando a publicação de 24/09…</BubbleContent>\n  <Spinner aria-label="Gerando resposta" />\n</Bubble>\n\n<Bubble variant="outline" align="end">\n  <BubbleContent asChild>\n    <button type="button">Resumir a última publicação</button>\n  </BubbleContent>\n</Bubble>\n```\n\n**Acessibilidade**\n- Bubble não tem papel ARIA próprio nem região viva. Em streaming dentro de uma Message, passe `streaming` no `MessageContent` (região viva com `aria-busy`); isolado, marque `aria-busy` no Bubble. Dê ao `Spinner` um `aria-label` como "Gerando resposta".\n- Em sugestões clicáveis, use um `<button type="button">` real via `asChild`; o foco visível já vem do componente.\n- Em reações, oculte o ícone (`aria-hidden`) e rotule a contagem (ex.: `aria-label="2 curtidas"`).\n- A cor não pode ser a única pista: em `destructive`, o texto deve dizer o que falhou.'}}},args:{variant:`muted`,align:`start`,content:h,streaming:!1},argTypes:{variant:{control:`select`,options:[`default`,`secondary`,`muted`,`tinted`,`outline`,`ghost`,`destructive`],description:`Cor e peso do balão.`},align:{control:`inline-radio`,options:[`start`,`end`],description:"Lado do canto fechado; sem valor, segue o `Message` em volta."},content:{control:`text`,description:"Texto do `BubbleContent`."},streaming:{control:`boolean`,description:"Resposta em geração: `aria-busy` e Spinner ao lado do texto."},className:{table:{disable:!0}}},render:({content:e,streaming:t,...n})=>(0,m.jsxs)(f,{...n,"aria-busy":t||void 0,children:[(0,m.jsx)(u,{children:e}),t&&(0,m.jsx)(i,{"aria-label":`Gerando resposta`})]})},v=[e=>(0,m.jsx)(`div`,{className:`flex w-110 flex-col`,children:(0,m.jsx)(e,{})})],y={decorators:v},b={parameters:{docs:{description:{story:`Todas as variantes: pergunta da pessoa (default), resposta do assistente (muted) e os tons secondary, tinted, outline, ghost e destructive.`}}},render:()=>(0,m.jsxs)(`div`,{className:`grid w-[1080px] grid-cols-[1fr_1fr_1fr] items-start gap-6 rounded-surface bg-card p-8`,children:[(0,m.jsx)(`div`,{className:`flex flex-col`,children:(0,m.jsx)(f,{align:`end`,children:(0,m.jsx)(u,{children:g})})}),(0,m.jsx)(f,{variant:`muted`,children:(0,m.jsx)(u,{children:h})}),(0,m.jsx)(s,{variant:`separator`,children:(0,m.jsx)(o,{children:`Ana Lima entrou na conversa`})}),[`secondary`,`tinted`,`outline`,`ghost`,`destructive`].map(e=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,m.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:e}),(0,m.jsx)(f,{variant:e,children:(0,m.jsx)(u,{children:e===`destructive`?`Não foi possível consultar o DJe agora. Tente novamente.`:h})})]},e))]})},x={parameters:{docs:{description:{story:`Pergunta da pessoa: variante default com align="end", canto fechado à direita.`}}},decorators:v,args:{variant:`default`,align:`end`,content:g}},S={parameters:{docs:{description:{story:`BubbleGroup com dois balões seguidos do assistente.`}}},decorators:v,render:()=>(0,m.jsxs)(d,{children:[(0,m.jsx)(f,{variant:`muted`,children:(0,m.jsx)(u,{children:`Encontrei 3 prazos para esta semana.`})}),(0,m.jsx)(f,{variant:`muted`,children:(0,m.jsx)(u,{children:`Contestação em 1002345-67 vence em 02/10.`})})]})},C={parameters:{docs:{description:{story:`Resposta em geração: Spinner como filho direto do Bubble, com aria-busy no balão.`}}},decorators:v,render:()=>(0,m.jsxs)(f,{variant:`muted`,"aria-busy":!0,children:[(0,m.jsx)(u,{children:`Analisando a publicação de 24/09…`}),(0,m.jsx)(i,{"aria-label":`Gerando resposta`})]})},w={parameters:{docs:{description:{story:`Sugestão clicável: BubbleContent com asChild sobre um button.`}}},name:`Sugestão clicável`,decorators:v,render:()=>(0,m.jsx)(f,{variant:`outline`,align:`end`,children:(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(`button`,{type:`button`,children:`Resumir a última publicação`})})})},T={parameters:{docs:{description:{story:`BubbleReactions sobreposta à borda inferior do balão, com a contagem rotulada para leitores de tela.`}}},decorators:[e=>(0,m.jsx)(`div`,{className:`flex w-110 flex-col pb-6`,children:(0,m.jsx)(e,{})})],render:()=>(0,m.jsxs)(f,{align:`end`,children:[(0,m.jsx)(u,{children:`Prazo confirmado e lançado na agenda da equipe.`}),(0,m.jsxs)(l,{align:`start`,children:[(0,m.jsx)(n,{"aria-hidden":!0,className:`size-3.5`}),(0,m.jsx)(`span`,{"aria-label":`2 curtidas`,children:`2`})]})]})},E=[`Default`,`Variants`,`User`,`Group`,`Streaming`,`Interactive`,`Reactions`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: narrow
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Todas as variantes: pergunta da pessoa (default), resposta do assistente (muted) e os tons secondary, tinted, outline, ghost e destructive."
      }
    }
  },
  render: () => <div className="grid w-[1080px] grid-cols-[1fr_1fr_1fr] items-start gap-6 rounded-surface bg-card p-8">
      <div className="flex flex-col">
        <Bubble align="end">
          <BubbleContent>{QUESTION}</BubbleContent>
        </Bubble>
      </div>
      <Bubble variant="muted">
        <BubbleContent>{ANSWER}</BubbleContent>
      </Bubble>
      <Marker variant="separator">
        <MarkerContent>Ana Lima entrou na conversa</MarkerContent>
      </Marker>
      {(["secondary", "tinted", "outline", "ghost", "destructive"] as const).map(variant => <div key={variant} className="flex flex-col gap-2">
          <span className="text-caption text-muted-foreground">{variant}</span>
          <Bubble variant={variant}>
            <BubbleContent>
              {variant === "destructive" ? "Não foi possível consultar o DJe agora. Tente novamente." : ANSWER}
            </BubbleContent>
          </Bubble>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pergunta da pessoa: variante default com align=\\"end\\", canto fechado à direita."
      }
    }
  },
  decorators: narrow,
  args: {
    variant: "default",
    align: "end",
    content: QUESTION
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "BubbleGroup com dois balões seguidos do assistente."
      }
    }
  },
  decorators: narrow,
  render: () => <BubbleGroup>
      <Bubble variant="muted">
        <BubbleContent>Encontrei 3 prazos para esta semana.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Contestação em 1002345-67 vence em 02/10.</BubbleContent>
      </Bubble>
    </BubbleGroup>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Resposta em geração: Spinner como filho direto do Bubble, com aria-busy no balão."
      }
    }
  },
  decorators: narrow,
  render: () => <Bubble variant="muted" aria-busy>
      <BubbleContent>Analisando a publicação de 24/09…</BubbleContent>
      <Spinner aria-label="Gerando resposta" />
    </Bubble>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sugestão clicável: BubbleContent com asChild sobre um button."
      }
    }
  },
  name: "Sugestão clicável",
  decorators: narrow,
  render: () => <Bubble variant="outline" align="end">
      <BubbleContent asChild>
        <button type="button">Resumir a última publicação</button>
      </BubbleContent>
    </Bubble>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "BubbleReactions sobreposta à borda inferior do balão, com a contagem rotulada para leitores de tela."
      }
    }
  },
  decorators: [Story => <div className="flex w-110 flex-col pb-6">
        <Story />
      </div>],
  render: () => <Bubble align="end">
      <BubbleContent>Prazo confirmado e lançado na agenda da equipe.</BubbleContent>
      <BubbleReactions align="start">
        <ThumbsUp aria-hidden className="size-3.5" />
        <span aria-label="2 curtidas">2</span>
      </BubbleReactions>
    </Bubble>
}`,...T.parameters?.docs?.source}}}})))()}D();export{y as Default,S as Group,w as Interactive,T as Reactions,C as Streaming,x as User,b as Variants,E as __namedExportsOrder,_ as default};
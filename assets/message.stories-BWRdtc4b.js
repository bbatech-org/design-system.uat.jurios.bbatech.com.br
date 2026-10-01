import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./copy-DhFFy67p.js";import{n as r,t as i}from"./spinner-A6ETEnJO.js";import{r as a,t as o}from"./button-BxLqnFN9.js";import{a as s,n as c,t as l}from"./bubble-lDMq41Sz.js";import{a as u,c as d,d as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./message-B05f9t5t.js";import{r as x}from"./icons.stories-CuLmnsRb.js";function S(){return(0,T.jsx)(v,{children:(0,T.jsx)(g,{children:(0,T.jsx)(`button`,{type:`button`,className:`cursor-pointer`,children:`Não enviada · Tentar novamente`})})})}function C({error:e=!1}){return(0,T.jsxs)(y,{align:`end`,children:[(0,T.jsx)(p,{initials:`CB`}),(0,T.jsxs)(u,{children:[(0,T.jsxs)(m,{children:[(0,T.jsx)(_,{children:`Carolina B.`}),(0,T.jsx)(b,{dateTime:`2026-09-30T14:32`,children:`14:32`})]}),(0,T.jsx)(l,{children:(0,T.jsx)(c,{children:D})}),e&&(0,T.jsx)(S,{})]})]})}function w({state:e=`default`}){let t=e===`streaming`;return(0,T.jsxs)(y,{children:[(0,T.jsx)(p,{}),(0,T.jsxs)(u,{streaming:t||void 0,children:[(0,T.jsxs)(m,{children:[(0,T.jsx)(_,{children:`Assistente JuriOS`}),(0,T.jsx)(b,{dateTime:`2026-09-30T14:32`,children:`14:32`})]}),(0,T.jsxs)(l,{variant:`muted`,children:[(0,T.jsx)(c,{children:t?`Analisando a publicação de 24/09…`:O}),t&&(0,T.jsx)(i,{"aria-label":`Gerando resposta`})]}),e==="default"&&(0,T.jsx)(v,{children:(0,T.jsxs)(h,{children:[(0,T.jsx)(o,{variant:`outline`,size:`icon-sm`,"aria-label":`Copiar resposta`,children:(0,T.jsx)(n,{})}),(0,T.jsx)(o,{variant:`outline`,size:`sm`,children:`Confirmar prazo`})]})}),e===`error`&&(0,T.jsx)(S,{})]})]})}var T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{x(),a(),s(),r(),f(),T=t(),E={title:`Componentes/IA e chat/Message`,component:y,parameters:{docs:{description:{component:'Uma mensagem completa no chat do assistente jurídico: avatar, cabeçalho com autor e horário, o conteúdo (em geral um `Bubble`) e um rodapé com ações, status ou erro. `Message` cuida do layout e do lado de quem fala; o balão em si é o componente Bubble.\n\n**Quando usar**\n- Cada turno da conversa com o Assistente JuriOS ou entre pessoas da equipe (pergunta da advogada, resposta com prazo sugerido, aviso de falha).\n- Dentro de um Message Scroller, um `MessageScrollerItem` por mensagem.\n\n**Quando não usar**\n- Só o balão, sem avatar nem cabeçalho (sugestões, prévias): use Bubble direto.\n- Linhas de status ou datas entre mensagens ("Consultou 3 fontes", "Hoje"): use Marker.\n- Comentários em documentos ou andamentos fora do chat: use um card ou lista.\n\n**Anatomia**\n- `Message`: linha da mensagem. `align="start"` (padrão, assistente à esquerda) ou `align="end"` (pessoa à direita, ordem invertida). O `Bubble` interno herda esse lado e o canto fechado do balão.\n- `MessageAvatar`: círculo de 32px. Com `initials` mostra as iniciais; sem `initials` nem `children`, mostra o ícone do assistente sobre `brand`. Aceita um `Avatar` como filho.\n- `MessageContent`: coluna com cabeçalho, balão e rodapé; alinha à direita no `end`.\n- `MessageHeader` com `MessageAuthor` (nome) e `MessageTime` (elemento `<time>`; informe `dateTime`).\n- `MessageFooter`: ações, status ("Lida às 14:33") ou erro.\n- `MessageActions`: botões da mensagem (copiar, "Confirmar prazo").\n- `MessageError`: aviso de falha com ícone, para "Tentar novamente".\n- `MessageGroup`: empilha mensagens seguidas.\n\n```tsx\n<Message>\n  <MessageAvatar />\n  <MessageContent streaming={gerando}>\n    <MessageHeader>\n      <MessageAuthor>Assistente JuriOS</MessageAuthor>\n      <MessageTime dateTime="2026-09-30T14:32">14:32</MessageTime>\n    </MessageHeader>\n    <Bubble variant="muted">\n      <BubbleContent>Pela publicação de 24/09, o prazo sugerido é de 15 dias úteis.</BubbleContent>\n      {gerando && <Spinner aria-label="Gerando resposta" />}\n    </Bubble>\n    <MessageFooter>\n      <MessageActions>\n        <Button variant="outline" size="icon-sm" aria-label="Copiar resposta"><Copy /></Button>\n        <Button variant="outline" size="sm">Confirmar prazo</Button>\n      </MessageActions>\n    </MessageFooter>\n  </MessageContent>\n</Message>\n```\n\n**Acessibilidade**\n- Durante a geração, passe `streaming` em `MessageContent` (`true` enquanto gera, `false` ao terminar) e use um `Spinner` com `aria-label` descritivo. Com a prop informada, o conteúdo vira região viva educada e atômica (`aria-live="polite"`, `aria-atomic`): `aria-busy` segura os anúncios enquanto gera, e a resposta completa é lida uma vez ao terminar, em vez de pedaço por pedaço. Mensagens que já chegam prontas não precisam da prop; o anúncio delas vem do `role="log"` do Message Scroller.\n- `MessageError` tem `role="alert"`: a falha é anunciada assim que aparece. Coloque a ação de reenviar como `<button>` dentro dele.\n- O avatar do assistente é decorativo (ícone com `aria-hidden`); o nome em `MessageAuthor` é o que identifica quem fala. Botões só com ícone precisam de `aria-label`.\n- Sugestões da IA (prazos, classificações) devem ser confirmadas pela pessoa: ofereça a ação explícita no rodapé em vez de aplicar automaticamente.'}}},args:{align:`start`,author:`Assistente JuriOS`,initials:``,time:`14:32`,content:`Pela publicação de 24/09, o sistema sugere 15 dias úteis. Confirme a contagem antes de salvar.`,streaming:!1,error:!1},argTypes:{align:{control:`inline-radio`,options:[`start`,`end`],description:"Lado da mensagem: `start` (assistente, à esquerda) ou `end` (pessoa, à direita)."},author:{control:`text`,description:"Nome no `MessageAuthor`."},initials:{control:`text`,description:"Iniciais do `MessageAvatar`; vazio mostra o ícone do assistente."},time:{control:`text`,description:"Horário no `MessageTime`."},content:{control:`text`,description:"Texto do balão (`BubbleContent`)."},streaming:{control:`boolean`,description:"Resposta em geração: `aria-busy` no `MessageContent` e Spinner no balão."},error:{control:`boolean`,description:'Mostra o `MessageError` com "Tentar novamente" no rodapé.'},className:{table:{disable:!0}}}},D=`Qual é o prazo para contestar no processo 1002345-67?`,O=`Pela publicação de 24/09, o sistema sugere 15 dias úteis. Confirme a contagem antes de salvar.`,k={render:({author:e,initials:t,time:n,content:r,streaming:a,error:o,...s})=>(0,T.jsx)(`div`,{className:`w-[480px]`,children:(0,T.jsxs)(y,{...s,children:[(0,T.jsx)(p,{initials:t||void 0}),(0,T.jsxs)(u,{streaming:a||void 0,children:[(0,T.jsxs)(m,{children:[(0,T.jsx)(_,{children:e}),(0,T.jsx)(b,{dateTime:`2026-09-30T14:32`,children:n})]}),(0,T.jsxs)(l,{variant:s.align===`end`?`default`:`muted`,children:[(0,T.jsx)(c,{children:r}),a&&(0,T.jsx)(i,{"aria-label":`Gerando resposta`})]}),o&&(0,T.jsx)(S,{})]})]})})},A={parameters:{docs:{description:{story:`Pessoa e assistente em três estados: enviada, falha no envio com opção de tentar novamente, e resposta em geração com streaming (aria-busy) e Spinner.`}}},render:()=>(0,T.jsxs)(`div`,{className:`grid w-[1440px] grid-cols-3 gap-x-10 gap-y-12 rounded-surface bg-card p-8`,children:[(0,T.jsx)(C,{}),(0,T.jsx)(C,{error:!0}),(0,T.jsx)(`div`,{}),(0,T.jsx)(w,{}),(0,T.jsx)(w,{state:`error`}),(0,T.jsx)(w,{state:`streaming`})]})},j={render:()=>(0,T.jsx)(`div`,{className:`w-[480px]`,children:(0,T.jsx)(C,{})})},M={parameters:{docs:{description:{story:`Resposta em geração: MessageContent com streaming (aria-busy) e Spinner rotulado "Gerando resposta" ao lado do texto parcial.`}}},render:()=>(0,T.jsx)(`div`,{className:`w-[480px]`,children:(0,T.jsx)(w,{state:`streaming`})})},N={parameters:{docs:{description:{story:`MessageError com role="alert" no rodapé, anunciado ao aparecer, com botão para reenviar.`}}},name:`Error`,render:()=>(0,T.jsx)(`div`,{className:`w-[480px]`,children:(0,T.jsx)(C,{error:!0})})},P={parameters:{docs:{description:{story:`MessageGroup empilhando uma pergunta e a resposta do assistente.`}}},render:()=>(0,T.jsx)(`div`,{className:`w-[480px]`,children:(0,T.jsxs)(d,{className:`gap-6`,children:[(0,T.jsx)(C,{}),(0,T.jsx)(w,{})]})})},F={parameters:{docs:{description:{story:`Rodapé usado como status de leitura, sem ações.`}}},name:`Com rodapé`,render:()=>(0,T.jsx)(`div`,{className:`w-[480px]`,children:(0,T.jsxs)(y,{align:`end`,children:[(0,T.jsx)(p,{initials:`CB`}),(0,T.jsxs)(u,{children:[(0,T.jsx)(l,{children:(0,T.jsx)(c,{children:D})}),(0,T.jsx)(v,{children:`Lida às 14:33`})]})]})})},I=[`Default`,`States`,`User`,`Streaming`,`Failed`,`Group`,`WithFooter`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: ({
    author,
    initials,
    time,
    content,
    streaming,
    error,
    ...args
  }) => <div className="w-[480px]">
      <Message {...args}>
        <MessageAvatar initials={initials || undefined} />
        <MessageContent streaming={streaming || undefined}>
          <MessageHeader>
            <MessageAuthor>{author}</MessageAuthor>
            <MessageTime dateTime="2026-09-30T14:32">{time}</MessageTime>
          </MessageHeader>
          <Bubble variant={args.align === "end" ? "default" : "muted"}>
            <BubbleContent>{content}</BubbleContent>
            {streaming && <Spinner aria-label="Gerando resposta" />}
          </Bubble>
          {error && <Retry />}
        </MessageContent>
      </Message>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pessoa e assistente em três estados: enviada, falha no envio com opção de tentar novamente, e resposta em geração com streaming (aria-busy) e Spinner."
      }
    }
  },
  render: () => <div className="grid w-[1440px] grid-cols-3 gap-x-10 gap-y-12 rounded-surface bg-card p-8">
      <UserMessage />
      <UserMessage error />
      <div />
      <AssistantMessage />
      <AssistantMessage state="error" />
      <AssistantMessage state="streaming" />
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[480px]">
      <UserMessage />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Resposta em geração: MessageContent com streaming (aria-busy) e Spinner rotulado \\"Gerando resposta\\" ao lado do texto parcial."
      }
    }
  },
  render: () => <div className="w-[480px]">
      <AssistantMessage state="streaming" />
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "MessageError com role=\\"alert\\" no rodapé, anunciado ao aparecer, com botão para reenviar."
      }
    }
  },
  name: "Error",
  render: () => <div className="w-[480px]">
      <UserMessage error />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "MessageGroup empilhando uma pergunta e a resposta do assistente."
      }
    }
  },
  render: () => <div className="w-[480px]">
      <MessageGroup className="gap-6">
        <UserMessage />
        <AssistantMessage />
      </MessageGroup>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Rodapé usado como status de leitura, sem ações."
      }
    }
  },
  name: "Com rodapé",
  render: () => <div className="w-[480px]">
      <Message align="end">
        <MessageAvatar initials="CB" />
        <MessageContent>
          <Bubble>
            <BubbleContent>{QUESTION}</BubbleContent>
          </Bubble>
          <MessageFooter>Lida às 14:33</MessageFooter>
        </MessageContent>
      </Message>
    </div>
}`,...F.parameters?.docs?.source}}}})))()}L();export{k as Default,N as Failed,P as Group,A as States,M as Streaming,j as User,F as WithFooter,I as __namedExportsOrder,E as default};
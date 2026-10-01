import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./x-CjLxt-lx.js";import{a as i,d as a,i as o,l as s,n as c,r as l,s as u,t as d}from"./attachment-0vs_DpWQ.js";import{a as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./composer-3vFaqzmi.js";import{r as y}from"./icons.stories-CuLmnsRb.js";function b({initial:e=``,withAttachment:t=!1,placeholder:n=E,disabled:a=!1,onSubmit:_}){let[y,b]=(0,x.useState)(e),[C,w]=(0,x.useState)(t);return(0,S.jsxs)(v,{onSubmit:e=>{e.preventDefault(),_?.(e),b(``)},children:[C&&(0,S.jsx)(g,{children:(0,S.jsxs)(d,{children:[(0,S.jsx)(u,{}),(0,S.jsxs)(o,{children:[(0,S.jsx)(s,{children:`Procuração assinada.pdf`}),(0,S.jsx)(i,{children:`PDF · 2,4 MB`})]}),(0,S.jsx)(l,{children:(0,S.jsx)(c,{"aria-label":`Remover Procuração assinada.pdf`,onClick:()=>w(!1),children:(0,S.jsx)(r,{})})})]})}),(0,S.jsx)(p,{"aria-label":`Mensagem para o assistente`,placeholder:n,value:y,disabled:a,onChange:e=>b(e.target.value)}),(0,S.jsxs)(h,{children:[(0,S.jsx)(m,{disabled:a,onClick:()=>w(!0)}),(0,S.jsx)(f,{disabled:a||y.trim()===``})]})]})}var x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{x=t(),y(),a(),_(),S=n(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Componentes/IA e chat/Composer`,component:v,parameters:{docs:{description:{component:'A caixa de envio do chat do assistente jurídico: um `<form>` com anexos no topo, campo de texto que cresce com o conteúdo e uma barra com os botões de anexar e enviar. Enter envia; Shift+Enter quebra linha.\n\n**Quando usar**\n- Fim da janela de conversa com o Assistente JuriOS, abaixo do Message Scroller.\n- Perguntas livres com arquivos de apoio (procuração, petição, print de publicação).\n\n**Quando não usar**\n- Campo de texto longo em formulários comuns (observações do processo, descrição do prazo): use Textarea, em que Enter quebra linha.\n- Resposta estruturada que o assistente pede (rito, tipos de ato): use Questionnaire.\n- Busca com sugestões: use Command ou Combobox.\n\n**Anatomia**\n- `Composer`: o `<form>`. Trate o envio em `onSubmit` (com `preventDefault`); em seguida o foco volta ao campo. A borda muda para `ring` quando o campo está em foco.\n- `ComposerAttachments`: faixa de anexos acima do texto; recebe componentes Attachment (largura e fundo já ajustados).\n- `ComposerInput`: `<textarea>` com altura automática (máx. 240px). Enter chama `form.requestSubmit()`; Shift+Enter e composição de texto (IME) não enviam. Chame `event.preventDefault()` no seu `onKeyDown` para anular o envio por Enter.\n- `ComposerToolbar`: barra inferior, anexar à esquerda e enviar à direita.\n- `ComposerAttach`: botão de clipe com `aria-label="Anexar arquivo"`. Só o botão: conecte ao seu `<input type="file">` ou seletor de documentos.\n- `ComposerSubmit`: botão `type="submit"` com `aria-label="Enviar"`. Desabilite enquanto não houver texto.\n\n```tsx\n<Composer onSubmit={(e) => { e.preventDefault(); enviar(); }}>\n  <ComposerAttachments>\n    <Attachment>\n      <AttachmentMedia />\n      <AttachmentContent>\n        <AttachmentTitle>Procuração assinada.pdf</AttachmentTitle>\n        <AttachmentDescription>PDF · 2,4 MB</AttachmentDescription>\n      </AttachmentContent>\n      <AttachmentActions>\n        <AttachmentAction aria-label="Remover Procuração assinada.pdf"><X /></AttachmentAction>\n      </AttachmentActions>\n    </Attachment>\n  </ComposerAttachments>\n  <ComposerInput\n    aria-label="Mensagem para o assistente"\n    placeholder="Pergunte sobre um processo, prazo ou publicação…"\n    value={texto}\n    onChange={(e) => setTexto(e.target.value)}\n  />\n  <ComposerToolbar>\n    <ComposerAttach onClick={() => inputArquivo.current?.click()} />\n    <ComposerSubmit disabled={texto.trim() === ""} />\n  </ComposerToolbar>\n</Composer>\n```\n\n**Acessibilidade**\n- `ComposerInput` vem com `aria-label="Mensagem"`. Passe um rótulo mais específico quando ajudar (ex.: "Mensagem para o assistente"). O placeholder não substitui o rótulo.\n- Depois de cada envio (Enter ou botão), o `Composer` devolve o foco ao `ComposerInput` logo após chamar o seu `onSubmit`. Assim o foco não se perde quando o botão fica desabilitado com o campo vazio.\n- Cada anexo precisa de ações com o nome do arquivo no rótulo ("Remover Procuração assinada.pdf"). Ao remover um anexo, mova o foco para o próximo anexo ou para o campo de texto.\n- Qualquer outro botão dentro do formulário (ex.: `MarkerCitation`) deve ter `type="button"` para não enviar a mensagem.'}}},args:{placeholder:`Pergunte sobre um processo, prazo ou publicação…`,defaultValue:``,withAttachment:!1,disabled:!1,onSubmit:C()},argTypes:{placeholder:{control:`text`,description:"Placeholder do `ComposerInput`."},defaultValue:{control:`text`,description:`Texto inicial do campo.`},withAttachment:{control:`boolean`,description:"Mostra um anexo em `ComposerAttachments`."},disabled:{control:`boolean`,description:`Desabilita campo, anexar e enviar (ex.: enquanto o assistente responde).`},onSubmit:{table:{disable:!0}},className:{table:{disable:!0}}}},T=[e=>(0,S.jsx)(`div`,{className:`w-140`,children:(0,S.jsx)(e,{})})],E=`Pergunte sobre um processo, prazo ou publicação…`,D=`Resuma a última publicação do processo 1002345-67`,O={parameters:{docs:{description:{story:`Vazio, com placeholder; o botão Enviar fica desabilitado até haver texto.`}}},decorators:T,render:({placeholder:e,defaultValue:t=``,withAttachment:n=!1,disabled:r,onSubmit:i})=>(0,S.jsx)(b,{initial:t,withAttachment:n,placeholder:e,disabled:r,onSubmit:i},`${t}-${n}`)},k={parameters:{docs:{description:{story:`Com texto digitado: Enter envia e Shift+Enter quebra linha.`}}},decorators:T,render:()=>(0,S.jsx)(b,{initial:D})},A={parameters:{docs:{description:{story:`Com um anexo em ComposerAttachments e ação de remover rotulada com o nome do arquivo.`}}},decorators:T,render:()=>(0,S.jsx)(b,{initial:D,withAttachment:!0})},j={parameters:{docs:{description:{story:`Os três estados lado a lado: vazio, com texto e com anexo.`}}},render:()=>(0,S.jsxs)(`div`,{className:`grid w-[1600px] grid-cols-3 items-start gap-7 rounded-surface bg-background p-7`,children:[(0,S.jsx)(b,{}),(0,S.jsx)(b,{initial:D}),(0,S.jsx)(b,{initial:D,withAttachment:!0})]})},M=[`Default`,`Typing`,`WithAttachment`,`States`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Vazio, com placeholder; o botão Enviar fica desabilitado até haver texto."
      }
    }
  },
  decorators: narrow,
  render: ({
    placeholder,
    defaultValue = "",
    withAttachment = false,
    disabled,
    onSubmit
  }) => <InteractiveComposer key={\`\${defaultValue}-\${withAttachment}\`} initial={defaultValue} withAttachment={withAttachment} placeholder={placeholder} disabled={disabled} onSubmit={onSubmit} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Com texto digitado: Enter envia e Shift+Enter quebra linha."
      }
    }
  },
  decorators: narrow,
  render: () => <InteractiveComposer initial={PROMPT} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Com um anexo em ComposerAttachments e ação de remover rotulada com o nome do arquivo."
      }
    }
  },
  decorators: narrow,
  render: () => <InteractiveComposer initial={PROMPT} withAttachment />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Os três estados lado a lado: vazio, com texto e com anexo."
      }
    }
  },
  render: () => <div className="grid w-[1600px] grid-cols-3 items-start gap-7 rounded-surface bg-background p-7">
      <InteractiveComposer />
      <InteractiveComposer initial={PROMPT} />
      <InteractiveComposer initial={PROMPT} withAttachment />
    </div>
}`,...j.parameters?.docs?.source}}}})))()}N();export{O as Default,j as States,k as Typing,A as WithAttachment,M as __namedExportsOrder,w as default};
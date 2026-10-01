import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./download-BuUVNlNl.js";import{t as r}from"./x-CjLxt-lx.js";import{a as i,c as a,d as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./attachment-0vs_DpWQ.js";import{r as h}from"./icons.stories-CuLmnsRb.js";function g({name:e}){return(0,_.jsx)(d,{children:(0,_.jsx)(l,{"aria-label":`Remover ${e}`,children:(0,_.jsx)(r,{})})})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{h(),o(),_=t(),v={title:`Componentes/IA e chat/Attachment`,component:p,parameters:{docs:{description:{component:'Um arquivo anexado a uma mensagem do chat ou a um formulário: miniatura, nome, tipo e tamanho (ou progresso do envio, ou motivo da falha) e ações como baixar e remover. No JuriOS, representa procurações, petições, comprovantes e prints que a pessoa envia ao assistente ou recebe dele.\n\n**Quando usar**\n- Dentro do Composer (em `ComposerAttachments`), para os arquivos que vão junto com a pergunta.\n- Em uma mensagem, para documentos enviados ou gerados pelo assistente.\n- Em formulários com upload, para mostrar cada arquivo e seu estado.\n\n**Quando não usar**\n- Lista de documentos do processo com colunas (data, autor, tipo): use Table.\n- Galeria de imagens grandes: use Carousel ou Aspect Ratio.\n- Arquivo apenas citado no texto, sem ações: use um link.\n\n**Anatomia**\n- `Attachment`: container. Props `state` (`idle`, `uploading`, `processing`, `error`, `done`; padrão `done`), `size` (`default`, `sm`, `xs`) e `orientation` (`horizontal` ou `vertical`, em cartão com miniatura quadrada).\n- `AttachmentMedia`: miniatura. Sem `children`, mostra o ícone do tipo (`variant="icon"` para documento, `"image"` para imagem) e, em `error`, um ícone de alerta. Aceita um `<img>`.\n- `AttachmentContent`: coluna com `AttachmentTitle` (nome do arquivo, truncado) e `AttachmentDescription` (tipo e tamanho, ou motivo da falha em `destructive`) ou `AttachmentProgress`.\n- `AttachmentProgress`: barra de envio com `value` (0 a 100), `label` opcional e texto ao lado como `children` ("45% · 1,1 de 2,4 MB").\n- `AttachmentActions` com `AttachmentAction` (botão `ghost` `icon-sm`, `type="button"`). No vertical, as ações flutuam sobre a miniatura.\n- `AttachmentTrigger`: área clicável que cobre o anexo inteiro para abrir ou pré-visualizar; `asChild` para usar um `<a href>`. As ações ficam acima dele e continuam clicáveis.\n- `AttachmentGroup`: faixa horizontal com rolagem e snap para vários anexos.\n\n```tsx\n<Attachment state="uploading">\n  <AttachmentMedia />\n  <AttachmentContent>\n    <AttachmentTitle>Procuração assinada.pdf</AttachmentTitle>\n    <AttachmentProgress value={45}>45% · 1,1 de 2,4 MB</AttachmentProgress>\n  </AttachmentContent>\n  <AttachmentActions>\n    <AttachmentAction aria-label="Remover Procuração assinada.pdf"><X /></AttachmentAction>\n  </AttachmentActions>\n</Attachment>\n```\n\n**Acessibilidade**\n- Todo `AttachmentAction` e `AttachmentTrigger` é só ícone ou área vazia: informe `aria-label` com a ação e o nome do arquivo ("Baixar Procuração assinada.pdf", "Abrir Procuração assinada.pdf"). Com vários anexos, rótulos genéricos como "Remover" ficam ambíguos.\n- Em `uploading` e `processing`, o container recebe `aria-busy`. `AttachmentDescription` e o texto do `AttachmentProgress` têm `aria-live="polite"`, então a mudança para erro ou o avanço do envio são anunciados. Evite atualizar o texto de progresso a cada ponto percentual.\n- A barra de `AttachmentProgress` é nomeada pelo arquivo: "Progresso do envio de" + o texto do `AttachmentTitle` do mesmo `Attachment` (ex.: "Progresso do envio de Procuração assinada.pdf"). Para outro texto, passe `label`; sem título nem `label`, vale "Progresso do envio".\n- Em `error`, escreva o motivo na descrição ("arquivo acima de 20 MB"); cor e ícone não bastam.\n- Em miniaturas de imagem, use `alt=""` quando o `AttachmentTitle` já nomeia o arquivo.'}}},args:{state:`done`,size:`default`,orientation:`horizontal`,title:`Procuração assinada.pdf`,description:`PDF · 2,4 MB`,progress:45,media:`icon`},argTypes:{state:{control:`inline-radio`,options:[`idle`,`uploading`,`processing`,`error`,`done`],description:"Estado do arquivo; em `uploading` a descrição dá lugar à barra de progresso."},size:{control:`inline-radio`,options:[`default`,`sm`,`xs`],description:`Altura e tamanho da miniatura.`},orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`],description:"Linha (`horizontal`) ou cartão com miniatura quadrada (`vertical`)."},title:{control:`text`,description:"Nome do arquivo (`AttachmentTitle`)."},description:{control:`text`,description:"Tipo e tamanho, ou motivo da falha (`AttachmentDescription`)."},progress:{control:{type:`range`,min:0,max:100,step:1},description:"Percentual do `AttachmentProgress` (só em `uploading`)."},media:{control:`inline-radio`,options:[`icon`,`image`],description:"Ícone da miniatura (`AttachmentMedia variant`)."},className:{table:{disable:!0}}}},y=[e=>(0,_.jsx)(`div`,{className:`w-90`,children:(0,_.jsx)(e,{})})],b=`Procuração assinada.pdf`,x={decorators:y,render:({title:e=b,description:t,progress:n=0,media:r,...o})=>(0,_.jsxs)(p,{...o,children:[(0,_.jsx)(f,{variant:r}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:e}),o.state===`uploading`?(0,_.jsxs)(a,{value:n,children:[n,`% · 2,4 MB`]}):(0,_.jsx)(i,{children:t})]}),(0,_.jsx)(g,{name:e})]})},S={parameters:{docs:{description:{story:`Documento pronto, imagem pronta, envio em andamento com progresso e falha com o motivo na descrição.`}}},render:()=>(0,_.jsxs)(`div`,{className:`grid w-[1560px] grid-cols-4 gap-6 rounded-surface bg-background p-8`,children:[(0,_.jsxs)(p,{children:[(0,_.jsx)(f,{}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:b}),(0,_.jsx)(i,{children:`PDF · 2,4 MB`})]}),(0,_.jsx)(g,{name:b})]}),(0,_.jsxs)(p,{children:[(0,_.jsx)(f,{variant:`image`}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:`print-audiencia.png`}),(0,_.jsx)(i,{children:`PNG · 820 KB`})]}),(0,_.jsx)(g,{name:`print-audiencia.png`})]}),(0,_.jsxs)(p,{state:`uploading`,children:[(0,_.jsx)(f,{}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:b}),(0,_.jsx)(a,{value:45,children:`45% · 1,1 de 2,4 MB`})]}),(0,_.jsx)(g,{name:b})]}),(0,_.jsxs)(p,{state:`error`,children:[(0,_.jsx)(f,{}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:b}),(0,_.jsx)(i,{children:`Falha no envio · arquivo acima de 20 MB`})]}),(0,_.jsx)(g,{name:b})]})]})},C={parameters:{docs:{description:{story:`state="uploading": aria-busy no container e AttachmentProgress com o texto de progresso anunciado.`}}},decorators:y,render:()=>(0,_.jsxs)(p,{state:`uploading`,children:[(0,_.jsx)(f,{}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:b}),(0,_.jsx)(a,{value:45,children:`45% · 1,1 de 2,4 MB`})]}),(0,_.jsx)(g,{name:b})]})},w={parameters:{docs:{description:{story:`state="error": ícone de alerta e descrição em destructive com o motivo da falha.`}}},name:`Error`,decorators:y,render:()=>(0,_.jsxs)(p,{state:`error`,children:[(0,_.jsx)(f,{}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:b}),(0,_.jsx)(i,{children:`Falha no envio · arquivo acima de 20 MB`})]}),(0,_.jsx)(g,{name:b})]})},T={parameters:{docs:{description:{story:`Tamanhos default, sm e xs; no xs, só o nome do arquivo.`}}},render:()=>(0,_.jsx)(`div`,{className:`flex w-90 flex-col gap-4 rounded-surface bg-background p-6`,children:[`default`,`sm`,`xs`].map(e=>(0,_.jsxs)(p,{size:e,children:[(0,_.jsx)(f,{}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:b}),e!==`xs`&&(0,_.jsx)(i,{children:`PDF · 2,4 MB`})]}),(0,_.jsx)(g,{name:b})]},e))})},E={parameters:{docs:{description:{story:`Orientação vertical em cartão, com miniatura de imagem ou ícone; as ações flutuam sobre a miniatura.`}}},render:()=>(0,_.jsxs)(`div`,{className:`flex gap-4 rounded-surface bg-background p-6`,children:[(0,_.jsxs)(p,{orientation:`vertical`,children:[(0,_.jsx)(f,{variant:`image`,children:(0,_.jsx)(`img`,{src:`/img/1505664194779-8beaceb93744.jpg`,alt:``})}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:`foto-vistoria.jpg`}),(0,_.jsx)(i,{children:`JPG · 1,2 MB`})]}),(0,_.jsx)(g,{name:`foto-vistoria.jpg`})]}),(0,_.jsxs)(p,{orientation:`vertical`,children:[(0,_.jsx)(f,{}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:b}),(0,_.jsx)(i,{children:`PDF · 2,4 MB`})]})]})]})},D={parameters:{docs:{description:{story:`AttachmentTrigger cobre o anexo para abrir o arquivo; baixar e remover continuam clicáveis por cima.`}}},name:`Com trigger e ações`,decorators:y,render:()=>(0,_.jsxs)(p,{children:[(0,_.jsx)(m,{"aria-label":`Abrir ${b}`}),(0,_.jsx)(f,{}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:b}),(0,_.jsx)(i,{children:`PDF · 2,4 MB`})]}),(0,_.jsxs)(d,{children:[(0,_.jsx)(l,{"aria-label":`Baixar ${b}`,children:(0,_.jsx)(n,{})}),(0,_.jsx)(l,{"aria-label":`Remover ${b}`,children:(0,_.jsx)(r,{})})]})]})},O=[[`Petição inicial.pdf`,`PDF · 1,8 MB`],[`Procuração assinada.pdf`,`PDF · 2,4 MB`],[`Comprovante de residência.pdf`,`PDF · 640 KB`],[`Contrato de honorários.docx`,`DOCX · 96 KB`]],k={parameters:{docs:{description:{story:`AttachmentGroup com vários documentos em uma faixa horizontal com rolagem e snap.`}}},render:()=>(0,_.jsx)(`div`,{className:`w-160 rounded-surface bg-background p-6`,children:(0,_.jsx)(u,{children:O.map(([e,t])=>(0,_.jsxs)(p,{children:[(0,_.jsx)(f,{}),(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:e}),(0,_.jsx)(i,{children:t})]}),(0,_.jsx)(g,{name:e})]},e))})})},A=[`Default`,`States`,`Uploading`,`Failed`,`Sizes`,`Vertical`,`WithTrigger`,`Group`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  render: ({
    title = FILE,
    description,
    progress = 0,
    media,
    ...args
  }) => <Attachment {...args}>
      <AttachmentMedia variant={media} />
      <AttachmentContent>
        <AttachmentTitle>{title}</AttachmentTitle>
        {args.state === "uploading" ? <AttachmentProgress value={progress}>{progress}% · 2,4 MB</AttachmentProgress> : <AttachmentDescription>{description}</AttachmentDescription>}
      </AttachmentContent>
      <Remove name={title} />
    </Attachment>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Documento pronto, imagem pronta, envio em andamento com progresso e falha com o motivo na descrição."
      }
    }
  },
  render: () => <div className="grid w-[1560px] grid-cols-4 gap-6 rounded-surface bg-background p-8">
      <Attachment>
        <AttachmentMedia />
        <AttachmentContent>
          <AttachmentTitle>{FILE}</AttachmentTitle>
          <AttachmentDescription>PDF · 2,4 MB</AttachmentDescription>
        </AttachmentContent>
        <Remove name={FILE} />
      </Attachment>
      <Attachment>
        <AttachmentMedia variant="image" />
        <AttachmentContent>
          <AttachmentTitle>print-audiencia.png</AttachmentTitle>
          <AttachmentDescription>PNG · 820 KB</AttachmentDescription>
        </AttachmentContent>
        <Remove name="print-audiencia.png" />
      </Attachment>
      <Attachment state="uploading">
        <AttachmentMedia />
        <AttachmentContent>
          <AttachmentTitle>{FILE}</AttachmentTitle>
          <AttachmentProgress value={45}>45% · 1,1 de 2,4 MB</AttachmentProgress>
        </AttachmentContent>
        <Remove name={FILE} />
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia />
        <AttachmentContent>
          <AttachmentTitle>{FILE}</AttachmentTitle>
          <AttachmentDescription>Falha no envio · arquivo acima de 20 MB</AttachmentDescription>
        </AttachmentContent>
        <Remove name={FILE} />
      </Attachment>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "state=\\"uploading\\": aria-busy no container e AttachmentProgress com o texto de progresso anunciado."
      }
    }
  },
  decorators: narrow,
  render: () => <Attachment state="uploading">
      <AttachmentMedia />
      <AttachmentContent>
        <AttachmentTitle>{FILE}</AttachmentTitle>
        <AttachmentProgress value={45}>45% · 1,1 de 2,4 MB</AttachmentProgress>
      </AttachmentContent>
      <Remove name={FILE} />
    </Attachment>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "state=\\"error\\": ícone de alerta e descrição em destructive com o motivo da falha."
      }
    }
  },
  name: "Error",
  decorators: narrow,
  render: () => <Attachment state="error">
      <AttachmentMedia />
      <AttachmentContent>
        <AttachmentTitle>{FILE}</AttachmentTitle>
        <AttachmentDescription>Falha no envio · arquivo acima de 20 MB</AttachmentDescription>
      </AttachmentContent>
      <Remove name={FILE} />
    </Attachment>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Tamanhos default, sm e xs; no xs, só o nome do arquivo."
      }
    }
  },
  render: () => <div className="flex w-90 flex-col gap-4 rounded-surface bg-background p-6">
      {(["default", "sm", "xs"] as const).map(size => <Attachment key={size} size={size}>
          <AttachmentMedia />
          <AttachmentContent>
            <AttachmentTitle>{FILE}</AttachmentTitle>
            {size !== "xs" && <AttachmentDescription>PDF · 2,4 MB</AttachmentDescription>}
          </AttachmentContent>
          <Remove name={FILE} />
        </Attachment>)}
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Orientação vertical em cartão, com miniatura de imagem ou ícone; as ações flutuam sobre a miniatura."
      }
    }
  },
  render: () => <div className="flex gap-4 rounded-surface bg-background p-6">
      <Attachment orientation="vertical">
        <AttachmentMedia variant="image">
          <img src="/img/1505664194779-8beaceb93744.jpg" alt="" />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>foto-vistoria.jpg</AttachmentTitle>
          <AttachmentDescription>JPG · 1,2 MB</AttachmentDescription>
        </AttachmentContent>
        <Remove name="foto-vistoria.jpg" />
      </Attachment>
      <Attachment orientation="vertical">
        <AttachmentMedia />
        <AttachmentContent>
          <AttachmentTitle>{FILE}</AttachmentTitle>
          <AttachmentDescription>PDF · 2,4 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "AttachmentTrigger cobre o anexo para abrir o arquivo; baixar e remover continuam clicáveis por cima."
      }
    }
  },
  name: "Com trigger e ações",
  decorators: narrow,
  render: () => <Attachment>
      <AttachmentTrigger aria-label={\`Abrir \${FILE}\`} />
      <AttachmentMedia />
      <AttachmentContent>
        <AttachmentTitle>{FILE}</AttachmentTitle>
        <AttachmentDescription>PDF · 2,4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label={\`Baixar \${FILE}\`}>
          <Download />
        </AttachmentAction>
        <AttachmentAction aria-label={\`Remover \${FILE}\`}>
          <X />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "AttachmentGroup com vários documentos em uma faixa horizontal com rolagem e snap."
      }
    }
  },
  render: () => <div className="w-160 rounded-surface bg-background p-6">
      <AttachmentGroup>
        {DOCS.map(([name, meta]) => <Attachment key={name}>
            <AttachmentMedia />
            <AttachmentContent>
              <AttachmentTitle>{name}</AttachmentTitle>
              <AttachmentDescription>{meta}</AttachmentDescription>
            </AttachmentContent>
            <Remove name={name} />
          </Attachment>)}
      </AttachmentGroup>
    </div>
}`,...k.parameters?.docs?.source}}}})))()}j();export{x as Default,w as Failed,k as Group,T as Sizes,S as States,C as Uploading,E as Vertical,D as WithTrigger,A as __namedExportsOrder,v as default};
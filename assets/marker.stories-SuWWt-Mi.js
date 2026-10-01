import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./book-open-CqGp3D4m.js";import{t as r}from"./chevron-right-CqpFEcDi.js";import{t as i}from"./search-CGMycZmG.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./marker-mcw76duQ.js";import{a as d,n as f,t as p}from"./bubble-lDMq41Sz.js";import{r as m}from"./icons.stories-CuLmnsRb.js";var h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{m(),d(),c(),h=t(),g={title:`Componentes/IA e chat/Marker`,component:u,parameters:{docs:{description:{component:'Linha discreta que marca algo na conversa sem ser uma mensagem: o que o assistente fez ("Consultou 3 fontes no DJe e no CPC"), eventos ("Ana Lima entrou na conversa"), datas e o início das não lidas. Inclui também a citação numérica que liga um trecho da resposta à fonte.\n\n**Quando usar**\n- Status de ferramenta ou raciocínio do assistente (`variant="default"`, com `MarkerIcon`). Com `asChild` sobre um `<button>`, vira um controle para expandir o raciocínio ("Ver raciocínio (4 etapas)").\n- Eventos no meio da conversa, centralizados entre linhas (`variant="separator"`).\n- Título de seção com linha de base, como "Fontes da resposta" (`variant="border"`).\n- Datas e "3 novas mensagens" entre mensagens: `MarkerDivider` (`variant="unread"` destaca em `primary`).\n- Referência a fonte dentro do texto da resposta (artigo do CPC, publicação do DJe): `MarkerCitation`.\n\n**Quando não usar**\n- Conteúdo que alguém escreveu: use Message e Bubble.\n- Divisória sem texto em outras telas: use Separator.\n- Aviso que exige atenção: use Alert.\n\n**Anatomia**\n- `Marker`: a linha. `variant`: `default`, `separator` ou `border`; `asChild` para renderizar como botão ou link.\n- `MarkerIcon`: ícone de 16px, decorativo (`aria-hidden`).\n- `MarkerContent`: texto; centralizado no `separator`.\n- `MarkerDivider`: atalho para `Marker variant="separator"` com `role="separator"` e o texto como filho; `variant` `default` ou `unread`.\n- `MarkerCitation`: pílula numérica (um `<button>` por padrão; `asChild` para `<a href="#fonte-1">`). Dentro de um Bubble, ganha fundo `card`.\n\n```tsx\n<Marker>\n  <MarkerIcon><Search /></MarkerIcon>\n  <MarkerContent>Consultou 3 fontes no DJe e no CPC</MarkerContent>\n</Marker>\n\n<Bubble variant="muted">\n  <BubbleContent>\n    O prazo para contestar é de 15 dias úteis{" "}\n    <MarkerCitation aria-label="Fonte 1: CPC, art. 335">1</MarkerCitation>.\n  </BubbleContent>\n</Bubble>\n\n<MarkerDivider variant="unread">3 novas mensagens</MarkerDivider>\n```\n\n**Acessibilidade**\n- `MarkerCitation` mostra só um número: informe `aria-label` com a fonte (ex.: "Fonte 1: CPC, art. 335"). Ele renderiza `<button type="button">`, então não envia um `<form>` em volta (como o Composer).\n- `MarkerDivider` usa `role="separator"`, que não recebe nome a partir do texto; por isso ganha `aria-label` com o próprio texto quando os filhos são texto puro ("Hoje", "3 novas mensagens"). Com filhos em elementos, passe `aria-label` você mesmo.\n- O `Marker` com `asChild` sobre um `<button>` que expande conteúdo deve indicar o estado com `aria-expanded`.\n- `MarkerIcon` é sempre decorativo; o sentido tem de estar no texto.'}}},args:{variant:`default`,content:`Consultou 3 fontes no DJe e no CPC`,showIcon:!0},argTypes:{variant:{control:`inline-radio`,options:[`default`,`separator`,`border`],description:"Status com ícone (`default`), evento centralizado entre linhas (`separator`) ou título com linha de base (`border`)."},content:{control:`text`,description:"Texto do `MarkerContent`."},showIcon:{control:`boolean`,description:"Mostra o `MarkerIcon` antes do texto."},asChild:{table:{disable:!0}},className:{table:{disable:!0}}},render:({content:e,showIcon:t,...n})=>(0,h.jsx)(`div`,{className:`w-105`,children:(0,h.jsxs)(u,{...n,children:[t&&(0,h.jsx)(a,{children:(0,h.jsx)(i,{})}),(0,h.jsx)(l,{children:e})]})})},_={},v={parameters:{docs:{description:{story:`As três variantes do Marker: status com ícone (default), evento entre linhas (separator) e título com linha de base (border).`}}},render:()=>(0,h.jsxs)(`div`,{className:`grid w-[640px] grid-cols-[120px_1fr] items-center gap-6 rounded-surface bg-card p-8`,children:[(0,h.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:`default`}),(0,h.jsxs)(u,{children:[(0,h.jsx)(a,{children:(0,h.jsx)(i,{})}),(0,h.jsx)(l,{children:`Consultou 3 fontes no DJe e no CPC`})]}),(0,h.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:`separator`}),(0,h.jsx)(u,{variant:`separator`,children:(0,h.jsx)(l,{children:`Ana Lima entrou na conversa`})}),(0,h.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:`border`}),(0,h.jsxs)(u,{variant:`border`,children:[(0,h.jsx)(a,{children:(0,h.jsx)(n,{})}),(0,h.jsx)(l,{children:`Fontes da resposta`})]})]})},y={parameters:{docs:{description:{story:`MarkerCitation (número de fonte) e MarkerDivider nas versões default e unread.`}}},name:`Citação e divisória`,render:()=>(0,h.jsxs)(`div`,{className:`grid w-[640px] grid-cols-[120px_1fr] items-center gap-x-6 gap-y-6 rounded-surface bg-card p-8`,children:[(0,h.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:`citation`}),(0,h.jsx)(`div`,{children:(0,h.jsx)(s,{"aria-label":`Fonte 1`,children:`1`})}),(0,h.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:`divider`}),(0,h.jsx)(o,{children:`Hoje`}),(0,h.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:`unread`}),(0,h.jsx)(o,{variant:`unread`,children:`3 novas mensagens`})]})},b={parameters:{docs:{description:{story:`Citações dentro da resposta do assistente, cada uma com aria-label indicando a fonte.`}}},name:`Citação na resposta`,render:()=>(0,h.jsx)(`div`,{className:`flex w-90 flex-col`,children:(0,h.jsx)(p,{variant:`muted`,children:(0,h.jsxs)(f,{children:[`O prazo para contestar é de 15 dias úteis `,(0,h.jsx)(s,{"aria-label":`Fonte 1: CPC, art. 335`,children:`1`}),`, contados da juntada do mandado de citação `,(0,h.jsx)(s,{"aria-label":`Fonte 2: CPC, art. 231, II`,children:`2`}),`.`]})})})},x={parameters:{docs:{description:{story:`Divisórias de data e de início das mensagens não lidas.`}}},render:()=>(0,h.jsxs)(`div`,{className:`flex w-[420px] flex-col gap-6`,children:[(0,h.jsx)(o,{children:`Hoje`}),(0,h.jsx)(o,{variant:`unread`,children:`3 novas mensagens`})]})},S={parameters:{docs:{description:{story:`Marker com asChild sobre um button para expandir o raciocínio do assistente.`}}},name:`Como botão`,render:()=>(0,h.jsx)(`div`,{className:`w-105`,children:(0,h.jsx)(u,{asChild:!0,children:(0,h.jsxs)(`button`,{type:`button`,className:`cursor-pointer hover:text-foreground`,children:[(0,h.jsx)(a,{children:(0,h.jsx)(r,{})}),(0,h.jsx)(l,{children:`Ver raciocínio (4 etapas)`})]})})})},C=[`Default`,`Variants`,`Types`,`InAnswer`,`Divider`,`AsButton`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "As três variantes do Marker: status com ícone (default), evento entre linhas (separator) e título com linha de base (border)."
      }
    }
  },
  render: () => <div className="grid w-[640px] grid-cols-[120px_1fr] items-center gap-6 rounded-surface bg-card p-8">
      <span className="text-caption text-muted-foreground">default</span>
      <Marker>
        <MarkerIcon>
          <Search />
        </MarkerIcon>
        <MarkerContent>Consultou 3 fontes no DJe e no CPC</MarkerContent>
      </Marker>
      <span className="text-caption text-muted-foreground">separator</span>
      <Marker variant="separator">
        <MarkerContent>Ana Lima entrou na conversa</MarkerContent>
      </Marker>
      <span className="text-caption text-muted-foreground">border</span>
      <Marker variant="border">
        <MarkerIcon>
          <BookOpen />
        </MarkerIcon>
        <MarkerContent>Fontes da resposta</MarkerContent>
      </Marker>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "MarkerCitation (número de fonte) e MarkerDivider nas versões default e unread."
      }
    }
  },
  name: "Citação e divisória",
  render: () => <div className="grid w-[640px] grid-cols-[120px_1fr] items-center gap-x-6 gap-y-6 rounded-surface bg-card p-8">
      <span className="text-caption text-muted-foreground">citation</span>
      <div>
        <MarkerCitation aria-label="Fonte 1">1</MarkerCitation>
      </div>
      <span className="text-caption text-muted-foreground">divider</span>
      <MarkerDivider>Hoje</MarkerDivider>
      <span className="text-caption text-muted-foreground">unread</span>
      <MarkerDivider variant="unread">3 novas mensagens</MarkerDivider>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Citações dentro da resposta do assistente, cada uma com aria-label indicando a fonte."
      }
    }
  },
  name: "Citação na resposta",
  render: () => <div className="flex w-90 flex-col">
      <Bubble variant="muted">
        <BubbleContent>
          O prazo para contestar é de 15 dias úteis <MarkerCitation aria-label="Fonte 1: CPC, art. 335">1</MarkerCitation>, contados
          da juntada do mandado de citação <MarkerCitation aria-label="Fonte 2: CPC, art. 231, II">2</MarkerCitation>.
        </BubbleContent>
      </Bubble>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Divisórias de data e de início das mensagens não lidas."
      }
    }
  },
  render: () => <div className="flex w-[420px] flex-col gap-6">
      <MarkerDivider>Hoje</MarkerDivider>
      <MarkerDivider variant="unread">3 novas mensagens</MarkerDivider>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Marker com asChild sobre um button para expandir o raciocínio do assistente."
      }
    }
  },
  name: "Como botão",
  render: () => <div className="w-105">
      <Marker asChild>
        <button type="button" className="cursor-pointer hover:text-foreground">
          <MarkerIcon>
            <ChevronRight />
          </MarkerIcon>
          <MarkerContent>Ver raciocínio (4 etapas)</MarkerContent>
        </button>
      </Marker>
    </div>
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as AsButton,_ as Default,x as Divider,b as InAnswer,y as Types,v as Variants,C as __namedExportsOrder,g as default};
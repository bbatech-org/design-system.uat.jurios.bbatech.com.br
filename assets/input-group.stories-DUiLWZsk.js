import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./loader-circle-DxsllSAG.js";import{t as r}from"./search-CGMycZmG.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./input-group-BqUCSqoh.js";import{r as d}from"./icons.stories-CuLmnsRb.js";function f(e){return(0,_.jsxs)(u,{children:[(0,_.jsx)(o,{children:(0,_.jsx)(r,{})}),(0,_.jsx)(a,{placeholder:`Buscar processo, cliente…`,"aria-label":`Buscar`,...e})]})}function p(e){return(0,_.jsxs)(u,{children:[(0,_.jsx)(o,{children:(0,_.jsx)(i,{children:`R$`})}),(0,_.jsx)(a,{placeholder:`0,00`,inputMode:`decimal`,"aria-label":`Valor da causa (R$)`,...e})]})}function m(e){return(0,_.jsxs)(u,{children:[(0,_.jsx)(a,{placeholder:`Honorários`,inputMode:`decimal`,"aria-label":`Honorários (%)`,...e}),(0,_.jsx)(o,{align:`inline-end`,children:(0,_.jsx)(i,{children:`%`})})]})}function h(e){return(0,_.jsxs)(u,{children:[(0,_.jsx)(a,{placeholder:`nº do processo`,"aria-label":`Número do processo`,className:`text-code`,...e}),(0,_.jsx)(o,{align:`inline-end`,children:(0,_.jsx)(c,{variant:`secondary`,disabled:e.disabled,children:`Consultar`})})]})}function g(e){return(0,_.jsxs)(u,{children:[(0,_.jsx)(o,{children:(0,_.jsx)(r,{})}),(0,_.jsx)(a,{placeholder:`Buscando…`,"aria-label":`Buscar`,...e}),(0,_.jsx)(o,{align:`inline-end`,children:(0,_.jsx)(n,{className:`animate-spin`,"aria-hidden":!0})})]})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{d(),l(),_=t(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Componentes/Formulários/Input Group`,component:u,parameters:{docs:{description:{component:'Campo com complementos dentro da mesma borda: ícone, prefixo ou sufixo de texto (R$, %), botão de ação ou rodapé com contador. O foco, o erro e o estado desabilitado do controle se refletem na borda do grupo inteiro.\n\n**Quando usar**\n- Busca com ícone.\n- Valores com unidade: valor da causa (R$), honorários (%).\n- Ação acoplada ao campo: consultar processo pelo número CNJ, copiar link, mostrar senha.\n- Textarea com rodapé: contador de caracteres e ação (Salvar parecer).\n\n**Quando não usar**\n- Campo simples sem complemento: use Input.\n- O botão que envia o formulário inteiro fica fora do grupo, no rodapé do formulário.\n- O prefixo não é rótulo: o campo continua precisando de Label ou `aria-label`.\n\n**Anatomia**\n- `InputGroup`: contêiner com borda (`role="group"`), 48 de altura; cresce com textarea ou com addons de bloco.\n- `InputGroupInput` / `InputGroupTextarea`: o controle, sem borda própria. Os estados vêm dele: `aria-invalid` e `disabled`.\n- `InputGroupAddon`: complemento. `align`: `inline-start` (padrão), `inline-end`, `block-start` ou `block-end`. Clicar no addon foca o controle (menos quando o clique é em um botão).\n- `InputGroupText`: texto estático, como `R$`, `%` ou `0/500`.\n- `InputGroupButton`: Button compacto (`variant="ghost"`, `size="sm"` e `type="button"` por padrão).\n\n```tsx\n<InputGroup>\n  <InputGroupAddon>\n    <InputGroupText>R$</InputGroupText>\n  </InputGroupAddon>\n  <InputGroupInput inputMode="decimal" placeholder="0,00" aria-label="Valor da causa (R$)" />\n</InputGroup>\n```\n\n**Acessibilidade**\n- Inclua a unidade no nome do campo ("Valor da causa (R$)"): o prefixo visual não faz parte do rótulo.\n- Ícones decorativos com `aria-hidden`; botão só com ícone precisa de `aria-label`.\n- O `align` define a posição visual; mantenha a mesma ordem no código para a ordem de leitura e de Tab coincidir.\n- Indicador de carregamento (spinner) é decorativo: anuncie o resultado da busca por outro meio.\n'}}},args:{addon:`icon-start`,disabled:!1,invalid:!1,onChange:v()},argTypes:{addon:{control:`select`,options:[`icon-start`,`text-start`,`text-end`,`button-end`,`icon-both`],description:`Composição de InputGroupAddon (só na story): ícone, prefixo, sufixo, botão ou ícone nos dois lados.`},placeholder:{control:`text`,description:`Sobrescreve o placeholder da composição.`},disabled:{control:`boolean`,description:`disabled no controle; o grupo esmaece junto.`},invalid:{control:`boolean`,description:`aria-invalid no controle; a borda do grupo fica destructive.`},onChange:{table:{category:`Eventos`}},className:{table:{disable:!0}}}},b=[e=>(0,_.jsx)(`div`,{className:`w-[300px]`,children:(0,_.jsx)(e,{})})],x={parameters:{docs:{description:{story:`Ícone de busca no início do campo. Troque a composição em addon.`}}},decorators:b,render:({addon:e=`icon-start`,placeholder:t,disabled:n,invalid:r,onChange:i})=>{let a=Object.fromEntries(E)[e];return(0,_.jsx)(a,{...t?{placeholder:t}:{},disabled:n,"aria-invalid":r||void 0,onChange:i})}},S={parameters:{docs:{description:{story:`Prefixo R$ para valores monetários; a unidade também vai no aria-label.`}}},decorators:b,render:()=>(0,_.jsx)(p,{})},C={parameters:{docs:{description:{story:`Sufixo % para percentuais.`}}},decorators:b,render:()=>(0,_.jsx)(m,{})},w={parameters:{docs:{description:{story:`Ação acoplada: consultar o processo pelo número CNJ.`}}},decorators:b,render:()=>(0,_.jsx)(h,{})},T={parameters:{docs:{description:{story:`Ícone no início e indicador de carregamento no fim.`}}},decorators:b,render:()=>(0,_.jsx)(g,{})},E=[[`icon-start`,f],[`text-start`,p],[`text-end`,m],[`button-end`,h],[`icon-both`,g]],D=[[`default`,{}],[`focus`,{}],[`invalid`,{"aria-invalid":!0}],[`disabled`,{disabled:!0}]],O={parameters:{docs:{description:{story:`Foco, erro e desabilitado do controle se refletem na borda do grupo, em todas as composições.`}}},render:()=>(0,_.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(4,300px)] items-center gap-x-6 gap-y-6 rounded-surface bg-background p-8`,children:[(0,_.jsx)(`span`,{}),D.map(([e])=>(0,_.jsx)(`span`,{className:`text-center text-caption text-muted-foreground`,children:e},e)),E.map(([e,t],n)=>(0,_.jsxs)(`div`,{className:`contents`,children:[(0,_.jsx)(`span`,{className:`text-right text-caption text-muted-foreground`,children:e}),D.map(([e,r])=>(0,_.jsx)(t,{...r,autoFocus:e===`focus`&&n===0},e))]},e))]})},k={parameters:{docs:{description:{story:`InputGroupTextarea com addon block-end para contador e ação.`}}},decorators:b,render:()=>(0,_.jsxs)(u,{children:[(0,_.jsx)(s,{placeholder:`Resumo do parecer…`,"aria-label":`Resumo do parecer`}),(0,_.jsxs)(o,{align:`block-end`,className:`justify-between`,children:[(0,_.jsx)(i,{className:`text-caption`,children:`0/500`}),(0,_.jsx)(c,{variant:`default`,children:`Salvar`})]})]})},A=[`Default`,`TextStart`,`TextEnd`,`ButtonEnd`,`IconBoth`,`States`,`WithTextarea`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ícone de busca no início do campo. Troque a composição em addon."
      }
    }
  },
  decorators: narrow,
  render: ({
    addon = "icon-start",
    placeholder,
    disabled,
    invalid,
    onChange
  }) => {
    const Group = Object.fromEntries(rows)[addon];
    return <Group {...placeholder ? {
      placeholder
    } : {}} disabled={disabled} aria-invalid={invalid || undefined} onChange={onChange} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Prefixo R$ para valores monetários; a unidade também vai no aria-label."
      }
    }
  },
  decorators: narrow,
  render: () => <CurrencyGroup />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sufixo % para percentuais."
      }
    }
  },
  decorators: narrow,
  render: () => <PercentGroup />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ação acoplada: consultar o processo pelo número CNJ."
      }
    }
  },
  decorators: narrow,
  render: () => <ProcessLookupGroup />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ícone no início e indicador de carregamento no fim."
      }
    }
  },
  decorators: narrow,
  render: () => <LoadingSearchGroup />
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Foco, erro e desabilitado do controle se refletem na borda do grupo, em todas as composições."
      }
    }
  },
  render: () => <div className="grid grid-cols-[auto_repeat(4,300px)] items-center gap-x-6 gap-y-6 rounded-surface bg-background p-8">
      <span />
      {states.map(([label]) => <span key={label} className="text-center text-caption text-muted-foreground">{label}</span>)}
      {rows.map(([label, Group], row) => <div key={label} className="contents">
          <span className="text-right text-caption text-muted-foreground">{label}</span>
          {states.map(([state, props]) => <Group key={state} {...props} autoFocus={state === "focus" && row === 0} />)}
        </div>)}
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "InputGroupTextarea com addon block-end para contador e ação."
      }
    }
  },
  decorators: narrow,
  render: () => <InputGroup>
      <InputGroupTextarea placeholder="Resumo do parecer…" aria-label="Resumo do parecer" />
      <InputGroupAddon align="block-end" className="justify-between">
        <InputGroupText className="text-caption">0/500</InputGroupText>
        <InputGroupButton variant="default">Salvar</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
}`,...k.parameters?.docs?.source}}}})))()}j();export{w as ButtonEnd,x as Default,T as IconBoth,O as States,C as TextEnd,S as TextStart,k as WithTextarea,A as __namedExportsOrder,y as default};
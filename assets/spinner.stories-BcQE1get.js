import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./spinner-A6ETEnJO.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={title:`Componentes/Feedback/Spinner`,component:r,parameters:{docs:{description:{component:'Indicador de carregamento indeterminado (ícone `LoaderCircle` girando). Herda a cor do texto e mede 16 px por padrão; ajuste com `className` (`size-5`, `text-muted-foreground`).\n\n**Quando usar**: espera curta sem percentual conhecido (salvar, buscar, gerar resposta da IA). Com percentual, use Progress; para reservar o espaço de conteúdo, use Skeleton.\n\n**Acessibilidade**: tem `role="status"` e `aria-label="Carregando"`. Troque o rótulo quando o contexto pedir ("Gerando resumo").'}}},args:{"aria-label":`Carregando`,className:`size-4`},argTypes:{"aria-label":{control:`text`,description:`Nome acessível anunciado pelo leitor de tela.`},className:{control:`inline-radio`,options:[`size-4`,`size-5`,`size-6 text-muted-foreground`,`size-8 text-primary`],description:`Tamanho e cor via classes.`}}},o={},s={parameters:{docs:{description:{story:`16, 20 e 24 px. Herda a cor do texto ao redor.`}}},render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{}),(0,i.jsx)(r,{className:`size-5`}),(0,i.jsx)(r,{className:`size-6 text-muted-foreground`})]})},c={parameters:{docs:{description:{story:`Ao lado de um texto de status, com rótulo próprio.`}}},render:()=>(0,i.jsxs)(`span`,{className:`flex items-center gap-2 text-body-sm text-muted-foreground`,children:[(0,i.jsx)(r,{"aria-label":`Sincronizando com o PJe`}),`Sincronizando com o PJe…`]})},l=[`Default`,`Sizes`,`InText`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "16, 20 e 24 px. Herda a cor do texto ao redor."
      }
    }
  },
  render: () => <div className="flex items-center gap-6">
      <Spinner />
      <Spinner className="size-5" />
      <Spinner className="size-6 text-muted-foreground" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ao lado de um texto de status, com rótulo próprio."
      }
    }
  },
  render: () => <span className="flex items-center gap-2 text-body-sm text-muted-foreground">
      <Spinner aria-label="Sincronizando com o PJe" />
      Sincronizando com o PJe…
    </span>
}`,...c.parameters?.docs?.source}}}})))()}u();export{o as Default,c as InText,s as Sizes,l as __namedExportsOrder,a as default};
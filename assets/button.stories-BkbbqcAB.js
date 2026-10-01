import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./arrow-right-DzAblbI-.js";import{t as r}from"./plus-DR-VRBqS.js";import{t as i}from"./trash-0C4gm3qt.js";import{r as a,t as o}from"./button-BxLqnFN9.js";import{r as s}from"./icons.stories-CuLmnsRb.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{s(),a(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Componentes/Ações/Button`,component:o,parameters:{docs:{description:{component:'Dispara uma ação: salvar, enviar, abrir um fluxo. Pílula nas alturas 36 (`sm`), 44 (`default`) e 52 (`lg`), com versões quadradas só de ícone (`icon-sm`, `icon`, `icon-lg`).\n\n**Quando usar cada variante**\n- `default`: a ação principal da tela ou do bloco. Uma por área visível (ex.: "Novo processo").\n- `secondary` e `outline`: ações de apoio ao lado da principal (Cancelar, Ver processo).\n- `ghost`: baixa ênfase, em barras de ferramentas, linhas de tabela e cabeçalhos de card.\n- `destructive`: ação que apaga ou encerra algo. Confirme com Alert Dialog quando for irreversível.\n- `link`: ação com aparência de texto, dentro de parágrafos.\n\n**Quando não usar**\n- Navegar para outra página: use `asChild` com `<a>` (ou o link do roteador) para manter a semântica de link.\n- Ligar e desligar um estado: use Toggle. Várias ações relacionadas coladas: use Button Group.\n\n**Props próprias**\n- `loading`: mostra o spinner, desabilita o botão e define `aria-busy`. Mantenha um rótulo que descreva o que acontece ("Salvando").\n- `asChild`: renderiza o filho como raiz, com os mesmos estilos. Nesse modo, `disabled` e o spinner de `loading` não são aplicados.\n\n**Acessibilidade**\n- Botão só de ícone exige `aria-label` com a ação ("Excluir prazo", não "Lixeira").\n- Ícones `lucide-react` recebem 16px automaticamente; não é preciso definir `size-4`.'}}},args:{children:`Button`,variant:`default`,size:`default`,loading:!1,disabled:!1,onClick:l()},argTypes:{children:{control:`text`,description:`Rótulo do botão.`},variant:{control:`inline-radio`,options:[`default`,`destructive`,`outline`,`secondary`,`ghost`,`link`],description:`Ênfase visual.`},size:{control:`inline-radio`,options:[`sm`,`default`,`lg`,`icon-sm`,`icon`,`icon-lg`],description:`Altura (36/44/52) ou quadrado só de ícone.`},loading:{control:`boolean`,description:`Mostra o spinner, desabilita e define aria-busy.`},disabled:{control:`boolean`,description:`Desabilita o botão.`},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`],description:`Tipo nativo do botão.`},asChild:{table:{disable:!0}},className:{table:{disable:!0}},onClick:{table:{category:`Eventos`}}}},d={},f={parameters:{docs:{description:{story:`Da maior para a menor ênfase. Use uma só variante default por área da tela.`}}},render:e=>(0,c.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,c.jsx)(o,{...e,children:`Default`}),(0,c.jsx)(o,{...e,variant:`destructive`,children:`Destructive`}),(0,c.jsx)(o,{...e,variant:`outline`,children:`Outline`}),(0,c.jsx)(o,{...e,variant:`secondary`,children:`Secondary`}),(0,c.jsx)(o,{...e,variant:`ghost`,children:`Ghost`}),(0,c.jsx)(o,{...e,variant:`link`,children:`Link`})]})},p={render:e=>(0,c.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,c.jsx)(o,{...e,size:`sm`,children:`Small`}),(0,c.jsx)(o,{...e,children:`Default`}),(0,c.jsx)(o,{...e,size:`lg`,children:`Large`})]})},m={render:e=>(0,c.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,c.jsxs)(o,{...e,children:[(0,c.jsx)(r,{}),` Novo processo`]}),(0,c.jsxs)(o,{...e,variant:`outline`,children:[`Continuar `,(0,c.jsx)(n,{})]})]})},h={parameters:{docs:{description:{story:`Tamanhos quadrados icon-sm, icon e icon-lg. Sempre com aria-label.`}}},render:()=>(0,c.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,c.jsx)(o,{size:`icon-sm`,"aria-label":`Adicionar`,children:(0,c.jsx)(r,{})}),(0,c.jsx)(o,{size:`icon`,variant:`outline`,"aria-label":`Adicionar`,children:(0,c.jsx)(r,{})}),(0,c.jsx)(o,{size:`icon-lg`,variant:`secondary`,"aria-label":`Excluir`,children:(0,c.jsx)(i,{})})]})},g={parameters:{docs:{description:{story:`Durante o envio: spinner, botão desabilitado e aria-busy.`}}},args:{loading:!0,children:`Salvando`}},_={args:{disabled:!0}},v={parameters:{docs:{description:{story:`Com asChild, o Button renderiza o <a> filho: semântica de link com o visual de botão.`}}},render:()=>(0,c.jsx)(o,{asChild:!0,variant:`outline`,children:(0,c.jsx)(`a`,{href:`#processos`,children:`Ver processos`})})},y=[`Default`,`Variants`,`Sizes`,`WithIcon`,`IconOnly`,`Loading`,`Disabled`,`AsLink`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Da maior para a menor ênfase. Use uma só variante default por área da tela."
      }
    }
  },
  render: args => <div className="flex flex-wrap items-center gap-4">
      <Button {...args}>Default</Button>
      <Button {...args} variant="destructive">Destructive</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <Button {...args} size="sm">Small</Button>
      <Button {...args}>Default</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <Button {...args}><Plus /> Novo processo</Button>
      <Button {...args} variant="outline">Continuar <ArrowRight /></Button>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Tamanhos quadrados icon-sm, icon e icon-lg. Sempre com aria-label."
      }
    }
  },
  render: () => <div className="flex items-center gap-4">
      <Button size="icon-sm" aria-label="Adicionar"><Plus /></Button>
      <Button size="icon" variant="outline" aria-label="Adicionar"><Plus /></Button>
      <Button size="icon-lg" variant="secondary" aria-label="Excluir"><Trash2 /></Button>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Durante o envio: spinner, botão desabilitado e aria-busy."
      }
    }
  },
  args: {
    loading: true,
    children: "Salvando"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Com asChild, o Button renderiza o <a> filho: semântica de link com o visual de botão."
      }
    }
  },
  render: () => <Button asChild variant="outline">
      <a href="#processos">Ver processos</a>
    </Button>
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as AsLink,d as Default,_ as Disabled,h as IconOnly,g as Loading,p as Sizes,f as Variants,m as WithIcon,y as __namedExportsOrder,u as default};
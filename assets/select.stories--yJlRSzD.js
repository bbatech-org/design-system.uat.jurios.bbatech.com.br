import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./select-CmrIsZP1.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{a(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Componentes/Formulários/Select`,component:u,parameters:{docs:{description:{component:'Escolha única em lista suspensa (Radix), com o visual de campo do DS.\n\n**Select, Native Select, Combobox ou Radio Group**\n- Select: lista curta e fixa (até ~10 opções), sem busca. Ex.: área do direito, tipo de audiência.\n- Native Select: quando o seletor nativo do sistema é preferível (mobile, formulários simples). Ex.: UF.\n- Combobox: listas longas ou com busca. Ex.: clientes, comarcas, varas, tribunais.\n- Radio Group: poucas opções (2 a 5) que o usuário deve ver todas de uma vez. Ex.: pessoa física ou jurídica.\n\n**Anatomia**\n- `Select`: raiz. `value`/`defaultValue`/`onValueChange`, `disabled`, `required`, `name`, `defaultOpen`.\n- `SelectTrigger`: gatilho no formato de campo; `size` `default` (48) ou `sm` (40).\n- `SelectValue`: valor escolhido ou `placeholder`.\n- `SelectContent`: lista flutuante (`position="popper"` por padrão, na largura do gatilho). As setas de rolagem aparecem sozinhas em listas longas.\n- `SelectItem`: opção. `value` não pode ser string vazia; para "nenhum", use o `placeholder`.\n- `SelectGroup`, `SelectLabel` e `SelectSeparator`: agrupam opções.\n- `selectTriggerVariants`: classes do gatilho, reaproveitadas por Native Select, Date Picker e Combobox.\n\n```tsx\n<Label htmlFor="area">Área do direito</Label>\n<Select value={area} onValueChange={setArea}>\n  <SelectTrigger id="area">\n    <SelectValue placeholder="Selecione a área" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="civel">Cível</SelectItem>\n    <SelectItem value="trabalhista">Trabalhista</SelectItem>\n  </SelectContent>\n</Select>\n```\n\n**Acessibilidade**\n- O gatilho precisa de nome: Label com `htmlFor` apontando para o `id` do `SelectTrigger`, ou `aria-label`.\n- Com Form, o `FormControl` envolve o `SelectTrigger`, não o `Select`.\n'}}},decorators:[e=>(0,d.jsx)(`div`,{className:`w-72`,children:(0,d.jsx)(e,{})})],args:{placeholder:`Selecione a área`,size:`default`,disabled:!1,required:!1,invalid:!1,onValueChange:f(),onOpenChange:f()},argTypes:{placeholder:{control:`text`,description:`Texto do SelectValue sem seleção.`},size:{control:`inline-radio`,options:[`sm`,`default`],description:`Altura do SelectTrigger: 40 (sm) ou 48.`},defaultValue:{control:`select`,options:[`Cível`,`Trabalhista`,`Tributário`,`Penal`],description:`Opção selecionada inicialmente.`},open:{control:`boolean`,description:`Abre a lista (controlado).`},disabled:{control:`boolean`,description:`Desabilita o select.`},required:{control:`boolean`,description:`Obrigatório no formulário.`},invalid:{control:`boolean`,description:`aria-invalid no SelectTrigger.`},name:{control:`text`,description:`Nome enviado no formulário.`},value:{table:{disable:!0}},defaultOpen:{table:{disable:!0}},dir:{table:{disable:!0}},autoComplete:{table:{disable:!0}},form:{table:{disable:!0}},onValueChange:{table:{category:`Eventos`}},onOpenChange:{table:{category:`Eventos`}}}},m=[`Cível`,`Trabalhista`,`Tributário`,`Penal`],h=()=>(0,d.jsx)(o,{children:(0,d.jsxs)(c,{children:[(0,d.jsx)(n,{children:`Área do direito`}),m.map(e=>(0,d.jsx)(i,{value:e,children:e},e)),(0,d.jsx)(i,{value:`Previdenciário`,disabled:!0,children:`Previdenciário`})]})}),g={parameters:{layout:`padded`},decorators:[e=>(0,d.jsx)(`div`,{className:`h-80`,children:(0,d.jsx)(e,{})})],render:({placeholder:e,size:t,invalid:n,...i})=>(0,d.jsxs)(u,{...i,children:[(0,d.jsx)(l,{size:t,"aria-invalid":n||void 0,"aria-label":`Área do direito`,children:(0,d.jsx)(r,{placeholder:e})}),(0,d.jsx)(h,{})]},String(i.defaultValue))},_={parameters:{layout:`padded`,docs:{description:{story:`Lista aberta, com a opção selecionada marcada e uma opção desabilitada.`}}},decorators:[e=>(0,d.jsx)(`div`,{className:`h-80`,children:(0,d.jsx)(e,{})})],render:()=>(0,d.jsxs)(u,{defaultValue:`Cível`,defaultOpen:!0,children:[(0,d.jsx)(l,{"aria-label":`Área do direito`,children:(0,d.jsx)(r,{})}),(0,d.jsx)(h,{})]})},v={parameters:{docs:{description:{story:`Preenchido, pequeno (sm), inválido e desabilitado.`}}},render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsxs)(u,{defaultValue:`Cível`,children:[(0,d.jsx)(l,{"aria-label":`Preenchido`,children:(0,d.jsx)(r,{})}),(0,d.jsx)(h,{})]}),(0,d.jsxs)(u,{defaultValue:`Cível`,children:[(0,d.jsx)(l,{size:`sm`,"aria-label":`Pequeno`,children:(0,d.jsx)(r,{})}),(0,d.jsx)(h,{})]}),(0,d.jsxs)(u,{defaultValue:`Cível`,children:[(0,d.jsx)(l,{"aria-invalid":!0,"aria-label":`Inválido`,children:(0,d.jsx)(r,{})}),(0,d.jsx)(h,{})]}),(0,d.jsxs)(u,{disabled:!0,children:[(0,d.jsx)(l,{"aria-label":`Desabilitado`,children:(0,d.jsx)(r,{placeholder:`Selecione a área`})}),(0,d.jsx)(h,{})]})]})},y={"Justiça Estadual":[`TJSP`,`TJRJ`,`TJMG`,`TJRS`,`TJPR`,`TJSC`,`TJBA`,`TJPE`],"Justiça Federal":[`TRF1`,`TRF2`,`TRF3`,`TRF4`,`TRF5`,`TRF6`],"Justiça do Trabalho":[`TRT2`,`TRT15`,`TST`]},b={parameters:{layout:`padded`},decorators:[e=>(0,d.jsx)(`div`,{className:`h-96`,children:(0,d.jsx)(e,{})})],render:()=>(0,d.jsxs)(u,{defaultValue:`TRF3`,defaultOpen:!0,children:[(0,d.jsx)(l,{"aria-label":`Tribunal`,children:(0,d.jsx)(r,{})}),(0,d.jsx)(o,{className:`max-h-72`,children:Object.entries(y).map(([e,t],r)=>(0,d.jsxs)(c,{children:[r>0&&(0,d.jsx)(s,{}),(0,d.jsx)(n,{children:e}),t.map(e=>(0,d.jsx)(i,{value:e,children:e},e))]},e))})]})},x=[`Default`,`Open`,`States`,`LongList`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  decorators: [Story => <div className="h-80"><Story /></div>],
  render: ({
    placeholder,
    size,
    invalid,
    ...args
  }) => <Select key={String(args.defaultValue)} {...args}>
      <SelectTrigger size={size} aria-invalid={invalid || undefined} aria-label="Área do direito"><SelectValue placeholder={placeholder} /></SelectTrigger>
      <Options />
    </Select>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Lista aberta, com a opção selecionada marcada e uma opção desabilitada."
      }
    }
  },
  decorators: [Story => <div className="h-80"><Story /></div>],
  render: () => <Select defaultValue="Cível" defaultOpen>
      <SelectTrigger aria-label="Área do direito"><SelectValue /></SelectTrigger>
      <Options />
    </Select>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Preenchido, pequeno (sm), inválido e desabilitado."
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <Select defaultValue="Cível">
        <SelectTrigger aria-label="Preenchido"><SelectValue /></SelectTrigger>
        <Options />
      </Select>
      <Select defaultValue="Cível">
        <SelectTrigger size="sm" aria-label="Pequeno"><SelectValue /></SelectTrigger>
        <Options />
      </Select>
      <Select defaultValue="Cível">
        <SelectTrigger aria-invalid aria-label="Inválido"><SelectValue /></SelectTrigger>
        <Options />
      </Select>
      <Select disabled>
        <SelectTrigger aria-label="Desabilitado"><SelectValue placeholder="Selecione a área" /></SelectTrigger>
        <Options />
      </Select>
    </div>
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  decorators: [Story => <div className="h-96"><Story /></div>],
  render: () => <Select defaultValue="TRF3" defaultOpen>
      <SelectTrigger aria-label="Tribunal"><SelectValue /></SelectTrigger>
      <SelectContent className="max-h-72">
        {Object.entries(tribunais).map(([grupo, siglas], index) => <SelectGroup key={grupo}>
            {index > 0 && <SelectSeparator />}
            <SelectLabel>{grupo}</SelectLabel>
            {siglas.map(sigla => <SelectItem key={sigla} value={sigla}>{sigla}</SelectItem>)}
          </SelectGroup>)}
      </SelectContent>
    </Select>
}`,...b.parameters?.docs?.source},description:{story:`Lista longa com grupos e separadores: as setas de rolagem aparecem nas bordas.`,...b.parameters?.docs?.description}}}})))()}S();export{g as Default,b as LongList,_ as Open,v as States,x as __namedExportsOrder,p as default};
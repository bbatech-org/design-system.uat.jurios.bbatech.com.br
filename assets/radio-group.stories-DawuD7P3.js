import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./label-Jxxk7pzc.js";import{n as i,r as a,t as o}from"./radio-group-BcUdi1qE.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Componentes/Formulários/Radio Group`,component:o,parameters:{docs:{description:{component:'Grupo de opções mutuamente exclusivas (Radix), todas visíveis ao mesmo tempo.\n\n**Select, Native Select, Combobox ou Radio Group**\n- Select: lista curta e fixa (até ~10 opções), sem busca. Ex.: área do direito, tipo de audiência.\n- Native Select: quando o seletor nativo do sistema é preferível (mobile, formulários simples). Ex.: UF.\n- Combobox: listas longas ou com busca. Ex.: clientes, comarcas, varas, tribunais.\n- Radio Group: poucas opções (2 a 5) que o usuário deve ver todas de uma vez. Ex.: pessoa física ou jurídica.\n\n**Anatomia**\n- `RadioGroup`: raiz. `value`/`defaultValue`/`onValueChange`, `orientation`, `disabled`, `required`, `name`.\n- `RadioGroupItem`: uma opção (`value`, `disabled`), sempre com Label ao lado.\n\n```tsx\n<FieldSet>\n  <FieldLegend variant="label">Tipo de cliente</FieldLegend>\n  <RadioGroup defaultValue="pf">\n    <Field orientation="horizontal">\n      <RadioGroupItem id="pf" value="pf" />\n      <FieldLabel htmlFor="pf">Pessoa física</FieldLabel>\n    </Field>\n    <Field orientation="horizontal">\n      <RadioGroupItem id="pj" value="pj" />\n      <FieldLabel htmlFor="pj">Pessoa jurídica</FieldLabel>\n    </Field>\n  </RadioGroup>\n</FieldSet>\n```\n\n**Acessibilidade**\n- Dê nome ao grupo: FieldSet com FieldLegend, ou `aria-label`/`aria-labelledby` no RadioGroup.\n- Teclado: Tab entra no grupo (na opção marcada) e as setas trocam a seleção.\n- Erro: `aria-invalid` no RadioGroup e nos itens; a mensagem fica fora do RadioGroup, ligada por `aria-describedby`.\n- Opção desabilitada continua visível para mostrar que existe, mas não se aplica.\n'}}},args:{defaultValue:`pf`,disabled:!1,required:!1,orientation:`vertical`,"aria-label":`Tipo de cliente`,onValueChange:c()},argTypes:{defaultValue:{control:`inline-radio`,options:[`pf`,`pj`,`estrangeiro`],description:`Opção marcada inicialmente.`},value:{control:`inline-radio`,options:[`pf`,`pj`,`estrangeiro`],description:`Valor controlado.`},disabled:{control:`boolean`,description:`Desabilita todas as opções.`},required:{control:`boolean`,description:`Obrigatório no formulário.`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`],description:`Direção das setas do teclado.`},"aria-label":{control:`text`,description:`Nome acessível do grupo.`},name:{control:`text`,description:`Nome enviado no formulário.`},asChild:{table:{disable:!0}},className:{table:{disable:!0}},onValueChange:{table:{category:`Eventos`}}}},u=[{value:`pf`,label:`Pessoa física`},{value:`pj`,label:`Pessoa jurídica`},{value:`estrangeiro`,label:`Estrangeiro`,disabled:!0}],d={render:e=>(0,s.jsx)(o,{...e,children:u.map(e=>(0,s.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,s.jsx)(i,{id:e.value,value:e.value,disabled:e.disabled}),(0,s.jsx)(r,{htmlFor:e.value,children:e.label})]},e.value))},e.defaultValue)},f={parameters:{docs:{description:{story:`orientation="horizontal" ajusta as setas do teclado; o layout em linha vem do className.`}}},args:{defaultValue:`mensal`,orientation:`horizontal`},render:e=>(0,s.jsx)(o,{...e,className:`flex gap-6`,children:[`mensal`,`anual`].map(e=>(0,s.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,s.jsx)(i,{id:e,value:e}),(0,s.jsx)(r,{htmlFor:e,className:`capitalize`,children:e})]},e))})},p={parameters:{docs:{description:{story:`aria-invalid no grupo e nos itens. A mensagem fica fora do radiogroup (que só deve conter os rádios) e é ligada a ele por aria-describedby.`}}},render:()=>(0,s.jsxs)(`div`,{className:`grid gap-3`,children:[(0,s.jsx)(o,{"aria-label":`Tipo de cliente`,"aria-required":!0,"aria-invalid":!0,"aria-describedby":`tipo-cliente-erro`,children:u.slice(0,2).map(e=>(0,s.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,s.jsx)(i,{id:`inv-${e.value}`,value:e.value,"aria-invalid":!0}),(0,s.jsx)(r,{htmlFor:`inv-${e.value}`,children:e.label})]},e.value))}),(0,s.jsx)(`p`,{id:`tipo-cliente-erro`,className:`text-body-sm text-destructive`,children:`Selecione o tipo de cliente.`})]})},m=[`Default`,`Horizontal`,`Invalid`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup key={args.defaultValue} {...args}>
      {options.map(option => <div key={option.value} className="flex items-center gap-2.5">
          <RadioGroupItem id={option.value} value={option.value} disabled={option.disabled} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>)}
    </RadioGroup>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "orientation=\\"horizontal\\" ajusta as setas do teclado; o layout em linha vem do className."
      }
    }
  },
  args: {
    defaultValue: "mensal",
    orientation: "horizontal"
  },
  render: args => <RadioGroup {...args} className="flex gap-6">
      {["mensal", "anual"].map(value => <div key={value} className="flex items-center gap-2.5">
          <RadioGroupItem id={value} value={value} />
          <Label htmlFor={value} className="capitalize">{value}</Label>
        </div>)}
    </RadioGroup>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "aria-invalid no grupo e nos itens. A mensagem fica fora do radiogroup (que só deve conter os rádios) e é ligada a ele por aria-describedby."
      }
    }
  },
  render: () => <div className="grid gap-3">
      <RadioGroup aria-label="Tipo de cliente" aria-required aria-invalid aria-describedby="tipo-cliente-erro">
        {options.slice(0, 2).map(option => <div key={option.value} className="flex items-center gap-2.5">
            <RadioGroupItem id={\`inv-\${option.value}\`} value={option.value} aria-invalid />
            <Label htmlFor={\`inv-\${option.value}\`}>{option.label}</Label>
          </div>)}
      </RadioGroup>
      <p id="tipo-cliente-erro" className="text-body-sm text-destructive">Selecione o tipo de cliente.</p>
    </div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{d as Default,f as Horizontal,p as Invalid,m as __namedExportsOrder,l as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./textarea-DPP1Urdp.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Componentes/Formulários/Textarea`,component:r,args:{placeholder:`Descreva o andamento…`,"aria-label":`Andamento`,disabled:!1,"aria-invalid":!1,onChange:a()},argTypes:{placeholder:{control:`text`,description:`Texto de exemplo quando vazio.`},defaultValue:{control:`text`,description:`Valor inicial (não controlado).`},rows:{control:{type:`range`,min:2,max:12,step:1},description:`Linhas visíveis.`},disabled:{control:`boolean`,description:`Desabilita o campo.`},readOnly:{control:`boolean`,description:`Somente leitura.`},required:{control:`boolean`,description:`Campo obrigatório (validação nativa).`},"aria-invalid":{control:`boolean`,description:`Estado de erro (borda destructive).`},"aria-label":{control:`text`,description:`Nome acessível quando não há Label.`},className:{table:{disable:!0}},onChange:{table:{category:`Eventos`}}},parameters:{docs:{description:{component:`Campo de texto multilinha, com os mesmos estados do Input. Altura mínima de 96; cresce com o conteúdo (\`field-sizing: content\`) e não tem redimensionamento manual.

**Quando usar**
- Observações, resumo do atendimento, descrição de andamento, notas internas.

**Quando não usar**
- Texto de uma linha: Input.
- Contador de caracteres ou ação no rodapé do campo: Input Group com \`InputGroupTextarea\`.

**Dicas**
- Limite de caracteres: valide no formulário (ex.: \`z.string().max(280)\`) e mostre o limite na descrição.
- Precisa de rótulo: Label, Field/Form ou \`aria-label\`.
`}}}},s=[e=>(0,i.jsx)(`div`,{className:`w-80`,children:(0,i.jsx)(e,{})})],c=`Cliente relata recebimento de citação em 12/09. Solicitar cópia integral dos autos.`,l={decorators:s,render:e=>(0,i.jsx)(r,{...e},String(e.defaultValue))},u={decorators:s,args:{defaultValue:c}},d={parameters:{docs:{description:{story:`Placeholder, preenchido, foco, inválido e desabilitado.`}}},render:e=>(0,i.jsx)(`div`,{className:`flex gap-6 rounded-surface bg-background p-8`,children:[{label:`placeholder`,props:{}},{label:`filled`,props:{defaultValue:c}},{label:`focus`,props:{defaultValue:c,autoFocus:!0}},{label:`invalid`,props:{defaultValue:c,"aria-invalid":!0}},{label:`disabled`,props:{disabled:!0}}].map(({label:t,props:n})=>(0,i.jsxs)(`div`,{className:`flex w-80 flex-col gap-3`,children:[(0,i.jsx)(`span`,{className:`text-center text-caption text-muted-foreground`,children:t}),(0,i.jsx)(r,{...e,...n})]},t))})},f={decorators:s,args:{defaultValue:c,"aria-invalid":!0}},p={decorators:s,args:{disabled:!0}},m=[`Default`,`Filled`,`States`,`Invalid`,`Disabled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  render: args => <Textarea key={String(args.defaultValue)} {...args} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    defaultValue: note
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Placeholder, preenchido, foco, inválido e desabilitado."
      }
    }
  },
  render: args => {
    const states = [{
      label: "placeholder",
      props: {}
    }, {
      label: "filled",
      props: {
        defaultValue: note
      }
    }, {
      label: "focus",
      props: {
        defaultValue: note,
        autoFocus: true
      }
    }, {
      label: "invalid",
      props: {
        defaultValue: note,
        "aria-invalid": true
      }
    }, {
      label: "disabled",
      props: {
        disabled: true
      }
    }];
    return <div className="flex gap-6 rounded-surface bg-background p-8">
        {states.map(({
        label,
        props
      }) => <div key={label} className="flex w-80 flex-col gap-3">
            <span className="text-center text-caption text-muted-foreground">{label}</span>
            <Textarea {...args} {...props} />
          </div>)}
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    defaultValue: note,
    "aria-invalid": true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{l as Default,p as Disabled,u as Filled,f as Invalid,d as States,m as __namedExportsOrder,o as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./label-Jxxk7pzc.js";import{n as i,t as a}from"./input-B-RpgP21.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{i(),n(),o=t(),s={title:`Componentes/Formulários/Label`,component:r,args:{children:`Nome do cliente`,required:!1},argTypes:{children:{control:`text`,description:`Texto do rótulo.`},required:{control:`boolean`,description:`Mostra o indicador visual de obrigatório.`},htmlFor:{control:`text`,description:`id do controle associado.`},asChild:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{docs:{description:{component:"Rótulo acessível de um controle de formulário (Radix Label). `required` mostra o asterisco, mas não substitui `aria-required` no controle. Dentro de Field ou Form, use `FieldLabel` ou `FormLabel`, que já ligam o rótulo ao campo.\n"}}}},c={},l={args:{required:!0}},u={render:e=>(0,o.jsxs)(`div`,{className:`grid grid-cols-[auto_auto_auto] items-center gap-x-10 gap-y-4 rounded-surface bg-card p-8`,children:[(0,o.jsx)(`span`,{}),(0,o.jsx)(`span`,{className:`text-center text-caption text-muted-foreground`,children:`default`}),(0,o.jsx)(`span`,{className:`text-center text-caption text-muted-foreground`,children:`disabled`}),[!1,!0].map(t=>(0,o.jsxs)(`div`,{className:`contents`,children:[(0,o.jsxs)(`span`,{className:`text-right text-caption text-muted-foreground`,children:[`required=`,String(t)]}),(0,o.jsx)(`div`,{className:`flex justify-center`,children:(0,o.jsx)(r,{...e,required:t})}),(0,o.jsx)(`div`,{"data-disabled":`true`,className:`group flex justify-center`,children:(0,o.jsx)(r,{...e,required:t})})]},String(t)))]})},d={parameters:{docs:{description:{story:`Ligação por htmlFor e id: clicar no rótulo foca o campo.`}}},render:()=>(0,o.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,o.jsx)(r,{htmlFor:`numero-processo`,required:!0,children:`Número do processo`}),(0,o.jsx)(a,{id:`numero-processo`,"aria-required":!0,className:`text-code`,placeholder:`0000000-00.0000.0.00.0000`})]})},f=[`Default`,`Required`,`States`,`WithControl`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid grid-cols-[auto_auto_auto] items-center gap-x-10 gap-y-4 rounded-surface bg-card p-8">
      <span />
      <span className="text-center text-caption text-muted-foreground">default</span>
      <span className="text-center text-caption text-muted-foreground">disabled</span>
      {[false, true].map(required => <div key={String(required)} className="contents">
          <span className="text-right text-caption text-muted-foreground">required={String(required)}</span>
          <div className="flex justify-center"><Label {...args} required={required} /></div>
          <div data-disabled="true" className="group flex justify-center"><Label {...args} required={required} /></div>
        </div>)}
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ligação por htmlFor e id: clicar no rótulo foca o campo."
      }
    }
  },
  render: () => <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="numero-processo" required>Número do processo</Label>
      <Input id="numero-processo" aria-required className="text-code" placeholder="0000000-00.0000.0.00.0000" />
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{c as Default,l as Required,u as States,d as WithControl,f as __namedExportsOrder,s as default};
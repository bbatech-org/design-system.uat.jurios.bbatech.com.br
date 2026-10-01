import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./input-B-RpgP21.js";var i,a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Componentes/Formulários/Input`,component:r,args:{placeholder:`Digite o nome`,"aria-label":`Nome do cliente`,size:`default`,type:`text`,disabled:!1,"aria-invalid":!1,onChange:a()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`default`],description:`Altura 40 (sm) ou 48.`},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`search`,`date`,`file`],description:`Tipo nativo do campo.`},placeholder:{control:`text`,description:`Texto de exemplo quando vazio.`},defaultValue:{control:`text`,description:`Valor inicial (não controlado).`},disabled:{control:`boolean`,description:`Desabilita o campo.`},readOnly:{control:`boolean`,description:`Somente leitura.`},required:{control:`boolean`,description:`Campo obrigatório (validação nativa).`},"aria-invalid":{control:`boolean`,description:`Estado de erro (borda destructive).`},"aria-label":{control:`text`,description:`Nome acessível quando não há Label.`},className:{table:{disable:!0}},onChange:{table:{category:`Eventos`}}},parameters:{docs:{description:{component:'Campo de texto de uma linha. Altura 48 (`size="default"`) ou 40 (`size="sm"`).\n\n**Quando usar**\n- Textos curtos: nome, e-mail, CPF/CNPJ, número da OAB, número do processo CNJ.\n\n**Quando não usar**\n- Texto longo: Textarea.\n- Ícone, prefixo (R$), sufixo (%) ou botão no campo: Input Group.\n- Código de verificação: Input OTP. Data: Date Picker. Escolha em lista: Select ou Combobox.\n\n**Dicas**\n- Use `type`, `inputMode` e `autoComplete` adequados: `type="email"`, `inputMode="numeric"` para CPF e número CNJ, `autoComplete="name"`.\n- Números CNJ e OAB ficam melhor com `className="text-code"`.\n- O placeholder é um exemplo de formato e não substitui o rótulo: use Label (ou Field/Form) ou `aria-label`.\n- Erro: `aria-invalid` pinta a borda; a mensagem vem com FieldError ou FormMessage.\n'}}}},s=[e=>(0,i.jsx)(`div`,{className:`w-80`,children:(0,i.jsx)(e,{})})],c={decorators:s,render:e=>(0,i.jsx)(r,{...e},String(e.defaultValue))},l={decorators:s,args:{defaultValue:`Maria Souza Advogados`}},u={parameters:{docs:{description:{story:`Placeholder, preenchido, foco, inválido e desabilitado.`}}},render:e=>(0,i.jsx)(`div`,{className:`flex gap-6 rounded-surface bg-background p-8`,children:[{label:`placeholder`,props:{}},{label:`filled`,props:{defaultValue:`Maria Souza Advogados`}},{label:`focus`,props:{defaultValue:`Maria Souza Advogados`,autoFocus:!0}},{label:`invalid`,props:{defaultValue:`Maria Souza Advogados`,"aria-invalid":!0}},{label:`disabled`,props:{disabled:!0}}].map(({label:t,props:n})=>(0,i.jsxs)(`div`,{className:`flex w-[280px] flex-col gap-3`,children:[(0,i.jsx)(`span`,{className:`text-center text-caption text-muted-foreground`,children:t}),(0,i.jsx)(r,{...e,...n})]},t))})},d={decorators:s,render:e=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,i.jsx)(r,{...e,size:`sm`,placeholder:`Pequeno (40)`}),(0,i.jsx)(r,{...e,placeholder:`Padrão (48)`})]})},f={parameters:{docs:{description:{story:`Número CNJ em fonte mono (text-code) e teclado numérico.`}}},decorators:s,name:`Número de processo (CNJ)`,args:{"aria-label":`Número do processo`,placeholder:`NNNNNNN-DD.AAAA.J.TR.OOOO`,defaultValue:`1002345-67.2026.8.26.0100`,inputMode:`numeric`,className:`text-code`}},p={decorators:s,args:{defaultValue:`123.456.789-0`,"aria-invalid":!0}},m={decorators:s,args:{disabled:!0}},h={parameters:{docs:{description:{story:`type="file" com o botão nativo no estilo do DS.`}}},decorators:s,args:{type:`file`,"aria-label":`Anexar petição`}},g=[`Default`,`Filled`,`States`,`Sizes`,`ProcessNumber`,`Invalid`,`Disabled`,`File`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  render: args => <Input key={String(args.defaultValue)} {...args} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    defaultValue: "Maria Souza Advogados"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
        defaultValue: "Maria Souza Advogados"
      }
    }, {
      label: "focus",
      props: {
        defaultValue: "Maria Souza Advogados",
        autoFocus: true
      }
    }, {
      label: "invalid",
      props: {
        defaultValue: "Maria Souza Advogados",
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
      }) => <div key={label} className="flex w-[280px] flex-col gap-3">
            <span className="text-center text-caption text-muted-foreground">{label}</span>
            <Input {...args} {...props} />
          </div>)}
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  render: args => <div className="flex flex-col gap-4">
      <Input {...args} size="sm" placeholder="Pequeno (40)" />
      <Input {...args} placeholder="Padrão (48)" />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Número CNJ em fonte mono (text-code) e teclado numérico."
      }
    }
  },
  decorators: narrow,
  name: "Número de processo (CNJ)",
  args: {
    "aria-label": "Número do processo",
    placeholder: "NNNNNNN-DD.AAAA.J.TR.OOOO",
    defaultValue: "1002345-67.2026.8.26.0100",
    inputMode: "numeric",
    className: "text-code"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    defaultValue: "123.456.789-0",
    "aria-invalid": true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: narrow,
  args: {
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "type=\\"file\\" com o botão nativo no estilo do DS."
      }
    }
  },
  decorators: narrow,
  args: {
    type: "file",
    "aria-label": "Anexar petição"
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{c as Default,m as Disabled,h as File,l as Filled,p as Invalid,f as ProcessNumber,d as Sizes,u as States,g as __namedExportsOrder,o as default};
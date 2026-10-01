import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,o as r,r as i,t as a,u as o}from"./field-Da4NzDRc.js";import{n as s,t as c}from"./password-input-CQ7IBoWE.js";var l,u,d,f,p,m,h;function g(){return(g=e((()=>{o(),s(),l=t(),u={title:`Componentes/Formulários/Password Input`,component:c,parameters:{docs:{description:{component:'Campo de senha com botão de olho para mostrar ou ocultar o que foi digitado. Reduz erros de digitação no login, na troca de senha e no cadastro, sem abrir mão do campo `type="password"` por padrão.\n\n**Quando usar**\n- Login, criação e troca de senha, senha de certificado digital (A1), PIN de token.\n\n**Quando não usar**\n- Código de verificação (MFA): use InputOTP.\n- Dados sensíveis exibidos (valores, CPF/CNPJ): use SensitiveValue (Componentes/Exibição de dados).\n\n**Anatomia**\n- `InputGroup` com `InputGroupInput` (`type` alterna entre `password` e `text`) e `InputGroupButton` `ghost` `icon-sm` com Eye/EyeOff no fim.\n- Props do Input (`id`, `autoComplete`, `aria-invalid`, `disabled`…) vão para o input; `groupClassName` estiliza o contêiner.\n- Visibilidade: `defaultVisible`, ou controlada com `visible` e `onVisibleChange`. Rótulos do botão em `showLabel` e `hideLabel`.\n\n```tsx\n<Field>\n  <FieldLabel htmlFor="senha" required>Senha</FieldLabel>\n  <PasswordInput id="senha" autoComplete="current-password" required />\n</Field>\n```\n\n**Acessibilidade**\n- O botão tem `aria-pressed`, `aria-controls` apontando para o campo e rótulo que diz a ação ("Mostrar senha" / "Ocultar senha").\n- Use `autoComplete="current-password"` (padrão) no login e `new-password` no cadastro, para gerenciadores de senha.\n- O botão fica na ordem de Tab logo depois do campo; desabilitar o campo desabilita o botão.\n'}}},args:{"aria-label":`Senha`,defaultValue:`jurios-2026`,defaultVisible:!1,disabled:!1,"aria-invalid":!1,showLabel:`Mostrar senha`,hideLabel:`Ocultar senha`},argTypes:{autoComplete:{control:`inline-radio`,options:[`current-password`,`new-password`]}},decorators:[e=>(0,l.jsx)(`div`,{className:`w-[320px]`,children:(0,l.jsx)(e,{})})]},d={render:({defaultVisible:e,...t})=>(0,l.jsx)(c,{defaultVisible:e,...t},String(e))},f={parameters:{docs:{description:{story:"Senha visível (`defaultVisible`)."}}},args:{defaultVisible:!0}},p={parameters:{docs:{description:{story:"Com Field, rótulo, descrição e `new-password` no cadastro."}}},render:e=>(0,l.jsxs)(a,{children:[(0,l.jsx)(r,{htmlFor:`nova-senha`,required:!0,children:`Nova senha`}),(0,l.jsx)(c,{...e,id:`nova-senha`,"aria-label":void 0,autoComplete:`new-password`,"aria-describedby":`nova-senha-ajuda`,required:!0}),(0,l.jsx)(i,{id:`nova-senha-ajuda`,children:`Mínimo de 8 caracteres, com letras e números.`})]})},m={parameters:{docs:{description:{story:`Erro e desabilitado.`}}},render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,l.jsxs)(a,{"data-invalid":!0,children:[(0,l.jsx)(r,{htmlFor:`senha-erro`,children:`Senha`}),(0,l.jsx)(c,{id:`senha-erro`,defaultValue:`123`,"aria-invalid":!0,"aria-describedby":`senha-erro-msg`}),(0,l.jsx)(n,{id:`senha-erro-msg`,children:`A senha precisa ter pelo menos 8 caracteres.`})]}),(0,l.jsxs)(a,{"data-disabled":!0,children:[(0,l.jsx)(r,{htmlFor:`senha-desabilitada`,children:`Senha do certificado A1`}),(0,l.jsx)(c,{id:`senha-desabilitada`,defaultValue:`certificado`,disabled:!0})]})]})},h=[`Default`,`Visible`,`WithField`,`States`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ({
    defaultVisible,
    ...args
  }) => <PasswordInput key={String(defaultVisible)} defaultVisible={defaultVisible} {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Senha visível (\`defaultVisible\`)."
      }
    }
  },
  args: {
    defaultVisible: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Com Field, rótulo, descrição e \`new-password\` no cadastro."
      }
    }
  },
  render: args => <Field>
      <FieldLabel htmlFor="nova-senha" required>
        Nova senha
      </FieldLabel>
      <PasswordInput {...args} id="nova-senha" aria-label={undefined} autoComplete="new-password" aria-describedby="nova-senha-ajuda" required />
      <FieldDescription id="nova-senha-ajuda">Mínimo de 8 caracteres, com letras e números.</FieldDescription>
    </Field>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Erro e desabilitado."
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <Field data-invalid>
        <FieldLabel htmlFor="senha-erro">Senha</FieldLabel>
        <PasswordInput id="senha-erro" defaultValue="123" aria-invalid aria-describedby="senha-erro-msg" />
        <FieldError id="senha-erro-msg">A senha precisa ter pelo menos 8 caracteres.</FieldError>
      </Field>
      <Field data-disabled>
        <FieldLabel htmlFor="senha-desabilitada">Senha do certificado A1</FieldLabel>
        <PasswordInput id="senha-desabilitada" defaultValue="certificado" disabled />
      </Field>
    </div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{d as Default,m as States,f as Visible,p as WithField,h as __namedExportsOrder,u as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./separator-8GCBmLin.js";import{r as i,t as a}from"./button-BxLqnFN9.js";import{n as o,t as s}from"./input-B-RpgP21.js";import{o as c,t as l,u}from"./field-Da4NzDRc.js";import{a as d,i as f,n as p,r as m,t as h}from"./auth-layout-DkZjeGaZ.js";function g(){return(0,_.jsxs)(`form`,{className:`flex flex-col gap-6`,onSubmit:e=>e.preventDefault(),children:[(0,_.jsxs)(m,{children:[(0,_.jsx)(f,{children:`Entrar no JuriOS`}),(0,_.jsx)(p,{children:`Use o e-mail cadastrado pelo seu escritório.`})]}),(0,_.jsxs)(l,{children:[(0,_.jsx)(c,{htmlFor:`login-email`,required:!0,children:`E-mail`}),(0,_.jsx)(s,{id:`login-email`,type:`email`,autoComplete:`email`,defaultValue:`carolina@bbatech.com.br`,required:!0})]}),(0,_.jsxs)(l,{children:[(0,_.jsx)(c,{htmlFor:`login-senha`,required:!0,children:`Senha`}),(0,_.jsx)(s,{id:`login-senha`,type:`password`,autoComplete:`current-password`,defaultValue:`prazo-2026`,required:!0})]}),(0,_.jsx)(a,{type:`submit`,size:`lg`,children:`Entrar`}),(0,_.jsx)(r,{children:`ou`}),(0,_.jsx)(a,{type:`button`,variant:`outline`,children:`Entrar com SSO do escritório`}),(0,_.jsx)(`a`,{href:`#recuperar-senha`,className:`w-fit text-label-md text-foreground hover:underline`,children:`Esqueceu a senha?`})]})}var _,v,y,b,x;function S(){return(S=e((()=>{i(),u(),o(),n(),d(),_=t(),v={title:`Componentes/Layout/Auth Layout`,component:h,parameters:{docs:{description:{component:'Layout das telas de autenticação (login, MFA, cadastro, recuperação de senha). Recebe o formulário em `children` e cuida do logo, do painel de marca e do rodapé legal.\n\n**Variantes**\n- `split` (padrão): painel de marca em `brand` à esquerda, com `headline`, `description` e `footer`, e o formulário à direita (até 430px). Abaixo de `lg`, o painel some e o logo e o rodapé aparecem acima e abaixo do formulário.\n- `centered`: logo, cartão central (até 480px) e rodapé sobre `background`. Para fluxos curtos, como MFA, redefinição de senha e aceite de convite. Ignora `headline` e `description`.\n\n**Quando não usar**\n- Telas logadas: use App Shell.\n- Reautenticação dentro do app (confirmar senha antes de uma ação sensível): use Dialog.\n\n**Anatomia**\n- `AuthLayout`: layout (`variant`, `headline`, `description`, `footer`).\n- `AuthLayoutHeader`: bloco de título e descrição do formulário.\n- `AuthLayoutTitle`: `h1` da tela.\n- `AuthLayoutDescription`: instrução curta abaixo do título.\n\n```tsx\n<AuthLayout headline="Gestão jurídica com precisão de prazo." footer="© 2026 BBA Tech">\n  <form>\n    <AuthLayoutHeader>\n      <AuthLayoutTitle>Entrar no JuriOS</AuthLayoutTitle>\n      <AuthLayoutDescription>Use o e-mail cadastrado pelo seu escritório.</AuthLayoutDescription>\n    </AuthLayoutHeader>\n    {/* Field + Input, Button */}\n  </form>\n</AuthLayout>\n```\n\n**Acessibilidade**\n- O layout já renderiza o `<main>`: não coloque outro dentro.\n- Um único `h1` por tela (`AuthLayoutTitle`).\n- Campos com rótulo visível (Field e FieldLabel) e `autoComplete` correto (`email`, `current-password`, `one-time-code` no MFA). Veja o padrão Login MFA.'}},layout:`fullscreen`},args:{variant:`split`,headline:`Gestão jurídica com precisão de prazo.`,description:`Processos, prazos, clientes e financeiro do escritório em um só lugar.`,footer:`© 2026 BBA Tech · Termos · Privacidade`},argTypes:{variant:{control:`inline-radio`,options:[`split`,`centered`],description:"`split`: painel de marca + formulário; `centered`: cartão central."},headline:{control:`text`,description:"Frase de destaque do painel de marca (só em `split`)."},description:{control:`text`,description:`Texto de apoio abaixo da frase de destaque.`},footer:{control:`text`,description:`Rodapé (copyright, links legais).`},className:{table:{disable:!0}},children:{table:{disable:!0}}}},y={parameters:{docs:{description:{story:`split: painel de marca e formulário de login.`}}},render:e=>(0,_.jsx)(h,{...e,children:(0,_.jsx)(g,{})})},b={parameters:{docs:{description:{story:`centered: cartão central, para fluxos curtos.`}}},args:{variant:`centered`},render:e=>(0,_.jsx)(h,{...e,children:(0,_.jsx)(g,{})})},x=[`Default`,`Centered`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "split: painel de marca e formulário de login."
      }
    }
  },
  render: args => <AuthLayout {...args}>
      <LoginForm />
    </AuthLayout>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "centered: cartão central, para fluxos curtos."
      }
    }
  },
  args: {
    variant: "centered"
  },
  render: args => <AuthLayout {...args}>
      <LoginForm />
    </AuthLayout>
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Centered,y as Default,x as __namedExportsOrder,v as default};
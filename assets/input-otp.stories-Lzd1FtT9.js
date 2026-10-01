import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./input-otp-Brn6kw6k.js";function u(e){return(0,f.jsx)(l,{maxLength:6,pattern:o,"aria-label":`Código de verificação`,...e,children:(0,f.jsx)(d,{})})}function d(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(a,{children:[(0,f.jsx)(i,{index:0}),(0,f.jsx)(i,{index:1}),(0,f.jsx)(i,{index:2})]}),(0,f.jsx)(s,{}),(0,f.jsxs)(a,{children:[(0,f.jsx)(i,{index:3}),(0,f.jsx)(i,{index:4}),(0,f.jsx)(i,{index:5})]})]})}var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),n(),f=t(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={digits:o,alphanumeric:c},h={title:`Componentes/Formulários/Input OTP`,component:l,args:{maxLength:6,children:null,charset:`digits`,separator:!0,defaultValue:``,disabled:!1,"aria-invalid":!1,onComplete:p()},argTypes:{maxLength:{control:{type:`range`,min:4,max:8,step:1},description:`Quantidade de caracteres (e de slots).`},charset:{control:`inline-radio`,options:[`digits`,`alphanumeric`],description:`Caracteres aceitos (pattern): só números ou letras e números.`},pattern:{table:{disable:!0}},children:{table:{disable:!0}},className:{table:{disable:!0}},containerClassName:{table:{disable:!0}},separator:{control:`boolean`,description:`Divide os slots em dois grupos com InputOTPSeparator (só na story).`},defaultValue:{control:`text`,description:`Valor inicial.`},disabled:{control:`boolean`,description:`Desabilita o campo.`},"aria-invalid":{control:`boolean`,description:`Estado de erro nos slots.`},onComplete:{table:{category:`Eventos`}}},parameters:{docs:{description:{component:'Campo de código de uso único, dividido em slots (biblioteca input-otp). Um único input invisível recebe o texto: colar o código inteiro preenche todos os slots, e o `autoComplete="one-time-code"`, já aplicado, permite que iOS e Android sugiram o código recebido por SMS.\n\n**Quando usar**\n- Verificação em duas etapas (2FA) no login.\n- Confirmação de e-mail ou telefone no cadastro.\n- Códigos de confirmação de assinatura eletrônica ou de acesso do cliente ao portal.\n\n**Quando não usar**\n- Senhas, tokens longos ou alfanuméricos livres (chave de acesso, número de protocolo): use Input.\n- Número de processo CNJ: Input com `text-code` e `inputMode="numeric"`.\n\n**Anatomia**\n- `InputOTP`: raiz. `maxLength` (obrigatório, número de caracteres), `pattern` (ex.: `REGEXP_ONLY_DIGITS`, exportado por `input-otp`), `value`/`onChange`, `onComplete` (ao preencher o último slot), `disabled`, `aria-invalid`. `containerClassName` estiliza o contêiner dos slots.\n- `InputOTPGroup`: slots com bordas unidas.\n- `InputOTPSlot`: um caractere. `index` começa em 0 e os slots devem cobrir de 0 a `maxLength - 1`.\n- `InputOTPSeparator`: traço entre grupos.\n\n```tsx\n<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} aria-label="Código de verificação" onComplete={verificar}>\n  <InputOTPGroup>\n    <InputOTPSlot index={0} />\n    <InputOTPSlot index={1} />\n    <InputOTPSlot index={2} />\n  </InputOTPGroup>\n  <InputOTPSeparator />\n  <InputOTPGroup>\n    <InputOTPSlot index={3} />\n    <InputOTPSlot index={4} />\n    <InputOTPSlot index={5} />\n  </InputOTPGroup>\n</InputOTP>\n```\n\n**UX**\n- Seis dígitos em dois grupos de três facilitam a leitura e a conferência.\n- Verifique em `onComplete` sem exigir clique, mas mantenha um botão Verificar visível.\n- No erro, diga o que fazer e quantas tentativas restam ("Código incorreto. Restam 2 tentativas.") e ofereça reenviar o código, com contagem regressiva.\n\n**Acessibilidade**\n- Dê nome ao campo com `aria-label` ou Label ligado por `id`.\n- `aria-invalid` pinta todos os slots de erro; a mensagem vai logo abaixo, com `role="alert"`.\n'}}}},g={parameters:{docs:{description:{story:`Código de 6 dígitos em dois grupos, aceitando só números.`}}},render:({maxLength:e,charset:t=`digits`,separator:n,children:r,...o})=>{let c=Array.from({length:e},(e,t)=>t),u=Math.ceil(e/2),d=n?[c.slice(0,u),c.slice(u)]:[c];return(0,f.jsx)(l,{maxLength:e,"aria-label":`Código de verificação`,...o,pattern:m[t],children:d.map((e,t)=>(0,f.jsxs)(`div`,{className:`contents`,children:[t>0&&(0,f.jsx)(s,{}),(0,f.jsx)(a,{children:e.map(e=>(0,f.jsx)(i,{index:e},e))})]},e[0]))},`${e}-${o.defaultValue}`)}},_={parameters:{docs:{description:{story:`Vazio, digitando (slot ativo com cursor), preenchido, inválido e desabilitado.`}}},render:()=>(0,f.jsx)(`div`,{className:`flex gap-6 rounded-surface bg-background p-8`,children:[{label:`empty`,props:{}},{label:`typing`,props:{defaultValue:`48`,autoFocus:!0}},{label:`filled`,props:{defaultValue:`482913`}},{label:`invalid`,props:{defaultValue:`482913`,"aria-invalid":!0}},{label:`disabled`,props:{disabled:!0}}].map(({label:e,props:t})=>(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,f.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:e}),(0,f.jsx)(u,{...t})]},e))})},v={parameters:{docs:{description:{story:`aria-invalid pinta os slots; a mensagem de erro vem logo abaixo, com role="alert".`}}},render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,f.jsx)(u,{defaultValue:`482913`,"aria-invalid":!0}),(0,f.jsx)(`p`,{role:`alert`,className:`text-body-sm text-destructive`,children:`Código incorreto. Restam 2 tentativas.`})]})},y={render:()=>(0,f.jsx)(u,{disabled:!0})},b=[`Default`,`States`,`Invalid`,`Disabled`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Código de 6 dígitos em dois grupos, aceitando só números."
      }
    }
  },
  render: ({
    maxLength,
    charset = "digits",
    separator,
    children: _children,
    ...args
  }) => {
    const indexes = Array.from({
      length: maxLength
    }, (_, index) => index);
    const half = Math.ceil(maxLength / 2);
    const groups = separator ? [indexes.slice(0, half), indexes.slice(half)] : [indexes];
    return <InputOTP key={\`\${maxLength}-\${args.defaultValue}\`} maxLength={maxLength} aria-label="Código de verificação" {...args} pattern={patterns[charset]}>
        {groups.map((group, groupIndex) => <div key={group[0]} className="contents">
            {groupIndex > 0 && <InputOTPSeparator />}
            <InputOTPGroup>
              {group.map(index => <InputOTPSlot key={index} index={index} />)}
            </InputOTPGroup>
          </div>)}
      </InputOTP>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Vazio, digitando (slot ativo com cursor), preenchido, inválido e desabilitado."
      }
    }
  },
  render: () => {
    const states: Array<{
      label: string;
      props: OTPStateProps;
    }> = [{
      label: "empty",
      props: {}
    }, {
      label: "typing",
      props: {
        defaultValue: "48",
        autoFocus: true
      }
    }, {
      label: "filled",
      props: {
        defaultValue: "482913"
      }
    }, {
      label: "invalid",
      props: {
        defaultValue: "482913",
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
      }) => <div key={label} className="flex flex-col items-center gap-3">
            <span className="text-caption text-muted-foreground">{label}</span>
            <VerificationCode {...props} />
          </div>)}
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "aria-invalid pinta os slots; a mensagem de erro vem logo abaixo, com role=\\"alert\\"."
      }
    }
  },
  render: () => <div className="flex flex-col gap-2">
      <VerificationCode defaultValue="482913" aria-invalid />
      <p role="alert" className="text-body-sm text-destructive">Código incorreto. Restam 2 tentativas.</p>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <VerificationCode disabled />
}`,...y.parameters?.docs?.source}}}})))()}x();export{g as Default,y as Disabled,v as Invalid,_ as States,b as __namedExportsOrder,h as default};
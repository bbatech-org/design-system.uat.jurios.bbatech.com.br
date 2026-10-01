import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./input-B-RpgP21.js";import{n as i,t as a}from"./textarea-DPP1Urdp.js";import{a as o,c as s,i as c,l,o as u,r as d,s as f,t as p,u as m}from"./field-Da4NzDRc.js";function h(){return(0,v.jsxs)(p,{children:[(0,v.jsx)(u,{htmlFor:`cpf`,required:!0,children:`CPF/CNPJ`}),(0,v.jsx)(r,{id:`cpf`,defaultValue:`123.456.789-09`,inputMode:`numeric`,"aria-required":!0,"aria-describedby":`cpf-help`}),(0,v.jsx)(d,{id:`cpf-help`,children:x})]})}function g(){return(0,v.jsxs)(p,{"data-invalid":`true`,children:[(0,v.jsx)(u,{htmlFor:`cpf-invalid`,required:!0,children:`CPF/CNPJ`}),(0,v.jsx)(r,{id:`cpf-invalid`,defaultValue:`123.456.789-0`,inputMode:`numeric`,"aria-required":!0,"aria-invalid":!0,"aria-describedby":`cpf-invalid-error`}),(0,v.jsx)(c,{id:`cpf-invalid-error`,children:`CPF inválido. Confira os 11 dígitos.`})]})}function _(){return(0,v.jsxs)(p,{"data-disabled":`true`,children:[(0,v.jsx)(u,{htmlFor:`cpf-disabled`,required:!0,children:`CPF/CNPJ`}),(0,v.jsx)(r,{id:`cpf-disabled`,placeholder:`000.000.000-00`,disabled:!0,"aria-describedby":`cpf-disabled-help`}),(0,v.jsx)(d,{id:`cpf-disabled-help`,children:x})]})}var v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),i(),m(),v=t(),y={title:`Componentes/Formulários/Field`,component:p,parameters:{docs:{description:{component:'Estrutura visual de campos de formulário (rótulo, controle, ajuda e erro) e de grupos de campos, sem gerenciar estado. Funciona com qualquer controle do DS e com ou sem biblioteca de formulário.\n\n**Quando usar**\n- Formulários simples ou não controlados, filtros e telas de configuração.\n- Agrupar campos relacionados sob uma legenda (Dados do cliente, Endereço, Honorários) com `FieldSet`.\n- Opções com Checkbox, Switch ou Radio Group ao lado do texto (`orientation="horizontal"`).\n\n**Quando não usar**\n- Formulário com react-hook-form e validação: prefira Form, que liga ids e atributos `aria-*` sozinho. Se preferir Field com react-hook-form, ligue à mão com `Controller` e passe `fieldState.error` para `FieldError errors`.\n\n**Anatomia**\n- `FieldSet`: `<fieldset>` que agrupa campos relacionados, com 24 entre os filhos.\n- `FieldLegend`: `<legend>` do FieldSet. `variant="legend"` (padrão, tamanho de título) ou `variant="label"` (tamanho de rótulo, para grupos de opções como uma lista de Checkbox).\n- `FieldGroup`: pilha de `Field` com 24 entre eles. É também o contêiner de referência da orientação `responsive`.\n- `Field`: um campo (`role="group"`). `orientation`: `vertical` (padrão), `horizontal` (controle e texto na mesma linha) ou `responsive` (vertical, vira horizontal quando o FieldGroup tem largura md ou mais, por container query). Estados: `data-invalid="true"` (rótulo, descrição e erro em destructive) e `data-disabled="true"` (rótulo e descrição esmaecidos).\n- `FieldContent`: coluna de rótulo e descrição ao lado do controle, na orientação horizontal.\n- `FieldLabel`: Label ligado ao controle por `htmlFor`; aceita `required`.\n- `FieldTitle`: título sem `<label>`, para quando o controle já tem rótulo próprio.\n- `FieldDescription`: texto de ajuda; links dentro dele ficam sublinhados. Não some sozinha quando há erro: renderize `FieldError` no lugar dela, como no exemplo abaixo.\n- `FieldError`: erro com `role="alert"`. Aceita `children` ou `errors` (lista de `{ message }`, no formato do react-hook-form); mensagens repetidas são removidas e várias viram lista.\n- `FieldSeparator`: divisória entre blocos, com texto opcional no centro ("ou").\n\n```tsx\n<FieldSet>\n  <FieldLegend>Dados do cliente</FieldLegend>\n  <FieldDescription>Pessoa física ou jurídica responsável pelo contrato.</FieldDescription>\n  <FieldGroup>\n    <Field data-invalid={!!erroCpf || undefined}>\n      <FieldLabel htmlFor="cpf" required>CPF/CNPJ</FieldLabel>\n      <Input id="cpf" aria-required aria-invalid={!!erroCpf} aria-describedby="cpf-ajuda" />\n      {erroCpf ? (\n        <FieldError id="cpf-ajuda">{erroCpf}</FieldError>\n      ) : (\n        <FieldDescription id="cpf-ajuda">Somente números.</FieldDescription>\n      )}\n    </Field>\n    <Field orientation="horizontal">\n      <Checkbox id="lgpd" />\n      <FieldContent>\n        <FieldLabel htmlFor="lgpd">Consentimento LGPD</FieldLabel>\n        <FieldDescription>Autorizo o tratamento dos dados para a gestão do processo.</FieldDescription>\n      </FieldContent>\n    </Field>\n  </FieldGroup>\n</FieldSet>\n```\n\n**Acessibilidade**\n- Field não gera ids: ligue `htmlFor`/`id` entre rótulo e controle e aponte `aria-describedby` para a descrição ou o erro.\n- A borda vermelha vem de `aria-invalid` no controle; `data-invalid` no Field deixa rótulo e descrição em destructive. Use os dois: a cor sozinha não informa o erro a leitores de tela.\n- Mensagens de erro dizem como corrigir ("CPF inválido. Confira os 11 dígitos.").\n- Grupos de Radio Group ou Checkbox ficam em `FieldSet` com `FieldLegend`, para que a pergunta seja lida junto com cada opção.\n'}}},args:{orientation:`vertical`,label:`CPF/CNPJ`,description:`Somente números. Validamos o dígito verificador automaticamente.`,placeholder:`000.000.000-00`,required:!0,invalid:!1,error:`CPF inválido. Confira os 11 dígitos.`,disabled:!1},argTypes:{orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`,`responsive`],description:`Rótulo acima, ao lado ou responsivo ao FieldGroup.`},label:{control:`text`,description:`Texto do FieldLabel (só na story).`},description:{control:`text`,description:`Texto do FieldDescription (só na story).`},placeholder:{control:`text`,description:`Placeholder do Input (só na story).`},required:{control:`boolean`,description:`Indicador de obrigatório no rótulo e aria-required no controle.`},invalid:{control:`boolean`,description:`data-invalid no Field, aria-invalid no controle e FieldError no lugar da descrição.`},error:{control:`text`,description:`Mensagem do FieldError quando invalid.`},disabled:{control:`boolean`,description:`data-disabled no Field e disabled no controle.`},className:{table:{disable:!0}}}},b=[e=>(0,v.jsx)(`div`,{className:`w-80`,children:(0,v.jsx)(e,{})})],x=`Somente números. Validamos o dígito verificador automaticamente.`,S={parameters:{docs:{description:{story:`Campo vertical: rótulo obrigatório, controle e ajuda ligada por aria-describedby.`}}},decorators:b,render:({label:e,description:t,placeholder:n,required:i,invalid:a,error:o,disabled:s,...l})=>(0,v.jsxs)(p,{...l,"data-invalid":a||void 0,"data-disabled":s||void 0,children:[(0,v.jsx)(u,{htmlFor:`cpf-args`,required:i,children:e}),(0,v.jsx)(r,{id:`cpf-args`,placeholder:n,inputMode:`numeric`,disabled:s,"aria-required":i||void 0,"aria-invalid":a||void 0,"aria-describedby":`cpf-args-help`}),a?(0,v.jsx)(c,{id:`cpf-args-help`,children:o}):(0,v.jsx)(d,{id:`cpf-args-help`,children:t})]})},C={parameters:{docs:{description:{story:`data-invalid no Field (rótulo em destructive), aria-invalid no controle (borda) e FieldError no lugar da descrição.`}}},decorators:b,render:()=>(0,v.jsx)(g,{})},w={parameters:{docs:{description:{story:`data-disabled no Field esmaece rótulo e descrição; o controle recebe disabled.`}}},decorators:b,render:()=>(0,v.jsx)(_,{})},T={render:()=>(0,v.jsxs)(`div`,{className:`grid grid-cols-[repeat(3,320px)] gap-6 rounded-surface bg-background p-8`,children:[(0,v.jsx)(h,{}),(0,v.jsx)(g,{}),(0,v.jsx)(_,{})]})},E={parameters:{docs:{description:{story:`FieldError com a prop errors: várias mensagens viram lista, e repetidas são removidas.`}}},decorators:b,name:`Erros (react-hook-form)`,render:()=>(0,v.jsxs)(p,{"data-invalid":`true`,children:[(0,v.jsx)(u,{htmlFor:`oab`,required:!0,children:`OAB`}),(0,v.jsx)(r,{id:`oab`,defaultValue:`12345`,className:`text-code`,"aria-invalid":!0,"aria-describedby":`oab-error`}),(0,v.jsx)(c,{id:`oab-error`,errors:[{message:`Informe a UF da inscrição (ex.: SP).`},{message:`Use 6 dígitos no número.`}]})]})},D={parameters:{docs:{description:{story:`FieldSet com FieldLegend e FieldDescription agrupando campos em um FieldGroup.`}}},name:`Field Set`,decorators:[e=>(0,v.jsx)(`div`,{className:`w-[424px]`,children:(0,v.jsx)(e,{})})],render:()=>(0,v.jsx)(`div`,{className:`rounded-surface bg-card p-8`,children:(0,v.jsxs)(l,{children:[(0,v.jsx)(f,{children:`Dados do cliente`}),(0,v.jsx)(d,{children:`Pessoa física ou jurídica responsável pelo contrato.`}),(0,v.jsxs)(o,{children:[(0,v.jsxs)(p,{children:[(0,v.jsx)(u,{htmlFor:`nome`,required:!0,children:`Nome completo`}),(0,v.jsx)(r,{id:`nome`,defaultValue:`Maria da Silva`,"aria-required":!0,"aria-describedby":`nome-help`}),(0,v.jsx)(d,{id:`nome-help`,children:`Como consta no documento de identidade.`})]}),(0,v.jsxs)(p,{children:[(0,v.jsx)(u,{htmlFor:`cpf-cliente`,required:!0,children:`CPF/CNPJ`}),(0,v.jsx)(r,{id:`cpf-cliente`,defaultValue:`123.456.789-09`,"aria-required":!0,"aria-describedby":`cpf-cliente-help`}),(0,v.jsx)(d,{id:`cpf-cliente-help`,children:x})]}),(0,v.jsxs)(p,{children:[(0,v.jsx)(u,{htmlFor:`observacoes`,children:`Observações`}),(0,v.jsx)(a,{id:`observacoes`,placeholder:`Informações relevantes para o atendimento…`})]})]})]})})},O={decorators:[e=>(0,v.jsx)(`div`,{className:`w-[424px]`,children:(0,v.jsx)(e,{})})],render:()=>(0,v.jsx)(`div`,{className:`rounded-surface bg-card p-8`,children:(0,v.jsxs)(o,{children:[(0,v.jsxs)(p,{children:[(0,v.jsx)(u,{htmlFor:`oab`,children:`Número da OAB`}),(0,v.jsx)(r,{id:`oab`,placeholder:`SP 123.456`})]}),(0,v.jsx)(s,{children:`ou`}),(0,v.jsxs)(p,{children:[(0,v.jsx)(u,{htmlFor:`email-sep`,children:`E-mail cadastrado`}),(0,v.jsx)(r,{id:`email-sep`,type:`email`,placeholder:`nome@escritorio.adv.br`})]}),(0,v.jsx)(s,{}),(0,v.jsxs)(p,{children:[(0,v.jsx)(u,{htmlFor:`obs-sep`,children:`Observações`}),(0,v.jsx)(a,{id:`obs-sep`,placeholder:`Informações para o suporte…`})]})]})})},k=[`Default`,`Invalid`,`Disabled`,`States`,`WithErrors`,`ClientFieldSet`,`Separator`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Campo vertical: rótulo obrigatório, controle e ajuda ligada por aria-describedby."
      }
    }
  },
  decorators: narrow,
  render: ({
    label,
    description,
    placeholder,
    required,
    invalid,
    error,
    disabled,
    ...args
  }) => <Field {...args} data-invalid={invalid || undefined} data-disabled={disabled || undefined}>
      <FieldLabel htmlFor="cpf-args" required={required}>{label}</FieldLabel>
      <Input id="cpf-args" placeholder={placeholder} inputMode="numeric" disabled={disabled} aria-required={required || undefined} aria-invalid={invalid || undefined} aria-describedby="cpf-args-help" />
      {invalid ? <FieldError id="cpf-args-help">{error}</FieldError> : <FieldDescription id="cpf-args-help">{description}</FieldDescription>}
    </Field>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "data-invalid no Field (rótulo em destructive), aria-invalid no controle (borda) e FieldError no lugar da descrição."
      }
    }
  },
  decorators: narrow,
  render: () => <InvalidCpfField />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "data-disabled no Field esmaece rótulo e descrição; o controle recebe disabled."
      }
    }
  },
  decorators: narrow,
  render: () => <DisabledCpfField />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-[repeat(3,320px)] gap-6 rounded-surface bg-background p-8">
      <CpfField />
      <InvalidCpfField />
      <DisabledCpfField />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "FieldError com a prop errors: várias mensagens viram lista, e repetidas são removidas."
      }
    }
  },
  decorators: narrow,
  name: "Erros (react-hook-form)",
  render: () => <Field data-invalid="true">
      <FieldLabel htmlFor="oab" required>OAB</FieldLabel>
      <Input id="oab" defaultValue="12345" className="text-code" aria-invalid aria-describedby="oab-error" />
      <FieldError id="oab-error" errors={[{
      message: "Informe a UF da inscrição (ex.: SP)."
    }, {
      message: "Use 6 dígitos no número."
    }]} />
    </Field>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "FieldSet com FieldLegend e FieldDescription agrupando campos em um FieldGroup."
      }
    }
  },
  name: "Field Set",
  decorators: [Story => <div className="w-[424px]"><Story /></div>],
  render: () => <div className="rounded-surface bg-card p-8">
      <FieldSet>
        <FieldLegend>Dados do cliente</FieldLegend>
        <FieldDescription>Pessoa física ou jurídica responsável pelo contrato.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="nome" required>Nome completo</FieldLabel>
            <Input id="nome" defaultValue="Maria da Silva" aria-required aria-describedby="nome-help" />
            <FieldDescription id="nome-help">Como consta no documento de identidade.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="cpf-cliente" required>CPF/CNPJ</FieldLabel>
            <Input id="cpf-cliente" defaultValue="123.456.789-09" aria-required aria-describedby="cpf-cliente-help" />
            <FieldDescription id="cpf-cliente-help">{cpfHelp}</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="observacoes">Observações</FieldLabel>
            <Textarea id="observacoes" placeholder="Informações relevantes para o atendimento…" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="w-[424px]"><Story /></div>],
  render: () => <div className="rounded-surface bg-card p-8">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="oab">Número da OAB</FieldLabel>
          <Input id="oab" placeholder="SP 123.456" />
        </Field>
        <FieldSeparator>ou</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="email-sep">E-mail cadastrado</FieldLabel>
          <Input id="email-sep" type="email" placeholder="nome@escritorio.adv.br" />
        </Field>
        <FieldSeparator />
        <Field>
          <FieldLabel htmlFor="obs-sep">Observações</FieldLabel>
          <Textarea id="obs-sep" placeholder="Informações para o suporte…" />
        </Field>
      </FieldGroup>
    </div>
}`,...O.parameters?.docs?.source},description:{story:`Divisória entre blocos do formulário, com ou sem rótulo.`,...O.parameters?.docs?.description}}}})))()}A();export{D as ClientFieldSet,S as Default,w as Disabled,C as Invalid,O as Separator,T as States,E as WithErrors,k as __namedExportsOrder,y as default};
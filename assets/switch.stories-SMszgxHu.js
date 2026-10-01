import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./label-Jxxk7pzc.js";import{n as i,t as a}from"./switch-D0lTSwfH.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Componentes/Formulários/Switch`,component:a,parameters:{docs:{description:{component:`Interruptor (Radix) que liga ou desliga uma configuração com efeito imediato.

**Checkbox, Switch ou Toggle**
- Checkbox: escolha booleana (ou múltipla em lista) que vale ao enviar o formulário; aceita estado indeterminado. Ex.: aceite dos termos, consentimento LGPD, seleção de processos em uma tabela.
- Switch: liga/desliga uma configuração com efeito imediato (sem botão Salvar). Ex.: avisos de prazo por e-mail.
- Toggle: botão com estado pressionado (\`aria-pressed\`) em barra de ferramentas (negrito, fixar, filtro ativo); não é campo de formulário.
- Para uma opção entre várias exclusivas, use Radio Group.

**Quando não usar**
- Se a mudança só vale depois de Salvar ou precisa de confirmação, use Checkbox.

**API**
\`checked\`/\`defaultChecked\`, \`onCheckedChange\`, \`disabled\`, \`name\` e \`value\`.

**Acessibilidade e UX**
- Rótulo descreve o que fica ligado ("Notificar por e-mail"), não a ação ("Ativar"). O leitor de tela anuncia o estado ligado ou desligado.
- Ligue o Label por \`id\`/\`htmlFor\`.
- Se a gravação falhar, volte o Switch ao estado anterior e avise com Toast.
`}}},args:{label:`Notificar por e-mail`,defaultChecked:!1,disabled:!1,required:!1,onCheckedChange:s()},argTypes:{label:{control:`text`,description:`Texto do Label associado (só na story).`},checked:{control:`boolean`,description:`Estado controlado.`},defaultChecked:{control:`boolean`,description:`Estado inicial, não controlado.`},disabled:{control:`boolean`,description:`Desabilita o controle.`},required:{control:`boolean`,description:`Obrigatório no formulário.`},name:{control:`text`,description:`Nome enviado no formulário.`},value:{table:{disable:!0}},asChild:{table:{disable:!0}},className:{table:{disable:!0}},onCheckedChange:{table:{category:`Eventos`}}}},l={render:({label:e,...t})=>(0,o.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,o.jsx)(a,{id:`email`,...t},String(t.defaultChecked)),(0,o.jsx)(r,{htmlFor:`email`,children:e})]})},u={parameters:{docs:{description:{story:`Desligado, ligado e desabilitado nos dois estados.`}}},render:()=>(0,o.jsx)(`div`,{className:`flex flex-col gap-4`,children:[{id:`off`,label:`Desligado`,props:{}},{id:`on`,label:`Ligado`,props:{defaultChecked:!0}},{id:`dis-off`,label:`Desabilitado`,props:{disabled:!0}},{id:`dis-on`,label:`Desabilitado ligado`,props:{disabled:!0,defaultChecked:!0}}].map(({id:e,label:t,props:n})=>(0,o.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,o.jsx)(a,{id:e,...n}),(0,o.jsx)(r,{htmlFor:e,children:t})]},e))})},d={parameters:{docs:{description:{story:`Lista de preferências com efeito imediato: rótulo e descrição à esquerda, Switch à direita.`}}},render:()=>(0,o.jsx)(`div`,{className:`flex w-96 flex-col divide-y divide-border rounded-surface bg-card px-6`,children:[{id:`prazo`,title:`Prazos processuais`,text:`Avisos 5 e 1 dia antes do vencimento.`,on:!0},{id:`whats`,title:`WhatsApp`,text:`Resumo diário das movimentações.`,on:!1}].map(e=>(0,o.jsxs)(`div`,{className:`flex items-center justify-between gap-6 py-5`,children:[(0,o.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,o.jsx)(r,{htmlFor:e.id,children:e.title}),(0,o.jsx)(`p`,{className:`text-body-sm text-muted-foreground`,children:e.text})]}),(0,o.jsx)(a,{id:e.id,defaultChecked:e.on})]},e.id))})},f=[`Default`,`States`,`Preferences`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    ...args
  }) => <div className="flex items-center gap-2.5">
      <Switch key={String(args.defaultChecked)} id="email" {...args} />
      <Label htmlFor="email">{label}</Label>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Desligado, ligado e desabilitado nos dois estados."
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      {[{
      id: "off",
      label: "Desligado",
      props: {}
    }, {
      id: "on",
      label: "Ligado",
      props: {
        defaultChecked: true
      }
    }, {
      id: "dis-off",
      label: "Desabilitado",
      props: {
        disabled: true
      }
    }, {
      id: "dis-on",
      label: "Desabilitado ligado",
      props: {
        disabled: true,
        defaultChecked: true
      }
    }].map(({
      id,
      label,
      props
    }) => <div key={id} className="flex items-center gap-2.5">
          <Switch id={id} {...props} />
          <Label htmlFor={id}>{label}</Label>
        </div>)}
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Lista de preferências com efeito imediato: rótulo e descrição à esquerda, Switch à direita."
      }
    }
  },
  render: () => <div className="flex w-96 flex-col divide-y divide-border rounded-surface bg-card px-6">
      {[{
      id: "prazo",
      title: "Prazos processuais",
      text: "Avisos 5 e 1 dia antes do vencimento.",
      on: true
    }, {
      id: "whats",
      title: "WhatsApp",
      text: "Resumo diário das movimentações.",
      on: false
    }].map(item => <div key={item.id} className="flex items-center justify-between gap-6 py-5">
          <div className="flex flex-col gap-1">
            <Label htmlFor={item.id}>{item.title}</Label>
            <p className="text-body-sm text-muted-foreground">{item.text}</p>
          </div>
          <Switch id={item.id} defaultChecked={item.on} />
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Default,d as Preferences,u as States,f as __namedExportsOrder,c as default};
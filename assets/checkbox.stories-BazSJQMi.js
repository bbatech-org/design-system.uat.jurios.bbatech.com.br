import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./label-Jxxk7pzc.js";import{n as i,t as a}from"./checkbox-BF_Relgc.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Componentes/Formulários/Checkbox`,component:a,parameters:{docs:{description:{component:'Caixa de seleção (Radix) para uma escolha booleana ou para marcar vários itens de uma lista. Tem estado indeterminado para o "selecionar todos" parcial.\n\n**Checkbox, Switch ou Toggle**\n- Checkbox: escolha booleana (ou múltipla em lista) que vale ao enviar o formulário; aceita estado indeterminado. Ex.: aceite dos termos, consentimento LGPD, seleção de processos em uma tabela.\n- Switch: liga/desliga uma configuração com efeito imediato (sem botão Salvar). Ex.: avisos de prazo por e-mail.\n- Toggle: botão com estado pressionado (`aria-pressed`) em barra de ferramentas (negrito, fixar, filtro ativo); não é campo de formulário.\n- Para uma opção entre várias exclusivas, use Radio Group.\n\n**API**\n`checked`/`defaultChecked` (`true`, `false` ou `"indeterminate"`), `onCheckedChange`, `disabled`, `required`, `name`, `value` e `aria-invalid`.\n\n**Acessibilidade**\n- Sempre com Label ligado por `id`/`htmlFor`: clicar no texto também marca.\n- O estado indeterminado é controlado por você: derive-o dos itens filhos e passe `checked="indeterminate"`.\n- Uma lista de opções fica em FieldSet com `FieldLegend variant="label"` (veja Field).\n'}}},args:{label:`Aceito os termos de uso`,defaultChecked:!1,disabled:!1,required:!1,onCheckedChange:s()},argTypes:{label:{control:`text`,description:`Texto do Label associado (só na story).`},checked:{control:`inline-radio`,options:[!1,!0,`indeterminate`],description:`Estado controlado; indeterminate para seleção parcial.`},defaultChecked:{control:`boolean`,description:`Estado inicial, não controlado.`},disabled:{control:`boolean`,description:`Desabilita o controle.`},required:{control:`boolean`,description:`Obrigatório no formulário.`},"aria-invalid":{control:`boolean`,description:`Estado de erro.`},name:{control:`text`,description:`Nome enviado no formulário.`},value:{table:{disable:!0}},asChild:{table:{disable:!0}},className:{table:{disable:!0}},onCheckedChange:{table:{category:`Eventos`}}}},l={render:({label:e,...t})=>(0,o.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,o.jsx)(a,{id:`termos`,...t},String(t.defaultChecked)),(0,o.jsx)(r,{htmlFor:`termos`,children:e})]})},u=[{label:`Não marcado`,props:{}},{label:`Marcado`,props:{defaultChecked:!0}},{label:`Indeterminado`,props:{checked:`indeterminate`}},{label:`Inválido`,props:{"aria-invalid":!0}},{label:`Desabilitado`,props:{disabled:!0,defaultChecked:!0}}],d={parameters:{docs:{description:{story:`Não marcado, marcado, indeterminado, inválido e desabilitado.`}}},render:()=>(0,o.jsx)(`div`,{className:`flex flex-col gap-4`,children:u.map(({label:e,props:t},n)=>(0,o.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,o.jsx)(a,{id:`estado-${n}`,...t}),(0,o.jsx)(r,{htmlFor:`estado-${n}`,children:e})]},e))})},f={parameters:{docs:{description:{story:`Rótulo com texto de apoio; a caixa alinha com a primeira linha (mt-0.5).`}}},render:()=>(0,o.jsxs)(`div`,{className:`flex max-w-sm items-start gap-2.5`,children:[(0,o.jsx)(a,{id:`lgpd`,className:`mt-0.5`}),(0,o.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,o.jsx)(r,{htmlFor:`lgpd`,children:`Consentimento LGPD`}),(0,o.jsx)(`p`,{className:`text-body-sm text-muted-foreground`,children:`Autorizo o tratamento dos meus dados para a gestão do processo.`})]})]})},p=[`Default`,`States`,`WithDescription`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    ...args
  }) => <div className="flex items-center gap-2.5">
      <Checkbox key={String(args.defaultChecked)} id="termos" {...args} />
      <Label htmlFor="termos">{label}</Label>
    </div>
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Não marcado, marcado, indeterminado, inválido e desabilitado."
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      {states.map(({
      label,
      props
    }, index) => <div key={label} className="flex items-center gap-2.5">
          <Checkbox id={\`estado-\${index}\`} {...props} />
          <Label htmlFor={\`estado-\${index}\`}>{label}</Label>
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Rótulo com texto de apoio; a caixa alinha com a primeira linha (mt-0.5)."
      }
    }
  },
  render: () => <div className="flex max-w-sm items-start gap-2.5">
      <Checkbox id="lgpd" className="mt-0.5" />
      <div className="flex flex-col gap-1">
        <Label htmlFor="lgpd">Consentimento LGPD</Label>
        <p className="text-body-sm text-muted-foreground">Autorizo o tratamento dos meus dados para a gestão do processo.</p>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as Default,d as States,f as WithDescription,p as __namedExportsOrder,c as default};
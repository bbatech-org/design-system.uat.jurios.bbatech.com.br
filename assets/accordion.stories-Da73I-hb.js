import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,r as a,t as o}from"./accordion-w4w0BOz3.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Componentes/Navegação/Accordion`,component:o,args:{type:`single`,collapsible:!0,defaultValue:`prazos`,disabled:!1,orientation:`vertical`,disabledItem:!1,onValueChange:c()},argTypes:{type:{control:`inline-radio`,options:[`single`,`multiple`],description:"`single`: um item aberto por vez. `multiple`: vários abertos ao mesmo tempo."},collapsible:{control:`boolean`,description:'Com `type="single"`, permite fechar o item aberto (todos fechados).'},defaultValue:{control:`select`,options:[``,`prazos`,`segredo`,`relatorios`],description:"Item aberto ao montar (`value` do `AccordionItem`)."},disabled:{control:`boolean`,description:`Desabilita todos os itens.`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`],description:`Orientação da navegação por setas.`},disabledItem:{control:`boolean`,description:"Desabilita só o item Relatórios (`disabled` no `AccordionItem`)."},onValueChange:{table:{disable:!0}}},decorators:[e=>(0,s.jsx)(`div`,{className:`w-[640px]`,children:(0,s.jsx)(e,{})})],parameters:{docs:{description:{component:'Seções empilhadas que expandem e recolhem, no estilo do FAQ da landing: cada item é uma superfície `card` com a pergunta no cabeçalho e a resposta abaixo.\n\n**Quando usar**\n- FAQ, ajuda contextual e listas de perguntas e respostas.\n- Conteúdo secundário longo em que o usuário escolhe o que ler.\n\n**Quando não usar**\n- Um único bloco de mostrar ou ocultar (ex.: "ver todas as partes do processo"): use Collapsible.\n- Seções de mesmo nível que o usuário alterna uma de cada vez, com os rótulos lado a lado: use Tabs.\n- Informação essencial para a tarefa (prazo fatal, alerta de intimação): não esconda; mostre na página ou use Alert.\n\n**Accordion ou Collapsible?** Accordion é um conjunto de itens com visual pronto (cartão, botão + e −) e regra de abertura coordenada (`single` ou `multiple`). Collapsible é uma primitiva sem estilo para mostrar ou ocultar um único bloco, composta livremente.\n\n**Anatomia**\n- `Accordion`: raiz. `type="single"` (um item aberto por vez; adicione `collapsible` para permitir fechar todos) ou `type="multiple"` (vários abertos). `defaultValue`, `value` e `onValueChange` recebem string no `single` e array no `multiple`.\n- `AccordionItem`: item (`value` único, `disabled`).\n- `AccordionTrigger`: título clicável com o botão + e −; já vem dentro de um `h3`.\n- `AccordionContent`: resposta. O `className` vai para o bloco interno com padding.\n\n```tsx\n<Accordion type="single" collapsible defaultValue="prazos">\n  <AccordionItem value="prazos">\n    <AccordionTrigger>Como o sistema sugere prazos?</AccordionTrigger>\n    <AccordionContent>O JuriOS lê a publicação e sugere o prazo em dias úteis.</AccordionContent>\n  </AccordionItem>\n</Accordion>\n```\n\n**Acessibilidade**\n- O trigger é um botão com `aria-expanded`. Setas para cima e para baixo movem entre os itens; Home e End vão ao primeiro e ao último.\n- Os títulos ficam em `h3`: mantenha a hierarquia de títulos da página coerente com isso.'}}}},u={render:({type:e,collapsible:t,defaultValue:n,disabledItem:c,onValueChange:l,...u})=>(0,s.jsxs)(o,{...u,...e===`multiple`?{type:e,defaultValue:n?[n]:[],onValueChange:l}:{type:e,collapsible:t,defaultValue:n||void 0,onValueChange:l},children:[(0,s.jsxs)(a,{value:`prazos`,children:[(0,s.jsx)(r,{children:`Como o sistema sugere prazos?`}),(0,s.jsx)(i,{children:`O JuriOS lê a publicação, identifica o tipo de ato e sugere o prazo em dias úteis, já descontando feriados. A sugestão só entra na agenda depois da confirmação de um advogado.`})]}),(0,s.jsxs)(a,{value:`segredo`,children:[(0,s.jsx)(r,{children:`Quem pode ver processos em segredo de justiça?`}),(0,s.jsx)(i,{children:`Apenas os advogados vinculados ao processo e os administradores do escritório com permissão explícita.`})]}),(0,s.jsxs)(a,{value:`relatorios`,disabled:c,children:[(0,s.jsx)(r,{children:`Como exportar relatórios?`}),(0,s.jsx)(i,{children:`Em Relatórios, escolha o período e o formato (PDF ou planilha) e clique em Exportar.`})]})]},`${e}-${n}`)},d=`Quais documentos são necessários para a procuração?`,f=`Documento de identidade, CPF e comprovante de endereço. Para pessoa jurídica, contrato social e documento do representante legal.`,p={parameters:{docs:{description:{story:`Fechado, aberto e desabilitado (disabled no AccordionItem).`}}},render:()=>(0,s.jsx)(`div`,{className:`grid grid-cols-[80px_1fr] items-start gap-x-6 gap-y-6`,children:[`closed`,`open`,`disabled`].map(e=>(0,s.jsxs)(`div`,{className:`contents`,children:[(0,s.jsx)(`span`,{className:`pt-6 text-right text-caption text-muted-foreground`,children:e}),(0,s.jsx)(o,{type:`single`,collapsible:!0,defaultValue:e===`open`?`item`:void 0,children:(0,s.jsxs)(a,{value:`item`,disabled:e===`disabled`,children:[(0,s.jsx)(r,{children:d}),(0,s.jsx)(i,{children:f})]})})]},e))})},m={parameters:{docs:{description:{story:`type="multiple": vários itens abertos ao mesmo tempo.`}}},render:()=>(0,s.jsxs)(o,{type:`multiple`,defaultValue:[`honorarios`,`assinatura`],children:[(0,s.jsxs)(a,{value:`honorarios`,children:[(0,s.jsx)(r,{children:`Como são calculados os honorários de êxito?`}),(0,s.jsx)(i,{children:`Percentual sobre o proveito econômico definido no contrato, lançado no financeiro após o trânsito em julgado.`})]}),(0,s.jsxs)(a,{value:`assinatura`,children:[(0,s.jsx)(r,{children:`Posso assinar documentos com certificado A3?`}),(0,s.jsx)(i,{children:`Sim. Conecte o token ao computador e selecione o certificado na janela de assinatura.`})]})]})},h=[`Default`,`States`,`Multiple`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: ({
    type,
    collapsible,
    defaultValue,
    disabledItem,
    onValueChange,
    ...args
  }) => <Accordion key={\`\${type}-\${defaultValue}\`} {...args} {...type === "multiple" ? {
    type,
    defaultValue: defaultValue ? [defaultValue] : [],
    onValueChange
  } : {
    type,
    collapsible,
    defaultValue: defaultValue || undefined,
    onValueChange
  }}>
      <AccordionItem value="prazos">
        <AccordionTrigger>Como o sistema sugere prazos?</AccordionTrigger>
        <AccordionContent>
          O JuriOS lê a publicação, identifica o tipo de ato e sugere o prazo em dias úteis, já descontando feriados.
          A sugestão só entra na agenda depois da confirmação de um advogado.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="segredo">
        <AccordionTrigger>Quem pode ver processos em segredo de justiça?</AccordionTrigger>
        <AccordionContent>
          Apenas os advogados vinculados ao processo e os administradores do escritório com permissão explícita.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="relatorios" disabled={disabledItem}>
        <AccordionTrigger>Como exportar relatórios?</AccordionTrigger>
        <AccordionContent>
          Em Relatórios, escolha o período e o formato (PDF ou planilha) e clique em Exportar.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Fechado, aberto e desabilitado (disabled no AccordionItem)."
      }
    }
  },
  render: () => <div className="grid grid-cols-[80px_1fr] items-start gap-x-6 gap-y-6">
      {(["closed", "open", "disabled"] as const).map(state => <div key={state} className="contents">
          <span className="pt-6 text-right text-caption text-muted-foreground">{state}</span>
          <Accordion type="single" collapsible defaultValue={state === "open" ? "item" : undefined}>
            <AccordionItem value="item" disabled={state === "disabled"}>
              <AccordionTrigger>{pergunta}</AccordionTrigger>
              <AccordionContent>{resposta}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "type=\\"multiple\\": vários itens abertos ao mesmo tempo."
      }
    }
  },
  render: () => <Accordion type="multiple" defaultValue={["honorarios", "assinatura"]}>
      <AccordionItem value="honorarios">
        <AccordionTrigger>Como são calculados os honorários de êxito?</AccordionTrigger>
        <AccordionContent>Percentual sobre o proveito econômico definido no contrato, lançado no financeiro após o trânsito em julgado.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="assinatura">
        <AccordionTrigger>Posso assinar documentos com certificado A3?</AccordionTrigger>
        <AccordionContent>Sim. Conecte o token ao computador e selecione o certificado na janela de assinatura.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...m.parameters?.docs?.source}}}})))()}g();export{u as Default,m as Multiple,p as States,h as __namedExportsOrder,l as default};
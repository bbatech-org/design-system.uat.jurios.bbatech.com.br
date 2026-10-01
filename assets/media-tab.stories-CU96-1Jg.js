import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,r as a,t as o}from"./media-tab-zzZHLeol.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{n(),s=t(),c={title:`Website/Blocos/MediaTab`,component:o,parameters:{docs:{description:{component:[`Aba sobre a mídia do hero: rótulo mono, prévia e barra de progresso. A ativa fica opaca.`,``,`**Onde aparece:** canto da mídia da HeroSection ("Processos · Prazos · Financeiro"). Some abaixo de 640.`,``,"**Partes:** `MediaTabs` (raiz Radix Tabs; aceita `value`/`onValueChange` ou `defaultValue`), `MediaTabList`, `MediaTab` (`value`, `label`) e `MediaTabPanel` (`value` igual ao da aba).",``,'**Acessibilidade:** composição do Radix Tabs: `role="tablist"` (dê um `aria-label`), `role="tab"` com `aria-selected` e `aria-controls`, painel `role="tabpanel"`. Tabindex itinerante: setas para a esquerda e para a direita trocam de aba, Home e End vão às pontas. Use só sobre fundo escuro ou foto.'].join(`
`)}}},args:{value:`processos`,label:`Processos`},argTypes:{value:{control:`text`,description:"Valor da aba no MediaTabs (a Default fica ativa com `processos`)."},label:{control:`text`,description:`Rótulo da aba.`},disabled:{control:`boolean`,description:`Desabilita a aba.`},asChild:{table:{disable:!0}},className:{table:{disable:!0}}},render:e=>(0,s.jsx)(r,{defaultValue:`processos`,className:`rounded-surface bg-primary p-8`,children:(0,s.jsx)(i,{"aria-label":`Módulos em destaque`,children:(0,s.jsx)(o,{...e})})})},l={},u={parameters:{docs:{description:{story:`Aba inativa, com prévia e barra translúcidas.`}}},render:e=>(0,s.jsx)(r,{defaultValue:`outra`,className:`rounded-surface bg-primary p-8`,children:(0,s.jsx)(i,{"aria-label":`Módulos em destaque`,children:(0,s.jsx)(o,{...e})})})},d={parameters:{docs:{description:{story:`Grupo de três abas com painéis ligados e a primeira ativa. Use as setas para a esquerda e para a direita.`}}},render:()=>{let e=[`Processos`,`Prazos`,`Financeiro`];return(0,s.jsxs)(r,{defaultValue:e[0],className:`flex flex-col gap-6 rounded-surface bg-primary p-8`,children:[(0,s.jsx)(i,{"aria-label":`Módulos em destaque`,children:e.map(e=>(0,s.jsx)(o,{value:e,label:e},e))}),e.map(e=>(0,s.jsxs)(a,{value:e,className:`text-body-sm text-overlay-foreground`,children:[`Prévia do módulo `,e,`.`]},e))]})}},f=[`Default`,`Inactive`,`Group`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Aba inativa, com prévia e barra translúcidas."
      }
    }
  },
  render: args => <MediaTabs defaultValue="outra" className="rounded-surface bg-primary p-8">
      <MediaTabList aria-label="Módulos em destaque">
        <MediaTab {...args} />
      </MediaTabList>
    </MediaTabs>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Grupo de três abas com painéis ligados e a primeira ativa. Use as setas para a esquerda e para a direita."
      }
    }
  },
  render: () => {
    const tabs = ["Processos", "Prazos", "Financeiro"];
    return <MediaTabs defaultValue={tabs[0]} className="flex flex-col gap-6 rounded-surface bg-primary p-8">
        <MediaTabList aria-label="Módulos em destaque">
          {tabs.map(tab => <MediaTab key={tab} value={tab} label={tab} />)}
        </MediaTabList>
        {tabs.map(tab => <MediaTabPanel key={tab} value={tab} className="text-body-sm text-overlay-foreground">
            Prévia do módulo {tab}.
          </MediaTabPanel>)}
      </MediaTabs>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Default,d as Group,u as Inactive,f as __namedExportsOrder,c as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,r as a,t as o}from"./feature-tab-0WkHArfD.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),s=t(),c=[{value:`prazos`,title:`Prazos`,description:`Confira os prazos da semana e delegue a conferência a um agente.`},{value:`informacoes`,title:`Informações`,description:`Veja receita, prazos cumpridos e taxa de êxito por área, e o que mudar para ganhar mais causas.`},{value:`publicacoes`,title:`Publicações`,description:`Receba as publicações dos tribunais já vinculadas aos processos.`}],l={title:`Website/Blocos/FeatureTab`,component:o,parameters:{docs:{description:{component:[`Aba vertical de recurso: título; quando ativa, mostra a descrição e uma barra na cor primária sobre o filete superior.`,``,`**Onde aparece:** lista "Prazos · Informações · Publicações" à esquerda do mock na HighlightsSection.`,``,'**Partes:** `FeatureTabs` (raiz Radix Tabs, `orientation="vertical"`; aceita `value`/`onValueChange` ou `defaultValue`), `FeatureTabList`, `FeatureTab` (`value`, `title`, `description` visível só na aba ativa) e `FeatureTabPanel` (`value` igual ao da aba).',``,"```tsx",`<FeatureTabs defaultValue="prazos">`,`  <FeatureTabList aria-label="Recursos do painel">`,`    <FeatureTab value="prazos" title="Prazos" description="..." />`,`  </FeatureTabList>`,`  <FeatureTabPanel value="prazos">...</FeatureTabPanel>`,`</FeatureTabs>`,"```",``,'**Acessibilidade:** composição do Radix Tabs: `role="tablist"` com `aria-orientation="vertical"`, `role="tab"` com `aria-selected` e `aria-controls`, painel `role="tabpanel"` com `aria-labelledby`. Tabindex itinerante: Tab entra na aba ativa e sai para o painel; setas para cima e para baixo trocam de aba, Home e End vão à primeira e à última.',``,`**Quando não usar:** abas que trocam conteúdo no produto. Use Tabs (Componentes/Navegação).`].join(`
`)}}},args:{value:`informacoes`,title:c[1].title,description:c[1].description},argTypes:{value:{control:`text`,description:"Valor da aba no FeatureTabs (a Default fica ativa com `informacoes`)."},title:{control:`text`,description:`Título da aba.`},description:{control:`text`,description:`Descrição mostrada quando a aba está ativa.`},disabled:{control:`boolean`,description:`Desabilita a aba.`},asChild:{table:{disable:!0}},className:{table:{disable:!0}}},render:e=>(0,s.jsx)(r,{defaultValue:`informacoes`,className:`w-[440px]`,children:(0,s.jsx)(i,{"aria-label":`Recursos do painel`,children:(0,s.jsx)(o,{...e})})})},u={},d={parameters:{docs:{description:{story:`Aba inativa: só o título, sem descrição nem barra.`}}},render:e=>(0,s.jsx)(r,{defaultValue:`outra`,className:`w-[440px]`,children:(0,s.jsx)(i,{"aria-label":`Recursos do painel`,children:(0,s.jsx)(o,{...e})})})},f={parameters:{docs:{description:{story:`Três abas com painéis ligados, como na HighlightsSection. Use as setas para cima e para baixo.`}}},render:()=>(0,s.jsxs)(r,{defaultValue:`informacoes`,className:`flex w-[440px] flex-col gap-6`,children:[(0,s.jsx)(i,{"aria-label":`Recursos do painel`,children:c.map(e=>(0,s.jsx)(o,{...e},e.value))}),c.map(e=>(0,s.jsxs)(a,{value:e.value,className:`text-body-sm text-muted-foreground`,children:[`Painel de `,e.title.toLowerCase(),`.`]},e.value))]})},p=[`Default`,`Inactive`,`List`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Aba inativa: só o título, sem descrição nem barra."
      }
    }
  },
  render: args => <FeatureTabs defaultValue="outra" className="w-[440px]">
      <FeatureTabList aria-label="Recursos do painel">
        <FeatureTab {...args} />
      </FeatureTabList>
    </FeatureTabs>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Três abas com painéis ligados, como na HighlightsSection. Use as setas para cima e para baixo."
      }
    }
  },
  render: () => <FeatureTabs defaultValue="informacoes" className="flex w-[440px] flex-col gap-6">
      <FeatureTabList aria-label="Recursos do painel">
        {tabs.map(tab => <FeatureTab key={tab.value} {...tab} />)}
      </FeatureTabList>
      {tabs.map(tab => <FeatureTabPanel key={tab.value} value={tab.value} className="text-body-sm text-muted-foreground">
          Painel de {tab.title.toLowerCase()}.
        </FeatureTabPanel>)}
    </FeatureTabs>
}`,...f.parameters?.docs?.source}}}})))()}m();export{u as Default,d as Inactive,f as List,p as __namedExportsOrder,l as default};
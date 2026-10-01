import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./progress-BeRaDeF_.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a={title:`Componentes/Feedback/Progress`,component:r,parameters:{docs:{description:{component:'Barra de progresso determinado (Radix Progress) para operações com percentual conhecido: importação de publicações, envio de documentos, sincronização com o PJe.\n\n**Quando usar**: há `value` de 0 a 100. **Quando não usar**: duração desconhecida (use um indicador de carregamento ou Skeleton) ou métricas estáticas, como "70% dos prazos cumpridos" (use um gráfico ou texto).\n\n`tone` muda a cor: `default`, `success` (concluído) e `destructive` (falha ou limite estourado).\n\n**Acessibilidade**: a barra não tem texto visível; dê um nome com `aria-label` ou `aria-labelledby` apontando para o rótulo, como em WithLabel.'}}},args:{value:60,"aria-label":`Progresso`},argTypes:{tone:{control:`inline-radio`,options:[`default`,`success`,`destructive`],description:`Cor da barra.`},value:{control:{type:`range`,min:0,max:100,step:1},description:`Percentual concluído (0 a 100).`},max:{control:{type:`number`,min:1},description:`Valor máximo (padrão 100).`},"aria-label":{control:`text`,description:`Nome acessível da barra.`},asChild:{table:{disable:!0}},className:{table:{disable:!0}},getValueLabel:{table:{disable:!0}}}},o={decorators:[e=>(0,i.jsx)(`div`,{className:`w-72`,children:(0,i.jsx)(e,{})})]},s=[0,25,60,100],c=[`default`,`success`,`destructive`],l={parameters:{docs:{description:{story:`Os três tons em 0, 25, 60 e 100%.`}}},decorators:[e=>(0,i.jsx)(`div`,{className:`w-[960px]`,children:(0,i.jsx)(e,{})})],render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-[6rem_repeat(4,1fr)] items-center gap-x-6 gap-y-5`,children:[(0,i.jsx)(`span`,{}),s.map(e=>(0,i.jsx)(`span`,{className:`text-center text-caption text-muted-foreground`,children:e},e)),c.map(e=>(0,i.jsxs)(`div`,{className:`contents`,children:[(0,i.jsx)(`span`,{className:`text-right text-caption text-muted-foreground`,children:e}),s.map(t=>(0,i.jsx)(r,{tone:e,value:t,"aria-label":`${e} ${t}%`},t))]},e))]})},u={parameters:{docs:{description:{story:"Composição recomendada: rótulo ligado por `aria-labelledby`, percentual e estimativa abaixo."}}},decorators:[e=>(0,i.jsx)(`div`,{className:`w-80`,children:(0,i.jsx)(e,{})})],render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,i.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,i.jsx)(`span`,{id:`progress-importacao`,className:`text-label-md text-foreground`,children:`Importando publicações`}),(0,i.jsx)(`span`,{className:`text-label-md text-muted-foreground`,children:`60%`})]}),(0,i.jsx)(r,{value:60,"aria-labelledby":`progress-importacao`}),(0,i.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:`142 de 236 · cerca de 1 min restante`})]})},d=[`Default`,`Tones`,`WithLabel`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="w-72"><Story /></div>]
}`,...o.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Os três tons em 0, 25, 60 e 100%."
      }
    }
  },
  decorators: [Story => <div className="w-[960px]"><Story /></div>],
  render: () => <div className="grid grid-cols-[6rem_repeat(4,1fr)] items-center gap-x-6 gap-y-5">
      <span />
      {values.map(value => <span key={value} className="text-center text-caption text-muted-foreground">{value}</span>)}
      {tones.map(tone => <div key={tone} className="contents">
          <span className="text-right text-caption text-muted-foreground">{tone}</span>
          {values.map(value => <Progress key={value} tone={tone} value={value} aria-label={\`\${tone} \${value}%\`} />)}
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Composição recomendada: rótulo ligado por \`aria-labelledby\`, percentual e estimativa abaixo."
      }
    }
  },
  decorators: [Story => <div className="w-80"><Story /></div>],
  render: () => <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span id="progress-importacao" className="text-label-md text-foreground">Importando publicações</span>
        <span className="text-label-md text-muted-foreground">60%</span>
      </div>
      <Progress value={60} aria-labelledby="progress-importacao" />
      <span className="text-caption text-muted-foreground">142 de 236 · cerca de 1 min restante</span>
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{o as Default,l as Tones,u as WithLabel,d as __namedExportsOrder,a as default};
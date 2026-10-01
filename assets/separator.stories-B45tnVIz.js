import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./separator-8GCBmLin.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),a={title:`Componentes/Layout/Separator`,component:r,args:{orientation:`horizontal`,decorative:!0,children:``},argTypes:{orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`],description:`Direção do divisor.`},decorative:{control:`boolean`,description:'Só visual; `false` expõe `role="separator"` para leitores de tela.'},children:{control:`text`,description:`Rótulo central (ex.: "ou"); força a orientação horizontal.`},asChild:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{docs:{description:{component:'Divisor de 1px em `border` entre blocos de conteúdo, horizontal ou vertical. Com `children`, vira um divisor rotulado (ex.: "ou" entre o login com senha e o SSO). É decorativo por padrão e fica oculto para leitores de tela; passe `decorative={false}` quando a divisão tiver significado. Na vertical, o contêiner precisa ter altura (ex.: `flex h-5 items-center`).'}}}},o={render:e=>e.orientation===`vertical`&&!e.children?(0,i.jsxs)(`div`,{className:`flex h-5 items-center gap-4 text-body-sm text-muted-foreground`,children:[(0,i.jsx)(`span`,{children:`Processos`}),(0,i.jsx)(r,{...e}),(0,i.jsx)(`span`,{children:`Prazos`})]}):(0,i.jsxs)(`div`,{className:`w-80 rounded-surface bg-card p-6`,children:[(0,i.jsx)(`p`,{className:`text-title-sm`,children:`Silva × Banco X S.A.`}),(0,i.jsx)(`p`,{className:`text-body-sm text-muted-foreground`,children:`TJSP · 3ª Vara Cível`}),(0,i.jsx)(r,{...e,className:`my-4`}),(0,i.jsx)(`p`,{className:`text-body-sm`,children:`Próximo prazo: contestação em 15/10/2026.`})]})},s={render:()=>(0,i.jsxs)(`div`,{className:`flex w-80 flex-col gap-8 rounded-surface bg-card p-8`,children:[(0,i.jsx)(r,{}),(0,i.jsx)(`div`,{className:`flex h-10 items-center justify-center`,children:(0,i.jsx)(r,{orientation:`vertical`})}),(0,i.jsx)(r,{children:`ou`})]})},c={parameters:{docs:{description:{story:`Separadores verticais entre itens em linha; o contêiner define a altura.`}}},render:()=>(0,i.jsxs)(`div`,{className:`flex h-5 items-center gap-4 text-body-sm text-muted-foreground`,children:[(0,i.jsx)(`span`,{children:`Processos`}),(0,i.jsx)(r,{orientation:`vertical`}),(0,i.jsx)(`span`,{children:`Prazos`}),(0,i.jsx)(r,{orientation:`vertical`}),(0,i.jsx)(`span`,{children:`Publicações`})]})},l={parameters:{docs:{description:{story:`Divisor rotulado: children vira o texto central.`}}},render:()=>(0,i.jsx)(`div`,{className:`w-80 rounded-surface bg-card p-8`,children:(0,i.jsx)(r,{children:`ou`})})},u=[`Default`,`Variants`,`Vertical`,`WithLabel`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => args.orientation === "vertical" && !args.children ? <div className="flex h-5 items-center gap-4 text-body-sm text-muted-foreground">
        <span>Processos</span>
        <Separator {...args} />
        <span>Prazos</span>
      </div> : <div className="w-80 rounded-surface bg-card p-6">
        <p className="text-title-sm">Silva × Banco X S.A.</p>
        <p className="text-body-sm text-muted-foreground">TJSP · 3ª Vara Cível</p>
        <Separator {...args} className="my-4" />
        <p className="text-body-sm">Próximo prazo: contestação em 15/10/2026.</p>
      </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-8 rounded-surface bg-card p-8">
      <Separator />
      <div className="flex h-10 items-center justify-center">
        <Separator orientation="vertical" />
      </div>
      <Separator>ou</Separator>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Separadores verticais entre itens em linha; o contêiner define a altura."
      }
    }
  },
  render: () => <div className="flex h-5 items-center gap-4 text-body-sm text-muted-foreground">
      <span>Processos</span>
      <Separator orientation="vertical" />
      <span>Prazos</span>
      <Separator orientation="vertical" />
      <span>Publicações</span>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Divisor rotulado: children vira o texto central."
      }
    }
  },
  render: () => <div className="w-80 rounded-surface bg-card p-8">
      <Separator>ou</Separator>
    </div>
}`,...l.parameters?.docs?.source}}}})))()}d();export{o as Default,s as Variants,c as Vertical,l as WithLabel,u as __namedExportsOrder,a as default};
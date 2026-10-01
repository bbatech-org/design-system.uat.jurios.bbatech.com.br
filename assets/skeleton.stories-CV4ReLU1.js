import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./skeleton-BysSyuXb.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a={title:`Componentes/Feedback/Skeleton`,component:r,parameters:{docs:{description:{component:'Placeholder animado que reserva o espaço do conteúdo enquanto ele carrega, evitando saltos de layout. Dimensione e arredonde com `className` para imitar o formato final (linha, avatar, bloco).\n\nO Skeleton é `aria-hidden`; marque o contêiner com `aria-busy="true"` e um `aria-label` ("Carregando processos"). A animação respeita `prefers-reduced-motion`.'}}},args:{className:`h-4 w-60`},argTypes:{className:{control:`select`,options:[`h-4 w-60`,`h-3 w-40`,`size-10 rounded-full`,`h-30 w-60 rounded-control`],description:`Formato do placeholder (altura, largura e raio via classes).`}}},o={},s={render:()=>(0,i.jsxs)(`div`,{className:`flex w-60 flex-col items-center gap-6`,children:[(0,i.jsx)(r,{className:`h-4 w-full`}),(0,i.jsx)(r,{className:`size-10 rounded-full`}),(0,i.jsx)(r,{className:`h-30 w-full rounded-control`})]})},c={render:()=>(0,i.jsxs)(`div`,{"aria-busy":`true`,"aria-label":`Carregando clientes`,className:`flex w-90 items-center gap-3`,children:[(0,i.jsx)(r,{className:`size-10 shrink-0 rounded-full`}),(0,i.jsxs)(`div`,{className:`flex flex-1 flex-col gap-2`,children:[(0,i.jsx)(r,{className:`h-3.5 w-full`}),(0,i.jsx)(r,{className:`h-3 w-40`})]})]})},l={render:()=>(0,i.jsxs)(`div`,{"aria-busy":`true`,"aria-label":`Carregando processo`,className:`flex w-90 flex-col gap-3 rounded-surface bg-card p-6`,children:[(0,i.jsx)(r,{className:`h-30 w-full rounded-control`}),(0,i.jsx)(r,{className:`h-3.5 w-50`}),(0,i.jsx)(r,{className:`h-3.5 w-75`}),(0,i.jsx)(r,{className:`h-3.5 w-30`})]})},u={render:()=>(0,i.jsxs)(`div`,{"aria-busy":`true`,"aria-label":`Carregando processos`,className:`flex w-180 items-center gap-6 border-b border-border px-2 py-4`,children:[(0,i.jsx)(r,{className:`size-4 rounded-sm`}),(0,i.jsx)(r,{className:`h-3.5 w-55`}),(0,i.jsx)(r,{className:`h-3.5 w-40`}),(0,i.jsx)(r,{className:`h-3.5 w-24`}),(0,i.jsx)(r,{className:`h-3.5 w-30`})]})},d=[`Default`,`Shapes`,`ListItem`,`Card`,`TableRow`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-60 flex-col items-center gap-6">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="size-10 rounded-full" />
      <Skeleton className="h-30 w-full rounded-control" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div aria-busy="true" aria-label="Carregando clientes" className="flex w-90 items-center gap-3">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3 w-40" />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div aria-busy="true" aria-label="Carregando processo" className="flex w-90 flex-col gap-3 rounded-surface bg-card p-6">
      <Skeleton className="h-30 w-full rounded-control" />
      <Skeleton className="h-3.5 w-50" />
      <Skeleton className="h-3.5 w-75" />
      <Skeleton className="h-3.5 w-30" />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div aria-busy="true" aria-label="Carregando processos" className="flex w-180 items-center gap-6 border-b border-border px-2 py-4">
      <Skeleton className="size-4 rounded-sm" />
      <Skeleton className="h-3.5 w-55" />
      <Skeleton className="h-3.5 w-40" />
      <Skeleton className="h-3.5 w-24" />
      <Skeleton className="h-3.5 w-30" />
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Card,o as Default,c as ListItem,s as Shapes,u as TableRow,d as __namedExportsOrder,a as default};
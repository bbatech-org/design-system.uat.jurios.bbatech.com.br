import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./button-BxLqnFN9.js";import{n as i,r as a,t as o}from"./kbd-xGrTVX33.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),s=t(),c={title:`Componentes/Exibição de dados/Kbd`,component:o,parameters:{docs:{description:{component:'Mostra uma tecla ou atalho de teclado em textos, botões e menus. `KbdGroup` agrupa as teclas de uma combinação (Ctrl + K). Use `variant="on-primary"` sobre fundo `primary`, como dentro de um Button padrão.'}}},args:{children:`K`},argTypes:{variant:{control:`inline-radio`,options:[`default`,`on-primary`],description:"`on-primary` sobre fundo primary (ex.: dentro de Button)."},children:{control:`text`,description:`Tecla exibida.`},className:{table:{disable:!0}}}},l={render:e=>(0,s.jsx)(`div`,{className:e.variant===`on-primary`?`flex size-24 items-center justify-center rounded-surface bg-primary`:void 0,children:(0,s.jsx)(o,{...e})})},u={render:()=>(0,s.jsxs)(`div`,{className:`flex overflow-hidden rounded-surface`,children:[(0,s.jsx)(`div`,{className:`flex size-24 items-center justify-center bg-card`,children:(0,s.jsx)(o,{children:`K`})}),(0,s.jsx)(`div`,{className:`flex size-24 items-center justify-center bg-primary`,children:(0,s.jsx)(o,{variant:`on-primary`,children:`K`})})]})},d={parameters:{docs:{description:{story:`Atalho dentro do Button padrão, com variant on-primary.`}}},render:()=>(0,s.jsxs)(r,{children:[`Salvar `,(0,s.jsx)(o,{variant:`on-primary`,children:`S`})]})},f={render:()=>(0,s.jsxs)(i,{children:[(0,s.jsx)(o,{children:`Ctrl`}),(0,s.jsx)(`span`,{children:`+`}),(0,s.jsx)(o,{children:`K`})]})},p={render:()=>(0,s.jsxs)(`p`,{className:`text-body-sm text-muted-foreground`,children:[`Pressione `,(0,s.jsxs)(i,{children:[(0,s.jsx)(o,{children:`Ctrl`}),(0,s.jsx)(o,{children:`K`})]}),` para buscar processos, clientes e prazos.`]})},m=[`Default`,`Variants`,`InButton`,`Group`,`InText`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className={args.variant === "on-primary" ? "flex size-24 items-center justify-center rounded-surface bg-primary" : undefined}>
      <Kbd {...args} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex overflow-hidden rounded-surface">
      <div className="flex size-24 items-center justify-center bg-card"><Kbd>K</Kbd></div>
      <div className="flex size-24 items-center justify-center bg-primary"><Kbd variant="on-primary">K</Kbd></div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Atalho dentro do Button padrão, com variant on-primary."
      }
    }
  },
  render: () => <Button>
      Salvar <Kbd variant="on-primary">S</Kbd>
    </Button>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </KbdGroup>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <p className="text-body-sm text-muted-foreground">
      Pressione <KbdGroup><Kbd>Ctrl</Kbd><Kbd>K</Kbd></KbdGroup> para buscar processos, clientes e prazos.
    </p>
}`,...p.parameters?.docs?.source}}}})))()}h();export{l as Default,f as Group,d as InButton,p as InText,u as Variants,m as __namedExportsOrder,c as default};
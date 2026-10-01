import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./copy-DhFFy67p.js";import{i as r,n as i,r as a,t as o}from"./tooltip-5Xw9e2bs.js";import{r as s,t as c}from"./button-BxLqnFN9.js";import{r as l}from"./icons.stories-CuLmnsRb.js";function u({side:e,defaultOpen:t}){return(0,d.jsxs)(o,{defaultOpen:t,children:[(0,d.jsx)(a,{asChild:!0,children:(0,d.jsx)(c,{variant:`outline`,size:`icon`,"aria-label":`Copiar nº do processo`,children:(0,d.jsx)(n,{})})}),(0,d.jsx)(i,{side:e,children:`Copiar nº do processo`})]})}var d,f,p,m,h,g;function _(){return(_=e((()=>{l(),s(),r(),d=t(),f={title:`Componentes/Feedback/Tooltip`,component:o,parameters:{docs:{description:{component:"Rótulo curto de texto que aparece ao passar o mouse ou focar um controle. Obrigatório em botões só com ícone (copiar nº do processo, anexar, filtrar).\n\n**Quando não usar**\n- Conteúdo interativo (links, botões, campos): use Popover.\n- Prévia rica de um registro ao passar o mouse: use Hover Card.\n- Informação essencial para concluir a tarefa: deixe-a visível na tela; tooltip não aparece em toque.\n\n**Anatomia**: `Tooltip` (raiz, já inclui o `TooltipProvider` com atraso de 200 ms), `TooltipTrigger` (use `asChild` sobre o botão) e `TooltipContent` (balão com seta; `side` define a posição). `TooltipProvider` pode envolver a aplicação para ajustar `delayDuration` de forma global.\n\n**Acessibilidade**: o tooltip não substitui o nome acessível. Em botões com ícone, mantenha `aria-label` com o mesmo texto do tooltip."}}},args:{content:`Copiar nº do processo`,side:`top`,align:`center`,sideOffset:4,defaultOpen:!1,delayDuration:200},argTypes:{content:{control:`text`,description:"Texto do `TooltipContent`."},side:{control:`inline-radio`,options:[`top`,`bottom`,`left`,`right`],description:`Lado do gatilho onde o balão aparece.`},align:{control:`inline-radio`,options:[`start`,`center`,`end`],description:`Alinhamento do balão em relação ao gatilho.`},sideOffset:{control:{type:`range`,min:0,max:16,step:1},description:`Distância em px até o gatilho.`},defaultOpen:{control:`boolean`,description:`Começa aberto (remonta ao mudar).`},delayDuration:{control:{type:`range`,min:0,max:1e3,step:50},description:`Atraso em ms até abrir no hover.`},open:{control:!1},onOpenChange:{table:{disable:!0}},children:{table:{disable:!0}}}},p={render:({content:e,side:t,align:r,sideOffset:s,...l})=>(0,d.jsx)(`div`,{className:`flex h-32 w-64 items-center justify-center`,children:(0,d.jsxs)(o,{...l,children:[(0,d.jsx)(a,{asChild:!0,children:(0,d.jsx)(c,{variant:`outline`,size:`icon`,"aria-label":e,children:(0,d.jsx)(n,{})})}),(0,d.jsx)(i,{side:t,align:r,sideOffset:s,children:e})]},String(l.defaultOpen))})},m={tags:[`!autodocs`],render:()=>(0,d.jsx)(`div`,{className:`flex h-32 w-64 items-end justify-center pb-4`,children:(0,d.jsx)(u,{defaultOpen:!0})})},h={tags:[`!autodocs`],render:()=>(0,d.jsx)(`div`,{className:`grid grid-cols-4 gap-x-52 py-16 pr-48 pl-44`,children:[`top`,`bottom`,`left`,`right`].map(e=>(0,d.jsx)(u,{side:e,defaultOpen:!0},e))})},g=[`Default`,`Open`,`Sides`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    content,
    side,
    align,
    sideOffset,
    ...args
  }) => <div className="flex h-32 w-64 items-center justify-center">
      <Tooltip key={String(args.defaultOpen)} {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label={content}>
            <Copy />
          </Button>
        </TooltipTrigger>
        <TooltipContent side={side} align={align} sideOffset={sideOffset}>{content}</TooltipContent>
      </Tooltip>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: () => <div className="flex h-32 w-64 items-end justify-center pb-4">
      <CopyProcessNumber defaultOpen />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: () => <div className="grid grid-cols-4 gap-x-52 py-16 pr-48 pl-44">
      {(["top", "bottom", "left", "right"] as const).map(side => <CopyProcessNumber key={side} side={side} defaultOpen />)}
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{p as Default,m as Open,h as Sides,g as __namedExportsOrder,f as default};
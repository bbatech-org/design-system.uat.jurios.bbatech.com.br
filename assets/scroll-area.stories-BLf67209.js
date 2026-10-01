import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./file-text-BIUmgn_r.js";import{n as r,r as i,t as a}from"./scroll-area-BD2WWraD.js";import{r as o}from"./icons.stories-CuLmnsRb.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{o(),i(),s=t(),c={title:`Componentes/Layout/Scroll Area`,component:a,args:{type:`auto`,scrollHideDelay:600},argTypes:{type:{control:`inline-radio`,options:[`auto`,`always`,`scroll`,`hover`],description:"Quando a barra aparece: com overflow (`auto`), sempre, ao rolar ou no hover."},scrollHideDelay:{control:{type:`range`,min:0,max:2e3,step:100},description:"Atraso em ms para esconder a barra (`scroll`/`hover`)."},dir:{control:`inline-radio`,options:[`ltr`,`rtl`],description:`Direção de leitura (lado da barra).`},asChild:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{docs:{description:{component:'Área de altura ou largura fixa com barra de rolagem estilizada e igual em todos os sistemas. Baseado no Radix Scroll Area: a rolagem continua nativa (roda do mouse, toque, teclado).\n\n**Quando usar**\n- Listas dentro de cards, popovers, painéis e na Sidebar (publicações do dia, anexos).\n- Faixas horizontais de miniaturas de documentos.\n\n**Quando não usar**\n- A página inteira: deixe a rolagem do navegador.\n- Listas muito longas: pagine (Pagination) ou use Data Table.\n\n**Anatomia**\n- `ScrollArea`: defina altura e largura no `className`. `type` padrão `"auto"` (a barra aparece sempre que há overflow); o Radix também aceita `"hover"`, `"scroll"` e `"always"`.\n- `ScrollBar`: a vertical já vem incluída. Para rolagem horizontal, adicione `<ScrollBar orientation="horizontal" />` como filho e dê `w-max` ao conteúdo.\n\n```tsx\n<ScrollArea className="h-70 w-70">\n  <div className="p-4 pr-6">{/* itens */}</div>\n</ScrollArea>\n```\n\n**UX**\n- Reserve espaço para a barra (ex.: `pr-6` no conteúdo) para ela não cobrir o texto.'}}}},l=Array.from({length:20},(e,t)=>`DJe · 24/09/2026 · #${1001+t}`),u={render:e=>(0,s.jsx)(a,{...e,className:`h-70 w-70 rounded-surface bg-card`,children:(0,s.jsxs)(`div`,{className:`p-4 pr-6`,children:[(0,s.jsx)(`p`,{className:`mb-1 text-title-sm`,children:`Publicações de hoje`}),l.map(e=>(0,s.jsx)(`div`,{className:`border-b border-border py-2.5 text-body-sm last:border-0`,children:e},e))]})})},d=[`Petição inicial`,`Procuração`,`Contestação`,`Réplica`,`Laudo pericial`,`Sentença`,`Apelação`,`Contrarrazões`],f={parameters:{docs:{description:{story:`Rolagem horizontal: conteúdo com w-max e ScrollBar orientation="horizontal".`}}},render:()=>(0,s.jsxs)(a,{className:`w-[480px] rounded-surface bg-card`,children:[(0,s.jsx)(`div`,{className:`flex w-max gap-4 p-4 pb-6`,children:d.map(e=>(0,s.jsxs)(`figure`,{className:`flex w-32 shrink-0 flex-col gap-2`,children:[(0,s.jsx)(`div`,{className:`flex h-44 items-center justify-center rounded-surface bg-muted text-muted-foreground`,children:(0,s.jsx)(n,{className:`size-5`,"aria-hidden":!0})}),(0,s.jsxs)(`figcaption`,{className:`text-label-sm`,children:[e,`.pdf`]})]},e))}),(0,s.jsx)(r,{orientation:`horizontal`})]})},p=[`Default`,`Horizontal`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ScrollArea {...args} className="h-70 w-70 rounded-surface bg-card">
      <div className="p-4 pr-6">
        <p className="mb-1 text-title-sm">Publicações de hoje</p>
        {publications.map(item => <div key={item} className="border-b border-border py-2.5 text-body-sm last:border-0">
            {item}
          </div>)}
      </div>
    </ScrollArea>
}`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Rolagem horizontal: conteúdo com w-max e ScrollBar orientation=\\"horizontal\\"."
      }
    }
  },
  render: () => <ScrollArea className="w-[480px] rounded-surface bg-card">
      <div className="flex w-max gap-4 p-4 pb-6">
        {documents.map(name => <figure key={name} className="flex w-32 shrink-0 flex-col gap-2">
            <div className="flex h-44 items-center justify-center rounded-surface bg-muted text-muted-foreground">
              <FileText className="size-5" aria-hidden />
            </div>
            <figcaption className="text-label-sm">{name}.pdf</figcaption>
          </figure>)}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
}`,...f.parameters?.docs?.source}}}})))()}m();export{u as Default,f as Horizontal,p as __namedExportsOrder,c as default};
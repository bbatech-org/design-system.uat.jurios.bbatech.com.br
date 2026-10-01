import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./image-B4cRYtUL.js";import{t as r}from"./user-C-USvdz7.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./avatar-DijTmny6.js";import{r as d}from"./icons.stories-CuLmnsRb.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{d(),l(),f=t(),p={title:`Componentes/Exibição de dados/Avatar`,component:u,parameters:{docs:{description:{component:'Representa uma pessoa ou organização (advogado responsável, cliente, parte) com foto, iniciais ou ícone. Tamanhos `sm` 24, `default` 32, `lg` 40 e `xl` 64.\n\n**Anatomia**\n- `Avatar`: raiz, com `size`.\n- `AvatarImage`: foto. Enquanto carrega, ou se falhar, aparece o `AvatarFallback`.\n- `AvatarFallback`: iniciais (duas letras) ou ícone.\n- `AvatarBadge`: indicador no canto (ex.: online). Defina a cor com `className` (`bg-success`).\n- `AvatarGroup` e `AvatarGroupCount`: avatares sobrepostos e o contador dos ocultos ("+4").\n\n```tsx\n<Avatar size="lg">\n  <AvatarImage src="/img/ana-lima.jpg" alt="Ana Lima" />\n  <AvatarFallback>AL</AvatarFallback>\n</Avatar>\n```\n\n**Acessibilidade**\n- `AvatarImage` precisa de `alt` com o nome. Se o nome já aparece ao lado do avatar, use `alt=""`.\n- Status só por cor não basta: mostre o status em texto por perto ou passe `aria-label` ao `AvatarBadge` (ele vira `role="img"`). Sem `aria-label`, o badge fica `aria-hidden`.\n- No `AvatarGroupCount`, informe quem está oculto com `aria-label` ("Mais 4 responsáveis: …"): o contador vira `role="img"` e o nome substitui o "+4". Sem `aria-label`, o "+4" é lido como texto.'}}},args:{size:`default`,src:``,alt:`Maria da Silva`,fallback:`MS`,showBadge:!1},argTypes:{size:{control:`inline-radio`,options:[`sm`,`default`,`lg`,`xl`],description:`Tamanho: 24, 32, 40 ou 64 px.`},src:{control:`text`,description:`URL da foto (AvatarImage). Vazio mostra o fallback.`},alt:{control:`text`,description:`Texto alternativo da foto.`},fallback:{control:`text`,description:`Iniciais exibidas sem foto (AvatarFallback).`},showBadge:{control:`boolean`,description:`Mostra o AvatarBadge de status (online).`},asChild:{table:{disable:!0}},className:{table:{disable:!0}}}},m=[`sm`,`default`,`lg`,`xl`],h={render:({src:e,alt:t,fallback:n,showBadge:r,...i})=>(0,f.jsxs)(u,{...i,children:[e&&(0,f.jsx)(s,{src:e,alt:t}),(0,f.jsx)(c,{children:n}),r&&(0,f.jsx)(o,{className:`bg-success`,"aria-label":`Online`})]})},g={parameters:{docs:{description:{story:`Foto com fallback de iniciais, exibido enquanto a imagem carrega ou se ela falhar.`}}},render:()=>(0,f.jsxs)(u,{size:`lg`,children:[(0,f.jsx)(s,{src:`/img/1573496359142-b8d87734a5a2.jpg`,alt:`Ana Lima`}),(0,f.jsx)(c,{children:`AL`})]})},_={render:()=>(0,f.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(4,4rem)] items-center justify-items-center gap-y-6 rounded-surface bg-card p-8`,children:[(0,f.jsx)(`span`,{}),m.map(e=>(0,f.jsx)(`span`,{className:`text-caption text-muted-foreground`,children:e},e)),(0,f.jsx)(`span`,{className:`justify-self-end pr-6 text-caption text-muted-foreground`,children:`fallback`}),m.map(e=>(0,f.jsx)(u,{size:e,children:(0,f.jsx)(c,{children:`MS`})},e)),(0,f.jsx)(`span`,{className:`justify-self-end pr-6 text-caption text-muted-foreground`,children:`image`}),m.map(e=>(0,f.jsx)(u,{size:e,children:(0,f.jsx)(c,{children:(0,f.jsx)(n,{"aria-hidden":!0})})},e)),(0,f.jsx)(`span`,{className:`justify-self-end pr-6 text-caption text-muted-foreground`,children:`icon`}),m.map(e=>(0,f.jsx)(u,{size:e,children:(0,f.jsx)(c,{children:(0,f.jsx)(r,{"aria-hidden":!0})})},e))]})},v={parameters:{docs:{description:{story:`Responsáveis de um processo sobrepostos, com contador dos ocultos.`}}},render:()=>(0,f.jsxs)(a,{children:[(0,f.jsx)(u,{children:(0,f.jsx)(c,{children:`MS`})}),(0,f.jsx)(u,{children:(0,f.jsx)(c,{children:`JP`})}),(0,f.jsx)(u,{children:(0,f.jsx)(c,{children:`AL`})}),(0,f.jsx)(i,{"aria-label":`Mais 4 responsáveis: Carla Nunes, Rafael Souza, Beatriz Melo e Thiago Reis`,children:`+4`})]})},y={parameters:{docs:{description:{story:`Indicador de status no canto, proporcional a cada tamanho.`}}},render:()=>(0,f.jsx)(`div`,{className:`flex items-center gap-6`,children:m.map(e=>(0,f.jsxs)(u,{size:e,children:[(0,f.jsx)(c,{children:`MS`}),(0,f.jsx)(o,{className:`bg-success`,"aria-label":`Online`})]},e))})},b=[`Default`,`WithImage`,`Sizes`,`Group`,`WithBadge`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: ({
    src,
    alt,
    fallback,
    showBadge,
    ...args
  }) => <Avatar {...args}>
      {src && <AvatarImage src={src} alt={alt} />}
      <AvatarFallback>{fallback}</AvatarFallback>
      {showBadge && <AvatarBadge className="bg-success" aria-label="Online" />}
    </Avatar>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Foto com fallback de iniciais, exibido enquanto a imagem carrega ou se ela falhar."
      }
    }
  },
  render: () => <Avatar size="lg">
      <AvatarImage src="/img/1573496359142-b8d87734a5a2.jpg" alt="Ana Lima" />
      <AvatarFallback>AL</AvatarFallback>
    </Avatar>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-[auto_repeat(4,4rem)] items-center justify-items-center gap-y-6 rounded-surface bg-card p-8">
      <span />
      {sizes.map(size => <span key={size} className="text-caption text-muted-foreground">{size}</span>)}
      <span className="justify-self-end pr-6 text-caption text-muted-foreground">fallback</span>
      {sizes.map(size => <Avatar key={size} size={size}><AvatarFallback>MS</AvatarFallback></Avatar>)}
      <span className="justify-self-end pr-6 text-caption text-muted-foreground">image</span>
      {sizes.map(size => <Avatar key={size} size={size}><AvatarFallback><Image aria-hidden /></AvatarFallback></Avatar>)}
      <span className="justify-self-end pr-6 text-caption text-muted-foreground">icon</span>
      {sizes.map(size => <Avatar key={size} size={size}><AvatarFallback><User aria-hidden /></AvatarFallback></Avatar>)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Responsáveis de um processo sobrepostos, com contador dos ocultos."
      }
    }
  },
  render: () => <AvatarGroup>
      <Avatar><AvatarFallback>MS</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>JP</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>AL</AvatarFallback></Avatar>
      <AvatarGroupCount aria-label="Mais 4 responsáveis: Carla Nunes, Rafael Souza, Beatriz Melo e Thiago Reis">+4</AvatarGroupCount>
    </AvatarGroup>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Indicador de status no canto, proporcional a cada tamanho."
      }
    }
  },
  render: () => <div className="flex items-center gap-6">
      {sizes.map(size => <Avatar key={size} size={size}>
          <AvatarFallback>MS</AvatarFallback>
          <AvatarBadge className="bg-success" aria-label="Online" />
        </Avatar>)}
    </div>
}`,...y.parameters?.docs?.source}}}})))()}x();export{h as Default,v as Group,_ as Sizes,y as WithBadge,g as WithImage,b as __namedExportsOrder,p as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,r,t as i}from"./phone-BgaCOaUh.js";import{n as a,t as o}from"./contact-row-D0TBCVlY.js";import{r as s}from"./icons.stories-CuLmnsRb.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{s(),a(),c=t(),l={Phone:(0,c.jsx)(i,{}),Mail:(0,c.jsx)(n,{}),MapPin:(0,c.jsx)(r,{})},u={title:`Website/Blocos/ContactRow`,component:o,parameters:{docs:{description:{component:[`Linha de contato do rodapé: ícone em círculo com borda e o texto do contato, tudo clicável.`,``,`**Onde aparece:** bloco de endereço do SiteFooter (telefone, e-mail, endereço).`,``,"**Props de conteúdo:** `icon` (Lucide, dimensionado para 16px), `children` (texto visível) e `href` (`tel:`, `mailto:` ou link do mapa). Agrupe várias linhas dentro de `<address>`."].join(`
`)}}},args:{icon:`Phone`,children:`(11) 4002-8922`,href:`tel:+551140028922`},argTypes:{icon:{control:`select`,options:Object.keys(l),mapping:l,description:`Ícone Lucide à esquerda.`},children:{control:`text`,description:`Texto visível do contato.`},href:{control:`text`,description:"Destino: `tel:`, `mailto:` ou link do mapa."},className:{table:{disable:!0}}}},d={},f={parameters:{docs:{description:{story:`Três contatos empilhados como no rodapé.`}}},render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,c.jsx)(o,{icon:(0,c.jsx)(i,{}),href:`tel:+551140028922`,children:`(11) 4002-8922`}),(0,c.jsx)(o,{icon:(0,c.jsx)(n,{}),href:`mailto:contato@jurios.com.br`,children:`contato@jurios.com.br`}),(0,c.jsx)(o,{icon:(0,c.jsx)(r,{}),href:`#endereco`,children:`Av. Paulista, 1000 · São Paulo, SP`})]})},p=[`Default`,`List`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Três contatos empilhados como no rodapé."
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      <ContactRow icon={<Phone />} href="tel:+551140028922">(11) 4002-8922</ContactRow>
      <ContactRow icon={<Mail />} href="mailto:contato@jurios.com.br">contato@jurios.com.br</ContactRow>
      <ContactRow icon={<MapPin />} href="#endereco">Av. Paulista, 1000 · São Paulo, SP</ContactRow>
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Default,f as List,p as __namedExportsOrder,u as default};
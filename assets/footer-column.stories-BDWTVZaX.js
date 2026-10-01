import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./footer-column-D768ANMR.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a=e=>({label:e,href:`#${e.toLowerCase()}`}),o={title:`Website/Blocos/FooterColumn`,component:r,parameters:{docs:{description:{component:[`Coluna de links do rodapé com cabeçalho em IBM Plex Mono caixa alta.`,``,`**Onde aparece:** colunas Produto, Planos, Ajuda e JuriOS do SiteFooter.`,``,"**Props de conteúdo:** `title` e `links` (`{ label, href }[]`). Cada coluna é um `<nav>` rotulado pelo próprio `title`, então use títulos distintos entre colunas."].join(`
`)}}},args:{title:`Produto`,links:[`Processos`,`Prazos`,`Financeiro`,`Documentos`,`Relatórios`,`Integrações`,`Segurança`].map(a)},argTypes:{title:{control:`text`,description:`Título da coluna.`},links:{control:`object`,description:"Links da coluna (`{ label, href }[]`)."},className:{table:{disable:!0}}}},s={},c={parameters:{docs:{description:{story:`Colunas com quantidades diferentes de links lado a lado.`}}},render:()=>(0,i.jsxs)(`div`,{className:`flex gap-10`,children:[(0,i.jsx)(r,{title:`Planos`,links:[`Autônomo`,`Escritório`,`Departamento`].map(a)}),(0,i.jsx)(r,{title:`Ajuda`,links:[`Central de ajuda`,`Implantação`,`Blog`,`Webinars`,`Eventos`].map(a)})]})},l=[`Default`,`Sizes`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Colunas com quantidades diferentes de links lado a lado."
      }
    }
  },
  render: () => <div className="flex gap-10">
      <FooterColumn title="Planos" links={["Autônomo", "Escritório", "Departamento"].map(link)} />
      <FooterColumn title="Ajuda" links={["Central de ajuda", "Implantação", "Blog", "Webinars", "Eventos"].map(link)} />
    </div>
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Default,c as Sizes,l as __namedExportsOrder,o as default};
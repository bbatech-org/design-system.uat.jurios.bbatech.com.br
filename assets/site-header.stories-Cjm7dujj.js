import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./site-header-lbnXvuLL.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Website/Blocos/SiteHeader`,component:n,parameters:{layout:`fullscreen`,docs:{description:{component:['Barra superior do site: 56px, fundo `card`, logo, navegação principal, "Contato" e o botão "Criar conta".',``,"**Onde aparece:** por padrão dentro da HeroSection (prop `header`). Em páginas sem hero, renderize-a no topo.",``,'**Props de conteúdo:** `links` (`{ label, href }[]`), `secondaryAction` (`{ label, href }`, padrão "Contato" em `#contato`), `signUpLabel`, `signUpHref` e `menuLabel` (rótulo acessível do botão de menu, padrão "Abrir menu").',``,`**Responsividade:** abaixo de 1024 os links saem da barra e aparece o botão de menu, que abre um Sheet à direita (sem raio) com os mesmos links, a ação secundária e "Criar conta"; tocar em um link fecha o painel. "Contato" some da barra abaixo de 640 e continua no menu.`,``,'**Acessibilidade:** o menu é um Dialog do Radix (foco preso, Esc fecha, foco volta ao botão) com título "Menu" e `nav` rotulada "Principal".'].join(`
`)}}},args:{links:[{label:`Produto`,href:`#produto`},{label:`Soluções`,href:`#solucoes`},{label:`Recursos`,href:`#recursos`},{label:`Clientes`,href:`#clientes`},{label:`Preços`,href:`#precos`}],secondaryAction:{label:`Contato`,href:`#contato`},signUpLabel:`Criar conta`,signUpHref:`#criar-conta`,menuLabel:`Abrir menu`},argTypes:{links:{control:`object`,description:"Links da navegação principal (`{ label, href }[]`)."},secondaryAction:{control:`object`,description:"Link de texto antes do botão (`{ label, href }`)."},signUpLabel:{control:`text`,description:`Rótulo do botão principal.`},signUpHref:{control:`text`,description:`Destino do botão principal.`},menuLabel:{control:`text`,description:`Rótulo acessível do botão de menu móvel.`},className:{table:{disable:!0}}}},i={},a={globals:{viewport:{value:`mobile1`,isRotated:!1}},parameters:{docs:{description:{story:`Abaixo de 1024: logo, "Criar conta" e botão de menu, que abre o Sheet com a navegação.`}}}},o={parameters:{docs:{description:{story:`Ação secundária trocada por prop.`}}},args:{secondaryAction:{label:`Entrar`,href:`#entrar`}}},s=[`Default`,`Mobile`,`CustomSecondaryAction`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Abaixo de 1024: logo, \\"Criar conta\\" e botão de menu, que abre o Sheet com a navegação."
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ação secundária trocada por prop."
      }
    }
  },
  args: {
    secondaryAction: {
      label: "Entrar",
      href: "#entrar"
    }
  }
}`,...o.parameters?.docs?.source}}}})))()}c();export{o as CustomSecondaryAction,i as Default,a as Mobile,s as __namedExportsOrder,r as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./faq-D1TIcCcE.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Website/Seções/Faq`,component:n,parameters:{layout:`fullscreen`,docs:{description:{component:[`Perguntas frequentes: cabeçalho central e Accordion de itens com uma resposta aberta por vez.`,``,'**Blocos:** Section (`tone="muted"`), Container, SectionHeading e Accordion (Componentes/Navegação).',``,"**Props de conteúdo:** `eyebrow`, `title` e `items` (`{ question, answer }[]`; `answer` aceita ReactNode, como links).",``,`**Responsividade:** a lista fica centralizada com no máximo 720px em qualquer largura; no mobile o título cai para 40px.`,``,`Mantenha as perguntas curtas e sem repetir o que a página já diz.`].join(`
`)}}},args:{eyebrow:`Perguntas`,title:`Perguntas frequentes`,items:[{question:`Por que escolher o JuriOS?`,answer:`Porque processos, prazos, publicações e financeiro ficam no mesmo lugar, com a conferência feita por agentes de IA e revisada pela sua equipe.`},{question:`Quais módulos estão disponíveis hoje?`,answer:`Processos, Prazos e Financeiro, com Publicações, Documentos e Relatórios inclusos em todos os planos.`},{question:`Integra com o PJe e os tribunais?`,answer:`Sim. O JuriOS lê intimações do PJe, e-SAJ e Projudi e vincula cada publicação ao processo pelo número CNJ.`},{question:`Vocês oferecem plano anual com desconto?`,answer:`Sim. No plano anual você paga 10 meses e usa 12, sem fidelidade além do período contratado.`}]},argTypes:{eyebrow:{control:`text`,description:`Texto acima do título.`},title:{control:`text`,description:`Título da seção.`},items:{control:`object`,description:"Perguntas e respostas (`{ question, answer }[]`)."},className:{table:{disable:!0}}}},i={},a={parameters:{docs:{description:{story:`Título e perguntas próprios, passados por props.`}}},args:{title:`Dúvidas sobre a migração`,items:[{question:`Quanto tempo leva a migração?`,answer:`Em média 7 dias úteis para escritórios com até 2.000 processos ativos.`},{question:`Posso importar do sistema atual?`,answer:`Sim. Importamos planilhas e exportações dos principais sistemas jurídicos.`}]}},o=[`Default`,`CustomItems`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Título e perguntas próprios, passados por props."
      }
    }
  },
  args: {
    title: "Dúvidas sobre a migração",
    items: [{
      question: "Quanto tempo leva a migração?",
      answer: "Em média 7 dias úteis para escritórios com até 2.000 processos ativos."
    }, {
      question: "Posso importar do sistema atual?",
      answer: "Sim. Importamos planilhas e exportações dos principais sistemas jurídicos."
    }]
  }
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as CustomItems,i as Default,o as __namedExportsOrder,r as default};
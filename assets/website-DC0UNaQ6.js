import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,a as n,o as r,w as i}from"./blocks-C28dQhNi.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Website/Visão geral`}),`
`,(0,c.jsx)(t.h1,{id:`website`,children:`Website`}),`
`,(0,c.jsx)(t.p,{children:`Peças do site institucional do JuriOS. Ficam separadas dos componentes do produto e são importadas de um ponto de entrada próprio.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import "@bbatech-org/design-system/fonts.css";
import "@bbatech-org/design-system/styles.css";
import { Container, HeroSection, ModulesSection, Section, SectionHeading, SiteFooter } from "@bbatech-org/design-system/website";
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Componentes do produto usados junto com as seções (Button, Input, Accordion) vêm de `,(0,c.jsx)(t.code,{children:`@bbatech-org/design-system`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`hierarquia`,children:`Hierarquia`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Blocos`}),` (`,(0,c.jsx)(t.code,{children:`Website/Blocos`}),`): peças pequenas com uma função só, como ModuleCard, TestimonialCard, QuickLink, ActionLink e Stars. Recebem conteúdo por props e não definem layout de página.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Seções`}),` (`,(0,c.jsx)(t.code,{children:`Website/Seções`}),`): faixas completas montadas com blocos, como HeroSection, ModulesSection e SiteFooter. Todas trazem conteúdo padrão e aceitam props para trocar textos, imagens, links e listas.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Páginas`}),` (`,(0,c.jsx)(t.code,{children:`Website/Páginas`}),`): composição de seções. A Landing é a referência; páginas novas compõem as seções diretamente.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Na dúvida, suba um nível: se falta uma faixa inteira, componha blocos dentro de Section e Container antes de criar um bloco novo.`}),`
`,(0,c.jsx)(t.h2,{id:`container-e-section`,children:`Container e Section`}),`
`,(0,c.jsx)(t.p,{children:`Toda faixa do site segue a mesma base, exportada pelo bloco Container:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Section`}),`: faixa de largura total com respiro vertical (`,(0,c.jsx)(t.code,{children:`spacing`}),`: `,(0,c.jsx)(t.code,{children:`default`}),` 80px no mobile e 128px a partir de 768, `,(0,c.jsx)(t.code,{children:`compact`}),` 64/96, `,(0,c.jsx)(t.code,{children:`footer`}),`, `,(0,c.jsx)(t.code,{children:`none`}),`) e fundo (`,(0,c.jsx)(t.code,{children:`tone`}),`: `,(0,c.jsx)(t.code,{children:`background`}),`, `,(0,c.jsx)(t.code,{children:`card`}),`, `,(0,c.jsx)(t.code,{children:`muted`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Container`}),`: coluna central com até 1200px de conteúdo e gutters de 24px.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`SectionHeading`}),`: eyebrow, título e descrição, centralizado ou alinhado ao início.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`SectionEyebrow`}),`: eyebrow isolado para cabeçalhos divididos (título à esquerda, texto à direita).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Section tone="muted">
  <Container className="flex flex-col gap-16">
    <SectionHeading
      eyebrow="Clientes"
      title="Escolhido por quem não perde prazo"
      description="Advogados autônomos, bancas e departamentos jurídicos."
    />
    {/* blocos */}
  </Container>
</Section>
`})}),`
`,(0,c.jsx)(t.h2,{id:`regras-visuais`,children:`Regras visuais`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sem gradientes.`}),` Faixas se separam pela troca de `,(0,c.jsx)(t.code,{children:`tone`}),`; cards, por `,(0,c.jsx)(t.code,{children:`shadow-card`}),`. Fotos recebem véu sólido de `,(0,c.jsx)(t.code,{children:`overlay`}),` (45%), nunca degradê.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sem bordas em superfícies.`}),` Filetes só em divisórias (SupportColumn, FeatureTab, QuickLinkGrid).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Eyebrow em mono.`}),` Todo título de seção pode ter um eyebrow em IBM Plex Mono 11, caixa alta, `,(0,c.jsx)(t.code,{children:`muted-foreground`}),` (`,(0,c.jsx)(t.code,{children:`text-overline`}),`). Curto: uma a três palavras.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ênfase Newsreader pontual.`}),` `,(0,c.jsx)(t.code,{children:`text-emphasis`}),` (Newsreader Medium Italic) marca no máximo um trecho por título, como "gerir o `,(0,c.jsx)(t.em,{children:`escritório jurídico`}),`" ou "JuriOS `,(0,c.jsx)(t.em,{children:`Processos`}),`". Nunca em parágrafos, botões ou rótulos.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dourado estratégico.`}),` `,(0,c.jsx)(t.code,{children:`brand-accent`}),` só no logo, no ActionLink e nas estrelas.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Títulos no mobile.`}),` Abaixo de 768 os títulos das seções caem para 36 a 44px; quebras manuais (`,(0,c.jsx)(t.code,{children:`<br className="max-md:hidden" />`}),`) somem.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Imagens`}),` servidas de `,(0,c.jsx)(t.code,{children:`/img/<arquivo>.jpg`}),`. Foto decorativa com `,(0,c.jsx)(t.code,{children:`alt=""`}),`; foto informativa com descrição real.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=a(),t(),r()})))()}l();export{s as default};
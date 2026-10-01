import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,t as a}from"./container-BTHqApni.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),o=t(),s={title:`Website/Blocos/Container`,component:i,parameters:{layout:`fullscreen`,docs:{description:{component:[`Base de layout de todas as seções do site. Não tem visual próprio: define largura, gutters, respiro vertical e fundo.`,``,`**Anatomia**`,"- `Section`: faixa `<section>` de largura total. `spacing`: `default` (80px no mobile, 128px a partir de 768), `compact` (64/96), `footer` (topo 80/128, base 48) e `none` (sem padding). `tone`: `background`, `card` ou `muted`.","- `Container`: coluna central com largura máxima de 1248px (1200px de conteúdo) e gutter lateral de 24px em todos os breakpoints.","- `SectionHeading`: eyebrow, título `text-heading-1` (40px abaixo de 768) e descrição; `align` `center` (padrão) ou `start`.","- `SectionEyebrow`: eyebrow isolado em IBM Plex Mono 11, caixa alta, `muted-foreground`. Use quando o título não segue o SectionHeading (cabeçalhos divididos).",``,"```tsx",`<Section tone="muted">`,`  <Container className="flex flex-col gap-16">`,`    <SectionHeading`,`      eyebrow="Módulos"`,`      title="Feito para a rotina jurídica."`,`      description="Três módulos que conversam entre si."`,`    />`,`    {/* blocos */}`,`  </Container>`,`</Section>`,"```",``,"**Regras:** separe faixas vizinhas pelo `tone`, nunca com bordas ou gradientes. Evite duas faixas `muted` seguidas. Não use Section e Container dentro do app; lá o layout vem de AppShell e PageHeader."].join(`
`)}}},args:{spacing:`default`,tone:`muted`},argTypes:{spacing:{control:`inline-radio`,options:[`default`,`compact`,`footer`,`none`],description:`Padding vertical da faixa.`},tone:{control:`inline-radio`,options:[`background`,`card`,`muted`],description:`Fundo da faixa.`},className:{table:{disable:!0}}}},c={render:e=>(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{children:(0,o.jsx)(r,{eyebrow:`Módulos`,title:`Feito para a rotina jurídica.`,description:`Seções de 128 de padding vertical e conteúdo com máximo de 1200 e gutters de 24.`})})})},l={parameters:{docs:{description:{story:`Os três fundos de seção. A alternância entre eles é o que separa as faixas da landing.`}}},render:()=>(0,o.jsx)(o.Fragment,{children:[`card`,`background`,`muted`].map(e=>(0,o.jsx)(i,{tone:e,spacing:`compact`,children:(0,o.jsx)(a,{children:(0,o.jsx)(r,{align:`start`,eyebrow:`tone=${e}`,title:`Controle o escritório`})})},e))})},u=[`Default`,`Tones`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Section {...args}>
      <Container>
        <SectionHeading eyebrow="Módulos" title="Feito para a rotina jurídica." description="Seções de 128 de padding vertical e conteúdo com máximo de 1200 e gutters de 24." />
      </Container>
    </Section>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Os três fundos de seção. A alternância entre eles é o que separa as faixas da landing."
      }
    }
  },
  render: () => <>
      {(["card", "background", "muted"] as const).map(tone => <Section key={tone} tone={tone} spacing="compact">
          <Container>
            <SectionHeading align="start" eyebrow={\`tone=\${tone}\`} title="Controle o escritório" />
          </Container>
        </Section>)}
    </>
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Default,l as Tones,u as __namedExportsOrder,s as default};
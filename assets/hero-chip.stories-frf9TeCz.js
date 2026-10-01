import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./calendar-check-BbIAh5gY.js";import{t as i}from"./wallet-fyXtX6Kd.js";import{n as a,t as o}from"./hero-chip-Bk35_MYa.js";import{r as s}from"./icons.stories-CuLmnsRb.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{s(),a(),c=t(),l={CalendarCheck:(0,c.jsx)(r,{}),BellRing:(0,c.jsx)(n,{}),Wallet:(0,c.jsx)(i,{})},u={title:`Website/Blocos/HeroChip`,component:o,parameters:{layout:`padded`,docs:{description:{component:["Aviso flutuante sobre a foto do hero: fundo `overlay` a 82%, raio 16, ícone e texto claro. Mostra eventos reais do produto (prazo cadastrado, intimação lida).",``,`**Onde aparece:** coluna de avisos na mídia da HeroSection.`,``,"**Props de conteúdo:** `icon` (Lucide, 18px) e `children` (texto curto, uma linha).",``,`**Quando usar:** só sobre fotos ou fundos escuros. **Quando não usar:** notificações reais do app (use Toast ou Alert).`].join(`
`)}}},args:{icon:`CalendarCheck`,children:`Prazo cadastrado · Recurso, 15 dias úteis`},argTypes:{icon:{control:`select`,options:Object.keys(l),mapping:l,description:`Ícone Lucide à esquerda.`},children:{control:`text`,description:`Texto curto do aviso.`},className:{table:{disable:!0}}},render:e=>(0,c.jsx)(`div`,{className:`rounded-surface bg-[url(/img/1551434678-e076c223a692.jpg)] bg-cover p-10`,children:(0,c.jsx)(o,{...e})})},d={},f={parameters:{docs:{description:{story:`Pilha de avisos como na mídia do hero.`}}},render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-3 rounded-surface bg-[url(/img/1551434678-e076c223a692.jpg)] bg-cover p-10`,children:[(0,c.jsx)(o,{icon:(0,c.jsx)(r,{}),children:`Prazo cadastrado · Recurso, 15 dias úteis`}),(0,c.jsx)(o,{icon:(0,c.jsx)(n,{}),children:`Intimação lida no PJe às 09:41`}),(0,c.jsx)(o,{icon:(0,c.jsx)(i,{}),children:`Honorários de hoje já disponíveis`})]})},p=[`Default`,`Stack`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pilha de avisos como na mídia do hero."
      }
    }
  },
  render: () => <div className="flex flex-col gap-3 rounded-surface bg-[url(/img/1551434678-e076c223a692.jpg)] bg-cover p-10">
      <HeroChip icon={<CalendarCheck />}>Prazo cadastrado · Recurso, 15 dias úteis</HeroChip>
      <HeroChip icon={<BellRing />}>Intimação lida no PJe às 09:41</HeroChip>
      <HeroChip icon={<Wallet />}>Honorários de hoje já disponíveis</HeroChip>
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Default,f as Stack,p as __namedExportsOrder,u as default};
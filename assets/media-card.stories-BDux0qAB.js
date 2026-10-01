import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./media-card-DvolymDI.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`Website/Blocos/MediaCard`,component:r,parameters:{layout:`padded`,docs:{description:{component:["Card com foto de fundo, véu `overlay` a 45%, título grande e botão secundário.",``,`**Onde aparece:** cards "Demonstração guiada", "Encontro mensal de sócios" e "Implantação assistida" da InPracticeSection.`,``,"**Props de conteúdo:** `title` (aceita `\\n` para quebrar a linha), `image`, `actionLabel` e `href`. Altura mínima de 320px (384px a partir de 768); aumente via `className` para a versão larga.",``,'**Acessibilidade:** a foto é decorativa (`alt=""`); o título e o rótulo do botão precisam fazer sentido sozinhos. Escolha fotos com contraste suficiente sob o véu.'].join(`
`)}}},args:{title:`Demonstração
guiada`,image:`/img/1497215728101-856f4ea42174.jpg`,actionLabel:`Agendar demo`,href:`#demo`},argTypes:{title:{control:`text`,description:"Título sobre a foto; `\\n` quebra a linha."},image:{control:`text`,description:`URL da foto de fundo.`},actionLabel:{control:`text`,description:`Rótulo do botão.`},href:{control:`text`,description:`Destino do botão.`},className:{table:{disable:!0}}},render:e=>(0,i.jsx)(`div`,{className:`w-full max-w-[588px]`,children:(0,i.jsx)(r,{...e})})},o={},s={parameters:{docs:{description:{story:`Versão de largura total com altura mínima de 640px, usada a partir do terceiro card.`}}},args:{title:`Implantação assistida
no seu escritório`,image:`/img/1552664730-d307ca884978.jpg`,actionLabel:`Agendar visita`},render:e=>(0,i.jsx)(`div`,{className:`w-full max-w-[1200px]`,children:(0,i.jsx)(r,{...e,className:`md:min-h-[640px]`})})},c=[`Default`,`Wide`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Versão de largura total com altura mínima de 640px, usada a partir do terceiro card."
      }
    }
  },
  args: {
    title: "Implantação assistida\\nno seu escritório",
    image: "/img/1552664730-d307ca884978.jpg",
    actionLabel: "Agendar visita"
  },
  render: args => <div className="w-full max-w-[1200px]">
      <MediaCard {...args} className="md:min-h-[640px]" />
    </div>
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Default,s as Wide,c as __namedExportsOrder,a as default};
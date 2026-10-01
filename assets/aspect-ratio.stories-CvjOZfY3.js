import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./file-text-BIUmgn_r.js";import{t as a}from"./image-B4cRYtUL.js";import{r as o,t as s}from"./dist-CyGynyiw.js";import{r as c}from"./icons.stories-CuLmnsRb.js";var l,u,d,f,p,m;function h(){return(h=t((()=>{l=e(n(),1),o(),u=r(),d=Object.defineProperty,f=(e,t)=>d(e,`name`,{value:t,configurable:!0}),p=l.forwardRef(f(function(e,t){let{ratio:n=1,style:r,...i}=e;return(0,u.jsx)(`div`,{style:{position:`relative`,width:`100%`,paddingBottom:`${100/n}%`},"data-radix-aspect-ratio-wrapper":``,children:(0,u.jsx)(s.div,{...i,ref:t,style:{...r,position:`absolute`,top:0,right:0,bottom:0,left:0}})})},`AspectRatio`)),m=p})))()}function g(e){return(0,_.jsx)(m,{"data-slot":`aspect-ratio`,...e})}var _;function v(){return(v=t((()=>{h(),_=r();try{g.displayName=`AspectRatio`,g.__docgenInfo={description:`Mantém a proporção do conteúdo (imagem, vídeo, miniatura de documento).`,displayName:`AspectRatio`,filePath:`/media/demax/development/clients/bbatech/jurios/jurios-design-system/src/components/layout/aspect-ratio/aspect-ratio.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`jurios-design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.1.10_@types+react-dom@19.3.0_@types+react@19.3.0__@types+re_f83f88542c24ef44463bf36336741c4c/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function y({label:e,document:t=!1}){return(0,b.jsxs)(`div`,{className:`flex size-full flex-col items-center justify-center gap-2 rounded-surface bg-muted text-muted-foreground`,children:[(0,b.jsx)(t?i:a,{className:`size-5`,"aria-hidden":!0}),(0,b.jsx)(`span`,{className:`text-code text-[13px]`,children:e})]})}var b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{c(),v(),b=r(),x={title:`Componentes/Layout/Aspect Ratio`,component:g,args:{ratio:16/9},argTypes:{ratio:{control:{type:`range`,min:.5,max:2.5,step:.05},description:`Proporção largura ÷ altura (16/9 ≈ 1,78; A4 ≈ 0,71).`},asChild:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{docs:{description:{component:"Mantém uma proporção fixa (largura ÷ altura) para imagens, vídeos e miniaturas de documentos, evitando saltos de layout enquanto a mídia carrega. Passe `ratio` (ex.: `16 / 9`, `1`, ou `1 / Math.SQRT2` para página A4); a largura vem do contêiner pai. Raio e recorte (`rounded-surface overflow-hidden`) ficam com quem usa."}}}},S={render:e=>(0,b.jsx)(`div`,{className:`w-80`,children:(0,b.jsx)(g,{...e,children:(0,b.jsx)(y,{label:`ratio ${Number(e.ratio??1).toFixed(2)}`})})})},C=[{label:`16:9`,ratio:16/9,width:`w-80`},{label:`4:3`,ratio:4/3,width:`w-80`},{label:`1:1`,ratio:1,width:`w-60`},{label:`3:4`,ratio:3/4,width:`w-54`},{label:`A4`,ratio:1/Math.SQRT2,width:`w-53`,document:!0}],w={parameters:{docs:{description:{story:`Proporções comuns, incluindo A4 para documentos.`}}},render:()=>(0,b.jsx)(`div`,{className:`flex items-start gap-6 rounded-surface bg-card p-8`,children:C.map(({label:e,ratio:t,width:n,document:r})=>(0,b.jsx)(`div`,{className:n,children:(0,b.jsx)(g,{ratio:t,children:(0,b.jsx)(y,{label:e,document:r})})},e))})},T={parameters:{docs:{description:{story:`Miniatura A4 (1 / Math.SQRT2) de documento anexado.`}}},render:()=>(0,b.jsxs)(`div`,{className:`flex w-56 flex-col gap-3`,children:[(0,b.jsx)(g,{ratio:1/Math.SQRT2,children:(0,b.jsx)(y,{label:`A4`,document:!0})}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`p`,{className:`text-label-md`,children:`Petição inicial.pdf`}),(0,b.jsx)(`p`,{className:`text-caption text-muted-foreground`,children:`12 páginas · 1,8 MB`})]})]})},E={parameters:{docs:{description:{story:`Mídia com object-cover e, no próprio AspectRatio, overflow-hidden e rounded-surface.`}}},render:()=>(0,b.jsx)(`div`,{className:`w-[480px]`,children:(0,b.jsx)(g,{ratio:16/9,className:`overflow-hidden rounded-surface bg-muted`,children:(0,b.jsx)(`img`,{src:`/img/1589829545856-d10d557cf95f.jpg`,alt:`Gravação da audiência de conciliação`,className:`size-full object-cover`})})})},D=[`Default`,`Ratios`,`DocumentThumbnail`,`Video`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <AspectRatio {...args}>
        <Placeholder label={\`ratio \${Number(args.ratio ?? 1).toFixed(2)}\`} />
      </AspectRatio>
    </div>
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Proporções comuns, incluindo A4 para documentos."
      }
    }
  },
  render: () => <div className="flex items-start gap-6 rounded-surface bg-card p-8">
      {ratios.map(({
      label,
      ratio,
      width,
      document
    }) => <div key={label} className={width}>
          <AspectRatio ratio={ratio}>
            <Placeholder label={label} document={document} />
          </AspectRatio>
        </div>)}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Miniatura A4 (1 / Math.SQRT2) de documento anexado."
      }
    }
  },
  render: () => <div className="flex w-56 flex-col gap-3">
      <AspectRatio ratio={1 / Math.SQRT2}>
        <Placeholder label="A4" document />
      </AspectRatio>
      <div>
        <p className="text-label-md">Petição inicial.pdf</p>
        <p className="text-caption text-muted-foreground">12 páginas · 1,8 MB</p>
      </div>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Mídia com object-cover e, no próprio AspectRatio, overflow-hidden e rounded-surface."
      }
    }
  },
  render: () => <div className="w-[480px]">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-surface bg-muted">
        <img src="/img/1589829545856-d10d557cf95f.jpg" alt="Gravação da audiência de conciliação" className="size-full object-cover" />
      </AspectRatio>
    </div>
}`,...E.parameters?.docs?.source}}}})))()}O();export{S as Default,T as DocumentThumbnail,w as Ratios,E as Video,D as __namedExportsOrder,x as default};
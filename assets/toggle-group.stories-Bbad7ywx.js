import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{r as i,t as a}from"./italic-CijlcNc8.js";import{t as o}from"./calendar-days-C8LeW3ef.js";import{a as s,r as c,t as l}from"./underline-DmVIr9pF.js";import{r as u,t as d}from"./dist-CyGynyiw.js";import{n as f,t as ee}from"./dist-Dyei1a8H.js";import{n as p,t as te}from"./dist-CcGb-Mzk.js";import{n as ne,r as m}from"./dist-Bb-GZkti.js";import{i as re,n as ie,r as h,t as ae}from"./dist-bRT6Pg-T.js";import{a as oe,i as se,n as ce,r as le}from"./toggle-YKDCMD6E.js";import{n as ue,t as g}from"./utils-5BEY1ubH.js";import{r as de}from"./icons.stories-CuLmnsRb.js";var _,v,y,b,x,S,fe,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{_=e(n(),1),f(),u(),re(),oe(),te(),ne(),v=r(),y=Object.defineProperty,b=(e,t)=>y(e,`name`,{value:t,configurable:!0}),x=`ToggleGroup`,[S,fe]=ee(x,[h]),C=h(),w=_.forwardRef(b(function(e,t){let{type:n,...r}=e;if(n===`single`)return(0,v.jsx)(D,{role:`radiogroup`,...r,ref:t});if(n===`multiple`)return(0,v.jsx)(O,{role:`toolbar`,...r,ref:t});throw Error(`Missing prop \`type\` expected on \`${x}\``)},`ToggleGroup`)),[T,E]=S(x),D=_.forwardRef(b(function(e,t){let{value:n,defaultValue:r,onValueChange:i=b(()=>{},`onValueChange`),...a}=e,[o,s]=p({prop:n,defaultProp:r??``,onChange:i,caller:x});return(0,v.jsx)(T,{scope:e.__scopeToggleGroup,type:`single`,value:_.useMemo(()=>o?[o]:[],[o]),onItemActivate:s,onItemDeactivate:_.useCallback(()=>s(``),[s]),children:(0,v.jsx)(j,{...a,ref:t})})},`ToggleGroupImplSingle`)),O=_.forwardRef(b(function(e,t){let{value:n,defaultValue:r,onValueChange:i=b(()=>{},`onValueChange`),...a}=e,[o,s]=p({prop:n,defaultProp:r??[],onChange:i,caller:x}),c=_.useCallback(e=>s((t=[])=>[...t,e]),[s]),l=_.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,v.jsx)(T,{scope:e.__scopeToggleGroup,type:`multiple`,value:o,onItemActivate:c,onItemDeactivate:l,children:(0,v.jsx)(j,{...a,ref:t})})},`ToggleGroupImplMultiple`)),[k,A]=S(x),j=_.forwardRef(b(function(e,t){let{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:i=!0,orientation:a,dir:o,loop:s=!0,...c}=e,l=C(n),u=m(o),f={dir:u,...c};return(0,v.jsx)(k,{scope:n,rovingFocus:i,disabled:r,children:i?(0,v.jsx)(ie,{asChild:!0,...l,orientation:a,dir:u,loop:s,children:(0,v.jsx)(d.div,{...f,ref:t})}):(0,v.jsx)(d.div,{...f,ref:t})})},`ToggleGroupImpl`)),M=`ToggleGroupItem`,N=_.forwardRef(b(function(e,t){let n=E(M,e.__scopeToggleGroup),r=A(M,e.__scopeToggleGroup),i=C(e.__scopeToggleGroup),a=n.value.includes(e.value),o=r.disabled||e.disabled,s={...e,pressed:a,disabled:o},c=_.useRef(null);return r.rovingFocus?(0,v.jsx)(ae,{asChild:!0,...i,focusable:!o,active:a,ref:c,children:(0,v.jsx)(P,{...s,ref:t})}):(0,v.jsx)(P,{...s,ref:t})},`ToggleGroupItem`)),P=_.forwardRef(b(function(e,t){let{__scopeToggleGroup:n,value:r,...i}=e,a=E(M,n),o={role:`radio`,"aria-checked":e.pressed,"aria-pressed":void 0},s=a.type===`single`?o:void 0;return(0,v.jsx)(se,{...s,...i,ref:t,onPressedChange:e=>{e?a.onItemActivate(r):a.onItemDeactivate(r)}})},`ToggleGroupItemImpl`))})))()}function I({className:e,variant:t=`default`,size:n=`default`,children:r,...i}){return(0,z.jsx)(w,{"data-slot":`toggle-group`,"data-variant":t,"data-size":n,className:g(`group/toggle-group flex w-fit items-center`,t===`outline`?`gap-0`:`gap-1`,e),...i,children:(0,z.jsx)(B.Provider,{value:{variant:t,size:n},children:r})})}function L({className:e,variant:t,size:n,...r}){let i=(0,R.useContext)(B),a=t??i.variant;return(0,z.jsx)(N,{"data-slot":`toggle-group-item`,className:g(le({variant:a,size:n??i.size}),`focus-visible:z-10`,a===`outline`&&`rounded-none first:rounded-l-full last:rounded-r-full [&:not(:first-child)]:-ml-px`,e),...r})}var R,z,B;function V(){return(V=t((()=>{R=n(),F(),ue(),ce(),z=r(),B=(0,R.createContext)({variant:`default`,size:`default`});try{I.displayName=`ToggleGroup`,I.__docgenInfo={description:"Conjunto de toggles com seleção única ou múltipla. `outline` vira controle segmentado em pílula.",displayName:`ToggleGroup`,filePath:`/media/demax/development/clients/bbatech/jurios/jurios-design-system/src/components/actions/toggle-group/toggle-group.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`jurios-design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.1.10_@types+react-dom@19.3.0_@types+react@19.3.0__@types+re_f83f88542c24ef44463bf36336741c4c/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`default`},declarations:[],description:``,name:`size`,required:!1,tags:{},type:{name:`"default" | "sm" | "lg" | null`}},variant:{defaultValue:{value:`default`},declarations:[],description:``,name:`variant`,required:!1,tags:{},type:{name:`"default" | "outline" | null`}}},tags:{}}}catch{}try{L.displayName=`ToggleGroupItem`,L.__docgenInfo={description:`Item do Toggle Group; herda variante e tamanho do grupo.`,displayName:`ToggleGroupItem`,filePath:`/media/demax/development/clients/bbatech/jurios/jurios-design-system/src/components/actions/toggle-group/toggle-group.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`jurios-design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.1.10_@types+react-dom@19.3.0_@types+react@19.3.0__@types+re_f83f88542c24ef44463bf36336741c4c/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:null,declarations:[],description:``,name:`size`,required:!1,tags:{},type:{name:`"default" | "sm" | "lg" | null`}},variant:{defaultValue:null,declarations:[],description:``,name:`variant`,required:!1,tags:{},type:{name:`"default" | "outline" | null`}}},tags:{}}}catch{}})))()}function H(){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(L,{value:`bold`,"aria-label":`Negrito`,children:(0,U.jsx)(i,{})}),(0,U.jsx)(L,{value:`italic`,"aria-label":`Itálico`,children:(0,U.jsx)(a,{})}),(0,U.jsx)(L,{value:`underline`,"aria-label":`Sublinhado`,children:(0,U.jsx)(l,{})})]})}var U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{de(),V(),U=r(),W={title:`Componentes/Ações/Toggle Group`,component:I,parameters:{docs:{description:{component:'Conjunto de toggles que controla um parâmetro da mesma área: um valor (`type="single"`) ou vários (`type="multiple"`). Com `variant="outline"`, vira controle segmentado em pílula.\n\n**Toggle Group ou Tabs**\n- Toggle Group: escolher um (`type="single"`) ou vários (`type="multiple"`) valores que filtram ou alteram a visualização do mesmo conteúdo (lista ou quadro, filtros de status).\n- Tabs: alternar entre painéis de conteúdo diferentes, cada um com seu `TabsContent` (Resumo, Andamentos, Documentos).\n- Regra prática: se muda o conteúdo mostrado em painéis distintos, Tabs; se muda um parâmetro do mesmo conteúdo, Toggle Group.\n\n**Quando não usar**\n- Escolha que vale ao enviar um formulário: use Radio Group (uma opção) ou Checkbox (várias).\n- Ações que não guardam estado: use Button Group.\n- Um único liga/desliga: use Toggle.\n\n**Anatomia**\n- `ToggleGroup`: raiz. `type` é obrigatório. Valor em `defaultValue` ou `value` com `onValueChange` (`string` em `single`, `string[]` em `multiple`). `variant`, `size` e `disabled` valem para todos os itens.\n- `ToggleGroupItem`: cada opção, com `value` único. Herda `variant` e `size` do grupo e pode sobrescrever.\n\n```tsx\n<ToggleGroup\n  type="single"\n  variant="outline"\n  value={view}\n  onValueChange={(value) => value && setView(value)}\n  aria-label="Visualização de processos"\n>\n  <ToggleGroupItem value="lista"><List /> Lista</ToggleGroupItem>\n  <ToggleGroupItem value="kanban"><KanbanSquare /> Kanban</ToggleGroupItem>\n</ToggleGroup>\n```\n\nEm `type="single"`, clicar no item ativo o desmarca e envia `""`. Se a tela precisa sempre de um valor (como a visualização), ignore o valor vazio, como no exemplo.\n\n**Acessibilidade**\n- Dê `aria-label` ao grupo e a cada item só de ícone.\n- Teclado: Tab entra no grupo, as setas movem entre os itens e Espaço ou Enter alternam o item focado.'}}},args:{type:`multiple`,variant:`default`,size:`default`,disabled:!1,"aria-label":`Formatação`},argTypes:{type:{control:`inline-radio`,options:[`single`,`multiple`],description:`Um valor (single) ou vários (multiple).`},variant:{control:`inline-radio`,options:[`default`,`outline`],description:`Transparente ou segmentado com borda.`},size:{control:`inline-radio`,options:[`sm`,`default`,`lg`],description:`Altura dos itens: 36, 44 ou 52.`},disabled:{control:`boolean`,description:`Desabilita todos os itens.`},orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`],description:`Direção das setas do teclado.`},"aria-label":{control:`text`,description:`Nome acessível do grupo.`},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}},onValueChange:{table:{disable:!0}},asChild:{table:{disable:!0}},className:{table:{disable:!0}}}},G={parameters:{docs:{description:{story:`Seleção múltipla para formatação: vários itens podem ficar ativos ao mesmo tempo. Troque type para single nos controles.`}}},render:({type:e,value:t,defaultValue:n,onValueChange:r,...i})=>e===`single`?(0,U.jsx)(I,{...i,type:`single`,defaultValue:`bold`,children:(0,U.jsx)(H,{})},`single`):(0,U.jsx)(I,{...i,type:`multiple`,defaultValue:[`bold`],children:(0,U.jsx)(H,{})},`multiple`)},K={parameters:{docs:{description:{story:`Variante outline: itens colados em um controle segmentado.`}}},render:()=>(0,U.jsx)(I,{type:`multiple`,variant:`outline`,defaultValue:[`bold`],"aria-label":`Formatação`,children:(0,U.jsx)(H,{})})},q=[`sm`,`default`,`lg`],J={render:()=>(0,U.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(3,auto)] items-center gap-x-10 gap-y-6 rounded-surface bg-card p-8`,children:[(0,U.jsx)(`span`,{}),q.map(e=>(0,U.jsx)(`span`,{className:`text-center text-caption text-muted-foreground`,children:e},e)),[`default`,`outline`].map(e=>(0,U.jsxs)(`div`,{className:`contents`,children:[(0,U.jsx)(`span`,{className:`text-right text-caption text-muted-foreground`,children:e}),q.map(t=>(0,U.jsx)(I,{type:`multiple`,variant:e,size:t,defaultValue:[`bold`],"aria-label":`Formatação`,children:(0,U.jsx)(H,{})},t))]},e))]})},Y={parameters:{docs:{description:{story:`Uma visualização por vez (type="single") para a mesma lista de processos. Não é Tabs: o conteúdo é o mesmo, só muda a forma de exibir.`}}},name:`Visualização (single)`,render:()=>(0,U.jsxs)(I,{type:`single`,variant:`outline`,defaultValue:`lista`,"aria-label":`Visualização de processos`,children:[(0,U.jsxs)(L,{value:`lista`,className:`px-4`,children:[(0,U.jsx)(s,{}),` Lista`]}),(0,U.jsxs)(L,{value:`kanban`,className:`px-4`,children:[(0,U.jsx)(c,{}),` Kanban`]}),(0,U.jsxs)(L,{value:`calendario`,className:`px-4`,children:[(0,U.jsx)(o,{}),` Calendário`]})]})},X={parameters:{docs:{description:{story:`Filtros combináveis (type="multiple") por tipo de publicação.`}}},name:`Filtros (multiple)`,render:()=>(0,U.jsxs)(I,{type:`multiple`,defaultValue:[`intimacao`,`citacao`],"aria-label":`Tipos de publicação`,children:[(0,U.jsx)(L,{value:`intimacao`,className:`px-4`,children:`Intimação`}),(0,U.jsx)(L,{value:`citacao`,className:`px-4`,children:`Citação`}),(0,U.jsx)(L,{value:`despacho`,className:`px-4`,children:`Despacho`}),(0,U.jsx)(L,{value:`sentenca`,className:`px-4`,children:`Sentença`})]})},Z={parameters:{docs:{description:{story:`disabled no grupo desabilita todos os itens.`}}},render:()=>(0,U.jsx)(I,{type:`multiple`,variant:`outline`,disabled:!0,defaultValue:[`bold`],"aria-label":`Formatação`,children:(0,U.jsx)(H,{})})},Q=[`Default`,`Outline`,`Variants`,`SingleView`,`MultipleFilters`,`Disabled`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Seleção múltipla para formatação: vários itens podem ficar ativos ao mesmo tempo. Troque type para single nos controles."
      }
    }
  },
  render: ({
    type,
    value: _value,
    defaultValue: _defaultValue,
    onValueChange: _onValueChange,
    ...args
  }) => type === "single" ? <ToggleGroup key="single" {...args} type="single" defaultValue="bold">
        <FormattingItems />
      </ToggleGroup> : <ToggleGroup key="multiple" {...args} type="multiple" defaultValue={["bold"]}>
        <FormattingItems />
      </ToggleGroup>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Variante outline: itens colados em um controle segmentado."
      }
    }
  },
  render: () => <ToggleGroup type="multiple" variant="outline" defaultValue={["bold"]} aria-label="Formatação">
      <FormattingItems />
    </ToggleGroup>
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-[auto_repeat(3,auto)] items-center gap-x-10 gap-y-6 rounded-surface bg-card p-8">
      <span />
      {sizes.map(size => <span key={size} className="text-center text-caption text-muted-foreground">{size}</span>)}
      {(["default", "outline"] as const).map(variant => <div key={variant} className="contents">
          <span className="text-right text-caption text-muted-foreground">{variant}</span>
          {sizes.map(size => <ToggleGroup key={size} type="multiple" variant={variant} size={size} defaultValue={["bold"]} aria-label="Formatação">
              <FormattingItems />
            </ToggleGroup>)}
        </div>)}
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uma visualização por vez (type=\\"single\\") para a mesma lista de processos. Não é Tabs: o conteúdo é o mesmo, só muda a forma de exibir."
      }
    }
  },
  name: "Visualização (single)",
  render: () => <ToggleGroup type="single" variant="outline" defaultValue="lista" aria-label="Visualização de processos">
      <ToggleGroupItem value="lista" className="px-4"><List /> Lista</ToggleGroupItem>
      <ToggleGroupItem value="kanban" className="px-4"><KanbanSquare /> Kanban</ToggleGroupItem>
      <ToggleGroupItem value="calendario" className="px-4"><CalendarDays /> Calendário</ToggleGroupItem>
    </ToggleGroup>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Filtros combináveis (type=\\"multiple\\") por tipo de publicação."
      }
    }
  },
  name: "Filtros (multiple)",
  render: () => <ToggleGroup type="multiple" defaultValue={["intimacao", "citacao"]} aria-label="Tipos de publicação">
      <ToggleGroupItem value="intimacao" className="px-4">Intimação</ToggleGroupItem>
      <ToggleGroupItem value="citacao" className="px-4">Citação</ToggleGroupItem>
      <ToggleGroupItem value="despacho" className="px-4">Despacho</ToggleGroupItem>
      <ToggleGroupItem value="sentenca" className="px-4">Sentença</ToggleGroupItem>
    </ToggleGroup>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "disabled no grupo desabilita todos os itens."
      }
    }
  },
  render: () => <ToggleGroup type="multiple" variant="outline" disabled defaultValue={["bold"]} aria-label="Formatação">
      <FormattingItems />
    </ToggleGroup>
}`,...Z.parameters?.docs?.source}}}})))()}$();export{G as Default,Z as Disabled,X as MultipleFilters,K as Outline,Y as SingleView,J as Variants,Q as __namedExportsOrder,W as default};
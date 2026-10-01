import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{c as n,i as r,n as i,o as a,r as o,s,t as c}from"./card-JQLjIgjx.js";import{c as l,i as u,l as d,n as f,o as p,s as m,t as h}from"./table-u77QFVdc.js";import{a as g,i as _,n as v,r as y,t as b}from"./sensitive-value-BC6KaEGo.js";function x({mask:e=`dots`}){return(0,S.jsxs)(c,{className:`w-[560px] gap-3 pt-5 pb-2`,children:[(0,S.jsxs)(a,{children:[(0,S.jsx)(s,{children:`Honorários a receber`}),(0,S.jsxs)(r,{children:[`Total do mês: `,(0,S.jsx)(y,{mask:e,label:`Total do mês`,children:`R$ 1.310.950,35`})]}),(0,S.jsx)(i,{className:`my-0`,children:(0,S.jsx)(v,{})})]}),(0,S.jsx)(o,{className:`px-0`,children:(0,S.jsxs)(h,{children:[(0,S.jsx)(m,{children:(0,S.jsxs)(l,{children:[(0,S.jsx)(p,{className:`pl-6`,children:`Cliente`}),(0,S.jsx)(p,{children:`CPF/CNPJ`}),(0,S.jsx)(p,{className:`pr-6 text-right`,children:`Valor`})]})}),(0,S.jsx)(f,{children:D.map(t=>(0,S.jsxs)(l,{children:[(0,S.jsx)(u,{className:`pl-6`,children:t.client}),(0,S.jsx)(u,{className:`text-data`,children:(0,S.jsx)(y,{mask:`partial`,label:`Documento`,children:t.document})}),(0,S.jsx)(u,{className:`pr-6 text-right`,children:(0,S.jsx)(y,{mask:e,label:`Valor`,children:t.value})})]},t.client))})]})})]})}var S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{n(),d(),_(),S=t(),C={title:`Componentes/Exibição de dados/Sensitive Value`,component:y,parameters:{docs:{description:{component:'Esconde e mostra dados sensíveis na tela: valores financeiros, CPF/CNPJ, dados bancários, salário de reclamante. Protege contra olhares por cima do ombro, compartilhamento de tela em reuniões e capturas enviadas por engano. Um olho (`SensitiveToggle`) alterna todos os valores da área de uma vez; cada valor também pode ter o próprio olho.\n\n**Quando usar**\n- Telas que mostram dinheiro ou documentos de pessoas: dashboard financeiro, listagem de clientes, honorários, valores da causa, contas para repasse.\n- Telas usadas em atendimento presencial ou videochamada com o cliente.\n\n**Quando não usar**\n- Não é controle de acesso: o valor continua no navegador. Quem não pode ver o dado não deve recebê-lo da API.\n- Campos de senha: use `PasswordInput` (Componentes/Formulários).\n- Dados que o usuário precisa conferir o tempo todo (número CNJ, nome do cliente): mascarar só atrapalha.\n\n**Anatomia**\n- `SensitiveDataProvider`: estado "visível/oculto" da área. `defaultVisible` (padrão `false`), ou controlado com `visible` e `onVisibleChange`. `storageKey` lembra a preferência no `localStorage` (ex.: `jurios:dados-sensiveis`).\n- `SensitiveToggle`: Button `ghost` `icon-sm` com Eye/EyeOff e Tooltip; aceita `variant`, `size` e `children` do Button.\n- `SensitiveValue`: o valor ou a máscara. `mask`: `dots` (••••••, padrão), `partial` (mostra só parte, via `maskValue`) ou `blur`. `revealable` adiciona o olho individual; `label` nomeia o dado para leitores de tela.\n- `maskValue(valor, { format, visibleChars })`: CPF `•••.456.789-••`, CNPJ `••.345.678/0001-••`, moeda `R$ ••••••`, texto com os últimos `visibleChars` caracteres.\n- `useSensitiveData()`: `{ visible, setVisible, toggle, hasProvider }` para esconder o que não é texto (tooltip de gráfico, exportação).\n\n```tsx\n<SensitiveDataProvider storageKey="jurios:dados-sensiveis">\n  <PageHeaderActions>\n    <SensitiveToggle />\n  </PageHeaderActions>\n  <SensitiveValue label="Honorários a receber">R$ 212.530,41</SensitiveValue>\n  <SensitiveValue mask="partial" label="CPF">123.456.789-09</SensitiveValue>\n</SensitiveDataProvider>\n```\n\nSem provider, `SensitiveValue` fica oculto e funciona sozinho com `revealable`. Ao alternar pelo provider, o que foi revelado um a um volta ao estado global.\n\n**Acessibilidade**\n- Oculto, o valor sai da árvore de acessibilidade e o leitor anuncia "<label> oculto"; sempre passe `label` ("Valor da causa", "CPF").\n- `SensitiveToggle` e o olho individual têm `aria-pressed` e rótulo que diz a ação ("Mostrar dados sensíveis" / "Ocultar dados sensíveis").\n- Valor e máscara ocupam a mesma célula com `tabular-nums`: a largura não muda ao alternar e a tabela não "pula".\n- A máscara nunca é a única pista: o ícone do olho mostra o estado atual da área.\n'}}},args:{children:`R$ 212.530,41`,mask:`dots`,label:`Honorários a receber`,revealable:!0},argTypes:{mask:{control:`inline-radio`,options:[`dots`,`partial`,`blur`]},format:{control:`select`,options:[`auto`,`cpf`,`cnpj`,`currency`,`text`]},visibleChars:{control:{type:`number`,min:0,max:8}},visible:{control:`boolean`},children:{control:`text`}}},w={render:e=>(0,S.jsx)(y,{...e,className:`text-title-lg font-medium`})},T=[{label:`Valor da causa`,value:`R$ 1.250.000,00`},{label:`CPF`,value:`123.456.789-09`},{label:`CNPJ`,value:`12.345.678/0001-90`},{label:`Conta`,value:`Itaú · ag. 0341 · cc 45821-7`}],E={parameters:{docs:{description:{story:"As três máscaras, ocultas e visíveis. `partial` usa `maskValue` e reconhece CPF, CNPJ e valores em R$."}}},render:()=>(0,S.jsxs)(h,{className:`w-auto`,children:[(0,S.jsx)(m,{children:(0,S.jsxs)(l,{children:[(0,S.jsx)(p,{children:`Dado`}),[`dots`,`partial`,`blur`].map(e=>(0,S.jsx)(p,{children:e},e)),(0,S.jsx)(p,{children:`Visível`})]})}),(0,S.jsx)(f,{children:T.map(e=>(0,S.jsxs)(l,{children:[(0,S.jsx)(u,{className:`text-muted-foreground`,children:e.label}),[`dots`,`partial`,`blur`].map(t=>(0,S.jsx)(u,{children:(0,S.jsx)(y,{mask:t,label:e.label,children:e.value})},t)),(0,S.jsx)(u,{children:(0,S.jsx)(y,{visible:!0,label:e.label,children:e.value})})]},e.label))})]})},D=[{client:`Maria da Silva`,document:`123.456.789-09`,value:`R$ 48.200,00`},{client:`Silva & Filhos Ltda`,document:`12.345.678/0001-90`,value:`R$ 1.250.000,00`},{client:`João Pereira`,document:`987.654.321-00`,value:`R$ 12.750,35`}],O={name:`Com provider`,parameters:{docs:{description:{story:"Um `SensitiveToggle` no cabeçalho alterna todos os valores do card. Use os controles para começar visível e trocar a máscara."}}},args:{defaultVisible:!1,mask:`dots`},argTypes:{defaultVisible:{control:`boolean`},mask:{control:`inline-radio`,options:[`dots`,`partial`,`blur`]}},render:({defaultVisible:e,mask:t})=>(0,S.jsx)(b,{defaultVisible:e,children:(0,S.jsx)(x,{mask:t})},String(e))},k={name:`Com provider · visível`,parameters:{docs:{description:{story:"Mesmo card com `defaultVisible`."}}},render:()=>(0,S.jsx)(b,{defaultVisible:!0,children:(0,S.jsx)(x,{})})},A={parameters:{docs:{description:{story:`Sem provider, cada valor tem o próprio olho e começa oculto.`}}},render:()=>(0,S.jsxs)(`dl`,{className:`grid grid-cols-[auto_auto] gap-x-8 gap-y-3 text-body-sm`,children:[(0,S.jsx)(`dt`,{className:`text-muted-foreground`,children:`CPF`}),(0,S.jsx)(`dd`,{className:`text-data`,children:(0,S.jsx)(y,{mask:`partial`,revealable:!0,label:`CPF`,children:`123.456.789-09`})}),(0,S.jsx)(`dt`,{className:`text-muted-foreground`,children:`Banco`}),(0,S.jsx)(`dd`,{children:(0,S.jsx)(y,{revealable:!0,label:`Conta bancária`,children:`Itaú · ag. 0341 · cc 45821-7`})}),(0,S.jsx)(`dt`,{className:`text-muted-foreground`,children:`Salário do reclamante`}),(0,S.jsx)(`dd`,{children:(0,S.jsx)(y,{mask:`blur`,revealable:!0,label:`Salário do reclamante`,children:`R$ 8.430,00`})})]})},j={name:`Toggle · variantes`,parameters:{docs:{description:{story:"`SensitiveToggle` aceita as variantes e tamanhos do Button. Com texto, desligue o Tooltip."}}},render:()=>(0,S.jsx)(b,{children:(0,S.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,S.jsx)(v,{}),(0,S.jsx)(v,{variant:`secondary`}),(0,S.jsx)(v,{variant:`outline`,size:`icon`}),(0,S.jsx)(v,{variant:`secondary`,size:`sm`,tooltip:!1,children:`Valores`}),(0,S.jsx)(y,{label:`Saldo`,children:`R$ 54.320,00`})]})})},M={name:`maskValue`,parameters:{docs:{description:{story:`Utilitário puro para exportações, e-mails e textos fora de componentes.`}}},render:()=>(0,S.jsxs)(h,{className:`w-auto`,children:[(0,S.jsx)(m,{children:(0,S.jsxs)(l,{children:[(0,S.jsx)(p,{children:`Chamada`}),(0,S.jsx)(p,{children:`Resultado`})]})}),(0,S.jsx)(f,{children:[[`maskValue("123.456.789-09")`,g(`123.456.789-09`)],[`maskValue("12.345.678/0001-90")`,g(`12.345.678/0001-90`)],[`maskValue("R$ 212.530,41")`,g(`R$ 212.530,41`)],[`maskValue("45821-7", { visibleChars: 2 })`,g(`45821-7`,{visibleChars:2})],[`maskValue("12345678909", { format: "cpf" })`,g(`12345678909`,{format:`cpf`})]].map(([e,t])=>(0,S.jsxs)(l,{children:[(0,S.jsx)(u,{className:`text-code`,children:e}),(0,S.jsx)(u,{className:`text-data tabular-nums`,children:t})]},e))})]})},N=[`Default`,`Masks`,`WithProvider`,`Visible`,`Revealable`,`ToggleVariants`,`MaskValueUtility`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <SensitiveValue {...args} className="text-title-lg font-medium" />
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "As três máscaras, ocultas e visíveis. \`partial\` usa \`maskValue\` e reconhece CPF, CNPJ e valores em R$."
      }
    }
  },
  render: () => <Table className="w-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Dado</TableHead>
          {(["dots", "partial", "blur"] as SensitiveMask[]).map(mask => <TableHead key={mask}>{mask}</TableHead>)}
          <TableHead>Visível</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {samples.map(sample => <TableRow key={sample.label}>
            <TableCell className="text-muted-foreground">{sample.label}</TableCell>
            {(["dots", "partial", "blur"] as SensitiveMask[]).map(mask => <TableCell key={mask}>
                <SensitiveValue mask={mask} label={sample.label}>
                  {sample.value}
                </SensitiveValue>
              </TableCell>)}
            <TableCell>
              <SensitiveValue visible label={sample.label}>
                {sample.value}
              </SensitiveValue>
            </TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Com provider",
  parameters: {
    docs: {
      description: {
        story: "Um \`SensitiveToggle\` no cabeçalho alterna todos os valores do card. Use os controles para começar visível e trocar a máscara."
      }
    }
  },
  args: {
    defaultVisible: false,
    mask: "dots"
  },
  argTypes: {
    defaultVisible: {
      control: "boolean"
    },
    mask: {
      control: "inline-radio",
      options: ["dots", "partial", "blur"]
    }
  },
  render: ({
    defaultVisible,
    mask
  }) => <SensitiveDataProvider key={String(defaultVisible)} defaultVisible={defaultVisible}>
      <HonorariosCard mask={mask} />
    </SensitiveDataProvider>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Com provider · visível",
  parameters: {
    docs: {
      description: {
        story: "Mesmo card com \`defaultVisible\`."
      }
    }
  },
  render: () => <SensitiveDataProvider defaultVisible>
      <HonorariosCard />
    </SensitiveDataProvider>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sem provider, cada valor tem o próprio olho e começa oculto."
      }
    }
  },
  render: () => <dl className="grid grid-cols-[auto_auto] gap-x-8 gap-y-3 text-body-sm">
      <dt className="text-muted-foreground">CPF</dt>
      <dd className="text-data">
        <SensitiveValue mask="partial" revealable label="CPF">123.456.789-09</SensitiveValue>
      </dd>
      <dt className="text-muted-foreground">Banco</dt>
      <dd>
        <SensitiveValue revealable label="Conta bancária">Itaú · ag. 0341 · cc 45821-7</SensitiveValue>
      </dd>
      <dt className="text-muted-foreground">Salário do reclamante</dt>
      <dd>
        <SensitiveValue mask="blur" revealable label="Salário do reclamante">R$ 8.430,00</SensitiveValue>
      </dd>
    </dl>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Toggle · variantes",
  parameters: {
    docs: {
      description: {
        story: "\`SensitiveToggle\` aceita as variantes e tamanhos do Button. Com texto, desligue o Tooltip."
      }
    }
  },
  render: () => <SensitiveDataProvider>
      <div className="flex items-center gap-3">
        <SensitiveToggle />
        <SensitiveToggle variant="secondary" />
        <SensitiveToggle variant="outline" size="icon" />
        <SensitiveToggle variant="secondary" size="sm" tooltip={false}>
          Valores
        </SensitiveToggle>
        <SensitiveValue label="Saldo">R$ 54.320,00</SensitiveValue>
      </div>
    </SensitiveDataProvider>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "maskValue",
  parameters: {
    docs: {
      description: {
        story: "Utilitário puro para exportações, e-mails e textos fora de componentes."
      }
    }
  },
  render: () => <Table className="w-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Chamada</TableHead>
          <TableHead>Resultado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[['maskValue("123.456.789-09")', maskValue("123.456.789-09")], ['maskValue("12.345.678/0001-90")', maskValue("12.345.678/0001-90")], ['maskValue("R$ 212.530,41")', maskValue("R$ 212.530,41")], ['maskValue("45821-7", { visibleChars: 2 })', maskValue("45821-7", {
        visibleChars: 2
      })], ['maskValue("12345678909", { format: "cpf" })', maskValue("12345678909", {
        format: "cpf"
      })]].map(([call, result]) => <TableRow key={call}>
            <TableCell className="text-code">{call}</TableCell>
            <TableCell className="text-data tabular-nums">{result}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...M.parameters?.docs?.source}}}})))()}P();export{w as Default,M as MaskValueUtility,E as Masks,A as Revealable,j as ToggleVariants,k as Visible,O as WithProvider,N as __namedExportsOrder,C as default};
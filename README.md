# Inovação React

**Importante**: a respeito dos diversos erros reportados em `EtapasProcessoEnova.module.css` ver seção [Nested CSS](#nested-css)

## Descrição

Projeto de inovação do para os funcionários da Energisa.

## Instalação

### NVM (Node Versiom Manager)
*Sugestão*: configurar a versão do node usando o **NVM** https://github.com/nvm-sh/nvm

Usar a versão 16 para esse projeto

```
nvm install --lts=gallium
nvm use --lts=gallium
```

### Projeto em si

Clonar o projeto e instalar as dependências

```
git clone git@gitlab.com:people-interactive/energisa/inovacao-react.git
cd inovacao-react
npm i
(ou yarn install)
```

Configurar o **husky** para fazer *lint antes de cada commit*, *build antes de cada push* e usar o **commitlint** para verificar se a mensagem está dentro do padrão semântico escolhido (explicação abaixo):

(Substituir npm por yarn caso prefira)
```
npx husky add .husky/pre-commit "npm run lint"
npx husky add .husky/pre-push "npm run build"
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## Padrão Semântico
Nesse projeto usaremos o padrão "Conventional Commits" com os tipos de commit especificados na convenção do Angular

O uso desse padrão será enforçado pelo **husky** e pelo **commitlint**:

https://www.conventionalcommits.org/en/v1.0.0/#summary

https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type

O padrão será:
```
git commit -m "<tipo>: <mensagem>"
```

Mensagens fora do padrão serão rejeitadas na hora do commit

(ver **/commitlint.config.js** para lista de rápida de tipos)

## Responsividade

Para definir estilos responsivos usar breakpoints pré-definidos.

Em css usar a função `screen(*breakpoint*)` do tailwind juntamente com media query `@media`

Em js|ts|tsx|ts usar o enum **Breakpoints** localizado em `src/models/enums/Breakpoints.ts`


<span style="color:green">**CORRETO**:</span>
```
@media screen(lg) {
  font-size: 1.6rem;
  line-height: 2rem;
}
```
```
const isDesktop = windowSize.width >= Breakpoints.lg;
```

Evitar usar valores arbitrários para breakpoints.

<span style="color:red">**EVITAR**:</span>
```
@media (min-width: 900px) {
  font-size: 1.6rem;
  line-height: 2rem;
}
```
```
const isDesktop = windowSize.width >= 1024;
```

O valor de cada breakpoint é:
```
xs = 360,
sm = 640,
md = 768,
lg = 1024,
xl = 1280,
2xl = 1536
```

Ressaltando que utilizamos o paradigma *mobile frist* portando as funções de css serão convertidas para <br/> `(min-width: *breakpoint*)`
## Estilo

Padronização de cores e tipografia via **/tailwind.config.js**

![Trecho de ustomização de cores do tailwind](/docs/colors.png)
![Trecho de ustomização de texto do tailwind](/docs/font.png)

### Cores

Cores devem ser utilizadas de acordo com a documentacao da biblioteca:

https://tailwindcss.com/docs/customizing-colors#using-custom-colors

É possível implementar nas folhas de estilo, as cores setadas no `tailwind.config.js`, usando a função `theme()` do tailwind:

```
theme('colors.cinza.200');
```

### Tipografia

E o texto como descrito aqui:

https://tailwindcss.com/docs/adding-base-styles#using-css

https://tailwindcss.com/docs/font-weight

Headings terão padrão definido em **/styles/tailwind.css**

![Estilização dos headings](/docs/globalscss.png)


## CSS modules
O projeto usa css modules, onde classes únicas são geradas com isolamento em cada componente. A necessidade de especificação na definição de classes é muito menor com esse método.

Para mais informações verificar na [documentação do next](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)

### Interação postcss (tailwind) e webpack5 (css modules)

Para que o tailwind possa funcionar paralelamente com o css modules é necessário usar o plugin `storybook-addon-next`

Ele deve ser relacionado em `.storybook/main.js` e o `webpack5` enforçado como builder:

```
module.exports = {
  // other config ommited for brevity
  addons: [
    // ...
    'storybook-addon-next'
    // ...
  ],
  core: {
    builder: 'webpack5'
  }
}
```

Ele exige a existência de um `next.config.js` na raiz 


### Nested CSS

É possível aplicar declarações "nestadas" em arquivo `.css` graças ao suporte nativo que o tailwind dá ao plugin [postcss-nested](https://github.com/postcss/postcss-nested)

Entretando o [language server](https://langserver.org/) de css (serviço utilizado pelo VS Code para checagem de sintaxe) não reconhece como padrão válido e retorna vários erros, como ocorre em `EtapasProcessoEnova.module.css`.

Os erros podem ser ignorados pois o arquivo será compilado normalmente.

Foi decidido usar "nesting" nesse componente dada a alta complexidade em seu layout. Como o resto da aplicação não necessita de "nesting", instalar SCSS apenas por um componente seria excessivo.

Para mais informações ver:
https://tailwindcss.com/docs/using-with-preprocessors#nesting

## Hooks

### useOutsideClick

Substitui o overlay em casos de dropdowns ou modais.

Retorna uma ref a ser atribuida ao elemento relevante

Recebe uma callback para ser acionada quando evento de clique é detecado fora do elemento relevante.

É importante que o handler de ativação do dropdown receba o evento a chame o `stopPropagation()` dele:

```
  const activateDropdown = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {

    event?.stopPropagation();

    setIsDropdownOpen(isDropdownOpen => !isDropdownOpen);
  };
```

https://www.robinwieruch.de/react-hook-detect-click-outside-component/

## Autoria
People Interactive Brasil

Readme escrito por Leonardo Zerino

<leonardo.zerino@peopleinteractive.com.br>

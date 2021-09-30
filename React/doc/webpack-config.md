# Webpack ![image](https://user-images.githubusercontent.com/55283349/135462875-71d2f00c-139c-4c52-89bf-de4451191617.png)


## Conceitos

Em sua essência, o webpack é um empacotador de módulo estático para aplicativos JavaScript modernos. Quando o webpack processa seu aplicativo, ele constrói internamente um gráfico de dependência a partir de um ou mais pontos de entrada e, em seguida, combina cada módulo de que seu projeto precisa em um ou mais pacotes , que são ativos estáticos para servir seu conteúdo.

## Configurações

- Crie o arquivo webpack.config.js na raíz do projeto
- Instale o webpack e webpack-cli como dependência de desenvolvimento: `npm i -D webpack webpack-cli`
- Adicione no arquivo package.json o script de execução, por padrão executará no modo de desenvolvimento: `"build": "webpack --mode production"`
- Instale o babel: `npm i @babel/core babel-loader @babel/preset-react --save-dev`
    - @babel/core - Núcleo do compilador Babel @babel/preset-env 
    - babel-loader - Este pacote permite transpilar arquivos JavaScript usando Babel e webpack
    - @babel/preset-env - Uma predefinição Babel para cada ambiente
    - @babel/preset-react - Predefinição do Babel para todos os plug-ins React
- Crie o arquivo .babelrc na raíz do projeto e insira as consfugurações necessárias

### Criando um Dev Server

Utiliza o webpack com um servidor de desenvolvimento que fornece recarga ao vivo. Isso deve ser usado apenas para desenvolvimento

- Crie o dev server: `npm i -D webpack-dev-server`
- Insira o script de inicialização no arquivo package.json:

  `"scripts": {
      "start:dev": "webpack-dev-server"`
   }`

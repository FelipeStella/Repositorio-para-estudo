# Configuração do ESlint com Typescript

Instalar dependências: `npm install -D eslint @typescript-eslint @typescript-eslint/eslint-plugin`
      
Iniciar o ESlint: `npm eslint --init`
      
Selecione as opções de configuração do arquivo:

      √ How would you like to use ESLint? · style
      √ What type of modules does your project use? · esm
      √ Which framework does your project use? · none 
      √ Does your project use TypeScript? · No / Yes
      √ Where does your code run? · browser
      √ How would you like to define a style for your project? · guide
      √ Which style guide do you want to follow? · standard
      √ What format do you want your config file to be in? · JavaScript
      
Ajuste as configurações do arquivo .eslint.json:

      module.exports = {
      env: {
        browser: true,
        es2021: true
      },
      extends: [
        'prettier/@typescript-eslint',
        'standard'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
      },
      plugins: [
        '@typescript-eslint'
      ],
      rules: {
        camelcase: ['error', { properties: 'never' }]
        }
      }
      

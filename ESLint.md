# Configuração do ESlint

- Execute o comando a seguir para instalar as dependências
      
      yarn add -D eslint @typescript-eslint @typescript-eslint/eslint-plugin
      
- Inicie o ESlint
    
      yarn eslint --init
      
- Selecione as opções conforme arquivo a seguir:

      √ How would you like to use ESLint? · style
      √ What type of modules does your project use? · esm
      √ Which framework does your project use? · none 
      √ Does your project use TypeScript? · No / Yes
      √ Where does your code run? · browser
      √ How would you like to define a style for your project? · guide
      √ Which style guide do you want to follow? · standard
      √ What format do you want your config file to be in? · JavaScript
      
- Delete o arquivo package-lock.json e execute o comando a seguir:

      yarn
      
- Ajuste o arquivo .eslint.json conforme configuração a seguir:

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
      

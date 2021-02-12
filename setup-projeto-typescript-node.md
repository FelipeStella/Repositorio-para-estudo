# Setup para um projeto Node.js em Typescript com Query Builder Knex, banco de dados MySql e validação de dados com Yup

- Inicialize o projeto com o comando:

      yarn init -y
      
- Adicione as seguintes dependencias:

      yarn add express - express (Utilizado para tratamento de requisições)
      yarn add @types/express
      yarn add cors - trata as requisições feitas por outras api´s
      yarn add @types/cors
     
- Adicione as seguintes dependencias de desenvolvimento:

      yarn add typescript -D - (instala o typescript)
      
- Execute na raiz do seu o projeto o comando:

      yarn tsc --init
      
- No arquivo tsconfig.json altere a informação do campo "target" para "es2017" 
- Execute o comando a seguir:

      yarn add ts-node-dev -D - (Este comando faz com que o node entenda o typescript) 

- Crie os scripts de build e de desenvolvimento no arquivo package.json

      "scripts": {
        "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
      }
     
- Crie uma pasta na raiz do projeto chamada src e dentro dela um arquivo chamado server.ts e outro chamado router.ts
- Crie uma pasta src, uma pasta chamada controllers e outra chamada database
- Adicione a Query Builder Knex

      npx install knex
      
- Adicione o dotenv

      yarn add dotenv
      
- Crie um arquivo na raiz do projeto chamado .env e neste arquivo insira suas variáveis de ambiente, exemplo:

      MYSQL_HOST=seu host
      MYSQL_USER=seu usário
      MYSQL_PASS=sua senha
      MYSQL_PORT=a porta
      MYSQL_DB=seu banco de dados
      
- Crie na raiz do projeto o arquivo knexfile.ts e insira as informações a seguir:

      import * as dotenv from 'dotenv'

      dotenv.config()

      module.exports = {
        development: {
          client: 'mysql',
          connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            port: process.env.MYSQL_PORT,
            database: process.env.MYSQL_DB,
            ssl: { rejectUnauthorized: false }
            }
        }
      }

- Crie na pasta src/database o arquivo connections.ts

      const knexfile = require ('../../knexfile')
      const connection = require('knex')(knexfile['development'])

      export default connection
      
- Execute o comando a seguir para que o node consiga tratar os erros de uma forma mais amigável

      yarn add express-async-errors
      
- Crie uma pasta dentro de src chamado errors
- Crie um arquivo dentro desta pasta chamado handler.ts e configure o arquivo
- Execute o comando a seguir:
       
       yarn add yup - faz a validação dos dados vindos de uma requisição http
       yarn add @types/yup -D - para importar a tipagem do Yup
      
- Comandos adicionais

      yarn dev - executa o projeto em ambiente de desenvolvimento
      

# Setup para um projeto Node.js em Typescript

- Inicialize o projeto com o comando:

      yarn init -y
      
- Adicione as seguintes dependencias:

      express (Utilizado para tratamento de requisições) - yarn add express
     
- Adicione as seguintes dependencias de desenvolvimento:

      yarn add typescript -D - (instala o typescript)
      ts-node-dev -D - (Este comando faz com que o node entenda o typescript) 
     
- Crie uma pasta na raiz do projeto chamada src e dentro dela um arquivo chamado server.ts
- Execute na raiz do seu o projeto o comando:

      yarn tsc init
      
- No arquivo tsconfig.json altere a informação do campo "target" para "es2017" 
- Crie os scripts de build e de desenvolvimento no arquivo package.json

      "scripts": {
        "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
      }
      
- Comandos adicionais

      yarn dev - executa o projeto em ambiente de desenvolvimento
      

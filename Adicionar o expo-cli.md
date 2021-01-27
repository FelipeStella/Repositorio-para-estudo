# Instruções para adicionar o expo-cli para iniciar o seu projeto mobile utilizando Yarn no Windows 10

* Execute o comando a seguir:
    
      yarn global add expo-cli - para instalar o expo-cli
    
* Se não conseguir executar o comando abaixo, deverá informar o local de instalação dos pacotes globais do expo

      expo -h

## Instruções para informar o local de instalação dos pacotes globais do expo

* Execute o comando a seguir:
      
      yarn global bin - para verificar o caminho dos pacotes globais do yarn
      
* Abra a tela de variáveis de ambiente do windows
* Acesse a aba "Avançado"
* Clique no botão "Variáveis de ambiente"
* Acesse o campo "variáveis do sistema"
* Encontre a variável "Path" e a selecione
* Clique no botão "Editar"
* Clique no botão "Novo"
* Insira o caminho infomado no yarn global bin
* Clique no botão "OK"
* Reinicie o VS Code
* Execute novamente o comando a seguir:

      expo -h

      

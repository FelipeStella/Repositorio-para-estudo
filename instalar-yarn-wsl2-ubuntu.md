# Instruções para instalar o Yarn no WSL2 Ubuntu

- Execute os comandos a seguir:

      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt update
      sudo apt install yarn
      
**Se tudo foi instalado conforme esperado executando o comando a seguir, irá retornar a versão do Yarn instalada no Ubuntu**

        yarn --version

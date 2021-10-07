# Instale e execute o Docker em WSL2

- Abra seu terminal WSL2 e verifique se o Docker está presente em seu sistema ou não executando

        docker --version
        
- Atualize seu repositório de software Linux com

        sudo apt-get update
        
- Baixe as dependências do Docker

        sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
        
- Adicione a chave PGP do Docker

        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add
        
- Instale o repositório Docker

        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release) -cs) stable"
        
- Atualize seu repositório de software Linux com

        sudo apt-get update
        
- Instale a versão mais recente do Docker

        sudo apt-get install docker
        
- Verifique a versão do Docker
  
        docker --version
        
- Se não funcionar execute o comando a seguir:

        sudo apt install docker.io

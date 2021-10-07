# Instruções para instalar o npm no WSL2 com Ubuntu

- Abra a linha de comando do Ubuntu
- Instale o cURL (uma ferramenta usada para baixar conteúdo da Internet na linha de comando) com: 

      sudo apt-get install curl
        
- Instale o NVM, com: 

      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
      
**Acesse a [página do projeto GitHub para obter a versão mais recente do NVM](https://github.com/nvm-sh/nvm#installing-and-updating)**
      
- Adicione o código a seguir no arquivo de configuração do seu terminal (~/.bash_profile ou ~/.zshrc ou ~/.profile ou ~/.bashrc)

      export NVM_DIR="$home/fstella/.nvm" # aqui você insere o diretório onde foi instalado a pasta .nvm
      [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Isso carrega o nvm
      [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Isso carrega o nvm bash_completion

      source ~/.nvm/nvm.sh

# Instruções para instalação do node via nvm install node no WSL2 Ubuntu

- Abra o terminal do Ubuntu no WSL2
- Instale o nvm, caso não saiba como instalar, acesse o [Link](https://github.com/FelipeStella/Repositorio-para-estudo/blob/master/instalar-nvm-wsl2-ubuntu.md)
- Execute o comando a seguir:

      nvm install node --lts -g
      
**Caso retorne o erro a seguir "Version '10 ’ not found - try nvm ls-remote to browse available versions", siga o passo-a-passo a seguir:**

- Ajuste o arquivo nvm.sh localizado em ~/.nvm adicionando o código a seguir na função nvm_download(), conforme a seguir:

      nvm_download() {
        local CURL_COMPRESSED_FLAG
        if nvm_has "curl"; then
	          curl -k $* # ADICIONE ESSE COMANDO <<<<<<<<<<<------------------------------
        if nvm_curl_use_compression; then
            CURL_COMPRESSED_FLAG="--compressed"
        fi
        curl --fail ${CURL_COMPRESSED_FLAG:-} -q "$@"
        elif nvm_has wget; then
        # Emulate curl with wget
	      ARGS=$(nvm_echo "$@" | command sed -e 's/--progress-bar /--progress=bar /' \
                            -e 's/--compressed //' \
                            -e 's/--fail //' \
                            -e 's/-L //' \
                            -e 's/-I /--server-response /' \
                            -e 's/-s /-q /' \
                            -e 's/-sS /-nv /' \
                            -e 's/-o /-O /' \
                            -e 's/-C - /-c /')
    
        # shellcheck disable=SC2086
        eval wget $ARGS
        fi
      }
      
- Reinicie o terminal
- Execute novamente o comando a seguir

      nvm install node --lts -g
      
*Caso retorne o erro "curl: (22) The requested URL returned error: 404 Not Found", Siga o passo-a-passo a seguir

- Crie um arquivo no repositório local chamado .curlrc adicionando a linha a seguir:

      -k
      
- Ajuste o arquivo nvm.sh localizado em ~/.nvm adicionando o código a seguir na função nvm_download(), conforme a seguir:

      nvm_download() {
        local CURL_COMPRESSED_FLAG
        if nvm_has "curl"; then
	          wget$* # ADICIONE ESSE COMANDO <<<<<<<<<<<------------------------------
        if nvm_curl_use_compression; then
            CURL_COMPRESSED_FLAG="--compressed"
        fi
        curl --fail ${CURL_COMPRESSED_FLAG:-} -q "$@"
        elif nvm_has wget; then
        # Emulate curl with wget
	      ARGS=$(nvm_echo "$@" | command sed -e 's/--progress-bar /--progress=bar /' \
                            -e 's/--compressed //' \
                            -e 's/--fail //' \
                            -e 's/-L //' \
                            -e 's/-I /--server-response /' \
                            -e 's/-s /-q /' \
                            -e 's/-sS /-nv /' \
                            -e 's/-o /-O /' \
                            -e 's/-C - /-c /')
    
        # shellcheck disable=SC2086
        eval wget $ARGS
        fi
      }
      
    - Execute novamente:
    
        nvm install node --lts -g
        
    **Se tudo estiver correto, executando o comando abaixo irá retornar a versão do node instalada**
    
        node --version
      

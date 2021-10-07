# Como abri o VSCode Remote no Ubunto WSL2

- Abra o terminal do Ubuntu
- Execute o comando a seguir:

        code .
        
- Se ocorre o erro a seguir:

        fstella@MTZ-TI017:~/ambiente-dev/SisControle$ code .
        Installing VS Code Server for x64 (8490d3dde47c57ba65ec40dd192d014fd2113496)
        Downloading: 100%
        Failed
        --2021-02-04 20:15:39--  https://update.code.visualstudio.com/commit:8490d3dde47c57ba65ec40dd192d014fd2113496/server-linux-x64/stable
        Resolving update.code.visualstudio.com (update.code.visualstudio.com)... 104.42.78.153
        Connecting to update.code.visualstudio.com (update.code.visualstudio.com)|104.42.78.153|:443... connected.
        ERROR: cannot verify update.code.visualstudio.com's certificate, issued by ‘CN=Unidasul CA Root Services,DC=unidasul,DC=local’:
          Self-signed certificate encountered.
        To connect to update.code.visualstudio.com insecurely, use `--no-check-certificate'.
        ERROR: Failed to download https://update.code.visualstudio.com/commit:8490d3dde47c57ba65ec40dd192d014fd2113496/server-linux-x64/stable to /home/fstella/.vscode-server/bin/8490d3dde47c57ba65ec40dd192d014fd2113496-1612480538.tar.gz
        Please install missing certificates.
        Debian/Ubuntu:  sudo apt-get install ca-certificates
        
- Crie um arquivo ~/ chamado .wgetrc
- Insira neste arquivo as linha a seguir:

        use_proxy=on
        check-certificate=off

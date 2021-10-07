# Como instalar o Wndows Terminal se não tiver acesso ao MicrosoftStore 

- Caso não tenha o chocolatey instalado na máquina, acesse o [Link](https://chocolatey.org/install)
- Realize o login utlizando o usuário de Administrador
- Acesse a pasta C:\ProgramData\chocolatey
- Clique com o botão direito do mouse na pasta "chocolatey" e acesse as propriedades
- Acesse a aba "Segurança"
- Clique em cima do seu usuário de não administrador
- Clique no botão "Editar"
- Marque a checkbox "Controle total"
- Clique no botão "Aplicar" e deslogue o usuário administrador
- Logue na máquina com o usuário normal
- Abra o PowerShell e execute o comando a seguir:

        choco install microsoft-windows-terminal
        
- Se tudo estiver correto, o Windows Terminal será instalado com sucesso

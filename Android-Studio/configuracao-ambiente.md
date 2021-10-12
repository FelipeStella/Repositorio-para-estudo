# Configuração de ambiente Android Studio para Windows

- Instale o android studio na máquina e o sdk do Java
- Acesse as variáveis de ambiente do Windows
- No campo **Variáveis do sistema** 
  - crie uma nova variável denominada **JAVA_HOME** com o valor do caminho onde está instalado o sdk
  ![image](https://user-images.githubusercontent.com/55283349/137018572-3dc6e7e9-9631-4031-9448-2b7007a3fbb9.png)

  - crie outra variável denominada **ANDROID_HOME** com o valor onde consta o sdk do Android Studio
  ![image](https://user-images.githubusercontent.com/55283349/137019015-a817faec-1b2b-4f03-aa89-666b05d4a45c.png)

  - Localize a variável **path** e clique em **Editar**
  - Insira as quatro variáveis a seguir e salve
      - %ANDROID_HOME%\emulator
      - %ANDROID_HOME%\tools
      - %ANDROID_HOME%\tools\bin
      - %ANDROID_HOME%\platform-tools 

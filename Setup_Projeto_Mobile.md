# Setup projeto mobile typescript

* Execute o comando a seguir:
      
      expo init mobile
      
* Se o comando acima não funcionar acesse a documentação [expo-cli](https://github.com/FelipeStella/Repositorio-para-estudo/blob/main/Adicionar%20o%20expo-cli.md)
* Escolha a opção

      blank (TypeScript)    same as blank but with TypeScript configuration
      
* Se retornar o erro a seguir:

      request to https://registry.npmjs.org/expo-template-blank-typescript failed, reason: self signed certificate in certificate chain
      
* Abra o PowerShell como administrador e execute o comando 
    
      npm config set registry http://registry.npmjs.org

# Setup projeto mobile typescript com Yarn e Expo

## Para utilizar as fontes do Google, siga o passo a passo a seguir:

* Execute o comando 

      expo install @expo-google-fonts/nunito expo-font
      
* Insira o código a seguir:

      import { useFonts } from 'expo-font'
      import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'
      
      export default function App() {
      const [carregarFonts] = useFonts({
        Nunito_600SemiBold,
        Nunito_700Bold,
        Nunito_800ExtraBold
      })

      if(!carregarFonts) {
        return null  
      }
      
## Instale o módulo expo-navigation 

* Execute os comandos a seguir:

      yarn add @react-navigation/native
      expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
      yarn add @react-navigation/stack
      
## Estrutura

* Execute o comando a seguir:
      
      expo init mobile
      
* Se o comando acima não funcionar acesse a documentação [expo-cli](https://github.com/FelipeStella/Repositorio-para-estudo/blob/main/Adicionar%20o%20expo-cli.md)
* Escolha a opção

      blank (TypeScript)    same as blank but with TypeScript configuration
      
* Se retornar o erro a seguir:

      request to https://registry.npmjs.org/expo-template-blank-typescript failed, reason: self signed certificate in certificate chain
      
* Abra o PowerShell como administrador e execute o comando 
    
      npm config set registry http://registry.npmjs.org
      
* Crie uma pasta chamada src na raiz do projeto
* Crie dentro da pasta src outra chamada pages
* Crie um arquivo chamado routes.tsx dentro da pasta src




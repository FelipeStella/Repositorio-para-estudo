# Instruções instalação e configuração do nodemailer no NodeJs com template Typescript
## Pré-requisitos
```
Node --version v10.19.0
Yarn --version 1.22.5
VSCode instalado na máquina
```
- Instale as dependencias nodemailer e nodemailer-express-handlebars
```
yarn add nodemailer
yarn add @types/nodemailer
yarn add nodemailer-express-handlebars
yarn add @types/nodemailer-express-handlebars
```
- Crie um arquivo .json com as configurações smtp do e-mail dentro da pasta src/config
```
Exemplo:
  {
    "host": "servidor smtp",
    "port": numero da porta,
    "user": "nome de usuario",
    "pass": "senha"
  }
```
- Crie um arquivo .ts com as configurações de transporte de envio do e-mail dentro da pasta src/module
```
Exemplo:
import nodemailer from 'nodemailer'

const hbs = require('nodemailer-express-handlebars')

import { host, port, user, pass } from '../config/mailTrap.json'

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {
        user,
        pass
    }
})

transport.use('compile', hbs({
    viewEngine: 'handlebars',
    extName: '.html'
}))

export default transport
```
- Crie uma função para envio de e-mail
```
public async function() {

        const info = await mailer.sendMail({
            to: 'felipedasilva.stella@gmail.com',
            from: 'felipe.stella@unidasul.com.br',
            html: 
            `<!DOCTYPE html>
            <html>
            <body>
...
```

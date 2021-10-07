# Conexão no mySql instalado no Docker via NodeJs

Ao tentar conectar ocorre o erro "ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client"

Solução:

- Execute o comando a seguir no seu banco de dados:

      ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'
      
Onde 'root' é seu usuário 'password' a sua senha.'

- Em seguida, execute esta consulta para atualizar os privilégios:

      flush privileges
      
Tente conectar-se utilizando o Node novamente, para mais informações acesse o [link](https://medium.com/codespace69/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server-consider-8afadc2385e2)

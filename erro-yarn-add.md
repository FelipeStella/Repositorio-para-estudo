Retorna o erro "error An unexpected error occurred: "https://registry.yarnpkg.com/yup: self signed certificate in certificate chain"" quando adcionar pacotes em seu projeto em node.js pelo Yarn

- Caso você esteja em um ambiente corporativo execute o comando a seguir em seu terminal:

    yarn config set strict-ssl false --global

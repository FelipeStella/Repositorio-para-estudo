# Chaves SSH e Tokens

## Gerar uma nova chave SSH

* Abra Git Bash.
* Cole o texto abaixo, substituindo o endereço de e-mail pelo seu GitHub.</p>
`$ ssh-keygen -t ed25519 -C "your_email@example.com"`

* O comando criará uma nova chave SSH, usando o e-mail fornecido como uma etiqueta.</p>
`> Generating public/private ed25519 key pair`

* Quando aparecer a solicitação "Enter a file in which to save the key" (Insira um arquivo no qual salvar a chave), presssione Enter. O local padrão do arquivo será aceito.</p>
`> Enter a file in which to save the key (/c/Users/you/.ssh/id_ed25519):[Press enter]`

## Adicionar sua chave SSH ao ssh-agent

* Inicie o ssh-agent no background.</p>
`eval "$(ssh-agent -s)"`

* Adicione sua chave SSH privada ao ssh-agent. Se você criou sua chave com um nome diferente ou se você estiver adicionando uma chave existente com um nome diferente, substitua id_ed25519 no comando pelo nome do seu arquivo de chave privada.</p>
`$ ssh-add ~/.ssh/id_ed25519`

## Adicione a chave SSH à sua conta em GitHub

* Acesse a pasta onde a chave publica foi gerada, abra a chave publica e copie a chave.</p>
![image](https://user-images.githubusercontent.com/55283349/133869740-0f021273-5f83-4b21-b759-cd313b6aaf9e.png)

* Acesse o GitHub.
* Selecione a opção SSH and GPG keys.
* Clique no botão New SSH key.
![image](https://user-images.githubusercontent.com/55283349/133869905-ce6ebb90-3e36-4189-92b3-e7e54523126f.png)

* Defina um título para chave e cole ela no campo Key.
![image](https://user-images.githubusercontent.com/55283349/133869942-f0df6e38-04ad-4dcb-9d1b-e73f8de5b665.png)


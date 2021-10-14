# Introdução ao FlexBox

O Flexbox foi projetado para fornecer um layout consistente em diferente tamanhos de tela. Assim como temos na web no React Native funciona da mesma forma.

Ao se utilizar o flexbox, é preciso ter em mente que todas as operações realizadas relacionam-se a dois eixos: o eixo principal(Main Axis) e o eixo transversal(Cross Axis).

O eixo pricipal é definido através da propriedade **flex-direction** e o eixo transversal encontra-se na direção perpendicular a ele.

A propriedade flex-direction define a direção do eixo principal e pode ter quatro valores possíveis:

✔️ row
✔️ row-reverse
✔️ column
✔️ column-reverse

Se o valor escolhido for row (linha) ou row-reverse (linha reversa), seu eixo principal se moverá ao longo da linha - na direção inline.

![image](https://user-images.githubusercontent.com/55283349/137397717-7e5c235a-9f00-49f1-adea-37fd8e6eb51f.png)

Se o valor escolhido for column (coluna) ou column-reverse (coluna reversa), seu eixo principal se moverá do topo até o fim da página - na direção block.

![image](https://user-images.githubusercontent.com/55283349/137397924-1357a23e-ad43-4302-bad2-aafcd81ce974.png)

Podemos utilizar proporções com a propriedade flex para ocuparmos o tamanho conforme o peso estabelecido para cada objeto(container)

![image](https://user-images.githubusercontent.com/55283349/137398456-192beede-7198-4597-a226-9b40c8526766.png)

![image](https://user-images.githubusercontent.com/55283349/137398481-f125c45a-bbdb-4ca5-b634-e688b6901c0f.png)

![image](https://user-images.githubusercontent.com/55283349/137398508-2eb13503-01b6-4d5f-b579-0c3908412672.png)

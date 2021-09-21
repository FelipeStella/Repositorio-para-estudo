# Conceitos

## Currying

**Currying** é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried. Por exemplo, uma função que recebe três argumentos, ao sofrer currying, resulta em uma função que recebe um argumento e retorna uma função que recebe um argumento, que por sua vez retorna uma função que recebe um argumento e retorna o resultado da função original.

*Exemplo*:

Uma versão curried da função (i.e., função resultante do currying) pode ser escrita usando-se closures:

![image](https://user-images.githubusercontent.com/55283349/134113978-0e04e052-2280-4ba3-9f1b-2c9ac639410d.png)

## Hosting

Hoisting (içamento, em português) é um termo que você não encontrará usado em nenhuma prosa de especificação normativa antes da especificação de idioma do [ECMAScript® 2015](https://262.ecma-international.org/6.0/). Hoisting foi pensado como uma maneira geral de pensar sobre como os contextos de execução (especificamente as fases de criação e execução) funcionam em JavaScript. No entanto, o conceito pode ser um pouco confuso a princípio.

Conceitualmente, por exemplo, uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código.

### Exemplo técnico

Uma das vantagens do JavaScript em colocar declarações de função na memória antes de executar qualquer segmento de código é que ele permite que você use uma função antes de declara-la em seu código. Por exemplo:

![image](https://user-images.githubusercontent.com/55283349/134114710-28469763-6e78-42c4-b780-e9ef63d52220.png)

O trecho de código acima é como você escreveria o código para que ele funcionasse. Agora, vamos ver o que acontece quando chamamos a função antes de escrevê-la:

![image](https://user-images.githubusercontent.com/55283349/134114747-a4d92429-b9d2-4402-8a63-84ea3deaa2b2.png)

Mesmo que chamemos a função em nosso código primeiro, antes que a função seja escrita, o código ainda funciona. Isto ocorre por conta de como a execução de contexto funciona em JavaScript.

Hoisting funciona bem com outros tipos de dados e variáveis. As variáveis podem ser inicializadas e usadas antes de serem declaradas.



<br/>
<br/>
FONTE:<p/>
https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting<p/>
https://rodrigorgs.github.io/aulas/mata56/aula14-currying<p/>



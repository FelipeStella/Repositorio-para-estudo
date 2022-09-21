<h3>Formatação de strings</h3>

- Use sequências de fuga de caracteres quando você precisa inserir um caractere especial em uma sequência literal, como uma guia, nova linha ou uma marca de cotação dupla .\t\n\"
- Use um personagem de fuga para a barra invertida quando você precisar usar uma barra invertida em todos os outros cenários.\\
- Use a diretiva para criar uma sequência literal que mantenha todos os caracteres de formatação do espaço branco e barras invertidas em uma sequência.@
- Use o código de quatro caracteres para representar caracteres Unicode (UTF-16) em uma sequência.\u
- Os caracteres Unicode não podem ser impressos corretamente dependendo do aplicativo.

<h3>Ordem de operações</h3>

Podemos usar os símbolos () como os operadores de ordem das operações. No entanto, esta não é a única forma da ordem das operações ser determinada.
Em matemática, PEMDAS é um acrônimo que ajuda os alunos a se lembrar da ordem em que várias operações são executadas. A ordem é:
 - Parêntese (o que estiver dentro do parêntese é executado primeiro)
 - Exponentes
 - Multiplicação e Divisão (da esquerda para a direita)
 - Adição e Subtração (da esquerda para a direita)
<p>
  O C# segue a mesma ordem que o acrônimo PEMDAS, exceto pelos exponentes. 
  Embora não haja um operador com exponente em C#, você pode usar o método System.Math.Pow(), 
  que está disponível na Biblioteca de Classes .NET. O módulo Chamar métodos da biblioteca de classes .NET usando C# apresentará esse e outros métodos.
</p>

# Error Boundary

Error boundaries são componentes React que capturam erros de JavaScript em qualquer lugar na sua árvore de componentes filhos, registram esses erros e mostram uma UI alternativa em vez da árvore de componentes que quebrou. Error boundaries capturam estes erros durante a renderização, em métodos do ciclo de vida, e em construtores de toda a árvore abaixo delas.

**Error Boundaries não capturam erros em:**

- Manipuladores de eventos
- Código assíncrono (ex. callbacks de setTimeout ou requestAminationFrame)
- Renderização no servidor
- Erros lançados na própria error boundary (ao invés de em seus filhos)

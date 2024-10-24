# Calculadora Simples em JavaScript

Este projeto contém uma calculadora simples em JavaScript que realiza as quatro operações matemáticas básicas: adição, subtração, multiplicação e divisão. A função aceita dois números e um operador como argumentos e retorna o resultado da operação.

## Como funciona

A função `calculadoraSimples(num1, num2, ope)` recebe três parâmetros:
- `num1`: o primeiro número.
- `num2`: o segundo número.
- `ope`: o operador que define a operação a ser realizada (`+`, `-`, `*`, `/`).

A função realiza a operação de acordo com o operador fornecido. Se o operador for inválido ou uma divisão por 0 for solicitada, a função retornará uma mensagem de erro.

### Regras da função:
- **Adição (`+`)**: soma `num1` e `num2`.
- **Subtração (`-`)**: subtrai `num2` de `num1`.
- **Multiplicação (`*`)**: multiplica `num1` por `num2`.
- **Divisão (`/`)**: divide `num1` por `num2`, desde que `num2` não seja 0.
  
Se um operador inválido for informado, a função retorna uma mensagem de erro. Além disso, a função impede divisões por zero e retorna uma mensagem apropriada.

### Exemplo

```javascript
function calculadoraSimples(num1, num2, ope) {
    let resultado = 0;
  
    if (ope === '+') {
        resultado = num1 + num2;
    } else if (ope === '-') {
        resultado = num1 - num2;
    } else if (ope === '*') {
        resultado = num1 * num2;
    } else if (ope === '/') {
        if (num2 === 0) {
            return "Não é possível fazer divisão por 0";
        } else {
            resultado = num1 / num2;
        }
    } else {
        return "Informe uma operação válida";
    }
  
    return resultado;
}

console.log(calculadoraSimples(2, 3, '*')); // 6

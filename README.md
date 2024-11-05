# Calculadora Simples em JavaScript

Este projeto é uma calculadora simples implementada em JavaScript que permite realizar operações aritméticas básicas como soma, subtração, multiplicação e divisão entre dois números. O cálculo é feito através de uma interface de input HTML, com o valor mostrado em um campo de resultado.

## Funcionalidades

- **Adicionar Números**: Adiciona números ao campo de exibição.
- **Selecionar Operação**: Seleciona uma das quatro operações matemáticas básicas (adição, subtração, multiplicação, divisão).
- **Calcular**: Realiza o cálculo da operação selecionada entre dois números inseridos.
- **Limpar**: Limpa o campo de exibição e reseta as variáveis da calculadora.

## Explicação do Código

1. **Variáveis Globais**:
   - `operacaoAtual`: Armazena o operador (`+`, `-`, `*`, `/`) selecionado.
   - `primeiroNumero`: Armazena o primeiro número digitado para a operação.

2. **Função `adicionarNumero(numero)`**:
   - Recebe um número como argumento e o adiciona ao campo de exibição (`resultado`).
   
3. **Função `operacao(op)`**:
   - Recebe o operador da operação desejada e armazena o valor atual do campo de exibição como `primeiroNumero`.
   - Limpa o campo de exibição para a entrada do segundo número.

4. **Função `calcular()`**:
   - Pega o segundo número do campo de exibição.
   - Converte ambos os números (`primeiroNumero` e `segundoNumero`) para tipo `float` para realizar operações de ponto flutuante.
   - Realiza a operação com base no operador selecionado (`operacaoAtual`) usando uma estrutura `switch`.
   - Exibe o resultado no campo de exibição.

5. **Função `limpar()`**:
   - Limpa o campo de exibição (`resultado`) e redefine as variáveis `primeiroNumero` e `operacaoAtual`.

## Exemplo de Uso

1. **Adicione um número** (ex.: 5).
2. **Escolha uma operação** (ex.: `+`).
3. **Adicione outro número** (ex.: 3).
4. **Pressione calcular**: O campo de exibição mostrará o resultado (ex.: 8).

## Estrutura HTML

- O código presume a existência de um campo de input com `id="resultado"` para exibir o valor, e de botões ou métodos para chamar as funções `adicionarNumero()

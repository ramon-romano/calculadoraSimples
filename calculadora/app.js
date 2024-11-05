let operacaoAtual = '';
let primeiroNumero = '';

function adicionarNumero(numero) {
    const resultado = document.getElementById('resultado');
    resultado.value += numero; 
}

function operacao(op) {
    operacaoAtual = op; 
    primeiroNumero = document.getElementById('resultado').value; 
    document.getElementById('resultado').value = ''; 
}

function calcular() {
    const segundoNumero = document.getElementById('resultado').value;
    let resultado;

    const num1 = parseFloat(primeiroNumero);
    const num2 = parseFloat(segundoNumero);

    switch (operacaoAtual) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Erro'; 
            break;
        default:
            return;
    }

    document.getElementById('resultado').value = resultado;
}

function limpar() {
    document.getElementById('resultado').value = '';
    primeiroNumero = '';
    operacaoAtual = '';
}
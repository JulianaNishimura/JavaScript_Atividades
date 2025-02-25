function qualOperacao(callback, a, b) {
  const funcao = {
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao,
  };
  return funcao[callback](a, b);
}

let soma = function (a, b) {
  return a + b;
};

let subtracao = function (a, b) {
  return a - b;
};

let multiplicacao = function (a, b) {
  return a * b;
};

let divisao = function (a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return 'Operação inválida';
  }
};

function calcular() {
  let elementoNumero1 = document.getElementById('numero1');
  let elementoNumero2 = document.getElementById('numero2');
  let elementoOperacao = document.querySelector(
    'input[name="operacoes"]:checked'
  );

  if (
    elementoNumero1 instanceof HTMLInputElement &&
    elementoNumero2 instanceof HTMLInputElement &&
    elementoOperacao instanceof HTMLInputElement
  ) {
    let num1 = parseFloat(elementoNumero1.value);
    let num2 = parseFloat(elementoNumero2.value);
    let operacao = elementoOperacao.value;

    if (!isNaN(num1) && !isNaN(num2)) {
      let resultado = qualOperacao(operacao, num1, num2);
      escreveResultado(resultado);
    }
  }
}

function escreveResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida != null) {
    saida.textContent = `O resultado da operação é: ${resultado}`;
  }
}

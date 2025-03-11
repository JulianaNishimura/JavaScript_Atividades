const configurarEventoMaior = () => {
  let num1Ele = document.getElementById('numero1');
  let num2Ele = document.getElementById('numero2');
  let num3Ele = document.getElementById('numero3');
  let botao = document.getElementById('exibirBtn');
  if (botao) {
    botao.addEventListener('click', () => {
      cliqueNoBotao(num1Ele, num2Ele, num3Ele);
    });
  }
};

const cliqueNoBotao = (num1, num2, num3) => {
  if (
    num1 instanceof HTMLInputElement &&
    num2 instanceof HTMLInputElement &&
    num3 instanceof HTMLInputElement
  ) {
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let n3 = parseFloat(num3.value);
    maiorNumero(n1, n2, n3);
  }
};

const compararNumeros = (num1, num2) => {
  if (num1 >= num2) {
    return true;
  } else {
    return false;
  }
};

const maiorNumero = (num1, num2, num3) => {
  let maior;
  let saida = document.getElementById('resultado');
  maior = compararNumeros(num1, num2)
    ? num1 >= num3
      ? num1
      : num3
    : num2 >= num3
    ? num2
    : num3;
  if (saida) {
    saida.textContent = `O maior número é: ${maior}`;
  }
};

document.addEventListener('DOMContentLoaded', configurarEventoMaior);

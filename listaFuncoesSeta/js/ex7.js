const configurarEventoFatorial = () => {
  let numeroEle = document.getElementById('numero');
  let botao = document.getElementById('exibirBtn');
  if (botao) {
    botao.addEventListener('click', () => {
      cliqueNoBotao(numeroEle);
    });
  }
};

const cliqueNoBotao = (numEle) => {
  if (numEle instanceof HTMLInputElement) {
    let numero = parseFloat(numEle.value);
    calcularFatorial(numero);
  }
};

const calcularFatorial = (numero) => {
  let fatorial = 1;
  if (numero != 1 && numero != 0) {
    for (let i = numero; i >= 1; i--) {
      fatorial = fatorial * i;
    }
    exibirFatorial(fatorial, numero);
  }
};

const exibirFatorial = (fatorial, numero) => {
  let saida = document.getElementById('resultado');
  if (saida) {
    saida.textContent = `O fatorial de ${numero} é: ${fatorial}`;
  }
};

document.addEventListener('DOMContentLoaded', configurarEventoFatorial);

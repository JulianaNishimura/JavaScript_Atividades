const configurarEventoPar = () => {
  let numeroElemento = document.getElementById('numero');
  let exibirBtn = document.getElementById('exibirBtn');
  if (exibirBtn) {
    exibirBtn.addEventListener('click', () => {
      cliqueNoBotao(numeroElemento);
    });
  }
};

const cliqueNoBotao = (numeroElemento) => {
  if (numeroElemento instanceof HTMLInputElement) {
    let num = parseFloat(numeroElemento.value);
    verificarPar(num);
  }
};

const verificarPar = (numero) => {
  let saida = document.getElementById('resultado');
  if (saida) {
    let div = numero % 2;
    if (div === 0) {
      saida.textContent = 'O número Par';
    } else {
      saida.textContent = 'O número Ímpar';
    }
  }
};

document.addEventListener('DOMContentLoaded', configurarEventoPar);

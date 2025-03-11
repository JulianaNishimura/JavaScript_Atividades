const configurarEventoQuadrado = () => {
    let numeroElemento = document.getElementById('numero');
    let exibirBtn = document.getElementById('exibirBtn');
    if (exibirBtn) {
      exibirBtn.addEventListener('click', () => {
        cliqueNoBotao(numeroElemento);
      });
    }
}

const cliqueNoBotao = (numeroElemento) => {
  if (numeroElemento instanceof HTMLInputElement) {
    let num = parseFloat(numeroElemento.value);
    aplicarOperacao(num,calcularQuadrado);
  }
};

const calcularQuadrado = (numero) => {
  let saida = document.getElementById('resultado');
  if (saida) {
    let quadrado = String(numero ** 2);
    saida.textContent = `O quadrado de ${numero} é: ${quadrado}`;
  }
};

const aplicarOperacao = (numero, calcularQuadrado) => {
  calcularQuadrado(numero);
};

document.addEventListener('DOMContentLoaded', configurarEventoQuadrado);


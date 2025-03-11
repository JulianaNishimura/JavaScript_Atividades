const configurarEventoImposto = () => {
  let valorEle = document.getElementById('valor');
  let impostoEle = document.getElementById('imposto');
  let botao = document.getElementById('exibirBtn');
  if (botao) {
    botao.addEventListener('click', () => {
      cliqueNoBotao(valorEle, impostoEle);
    });
  }
};

const cliqueNoBotao = (valorEle, impostoEle) => {
  if (
    valorEle instanceof HTMLInputElement &&
    impostoEle instanceof HTMLInputElement
  ) {
    let valor = parseFloat(valorEle.value);
    let imposto = parseFloat(impostoEle.value);
    calcularImposto(valor, imposto);
  }
};

const calcularImposto = (valor, imposto) => {
  let totalDeImposto = valor * (imposto / 100);
  valorTotal(valor, totalDeImposto);
};

const valorTotal = (valor, imp) => {
  let saida = document.getElementById('resultado');
  if (saida) {
    let total = valor + imp;
    saida.textContent = `O total é de: ${total}`;
  }
};

document.addEventListener('DOMContentLoaded', configurarEventoImposto);

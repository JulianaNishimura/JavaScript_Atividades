const configurarEventoDesconto = () => {
  let precoElemento = document.getElementById('preco');
  let descontoElemento = document.getElementById('desconto');
  let exibirBtn = document.getElementById('exibirBtn');
  if (exibirBtn) {
    exibirBtn.addEventListener('click', () => {
      cliqueNoBotao(precoElemento, descontoElemento);
    });
  }
};

const cliqueNoBotao = (precoElemento, descontoElemento) => {
  if (
    precoElemento instanceof HTMLInputElement &&
    descontoElemento instanceof HTMLInputElement
  ) {
    let preco = parseFloat(precoElemento.value);
    let desconto = parseFloat(descontoElemento.value) / 100;
    if (isNaN(desconto) || desconto === '') {
      desconto = 0.1;
    }
    calculaTotal(preco, desconto);
  }
};

const calculaTotal = (preco, desconto) => {
  let saida = document.getElementById('resultado');
  if (saida) {
    let total = preco - preco * desconto;
    saida.textContent = `O total é: ${total}`;
  }
};

document.addEventListener('DOMContentLoaded', configurarEventoDesconto);

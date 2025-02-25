function calcularNumero(valor, quantidade, callback) {
  return callback(valor, quantidade);
}

function valorTotal(valor, quantidade) {
  let res = valor * quantidade;
  return res;
}

function verificarElementos() {
  let categoriaElemento = document.getElementById('categoria');
  let quantidadeElemento = document.getElementById('quantidade');
  let saida = document.getElementById('resultado');
  if (
    categoriaElemento instanceof HTMLSelectElement &&
    saida != null &&
    quantidadeElemento instanceof HTMLInputElement
  ) {
    let categoria =
      categoriaElemento.options[categoriaElemento.selectedIndex].text;
    let categoriaValor = parseFloat(
      categoriaElemento.options[categoriaElemento.selectedIndex].value
    );
    let quantidade = parseInt(quantidadeElemento.value);

    let resultado = calcularNumero(categoriaValor, quantidade, valorTotal);
    saida.textContent = `O valor total de ${quantidade} unidades é igual a R$ ${resultado}`;
  }
}

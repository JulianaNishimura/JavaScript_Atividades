function CalculaPreco() {
  const entradaProduto = document.querySelector(
    'input[name="produtos"]:checked'
  );
  const entradaDesconto = document.querySelector(
    'input[name="descontos"]:checked'
  );

  if (
    entradaProduto instanceof HTMLInputElement &&
    entradaDesconto instanceof HTMLInputElement
  ) {
    let produto = Number(entradaProduto.value);
    let desconto = Number(entradaDesconto.value);
    let final = produto - produto * (desconto / 100);

    let saida = document.getElementById('resultado');
    if (saida != null) {
      saida.textContent = 'O preço final é: ' + String(final);
    }
  }
}

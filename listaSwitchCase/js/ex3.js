function CategorizaProduto() {
  let codigoProdutoInput = document.getElementById('codigoProduto');
  if (codigoProdutoInput instanceof HTMLInputElement) {
    let codigoProduto = Number(codigoProdutoInput.value);
    let mensagem;
    switch (codigoProduto) {
    case 1:
        mensagem = 'Alimento não-perecível';
        break;
    case 2:
    case 3:
    case 4:
        mensagem = 'Alimento perecível';
        break;
    case 5:
    case 6:
        mensagem = 'Vestuário';
        break;
    case 7:
        mensagem = 'Higiene Pessoal';
        break;
    case ((codigoProduto>=8 && codigoProduto<=15) ? codigoProduto : -1):
        mensagem = 'Limpeza e Utensílios Domésticos';
        break;
    default:
        mensagem = 'Código Inválido';
        break;
    }
    let saida = document.getElementById('saida');
    if (saida != null) {
      saida.textContent = mensagem;
    }
  }
}

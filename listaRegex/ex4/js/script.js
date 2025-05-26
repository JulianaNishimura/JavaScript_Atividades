function verificarCodigo() {
  const regexCodigoProduto = /^[A-Z]{3}-\d{4}(-\d{2})?$/;
  let codigoElemento = document.getElementById('codigo');
  if (codigoElemento instanceof HTMLInputElement) {
    let codigo = codigoElemento.value;
    if (codigo.match(regexCodigoProduto)) {
      saida('Cadastrado');
    } else {
      saida('Código inválido.');
    }
  }
}

function saida(texto) {
  let saida = document.getElementById('saida');
  if (saida) {
    saida.textContent = texto;
  }
}

function configurar() {
  let botao = document.getElementById('cadastrarCodigo');
  if (botao) {
    botao.addEventListener('click', verificarCodigo);
  }
}

document.addEventListener('DOMContentLoaded', configurar);

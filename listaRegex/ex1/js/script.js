function verificarNome() {
  const regex = /^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)*$/;
  let nomeEle = document.getElementById('nome');
  if (nomeEle instanceof HTMLInputElement) {
    let nome = nomeEle.value;
    if (nome.match(regex)) {
      saida('Cadastrado!');
    } else {
      saida('Nome inválido');
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
  let botao = document.getElementById('cadastrarNome');
  if (botao) {
    botao.addEventListener('click', verificarNome);
  }
}

document.addEventListener('DOMContentLoaded', configurar);

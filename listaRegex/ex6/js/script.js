function verificarTelefone() {
  const regexTelefone = /^(?:\+55\s)?\(\d{2}\)\s\d{4,5}-?\d{4}$/;

  const telefoneElemento = document.getElementById('telefone');
  if (telefoneElemento instanceof HTMLInputElement) {
    const telefone = telefoneElemento.value.trim();
    if (regexTelefone.test(telefone)) {
      saida('Telefone cadastrado com sucesso.');
    } else {
      saida('Telefone inválido.');
    }
  }
}

function saida(texto) {
  const saidaElemento = document.getElementById('saida');
  if (saidaElemento) {
    saidaElemento.textContent = texto;
  }
}

function configurar() {
  const botao = document.getElementById('cadastrarTelefone');
  if (botao) {
    botao.addEventListener('click', verificarTelefone);
  }
}

document.addEventListener('DOMContentLoaded', configurar);

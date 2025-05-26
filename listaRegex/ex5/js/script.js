function verificarEmail() {
  const regexEmail = /^[\w.-]+@(gmail|hotmail|outlook|yahoo)\.(com|com\.br|org)$/;

  const emailElemento = document.getElementById('email');
  if (emailElemento instanceof HTMLInputElement) {
    const email = emailElemento.value.trim().toLowerCase();
    if (email.match(regexEmail)) {
      saida('E-mail cadastrado com sucesso.');
    } else {
      saida('E-mail inválido.');
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
  const botao = document.getElementById('cadastrarEmail');
  if (botao) {
    botao.addEventListener('click', verificarEmail);
  }
}

document.addEventListener('DOMContentLoaded', configurar);

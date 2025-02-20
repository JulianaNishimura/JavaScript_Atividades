function statusNota() {
  let notaInput = document.getElementById('nota');
  let mensagem;
  if (notaInput instanceof HTMLInputElement) {
    let nota = Number(notaInput.value);
    if (nota >= 0 && nota <= 10) {
      if (nota >= 5) {
        mensagem = 'Você está Aprovado!!';
      } else if (nota >= 3 && nota < 5) {
        mensagem = 'Você está em Recuperação!';
      } else {
        mensagem = 'Você está resprovado...';
      }
    } else {
      mensagem = 'Digite uma nota válida (entre 0 e 10).';
    }
    saida(mensagem);
  }
}

function saida(mensagem) {
  let saida = document.getElementById('saida');
  if (saida != null) {
    saida.textContent = mensagem;
  }
}

function iniciar() {
  let statusBotao = document.getElementById('statusBotao');
  if (statusBotao) {
    statusBotao.addEventListener('click', statusNota);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);

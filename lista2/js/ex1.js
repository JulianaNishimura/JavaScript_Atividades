function categorizaNumero() {
  let numeroInput = document.getElementById('numero');
  let mensagem;
  if (numeroInput instanceof HTMLInputElement) {
    let numero = Number(numeroInput.value);
    if (numero > 0) {
      mensagem = 'O número é Positivo.';
    } else if (numero < 0) {
      mensagem = 'O numero é Negativo.';
    } else {
      mensagem = 'O número é Zero.';
    }
    saidaEscrita(mensagem);
  }
}

function saidaEscrita(mensagem) {
  let saida = document.getElementById('resultado');
  if (saida != null) {
    saida.textContent = mensagem;
  }
}

function iniciar() {
  let validarNumeroBotao = document.getElementById('validarNumeroBotao');
  if (validarNumeroBotao) {
    validarNumeroBotao.addEventListener('click', categorizaNumero);
  }
}
document.addEventListener('DOMContentLoaded', iniciar);

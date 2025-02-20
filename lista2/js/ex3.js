function anoBissexto() {
  let anoInput = document.getElementById('ano');
  let mensagem;
  if (anoInput instanceof HTMLInputElement) {
    let ano = Number(anoInput.value);
    if (Number.isInteger(ano / 4)) {
      mensagem = 'Esse ano é bissexto!';
    } else {
      mensagem = 'Esse ano não é bissexto...';
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
  let anoBissextoBotao = document.getElementById('anoBissextoBotao');
  if (anoBissextoBotao) {
    anoBissextoBotao.addEventListener('click', anoBissexto);
  }
}
document.addEventListener('DOMContentLoaded', iniciar);

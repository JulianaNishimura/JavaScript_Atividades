function estacao() {
  let numeroInput = document.getElementById('numero');
  let mensagem;
  if (numeroInput instanceof HTMLInputElement) {
    let numero = Number(numeroInput.value);
    switch (numero) {
      case 1:
        mensagem =
          'Primavera: É a estação das flores, com temperaturas amenas e dias e noites de igual duração.';
        break;
      case 2:
        mensagem =
          'Verão: É um período de sol intenso, com chuvas que podem vir acompanhadas de trovões e raios.';
        break;
      case 3:
        mensagem =
          'Outono: É a estação das frutas, com temperaturas baixas e queda das folhas.';
        break;
      case 4:
        mensagem =
          'Inverno: É a estação da chuva, neve e geada, com temperaturas baixas.';
        break;
      default:
        mensagem = 'Digite um número válido.';
        break;
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
  let estacoesBotao = document.getElementById('estacoesBotao');
  if (estacoesBotao) {
    estacoesBotao.addEventListener('click', estacao);
  }
}
document.addEventListener('DOMContentLoaded', iniciar);

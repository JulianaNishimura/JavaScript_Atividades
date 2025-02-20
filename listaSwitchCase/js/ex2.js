function calcular() {
  let numero1Input = document.getElementById('numero1');
  let numero2Input = document.getElementById('numero2');
  let operacaoInput = document.getElementById('operacao');
  if (
    numero1Input instanceof HTMLInputElement &&
    numero2Input instanceof HTMLInputElement &&
    operacaoInput instanceof HTMLInputElement
  ) {
    let numero1 = Number(numero1Input.value);
    let numero2 = Number(numero2Input.value);
    let operacao = Number(operacaoInput.value);
    let mensagem;
    switch (operacao) {
      case 1:
        mensagem = 'O resultado é: ' + (numero1 + numero2) / 2;
        break;
      case 2:
        mensagem = 'O resultado é: ' + (numero1 - numero2);
        break;
      case 3:
        mensagem = 'O resultado é: ' + (numero1 * numero2);
        break;
      case 4:
        mensagem = 'O resultado é: ' + (numero1 / numero2);
        break;
      default:
        mensagem = 'Por favor, digite uma operação válida';
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
  let calculaBotao = document.getElementById('calculaBotao');
  if (calculaBotao) {
    calculaBotao.addEventListener('click', calcular);
  }
}
document.addEventListener('DOMContentLoaded', iniciar);

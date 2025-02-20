let soma = 0;

function somar() {
  let saida = document.getElementById('saida');
  let elementoNumero = document.getElementById('numero');
  if (elementoNumero instanceof HTMLInputElement && saida != null) {
    let numero = Number(elementoNumero.value);

    if (numero === -1) {
      saida.textContent = `A soma final foi: ${soma}`;
      elementoNumero.disabled = true; //para evitar mais entradas
    } else {
      soma += numero;
      saida.textContent = `A soma até então é: ${soma}`;
    }

    elementoNumero.value = ''; //para
    elementoNumero.focus(); //poder aceitar os próximos valores
  }
}

function iniciar() {
  let somarBotao = document.getElementById('somarBotao');
  if (somarBotao) {
    somarBotao.addEventListener('click', somar);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);

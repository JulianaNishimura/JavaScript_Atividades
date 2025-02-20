function configuracaoElementos() {
  let elementoNumero1 = document.getElementById('numero1');
  let elementoNumero2 = document.getElementById('numero2');
  let saida = document.getElementById('saida');

  if (
    elementoNumero1 instanceof HTMLInputElement &&
    elementoNumero2 instanceof HTMLInputElement &&
    saida != null
  ) {
    let numero1 = Number(elementoNumero1.value);
    let numero2 = Number(elementoNumero2.value);

    if (numero1 > numero2) {
      primo(numero2, numero1, saida);
    } else {
      primo(numero1, numero2, saida);
    }
  }
}

function primo(numMenor, numMaior, saida) {
  let primo = 0;
  let divisoes = 0;
  for (numMenor; numMenor <= numMaior; numMenor++) {
    for (let i = 1; i <= numMenor; i++) {
      if (numMenor % i == 0) {
        divisoes += 1;
      }
    }
    if (divisoes === 2) {
      primo += 1;
      divisoes = 0;
    }
    divisoes = 0;
  }
  saida.textContent = `A quantidade de números primos entre os número é: ${primo}`;
}

function iniciar() {
  let primoBotao = document.getElementById('primoBotao');
  if (primoBotao) {
    primoBotao.addEventListener('click', configuracaoElementos);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);

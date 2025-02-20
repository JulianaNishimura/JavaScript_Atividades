function imparPar() {
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
    let aux;
    if (numero1 > numero2) {
      aux = numero1;
      numero1 = numero2;
      numero2 = aux;
    }

    let par = 0;
    let impar = 0;
    for (numero1; numero1 <= numero2; numero1++) {
      if (numero1 % 2 === 0) {
        par += 1;
      } else {
        impar += 1;
      }
    }
    saida.textContent = `O número de ímpares entre os número é ${impar} e de pares é ${par}`;
  }
}

function iniciar() {
  let imparParBotao = document.getElementById('imparParBotao');
  if (imparParBotao) {
    imparParBotao.addEventListener('click', imparPar);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);

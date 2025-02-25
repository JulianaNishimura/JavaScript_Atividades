function transformaNumero(numero, callback) {
  return callback(numero);
}

function inverter(numero) {
  let num = numero.trim();
  let numReverso = num.split('').reverse().join('');
  return numReverso;
}

function exibeResultado() {
  let numeroElemento = document.getElementById('numero');
  let saida = document.getElementById('resultado');

  if (numeroElemento instanceof HTMLInputElement && saida != null) {
    let numero = numeroElemento.value;
    let resultado = transformaNumero(numero, inverter);

    saida.textContent = resultado;
  }
}

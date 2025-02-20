function triangulo() {
  const numeroElemento = document.getElementById('numero');
  let saida = document.getElementById('saida');
  if (numeroElemento instanceof HTMLInputElement && saida != null) {
    let numero = Number(numeroElemento.value);
    let texto = '*';
    for (let i = 0; i <= numero; i++) {
      let resultado = document.createElement('p');
      resultado.textContent = texto.repeat(i);
      saida.insertAdjacentElement('beforeend', resultado);
    }
  }
}

function iniciar() {
  let numeroBotao = document.getElementById('numeroBotao');
  if (numeroBotao) {
    numeroBotao.addEventListener('click', triangulo);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);

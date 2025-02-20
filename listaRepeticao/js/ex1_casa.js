function tabuada() {
  let numeroInput = document.getElementById('numero');
  let saida = document.getElementById('saida');

  if (numeroInput instanceof HTMLInputElement && saida) {
    let numero = Number(numeroInput.value);

    for (let i = 0; i <= 10; i++) {
      let resultado = document.createElement('p');

      resultado.textContent = `${numero} vezes ${i} = ${numero * i}`;

      saida.insertAdjacentElement('beforeend', resultado);
    }
  }
}

function iniciar() {
  let tabuadaBotao = document.getElementById('tabuadaBotao');
  if (tabuadaBotao) {
    tabuadaBotao.addEventListener('click', tabuada);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);

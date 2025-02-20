function Temvogais() {
  const fraseElemento = document.getElementById('frase');
  let saida = document.getElementById('saida');

  if (fraseElemento instanceof HTMLInputElement && saida != null) {
    const frase = fraseElemento.value.toLowerCase();
    //const frase = fraseElemento.value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(); - para tirar os acentos?
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    let contador = 0;
    for (let letra of frase) {
      if (vogais.includes(letra)) {
        contador++;
      }
    }
    saida.textContent = `A quantidade de vogais na frase é de ${contador}`;
  }
}

function iniciar() {
  let fraseBotao = document.getElementById('fraseBotao');
  if (fraseBotao) {
    fraseBotao.addEventListener('click', Temvogais);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);

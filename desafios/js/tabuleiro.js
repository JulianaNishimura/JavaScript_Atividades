function tabuleiro() {
  let numeroElemento = document.getElementById('numero');

  if (numeroElemento instanceof HTMLInputElement) {
    let numero = parseFloat(numeroElemento.value);
    let saida = document.getElementById('resultado');
    let tabela = '<table>';

    for (let i = 0; i < numero; i++) {
      tabela += '<tr>';
      for (let j = 0; j < numero; j++) {
        let cor;
        if ((i + j) % 2 === 0) {
          cor = 'preto';
        } else {
          cor = 'branco';
        }

        tabela += `<td class="${cor}"></td>`;
      }
      tabela += '</td>';
    }

    if (saida != null) {
      saida.innerHTML = '';
      saida.insertAdjacentHTML('beforeend', tabela);
    }
  }
}

function iniciar() {
  let gerarBotao = document.getElementById('gerarBotao');
  if (gerarBotao) {
    gerarBotao.addEventListener('click', tabuleiro);
  }
}
document.addEventListener('DOMContentLoaded', iniciar);

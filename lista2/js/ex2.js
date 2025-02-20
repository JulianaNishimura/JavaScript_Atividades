function verificaMes() {
  let mesSelect = document.getElementById('meses');
  if (mesSelect instanceof HTMLSelectElement) {
    let mesNum = mesSelect.options[mesSelect.selectedIndex].value;
    console.log(mesSelect.selectedIndex);
    let texto = mesSelect.options[mesSelect.selectedIndex].text;
    let mensagem = 'O mês ' + texto + ' é de número ' + mesNum;
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
  let verificaMesBotao = document.getElementById('verificaMesBotao');
  if (verificaMesBotao) {
    verificaMesBotao.addEventListener('click', verificaMes);
  }
}
document.addEventListener('DOMContentLoaded', iniciar);

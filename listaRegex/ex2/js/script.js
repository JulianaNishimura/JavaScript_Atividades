function verificarCpfRg() {
  const regexRG = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/;
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  let rgElemento = document.getElementById('rg');
  let cpfElemento = document.getElementById('cpf');
  if (
    cpfElemento instanceof HTMLInputElement &&
    rgElemento instanceof HTMLInputElement
  ) {
    let rg = rgElemento.value;
    let cpf = cpfElemento.value;
    if (rg.match(regexRG) && cpf.match(regexCPF)) {
      saida('Cadastrado!');
    } else if (rg.match(regexRG) && !cpf.match(regexCPF)) {
      saida('CPF inválido');
    } else if (!rg.match(regexRG) && cpf.match(regexCPF)) {
      saida('RG inválido');
    } else {
      saida('RG e CPF inválidos');
    }
  }
}

function saida(texto) {
  let saida = document.getElementById('saida');
  if (saida) {
    saida.textContent = texto;
  }
}

function configurar() {
  let botao = document.getElementById('cadastrarCpfRg');
  if (botao) {
    botao.addEventListener('click', verificarCpfRg);
  }
}

document.addEventListener('DOMContentLoaded', configurar);

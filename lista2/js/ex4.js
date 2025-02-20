function verificar() {
  let lado1Input = document.getElementById('lado1');
  let lado2Input = document.getElementById('lado2');
  let lado3Input = document.getElementById('lado3');
  if (
    lado1Input instanceof HTMLInputElement &&
    lado2Input instanceof HTMLInputElement &&
    lado3Input instanceof HTMLInputElement
  ) {
    let lado1 = Number(lado1Input.value);
    let lado2 = Number(lado2Input.value);
    let lado3 = Number(lado3Input.value);
    categorizaTriangulo(lado1, lado2, lado3);
  }
}

function categorizaTriangulo(lado1, lado2, lado3) {
  let mensagem;
  if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
    if (lado1 === lado2 && lado1 === lado3) {
      mensagem = 'O triângulo é equilátero!';
    } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
      mensagem = 'O triângulo é escaleno!';
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
      mensagem = 'O triângulo é isósceles!';
    } else {
      mensagem = 'Esse triângulo é inválido.';
    }
  } else {
    mensagem =
      '0 ou um número negativo não é válido para um lado do triângulo.';
  }
  saida(mensagem);
}

function saida(mensagem) {
  let saida = document.getElementById('saida');
  if (saida != null) {
    saida.textContent = mensagem;
  }
}

function iniciar() {
  let trianguloBotao = document.getElementById('trianguloBotao');
  if (trianguloBotao) {
    trianguloBotao.addEventListener('click', verificar);
  }
}
document.addEventListener('DOMContentLoaded', iniciar);

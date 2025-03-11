const calcularQuadrado = (numero) => {
  let saida = document.getElementById('resultado');
  if (saida) {
    let quadrado = String(numero ** 2);
    saida.textContent = `O quadrado de ${numero} é: ${quadrado}`;
  }
};

const aplicarOperacao = (numero, calcularQuadrado) => {
  calcularQuadrado(numero);
};

let num = Number(prompt('Digite um número: '));
aplicarOperacao(num, calcularQuadrado);

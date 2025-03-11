const verificarPar = (numero) => {
  let saida = document.getElementById('resultado');
  if (saida) {
    let div = numero % 2;
    if (div === 0) {
      saida.textContent = 'O número Par';
    } else {
      saida.textContent = 'O número Ímpar';
    }
  }
};

let numero = Number(prompt('Digite um número: '));
verificarPar(numero);

const raiz = function (n) {
  return Math.sqrt(n);
};

const exponencial = function (n) {
  return Math.exp(n);
};

function chamaFuncao(n, callback) {
  const funcao = {
    raiz: raiz,
    exponencial: exponencial,
  };
  return funcao[callback](n);
}

function raizEexponencial() {
  let numeroElemento = document.getElementById('num');
  let operacaoElemento = document.getElementById('operacao');
  let saida = document.getElementById('resultado');
  if (
    numeroElemento instanceof HTMLInputElement &&
    operacaoElemento instanceof HTMLSelectElement &&
    saida != null
  ) {
    let numero = parseFloat(numeroElemento.value);
    let operacao =
      operacaoElemento.options[operacaoElemento.selectedIndex].value;
    let texto = chamaFuncao(numero, operacao);
    saida.textContent = `O resultado é: ${texto}`;
  }
}

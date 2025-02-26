const raiz = function (n) {
  console.log(Math.sqrt(n));
  return Math.sqrt(n);
};

const exponencial = function (n) {
  console.log(Math.exp(n));
  return Math.exp(n).toFixed(3);
};

function chamaFuncao(n, callback) {
  const funcao = {
    raiz: raiz,
    exponencial: exponencial,
  };
  console.log(n, callback);
  return funcao[callback](n);
}

function raizEexponencial() {
  let numeroElemento = document.getElementById('numero');
  let operacaoElemento = document.getElementById('operacoes');
  let saida = document.getElementById('resultado');
  if (
    numeroElemento instanceof HTMLInputElement &&
    operacaoElemento instanceof HTMLSelectElement &&
    saida != null
  ) {
    let numero = parseFloat(numeroElemento.value);
    if (!isNaN(numero)) {
      let operacao =
        operacaoElemento.options[operacaoElemento.selectedIndex].value;

      console.log(operacao, numero);
      let texto = chamaFuncao(numero, operacao);
      console.log(texto);
      saida.textContent = `O resultado é: ${texto}`;
    }
  }
}

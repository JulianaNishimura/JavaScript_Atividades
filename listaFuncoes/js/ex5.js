function transformarTexto(texto, callback) {
  return callback(texto);
}

function contaVogais(texto) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;
  for (let letra of texto.toLowerCase()) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }
  return contador;
}

function pegarPalavra() {
  let elementoTexto = document.getElementById('texto');
  let saida = document.getElementById('resultado');
  if (elementoTexto instanceof HTMLInputElement && saida != null) {
    let texto = elementoTexto.value;
    let res = transformarTexto(texto, contaVogais);
    saida.textContent = `A palavra ou frase possui ${res} vogais.`;
  }
}

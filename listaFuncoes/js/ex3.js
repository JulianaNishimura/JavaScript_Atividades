function transformarTexto(texto, callback) {
  return callback(texto);
}

function paraMaiuscula(escrita) {
  return escrita.toUpperCase();
}

function transformar() {
  let textoElemento = document.getElementById('texto');
  let saida = document.getElementById('resultado');
  if (textoElemento instanceof HTMLInputElement) {
    let texto = textoElemento.value;
    let resultado = transformarTexto(texto, paraMaiuscula);
    if (saida != null) {
      saida.textContent = resultado;
    }
  }
}

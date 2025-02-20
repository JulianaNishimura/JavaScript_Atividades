function alteraFrases() {
  let elemento = document.getElementById('frase');
  if (elemento instanceof HTMLInputElement) {
    let frase = elemento.value;
    let saida1 = document.getElementById('numCarac');
    let saida2 = document.getElementById('fraseMaiu');
    let saida3 = document.getElementById('fraseMinu');

    if (frase != null) {
      let fraseMin = frase.toLowerCase();
      let fraseMai = frase.toUpperCase();
      let carac = frase.length;
      let caracSemEsp = 0;
      for (var i = 0; i < carac; i++) {
        if (frase[i] !== ' ') {
          caracSemEsp++;
        }
      }
      if (saida1 != null && saida2 != null && saida3 != null) {
        saida1.textContent =
          'O número de caracteres(contando os espaços) é: ' +
          String(carac) +
          '  e O número de caracteres(sem os espaços) é: ' +
          caracSemEsp;
        saida2.textContent = 'A frase em maiúsculo é: ' + fraseMai;
        saida3.textContent = 'A frase em minúsculo é: ' + fraseMin;
      }
    }
  }
}

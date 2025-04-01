function gerarMatriz() {
  let n = parseInt(document.getElementById('ordem').value);

  if (isNaN(n) || n <= 0) {
    alert('Por favor, insira um número válido ou maior que zero.');
    return;
  }

  let matriz = [];
  let Pares = 0;

  let matrizHTML = "<table border='1' cellspacing='0' cellpadding='5'>";

  for (let i = 0; i < n; i++) {
    let linha = [];
    matrizHTML += '<tr>';

    for (let j = 0; j < n; j++) {
      let num = Math.floor(Math.random() * 100); // Números de 0 a 99
      linha.push(num);
      if (num % 2 === 0) {
        Pares++;
      }
      matrizHTML += `<td>${num}</td>`;
    }

    matriz.push(linha);
    matrizHTML += '</tr>';
  }

  matrizHTML += '</table>';
  document.getElementById('matriz').innerHTML = matrizHTML;
  document.getElementById(
    'resultado'
  ).innerText = `Quantidade de números pares: ${Pares}`;
}

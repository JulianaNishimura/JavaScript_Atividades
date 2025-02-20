soma = 0;
let contador = 0;
let media = 0;

while (true) {
  let nota = Number(prompt('Digite uma nota: '));

  if (nota < 0 || nota > 10) {
    break;
  } else {
    contador++;
    soma += nota;
  }
}
media = soma / contador;
if (contador != 0) {
  alert('A média é: ' + media.toFixed(2));
} else {
  alert('Sem média definida.');
}

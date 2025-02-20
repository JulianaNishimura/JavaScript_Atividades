function calculaArea() {
  const elemento1 = document.getElementById('baseMaior');
  const elemento2 = document.getElementById('baseMenor');
  const elemento3 = document.getElementById('altura');
  if (
    elemento1 instanceof HTMLInputElement &&
    elemento2 instanceof HTMLInputElement &&
    elemento3 instanceof HTMLInputElement
  ) {
    let base_maior = Number(elemento1.value);
    let base_menor = Number(elemento2.value);
    let altura = Number(elemento3.value);
    let area_trapezio = ((base_maior + base_menor) * altura) / 2;
    document.body.insertAdjacentHTML('beforeend', 'Área do trapézio: ' + area_trapezio);
  }
}

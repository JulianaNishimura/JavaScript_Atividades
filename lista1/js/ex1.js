function anteEsuce() {
  let antecessor;
  let sucessor;
  let elemento = document.getElementById('numero');
  if (elemento instanceof HTMLInputElement) {
    let num = Number(elemento.value);
    antecessor = num - 1;
    sucessor = num + 1;
    let saida1 = document.getElementById('atual');
    let saida2 = document.getElementById('ante');
    let saida3 = document.getElementById('suce');
    if(saida1 != null && saida2 != null && saida3 != null){
      saida1.textContent = "Número atual: " + String(num);
      saida2.textContent = "Antecessor: " + String(antecessor);
      saida3.textContent = "Sucessor: " + String(sucessor);
    }
  }
}

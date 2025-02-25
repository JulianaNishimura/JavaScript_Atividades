function escolheCalculo(nome) {
  return nome();
}

function calculaArea() {
  let figuraElemento = document.getElementById('figura');
  let saida = document.getElementById('resultado');
  if (figuraElemento instanceof HTMLSelectElement && saida != null) {
    let figura = figuraElemento.options[figuraElemento.selectedIndex].value;
    let textoSaida = escolheCalculo(figura);
    saida.textContent = textoSaida;
  }
}

function quadrado() {
  let lado = parseFloat(prompt('Qual é o lado?'));
  let res = lado ** 2;
  return res;
}

function retangulo() {
  let base = parseFloat(prompt('Qual a base?'));
  let altura = parseFloat(prompt('Qual a altura?'));
  let res = base * altura;
  return res;
}

function trapezio() {
  let baseMaior = parseFloat(prompt('Qual a base maior?'));
  let baseMenor = parseFloat(prompt('Qual a base menor?'));
  let altura = parseFloat(prompt('Qual a altura?'));
  let res = ((baseMaior + baseMenor) * altura) / 2;
  return res;
}

function triangulo() {
  let base = parseFloat(prompt('Qual a base?'));
  let altura = parseFloat(prompt('Qual a altura?'));
  let res = (base * altura) / 2;
  return res;
}

function circulo() {
  let raio = parseFloat(prompt('Qual o raio?'));
  let res = (raio ** 2 * Math.PI).toFixed(2);
  return res;
}

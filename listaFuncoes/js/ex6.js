function escolheCalculo(nome) {
  const funcoes = {
    quadrado: quadrado,
    retangulo: retangulo,
    trapezio: trapezio,
    triangulo: triangulo,
    circulo: circulo,
  };
  return funcoes[nome]();
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
  let lado = Number(prompt('Qual é o lado?'));
  let res = lado ** 2;
  return res;
}

function retangulo() {
  let base = Number(prompt('Qual a base?'));
  let altura = Number(prompt('Qual a altura?'));
  let res = base * altura;
  return res;
}

function trapezio() {
  let baseMaior = Number(prompt('Qual a base maior?'));
  let baseMenor = Number(prompt('Qual a base menor?'));
  let altura = Number(prompt('Qual a altura?'));
  let res = ((baseMaior + baseMenor) * altura) / 2;
  return res;
}

function triangulo() {
  let base = Number(prompt('Qual a base?'));
  let altura = Number(prompt('Qual a altura?'));
  let res = (base * altura) / 2;
  return res;
}

function circulo() {
  let raio = Number(prompt('Qual o raio?'));
  let res = (raio ** 2 * Math.PI).toFixed(2);
  return res;
}

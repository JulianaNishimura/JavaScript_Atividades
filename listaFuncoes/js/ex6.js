function calculaArea() {
  let figuraElemento = document.getElementById('figura');
  let saida = document.getElementById('resultado');
  let textoSaida;
  if (figuraElemento instanceof HTMLSelectElement && saida != null) {
    let figura = figuraElemento.options[figuraElemento.selectedIndex].value;
    if (figura === 'quadrado') {
      textoSaida = quadradoElemento();
    } else if (figura === 'retangulo') {
      textoSaida = retangulo();
    } else if (figura === 'trapezio') {
      textoSaida = trapezio();
    } else if (figura === 'triangulo') {
      textoSaida = triangulo();
    } else if (figura === 'circulo') {
      textoSaida = circulo();
    } else {
      textoSaida = 'Por favor, escolha uma figura válida';
    }

    saida.textContent = textoSaida;
  }
}

function quadradoElemento() {
  let pedeInfo = document.createElement('label');
  let infoEntrada = document.createElement('input');
  pedeInfo.innerText = 'Escreva o lado: ';
  infoEntrada.id = 'lado';
  document.body.appendChild(pedeInfo);
  document.body.appendChild(infoEntrada);
  
}

function quadrado() {
  let valorElemento = document.getElementById('lado');
  let res = parseFloat(valorElemento.value) ** 2;
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
  let res = ((raio ** 2) * Math.PI).toFixed(2);
  return res;
}

import CalculadoraDeIdade from "./CalculadoraDeIdade.js";

function calcularAidade(){
    let dataElemento = document.getElementById('data');
    let data = new Date(dataElemento.value);
    let classeData = new CalculadoraDeIdade(data);
    resultado(classeData.calcularIdade());
}

function resultado(idade){
    let saida = document.getElementById('saida');
    saida.textContent = `Você tem ${idade} anos!`
}

document.addEventListener('DOMContentLoaded',() => {
    let btn = document.getElementById('btnCalcularIdade');
    if(btn){
        btn.addEventListener('click', calcularAidade)
    }
})
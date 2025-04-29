import GeradorNumeros from './GeradorNumeros.js';

let geradorNumeros;

function gerar(){
    let inputQtd = document.getElementById('qtd');
    if(inputQtd instanceof HTMLInputElement){
        let qtd = parseInt(inputQtd.value);

        geradorNumeros = new GeradorNumeros();
        let resultado = geradorNumeros.gerarNumeros(qtd);
        exibir(resultado);
    }
}

function exibir(res){
    let listaOrdenada = res.sort(function(a, b){return a-b});
    let saida = document.getElementById('saida');
    if(saida){
        saida.textContent = `A Lista é: ${listaOrdenada} | com intervalo ${geradorNumeros.mostrarIntervalo()}`
    }
}

function configurar(){
    let btn = document.getElementById('BtnGerar');
    if(btn instanceof HTMLButtonElement){
        btn.addEventListener('click', gerar);
    }
}

document.addEventListener('DOMContentLoaded', configurar);
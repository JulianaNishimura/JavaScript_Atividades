import GeradorNumeros from './GeradorNumeros.js';

let geradorNumeros;

function gerar(){
    let inputmin = document.getElementById('min');
    let inputmax = document.getElementById('max');
    let inputQtd = document.getElementById('qtd');
    if(inputQtd instanceof HTMLInputElement && inputmin instanceof HTMLInputElement && inputmax instanceof HTMLInputElement){
        try {
            let qtd = parseInt(inputQtd.value);
            let min = parseInt(inputmin.value);
            let max = parseInt(inputmax.value);

            if(qtd > max-min+1){
                throw new Error("A quantidade é maior que o intervalo");
            }

            geradorNumeros = new GeradorNumeros(min,max);
            let resultado = geradorNumeros.gerarNumeros(qtd);
            exibir(resultado);
        } catch (error) {
            alert(error.message);
        }
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
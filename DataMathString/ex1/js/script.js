function configurar(){
    let numInput = document.getElementById('numeros');
    if(numInput instanceof HTMLInputElement){
        let numeros = (numInput.value).trim().split(",");
        let max = Math.max(...numeros);
        let min = Math.min(...numeros);
        mostrar(max,min);
    }
}

function mostrar(max,min){
    let saida = document.getElementById('resultado');
    if(saida){
        saida.textContent = `O maior número é ${max} e o menor é ${min}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('btnVerifica');
    if(btn){
        btn.addEventListener('click',configurar)
    }
})
function configurar(){
    let btn = document.getElementById('btnGerar');
    if(btn){
        btn.addEventListener('click', gerar)
    }
}

function gerar(){
    let fraseInput = document.getElementById('frase');
    let palavraAlvoInput = document.getElementById('palavraAlvo');
    let palavraSubInput = document.getElementById('palavraSub');

    if(fraseInput instanceof HTMLInputElement && palavraAlvoInput instanceof HTMLInputElement && palavraSubInput instanceof HTMLInputElement){
        let frase = (fraseInput.value).toLowerCase();
        let palavraAlvo = (palavraAlvoInput.value).toLowerCase();
        let palavraSub = (palavraSubInput.value).toLowerCase();

        let resultado = frase.replace(palavraAlvo, palavraSub);
        exibir(resultado);
        console.log(resultado);
    }
}

function exibir(res){
    let saida = document.getElementById('saida');
    if(saida){
        saida.textContent = res;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    configurar();
})
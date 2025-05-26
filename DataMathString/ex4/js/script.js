function configurar(){
    let btn = document.getElementById('btnTransformar');
    if(btn){
        btn.addEventListener('click', transformar)
    }
}

function transformar(){
    let fraseInput = document.getElementById('frase');

    if(fraseInput instanceof HTMLInputElement){
        let frase = fraseInput.value;
        let lista = frase.split(" ");
        
        let palavrasTransformadas = lista.map(palavra => {
            if(palavra.length > 0){
                let letraMaiu = palavra.charAt(0).toUpperCase();
                let restoPalavra = palavra.slice(1).toLowerCase();
                return letraMaiu + restoPalavra;
            }
            return palavra;
        });

        return exibir(palavrasTransformadas.join(" "));
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
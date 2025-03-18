const frutas = ['Abacate','Pera','Maca','Laranja']

function exibirConteudo(fruta){
    let saida = document.getElementById('resultado');

    if(saida){
        for(let i = 0; i < frutas.length;i++){
            if(fruta === frutas[i].valueOf){
                let paragrafo = document.createElement('p');
                paragrafo.textContent = fruta;
                let img = document.createElement('img');
                img.src = 'media/' + fruta + '.png';
                saida.appendChild(paragrafo);
                saida.appendChild(img);
            }
        };
    }
}

function configurarFruta(){
    let frutaBtn = document.getElementById('frutaBtn');
    let escolhaFrut = document.getElementById('frutas');

    if (escolhaFrut instanceof HTMLSelectElement && frutaBtn instanceof HTMLButtonElement) {
      let i = escolhaFrut.selectedIndex;
      let fruta = escolhaFrut.options[i].value;
      exibirConteudo(fruta);
    }
}

document.addEventListener('DOMContentLoaded', configurarFruta);
import ContadorPalavras from './ContadorPalavras.js';

function contarPalavras(texto){
    let contador = new ContadorPalavras(texto);
    return exibir(contador.contarPalavras());
}

function exibir(quantidade){
    let saida = document.getElementById('saida');
    if(saida){
        saida.textContent = `A quantidade de palavras é: ${quantidade}`;
    }
}

function configurar() {
    let btnVerPalavras = document.getElementById('btnVerPalavras');

    if (btnVerPalavras instanceof HTMLButtonElement) {
        btnVerPalavras.addEventListener('click', () => {
            let textoEle = document.getElementById('texto');
            if(textoEle instanceof HTMLTextAreaElement){
                let texto = textoEle.value;
                contarPalavras(texto);
            }
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', configurar);
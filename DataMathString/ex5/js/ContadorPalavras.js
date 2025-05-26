export default class ContadorPalavras{
    #texto

    constructor(texto){
        this.#texto = texto;
    }

    contarPalavras(){
        let contador = 0;
        let palavras = this.#texto.split(" ");
        for(let i = 0; i < palavras.length;i++){
            contador += 1;
        }
        return contador;
    }
}
export default class GeradorNumeros{
    #min
    #max

    constructor(min,max){
        this.#max = max
        this.#min = min
    }

    mostrarIntervalo(){
        return `entre ${this.#min} e ${this.#max}`;
    }

    gerarNumeros(qtd){
        try {
            let min = Math.ceil(this.#min);
            let max = Math.floor(this.#max);

            let numeros = [];

            for(let i = 0; i < qtd; i++){
                let numero = Math.floor(Math.random() * (max - min + 1) + min);
                while(numeros.includes(numero)){
                    numero = Math.floor(Math.random() * (max - min + 1) + min);
                }
                numeros.push(numero);
            }   
            return numeros;
        } catch (error) {
            alert(error.message);
        }
    }
}
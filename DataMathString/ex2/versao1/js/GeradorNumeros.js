export default class GeradorNumeros{
    #min
    #max

    constructor(){
        do {
            this.#max = Math.floor(Math.random() * 100);
            this.#min = Math.floor(Math.random() * 100);
        } while (this.#max === this.#min);
    }

    mostrarIntervalo(){
        return `entre ${this.#min} e ${this.#max}`;
    }

    gerarNumeros(qtd){
        try {
            let min = Math.ceil(this.#min);
            let max = Math.floor(this.#max);
            let intervalo = max - min + 1;

            while (qtd > intervalo) {
                max += 10;
                this.#max += 10;  
                intervalo = max - min + 1;
            }

            let numeros = [];

            for(let i = 0; i < qtd; i++){
                let numero = Math.floor(Math.random() * (max - min + 1) + min);
                while(numeros.includes(numero)){
                    numero = Math.floor(Math.random() * (max - min + 1) + min);
                }
                numeros.push(numero);
            }   
            return numeros;
            //ou usar set!
            //let numeros = new Set();
            //while (numeros.size < qtd) {
            //    let numero = Math.floor(Math.random() * intervalo) + min;
            //    numeros.add(numero);
            //}
            //return Array.from(numeros);
        } catch (error) {
            alert(error.message);
        }
    }
}
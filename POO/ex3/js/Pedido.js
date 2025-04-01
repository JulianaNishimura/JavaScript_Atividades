export default class Pedido{
    #itens = [];

    constructor(itens = []){
        this.#itens = itens;
    }

    get itens(){
        return this.#itens;
    }

    set itens(itens){
        this.#itens = itens;
    }

    toString(){
        return `itens: ${this.#itens}`
    }

}
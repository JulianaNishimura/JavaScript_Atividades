export default class Pedido{
    #nome;
    #quantidade;
    #preco;

    constructor(nome,quantidade,preco){
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = preco;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get quantidade(){
        return this.#nome;
    }

    set quantidade(quantidade){
        this.#quantidade = quantidade;
    }

    get preco(){
        return this.#preco;
    }

    set preco(preco){
        this.#preco = preco;
    }

    total(){
        return (this.#preco*this.#quantidade);
    }

    toString(){
        return `Item: ${this.#nome} | quantidade: ${this.#quantidade} | preço: ${this.#preco} | total: ${this.total().toFixed(2)}R$`
    }

}
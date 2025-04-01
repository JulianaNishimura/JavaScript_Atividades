export default class Produto {
    #nome;
    #quantidade;
    #preco_unitario;

    constructor(nome, quantidade, preco_unitario){
        this.#nome = nome;
        if(this.#validarQuantidadeEpreco(quantidade) && this.#validarQuantidadeEpreco(preco_unitario)){
            this.#preco_unitario = preco_unitario;
            this.#quantidade = quantidade;
        }
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get quantidade(){
        return this.#quantidade;
    }

    set quantidade(quantidade){
        this.#quantidade = quantidade;
    }

    get preco_unitario(){
        return this.#preco_unitario;
    }

    set preco_unitario(preco_uni){
        this.#preco_unitario = preco_uni;
    }

    #validarQuantidadeEpreco(quantOupreco){
        if(quantOupreco < 0){
            alert(`Preço ou quantidade inválida! Tem que ser maior ou igual a zero.`);
            return false;
        } else {
            return true;
        }
    }

    valorTotalDoProduto(){
        return (this.#quantidade*this.#preco_unitario);
    }

    adicionarQuantidade(quantMais){
        this.#quantidade = this.#quantidade + quantMais;
        return this.#quantidade;
    }

    removerQuantidade(quantMenos){
        this.#quantidade = this.#quantidade - quantMenos;
        return this.#quantidade;
    }

    toString(){
        return `Nome do produto: ${this.#nome} |  Preço do produto: ${this.#preco_unitario} |  Quantidade: ${this.#quantidade} | `
    }
}
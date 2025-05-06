export default class Produto {
  #nome;
  #preco;
  #quantidade;

  constructor(nome, preco, quantidade) {
    this.#nome = nome;
    this.#preco = preco;
    this.#quantidade = quantidade;
  }

  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get preco() {
    return this.#preco;
  }

  set preco(preco) {
    this.#preco = preco;
  }

  get quantidade() {
    return this.#quantidade;
  }

  set quantidade(quantidade) {
    this.#quantidade = quantidade;
  }

  toString(){
    return `Nome: ${this.nome} | Preço: ${this.preco} | Quantidade: ${this.#quantidade}`
  }
}

import Endereco from './Endereco.js';

export default class Pessoa {
  #nome;
  #idade;
  #cpf;
  #endereco;

  constructor(
    nome = 'Nome não informado',
    idade = 0,
    cpf = 'CPF não informado',
    endereco = new Endereco()
  ) {
    this.#nome = nome;
    this.#idade = idade;
    this.#cpf = cpf;
    this.#endereco = endereco;
  }

  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get idade() {
    return this.#idade;
  }

  set idade(idade) {
    this.#idade = idade;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(cpf) {
    this.#cpf = cpf;
  }

  get endereco() {
    return this.#endereco;
  }

  set endereco(endereco) {
    this.#endereco = endereco;
  }

  toString(){
    return `Nome: ${this.nome}, Idade: ${this.idade} | CPF: ${this.cpf} | ${this.endereco.toString()}`
  }
}

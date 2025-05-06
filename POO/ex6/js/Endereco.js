export default class Endereco {
  #cidade;
  #bairro;
  #nomeDaRua;
  #numeroDaCasa;
  #cep;
  #estado;
  #pais;

  constructor(
    cidade = 'Cidade não informada',
    bairro = 'Bairro não informado',
    nomeRua = 'Rua não informada',
    numeroCasa = 'Número não informado',
    cep = 'CEP não informado',
    estado = 'Estado não informado',
    pais = 'País não informado'
  ) {
    this.cidade = cidade;
    this.bairro = bairro;
    this.nomeRua = nomeRua;
    this.numeroCasa = numeroCasa;
    this.cep = cep;
    this.estado = estado;
    this.pais = pais;
  }

  get cidade() {
    return this.#cidade;
  }

  set cidade(cidade) {
    this.#cidade = cidade;
  }

  get bairro() {
    return this.#bairro;
  }

  set bairro(bairro) {
    this.#bairro = bairro;
  }

  get nomeDaRua() {
    return this.#nomeDaRua;
  }

  set nomeDaRua(nomeDaRua) {
    this.#nomeDaRua = nomeDaRua;
  }

  get numeroDaCasa() {
    return this.#numeroDaCasa;
  }

  set numeroDaCasa(numeroDaCasa) {
    this.#numeroDaCasa = numeroDaCasa;
  }

  get cep() {
    return this.#cep;
  }

  set cep(cep) {
    this.#cep = cep;
  }

  get estado() {
    return this.#estado;
  }

  set estado(estado) {
    this.#estado = estado;
  }

  get pais() {
    return this.#pais;
  }

  set pais(pais) {
    this.#pais = pais;
  }

  toString() {
    return `CEP: ${this.cep} | Endereço: ${this.nomeRua}, ${
      this.numeroCasa
    } | ${this.bairro} | ${this.#cidade} - ${this.estado} - ${this.pais}`;
  }
}

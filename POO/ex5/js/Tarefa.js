export default class Tarefa {
  #titulo;
  #data;
  #descricao;
  #status;

  constructor(titulo, data, descricao, status) {
    this.#titulo = titulo;
    this.#data = data;
    this.#descricao = descricao;
    this.#status = status;
  }

  get titulo() {
    return this.#titulo;
  }

  get data() {
    return this.#data;
  }

  get descricao() {
    return this.#descricao;
  }

  get status() {
    return this.#status;
  }

  set titulo(titulo) {
    this.#titulo = titulo;
  }

  set data(data) {
    this.#data = data;
  }

  set descricao(descricao) {
    this.#descricao = descricao;
  }

  set status(status) {
    this.#status = status;
  }

  #qualStatus() {
    if (this.#status === true) {
      return 'Concluída ✅';
    } else {
      return 'Pendente ❌';
    }
  }

  toString() {
    return `<b>Tarefa:</b> ${this.#titulo}<br><b>Data:</b> ${
      this.#data
    }<br><b>Descrição:</b> ${
      this.#descricao
    }<br><b>Status:</b> ${this.#qualStatus()}<br>`;
  }
}

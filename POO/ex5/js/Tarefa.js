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

    #qualStatus(){
        if (this.#status === true){
            return "concluída";
        } else {
            return "pendente";
        }
    }

    toString() {
        return `Tarefa: ${this.#titulo}\nData: ${this.#data}\nDescrição: ${this.#descricao}\nStatus: ${this.#qualStatus()}`;
    }
}
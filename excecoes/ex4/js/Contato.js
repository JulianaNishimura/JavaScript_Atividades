export default class Contato{
    #nome;
    #telefone;
    #email;

    constructor(nome,telefone,email){
        this.#nome = nome;
        this.#telefone = telefone;
        this.#email = email;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(telefone){
        this.#telefone = telefone;
    }

    get email(){
        return this.#email;
    }

    set email(email){
        this.#email = email;
    }
}
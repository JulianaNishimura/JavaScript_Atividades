class Aluno{
    #nome;
    #notas = [];

    constructor(nome,notas = []){
        this.#nome = nome;
        if(this.#validarNotas(notas)){
            this.#notas = notas;
        }
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get notas(){
        return this.#notas;
    }

    set notas(notas){
        if(this.#validarNotas(notas)){
            this.#notas = notas;
        }
    }

    #validarNotas(notas){
        let notasValidas = notas.every((value) => {return value <= 10 && value >= 0});
        if(!notasValidas){
            alert(`Nota inválida! Tem que ser um número entre 0 e 10.`);
            return false;
        } else {
            return true;
        }
    }

    calcularMedia(notas){
        if(this.#notas.length === 0){
            alert("Não é possível dividir por 0.")
        } else {
            let somaDeNotas = notas.reduce((acumulador,atual) => acumulador + atual,0);
            return (somaDeNotas/this.#notas.length).toFixed(2);
        }
    }

    toString(){
        return `Nome: ${this.#nome}, Notas: ${this.#notas.join(', s')}`;
    }
}
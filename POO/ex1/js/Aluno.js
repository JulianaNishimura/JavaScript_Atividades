export default class Aluno{
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

    // Método para adicionar uma nota individualmente
    adicionarNota(novaNota) {
    //prettier-ignore 
        try {
            if(novaNota < 0){
                throw new Error('Digite um número maior ou igual a 0!');
            }
            if(novaNota > 10){
                throw new Error('Digite um número menor ou igual a 10!');
            }
            this.#notas.push(novaNota);
        } catch (error) {
            console.log(error.message);
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

    calcularMedia(){
        try {
            if (!this.#validarNotas(this.#notas)) {
                throw new Error('As notas não são válidas.') // Não pode calcular a média se as notas não forem válidas
            }

            if(this.#notas.length === 0){
                throw new Error('Não é possível dividir por 0.')
            }

            let somaDeNotas = this.#notas.reduce((acumulador,atual) => acumulador + atual,0);
            return (somaDeNotas/this.#notas.length).toFixed(2);
        } catch (error) {
            return error.message;
        }
    }

    toString(){
        return `Nome: ${this.#nome}, Notas: ${this.#notas.join(', s')}`;
    }
}
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
        if ((novaNota >= 0) && (novaNota <= 10)) {
            this.#notas.push(novaNota);
        } else {
            alert('Nota inválida. Deve ser um número entre 0 e 10.');
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
        if (!this.#validarNotas(this.#notas)) {
            return 0; // Não pode calcular a média se as notas não forem válidas
        }

        if(this.#notas.length === 0){
            alert("Não é possível dividir por 0.")
            return 0;
        } else {
            let somaDeNotas = notas.reduce((acumulador,atual) => acumulador + atual,0);
            return (somaDeNotas/this.#notas.length).toFixed(2);
        }
    }

    toString(){
        return `Nome: ${this.#nome}, Notas: ${this.#notas.join(', s')}`;
    }
}
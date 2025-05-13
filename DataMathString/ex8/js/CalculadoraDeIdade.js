export default class CalculadoraDeIdade{
    #data

    constructor(data){
        this.#data = data;
    }

    calcularIdade(){
        let dataAtual = new Date();
        let idade = dataAtual.getFullYear() - this.#data.getFullYear();
        let idadeMes = dataAtual.getMonth() - this.#data.getMonth();
        if(idadeMes < 0 || (idadeMes === 0 && dataAtual.getDate() < this.#data.getDate())){
            idade--;
        }

        return idade;
    }
}
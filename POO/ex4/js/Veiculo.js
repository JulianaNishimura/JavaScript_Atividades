export default class Veiculo{
    #placa;
    #modelo;
    #tempoPermanencia;

    constructor(placa,modelo,tempoPermanencia){
        this.#placa = placa;
        this.#modelo = modelo;
        this.#tempoPermanencia = tempoPermanencia;
    }

    get placa(){
        return this.#placa;
    }

    set placa(placa){
        this.#placa = placa;
    }

    get modelo(){
        return this.#modelo;
    }

    set modelo(modelo){
        this.#modelo = modelo;
    }

    get tempoPermanencia(){
        return this.#tempoPermanencia;
    }

    set tempoPermanencia(tp){
        this.#tempoPermanencia = tp;
    }

    #Valor(){
        let arrayTempo = this.#tempoPermanencia.split(" ");
        let tempo = parseFloat(arrayTempo[0]) + parseFloat(arrayTempo[3]/60);
        return (tempo * 5).toFixed(2);
    }

    toString(){
        return `O carro de placa: ${this.#placa} | modelo: ${this.#modelo} | tempo de Permanência: ${this.#tempoPermanencia} | valor: ${this.#Valor()}R$`
    }
}
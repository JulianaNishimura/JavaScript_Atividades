import Veiculo from './Veiculo.js';

export class GerenciadorEstacionamento{
    #carros = [];

    constructor(){
        console.log("instanciou");
        this.#configurar();
    }

    cadastrar(){
        console.log("Entrou no cadastrar");
        let placaEle = document.getElementById('placa');
        let modeloEle = document.getElementById('modelo');
        let horaEle = document.getElementById('hora');
        let minuEle = document.getElementById('minuto');

        if(placaEle instanceof HTMLInputElement && modeloEle instanceof HTMLInputElement && horaEle instanceof HTMLInputElement && minuEle instanceof HTMLInputElement){
            let placa = placaEle.value.trim();
            let modelo = modeloEle.value.trim();
            let tempo = `${horaEle.value} horas e ${minuEle.value} minutos`;

            let carroExiste = this.#carros.find(carro => carro.placa === placa);
            if(carroExiste){
                alert("Carro já cadastrado!")
            } else {
                this.#carros.push(new Veiculo(placa,modelo,tempo));
                console.log("Criou o veículo!!")
                this.exibir();
            }
        }
    }

    filtrar(){
        let placaFiltro = document.getElementById('filtrarPlaca');
        if(placaFiltro instanceof HTMLInputElement){
            let placaProcurada = placaFiltro.value.trim();

            let veiculoProcurado = this.#carros.find(carro => carro.placa === placaProcurada);
            if(veiculoProcurado){
                this.exibirFiltrado(veiculoProcurado);
                return veiculoProcurado;
            } else {
                alert("Nenhum carro cadastrado.")
            }
        }
    }

    remover(){
        let veiculoSelecionado = this.filtrar();

        if(veiculoSelecionado){
            let indice = this.#carros.indexOf(veiculoSelecionado);
            if (indice !== -1 && !isNaN(indice)){
                this.#carros.splice(indice,1);
                this.exibir();
            }  else {
                alert("Carro não encontrado");
            }
        } else {
            alert("Carro não encontrado");
        }
    }

    exibir(){
        let carrosExibidos = document.getElementById('carrosExibidos');
        if(carrosExibidos instanceof HTMLDivElement){
            carrosExibidos.innerHTML = '';
            this.#carros.forEach(carro => {
                const div = document.createElement('div');
                div.className = 'carro-item';
                div.textContent = `${carro.toString()}`;
                carrosExibidos.appendChild(div);
            })
        }
        this.limparConteudo();
    }

    exibirFiltrado(veiculoProcurado){
        let carrosExibidos = document.getElementById('carrosExibidos');
        if(carrosExibidos instanceof HTMLDivElement){
            carrosExibidos.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'carro-item';
            div.textContent = `${veiculoProcurado.toString()}`;
            carrosExibidos.appendChild(div);
        }
        this.limparConteudo();
    }

    limparConteudo(){
        let placaEle = document.getElementById('placa');
        let modeloEle = document.getElementById('modelo');
        let horaEle = document.getElementById('hora');
        let minuEle = document.getElementById('minuto');
        let placaFiltro = document.getElementById('filtrarPlaca');

        if(placaEle instanceof HTMLInputElement && modeloEle instanceof HTMLInputElement && horaEle instanceof HTMLInputElement && minuEle instanceof HTMLInputElement && placaFiltro instanceof HTMLInputElement){
            placaEle.value = "";
            modeloEle.value = "";
            horaEle.value = "";
            minuEle.value = "";
            placaFiltro.value = "";
        }
    }

    #configurar(){
        let cadastrarBtn = document.getElementById("cadastrar");
        let filtrarBtn = document.getElementById("filtrar");
        let removerBtn = document.getElementById("remover");
        let exibirBtn = document.getElementById("exibir");

        if(cadastrarBtn instanceof HTMLButtonElement && filtrarBtn instanceof HTMLButtonElement && removerBtn instanceof HTMLButtonElement && exibirBtn instanceof HTMLButtonElement){
            cadastrarBtn.addEventListener('click', () => {
                this.cadastrar();
            });

            filtrarBtn.addEventListener('click', () => {
                this.filtrar();
            });

            removerBtn.addEventListener('click', () => {
                this.remover();
            });

            exibirBtn.addEventListener('click', () => {
                this.exibir();
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GerenciadorEstacionamento();
});
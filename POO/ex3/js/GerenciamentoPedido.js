import Pedido from './Pedido.js'

export class GerenciamentoPedido{
    #pedidos = [];

    constructor(){
        this.#configurar();
    }

    #adicionar(){
        let nomeEle = document.getElementById('nome');
        let quantidadeEle = document.getElementById('quantidade');
        let precoEle = document.getElementById('preco');

        if(nomeEle instanceof HTMLInputElement && quantidadeEle instanceof HTMLInputElement && precoEle instanceof HTMLInputElement){
            let nome = nomeEle.value;
            let quantidade = parseInt(quantidadeEle.value);
            let preco = parseFloat(precoEle.value);

            if(preco <= 0 || quantidade <= 0){
                alert("O preço e a quantidade tem que ser maiores que 0!");
            } else {
                this.#pedidos.push(new Pedido(nome,quantidade,preco));
                this.#exibir();
            }
        }
    }

    #calcularTotal(){
        let totalPedido = this.#pedidos.reduce((total, pedido) => {
            return total + pedido.total();
        }, 0);

        return totalPedido = totalPedido + (totalPedido*0.10)
    }

    #exibir(){
        let pedidoDiv = document.getElementById('pedido');
        let totalDiv = document.getElementById('total');

        if(pedido instanceof HTMLDivElement && totalDiv instanceof HTMLDivElement){
            pedidoDiv.innerHTML = "";
            this.#pedidos.forEach(pedido => {
                const div = document.createElement('div');
                div.className = 'pedido-item';
                div.textContent = `${pedido.toString()}`;
                pedidoDiv.appendChild(div);
            });

            const valorTotal = this.#calcularTotal().toFixed(2);
            totalDiv.textContent = `Valor Total: R$ ${valorTotal}`;
            this.#limparConteudo();
        }
    }

    #limparConteudo(){
        let nomeEle = document.getElementById('nome');
        let quantidadeEle = document.getElementById('quantidade');
        let precoEle = document.getElementById('preco');

        nomeEle.value = "";
        quantidadeEle.value = "";
        precoEle.value = "";
    }

    #configurar(){
        let adicionarBtn = document.getElementById('adicionarPedido');
        if(adicionarBtn instanceof HTMLButtonElement){
            adicionarBtn.addEventListener('click', () => {
                this.#adicionar();
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GerenciamentoPedido();
});
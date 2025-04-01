import Produto from './Produto.js';

export class GerenciadordeProdutos {
    #produtos = [];

    constructor(){
        console.log("aa")
        this.#configurar();
    }

    cadastrar(){
        console.log("Entrou no cadastrar")
        let nomeInput = document.getElementById('nome');
        let quantidadeInput = document.getElementById('quantidade');
        let precoInput = document.getElementById('preco');

        if(nomeInput instanceof HTMLInputElement && quantidadeInput instanceof HTMLInputElement && precoInput instanceof HTMLInputElement){
            let nome = nomeInput.value.trim();
            let quantidade = parseInt(quantidadeInput.value);
            let preco = parseFloat(precoInput.value);

            let produtoExistente = this.#produtos.find(prod => prod.nome === nome);
            if (produtoExistente) {
                alert("Já existe um produto cadastrado com este nome!");
                return;
            }

            if (quantidade < 0 || preco < 0) {
                alert("Por favor insira uma quantidade ou preço válido.");
            } else {
                let produto = new Produto(nome, quantidade, preco);
                this.#produtos.push(produto);
                console.log("Criou o produto");
                this.exibir();
            }
        }
    }

    adicionaQuantidade() {
        let nomeInputAtualiza = document.getElementById('nomeAtualizar');
        let nome = nomeInputAtualiza.value.trim();
    
        if (this.#produtos.length === 0) {
            alert("Nenhum produto cadastrado.");
            return;
        }
    
        let produtoProcurando = this.#produtos.find(p => p.nome === nome);
        if (!produtoProcurando) {
            alert("Produto não encontrado.");
            return;
        }
    
        let quant = parseInt(prompt("Digite a quantidade a adicionar:"));
        if (quant >= 0) {
            produtoProcurando.adicionarQuantidade(quant);
            this.exibir();
        } else {
            alert("Digite uma quantidade válida");
        }
    }
    
    removeQuantidade() {
        let nomeInputAtualiza = document.getElementById('nomeAtualizar');
        let nome = nomeInputAtualiza.value.trim();
    
        if (this.#produtos.length === 0) {
            alert("Nenhum produto cadastrado.");
            return;
        }
    
        let produtoProcurando = this.#produtos.find(p => p.nome === nome);
        //filter, find, etc.
        if (!produtoProcurando) {
            alert("Produto não encontrado.");
            return;
        }
    
        let quant = parseInt(prompt("Digite a quantidade a remover:"));
        if (quant >= 0) {
            produtoProcurando.removerQuantidade(quant);
            this.exibir();
        } else {
            alert("Digite uma quantidade válida");
        }
    }

    calcularEstoque() {
        return this.#produtos.reduce((total, produto) => {
            return total + produto.valorTotalDoProduto();
        }, 0);
    }

    exibir(){
        console.log("exibiu");
        const produtosDiv = document.getElementById('produtos');
        const totalDiv = document.getElementById('totalEstoque');
        
        produtosDiv.innerHTML = '';
        
        this.#produtos.forEach(produto => {
            const div = document.createElement('div');
            div.className = 'produto-item';
            div.innerHTML = `
                Nome: ${produto.nome} | 
                Quantidade: ${produto.quantidade} | 
                Preço Unitário: R$ ${produto.preco_unitario} | 
                Total: R$ ${produto.valorTotalDoProduto()}
            `;
            produtosDiv.appendChild(div);
        });
        
        const valorTotalEstoque = this.calcularEstoque();
        totalDiv.innerHTML = `<strong>Valor Total do Estoque: R$ ${valorTotalEstoque}</strong>`;
        this.limparConteudo();
    }

    limparConteudo() {
        let nomeInput = document.getElementById('nome');
        let quantidadeInput = document.getElementById('quantidade');
        let precoInput = document.getElementById('preco');

        if(nomeInput instanceof HTMLInputElement && quantidadeInput instanceof HTMLInputElement && precoInput instanceof HTMLInputElement){
            nomeInput.value = "";
            quantidadeInput.value = "";
            precoInput.value = "";
        }
    }

    #configurar() {
        let cadastrarBtn = document.getElementById('cadastrar');
        let adicionarQuantidadeBtn = document.getElementById('AdicionarQuantidade');
        let removerQuantidadeBtn = document.getElementById('RemoverQuantidade');
    
        //prettier-ignore
        if((cadastrarBtn instanceof HTMLButtonElement) && (adicionarQuantidadeBtn instanceof HTMLButtonElement) &&
          (removerQuantidadeBtn instanceof HTMLButtonElement)) 
        {
            cadastrarBtn.addEventListener('click', () => {
            this.cadastrar();
          });
    
          adicionarQuantidadeBtn.addEventListener('click', () => {
            this.adicionaQuantidade();
          });
    
          removerQuantidadeBtn.addEventListener('click', () => {
            this.removeQuantidade();
          });
        }
        console.log("configurou");
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new GerenciadordeProdutos();
});
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

    removeProduto(){
        let nomeRemoverInput = document.getElementById('nomeRemover');

        if(nomeRemoverInput instanceof HTMLInputElement){
            let nome = nomeRemoverInput.value.trim();

            let indice = this.#produtos.findIndex((produto) => produto.nome === nome);
            //filter, find, etc.
            if (indice !== -1 && !isNaN(indice)) {
                this.#produtos.splice(indice,1);
                this.exibir();
            } else {
                alert("Produto não encontrado")
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
        if (quant >= 0 && quant <= produtoProcurando.quantidade) {
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
            div.textContent = `${produto.toString()}Total: R$ ${produto.valorTotalDoProduto()}`;
            produtosDiv.appendChild(div);
        });
        
        const valorTotalEstoque = this.calcularEstoque();
        totalDiv.textContent = `Valor Total do Estoque: R$ ${valorTotalEstoque}`;
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
        let removerProdutoBtn = document.getElementById('removerProduto');
    
        //prettier-ignore
        if((cadastrarBtn instanceof HTMLButtonElement) && (adicionarQuantidadeBtn instanceof HTMLButtonElement) &&
          (removerQuantidadeBtn instanceof HTMLButtonElement) && removerProdutoBtn instanceof HTMLButtonElement) 
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

          removerProdutoBtn.addEventListener('click', () => {
            this.removeProduto();
          });
        }
        console.log("configurou");
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new GerenciadordeProdutos();
});
import Produto from './Produto.js';

export class Carrinho {
  #carrinho = [];
  #valorTotal;

  constructor() {
    this.#configurar();
  }

  #configurar() {
    let adicionarBtn = document.getElementById('adicionar');
    let descontoBtn = document.getElementById('aplicarDesconto');
    let finalizarBtn = document.getElementById('finalizar');
    if (
      adicionarBtn instanceof HTMLButtonElement &&
      descontoBtn instanceof HTMLButtonElement &&
      finalizarBtn instanceof HTMLButtonElement
    ) {
      adicionarBtn.addEventListener('click', () => {
        this.#adicionar();
      });

      descontoBtn.addEventListener('click', () => {
        this.#aplicarDesconto();
      });

      finalizarBtn.addEventListener('click', () => {
        this.#finalizarcompra();
      });
    }
  }

  #adicionar() {
    let nomeEle = document.getElementById('nome');
    let precoEle = document.getElementById('preco');
    let quantidadeEle = document.getElementById('quantidade');

    if (
      nomeEle instanceof HTMLInputElement &&
      quantidadeEle instanceof HTMLInputElement &&
      precoEle instanceof HTMLInputElement
    ) {
      let nome = nomeEle.value;
      let preco = parseFloat(precoEle.value);
      let quantidade = parseInt(quantidadeEle.value);

      let produtoExistente = this.#carrinho.find(
        (produto) => produto.nome === nome
      );

      if (preco <= 0 || quantidade <= 0) {
        alert('O preço e a quantidade tem que ser maiores que 0!');
      } else if (produtoExistente) {
        alert('Produto já existente, atualizando...');
        produtoExistente.preco = preco;
        produtoExistente.quantidade = quantidade;
        this.#exibir(0);
      } else {
        this.#carrinho.push(new Produto(nome, quantidade, preco));
        this.#exibir(0);
      }
    }
  }

  #remover(nome) {
    let indice = this.#carrinho.findIndex((produto) => produto.nome === nome);
    //filter, find, etc.
    if (indice !== -1 && !isNaN(indice)) {
      this.#carrinho.splice(indice, 1);
      this.#exibir(0);
    } else {
      alert('Produto não encontrado');
    }
  }

  #aplicarDesconto() {
    let descontoEle = document.getElementById('desconto');
    if (descontoEle instanceof HTMLInputElement) {
      let valorTexto = descontoEle.value.replace('%', '').trim();
      let desconto = parseInt(valorTexto);

      if (!Number.isNaN(desconto)) {
        this.#exibir(desconto);
      } else {
        this.#exibir(0);
      }
    }
  }

  #finalizarcompra() {
    if (confirm('Deseja finalizar a compra?')) {
      this.#limparConteudo();
      this.#carrinho = [];
      this.#exibir(0);
      alert('Compra finalizada!');
    }
  }

  #calcularTotal(desc) {
    let totalProduto = this.#carrinho.reduce((total, produto) => {
      return total + produto.quantidade * produto.preco;
    }, 0);

    return totalProduto - (totalProduto * desc) / 100;
  }

  #exibir(desc) {
    let carrinhoDiv = document.getElementById('carrinho');
    let totalDiv = document.getElementById('total');

    if (
      carrinhoDiv instanceof HTMLDivElement &&
      totalDiv instanceof HTMLDivElement
    ) {
      carrinhoDiv.innerHTML = '';
      this.#carrinho.forEach((produto) => {
        const div = document.createElement('div');
        div.className = 'produto-item';
        div.textContent = `${produto.toString()}`;

        const botaoExclui = document.createElement('button');
        botaoExclui.textContent = 'Remover';
        botaoExclui.addEventListener('click', () => {
          this.#remover(produto.nome);
        });

        carrinhoDiv.appendChild(div);
        carrinhoDiv.appendChild(botaoExclui);
      });

      const valorTotal = this.#calcularTotal(desc).toFixed(2);
      totalDiv.textContent = `Valor Total: R$ ${valorTotal}`;
      this.#limparConteudo();
    }
  }

  #limparConteudo() {
    let nomeEle = document.getElementById('nome');
    let quantidadeEle = document.getElementById('quantidade');
    let precoEle = document.getElementById('preco');
    let descontoEle = document.getElementById('desconto');

    nomeEle.value = '';
    quantidadeEle.value = '';
    precoEle.value = '';
    descontoEle.value = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Carrinho();
});

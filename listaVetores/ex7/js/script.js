const produtos = [];

function exibir(lista) {
  let saida = document.getElementById('resultado');
  if (saida) {
    saida.innerHTML = '';

    lista.forEach((produto) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <strong>${produto.nome}</strong><br>
        Preço: R$ ${produto.preco.toFixed(2)}<br>
        Categoria: ${produto.categoria}<br>
      `;
      saida.appendChild(div);
    });
  }
}

function filtrarProdutos() {
  let textoNome = document.getElementById('filtroNome').value.toLowerCase();
  let textoCategoria = document
    .getElementById('filtroCategoria')
    .value.toLowerCase();

  const produtosFiltrados = produtos.filter((produto) => {
    const nomeCombina = textoNome === '' || produto.nome.includes(textoNome);
    const categoriaCombina =
      textoCategoria === '' || produto.categoria.includes(textoCategoria);
    return nomeCombina && categoriaCombina;
  });

  exibir(produtosFiltrados);
}

function cadastrarProduto() {
  let nome = document.getElementById('nome').value.toLowerCase();
  let preco = parseFloat(document.getElementById('preco').value);
  let categoria = document.getElementById('categoria').value.toLowerCase();

  if (nome === '' || isNaN(preco) || categoria === '') {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  const produto = { nome, preco, categoria };
  produtos.push(produto);

  document.getElementById('nome').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('categoria').value = '';
}

function configurarEventos() {
  document
    .getElementById('cadastrar')
    .addEventListener('click', cadastrarProduto);
  document.getElementById('filtrar').addEventListener('click', filtrarProdutos);
  document
    .getElementById('todosProdutos')
    .addEventListener('click', () => exibir(produtos));
}

document.addEventListener('DOMContentLoaded', configurarEventos);

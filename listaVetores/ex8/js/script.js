const filmes = [];

function exibir(lista) {
  let saida = document.getElementById('resultado');
  if (saida) {
    saida.innerHTML = '';

    lista.forEach((filme) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <strong>${filme.titulo}</strong><br>
        Classificação: ${filme.classificacao}<br>
        Ano: ${filme.ano}<br>
      `;
      saida.appendChild(div);
    });
  }
}

function filtrarFilmes() {
  let textoClassi = parseInt(document.getElementById('filtroClassificacao').value);
  let textoAno = parseInt(document.getElementById('filtroAno').value);

  const filmesFiltrados = filmes.filter((filme) => {
    const classiCombina = isNaN(textoClassi) || filme.classificacao === textoClassi;
    const anoCombina = isNaN(textoAno) || filme.ano === textoAno;
    return classiCombina && anoCombina;
  });

  exibir(filmesFiltrados);
}

function cadastrarFilmes() {
  let titulo = document.getElementById('titulo').value.toLowerCase();
  let ano = parseInt(document.getElementById('ano').value);
  let classificacao = parseInt(document.getElementById('classificacao').value);

  if (titulo === '' || isNaN(ano) || isNaN(classificacao)) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  const filme = { titulo, ano, classificacao };
  filmes.push(filme);

  document.getElementById('titulo').value = '';
  document.getElementById('ano').value = '';
  document.getElementById('classificacao').value = '';
}

function configurarEventos() {
  document.getElementById('cadastrar').addEventListener('click', cadastrarFilmes);
  document.getElementById('filtrar').addEventListener('click', filtrarFilmes);
  document.getElementById('todosFilmes').addEventListener('click', () => exibir(filmes));
}

document.addEventListener('DOMContentLoaded', configurarEventos);

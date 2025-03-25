const mediasAlunos = [];

function exibir(lista, titulo) {
  let saida = document.getElementById('resultado');
  if (saida) {
    saida.innerHTML = `<h3>${titulo}</h3>`;

    lista.forEach((aluno) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <strong>${aluno.nome}</strong><br>
        Média: ${aluno.media.toFixed(2)}<br>
      `;
      saida.appendChild(div);
    });
  }
}

function filtrarAprovados() {
  const aprovadosFiltrados = mediasAlunos.filter((aluno) => aluno.media >= 6);

  exibir(aprovadosFiltrados, 'Alunos Aprovados');
}

function filtrarReprovados() {
  const ReprovadosFiltrados = mediasAlunos.filter((aluno) => aluno.media < 6);

  exibir(ReprovadosFiltrados, 'Alunos Reprovados');
}

function cadastrarAlunos() {
  let nome = document.getElementById('nome').value;
  let nota1 = parseFloat(document.getElementById('nota1').value);
  let nota2 = parseFloat(document.getElementById('nota2').value);
  let nota3 = parseFloat(document.getElementById('nota3').value);

  let media = (nota1 + nota2 + nota3) / 3;

  let aluno = { nome, media };
  mediasAlunos.push(aluno);

  document.getElementById('nome').value = '';
  document.getElementById('nota1').value = '';
  document.getElementById('nota2').value = '';
  document.getElementById('nota3').value = '';
}

function configurarEventos() {
  document
    .getElementById('cadastrar')
    .addEventListener('click', cadastrarAlunos);
  document
    .getElementById('filtrarAprovados')
    .addEventListener('click', filtrarAprovados);
  document
    .getElementById('filtrarReprovados')
    .addEventListener('click', filtrarReprovados);
  document
    .getElementById('todosAlunos')
    .addEventListener('click', () => exibir(mediasAlunos));
}

document.addEventListener('DOMContentLoaded', configurarEventos);

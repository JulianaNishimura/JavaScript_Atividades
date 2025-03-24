

function configurarEventos() {
    document.getElementById('cadastrar').addEventListener('click', cadastrarAlunos);
    document.getElementById('filtrarAprovados').addEventListener('click', filtrarAprovados);
    document.getElementById('filtrarReprovados').addEventListener('click', filtrarReprovados);
    document.getElementById('todosAlunos').addEventListener('click', () => exibir(alunos));
  }
  
  document.addEventListener('DOMContentLoaded', configurarEventos);
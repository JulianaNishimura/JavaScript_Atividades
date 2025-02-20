function mostrarEscolha() {
  const entradaDisciplinaSelecionada = document.querySelector(
    'input[name="disciplinas"]:checked'
  );
  if (entradaDisciplinaSelecionada instanceof HTMLInputElement) {
    let disciplinaSelecionada = entradaDisciplinaSelecionada.value;

    let saida = document.getElementById('resultado');
    if (saida != null) {
      saida.textContent =
        'Olá!, Boas vindas! A disciplina selecionada foi: ' +
        disciplinaSelecionada;
    }
  }
}

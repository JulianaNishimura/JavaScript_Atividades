function exibirNome() {
  let elemento = document.getElementById('nomeInput');
  let nome;
  if (elemento instanceof HTMLInputElement) {
    nome = elemento.value;
    document.body.insertAdjacentHTML('beforeend', nome);
  }
}

function exibirDisciplinaSelecionada() {
  let selecaoDisciplinas = document.getElementById('selecionaDisciplina');

  if (selecaoDisciplinas instanceof HTMLSelectElement) {
    let i = selecaoDisciplinas.selectedIndex;
    let disciplina = selecaoDisciplinas.options[i].value;
    document.body.insertAdjacentHTML('beforeend', 'Disciplina selecionada: ' + disciplina);
  }
}

function enviarFormulario(event){
    event.preventDefault();
    let nome = document.getElementById("nomeUsuario");
    if(nome instanceof HTMLInputElement){
        document.body.insertAdjacentHTML('beforeend',"Nome: " + nome.value);
    }
}

function exibirConteudo() {
    let nome = document.getElementById('nomeInput2');
    if (nome instanceof HTMLInputElement) {
        let texto = document.getElementById('textoDigitado');
        if (texto != null) {
            texto.textContent = nome.value;
        } 
    } 
}
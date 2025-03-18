const arrayTarefas = [];

function cadastrarTarefa(entradaTarefa) {
  if (entradaTarefa) {
    arrayTarefas.push(entradaTarefa);
    exibirConteudo();
  } else {
    alert('Por favor, insira um valor válido.');
  }
}

function exibirConteudo() {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = arrayTarefas.join(', ');
  }
}



const configurarCadastroDeTarefas = () => {
  let entradaTarefa = document.getElementById('tarefa');
  let botaoCadastrarTarefa = document.getElementById('cadastrarTarefaBtn');


  //prettier-ignore
  if((botaoCadastrarTarefa instanceof HTMLButtonElement) && (entradaTarefa instanceof HTMLInputElement)){
    botaoCadastrarTarefa.addEventListener('click',() =>{
            cadastrarTarefa(entradaTarefa.value);
        })
    }

};

document.addEventListener('DOMContentLoaded', configurarCadastroDeTarefas);

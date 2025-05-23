const arrayTarefas = [];

function cadastrarTarefa(entradaTarefa) {
  if (entradaTarefa) {
    if (!arrayTarefas.includes(entradaTarefa.toLowerCase())){
      arrayTarefas.push(entradaTarefa.toLowerCase());
      exibirConteudo();
    } else {
      alert("A tarefa já existe, tente outra.");
    }
  } else {
    alert('Por favor, insira um valor válido.');
  }
}

function exibirConteudo() {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLDivElement) {
    while(saida.firstChild){
      saida.removeChild(saida.firstChild);
    }

    arrayTarefas.forEach(function(item) {
      saida.appendChild(lista(item));
    });
  }
}

function lista(item) {
  let itemLista = document.createElement('li');
  itemLista.textContent = item;
  return itemLista;
}

function removerUltimaTarefa() {
  if (arrayTarefas.length > 0) {
    arrayTarefas.pop();
    exibirConteudo();
  } else {
    alert('Não existem tarefas cadastradas.');
  }
}

function removerTarefa(tarefa) {
  let ind = arrayTarefas.indexOf(tarefa.toLowerCase())
  if (ind != 1) {
    arrayTarefas.splice(ind, 1);
    exibirConteudo();
  } else {
    alert('Tarefa Não encontrada!');
  }
}

const configurarCadastroDeTarefas = () => {
  let entradaTarefa = document.getElementById('tarefa');
  let botaoCadastrarTarefa = document.getElementById('cadastrarTarefaBtn');
  let botaoRemoverUltimaTarefa = document.getElementById('removerTarefaBtn');
  let botaoTarefaEscolhida = document.getElementById('removerTarefaEscolhidaBtn');
  let entradaTarefaRemovida = document.getElementById('tarefaRemovida');


  //prettier-ignore
  if((botaoCadastrarTarefa instanceof HTMLButtonElement) && (entradaTarefa instanceof HTMLInputElement)){
    botaoCadastrarTarefa.addEventListener('click',() =>{
            cadastrarTarefa(entradaTarefa.value);
        })
    }

  if(botaoRemoverUltimaTarefa instanceof HTMLButtonElement){
    botaoRemoverUltimaTarefa.addEventListener('click',() =>{
            removerUltimaTarefa();
        })
    }

  if((botaoTarefaEscolhida instanceof HTMLButtonElement) && (entradaTarefaRemovida instanceof HTMLInputElement)){
    botaoTarefaEscolhida.addEventListener('click',() =>{
            removerTarefa(entradaTarefaRemovida.value);
        })
    }

};

document.addEventListener('DOMContentLoaded', configurarCadastroDeTarefas);

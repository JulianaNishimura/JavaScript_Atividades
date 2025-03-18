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
  let paragrafo = document.createElement('p');

  let conteudo = document.createElement('label');
  conteudo.htmlFor = item;
  conteudo.textContent = item;

  let itemLista = document.createElement('input');
  itemLista.type = "checkbox";
  itemLista.value = item;
  itemLista.name = 'itens';
  itemLista.id = item;

  paragrafo.appendChild(itemLista);
  paragrafo.appendChild(conteudo);
  return paragrafo;
}

function removerUltimaTarefa() {
  if (arrayTarefas.length > 0) {
    arrayTarefas.pop();
    exibirConteudo();
  } else {
    alert('Não existem tarefas cadastradas.');
  }
}

function removerTarefa() {
  let checkboxes = document.getElementsByName('itens'); 
  
  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];

    if (checkbox.checked) { 
      let ind = arrayTarefas.indexOf(checkbox.value);  
      if (ind !== -1) {  
        arrayTarefas.splice(ind, 1);  
      }
    }
  }
  exibirConteudo(); 
}

const configurarCadastroDeTarefas = () => {
  let entradaTarefa = document.getElementById('tarefa');
  let botaoCadastrarTarefa = document.getElementById('cadastrarTarefaBtn');
  let botaoRemoverUltimaTarefa = document.getElementById('removerTarefaBtn');
  let botaoTarefaEscolhida = document.getElementById('removerTarefaEscolhidaBtn');

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

  if(botaoTarefaEscolhida instanceof HTMLButtonElement){
    botaoTarefaEscolhida.addEventListener('click',() =>{
            removerTarefa();
        })
    }

};

document.addEventListener('DOMContentLoaded', configurarCadastroDeTarefas);

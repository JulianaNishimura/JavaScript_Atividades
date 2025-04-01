const arrayTarefas = [];

function cadastrarTarefa(entradaTarefa) {
  if (entradaTarefa) {
    if (!arrayTarefas.includes(entradaTarefa.toLowerCase())) {
      arrayTarefas.push(entradaTarefa.toLowerCase());
      exibirConteudo();
    } else {
      alert('A tarefa já existe, tente outra.');
    }
  } else {
    alert('Por favor, insira um valor válido.');
  }
}

function exibirConteudo() {
  let saida = document.getElementById('resultado');
  //if (saida instanceof HTMLDivElement) {
  if (saida instanceof HTMLUListElement) {
    while (saida.firstChild) {
      saida.removeChild(saida.firstChild);
    }

    arrayTarefas.forEach(function (item, indice) {
      saida.appendChild(lista(item, indice));
    });
  }
}

function lista(item, indice) {
  //let paragrafo = document.createElement('p');

  //usado para que um elemento fique embaixo do outro
  let li = document.createElement('li');

  let conteudo = document.createElement('label');
  //conteudo.htmlFor = item;
  conteudo.textContent = item;

  let itemLista = document.createElement('input');
  itemLista.type = 'checkbox';
  itemLista.value = item;
  itemLista.name = 'itens';
  //itemLista.id = item;
  itemLista.id = `item-${indice}`;
  //paragrafo.appendChild(itemLista);
  //paragrafo.appendChild(conteudo);
  conteudo.prepend(itemLista); // Adiciona o itemLista antes do texto da label
  //return conteudo;
  //usado para criar cada elemento de li
  li.appendChild(conteudo);
  return li;
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
  //document.querySelectorAll('input[name="itens"]:checked')
  //  retorna apenas os checkboxes marcados (checked)

  //anterior
  //let checkboxes = document.getElementsByName('itens');

  //atual
  let checkboxes = document.querySelectorAll('input[name="itens"]:checked');

  //if (checkboxes instanceof HTMLInputElement) {
  //  for (let i = 0; i < checkboxes.length; i++) {
  //    let checkbox = checkboxes[i];

  checkboxes.forEach((checkbox) => {
    //if (checkbox.checked) {
    if (checkbox instanceof HTMLInputElement) {//adicionado para corrigir a validação do checkbox.value
      let ind = arrayTarefas.indexOf(checkbox.value);
      if (ind !== -1) {
        arrayTarefas.splice(ind, 1);
      }
    }
  });
  exibirConteudo();
}

const configurarCadastroDeTarefas = () => {
  let entradaTarefa = document.getElementById('tarefa');
  let botaoCadastrarTarefa = document.getElementById('cadastrarTarefaBtn');
  let botaoRemoverUltimaTarefa = document.getElementById('removerTarefaBtn');
  let botaoTarefaEscolhida = document.getElementById(
    'removerTarefaEscolhidaBtn'
  );

  //prettier-ignore
  if((botaoCadastrarTarefa instanceof HTMLButtonElement) && (entradaTarefa instanceof HTMLInputElement)){
    botaoCadastrarTarefa.addEventListener('click',() =>{
            cadastrarTarefa(entradaTarefa.value);
            entradaTarefa.value='';
        })
    }

  if (botaoRemoverUltimaTarefa instanceof HTMLButtonElement) {
    botaoRemoverUltimaTarefa.addEventListener('click', () => {
      removerUltimaTarefa();
    });
  }

  if (botaoTarefaEscolhida instanceof HTMLButtonElement) {
    botaoTarefaEscolhida.addEventListener('click', () => {
      removerTarefa();
    });
  }
};

document.addEventListener('DOMContentLoaded', configurarCadastroDeTarefas);

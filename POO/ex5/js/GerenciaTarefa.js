import Tarefa from './Tarefa.js';

export class GerenciaTarefa {
  #tarefas = [];

  constructor() {
    this.#configurar();
  }

  #adicionarTarefa() {
    let tituloInput = document.getElementById('titulo');
    let dataInput = document.getElementById('data');
    let descricaoInput = document.getElementById('descricao');

    if (
      tituloInput instanceof HTMLInputElement &&
      dataInput instanceof HTMLInputElement &&
      descricaoInput instanceof HTMLInputElement
    ) {
      let titulo = tituloInput.value;
      let data = dataInput.value;
      let descricao = descricaoInput.value;

      let tarefaExistente = this.#tarefas.find(
        (tarefa) => tarefa.titulo === titulo
      );
      if (tarefaExistente) {
        alert('Já existe uma tarefa com este nome!');
      } else {
        this.#tarefas.push(new Tarefa(titulo, data, descricao, false));
        this.#exibir();
      }
    }
  }

  #exibir() {
    const tarefasDiv = document.getElementById('tarefas');

    if (tarefasDiv instanceof HTMLDivElement) {
      tarefasDiv.innerHTML = '';

      this.#tarefas.forEach((tarefa) => {
        const div = document.createElement('div');
        div.className = 'tarefa-item';
        div.id = `${tarefa.titulo}`;

        const botaoExclui = document.createElement('button');
        botaoExclui.textContent = 'Remover';
        botaoExclui.addEventListener('click', () => {
          this.#removerTarefa(tarefa.titulo);
        });

        const botaoAtualiza = document.createElement('button');
        botaoAtualiza.textContent = 'Concluir';
        botaoAtualiza.addEventListener('click', () => {
          this.#atualizarTarefa(tarefa.titulo);
        });

        const texto = document.createElement('p');
        texto.className = 'tarefa-texto';
        texto.innerHTML = tarefa.toString();

        const botoes = document.createElement('div');
        botoes.className = 'botoes';
        botoes.appendChild(botaoExclui);
        botoes.appendChild(botaoAtualiza);

        div.appendChild(texto);
        div.appendChild(botoes);
        tarefasDiv.appendChild(div);
      });
    }
  }

  #removerTarefa(tituloId) {
    let indice = this.#tarefas.findIndex(
      (tarefa) => tarefa.titulo === tituloId
    );
    //filter, find, etc.
    if (indice !== -1 && !isNaN(indice)) {
      this.#tarefas.splice(indice, 1);
      this.#exibir();
    } else {
      alert('Produto não encontrado');
    }
  }

  #atualizarTarefa(titulo) {
    let tarefaExistente = this.#tarefas.find(
      (tarefa) => tarefa.titulo === titulo
    );
    if (tarefaExistente) {
      tarefaExistente.status = true;
      this.#exibir();
    } else {
      alert('A tarefa não existe ou não foi encontrada.');
    }
  }

  #configurar() {
    let adicionarBtn = document.getElementById('adicionar');

    if (adicionarBtn instanceof HTMLButtonElement) {
      adicionarBtn.addEventListener('click', () => {
        this.#adicionarTarefa();
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GerenciaTarefa();
});

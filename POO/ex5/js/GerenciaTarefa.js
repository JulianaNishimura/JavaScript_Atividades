import Tarefa from './Tarefa.js'

export class GerenciaTarefa{
    #tarefas = [];

    constructor(){
        this.#configurar();
    }

    #adicionarTarefa(){
        let tituloInput = document.getElementById('titulo');
        let dataInput = document.getElementById('data');
        let descricaoInput = document.getElementById('descricao');

        if(tituloInput instanceof HTMLInputElement && dataInput instanceof HTMLInputElement && descricaoInput instanceof HTMLInputElement){
            let titulo = tituloInput.value;
            let data = dataInput.value;
            let descricao = descricaoInput.value;

            let tarefaExistente = this.#tarefas.find(tarefa => tarefa.titulo === titulo);
            if (tarefaExistente) {
                alert("Já existe uma tarefa com este nome!");
            } else {
                this.#tarefas.push(new Tarefa(titulo,data,descricao,false));
                this.#exibir();
            }
        }
    }

    #exibir(){
        const tarefasDiv = document.getElementById('tarefas');
        
        tarefasDiv.innerHTML = '';
        
        this.#tarefas.forEach(tarefa => {
            const div = document.createElement('div');
            const botaoExclui = document.createElement('button');
            botaoExclui.id = "remover";
            const botaoAtualiza = document.createElement('button');
            botaoAtualiza.id = "atualizar"
            div.className = 'tarefa-item';
            div.id = `${tarefa.titulo}`
            div.textContent = `${tarefa.toString()}Total: R$ ${tarefa.valorTotalDoProduto()}`;
            div.appendChild(botaoExclui);
            div.appendChild(botaoAtualiza);
            tarefasDiv.appendChild(div);
        });
        
    }

    #removerTarefa(tituloId){
        let indice = this.#tarefas.findIndex((tarefa) => tarefa.titulo === tituloId);
            //filter, find, etc.
            if (indice !== -1 && !isNaN(indice)) {
                this.#tarefas.splice(indice,1);
                this.exibir();
            } else {
                alert("Produto não encontrado")
            }
    }

    #atualizarTarefa(tituloId){

    }

    #configurar(){
        let adicionarBtn = document.getElementById('adicionar');
        let removerBtn = document.getElementById('remover');
        let atualizarBtn = document.getElementById('atualizar');

        if(adicionarBtn instanceof HTMLButtonElement && removerBtn instanceof HTMLButtonElement && atualizarBtn instanceof HTMLButtonElement){
            adicionarBtn.addEventListener('click', () => {
                this.#adicionarTarefa();
            });

            removerBtn.addEventListener('click', () => {
                this.#removerTarefa(this.id);
            });
            
            atualizarBtn.addEventListener('click', () => {
                this.#atualizarTarefa(this.id);
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    new GerenciaTarefa();
});
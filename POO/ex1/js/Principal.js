import { Aluno } from './Aluno.js';

export class Principal {
    constructor(){
        this.notas = [];
        this.aluno = null
        this.#configurar();
    }

    #configurar(){
        this.nomeInput = document.getElementById('nome');
        this.notaInput = document.getElementById('nota');
        this.botaoAdicionarNota = document.getElementById('botaoAdicionarNota');
        this.botaoLimparNota = document.getElementById('botaoLimparNota');
        this.botaoMedia = document.getElementById('botaoMedia');

        if(notaInput instanceof HTMLInputElement && botaoAdicionarNota instanceof HTMLButtonElement && botaoLimparNota instanceof HTMLButtonElement && botaoMedia instanceof HTMLButtonElement && nomeInput instanceof HTMLInputElement){
            botaoAdicionarNota.addEventListener('click',this.acrescentarNotas(this.notaInput.value))
        }
    }

    acrescentarNotas(nota){
        let notaAluno = Number(nota);
        if(!isNaN(notaAluno) && notaAluno >= 0 && notaAluno <= 0){
            this.notas.push(notaAluno);
            nota = '';
            this.#exibirConteudo();
        } else {
            alert("Digite uma nota válida entre 0 e 10.");
        }
    }

    #exibirConteudo(){
        let notasAdicionadas = document.getElementById('notasAdicionadas');
        let resultado = document.getElementById('resultado');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Principal();
})
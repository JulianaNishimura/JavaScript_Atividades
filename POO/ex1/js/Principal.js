import { Aluno } from './Aluno.js';

export class Principal {
    constructor(){
        this.nomeInput = document.getElementById('nome');
        this.nota1Input = document.getElementById('nota1');
        this.nota2Input = document.getElementById('nota2');
        this.nota3Input = document.getElementById('nota3');
        this.botaoMedia = document.getElementById('botaoMedia');
        this.resultado = document.getElementById('resultado');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Principal();
})
import Aluno from './Aluno.js';

let aluno;

function acrescentar(notaInput) {
  try {
    let nota = parseFloat(notaInput.value);
    if(isNaN(nota)){
        throw new Error('Digite um número válido!');
    }
    if(nota < 0){
        throw new Error('Digite um número maior ou igual a 0!');
    }
    if(nota > 10){
        throw new Error('Digite um número menor ou igual a 10!');
    }
    if (!aluno) {
      throw new Error('Por favor, insira o nome do aluno antes de adicionar notas.');
    }
    if((aluno.notas.length === 3)){
      throw new Error('Você já adicionou 3 notas.')
    }
    aluno.adicionarNota(nota); // Adiciona a nota usando o método da classe
    notaInput.value = '';
    exibirConteudo();
  } catch (error) {
    alert(error.message);
  }
}

function obterNome() {
  let nomeInput = document.getElementById('nome');

  if (nomeInput instanceof HTMLInputElement) {
    return nomeInput.value;
  }
  return '';
}

function inicializarAluno() {
  let nome = obterNome();

  if (!nome) {
    alert('Por favor, insira o nome do aluno.');
    return false;
  }
  if (!aluno) {
    aluno = new Aluno(nome);
  } else {
    aluno = new Aluno(nome, aluno.notas); // Mantém as notas existentes ao atualizar o nome
  }
  return true;
}

function calcularMedia() {
  // forma explicita
  // if (aluno === null || aluno === undefined || (aluno.notas.length === 0))
  //prettier-ignore
  if ((!aluno) || (aluno.notas.length < 3)) { //simplificação
    return alert('Adicione ao menos três notas antes de calcular a média.');
  }
  return aluno.calcularMedia();
}

function exibirConteudo() {
  let notasAdicionadas = document.getElementById('notasAdicionadas');

  if (notasAdicionadas instanceof HTMLParagraphElement) {
    //prettier-ignore
    notasAdicionadas.textContent = `Notas adicionadas: ${aluno.notas.join(', ')}`;
  }
}

function exibirMedia() {
  let resultado = document.getElementById('resultado');

  if (resultado instanceof HTMLParagraphElement) {
    let media = calcularMedia();
    resultado.textContent = `Aluno: ${aluno.nome}, Média: ${media}`;
  }
}

function limparConteudo() {
  let nomeInput = document.getElementById('nome');
  let notaInput = document.getElementById('nota');
  let notasAdicionadas = document.getElementById('notasAdicionadas');
  let resultado = document.getElementById('resultado');

  //prettier-ignore
  if ((nomeInput instanceof HTMLInputElement) && (notaInput instanceof HTMLInputElement) &&
    (notasAdicionadas instanceof HTMLParagraphElement) && (resultado instanceof HTMLParagraphElement)) {
    nomeInput.value = '';
    notaInput.value = '';
    notasAdicionadas.textContent = '';
    resultado.textContent = '';
    aluno = null; // Reinicia o aluno
  }
}

function configurar() {
  let notaInput = document.getElementById('nota');
  let adicionarNotaBtn = document.getElementById('adicionarNotaBtn');
  let calcularMediaBtn = document.getElementById('calcularMediaBtn');
  let limparConteudoBtn = document.getElementById('limparConteudoBtn');

  //prettier-ignore
  if ((notaInput instanceof HTMLInputElement) && (adicionarNotaBtn instanceof HTMLButtonElement) &&
    (calcularMediaBtn instanceof HTMLButtonElement) && (limparConteudoBtn instanceof HTMLButtonElement)) {
    adicionarNotaBtn.addEventListener('click', () => {
      if (inicializarAluno()) {
        acrescentar(notaInput);
      }
    });

    calcularMediaBtn.addEventListener('click', () => {
      exibirMedia();
    });

    limparConteudoBtn.addEventListener('click', () => {
      limparConteudo();
    });
  }
}

document.addEventListener('DOMContentLoaded', configurar);

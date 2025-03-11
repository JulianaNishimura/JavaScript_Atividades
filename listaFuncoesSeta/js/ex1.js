const configurarEventoSaudacao = () => {
  let nomeElemento = document.getElementById('nome');
  let mensagemElemento = document.getElementById('mensagem');
  let exibirBtn = document.getElementById('exibirBtn');
  if (exibirBtn) {
    exibirBtn.addEventListener('click', () => {
      cliqueNoBotao(nomeElemento, mensagemElemento);
    });
  }
};

const cliqueNoBotao = (nomeInput, mensagemInput) => {
  if (
    nomeInput instanceof HTMLInputElement &&
    mensagemInput instanceof HTMLInputElement
  ) {
    let nome = nomeInput.value;
    let mensagem = mensagemInput.value;
    nome = nome === '' ? 'Visitante' : nome;
    mensagem = mensagem === '' ? 'Bem-vindo!' : mensagem;
    saudacao(nome, mensagem);
  }
};

const saudacao = (nome, mensagem) => {
  let saida = document.getElementById('resultado');
  if (saida) {
    saida.textContent = `Olá, ${nome}! ${mensagem}`;
  }
};

document.addEventListener('DOMContentLoaded', configurarEventoSaudacao);

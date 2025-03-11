const saudacao = (nome = 'Visitante', mensagem = 'Bem-vindo!') => {
  let saida = document.getElementById('resultado');
  if (saida) {
    saida.textContent = `Olá, ${nome}! ${mensagem}`;
  }
};

let nome = prompt('Digite seu nome:') || 'Visitante';
let mensagem = prompt('Digite sua mensagem:') || 'Bem-vindo!';

saudacao(nome, mensagem);

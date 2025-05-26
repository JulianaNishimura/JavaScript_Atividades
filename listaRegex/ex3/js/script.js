function verificarSenha() {
  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,16}$/;
  let senhaElemento = document.getElementById("senha")
  if ( senhaElemento instanceof HTMLInputElement) {
    let senha = senhaElemento.value;
    if(senha.match(regexSenha)){
      saida("Cadastrado");
    } else {
      saida("Senha inválida. A senha deve ter entre 8 e 16 caracteres e conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.")
    }
  }
}

function saida(texto) {
  let saida = document.getElementById('saida');
  if (saida) {
    saida.textContent = texto;
  }
}

function configurar() {
  let botao = document.getElementById('cadastrarSenha');
  if (botao) {
    botao.addEventListener('click', verificarSenha);
  }
}

document.addEventListener('DOMContentLoaded', configurar);

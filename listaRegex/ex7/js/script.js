function verificarArquivo() {
  const regexImagem = /^[a-zA-Z0-9_-]+\.(jpg|jpeg|png|bmp)$/i;

  const inputArquivo = document.getElementById('arquivo');
  if (inputArquivo instanceof HTMLInputElement && inputArquivo.files && inputArquivo.files.length > 0) {
    const arquivo = inputArquivo.files[0];
    const nome = arquivo.name;

    if (regexImagem.test(nome)) {
      saida(`Arquivo "${nome}" cadastrado com sucesso.`);
    } else {
      saida(`Arquivo inválido: "${nome}". Use apenas .jpg, .jpeg, .png ou .bmp`);
    }
  } else {
    saida('Nenhum arquivo selecionado.');
  }
}

function saida(texto) {
  const saidaElemento = document.getElementById('saida');
  if (saidaElemento) {
    saidaElemento.textContent = texto;
  }
}

function configurar() {
  const botao = document.getElementById('cadastrarArquivo');
  if (botao) {
    botao.addEventListener('click', verificarArquivo);
  }
}

document.addEventListener('DOMContentLoaded', configurar);

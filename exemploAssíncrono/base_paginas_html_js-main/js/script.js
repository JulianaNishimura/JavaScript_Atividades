// Função principal para carregar o conteúdo de diferentes partes da página
function carregarPaginasHTML() {
  inserirConteudo('navbarConteudo', 'navbar.html');
  inserirConteudo('bodyConteudo', 'body.html');
}

async function inserirConteudo(idElemento, localPagina) {
  let elemento = document.getElementById(idElemento);

  if (elemento instanceof HTMLElement) {
    try {
      let documentoConvertido = await carregarPagina(localPagina);

      // limpa todo o conteúdo existente do elemento 
      // antes de adicionar novos itens
      while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
      }

      let conteudoBody = documentoConvertido.body;

      for (let no of conteudoBody.childNodes) {
        // Clona cada nó do documento carregado
        let noClone = no.cloneNode(true);
        // Adiciona o nó clonado ao elemento alvo na página
        elemento.appendChild(noClone);
      }
    } catch (error) {
      let errorMessage = document.createElement('p');
      errorMessage.textContent = error.message;
      elemento.appendChild(errorMessage);
    }
  }
}

async function carregarPagina(localPagina) {
  try {
    // Faz uma requisição para obter o conteúdo da página
    let resposta = await fetch(localPagina);
    // Obtém o conteúdo da resposta como texto
    let conteudo = await resposta.text();

    // Cria um objeto DOM a partir do texto carregado
    let domParser = new DOMParser();
    return domParser.parseFromString(conteudo, 'text/html');
  } catch (error) {
    throw new Error(`Erro ao carregar ${localPagina}: ${error.message}`);
  }
}


document.addEventListener('DOMContentLoaded', carregarPaginasHTML);

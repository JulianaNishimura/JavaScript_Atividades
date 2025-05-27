// prettier-ignore
let produtos = [
    {nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco'},
    {nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto'},
    {nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto'},
    {nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto'}
  ];

// A função precisa conter async porque utiliza  
// a função contarImagens, que é assíncrona.
async function inicializarProdutosDinamicamente() {
  for (let produto of produtos) {
    produto.quantidadeFotos = await contarImagens(produto.diretorio);
  }
  inicializarProdutos(); 
}

// Função para inicializar os produtos na página
function inicializarProdutos() {
  let containerPrincipal = document.getElementById('produtos');

  if (containerPrincipal instanceof HTMLDivElement) {
    produtos.forEach((produto, indice) => {
      let containerProduto = criarContainerProduto(produto, indice);
      containerPrincipal.appendChild(containerProduto);
    });
  }
}

// Função para contar as imagens de um diretório
// A função precisa conter async para usar await e "esperar"
// o término dessa operação antes de prosseguir.
async function contarImagens(diretorio) {
  const MAX_IMG = 3;
  let contador = 0;

  for (let i = 1; i <= MAX_IMG; i++) {
    let img = new Image();
    img.src = `img/${diretorio}/0${i}.jpg`;

    try {
      //img.decode() é uma operação assíncrona:
      await img.decode(); // Aguarda a decodificação da imagem
      contador++;
    } catch (error) {
      console.log('Erro ao carregar imagem' + error.message);
      break; 
    }
  }
  return contador;
}


function criarContainerProduto(produto, indice) {
  let divProduto = document.createElement('div');
  divProduto.className = 'container';

  // true Define a visibilidade inicial com base no booleano 'visivel'
  let primeiraImagemDiv = criarQuadro(produto.diretorio, 1, true);
  divProduto.appendChild(primeiraImagemDiv);

  //começa em 2 porque a primeira imagem do produto 
  // já foi criada anteriormente na função
  for (let i = 2; i <= produto.quantidadeFotos; i++) {
    // true Define a visibilidade inicial com base no booleano 'visivel'
    let imagemDiv = criarQuadro(produto.diretorio, i, false);
    divProduto.appendChild(imagemDiv);
  }
  //prettier-ignore
  let linhaMiniaturas = criarLinhaMiniaturas(produto.diretorio,produto.quantidadeFotos,indice);
  divProduto.appendChild(linhaMiniaturas);

  let informacaoProduto = criarInformacaoProduto(produto.textoDescritivo);
  divProduto.appendChild(informacaoProduto);

  return divProduto;
}

// Cria um div para uma imagem do produto
function criarQuadro(diretorio, numero, visivel) {
  let quadro = document.createElement('div');
  quadro.className = 'minhaImagem';
  quadro.style.display = visivel ? 'block' : 'none';

  let imagem = document.createElement('img');
  imagem.src = `img/${diretorio}/0${numero}.jpg`;
  quadro.appendChild(imagem);

  return quadro;
}

// Cria a linha de miniaturas para um produto
function criarLinhaMiniaturas(diretorio, quantidadeFotos, indice) {
  let linhaMiniaturas = document.createElement('div');
  linhaMiniaturas.className = 'linha';

  for (let i = 1; i <= quantidadeFotos; i++) {
    let coluna = document.createElement('div');
    coluna.className = 'coluna';

    let miniatura = document.createElement('img');
    miniatura.className = 'cursor';
    miniatura.src = `img/${diretorio}/0${i}.jpg`;

    // Se for a primeira miniatura, adiciona a classe de destaque
    if (i === 1) {
      miniatura.classList.add('minhaMiniaturaSelecionada');
      //classList.add adiciona uma ou mais classes sem alterar as que 
      // já estão presentes no elemento.
    }
    
    miniatura.onclick = () => {
      alterarImagem(indice, i, miniatura);
    };

    coluna.appendChild(miniatura);
    linhaMiniaturas.appendChild(coluna);
  }

  return linhaMiniaturas;
}


function criarInformacaoProduto(descricaoProduto) {
  let informacao = document.createElement('div');
  informacao.className = 'informacaoDoProduto';

  let link = document.createElement('a');
  link.href = '#';
  link.textContent = descricaoProduto;
  informacao.appendChild(link);

  return informacao;
}

// Altera a imagem exibida ao clicar em uma miniatura
function alterarImagem(indiceGrupo, indiceImagem, miniatura) {
  let container = document.querySelectorAll('.container')[indiceGrupo];
  let imagens = container.querySelectorAll('.minhaImagem');
  let miniaturas = container.querySelectorAll('.linha .cursor');

  // Oculta todas as imagens
  imagens.forEach((imgDiv) => {
    if (imgDiv instanceof HTMLDivElement) {
      imgDiv.style.display = 'none';
    }
  });

  // Exibe a imagem selecionada
  let imagemSelecionada = imagens[indiceImagem - 1];
  if (imagemSelecionada instanceof HTMLDivElement) {
    imagemSelecionada.style.display = 'block';
  }

  // Remove o destaque de todas as miniaturas
  miniaturas.forEach((itemMiniatura) => {
    itemMiniatura.classList.remove('minhaMiniaturaSelecionada');
  });

  // Adiciona o destaque à miniatura clicada
  miniatura.classList.add('minhaMiniaturaSelecionada');
}

// Inicializa os produtos na página
document.addEventListener('DOMContentLoaded', inicializarProdutosDinamicamente);

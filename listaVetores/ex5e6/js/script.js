const frutas = ['Abacate', 'Pera', 'Maca', 'Laranja'];

function exibirConteudo(fruta) {
  const saida = document.getElementById('resultado');

  if (saida) {
    if (frutas.includes(fruta)) {
      const paragrafo = document.createElement('p');
      paragrafo.textContent = fruta;

      const img = document.createElement('img');
      img.src = `media/${fruta}.png`;

      saida.appendChild(paragrafo);
      saida.appendChild(img);
    }
  }
}

function configurarFruta() {
  const frutaBtn = document.getElementById('frutaBtn');
  const escolhaFrut = document.getElementById('frutas');

  if (
    escolhaFrut instanceof HTMLSelectElement &&
    frutaBtn instanceof HTMLButtonElement
  ) {
    frutaBtn.addEventListener('click', () => {
      const fruta = escolhaFrut.value;
      exibirConteudo(fruta);
    });
  }
}

document.addEventListener('DOMContentLoaded', configurarFruta);

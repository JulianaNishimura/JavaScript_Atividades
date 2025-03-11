const processar = (digito) => {
  let digitovalorEle = document.getElementById('digito');
  if (digitovalorEle instanceof HTMLInputElement) {
    let digitoValor = parseInt(digitovalorEle.value);
    let telaEle = document.getElementById('exibirNumero');
    if (telaEle instanceof HTMLDivElement) {
      let tela = telaEle.querySelector('span');
      if (tela) {
        tela.textContent = String(digitoValor);
      }
    }
  }
};

const processarBotoesEspeciais = () => {};

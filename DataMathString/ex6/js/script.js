function verificar(data){
    let dataEmLista = data.split("-");
    let dia = dataEmLista[3]
    let mes = dataEmLista[2]
    let ano = dataEmLista[1]

    if()
}

function exibir(quantidade){
    let saida = document.getElementById('saida');
    if(saida){
        saida.textContent = `A quantidade de palavras é: ${quantidade}`;
    }
}

function configurar() {
    let btnDiaDaSemana = document.getElementById('btnDiaDaSemana');

    if (btnDiaDaSemana instanceof HTMLButtonElement) {
        btnDiaDaSemana.addEventListener('click', () => {
            let dataEle = document.getElementById('data');
            if(dataEle instanceof HTMLInputElement){
                let data = dataEle.value;
                console.log(data)
                verificar(data);
            }
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', configurar);
//flatpickr - ver depois

function verificar(data){
    let dataEmLista = data.split("-");
    let dia = parseInt(dataEmLista[2]);
    let mes = parseInt(dataEmLista[1]);
    let ano = parseInt(dataEmLista[0]);

    if (mes < 3) {
        mes += 12;
        ano -= 1;
    }

    let K = ano % 100;
    let J = Math.floor(ano / 100);

    let res = (dia + Math.floor((13 * (mes + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) + 5 * J) % 7;
    console.log(res);
    return qualDia(res);
}

function qualDia(res){
    switch(res) {
        case 0:
            exibir("Sábado");
            break;
        case 1:
            exibir("Domingo");
            break;
        case 2:
            exibir("Segunda");
            break;
        case 3:
            exibir("Terça");
            break;
        case 4:
            exibir("Quarta");
            break;
        case 5:
            exibir("Quinta");
            break;
        case 6:
            exibir("Sexta");
            break;
      }
}

function exibir(dia){
    let saida = document.getElementById('saida');
    if(saida){
        saida.textContent = `O dia da semana é: ${dia}`;
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
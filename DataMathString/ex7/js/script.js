function contar(data){
    let saida = document.getElementById('saida');
    let dataAlvo = data.getTime();

    var contando = setInterval(function() {
        let dataHoje = new Date().getTime();

        var diferenca = dataAlvo - dataHoje;

        var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
        var milisegundos = Math.floor(diferenca %1000);

        if(saida){
            saida.innerHTML = `DIAS: ${dias} <br>HORAS: ${horas} <br>MINUTOS: ${minutos} <br>SEGUNDOS: ${segundos} <br>MILISEGUNDOS ${milisegundos} <br>`;
        }

        if (diferenca < 0) {
            clearInterval(contando);
            saida.innerHTML = "Acabou!";
        }
    }, 100);
}

function contar2(data) {
    let saida2 = document.getElementById('saida2');
    let agora = new Date();
    let alvo = data;

    let duracaoTotal = alvo.getTime() - agora.getTime();
    let inicio = agora.getTime();

    let contando = setInterval(function () {
        let tempoAtual = new Date();
        let tempoPassado = tempoAtual.getTime() - inicio;

        if (tempoPassado >= duracaoTotal) {
            clearInterval(contando);
            saida2.innerHTML = alvo.toLocaleString();
            return;
        }
        
        let dataSimulada = new Date(inicio + tempoPassado);
        saida2.innerHTML = dataSimulada.toLocaleString();
    }, 1000);
}


function configurar() {
    let btnTempoFalta = document.getElementById('btnTempoFalta');

    if (btnTempoFalta instanceof HTMLButtonElement) {
        btnTempoFalta.addEventListener('click', () => {
            let dataEle = document.getElementById('data');
            if(dataEle instanceof HTMLInputElement){
                let data = new Date(dataEle.value);
                contar(data);
                contar2(data);
            }
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', configurar);
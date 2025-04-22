function configurar(){
    let acessarBtn = document.getElementById('acessarBtn');
    if(acessarBtn){
        acessarBtn.addEventListener('click',verificaIdade)
    }
}

function exibirErro(mensagem) {
    let saida = document.getElementById('saida');
    if (saida instanceof HTMLParagraphElement){ 
        saida.textContent = 'Erro: ' + mensagem; 
        saida.style.color = 'red';
    }
}

function exibirSaida(mensagem) {
    let saida = document.getElementById('saida');
    if (saida instanceof HTMLParagraphElement){ 
        saida.textContent = mensagem; 
    }
}

function verificaIdade(){
    let idadeInput = document.getElementById('idade');
    if(idadeInput instanceof HTMLInputElement){
        let idade = parseInt(idadeInput.value)
        try {
            if(isNaN(idade)){
                throw new Error('Digite um número válido!')
            }
            if(idade < 0){
                throw new Error('A idade não pode ser negativa!')
            }
            if(idade < 18 && idade >= 0){
                throw new Error('Menor de 18 anos, acesso negado.')
            }
            exibirSaida('Acesso permitido!')
        } catch (error) {
            exibirErro(error.message);
        }
    }
}

document.addEventListener('DOMContentLoaded',configurar);
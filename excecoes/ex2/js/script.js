function configurar(){
    let emprestarBtn = document.getElementById('emprestarBtn');
    if(emprestarBtn){
        emprestarBtn.addEventListener('click',verificarEmprestimo)
    }
}

function exibirErro(mensagem){
    let saida = document.getElementById('saida');
    if(saida){
        saida.textContent = `Erro: ${mensagem}`
    }
}

function exibirSaida(mensagem){
    let saida = document.getElementById('saida');
    if(saida){
        saida.textContent = mensagem;
    }
}

function verificarEmprestimo(){
    let nomeInput = document.getElementById('nome');
    let idadeInput = document.getElementById('idade');
    let valorInput = document.getElementById('valor');
    if(idadeInput instanceof HTMLInputElement && valorInput instanceof HTMLInputElement && nomeInput instanceof HTMLInputElement){
        let nome = nomeInput.value;
        let idade = parseInt(idadeInput.value);
        let valor = parseFloat(valorInput.value);
        try {
            if(nome.trim() === ""){
                throw new Error('Digite seu nome!')
            }
            if(isNaN(idade)){
                throw new Error('Digite um número válido para a idade!')
            }
            if(idade < 0){
                throw new Error('A idade não pode ser negativa!')
            }
            if(idade < 18 || idade > 70){
                throw new Error('Menor de 18 anos ou maior de 70 anos, empréstimo negado.')
            }
            if(valor < 100 || valor > 30000){
                throw new Error('Valor menor que 100 ou valor maior que 30.000, empréstimo negado')
            }
            exibirSaida(`${nome}, seu empréstimo foi enviado para análise!`)
        } catch (error) {
            exibirErro(error.message)
        }
    }
}

document.addEventListener('DOMContentLoaded', configurar)
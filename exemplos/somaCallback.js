function exibirConteudo(resultado){
    console.log("O resultado é: " + resultado);
}

function somar(num1,num2,callback){
    let res;
    res = num1 + num2;
    callback(res);
}

somar(1,2,exibirConteudo)
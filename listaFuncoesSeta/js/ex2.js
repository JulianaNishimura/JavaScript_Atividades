const calcularDesconto = (preco, desconto = 0.1) => {
  let saida = document.getElementById('resultado');
  if (saida) {
    let total = preco - preco * desconto;
    saida.textContent = `O valor total é: ${total}!`;
  }
};

let preco = prompt('Digite o preço: ');
let desconto = Number(prompt('Digite seu desconto: '))/ 100 || 0.1;

calcularDesconto(preco, desconto);

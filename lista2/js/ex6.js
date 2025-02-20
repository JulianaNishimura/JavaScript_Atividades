function verificaPalindromo() {
  let palavrainput = document.getElementById('palavra');
  let mensagem;

  if (palavrainput instanceof HTMLInputElement) {
    let palavra = palavrainput.value.toLowerCase().trim();
    let palavraReversa = palavra.split('').reverse().join('');

    if (palavra === palavraReversa) {
      mensagem = 'É um palíndromo!';
    } else {
      mensagem = 'Não é um palíndromo!';
    }

    alert(mensagem);
  }
}

import Endereco from './Endereco.js';
import Pessoa from './Pessoa.js';

const endereco1 = new Endereco("São Paulo", "Centro", "Av. Paulista", "1000", "01310-100", "SP", "Brasil");
const pessoa1 = new Pessoa("Juliana", 30, "123.456.789-00", endereco1);

if (pessoa1.endereco instanceof Endereco) {
    console.log("Endereço associado corretamente.");
  }  

console.log(pessoa1.toString());

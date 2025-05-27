export default class Contato {
  #nome;
  #telefone;
  #email;

  constructor(nome, telefone, email) {
    this.validarNome(nome);
    this.validarTelefone(telefone);
    this.validarEmail(email);

    this.#nome = nome;
    this.#telefone = telefone;
    this.#email = email;
  }

  get nome() {
    return this.#nome;
  }

  get telefone() {
    return this.#telefone;
  }

  get email() {
    return this.#email;
  }


  validarNome(nome) {
    if (typeof nome !== "string" || !nome.trim().match(/^[A-Za-zÀ-ÿ\s]+$/)) {
        throw new Error("O nome deve conter apenas letras e não pode ser vazio.");
    }
  }
  
  validarTelefone(telefone) {
    if (typeof telefone !== 'string') {
        throw new Error('O telefone deve ser uma string.');
    }

    const somenteNumeros = telefone.replace(/\D/g, ''); // remove tudo que não é número

    if (!somenteNumeros.match(/^\d{10,11}$/)) {
        throw new Error('O telefone deve conter entre 10 e 11 dígitos numéricos.');
    }
  }

  validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.(com|com\.br|org)$/i;
    if (typeof email !== 'string' || !regexEmail.test(email)) {
        throw new Error("O e-mail deve ser válido e terminar com '.com', '.com.br' ou '.org'.");
    }
  }
}
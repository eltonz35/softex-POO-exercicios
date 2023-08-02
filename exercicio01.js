/**
Crie uma classe chamada "Pessoa" que tenha os atributos "nome" e "idade". 
Em seguida, crie um objeto chamado "pessoa1" e atribua a ele um nome e uma idade.
 */

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Elthon", 27);
console.log(pessoa1);
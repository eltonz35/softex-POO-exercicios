/**
Crie uma classe chamada "Pessoa" que tenha os atributos "nome" e "idade". 
Em seguida, crie um objeto chamado "pessoa1" e atribua a ele um nome e uma idade.
 */

/**
Na classe "Pessoa" criada anteriormente, adicione um método chamado "apresentar"
 que exiba no console uma mensagem com o nome e a idade da pessoa.
 */


class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log("Nome: " + this.nome, "idade: " + this.idade);
    }
}

const pessoa1 = new Pessoa("Elthon", 27);
pessoa1.apresentar();
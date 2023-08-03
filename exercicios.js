/**
Crie uma classe chamada "Pessoa" que tenha os atributos "nome" e "idade". 
Em seguida, crie um objeto chamado "pessoa1" e atribua a ele um nome e uma idade.
 */

/**
Na classe "Pessoa" criada anteriormente, adicione um método chamado "apresentar"
 que exiba no console uma mensagem com o nome e a idade da pessoa.
 */

/**
Crie uma classe chamada "Aluno" que herde da classe "Pessoa" (do exercício 1).
A classe "Aluno" deve ter um atributo adicional chamado "matricula".
Crie um objeto chamado "aluno1" que seja um aluno e imprima no console.
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

class Aluno extends Pessoa {
   constructor(nome, idade, matricula) {
      super(nome, idade) //super serve especificamente para herdar atributos da classe pai
       this.matricula = matricula;
  }
}

const aluno1 = new Aluno("Elthon", 27, 1);
console.log(aluno1);
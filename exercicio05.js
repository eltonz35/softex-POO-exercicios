/**
Crie uma classe chamada "Animal" com um método chamado "falar".
Crie classes específicas que herdem de "Animal" (por exemplo: "Cachorro", "Gato", etc.)
e sobrescrevam o método "falar" para exibir o som característico de cada animal.
 */
class Animal {
    falar() {
        console.log("Som do animal!");
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("AuAu!!!");
    }
}

class Gato extends Animal {
    falar() {
        console.log("Miau!!!");
    }
}

const cachorro = new Cachorro;
const gato = new Gato;

cachorro.falar();
gato.falar();

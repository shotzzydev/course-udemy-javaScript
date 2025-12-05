// Funcao construtura -> objetos
// Funcao fabrica -> objetos
// Constutora -> Pessoa (new)


function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 12345;
    const metodoInterno = function() {

    };

    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou un metodo')
    };
}

const p1 = new Pessoa('Austin', 'Oliveira');
const p2 = new Pessoa('Ashley', 'Oliveira');

p1.metodo();
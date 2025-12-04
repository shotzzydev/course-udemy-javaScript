// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
    
    const sobrenome = "Oliveira"
    function criarNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criarNome('Austin'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);
// Declaraçao de fuçao (Function hoisting)
falaOi();

function falaOi() {
    console.log('Oie');
}

// Fist-class objects (Objetos de primeira classe)
// Function express
const SouUmDado = function() {
    console.log('Sou um dado.')
};

SouUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}

funcaoArrow();

// Dentro de um objeto 
const obj =  {
    fala() {
        console.log('Estou falando...')
    }
};

obj.fala();

// function executarFuncao(funcao) {
//     console.log('Vou executar sua funcao abaixo:')
//     funcao();
// }

// executarFuncao(SouUmDado)
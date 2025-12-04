// return
// Retorna um valor
// Termina a funcao


function criarMultiplicador(multiplicador) {
    // Multiplicador

    return function(n) {
        return n * multiplicador
    }
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4)

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(10));


// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto
//     }

//     return falaResto;
// }

// const fala = falaFrase('Ola');
// const resto = fala('Mundo!');
// console.log(resto)


// function criarPessoa(nome, sobrenome) {
//     return {
//         nome, sobrenome
//     }
// }

// const p1 = criarPessoa('Austin', 'Oliveira');
// const p2 = {
//     nome: 'Ashley',
//     sobrenome: 'Oliveira'
// };

// console.log(typeof p1);
// console.log(typeof p2);

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor =  'red'
// })

// function soma(a, b) {
//     return a + b
// }

// function soma2(a, b) {
//     console.log(a + b)
// }

// soma2(5, 2)
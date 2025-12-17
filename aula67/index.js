//               0   1   2  3  4
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor, indice, array) {
    if(valor % 2 !== 0) {
        acumulador += valor;
        // console.log(valor)
    }
    return acumulador
}, 0);

// console.log(total);


// Retorne um array com o dobro dos valores (map)
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador.push(valor * 2);
//     return acumulador
// }, []);

// Retorne um arra com os pares (Filter)
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//    if(valor % 8 === 0) acumulador.push(valor);
//    return acumulador
// }, []);

// Some todos os numeros
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador += valor
//     return acumulador
// }, 0);

// Retorne a pessoa mais velha 

const pessoa = [
    { nome: 'Austin', idade: 19 }, 
    { nome: 'Ashley', idade: 18 },
    { nome: 'Manuela', idade: 18 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoa.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador
    return valor;
})

// console.log(maisVelha)
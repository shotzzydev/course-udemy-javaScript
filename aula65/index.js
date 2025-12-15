// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com "a"

const pessoas = [
    { nome: 'Austin', idade: 19 },
    { nome: 'Ashley', idade: 18 },
    { nome: 'Manuela', idade: 18 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduado', idade: 55 },
    { nome: 'Wallace', idade: 47 },
];

const pessoasComNomesGrande = pessoas.filter(obj => obj.nome.length >= 6 && obj.idade > 50);
const pessoaComMaisDeCiquenta = pessoas.filter(obj => obj.idade > 20);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);

/**
* Filter -> Sempre retorna um array, com a mesma quantidade de elemenetos 
* ou menos.
*/


// Retorne os numeros maiores que 10
//               0   1   2  3  4  ....
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
// const numeroFiltrado = numeros.filter(valor => valor > 0);
// console.log(numeroFiltrado);
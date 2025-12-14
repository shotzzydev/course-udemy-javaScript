// Negativo Splice -5        -4        -3       -2       -1
//                  0        1          2        3        4
const nomes = ["Austin", 'Ashley', 'Menuela', 'Julia', 'Lily'];

// Push Final
// nomes.splice(nomes.length, 1, 'Danilo', 'Olivera');
// nomes.splice(-1, 0, 'Danilo', 'Olivera');
// nomes.splice(0, 0, 'Danilo', 'Olivera');

// Unshift
nomes.splice(0, 0, 'Oliveira');

console.log(nomes);

// const removido = nomes.splice(-1, 1, 'Danilo', 'Oliveira'); // Remover do ultimo
// const removido = nomes.splice(3, 2, 'Danilo', 'Oliveira');

// const removido = nomes.splice(2, 1); 

// nomes.splice(indice atual, delete, elem1, elem2, elem3, );
// pop remove ultimo indice

// const name2 = nomes.splice(0, 3, "Eae");

// console.log(name2);
// console.log(...name2);

// name2.slice(' ')
// console.log(name2)
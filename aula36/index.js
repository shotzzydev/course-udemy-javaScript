const pessoa = {
    name: 'Austin',
    sobrenome: 'Oliveira',
    age: 18
};


for(let key in pessoa) {
    console.log(key, pessoa[key]);
}

// const key = 'name'

// console.log(pessoa.name);
// console.log(pessoa[key]);

// Fro in -> Le os indices ou chaves do objeto
// for(let indice in frutas) {
//     console.log(frutas[indice])
// }

// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }
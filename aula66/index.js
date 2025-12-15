// Dobre os numeros
//               0   1   2   3  4  5 .....
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]

// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento: 
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Austin', idade: 19 },
    { nome: 'Ashley', idade: 18 },
    { nome: 'Manuela', idade: 18 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduado', idade: 55 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj => ({ idade: obj.idade }));
const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = (indice + 1) * 1000;
    return newObj;
});

// console.log(pessoas)
console.log(comIds);
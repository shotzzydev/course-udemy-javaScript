// function sayHi(name) {
//     return `Nice to meet you, ${name}`
// }

// const userName = 'Austin';

// const info = sayHi('eae');
// console.log(info);

// sayHi('Luan');

// // const salveInfo = sayHi("Austin");
// // console.log('Tree', salveInfo)

// function soma(x = 1, y = 1) {
//  const resultado = x + y;
//  return resultado
// }

// /**
//  * A funcoes sao como uma caixa onde apenas tudo que esta 
//  * so existe ali dentro. Variaveis e contantes criandas
//  * dentro da funcao não 'vazam' para fora, entao nao
//  * interferem no resto do codigo
//  * 
//  * ultilizamos o return na maioria dos caso
//  * como o proprio nome se diz retorna 
//  * tudo que estive abaixo do return nao
//  * vai ser executado 
// **/

// console.log(soma(2, 20));
// console.log(soma(10, 50));
// console.log(soma(70, 20));

// const raiz = n => n ** 0.5;

// console.log(raiz(16));
// console.log(raiz(25));

// const raiz2 = (n) => {
//     return n ** 0.5;
// }






// function saudacao(nome) {
//     return `Bom dia ${nome}`
// }

// const variavel = saudacao('Austin');
// console.log(variavel);
// saudacao('Oliveira');
// saudacao('Austin');

// function soma(x = 1, y = 2) {
//     return x + y  
// }

// console.log(soma(2, 4));
// console.log(soma(10, 1));
// console.log(soma(20, 2));

// const resultado = soma(5);
// console.log(resultado);

// const raiz = function(n) {
//     return n ** 0.5
// };

// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// const raiz = (n) => {
//     return n ** 0.5;
// }

// const soma2 = n => n ** 0.5;

// const resultado = soma2(10)
// console.log(resultado);
// const pessoa1 = {
//     nome: 'Austin',
//     sobrenome: 'Oliveira',
//     idade: 18,
// };
// const pessoa2 = {
//     nome: 'Manuela',
//     sobrenome: 'Oliveira',
//     idade: 17
// }
// console.log(pessoa1.nome);
// console.log(pessoa2.nome);
// function createPerson (nome, sobrenome, idade) {
//     return {
//         name: nome,
//         lastname: sobrenome,
//         year: idade
//     };
// }
// const pessoa1 = createPerson('Austin', 'Oliveira', 18);
// const pessoa2 = createPerson('Manuela', 'Oliveira', 17);
// console.log(pessoa1.name, pessoa2.name);
// const pessoa1 = {
//     nome: 'Austin',
//     sobrenome: 'Oliveira',
//     idade: 18,
//     say() {
//         console.log(`${this.nome} ${this.sobrenome} he say hello`);
//         console.log(`My age current is ${this.idade}`)
//     },
//     incrementaIdade() {
//         this.idade++;
//     }
// }
// pessoa1.say()
// pessoa1.incrementaIdade()
// pessoa1.say();
// pessoa1.incrementaIdade()
// pessoa1.say();
//            0   1  2
// const array = [1, 2, 3];
// array.push(4); 
// array.push(10); 
// array.push("Allan"); 
// array[0] = ['Austin'];
// console.log(array);
// const nome = "Austin";
// const sobreno = "Oliveira";
// const idade = 18;
// const pessoa = {
//     nome: 'Austin',
//     sobrenome: 'Oliveira', 
//     idade: 18
// };
// const pessoa2 = {
//     nome: 'Manuela',
//     sobrenome: 'Oliveira', 
//     idade: 18
// };
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);

// function criarPessoa(nome, sobrenome, idade) {
//     return {
//         nome, 
//         sobrenome,
//         idade
//     }
// }

// const pessoa1 = criarPessoa("Austin", "Oliveira", 18);
// const pessoa2 = criarPessoa("Manuela", "Oliveira", 17);
// const pessoa3 = criarPessoa("Allan", "glicerio", 17);
// const pessoa4 = criarPessoa("caua", "ferreira", 17);

// console.log(pessoa1);
// console.log(pessoa2);
// console.log(pessoa3);
// console.log(pessoa4);

const pessoa1 = {
    nome: 'Austin',
    sobrenome: 'Oliveira',
    idade: 18,

    fala() {
        console.log(`A minha idade atual e ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();

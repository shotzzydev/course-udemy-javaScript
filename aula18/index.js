/*
 Primativos (imutaveis)- string, number, boolean, undefined,
 null (bigintm symbol)

 Referencia (mutavel) - array, object, function - Passados por referencia
*/

//          0123
// let nome = 'Austin';
// console.log(nome);
// console.log(nome[0]);
// nome[0] = 'L';
// console.log(nome[0], nome);

// let a = 'A';
// let b = a;

// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b)

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);
// console.log(c);

const a = {
    nome: 'Luan',
    sobrenome: 'Oliveira'
}

const b = {...a} // Copia 

a.nome = 'Austin'
console.log(a);
console.log(b);
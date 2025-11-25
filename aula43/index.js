// Escreva uma função que recebe um numero e
// retorne o seguinte:
// Numero e divisivel por 3 = Fizz
// Numero e divisivel por 5 = Buzz
// Numero e divisivel por 3 e 5 FizzBuzz
// Numero NÃO e divisivel por 3 e 5 = retorna o proprio numero
// Checar se o numero ee realmente um numero = Retorna a proprio numero
// Use a funcao com numero de 0 a 100

function FizzBuzz(number) {
    // if (isNaN(number)) return number;
    if(typeof number !== 'number') return number;
    if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
    if (number % 5 === 0) return "Buzz";
    if (number % 3 === 0) return "Fizz";

    return number
}

console.log(FizzBuzz("Hello"));

for(let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
}
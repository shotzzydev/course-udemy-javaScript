

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand, rand == 10)
}

console.log('###########')

do {
    rand = random(min, max);
    console.log(rand, rand == 10)
} while (rand !== 10);


// const nome = "Austin"
// let i = 0;

// while(i <= nome.length) {
//     console.log(nome[i]);
//     i++;
// }

// console.log("Seguir a vida!")

// for(i of nome) {
//     console.log(i);
// }
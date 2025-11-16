const numero = 9;

// Se (numero >= 0 && numero <= 5) ocorrer, faca isso {codigo}
// Se não faca isso {codigo}
// O bloco if vai verificar ate a primeira condicao verdadeira

if(numero < 10) {
    console.log('O numero e menor ou igual que 10.');
}

if(numero >= 0 && numero <= 5) {
    console.log('O numero esta entre 0 e 5.');
} else if(numero >= 6 && numero <= 8) {
    console.log('O numero esta entre 6 e 8.');
} else if(numero >= 9 && numero <= 11) {
    console.log('O numero esta entre 9 e 11.');
} else {
    console.log('O numero não esta entre 0 e 11');
}

console.log('...Aqui vai o resto  do codigo.');
const numero = 10;

// Se (numero >= 0 && numero <= 5) ocorrer, faca isso {codigo}
// se não faca isso {o codigo}

if (numero <= 10) { // True
    console.log('O numero e menor ou igual a 10.')
}

if (numero >= 0 && numero <= 5) {
    console.log('O numero esta entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero esta entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) { // True
    console.log('O numero esta entre 9 e 11');
} else {
    console.log('O numero nao esta entre 0 e 11.')
}

console.log('Aqui vai o resto do codigo.');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

// Continue continua para proxima iteracao
// Break sai da iteracao

do {
   let numero  = numbers[i]

    if(numero === 2 || numero === 5) {
        console.log("Pulei!");
        i++
        continue
    }
    
    if(numero === 7) {
        console.log("Encontrei o 7");
        i++
        break;
    }
    
    console.log(i)
    i++
} while (i < numbers.length);

// for(let i = 0; i < numbers.length; i++) {
//     let numero  = numbers[i]

//     if(numero === 2 || numero === 5) {
//         console.log("Pulei!");
//         continue
//     }

//     if(numero === 7) {
//         console.log("Encontrei o 7");
//         break;
//     }

//     console.log(i)
// }
//             01234
let umTexto = "Testo";

console.log(umTexto)

//  Indice uma letra de um texto
//  console.log(umTexto[4])
// Mesma Bosta para indice de uma letra de um texto
 console.log(umTexto.charAt(4));

//  Como na string existe o + para soma e conca a jusão de palavras
console.log(umTexto.concat(' Novo'));

/*
     Ver qual indice de uma palavra especifica
*/ 
console.log(umTexto.indexOf('Teste'));

/*
    Ver ultimo indice de um palavra ou letra  exemplo "a", do final
     para o incial e como se tivesse lendo um livro do fim para o incial.
*/ 
console.log(umTexto.lastIndexOf('Teste'));

console.log(umTexto.match(/[a/z]/g));

/*
    È como fazer uma busca de algo no meio do deseto
*/ 
console.log(umTexto.search(/a/));

/* 
    A funçao replace aceita dois paramentos
    o primero que e o que que subtituir e o segundo e o
    a o letra o letra seila tanto faz assim ele vai mudar toda as parte para
    a palavra informada 
*/ 
console.log(umTexto.replace(/Texto/,  'Novo'));

/*
    Essa metodo nada mais fazer é
    corte na palavra exemplo eu quero pegar as letras que está
    no indice 2 ao 5 mais lembrando sempre adicione um numero mais no segundo agumento pq 
    a ultima não pegar esse crl
*/
console.log(umTexto.slice(2, 5));
/*
    Mesma coisa do slice so que mais complexo e mais antigo 
    então melhor usa o slice mesmo
*/
console.log(umTexto.substring(umTexto.length - 5, umTexto.length -1));


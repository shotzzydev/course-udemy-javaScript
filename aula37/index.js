const pessoa = {
    nome: "Austin",
    sobrenome: "Oliveira"
};

for(let key of pessoa) {
    
}

// For classico - Geralmente com iteraveis
// (array ou string)
// For in - Retorna o indice ou chave
// (string, array, objetos)
// For of - Retorna o valor em si
// (iteraveis, arrays, ou strings)

const nome = ["Austin", "Oliveira"];

// Obetenha o indices dos valores
for(let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

console.log("######");

// Obetenha o indices dos valores de forma simplificado
for(let i in nome) {
    console.log(nome[i])
}

console.log("######");

// Obtenha o valor do indices
for(let valor of nome) {
    console.log(valor)
}

console.log("######");

nome.forEach(function(valor, indice, array) {
     console.log(valor, indice, array);
})
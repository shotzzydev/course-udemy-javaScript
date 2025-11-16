// (codicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUser = 1000;
const nivelUser = pontuacaoUser >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || "red"


console.log(nivelUser, corPadrao)

const name2 = "Austin";

const name3 = name2.toLocaleUpperCase()
console.log(name3)

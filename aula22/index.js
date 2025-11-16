/*
Operadores Logicos
&& -> AND -> Todas as expressoes precisa ser verdadeira para retonar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

// const temSol = false;
// const dinheiro = true;
// const temNamorada = false;

// // Para voce sair para a rua voce 
// const expAnd = temSol && dinheiro && temNamorada; // todos requisitos necessarios
// const expOr = temSol || dinheiro || temNamorada; // apenas um requirida verdadeira

// console.log(expOr);

// const user = 'Austin'; // form usuario digitou
// const password = '123456'; // form usario digitou

// //                     true                     false     
// const vailLogar = user === 'Austin' || password === '123456';

// console.log(!!true);



// AND todas as expressao precisa ser verdadeiras   para retorna verdadeira
// const exp = true && true && true && true;
// console.log(exp)

const user = true;
const email = true;
const password = false;

console.log(user && email && password);


const infosCurrent = false;
const infoAccountTokenSessionExpis = "sd";

if (user) {
    console.log("Voce esta com sua informacoes tudo ok continuar logado")
} else  {
    console.log("Voce foi deslogado informacoes incorreta ou sessao expirada logue novamente")
}

const userDataBase = 123;
const emailDataBase = "austin";
const passwordDataBase = "12345678";

const vaiLogar = userDataBase === "123" && emailDataBase === "austin"  && passwordDataBase === "12345678"
console.log(vaiLogar)
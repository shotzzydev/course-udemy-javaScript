/*
 && -> false && true -> false
 || -> true || false -> vai retorna "o valor verdadeiro"

************************** 
* Valores Falso JavaScript
**************************
*
* false
* 0 
* '', "", ``
* null / undefined
* NaN
**/

// console.log('Austin Oliveira' && true && 'Manuela');

// console.log('Austin' && '' && 'Manuela');


// function FalaOi () {
//     return 'oi'
// }

// const vaiExecutar = "Austin";

// console.log(vaiExecutar && FalaOi());

// console.log(0 || false || null || "Austin" || true);
// quando ultizado o || "OU" ele vai retorna o primeiro verdadeiro encontrado


// const corUsuario = 12123;
// const corDefault = corUsuario || 'red';

// console.log(corDefault);


const a = 0;
const b = null;
const c = 'false'; 
const d = false;
const e = NaN;

console.log(a || b || c || d || e)
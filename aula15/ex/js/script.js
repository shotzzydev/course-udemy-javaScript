const number = Number(prompt('Digite um número')); 
const numberTitle = document.getElementsByClassName('number-title');
const text = document.getElementById('text');

numberTitle.innerText = number;
text.innerHTML = `
    Raiz quadrada: ${number ** 0.5}.<br>
    ${number} é inteiro: ${Number.isInteger(number)}.<br>
    É NaN: ${isNaN(number)}.<br>
    Arredondado para baixo ${Math.floor(number)}.<br>
    Arredondado para cima ${Math.ceil(number)}.<br>
    Com duas casa decimais: ${number.toFixed(2)}.
`
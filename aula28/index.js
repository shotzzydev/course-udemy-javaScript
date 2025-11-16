
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000; 
// const data = new Date(0 + tresHoras + umDia);

// console.log(data.toString());

// const data = new Date(2025, 3, 20, 15, 14, 20); // a, m, d, h, M, s, ms
// console.log(data.toString());

// const data = new Date('2025-05-20T08:20:59');
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth() + 1); // Mes comeca do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Mim', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sabado
// console.log(data.toString());
// console.log(Date.now())

function zeroAEsqueda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsqueda(data.getDate());
    const mes = zeroAEsqueda(data.getMonth() + 1);
    const ano = zeroAEsqueda(data.getFullYear());
    const hora = zeroAEsqueda(data.getHours());
    const min = zeroAEsqueda(data.getMinutes());
    const seg = zeroAEsqueda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrazil = formataData(data);
console.log(dataBrazil)
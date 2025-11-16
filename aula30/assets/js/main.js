
// const h1 = document.querySelector(".container h1");

// function getDayWeekText(day) {
    
//     const valueDay = [
//         'dormingo', 'segunda-feira', 'terça-feira',
//         'quarta-feira', 'quinta-feira', 'sexta-feira',
//         'sabado'
//     ];
    
//     return valueDay[day]
    
    // let dayWeekText;
    // switch (day) {
    //     case 0: {
    //         dayWeekText = "";
    //         return dayWeekText;
    //     }
    //     case 1: {
    //         dayWeekText = ""
    //         return dayWeekText;
    //     }
    //     case 2: {
    //         dayWeekText = ""
    //         return dayWeekText;
    //     }
    //     case 3: {
    //         dayWeekText = ""
    //         return dayWeekText;
    //     }
    //     case 4: {
    //         dayWeekText = ""
    //         return dayWeekText;
    //     }
    //     case 5: {
    //         dayWeekText = ""
    //         return dayWeekText;
    //     }
    //     case 6: {
    //         dayWeekText = ""
    //         return dayWeekText
    //     }
    // }
// }

// function getMonthText(numberMonth) {
//     const month = [
//         'Janeiro', 'fevereiro', 'março',
//         'abriu', 'maio', 'junho', 'julho',
//         'agosto', 'setembro', 'outubro', 'dezembro'
//     ];

//     return month[numberMonth]

    // let monthText;

    // switch (month) {
    //     case 0: {
    //         monthText = "janeiro";
    //         return monthText;
    //     }
    //     case 1: {
    //         monthText = "fevereiro";
    //         return monthText;
    //     }
    //     case 2: {
    //         monthText = "março";
    //         return monthText;
    //     }
    //     case 3: {
    //         monthText = "abriu";
    //         return monthText;
    //     }
    //     case 4: {
    //         monthText = "maio";
    //         return monthText;
    //     }
    //     case 5: {
    //         monthText = "junho";
    //         return monthText;
    //     }
    //     case 6: {
    //         monthText = "julho";
    //         return monthText;
    //     }
    //     case 7: {
    //         monthText = "agosto";
    //         return monthText;
    //     }
    //     case 8: {
    //         monthText = "setembro";
    //         return monthText;
    //     }
    //     case 9: {
    //         monthText = "outubro";
    //         return monthText;
    //     }
    //     case 10: {
    //         monthText = "novembro"
    //         return monthText;
    //     }
    //     case 11: {
    //         monthText = "dezembro";
    //         return monthText;
    //     }
    // }
// }

// function addZeroHours(min) {
//     return min >= 10 ? min : `0${min}`
// }

// function createDate(data) {
//     const dayWeek = getDayWeekText(data.getDay());
//     const day = data.getDate();
//     const month = getMonthText(data.getMonth());
//     const year = data.getFullYear();
//     const hours = data.getHours();
//     const min = addZeroHours(data.getMinutes());

//     return `${dayWeek}, ${day} de ${month} de ${year} ${hours}:${min}`
// }

// const data = new Date();
// h1.innerHTML = createDate(data)

const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: "full", timeStyle: "short" });
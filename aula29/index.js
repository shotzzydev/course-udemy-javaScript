function getDayWeekText(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0: {
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        }
        case 1: {
            diaSemanaTexto = "Segunda";
            return diaSemanaTexto;
        }
        case 2: {
            diaSemanaTexto = "Terca";
            return diaSemanaTexto;
        }
        case 3: {
            diaSemanaTexto = "Quarta";
            return diaSemanaTexto;
        }
        case 4: {
            diaSemanaTexto = "Quinta";
            return diaSemanaTexto;
        }
        case 5: {
            diaSemanaTexto = "Sexta";
            return diaSemanaTexto;
        }
        case 6: {
            diaSemanaTexto = "Sabado";
            return diaSemanaTexto;
        }
        default: {
           return diaSemanaTexto = ""
        }
    }
}

const data = new Date('2007-02-04 22:49');
const dayWeek = data.getDay();
const day = getDayWeekText(dayWeek);

console.log(dayWeek, day);
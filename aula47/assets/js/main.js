function relogia() {
    function criarHoraDosSegudos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const clock = document.body.querySelector('.clock');

    let segundos = 0;
    let timer;

    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            clock.innerHTML = criarHoraDosSegudos(segundos)
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('start')) {
            clock.classList.remove('pausado');
            clearInterval(timer);
            iniciarRelogio();
        }

        if (el.classList.contains('pause')) {
            clearInterval(timer);
            clock.classList.add('pausado')
        }

        if (el.classList.contains('reset')) {
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            clock.classList.remove('pausado');
            segundos = 0
        }
    });
}

relogia()



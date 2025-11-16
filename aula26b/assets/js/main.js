const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if(peso >= 500) {
        setResultado('Peso muito acima da media');
        return;
    }

    if (!altura) {
        setResultado('Altura invalida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)

    const msg =`Seu IMC e ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = [
        'Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'
    ];

    if(imc >= 40) return nivel[5];
    if(imc >= 34.99) return nivel[4];
    if(imc >= 29.99) return nivel[3];
    if(imc >= 24.99) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarParagrafo() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#result");
    resultado.innerHTML = '';

    const p = criarParagrafo();

    p.innerHTML = msg
    if(isValid) {
        p.classList.add("paragrafo-resultado");
    } else {
        p.classList.add("paragrafo-bad");
    }

    resultado.appendChild(p)
}
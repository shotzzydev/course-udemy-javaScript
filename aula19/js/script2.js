function meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    function recebeEventoForm(evento) {
        evento.preventDefault()
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const objeto = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(objeto);

        console.log(objeto)

        resultado.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} <br>`
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();


// form.onsubmit = function(evento) {
//     evento.preventDefault();
//     alert(1);
//     console.log("foi enviado.")
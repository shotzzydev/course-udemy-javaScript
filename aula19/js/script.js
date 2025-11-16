function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function receberEventoForm(evento) {
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        evento.preventDefault();

        const objet = {
            nome: nome.value,
            sobrenome: nome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(objet);
        console.log(pessoas);

        resultado.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<br>`
    } 

    form.addEventListener('submit', receberEventoForm)
}

meuEscopo();

// form.onsubmit = function(evento) {
//     evento.preventDefault()
//     alert(1);
//     console.log('Foi enviado.')
// };
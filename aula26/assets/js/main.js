const form = document.querySelector('.form')

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const peso = Number(form.querySelector('.peso'));
    const altura = Number(form.querySelector('.altura'));


    if (peso >= 400) {

    } else if (peso = NaN) {

    }

    const soma = peso / altura;

    console.log(soma)
});
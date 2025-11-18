const elementos = [
    { tag: 'p', text: 'Frase 1' }, // 0
    { tag: 'div', text: 'Frase 2' }, // 1
    { tag: 'section', text: 'Frase 3' }, // 3
    { tag: 'footer', text: 'Frase 4' }, // 2
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    const { tag, text } = elementos[i];

    const tagCreate = document.createElement(tag);
    const textCreate = document.createTextNode(text)

    tagCreate.appendChild(textCreate);
    div.appendChild(tagCreate);
}

container.appendChild(div)
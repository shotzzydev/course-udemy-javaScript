const div = document.querySelector(".paragrafos");
const p = div.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;

console.log(backgroundColorBody)

for(let indiceP of p) {
    // background-color
    indiceP.style.backgroundColor = backgroundColorBody
    indiceP.style.color = "#fff"
    indiceP.style.borderRadius = "10px"
    indiceP.style.padding = "20px"
    indiceP.style.textAlign = "center"
    indiceP.style.fontWeight = "500"
}
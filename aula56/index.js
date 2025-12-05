// Factory function (função fabrica)
function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
           valor = valor.split(' ');
           this.nome = valor.shift();
           this.sobrenome = valor.join(' ');
           console.log(valor)
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} esta ${assunto}.`
        },

        altura,
        peso,

        // Getter 
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criarPessoa('Austin', 'Oliveira', 1.80, 70);
const p2 = criarPessoa('Ashley', 'Oliveira', 1.70, 60);
const p3 = criarPessoa('Manuela', 'Oliveira', 1.60, 65);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
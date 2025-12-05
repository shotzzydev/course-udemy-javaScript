
function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () =>  {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return; 
                this.realizarConta()
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizarConta();
        })
    };
    
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus()
    } 

    this.clearDisplay = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizarConta = () => {
        try {
            const soma = eval(this.display.value);
            this.display.value = soma

            if(!soma) {
                alert('Não foi possivel realizar a soma!');
                return;
            }
        } catch {
            alert('Não foi possivel realizar a soma!');
            return;
        }
    }
}

const calculadora = new Calculadora()
calculadora.inicia();
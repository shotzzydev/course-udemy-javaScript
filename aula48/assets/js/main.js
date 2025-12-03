const input = document.body.querySelector('.input-tarefa');
const button = document.body.querySelector('.btn-tarefa');
const tarefas = document.body.querySelector('.tarefas');
const buttonDelete = document.body.querySelector('.apagar');

function createli() {
    const li = document.createElement('li');
    return li;
}

input.addEventListener('keypress', function(event) {
    if(event.keyCode === 13) {
        if(!input.value) return
        criarTarefa(input.value)
        clearInput()
    }
});

function clearInput() {
    input.value = '';
    input.focus();
}

function createButtonDelete(li) {
    li.innerText += ' '
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Apagar'
    buttonDelete.setAttribute('class', 'apagar');
    li.appendChild(buttonDelete)
}

function removeButtonDelete(li) {
    document.removeChild(li)
}

function criarTarefa(textInput) {
    const li = createli()
    li.innerText = textInput
    tarefas.appendChild(li)
    createButtonDelete(li);
    saveTask()
} 

button.addEventListener('click', function() {
    if(!input.value) return;
    criarTarefa(input.value)
    clearInput()
});

addEventListener('click', function(event) {
    const el = event.target

    if(el.classList.contains('apagar')) {
        console.log(el.parentElement)
        el.parentElement.remove()
        saveTask();
    }
})

function saveTask() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function addTaskSave() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas) {
        criarTarefa(tarefa)
    }
}

addTaskSave()

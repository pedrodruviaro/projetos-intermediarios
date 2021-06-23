//variaveis
const botao = document.querySelector('#botao')
const input = document.querySelector('#input')
const lista = document.querySelector('#lista')
const span = document.querySelector('#span')

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []


//funcoes
const criaTarefa = (conteudo) => {
    const tarefa = document.createElement('li')
    tarefa.classList.add('list-group-item')
    tarefa.textContent = `${conteudo}`

    return tarefa
}

const adicionaTarefas = () => {

    tarefas.forEach(tarefa => {
        lista.append(criaTarefa(tarefa))
    });
}

const salvaNoLocalStorage = () => {

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}


//corpo de execucao
adicionaTarefas()

botao.addEventListener('click', ()=> {

    if(input.value.length === 0){
        span.classList.remove('invisivel')
        input.focus()

    } else {
        const tarefa = criaTarefa(input.value)
        lista.append(tarefa)
        tarefas.push(tarefa.textContent)

        salvaNoLocalStorage()

        span.classList.add('invisivel')
        input.value = ""
        input.focus()
    }
})

lista.addEventListener('dblclick', (e)=> {
    const conteudo = e.target.textContent
    const index = tarefas.indexOf(conteudo)

    if(index !== -1){
        tarefas.splice(index, 1)

        salvaNoLocalStorage()

        lista.innerHTML = ""

        adicionaTarefas()
    }
})
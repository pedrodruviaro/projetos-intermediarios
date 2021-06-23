const btnAdiciona = document.querySelector('.botao-adiciona')
const inputTarefa = document.querySelector('#input-todo')


export const novoBotaoEdita = (botaoCheck) => {
    const novoBotaoEdita = document.createElement('button')
    novoBotaoEdita.classList.add('botao-edita')
    novoBotaoEdita.innerHTML = `<i class="fas fa-edit"></i>`

    novoBotaoEdita.addEventListener('click', function(e) {
        const tarefa = e.target.previousSibling
        inputTarefa.value = tarefa.textContent
        inputTarefa.focus()

        botaoCheck.classList.remove('inativo')
        this.classList.add('inativo')
        btnAdiciona.classList.add('inativo')
    })

    return novoBotaoEdita
}

export const novoBotaoCheck = () => {
    const novoBotaoCheck = document.createElement('button')
    novoBotaoCheck.classList.add('check')
    novoBotaoCheck.classList.add('inativo')
    novoBotaoCheck.innerHTML = `<i class="fas fa-check"></i>`

    novoBotaoCheck.addEventListener('click', (e)=> {
        const tarefaEditada = inputTarefa.value
        const tarefa = e.target.parentElement.querySelector('.tarefa')
        const botaoEdita = e.target.parentElement.querySelector('.botao-edita')
        tarefa.textContent = tarefaEditada

        inputTarefa.value = ""
        inputTarefa.focus()
        novoBotaoCheck.classList.add('inativo')
        botaoEdita.classList.remove('inativo')
        btnAdiciona.classList.remove('inativo')
        
    })

    return novoBotaoCheck
}

export const novoBotaoDeleta = () => {
    const novoBotaoDeleta = document.createElement('button')
    novoBotaoDeleta.classList.add('botao-deleta')
    novoBotaoDeleta.innerHTML = `<i class="fas fa-trash-alt"></i>`

    novoBotaoDeleta.addEventListener('click', e => {
        const liNoDom = e.target.parentElement
        liNoDom.classList.add('fadeOut')

        setTimeout(() => {
            liNoDom.remove()
        }, 500);
    })

    return novoBotaoDeleta
}
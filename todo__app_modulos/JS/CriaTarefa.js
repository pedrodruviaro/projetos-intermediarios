import { novoBotaoCheck, novoBotaoDeleta, novoBotaoEdita } from "./Botoes.js"

const inputTarefa = document.querySelector('#input-todo')

export const criaTarefa = () => {
    const novoLi = document.createElement('li')
    novoLi.classList.add('lista-item')
    novoLi.innerHTML = `<p class="tarefa">${inputTarefa.value}</p>`

    const BotaoCheck = novoBotaoCheck()

    novoLi.append(novoBotaoEdita(BotaoCheck))
    novoLi.append(BotaoCheck)
    novoLi.append(novoBotaoDeleta())

    return novoLi
}
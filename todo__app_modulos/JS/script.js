import { criaTarefa } from "./CriaTarefa.js"


const btnAdiciona = document.querySelector('.botao-adiciona')
const inputTarefa = document.querySelector('#input-todo')
const listaDeTarefas = document.querySelector('.lista')

//coracao
btnAdiciona.addEventListener('click',  (e)=> {
    if(inputTarefa.value.length === 0){
        inputTarefa.focus()

    } else {
        listaDeTarefas.append(criaTarefa())
        inputTarefa.value = ''

    }
    
})



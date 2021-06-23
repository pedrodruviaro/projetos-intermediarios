//class
class Course {
    constructor(name, course, author){
        this.name = name
        this.course = course
        this.author = author
    }
}

// funcoes
function novoCard(objeto){
    const card = document.createElement('article')
    card.classList.add('card')
    
    card.append(criaDivInfoWrap('name', 'Name', objeto.name))
    card.append(criaDivInfoWrap('course', 'Course', objeto.course))
    card.append(criaDivInfoWrap('author', 'Author', objeto.author))
    
    return card
}

function criaDivInfoWrap(classe, texto, valorDoInput) {
    const div = document.createElement('div')
    div.classList.add('info-wrap')
    div.innerHTML =
    `
    <span class="span-${classe}">${texto}:</span><span class="user-${classe}">${valorDoInput}</span>
    
    `

    return div
}


// variaveis
const inputNome = document.querySelector('#input-name')
const inputCourse = document.querySelector('#input-course')
const inputAuthor = document.querySelector('#input-author')
const botaoSubmit = document.querySelector('.btn-submit')
const cards = document.querySelector('.cards')


//corpo de execucao
botaoSubmit.addEventListener('click', ()=> {
    const novoCurso = new Course(inputNome.value, inputCourse.value, inputAuthor.value)
    
    const novoCartao = novoCard(novoCurso)

    cards.append(novoCartao)

    inputNome.value = ""
    inputNome.focus()
    inputCourse.value = ""
    inputAuthor.value = ""
})
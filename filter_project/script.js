const input = document.querySelector('#input')

input.addEventListener('input', () => {
    console.log(input.value);

    const expressao = new RegExp(input.value, 'i')

    const itensLista = document.querySelectorAll('.lista-item')

    itensLista.forEach((item)=> {
        if(!expressao.test(item.textContent)){
            item.classList.add('invisivel')
        } else {
            item.classList.remove('invisivel')
        }
    })
})


// chamar modal
const botaoChamaModal = document.querySelector('.chama-modal')
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal-btn')

botaoChamaModal.addEventListener('click', ()=> {
    modal.classList.remove('invisivel')

    document.body.style.backgroundColor = 'rgba(51, 51, 51, 0.452)'

    modalBtn.onclick = () =>{
        modal.classList.add('invisivel')
        document.body.style.backgroundColor = 'rgba(51, 51, 51)'
    }
})

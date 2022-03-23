const burger = document.getElementById('burger')
const menu = document.getElementById('ul')

burger.addEventListener('click', () => {
    menu.classList.toggle('show')
})


const search = document.querySelector(".search-btn")
const background = document.querySelector('.white')
const clear = document.querySelector(".clear-btn")

search.addEventListener('click', () => {
    background.classList.add('wash')
})

clear.addEventListener('click', () => {
    background.classList.remove('wash')
})

const filter = document.querySelector(".catalog-btn")
const unhiddenItem = document.querySelector(".catalog-hid")

filter.addEventListener('click', () => {
    unhiddenItem.classList.toggle('showes')
})




const buttonHamburguer = document.querySelector('.cabecalho-menu-hamburguer');
const menuEsquerda = document.querySelector('.menu-esquerda');

buttonHamburguer.addEventListener('click', () => {
    menuEsquerda.classList.toggle('menu-esquerda--ativo')
})

/*futuramente o código da adição das classes será implementado!*/

const linkEsquerda1 = document.querySelector('.menu-esquerda-link-1');
const linkEsquerda2 = document.querySelector('.menu-esquerda-link-2');
const linkEsquerda3 = document.querySelector('.menu-esquerda-link-3');
const linkEsquerda4 = document.querySelector('.menu-esquerda-link-4');
const linkEsquerda5 = document.querySelector('.menu-esquerda-link-5');
const linkEsquerda6 = document.querySelector('.menu-esquerda-link-6');

linkEsquerda1.addEventListener('click', () => {
    linkEsquerda1.classList.toggle('menu-esquerda-link--ativo')
})

linkEsquerda2.addEventListener('click', () => {
    linkEsquerda2.classList.toggle('menu-esquerda-link--ativo')
})

linkEsquerda3.addEventListener('click', () => {
    linkEsquerda3.classList.toggle('menu-esquerda-link--ativo')
})

linkEsquerda4.addEventListener('click', () => {
    linkEsquerda4.classList.toggle('menu-esquerda-link--ativo')
})

linkEsquerda5.addEventListener('click', () => {
    linkEsquerda5.classList.toggle('menu-esquerda-link--ativo')
})

linkEsquerda6.addEventListener('click', () => {
    linkEsquerda6.classList.toggle('menu-esquerda-link--ativo')
})

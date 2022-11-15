const buttonHamburguer = document.querySelector('.cabecalho-menu-hamburguer');
const menuEsquerda = document.querySelector('.menu-esquerda');

buttonHamburguer.addEventListener('click', () => {
    menuEsquerda.classList.toggle('menu-esquerda--ativo')
})

const linkEsquerda1 = document.querySelector('.menu-esquerda-link-1');
const linkEsquerda2 = document.querySelector('.menu-esquerda-link-2');
const linkEsquerda3 = document.querySelector('.menu-esquerda-link-3');
const linkEsquerda4 = document.querySelector('.menu-esquerda-link-4');
const linkEsquerda5 = document.querySelector('.menu-esquerda-link-5');
const linkEsquerda6 = document.querySelector('.menu-esquerda-link-6');

/*refatoracao array 1*/

const listaLinks = [linkEsquerda1,linkEsquerda2,linkEsquerda3,linkEsquerda4,linkEsquerda5,linkEsquerda6]

listaLinks.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('menu-esquerda-link--ativo')})    
});

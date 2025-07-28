import { iniciarMenuFixo } from './modules/menuFixed.js';
import { MoveTitolo } from './modules/titoloMover.js';
import { pegaElemento, substituirClass } from './modules/utils.js';
import { ModoDark } from './modules/botaoDark.js';
import { pesquisa } from './modules/pesquisa.js';

document.addEventListener('DOMContentLoaded', () =>{ //Iniciar Funçoes.
    iniciarMenuFixo();  //Menu fixado no topo quando rolar para cima.
    MoveTitolo(); //Mover Titolo quando a tela for pequena.
    ModoDark();
    pesquisa();
});

//Mudar Barra de pesquisa.
const botaoPesquisa = document.querySelector('.pesquisa__botao');
const pesquisaImg = pegaElemento('.pesquisa__botao--img')
const barraCresce = pegaElemento('#pesquisa__input') 
const linha = pegaElemento('.pesquisa__linha')
let primeiroClick = true;

let larguraDaTela = window.innerWidth;

function retirar() {
    substituirClass('.botoes__grid-botao--desaparece', 'botoes__grid-botao');
    substituirClass('.botoes--desaparece', 'botoes');

    barraCresce.classList.remove('tamanho')
    linha.classList.remove('tamanho')
    pesquisaImg.style.backgroundImage = 'url(./assets/img/icons/Search.png)'
    primeiroClick = true;
}

botaoPesquisa.addEventListener('click', () => {
    if (larguraDaTela < 767) {
        if (primeiroClick) {
            substituirClass('.botoes__grid-botao', 'botoes__grid-botao--desaparece');
            substituirClass('.botoes', 'botoes--desaparece');
            
            barraCresce.classList.add('tamanho')
            linha.classList.add('tamanho')
            pesquisaImg.style.backgroundImage = 'url(./assets/img/icons/angulo-circulo-direita.png)'
            primeiroClick = false;
        } else {
            retirar()
        }
    }
})

window.addEventListener('resize', function () {
    larguraDaTela = window.innerWidth;
    if (larguraDaTela > 767 && primeiroClick === false) {
        retirar()
    }
});

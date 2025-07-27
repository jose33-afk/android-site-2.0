import { iniciarMenuFixo } from './modules/menuFixed.js';
import { MoveTitolo } from './modules/titoloMover.js';
import { pegaElemento, substituirClass } from './modules/utils.js';
import { ModoDark } from './modules/botaoDark.js';

document.addEventListener('DOMContentLoaded', () =>{
    iniciarMenuFixo();  //Menu fixado no topo quando rolar para cima.
    MoveTitolo(); //Mover Titolo quando a tela for pequena.
    ModoDark();
});

//Mudar Barra de pesquisa.
const botaoPesquisa = document.querySelector('.pesquisa__botao');
const pesquisaImg = pegaElemento('.pesquisa__botao--img')
let primeiroClick = true;

let larguraDaTela = window.innerWidth;

function retirar() {
    substituirClass('.botoes__grid-botao--desaparece', 'botoes__grid-botao');
    substituirClass('.botoes--desaparece', 'botoes');

    pesquisaImg.style.backgroundImage = 'url(./assets/img/icons/Search.png)'
    primeiroClick = true;
}

botaoPesquisa.addEventListener('click', () => {
    console.log(`clicou largura ${larguraDaTela}`)
    if (larguraDaTela < 767) {
        if (primeiroClick) {
            substituirClass('.botoes__grid-botao', 'botoes__grid-botao--desaparece');
            substituirClass('.botoes', 'botoes--desaparece');
            
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

//Criar uma funçao pra crior elementos, usar para o menu
//Depois criar pastas pra por as funcoes
/*
  1 - //Monitora o movimento do scorll'
  2 - ultima posiçao pra saber se está descendo ou subindo
      se estiver aumentando esta descendo e se estiver diminuindo
      está subindo.
*/
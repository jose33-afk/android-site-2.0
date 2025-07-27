//Botão modo dark.
const Switch = document.querySelector('.switch__checkbox'); 

Switch.addEventListener('change', function () {
    const pegarBody = document.body;
    pegarBody.classList.toggle('body-dark', this.checked)
})

//Menu fixado no topo quando rolar para cima.
let posicaoAtual; //2

window.addEventListener('scroll', function() { //1
    const posicaoScroll = window.scrollY;
    const menu = document.querySelector('.botoes')
    const pesquisa = this.document.querySelector('#pesquisa__input')

    if (posicaoAtual > posicaoScroll && posicaoScroll !=0){
        menu.classList.add('fixo')
        pesquisa.style.display = 'none'
    } else {
        menu.classList.remove('fixo')
        pesquisa.style.display = 'block'

    }
    posicaoAtual = posicaoScroll
})

//Mover Titolo quando a tela for pequena.
const larguraFixed = window.innerWidth;
const divVerde = document.querySelector('.verde')
const titolo = document.querySelector('.inicio__titolo')


if (larguraFixed <= 767) { //Largura de tela fixa.
    mudarElement(divVerde, titolo)
}
 
function mudarElement (elementPai, elementFilho) {
    elementPai.appendChild(elementFilho)
}

window.addEventListener('resize', function () { //Largura de tela responsiva.
    let larguraTela = window.innerWidth;
    const divInicio = document.querySelector('.inicio')

    if (larguraTela <= 767) {
        mudarElement(divVerde, titolo)
    } else {
        divInicio.appendChild(titolo)
    }
})

//mobile.
function pegaElemento (nomeElement, umOumais=1) {
    if (umOumais > 1) {
        return document. querySelectorAll(nomeElement);
    } else {
         return document.querySelector(nomeElement);
    }
}

function substituirClass (elementAnt, elementNov) {
    if (elementAnt.includes('.') || elementAnt.includes('#')) {
        const elementAntigo = pegaElemento(elementAnt);

        if(elementAntigo) {//verificar se existe.
            elementAnt = elementAnt.replace('.', '');

            if (elementNov.includes('.')) {
                elementNov = elementNov.replace('.', '');
            }

            elementAntigo.classList.replace(elementAnt, elementNov);
        } else {
            console.log(`[ERRO] elemento não encontrado! ${elementAnt}`)
        }
    } else {
        console.log('[ERRO] Faltou o ponto no elementAnt')
    }
}

if (larguraFixed <= 767) {
    //lupa muda de lugar.
    const botaoPesquisa = document.querySelector('.pesquisa__botao');
    let primeiroClick = true;

    botaoPesquisa.addEventListener('click', () => {
        const pesquisaImg = pegaElemento('.pesquisa__botao--img')
    
        if (primeiroClick) {
            substituirClass('.botoes__grid-botao', 'botoes__grid-botao--desaparece')

            pegaElemento('.botoes').classList.replace('botoes', 'botoes--desaparece')

            pesquisaImg.style.backgroundImage = 'url(/assets/img/icons/angulo-circulo-direita.png)'
            primeiroClick = false;

        } else {
            pegaElemento('.botoes__grid-botao--desaparece').classList.replace('botoes__grid-botao--desaparece', 'botoes__grid-botao')
            
            pegaElemento('.botoes--desaparece').classList.replace('botoes--desaparece', 'botoes')
       
            pesquisaImg.style.backgroundImage = 'url(/assets/img/icons/Search.png)'
            primeiroClick = true;
        }
    })
}      

//Criar uma funçao pra crior elementos, usar para o menu
//Depois criar pastas pra por as funcoes
/*
  1 - //Monitora o movimento do scorll'
  2 - ultima posiçao pra saber se está descendo ou subindo
      se estiver aumentando esta descendo e se estiver diminuindo
      está subindo.
*/
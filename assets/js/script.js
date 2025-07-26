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
window.addEventListener('resize', function () {
    let larguraTela = window.innerWidth;
    const divVerde = document.querySelector('.verde')
    const titolo = document.querySelector('.inicio__titolo')
    const divInicio = document.querySelector('.inicio')

    if (larguraTela <= 767) {
        divVerde.appendChild(titolo)
    } else {
        divInicio.appendChild(titolo)
    }
})


//Criar uma funçao pra crior elementos, usar para o menu

/*
  1 - //Monitora o movimento do scorll'
  2 - ultima posiçao pra saber se está descendo ou subindo
      se estiver aumentando esta descendo e se estiver diminuindo
      está subindo.
*/
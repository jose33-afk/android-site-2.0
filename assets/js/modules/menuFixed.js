//Menu fixado no topo quando rolar para cima.
let posicaoAtual; //2

function iniciarMenuFixo () {
window.addEventListener('scroll', function () { //1
    const posicaoScroll = window.scrollY;
    const menu = document.querySelector('.botoes')
    const botaoNav = this.document.querySelector('.botoes__botao.navegar') //1
    const pesquisa = document.querySelector('.pesquisa')

    if (posicaoAtual > posicaoScroll && posicaoScroll !=0){
        menu.classList.add('fixo')
        pesquisa.style.display = 'none'
        botaoNav.style.display = 'none'

    } else {
        menu.classList.remove('fixo')
        pesquisa.style.display = 'block'
        botaoNav.style.display = 'block'
    }
    posicaoAtual = posicaoScroll
})
}

export { iniciarMenuFixo };

/*
  1 - iria dar um traballho desgraçado pra fazer funcionar
      o menu lateral.
*/
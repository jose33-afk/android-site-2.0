//Menu fixado no topo quando rolar para cima.
let posicaoAtual; //2

function iniciarMenuFixo () {
window.addEventListener('scroll', function () { //1
    const posicaoScroll = window.scrollY;
    const menu = document.querySelector('.botoes')
    const pesquisa = document.querySelector('.pesquisa')

    if (posicaoAtual > posicaoScroll && posicaoScroll !=0){
        menu.classList.add('fixo')
        pesquisa.style.display = 'none'

    } else {
        menu.classList.remove('fixo')
        pesquisa.style.display = 'block'

    }
    posicaoAtual = posicaoScroll
})
}

export { iniciarMenuFixo };
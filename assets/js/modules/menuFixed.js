import { pesquisaOn, todosP } from "./pesquisa.js";
import { pegaElemento } from "./utils.js";

//Menu fixado no topo quando rolar para cima.
let posicaoAtual; //2

function iniciarMenuFixo () {
    window.addEventListener('scroll', function () { //1
        const posicaoScroll = window.scrollY;
        const menu = pegaElemento('.botoes')
        const botaoNav = pegaElemento('.botoes__botao.navegar') //1
        const pesquisa = pegaElemento('.pesquisa')
        const bntant = pegaElemento('.botoes__botao.ant')
        const bntProx = pegaElemento('.botoes__botao.prox')

        if (posicaoAtual > posicaoScroll && posicaoScroll !=0){
            menu.classList.add('fixo')
            pesquisa.style.display = 'none'
            botaoNav.style.display = 'none'

            if (pesquisaOn.Ativo == 'on') {
                bntant.style.display = 'block';
                bntProx.style.display = 'block'
            }
            
        } else {
            menu.classList.remove('fixo')
            pesquisa.style.display = 'block'
            botaoNav.style.display = 'block'

            if (pesquisaOn.Ativo == 'on') {
                bntant.style.display = 'none';
                bntProx.style.display = 'none';
            }
        }
        posicaoAtual = posicaoScroll
        
        if (posicaoScroll === 0) {
            todosP.forEach(p => p.setAttribute('data-mark', 'off'))
            pesquisaOn.Ativo = 'off'
        }
    })
}

export { iniciarMenuFixo };

/*
  1 - iria dar um traballho desgraçado pra fazer funcionar
      o menu lateral.
*/
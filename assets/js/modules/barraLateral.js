import { pegaElemento } from "./utils.js"
const botaoNavegar = pegaElemento('.botoes__botao.navegar');

botaoNavegar.addEventListener('click', mostrarBarraLateral);

function mostrarBarraLateral () {
   const menu = document.querySelector('.main__menu')
   menu.classList.toggle('ativo')
}

export { mostrarBarraLateral };


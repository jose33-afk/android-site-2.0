import { pegaElemento } from "./utils.js"
import  { nomesPesquisar } from "./pesquisa.js"
const botaoNavegar = pegaElemento('.botoes__botao.navegar');

botaoNavegar.addEventListener('click', mostrarBarraLateral);

function mostrarBarraLateral () {
   const menu = document.querySelector('.main__menu')
   menu.classList.toggle('ativo')
   menu.style.height = (window.innerHeight - 110) + "px";
   if (window.innerWidth <= 767) {
      menu.style.height = (window.innerHeight - 115) + "px"; //1
   }
}

export { mostrarBarraLateral };

console.log(window.innerHeight)

/*
   1 - Pra transformar em + "px" pra tranformar em uma string, assim ele aceita.
 
*/
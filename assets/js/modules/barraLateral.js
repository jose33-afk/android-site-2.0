import { pegaElemento } from "./utils.js"
import  { nomesPesquisar } from "./pesquisa.js"
import { cacarElement } from "./pesquisa.js";
const botaoNavegar = pegaElemento('.botoes__botao.navegar');
const menu = document.querySelector('.main__menu')

botaoNavegar.addEventListener('click', mostrarBarraLateral);



function mostrarBarraLateral () {
   
   const menuLista = pegaElemento('.menu__lista--item')
   menu.classList.toggle('ativo')

   menu.style.height = (window.innerHeight - 107) + "px"; //Altura responsiva
 

   inserirLista(menuLista)
}

function inserirLista(ElementInserir) {
   nomesPesquisar.forEach(objeto => {
      const nomeDoOjeto = Object.keys(objeto);
      let nomeDoIdFormatado = objeto[nomeDoOjeto].replaceAll('-', ' ')

      console.log(nomeDoIdFormatado)
      ElementInserir.innerHTML += `
         <li class="menu__lista--item">${nomeDoIdFormatado}</li>
      `
   })
}

export { mostrarBarraLateral };


/*
   1 - Pra transformar em + "px" pra tranformar em uma string, assim ele aceita.
       innerHeight - pega a altura da viwePort, tamanho visivel sem pegar a altura completa do site
*/
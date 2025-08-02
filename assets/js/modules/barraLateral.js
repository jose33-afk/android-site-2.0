import { pegaElemento } from "./utils.js"
import  { nomesPesquisar } from "./pesquisa.js"
import { cacarElement } from "./pesquisa.js";
const botaoNavegar = pegaElemento('.botoes__botao.navegar');
const menu = document.querySelector('.main__menu')

//Mostrar e remover quando clicar no botao.
botaoNavegar.addEventListener('click', mostrarBarraLateral);

function mostrarBarraLateral () {
   const menuLista = pegaElemento('.menu__lista--item')
   let AlturaDaTelaFixa = window.innerHeight;

   menu.classList.toggle('ativo')
   menu.style.height = (AlturaDaTelaFixa - 107) + "px"; //Altura responsiva.
   
   inserirLista(menuLista)
}

//Para inserir os titolos de pesquisa na lista do menu lateral.
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

//Remover barra lateral quando rolar pra baixo.
const posicaoScrollFixa = window.scrollY;
let posicaoScroll = posicaoScrollFixa;

window.addEventListener('scroll', () => {
   posicaoScroll = window.scrollY; // 2 
   if (posicaoScrollFixa != posicaoScroll) {
      menu.classList.remove('ativo')
   }
})

export { mostrarBarraLateral };


/*
   1 - Pra transformar em + "px" pra tranformar em uma string, assim ele aceita.
       innerHeight - pega a altura da viwePort, tamanho visivel sem pegar a altura completa do site

   2 - Atualiza so que nao consigo ver no console log fora do evento
*/
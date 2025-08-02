import { pegaElemento } from "./utils.js"
import  { nomesPesquisar } from "./pesquisa.js"
import { cacarElement } from "./pesquisa.js";
const botaoNavegar = pegaElemento('.botoes__botao.navegar');
const menu = pegaElemento('.main__menu')

//Carrega a lista de titolos
inserirLista(pegaElemento('.menu__lista'))  //mobile tava bugado 

//Mostrar e remover quando clicar no botao.
botaoNavegar.addEventListener('click', mostrarBarraLateral);

function mostrarBarraLateral () {
   let AlturaDaTelaFixa = window.innerHeight;
   menu.classList.toggle('ativo')
   menu.style.height = (AlturaDaTelaFixa - 107) + "px"; //Altura responsiva.
}

//Insere os titolos na lista do menu lateral.
function inserirLista(ElementInserir) {
   ElementInserir.innerHTML = `<li class="menu__lista--item">Titolos</li>` //Titolo 3

   nomesPesquisar.forEach(objeto => {
      const nomeDoOjeto = Object.keys(objeto);
      let nomeDoIdFormatado = objeto[nomeDoOjeto].replaceAll('-', ' ')

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
   3 - zera a lista pra não exibir repitidos
*/
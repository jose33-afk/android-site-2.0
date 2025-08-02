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
   menu.style.height = (AlturaDaTelaFixa - 105) + "px"; //Altura responsiva.
}

//Insere os titolos na lista do menu lateral.
function inserirLista(ElementInserir) {
   ElementInserir.innerHTML = `<li class="menu__lista--item">Titolos</li>` //Titolo 3

   nomesPesquisar.forEach(objeto => {
      const nomeDoOjeto = Object.keys(objeto);
      let nomeDoIdFormatado = objeto[nomeDoOjeto].replaceAll('-', ' ')
      nomeDoIdFormatado = PrimeriaLetraMausc(nomeDoIdFormatado)

      ElementInserir.innerHTML += `
         <li class="menu__lista--item">${nomeDoIdFormatado}</li>
      `
   })
}

//Primeira letra maiuscula.
function PrimeriaLetraMausc (string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
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

//function pesquisaPorTitolo () {
   const listaDelinhas = pegaElemento('.menu__lista--item', 2)
   listaDelinhas.shift()
   console.log(listaDelinhas[0]);  /*tava fazendo a funcao pra pegar os nomes 
   colocar os hifes de volta e chamar o pesquisa.*/

//}


export { mostrarBarraLateral };


/*
   1 - Pra transformar em + "px" pra tranformar em uma string, assim ele aceita.
       innerHeight - pega a altura da viwePort, tamanho visivel sem pegar a altura completa do site

   2 - Atualiza so que nao consigo ver no console log fora do evento
   3 - zera a lista pra não exibir repitidos
*/
import { pegaElemento } from "./utils.js";
import { formatarInput } from "./formatarinput.js";
import { dadosPesquisa } from "./pesquisadados.js";
import { removerAcentoArry } from "./utils.js";
import { botoes } from "./botoesPesquisa.js";

const pesquisaOn = { Ativo: "off" }; //botoes prox e anterior
const todosP = pegaElemento("p", 2); //global

const cacarElement = (pesquisa) => {
  const dadosPs = dadosPesquisa;
  let templv;
  let conteudo = [];
  const indexP = [];

  dadosPs.forEach((Element) => {
    //cada item da array
    for (let i in Element) {
      //cada instancia i posicao/chave
      conteudo = removerAcentoArry(Element.conteudo);
      templv = conteudo.find((palavra) => palavra == pesquisa);

      if (templv) {
        //1
        if (indexP.find((item) => item === Element.num) == undefined)
          indexP.push(Element.num);
      }
    }
  });

  if (indexP.length >= 1) botoes(indexP);
  else console.log("Pesquisa n encontrada ou n existe!"); //alerta pesonalizado!!
  console.log(indexP.length);
  if (indexP.length > 1) pesquisaOn.Ativo = "on";
};

//Marcacao e rolar ate a posicao da pesquisa.
function rolar(index) {
  let posP = document.querySelectorAll("p")[index];

  todosP.forEach((p) => p.setAttribute("data-mark", "off"));
  posP.setAttribute("data-mark", "yellow");

  posP.scrollIntoView({
    //1
    behavior: "smooth",
    block: "start", // 'start' = topo da tela
  });
}

function pesquisa() {
  const input = pegaElemento("#pesquisa__input");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (input.value.length != 0) {
        cacarElement(formatarInput(input.value));
      } else {
        alert("Você precisa digitar para pesquisar...");
      }
    }
  });
}

export { pesquisa, pesquisaOn, todosP, rolar };

/*
    pega a posicao exata do elemento na view port muito melhor que o 
    windonsToscroll
*/

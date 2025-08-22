import { pegaElemento } from "./utils.js";
import { formatarInput } from "./formatarinput.js"
import { dadosPesquisa } from "./pesquisadados.js";
import { removerAcentoArry } from "./utils.js";

const cacarElement = (pesquisa) => {
    const dadosPs = dadosPesquisa;
    let templv; 
    let conteudo = [];
    const historyPs = [];
    const indexP = [];

    dadosPs.forEach(Element => { //cada item da array
        for (let i in Element) { //cada instancia i posicao/chave
            conteudo = removerAcentoArry(Element.conteudo);
            templv = conteudo.find(palavra => palavra == pesquisa)

            if (templv) { //1
                historyPs.push(Element.posicao)
                if (indexP.find(item => item === Element.num) == undefined) indexP.push(Element.num);  
            }
        }
    })

    if (historyPs.length >= 1) rolar(historyPs, indexP);
    else console.log('Pesquisa n encontrada ou n existe!');//alerta pesonalizado!!
}


function rolar(posicao, index) {
    const todosP = pegaElemento('p', 2);
    const posP = document.querySelectorAll('p')[index[0]]

    todosP.forEach(p => p.setAttribute('data-mark', 'off'))
    posP.setAttribute('data-mark', 'yellow')

    setTimeout(() => {
        window.scrollTo({
            top:posicao[0],
            behavior: 'smooth'
        })
    })
}

function pesquisa () {
    const input = pegaElemento('#pesquisa__input');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (input.value.length != 0) {
                cacarElement(formatarInput(input.value))
            } else {
                alert('Você precisa digitar para pesquisar...')
            }
        }
    })
}

export { pesquisa};

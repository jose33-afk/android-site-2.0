import { pegaElemento } from "./utils.js";
import { formatarInput } from "./formatarinput.js"
import { dadosPesquisa } from "./pesquisadados.js";


const cacarElement = (pesquisa) => {
    const dadosPs = dadosPesquisa;

    dadosPs.forEach(Element => { //cada item da array
        for (let i in Element) { //cada instancia
            console.log(`Posicao:${Element.posicao} conteudo ${Element.conteudo}`)
        }
    })
}

/*function cacarElement (inputPesquisa) {
    let nomeDoIdDoElemento;
    
    nomesPesquisar.forEach(nome => {
        const nomeDoOjeto = Object.keys(nome);
    
        if (nomeDoOjeto == inputPesquisa) {
            nomeDoIdDoElemento = nome[nomeDoOjeto] // 1
            return;
        }
    })

    if (nomeDoIdDoElemento == undefined) {
        alert('Não encontrado ou não existe.')
    } else {
        rolar(nomeDoIdDoElemento)
    }
}



function rolar(IdElement) { 
    const element = document.querySelector(`#${IdElement}`)

    const posicaoDoElement = element.offsetTop;
    console.log(posicaoDoElement)

    setTimeout(() => {
            window.scrollTo({
                top:posicaoDoElement,
                behavior: 'smooth'
            })
    }, 1000)
}*/


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

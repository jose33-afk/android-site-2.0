import { pegaElemento } from "./utils.js";
import { formatarInput } from "./formatarinput.js"
import { dadosPesquisa } from "./pesquisadados.js";
import { removerAcentoArry } from "./utils.js";

const cacarElement = (pesquisa) => {
    const dadosPs = dadosPesquisa;
    let posicaoElm;
    let templv;
    let conteudo = [];

    dadosPs.forEach(Element => { //cada item da array
        for (let i in Element) { //cada instancia i posicao/chave
            conteudo = removerAcentoArry(Element.conteudo);
            templv = conteudo.find(palavra => palavra == pesquisa)
            if (templv) {
                console.log(`Posicao:${Element.posicao}, |Palavra pesquisada ${templv}`) //1
            }
            
        }
    })
}
/*
    Como tem mais de uma opcao por um bnt pra proxima posicao e anterior, essa parte e so colocar uma variavel pra guardar a posicao anterior.

*/


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

*/
//const rolar = (element) => {

//}
 /*
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

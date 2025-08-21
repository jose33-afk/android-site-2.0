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
                console.log(`Posicao:${Element.posicao}, |Palavra pesquisada ${templv}`) // linha somente pra testes.

                historyPs.push(Element.posicao)
                if (indexP.find(item => item === Element.num) == undefined) indexP.push(Element.num);
            }
        }
    })

    if (historyPs.length >= 1) rolar(historyPs, indexP);
    else console.log('Pesquisa n encontrada ou n existe!');//alerta pesonalizado!!
}

/*
    Como tem mais de uma opcao por um bnt pra proxima posicao e anterior, essa parte e so colocar uma variavel pra guardar a posicao anterior.

    1 - Agr so fazer as modificacoes no rolar passando element.posicao como parametro, element.posicao e number mas testa isso hj dnv.

    2 - dps que estiver funcionando retirar os ids desnecessarios e alterar a posicoa la no dadospesquisa.

*/


function rolar(posicoes, index) {
    console.log(posicoes)
    console.log(index)
    setTimeout(() => {
        window.scrollTo({
            top:posicoes[0],
            behavior: 'smooth'
        })
    })
}


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

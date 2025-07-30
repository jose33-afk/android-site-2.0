import { pegaElemento } from "./utils.js";

const nomesPesquisar = [ 
    {"AndyRubin":"andy-rubin-pai-do-android"},
    {"RichMiner":"rich-miner-cofundador"}
]

/*
let inputPesquisa = "RichMiner";//teste, deixar tudo mais usculas e sem espaços

let nomeDoIdDoElemento;

nomesPesquisar.forEach(nome => {
    const nomeDoOjeto = Object.keys(nome);
    
    if (nomeDoOjeto == inputPesquisa) {
        nomeDoIdDoElemento = nome[nomeDoOjeto] // 1
    }
    rolar(nomeDoIdDoElemento)
})
*/


function rolar(IdElement) { //FOIIIIIIIIIIIIIIIIII
   // const element = document.querySelector(`#${IdElement}`)
   const element = document.querySelector('#recursos-complementares-e-interatividade')
    const posicaoDoElement = element.offsetTop;
    console.log(posicaoDoElement)

   setTimeout(() => {
        window.scrollTo({
            top:posicaoDoElement,
            behavior: 'smooth'
        })
    }, 1000)
}


rolar()




function pesquisa () {
    const input = pegaElemento('#pesquisa__input');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            
            if (input.value.length != 0) {
                console.log('Tem valor')
            } else {
                alert('Você precisa digitar para pesquisar...')
            }
        }
    })
}

export { pesquisa };

/*
    1 - é porque eu so tenho um elemento dentro e ele é o AndyRubin ou outro.
*/
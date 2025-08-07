import { pegaElemento } from "./utils.js";
import { formatarInput } from "./formatarinput.js"

export const nomesPesquisar = [
    // Pessoas com IDs específicos
    {"andyrubin": "andy-rubin-pai-do-android"},
    {"richminer": "rich-miner-cofundador"},
    {"nicksears": "nick-sears-cofundador"},
    {"chriswhite": "chris-white-cofundador"},
    {"larrypage": "larry-page-cofundador-google"}, //Adicionar - pra poder trocar por espaço com replaceAll, alterar os ids tbm, e adicionar os nomes aqui na lista, 
    //fazer isso quando terminar a parte estetica.
    {"sergeybrin": "sergey-brin-cofundador-google"},
    {"sundarpichai": "sundar-pichai-ceo-google"},
    
    // Seções principais (com IDs de cabeçalho)
    {"introducao": "introducao"},
    {"origensefundacao": "origens-e-fundacao-2003-2005"},
    {"desenvolvimento": "desenvolvimento-e-primeira-versao-2007-2008"},
    {"primeirasevolucoes": "primeiras-evolucoes-2009-2010"},
    {"consolidacao": "consolidacao-e-crescimento-2010-2013"},
    {"materialdesign": "era-material-design-2014-2016"},
    {"maturidade": "maturidade-e-inteligencia-2016-2019"},
    {"androidmoderno": "android-moderno-2019-2024"},
    {"androidbrasil": "android-no-brasil"},
    {"ecossistema": "ecossistema-e-tecnologias"},
    {"cronologia": "cronologia-detalhada-e-marcos"},
    {"recursos": "recursos-complementares-e-interatividade"},
    
    // Dispositivos históricos (com IDs específicos)
    {"htcdream": "htc-dream-t-mobile-g1-2008-primeiro-android"},
    {"tmobileg1": "htc-dream-t-mobile-g1-2008-primeiro-android"},
    {"motoroladroid": "motorola-droid-2009"},
    {"samsunggalaxys": "samsung-galaxy-s-2010"},
    {"galaxynexus": "galaxy-nexus-2011"},
    {"nexus7": "nexus-7-2012"},
    {"motox": "moto-x-2013"},
    {"nexus5": "nexus-5-2013"},
    {"galaxynote7": "galaxy-note-7-2016"},
    {"pixel": "pixel-2016"},
    {"galaxys8": "galaxy-s8-2017"},
    {"pixel3": "pixel-3-2018"},
    {"galaxyfold": "galaxy-fold-2019"},
    {"pixel6": "pixel-6-2021"},
    {"motorolamilestone": "motorola-milestone-primeiro-no-brasil"}
]; //Aprender .json



function cacarElement (inputPesquisa) {
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



export { pesquisa, cacarElement };
/*
    1 - é porque eu so tenho um elemento dentro e ele é o AndyRubin ou outro.
*/
import { pegaElemento } from "./utils.js";

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
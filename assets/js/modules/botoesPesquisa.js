import { pegaElemento } from "./utils.js"
import { rolar } from "./pesquisa.js"

const botoes = (indexs) => {
    const bntProx = pegaElemento('.botoes__botao.prox');
    const bntAnt = pegaElemento('.botoes__botao.ant');
    let contIndex = 0;
    
    bntProx.addEventListener('click', () => {
        if (contIndex < indexs.length) {
            contIndex++  
        }
        rolar(indexs[contIndex])
    });

    bntAnt.addEventListener('click', () => {
        if (contIndex !== 0) { //!== nao !=
            contIndex--
        }
        
        rolar(indexs[contIndex])
    });

    rolar(indexs[0]) //Primeira vez
}

export { botoes };

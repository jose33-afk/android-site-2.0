function pegaElemento (nomeElement, umOumais=1) {
    if (umOumais > 1) {
        return Array.from(document.querySelectorAll(nomeElement));//1
    } else{
         return document.querySelector(nomeElement); 
    }   
}

function substituirClass (elementAnt, elementNov) {
    if (elementAnt.includes('.') || elementAnt.includes('#')) {
        const elementAntigo = pegaElemento(elementAnt);

        if(elementAntigo) {//verificar se existe.
            elementAnt = elementAnt.replace('.', '');

            if (elementNov.includes('.')) {
                elementNov = elementNov.replace('.', '');
            }

            elementAntigo.classList.replace(elementAnt, elementNov);
        } else {
            console.log(`[ERRO] elemento não encontrado! ${elementAnt}`)
        }
    } else {
        console.log('[ERRO] Faltou o ponto no elementAnt')
    }
}

export { pegaElemento, substituirClass };

/*
    1 - ele retorna uma nodeList que é mais fraca, nao é uma array de verdade 

*/
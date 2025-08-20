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

//Retorna uma arrya sem acentos e com tudo minusculo
function removerAcentoArry(elementos) {
    let palavraFmt = []
    elementos.forEach((palavra) => {
        palavra = palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        palavraFmt.push(palavra.toLowerCase())
    })
    return palavraFmt;
}

export { pegaElemento, substituirClass, removerAcentoArry };
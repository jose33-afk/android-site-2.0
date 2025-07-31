const regex = /^[A-Za-zÀ-ÿ0-9\s]+$/;

function formatarInput (string) {
    let stringForm = string;

    if (regex.test(stringForm)) {
        stringForm = limparString(stringForm)
    } else {
        alert("Nome pra pesquisa Inválido"); //fazer alertas personalizados, no placeholder
    }
        
    stringForm = stringForm.toLowerCase()//minusculas
    return stringForm
}


function limparString(Str) {
    Str = Str.replace(/\s/g, '');  //remove espaços 
    Str = Str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); //remove acentos.
    return Str
}

export { formatarInput };
//Botão modo dark.
function ModoDark () {
const Switch = document.querySelector('.switch__checkbox'); 

Switch.addEventListener('change', function () {
    const pegarBody = document.body;
    pegarBody.classList.toggle('body-dark', this.checked)
})
}

export { ModoDark };
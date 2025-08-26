//Botão modo dark.
function ModoDark() {
  const Switch = document.querySelector(".switch__checkbox");

  Switch.addEventListener("change", function () {
    const pegarBody = document.body;
    pegarBody.classList.toggle("body-dark", this.checked); //1
  });
}

export { ModoDark };

/*
    Se o elemento NÃO tem a classe ativo → ele adiciona.
    Se o elemento JÁ tem a classe ativo → ele remove.
*/

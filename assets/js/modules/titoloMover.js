//Mover Titolo quando a tela for pequena.
function MoveTitolo() {
  let larguraFixed = window.innerWidth;
  const divVerde = document.querySelector(".verde");
  const titolo = document.querySelector(".inicio__titolo");

  if (larguraFixed <= 767) {
    //Largura de tela fixa.
    mudarElement(divVerde, titolo);
  }

  function mudarElement(elementPai, elementFilho) {
    elementPai.appendChild(elementFilho);
  }

  window.addEventListener("resize", function () {
    //Largura de tela responsiva.
    let larguraTela = window.innerWidth;
    const divInicio = document.querySelector(".inicio");

    if (larguraTela <= 767) {
      mudarElement(divVerde, titolo);
    } else {
      divInicio.appendChild(titolo);
    }
  });
}

export { MoveTitolo };

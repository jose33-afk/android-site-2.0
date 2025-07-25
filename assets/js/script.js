const Switch = document.querySelector('.switch__checkbox'); 

Switch.addEventListener('change', function () {
    const pegarBody = document.body;
    pegarBody.classList.toggle('body-dark', this.checked)
})

let posicaoAtual; //2

window.addEventListener('scroll', function() { //1
    const posicaoScroll = window.scrollY;
    const menu = document.querySelector('.botoes')
    const pesquisa = this.document.querySelector('#pesquisa__input')

    if (posicaoAtual > posicaoScroll && posicaoScroll !=0){
        menu.classList.add('fixo')
        pesquisa.style.display = 'none'
    } else {
         menu.classList.remove('fixo')
        pesquisa.style.display = 'block'
    }
    posicaoAtual = posicaoScroll
})


/*
  1 - //Monitora o movimento do scorll'
  2 - ultima posiçao pra saber se está descendo ou subindo
      se estiver aumentando esta descendo e se estiver diminuindo
      está subindo.
*/
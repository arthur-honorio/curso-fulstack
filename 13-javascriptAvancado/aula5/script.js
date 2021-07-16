let botao = document.querySelector(`#auscutador`)

function cliquear () {
  console.log(`mensagem`)
  //REMOVE O ESCUTADOR DE EVENTOS DO BOTAO 'botao' DEPOIS DE UM CLIQUE
  // - - - - - - - - - -
  // botao.removeEventListener(`click`, cliquear)
}

botao.addEventListener(`click`, cliquear)

/*
EXECUTA cliquear AO SE CLICAR DUAS VEZES NO BOTÃO 'botao'
- - - - - - - - - -
botao.ondblclick = cliquear - 
 */

/*
RECARREGA A PÁGINA QUANDO O BOTÃO 'botao' É CLICADO
- - - - - - - - - -
botao.onclick = function () {
  window.location.reload()
}
 */


/*
ADICIONA O ESCUTADOR DE EVENTOS DE CLIQUE AO BOTAO 'botao' E EXECUTA A FUNÇÃO DE RECARREGAR A PÁGINA
- - - - - - - - - -
botao.addEventListener(`click`, () => window.location.reload()) */
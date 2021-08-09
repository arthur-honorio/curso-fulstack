quadrado = document.querySelector(`.quadrado`)

function acao(evento) {
  console.log(evento)
  console.log(evento.offsetX, evento.offsetY, evento.altKey)
}

quadrado.addEventListener(`mouseover`, acao)

quadrado.addEventListener(`dblclick`, acao)

// quadrado.addEventListener(`mousemove`, acao)

/* function acao(evento) {
  console.log(evento)
  console.log(evento.offsetX, evento.offsetY, evento.altKey)
}
quadrado.addEventListener(`mouseenter`, acao) */
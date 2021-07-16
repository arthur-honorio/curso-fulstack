

let crescente = document.querySelector(`#crescente`)
let decrescente = document.querySelector(`#decrescente`)
let maiorIntervalo = document.querySelector(`#maiorIntervalo`)
let menorIntervalo = document.querySelector(`#menorIntervalo`)
let parar = document.querySelector(`#parar`)

let numero = document.querySelector(`.numero`)
let mostrarVelocidade = document.querySelector(`.mostrarVelocidade`)

let count = 0
numero.innerText = count

let velInit = 100
let velocidade = velInit
let mudaVelocidade = 0 

let somador
let diminuidor

mostrarVelocidade.innerText = `${velocidade}ms`

maiorIntervalo.onclick = () => {
  velocidade -= mudaVelocidade
  if(velocidade < 0) {
    velocidade = 0
  }else if(0 <= velocidade && velocidade <= 15){
    mudaVelocidade = 1
  }else if(15 < velocidade && velocidade <= 50){
    mudaVelocidade = 5
  }else if(50 < velocidade && velocidade <= 100){
    mudaVelocidade = 10
  }else {
    mudaVelocidade = 100
  }
  mostrarVelocidade.innerText = `${velocidade}ms`
}
menorIntervalo.onclick = () => {
  velocidade += mudaVelocidade
  if(velocidade < 0) {
    velocidade = 0
  }else if(0 <= velocidade && velocidade < 15){
    mudaVelocidade = 1
  }else if(15 <= velocidade && velocidade < 50){
    mudaVelocidade = 5
  }else if(50 <= velocidade && velocidade < 100){
    mudaVelocidade = 10
  }else {
    mudaVelocidade = 100
  }
  mostrarVelocidade.innerText = `${velocidade}ms`
}

// let velocidadeNova
/* function funcaoVelocidade () {
  novaVelociade = parseInt(mostratVelocidadade.innerText)

  console.log(novaVelocidade)
}

mostrarVelocidade.addEventListener (`change`, funcaoVelocidade) */


function crescenteListener () {
  crescente.classList.add(`green`)
  decrescente.classList.remove(`red`)

  clearInterval(diminuidor)
  somador = setInterval(() => {
    count++
    numero.innerText = count
  },velocidade)
  crescente.removeEventListener(`click`, crescenteListener )
  decrescente.addEventListener (`click`, decrescenteListener)
  parar.addEventListener(`click`, parare)
}

function decrescenteListener () {
  decrescente.classList.add(`red`)
  crescente.classList.remove(`green`)

  clearInterval(somador)
  diminuidor = setInterval(() => {
    count--
    numero.innerText = count
  },velocidade)
  decrescente.removeEventListener(`click`, decrescenteListener)
  crescente.addEventListener (`click`, crescenteListener)
  parar.addEventListener(`click`, parare)
}

function parare () {
  crescente.classList.remove(`green`)
  decrescente.classList.remove(`red`)

  count = 0
  velocidade = velInit
  mostrarVelocidade.innerText = `${velInit}ms`
  numero.innerText = count
  if (somador) {
    clearInterval(somador)
  }
  if (diminuidor) {
    clearInterval(diminuidor)
  }
  crescente.addEventListener (`click`, crescenteListener)
  decrescente.addEventListener (`click`, decrescenteListener)

}

decrescente.addEventListener (`click`, decrescenteListener)
crescente.addEventListener (`click`, crescenteListener)
parar.addEventListener(`click`, parare)


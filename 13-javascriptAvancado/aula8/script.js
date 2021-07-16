let mostrarContador = document.querySelector(`#mostrarContador`)

let pausar = document.querySelector(`#pausar`)

let contador = 0

let intervalo = setInterval(() => {
  contador++
  mostrarContador.innerHTML = contador
}, 100)

pausar.onclick = () => {
  clearInterval(intervalo)
}

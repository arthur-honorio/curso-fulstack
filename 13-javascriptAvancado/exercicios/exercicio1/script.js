let mais = document.querySelector(`#mais`)
let menos = document.querySelector(`#menos`)

let numero = document.querySelector(`div`)

let count = 0
numero.innerText = count

mais.onclick = () => {
  count++
  numero.innerText = count
}

menos.onclick = () => {
  count--
  numero.innerText = count
}
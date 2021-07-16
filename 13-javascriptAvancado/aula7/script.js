let botao = document.querySelector(`.botao`)
let toast = document.querySelector(`.toast`)
let text = document.querySelector(`.input`)


console.log(text.__proto__)

/* 
function getValue() {
  toast.innerText = `Valor = ${text.value}`
}

text.onchange = getValue

botao.onclick = () => {
  toast.classList.add(`on`)
  setTimeout(() => toast.classList.remove(`on`),3000)
}
 */

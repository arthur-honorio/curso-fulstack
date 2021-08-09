let formulario = document.querySelector(`#formulario`)

let inputNome = document.forms[`formulario`][`nome`]
let inputEmail = document.forms[`formulario`][`email`]
let inputCidade = document.forms[`formulario`][`cidade`]

formulario.onsubmit = (evento) => {
  evento.preventDefault()
  let temErro = false

  if(!inputNome.value){
    temErro = true
    inputNome.classList.add(`erro`)
    inputNome.nextSibling.nextSibling.innerText = `<- Campo Obrigatório`
  }else{
    inputNome.classList.remove(`erro`)
    inputNome.nextSibling.nextSibling.innerText = ``    
  }

  if(!inputEmail.value){
    temErro = true
    inputEmail.classList.add(`erro`)
    inputEmail.nextSibling.nextSibling.innerText = `<- Campo Obrigatório`
  }else{
    inputEmail.classList.remove(`erro`)
    inputEmail.nextSibling.nextSibling.innerText = ``    
  }

  if(!inputCidade.value){
    temErro = true
    inputCidade.classList.add(`erro`)
    inputCidade.nextSibling.nextSibling.innerText = `<- Campo Obrigatório`

  }else{
    inputCidade.classList.remove(`erro`)
    inputCidade.nextSibling.nextSibling.innerText = ``    
  }
  console.log(temErro)
  if(!temErro){
    formulario.submit()
  }
}
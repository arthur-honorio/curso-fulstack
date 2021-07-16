let formulario = document.forms[`local`]
let inputEstados = document.forms[`local`][`estados`]
let inputCidades = document.forms[`local`][`cidades`]
let labelCidades = inputCidades.parentElement.classList

const cidades = {
  sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
  rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

let listaCidadesSp = `<option value="">Selecione  ---------</option>`
let listaCidadesRj = `<option value="">Selecione  ---------</option>`

labelCidades.add(`disabled`)

formulario.onsubmit = (evento) => {
  evento.preventDefault()

  if (!inputEstados.value){
    inputEstados.classList.add(`erro`)
    labelCidades.add(`disabled`)

    inputEstados.nextElementSibling.innerText = `<- Campo Obrigatório`

  } else if(inputEstados.value && !inputCidades.value){
    inputCidades.classList.add(`erro`)
    inputCidades.nextElementSibling.innerText = `<- Campo Obrigatório`

  } else {
    inputCidades.classList.remove(`erro`)
    inputEstados.classList.remove(`erro`)
    inputCidades.nextElementSibling.innerText = ``
    formulario.submit()
  }
}

inputEstados.onchange = () => {
  let estadoValue = inputEstados.value
  
  if(estadoValue===`sp`){

    inputCidades.onchange = () => {
      if(inputCidades.value){
        inputCidades.classList.remove(`erro`)
        inputCidades.nextElementSibling.innerText = ``
      }
    }

    labelCidades.remove(`disabled`)
    inputEstados.classList.remove(`erro`)
    inputEstados.nextElementSibling.innerText = ``
    
    if (listaCidadesSp===`<option value="">Selecione  ---------</option>`){

      cidades.sp.forEach((cidadeSp)=>{

        listaCidadesSp += `<option value="${cidadeSp}">${cidadeSp}</option>`

        inputCidades.innerHTML = listaCidadesSp
      })

    } else {
      inputCidades.innerHTML = listaCidadesSp
    }

  } else if (estadoValue===`rj`){

    inputCidades.onchange = () => {
      if(inputCidades.value){
        inputCidades.classList.remove(`erro`)
        inputCidades.nextElementSibling.innerText = ``
      }
    }

    labelCidades.remove(`disabled`)
    inputEstados.classList.remove(`erro`)
    inputEstados.nextElementSibling.innerText = ``

    if (listaCidadesRj===`<option value="">Selecione  ---------</option>`){

      cidades.rj.forEach((cidadeRJ)=>{

        listaCidadesRj += `<option value="${cidadeRJ}">${cidadeRJ}</option>`

        inputCidades.innerHTML = listaCidadesRj
      })
      
    } else {
      inputCidades.innerHTML = listaCidadesRj
    }
  } else {
    labelCidades.add(`disabled`)
  }
}

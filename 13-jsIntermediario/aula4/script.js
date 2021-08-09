let menuLateral = document.querySelector(`.menu-lateral`)
let botaoMenu = document.querySelector(`.botao-menu`)


function abrirEFecharMenu(){
  if(menuLateral.classList.contains(`mostrar`)){
    menuLateral.classList.remove(`mostrar`)
    botaoMenu.innerText = `Abrir Menu`
  } else {
    menuLateral.classList.add(`mostrar`)
    botaoMenu.innerText = `Fechar Menu`
  }
}

/* 
let aberto = false

function abrirEFecharMenu(){
  if(aberto === false){
    aberto = true
    menuLateral.classList.add(`mostrar`)
    botaoMenu.innerText = `Fechar Menu`
  } else {
    aberto = false
    menuLateral.classList.remove(`mostrar`)
    botaoMenu.innerText = `Abrir Menu`
  }
} */

